__d(
  "WAWebCommsBackendWorkerHandlers",
  [
    "Promise",
    "WAComms",
    "WADeprecatedSendIq",
    "WAErrors",
    "WAGzip",
    "WALogger",
    "WATransferableResult",
    "WAWap",
    "WAWebCommsConfigWorker",
    "WAWebPageLoadLogging",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t, a) {
      var i = function (a) {
        a instanceof o("WAErrors").Disconnected ||
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[comms][worker] route ",
                  " failed",
                ])),
              t,
            )
            .catching(r("getErrorSafe")(a))
            .sendLogs("comms-worker-handler-error");
      };
      return function () {
        var e;
        try {
          e = a.apply(void 0, arguments);
        } catch (e) {
          throw (i(e), e);
        }
        return e instanceof (u || (u = n("Promise")))
          ? e.catch(function (e) {
              throw (i(e), e);
            })
          : e;
      };
    }
    function d(e, t) {
      var r,
        a = o("WAWebCommsConfigWorker").createGetCommsConfigWorker(e),
        i = function (t) {
          return (u || (u = n("Promise"))).resolve(t);
        },
        l = new Map(),
        d = function () {
          return o("WAComms").singletonOrThrowIfUninitialized(
            "comms-worker-proxy",
          );
        };
      return {
        sendIq: c(
          "sendIq",
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n = e.abortToken,
                  r = e.attachToSocket,
                  a = e.iq,
                  s = e.timeoutSeconds,
                  u = e.type;
                yield t;
                var c = yield o("WAWap").decodeStanza(a, i),
                  m = new AbortController();
                l.set(n, m);
                try {
                  var p = yield d().sendIq({
                      attachToSocket: r,
                      iq: c,
                      signal: m.signal,
                      timeoutSeconds: s,
                      type: u,
                    }),
                    _ = o("WAWap").encodeStanza(p);
                  return o("WATransferableResult").withTransferables(_, [
                    _.buffer,
                  ]);
                } finally {
                  l.delete(n);
                }
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        abortSendIq: c(
          "abortSendIq",
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n,
                  r = e.abortToken;
                (yield t, (n = l.get(r)) == null || n.abort());
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        callStanza: c(
          "callStanza",
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n = e.flags,
                  r = e.stanza;
                yield t;
                var a = yield o("WAWap").decodeStanza(r, i);
                yield d().callStanza(a, n);
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        castStanza: c(
          "castStanza",
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n = e.flags,
                  r = e.stanza;
                yield t;
                var a = yield o("WAWap").decodeStanza(r, i),
                  l = d();
                if (!l.isSocketConnected()) {
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Comms has no open socket",
                      ])),
                  );
                  return;
                }
                l.castStanza(a, n);
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        sendPing: c(
          "sendPing",
          (r = n("asyncToGeneratorRuntime")).asyncToGenerator(function* () {
            return (yield t, d().sendPing());
          }),
        ),
        waitForNetworkHealth: c(
          "waitForNetworkHealth",
          r.asyncToGenerator(function* () {
            return (yield t, d().waitForNetworkHealth());
          }),
        ),
        startHandlingRequests: c(
          "startHandlingRequests",
          r.asyncToGenerator(function* () {
            return (yield t, d().startHandlingRequests());
          }),
        ),
        socketLoopIteration: c(
          "socketLoopIteration",
          r.asyncToGenerator(function* () {
            return (yield t, d().socketLoopIteration());
          }),
        ),
        softCloseSocket: c(
          "softCloseSocket",
          r.asyncToGenerator(function* () {
            var e, n;
            (yield t, (e = (n = d()).softCloseSocket) == null || e.call(n));
          }),
        ),
        stopComms: c(
          "stopComms",
          r.asyncToGenerator(function* () {
            return (yield t, d().stopComms());
          }),
        ),
        closeSocket: c(
          "closeSocket",
          r.asyncToGenerator(function* () {
            return (yield t, d().closeSocket());
          }),
        ),
        closeSocketInDebugMode: c(
          "closeSocketInDebugMode",
          r.asyncToGenerator(function* () {
            return (yield t, d().closeSocketInDebugMode());
          }),
        ),
        closeSocketAndPreventRetry: c(
          "closeSocketAndPreventRetry",
          r.asyncToGenerator(function* () {
            return (yield t, d().closeSocketAndPreventRetry());
          }),
        ),
        closeSocketAndPause: c(
          "closeSocketAndPause",
          r.asyncToGenerator(function* () {
            return (yield t, d().closeSocketAndPause());
          }),
        ),
        closeSocketAndResume: c(
          "closeSocketAndResume",
          r.asyncToGenerator(function* () {
            return (yield t, d().closeSocketAndResume());
          }),
        ),
        openSocketLoop: c(
          "openSocketLoop",
          r.asyncToGenerator(function* () {
            return (yield t, d().openSocketLoop());
          }),
        ),
        maybeResetSocketLoop: c(
          "maybeResetSocketLoop",
          r.asyncToGenerator(function* () {
            return (yield t, d().maybeResetSocketLoop());
          }),
        ),
        forceResetSocketLoop: c(
          "forceResetSocketLoop",
          r.asyncToGenerator(function* () {
            return (yield t, d().forceResetSocketLoop());
          }),
        ),
        forceAbortSocketConnection: c(
          "forceAbortSocketConnection",
          r.asyncToGenerator(function* () {
            return (yield t, d().forceAbortSocketConnection());
          }),
        ),
        onStreamErrorReceived: c(
          "onStreamErrorReceived",
          r.asyncToGenerator(function* () {
            return (yield t, d().onStreamErrorReceived());
          }),
        ),
        cancelDeadSocketTimer: c(
          "cancelDeadSocketTimer",
          r.asyncToGenerator(function* () {
            return (yield t, d().cancelDeadSocketTimer());
          }),
        ),
        deprecatedSendStanzaAndReturnAck: c(
          "deprecatedSendStanzaAndReturnAck",
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n = e.expectedAck,
                  r = e.stanza;
                yield t;
                var a = yield o("WAWap").decodeStanza(r, i),
                  l = yield o(
                    "WADeprecatedSendIq",
                  ).deprecatedSendStanzaAndReturnAck(a, n),
                  s = o("WAWap").encodeStanza(l);
                return o("WATransferableResult").withTransferables(s, [
                  s.buffer,
                ]);
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        createComms: c(
          "createComms",
          (function () {
            var r = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (r) {
                var l = r.passive,
                  s = r.pull;
                (o("WAWebPageLoadLogging").startPageLoadQplMeasure(
                  "createCommsWaitForWorkerState",
                ),
                  yield t,
                  o("WAWebPageLoadLogging").endPageLoadQplMeasure(
                    "createCommsWaitForWorkerState",
                  ));
                var c = a({ passive: l, pull: s });
                o("WAComms").startComms(
                  (function () {
                    var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (t, n, r) {
                        var a = o("WAWap").encodeStanza(t),
                          l = yield e.sendAndReceive(
                            "mainthread_comms",
                            "handleStanza",
                            { stanza: a, socketId: n, size: r },
                            !0,
                            void 0,
                            void 0,
                            [a.buffer],
                          );
                        return l instanceof Uint8Array
                          ? o("WAWap").decodeStanza(l, i)
                          : l;
                      },
                    );
                    return function (e, n, r) {
                      return t.apply(this, arguments);
                    };
                  })(),
                  c,
                  function (e) {
                    return (u || (u = n("Promise"))).resolve(
                      o("WAGzip").inflate(e),
                    );
                  },
                  !1,
                );
              },
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })(),
        ),
      };
    }
    l.createCommsWorkerHandlers = d;
  },
  98,
);
