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
      C = (function () {
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
              r = this.port;
            if (r) {
              var o = [],
                a = [];
              for (var i of n)
                if (i.type === "request") {
                  var l = i.content,
                    u = l.transferList,
                    c = babelHelpers.objectWithoutPropertiesLoose(l, e);
                  (u != null && a.push.apply(a, u),
                    o.push({ type: "request", content: c }));
                } else {
                  var d = i.content,
                    m = d.transferList,
                    p = babelHelpers.objectWithoutPropertiesLoose(d, s);
                  (m != null && a.push.apply(a, m),
                    o.push({ type: "result", content: p }));
                }
              var _ = n
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
              (n.forEach(function (e) {
                var r;
                t.$7(e, "outgoing");
                var o = t.openRequests.get(e.content.requestId);
                (o == null || (r = o.eventCallbacks) == null
                  ? void 0
                  : r.onSend) != null &&
                  o.eventCallbacks.onSend({
                    queueSize: n.length,
                    queueMsgs: _,
                  });
              }),
                r.postMessage(o, a.length > 0 ? a : void 0));
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
                h = i.requestId,
                C = i.silentLog;
              if (
                (C ||
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "Bridge ",
                        " request for ",
                        "",
                      ])),
                    h,
                    u,
                  ),
                (d == null ? void 0 : d.toClientId) != null &&
                  d.toClientId !== this.clientId)
              ) {
                C ||
                  o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "Bridge ",
                        " not intended for client ",
                        "",
                      ])),
                    h,
                    this.clientId,
                  );
                return;
              }
              var b = this.$1,
                v = {
                  type: "result",
                  content: {
                    requestId: h,
                    type: "handled",
                    result: {
                      payload: b.getAckPayoad(),
                      timestamp: Date.now(),
                    },
                    silentLog: C,
                    opts: d,
                  },
                };
              if ((this.$7(v, "outgoing"), t.postMessage([v]), s)) {
                var S = b.sendAndReceive(c, u, l, C, void 0, d).then(
                  function (n) {
                    var r = n,
                      a = null;
                    (n instanceof
                      o("WATransferableResult").TransferableResult &&
                      ((r = n.result), (a = n.transferList)),
                      e.$10(t, {
                        requestId: h,
                        type: "success",
                        result: r,
                        silentLog: C,
                        opts: d,
                        transferList: a,
                      }));
                  },
                  function (n) {
                    e.$10(t, {
                      requestId: h,
                      type: "error",
                      result: String(n),
                      silentLog: C,
                      opts: d,
                    });
                  },
                );
                o("WAPromiseManagement").preventGarbageCollection(S);
              } else b.fireAndForget(c, u, l, C, void 0, d);
            } else {
              a.type;
              var R = a.content,
                L = R.requestId,
                E = R.result,
                k = R.silentLog,
                I = R.type,
                T = this.$6(L);
              if (T !== this.clientId || this.processedRequests.has(L)) return;
              var D = this.openRequests.get(L);
              if (!D) {
                o("WALogger").WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "Bridge unrecognized result ",
                      "",
                    ])),
                  L,
                );
                return;
              }
              switch (I) {
                case "success":
                case "error": {
                  (this.openRequests.delete(L), this.processedRequests.add(L));
                  var x = D.resolver;
                  x
                    ? x(
                        I === "success"
                          ? E
                          : (y || (y = n("Promise"))).reject(
                              r("err")(E != null ? E : ""),
                            ),
                      )
                    : o("WALogger").ERROR(
                        f ||
                          (f = babelHelpers.taggedTemplateLiteralLoose([
                            "Bridge unexpected result to cast: ",
                            "",
                          ])),
                        E,
                      );
                  break;
                }
                case "handled":
                  try {
                    var $;
                    ($ = D.eventCallbacks) == null ||
                      $.onAck == null ||
                      $.onAck(E);
                  } catch (e) {
                    var P = r("getErrorSafe")(e);
                    o("WALogger").ERROR(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to execute onAck: ",
                          "",
                        ])),
                      P.message,
                    );
                  }
                  D.resolver ||
                    (this.openRequests.delete(L),
                    this.processedRequests.add(L));
                  break;
              }
            }
          }),
          t
        );
      })();
    function b(e, t, n, r, o) {
      return new C(e, n, t, r, o);
    }
    function v(e) {
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
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "absorbPortal: transferring request #",
              "",
            ])),
          t.requestId,
        ),
          n ? n(r.sendAndReceive(l, i, a, s)) : r.fireAndForget(l, i, a, s));
      });
    }
    ((l.CrossWorkerPortal = C),
      (l.attachPortal = b),
      (l.killPortalAndSendPendingToBridge = v));
  },
  98,
);
