__d(
  "WACrossWorkerPortal",
  [
    "FBLogger",
    "Promise",
    "WABridgeBatcher",
    "WALogger",
    "WALruCache",
    "WAPromiseManagement",
    "WATransferableResult",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["transferList"],
      s = ["transferList"],
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E = (function () {
        function t(e, t, n, r, a) {
          var i = this,
            l;
          if (
            ((this.port = null),
            (this.$2 = 1),
            (this.openRequests = new Map()),
            (this.listeners = new Set()),
            (a == null ? void 0 : a.useLRUCache) === !0)
          ) {
            var s,
              u = new (o("WALruCache").LruCache)({
                sizeLimit: (s = a.portalCacheSize) != null ? s : 100,
                getSize: function () {
                  return 1;
                },
              });
            this.processedRequests = {
              has: function (t) {
                return u.has(t);
              },
              add: function (t) {
                u.put(t, !0);
              },
            };
          } else {
            var c = new Set();
            this.processedRequests = {
              has: function (t) {
                return c.has(t);
              },
              add: function (t) {
                c.add(t);
              },
            };
          }
          ((this.$1 = e),
            (this.clientId = r),
            (this.config = a),
            (this.sendStream = new (o("WABridgeBatcher").BridgeBatcher)(
              t,
              function (e) {
                i.$3(e);
              },
              (l = this.config) == null ? void 0 : l.bridgeBatcherMaxTokens,
            )),
            n.forEach(function (t) {
              e.setNamespaceHandler(t, i.$4(t));
            }));
        }
        var a = t.prototype;
        return (
          (a.$5 = function () {
            var e = this.clientId != null ? this.clientId + "_" : "";
            return "" + e + this.$2++;
          }),
          (a.$6 = function (t) {
            var e = t.split("_");
            return e.length !== 2 ? null : e[0];
          }),
          (a.addListener = function (t) {
            var e = this;
            return (
              this.listeners.add(t),
              function () {
                return e.listeners.delete(t);
              }
            );
          }),
          (a.setPort = function (t) {
            var e = this;
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Bridge updating port",
                ])),
            ),
              (this.port = t),
              this.sendStream.cancel(),
              (t.onmessage = function (n) {
                if (e.port !== t) {
                  o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Bridge received msg on old port",
                      ])),
                  );
                  return;
                }
                var r = n.data;
                !r ||
                  !Array.isArray(r) ||
                  r.forEach(function (n) {
                    (e.$7(n, "incoming"), e.$8(t, n));
                  });
              }),
              this.openRequests.forEach(function (t) {
                var n = t.request;
                e.sendStream.addEvent({ type: "request", content: n });
              }));
          }),
          (a.getBridge = function () {
            return this.$1;
          }),
          (a.$4 = function (t) {
            var e = this;
            return function (n, r, o, a, i, l, s) {
              e.$9(t, n, r, o, a, i, l, s);
            };
          }),
          (a.$9 = function (t, n, o, a, i, l, s, u) {
            var e,
              c,
              m = this.$5(),
              p = babelHelpers.extends(
                { fromClientId: (e = this.clientId) != null ? e : void 0 },
                u,
              ),
              _ = {
                requestId: m,
                expectsResponse: !!a,
                namespace: t,
                name: n,
                arg: o,
                transferList: l,
                silentLog: i,
                opts: p,
              };
            if (((c = this.config) == null ? void 0 : c.onSendAcross) != null)
              try {
                this.config.onSendAcross(t, n, _.expectsResponse, o);
              } catch (e) {
                var f = r("getErrorSafe")(e);
                r("FBLogger")("wmi")
                  .catching(f)
                  .MUSTFIX(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to execute onSendAcross",
                      ])),
                  );
              }
            (this.openRequests.set(m, {
              request: _,
              resolver: a,
              eventCallbacks: s,
            }),
              this.sendStream.addEvent({ type: "request", content: _ }));
          }),
          (a.$10 = function (t, n) {
            t === this.port &&
              this.sendStream.addEvent({ type: "result", content: n });
          }),
          (a.$3 = function (n) {
            var t = this,
              a,
              i = this.port;
            if (i) {
              var l = [],
                u = new Set();
              for (var c of n)
                if (c.type === "request") {
                  var d = c.content,
                    _ = d.transferList,
                    f = babelHelpers.objectWithoutPropertiesLoose(d, e);
                  if (_ != null) for (var g of _) u.add(g);
                  l.push({ type: "request", content: f });
                } else {
                  var h = c.content,
                    y = h.transferList,
                    C = babelHelpers.objectWithoutPropertiesLoose(h, s);
                  if (y != null) for (var b of y) u.add(b);
                  l.push({ type: "result", content: C });
                }
              var v = n
                .map(function (e) {
                  var t,
                    n,
                    r,
                    o =
                      (t = (n = e.content.arg) == null ? void 0 : n.type) !=
                      null
                        ? t
                        : "";
                  return (
                    "" +
                    ((r = e.content.name) != null ? r : "") +
                    (o ? ":" + o : "")
                  );
                })
                .filter(Boolean);
              n.forEach(function (e) {
                var r;
                t.$7(e, "outgoing");
                var o = t.openRequests.get(e.content.requestId);
                (o == null || (r = o.eventCallbacks) == null
                  ? void 0
                  : r.onSend) != null &&
                  o.eventCallbacks.onSend({
                    queueSize: n.length,
                    queueMsgs: v,
                  });
              });
              var S,
                R = (a = this.config) == null ? void 0 : a.onSendBatch;
              if (R != null)
                try {
                  var L = [];
                  for (var E of n) E.type === "request" && L.push(E.content);
                  S = R(L);
                } catch (e) {
                  o("WALogger").ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "Bridge onSendBatch threw: ",
                        "",
                      ])),
                    r("getErrorSafe")(e).message,
                  );
                }
              try {
                i.postMessage(l, u.size > 0 ? Array.from(u) : void 0);
                try {
                  S == null || S();
                } catch (e) {
                  o("WALogger").ERROR(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "Bridge onSendBatchDone threw: ",
                        "",
                      ])),
                    r("getErrorSafe")(e).message,
                  );
                }
              } catch (e) {
                var k;
                if (
                  ((k = this.config) == null ? void 0 : k.onPortError) == null
                )
                  throw e;
                this.$11(i, e);
              }
            }
          }),
          (a.$11 = function (t, n) {
            var e = r("getErrorSafe")(n);
            if (e.name === "DataCloneError") {
              o("WALogger").ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "Bridge send dropped; payload already transferred or not cloneable: ",
                    "",
                  ])),
                e.message,
              );
              return;
            }
            (this.port === t && (this.port = null),
              o("WALogger").ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "Bridge send failed; port inaccessible (dropped dead port): ",
                    "",
                  ])),
                e.message,
              ));
            try {
              var a;
              (a = this.config) == null ||
                a.onPortError == null ||
                a.onPortError(e);
            } catch (e) {
              o("WALogger").ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "Bridge onPortError threw: ",
                    "",
                  ])),
                r("getErrorSafe")(e).message,
              );
            }
          }),
          (a.$7 = function (t, n) {
            this.listeners.forEach(function (e) {
              return e(t, n);
            });
          }),
          (a.$8 = function (t, a) {
            var e = this;
            if (a.type === "request") {
              var i = a.content,
                l = i.arg,
                s = i.expectsResponse,
                u = i.name,
                c = i.namespace,
                d = i.opts,
                m = i.requestId,
                p = i.silentLog;
              if (
                (p ||
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "Bridge ",
                        " request for ",
                        "",
                      ])),
                    m,
                    u,
                  ),
                (d == null ? void 0 : d.toClientId) != null &&
                  d.toClientId !== this.clientId)
              ) {
                p ||
                  o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "Bridge ",
                        " not intended for client ",
                        "",
                      ])),
                    m,
                    this.clientId,
                  );
                return;
              }
              var _ = this.$1,
                f = {
                  type: "result",
                  content: {
                    requestId: m,
                    type: "handled",
                    result: {
                      payload: _.getAckPayoad(),
                      timestamp: Date.now(),
                    },
                    silentLog: p,
                    opts: d,
                  },
                };
              this.$7(f, "outgoing");
              try {
                t.postMessage([f]);
              } catch (e) {
                var g;
                if (
                  ((g = this.config) == null ? void 0 : g.onPortError) == null
                )
                  throw e;
                this.$11(t, e);
              }
              if (s) {
                var R = _.sendAndReceive(c, u, l, p, void 0, d).then(
                  function (n) {
                    var r = n,
                      a = null;
                    (n instanceof
                      o("WATransferableResult").TransferableResult &&
                      ((r = n.result), (a = n.transferList)),
                      e.$10(t, {
                        requestId: m,
                        type: "success",
                        result: r,
                        silentLog: p,
                        opts: d,
                        transferList: a,
                      }));
                  },
                  function (n) {
                    e.$10(t, {
                      requestId: m,
                      type: "error",
                      result: String(n),
                      silentLog: p,
                      opts: d,
                    });
                  },
                );
                o("WAPromiseManagement").preventGarbageCollection(R);
              } else _.fireAndForget(c, u, l, p, void 0, d);
            } else {
              var E;
              a.type;
              var k = a.content,
                I = k.requestId,
                T = k.result,
                D = k.silentLog,
                x = k.type,
                $ = this.$6(I);
              if ($ !== this.clientId || this.processedRequests.has(I)) return;
              var P = this.openRequests.get(I);
              if (!P) {
                o("WALogger").WARN(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "Bridge unrecognized result ",
                      "",
                    ])),
                  I,
                );
                return;
              }
              if (
                ((E = this.config) == null ? void 0 : E.onReceiveAcross) != null
              )
                try {
                  this.config.onReceiveAcross(
                    P.request.namespace,
                    P.request.name,
                    x,
                  );
                } catch (e) {
                  var N = r("getErrorSafe")(e);
                  r("FBLogger")("wmi")
                    .catching(N)
                    .MUSTFIX(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to execute onReceiveAcross",
                        ])),
                    );
                }
              switch (x) {
                case "success":
                case "error": {
                  (this.openRequests.delete(I), this.processedRequests.add(I));
                  var M = P.resolver;
                  M
                    ? M(
                        x === "success"
                          ? T
                          : (L || (L = n("Promise"))).reject(
                              r("err")(T != null ? T : ""),
                            ),
                      )
                    : o("WALogger").ERROR(
                        v ||
                          (v = babelHelpers.taggedTemplateLiteralLoose([
                            "Bridge unexpected result to cast: ",
                            "",
                          ])),
                        T,
                      );
                  break;
                }
                case "handled":
                  try {
                    var w;
                    (w = P.eventCallbacks) == null ||
                      w.onAck == null ||
                      w.onAck(T);
                  } catch (e) {
                    var A = r("getErrorSafe")(e);
                    o("WALogger").ERROR(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to execute onAck: ",
                          "",
                        ])),
                      A.message,
                    );
                  }
                  P.resolver ||
                    (this.openRequests.delete(I),
                    this.processedRequests.add(I));
                  break;
              }
            }
          }),
          t
        );
      })();
    function k(e, t, n, r, o) {
      return new E(e, n, t, r, o);
    }
    function I(e) {
      var t;
      ((t = e.port) == null || t.close(),
        (e.port = null),
        e.sendStream.cancel());
      var n = e.openRequests;
      e.openRequests = new Map();
      var r = e.getBridge();
      n.forEach(function (e) {
        var t = e.request,
          n = e.resolver,
          a = t.arg,
          i = t.name,
          l = t.namespace,
          s = t.silentLog;
        (o("WALogger").LOG(
          R ||
            (R = babelHelpers.taggedTemplateLiteralLoose([
              "absorbPortal: transferring request #",
              "",
            ])),
          t.requestId,
        ),
          n ? n(r.sendAndReceive(l, i, a, s)) : r.fireAndForget(l, i, a, s));
      });
    }
    ((l.CrossWorkerPortal = E),
      (l.attachPortal = k),
      (l.killPortalAndSendPendingToBridge = I));
  },
  98,
);
