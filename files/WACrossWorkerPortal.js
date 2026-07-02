__d(
  "WACrossWorkerPortal",
  [
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
      R = (function () {
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
          (a.$9 = function (t, n, r, o, a, i, l, s) {
            var e,
              u = this.$5(),
              c = babelHelpers.extends(
                { fromClientId: (e = this.clientId) != null ? e : void 0 },
                s,
              ),
              d = {
                requestId: u,
                expectsResponse: !!o,
                namespace: t,
                name: n,
                arg: r,
                transferList: i,
                silentLog: a,
                opts: c,
              };
            (this.openRequests.set(u, {
              request: d,
              resolver: o,
              eventCallbacks: l,
            }),
              this.sendStream.addEvent({ type: "request", content: d }));
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
                  var p = c.content,
                    _ = p.transferList,
                    f = babelHelpers.objectWithoutPropertiesLoose(p, e);
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
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
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
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
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
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "Bridge send dropped; payload already transferred or not cloneable: ",
                    "",
                  ])),
                e.message,
              );
              return;
            }
            (this.port === t && (this.port = null),
              o("WALogger").ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
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
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
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
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
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
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
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
                var v;
                if (
                  ((v = this.config) == null ? void 0 : v.onPortError) == null
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
              a.type;
              var L = a.content,
                E = L.requestId,
                k = L.result,
                I = L.silentLog,
                T = L.type,
                D = this.$6(E);
              if (D !== this.clientId || this.processedRequests.has(E)) return;
              var x = this.openRequests.get(E);
              if (!x) {
                o("WALogger").WARN(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "Bridge unrecognized result ",
                      "",
                    ])),
                  E,
                );
                return;
              }
              switch (T) {
                case "success":
                case "error": {
                  (this.openRequests.delete(E), this.processedRequests.add(E));
                  var $ = x.resolver;
                  $
                    ? $(
                        T === "success"
                          ? k
                          : (S || (S = n("Promise"))).reject(
                              r("err")(k != null ? k : ""),
                            ),
                      )
                    : o("WALogger").ERROR(
                        C ||
                          (C = babelHelpers.taggedTemplateLiteralLoose([
                            "Bridge unexpected result to cast: ",
                            "",
                          ])),
                        k,
                      );
                  break;
                }
                case "handled":
                  try {
                    var P;
                    (P = x.eventCallbacks) == null ||
                      P.onAck == null ||
                      P.onAck(k);
                  } catch (e) {
                    var N = r("getErrorSafe")(e);
                    o("WALogger").ERROR(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to execute onAck: ",
                          "",
                        ])),
                      N.message,
                    );
                  }
                  x.resolver ||
                    (this.openRequests.delete(E),
                    this.processedRequests.add(E));
                  break;
              }
            }
          }),
          t
        );
      })();
    function L(e, t, n, r, o) {
      return new R(e, n, t, r, o);
    }
    function E(e) {
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
          v ||
            (v = babelHelpers.taggedTemplateLiteralLoose([
              "absorbPortal: transferring request #",
              "",
            ])),
          t.requestId,
        ),
          n ? n(r.sendAndReceive(l, i, a, s)) : r.fireAndForget(l, i, a, s));
      });
    }
    ((l.CrossWorkerPortal = R),
      (l.attachPortal = L),
      (l.killPortalAndSendPendingToBridge = E));
  },
  98,
);
