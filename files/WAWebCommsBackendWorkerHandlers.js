__d(
  "WAWebCommsBackendWorkerHandlers",
  [
    "WAComms",
    "WADeprecatedSendIq",
    "WAErrors",
    "WAGzip",
    "WALogger",
    "WATransferableResult",
    "WAWap",
    "WAWebBackendWorkerRegistrationState",
    "WAWebCommsConfigBase",
    "WAWebCommsConfigWorker",
    "WAWebCommsUnifiedSessionId",
    "WAWebPageLoadLogging",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t, n) {
      var a = function (a) {
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
          e = n.apply(void 0, arguments);
        } catch (e) {
          throw (a(e), e);
        }
        return e instanceof Promise
          ? e.catch(function (e) {
              throw (a(e), e);
            })
          : e;
      };
    }
    function c(e, t) {
      var n = o("WAWebCommsConfigWorker").createGetCommsConfigWorker(e),
        r = function (t) {
          return Promise.resolve(t);
        },
        a = new Map(),
        i = function () {
          return o("WAComms").singletonOrThrowIfUninitialized(
            "comms-worker-proxy",
          );
        };
      return {
        sendIq: u("sendIq", async function (e) {
          var n = e.abortToken,
            l = e.attachToSocket,
            s = e.iq,
            u = e.timeoutSeconds,
            c = e.type;
          await t;
          var d = await o("WAWap").decodeStanza(s, r),
            m = new AbortController();
          a.set(n, m);
          try {
            var p = await i().sendIq({
                attachToSocket: l,
                iq: d,
                signal: m.signal,
                timeoutSeconds: u,
                type: c,
              }),
              _ = o("WAWap").encodeStanza(p);
            return o("WATransferableResult").withTransferables(_, [_.buffer]);
          } finally {
            a.delete(n);
          }
        }),
        abortSendIq: u("abortSendIq", async function (e) {
          var n,
            r = e.abortToken;
          (await t, (n = a.get(r)) == null || n.abort());
        }),
        callStanza: u("callStanza", async function (e) {
          var n = e.flags,
            a = e.stanza;
          await t;
          var l = await o("WAWap").decodeStanza(a, r);
          await i().callStanza(l, n);
        }),
        castStanza: u("castStanza", async function (e) {
          var n = e.flags,
            a = e.stanza;
          await t;
          var l = await o("WAWap").decodeStanza(a, r),
            u = i();
          if (!u.isSocketConnected()) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Comms has no open socket",
                ])),
            );
            return;
          }
          u.castStanza(l, n);
        }),
        sendPing: u("sendPing", async function () {
          return (await t, i().sendPing());
        }),
        waitForNetworkHealth: u("waitForNetworkHealth", async function () {
          return (await t, i().waitForNetworkHealth());
        }),
        startHandlingRequests: u("startHandlingRequests", async function () {
          return (await t, i().startHandlingRequests());
        }),
        socketLoopIteration: u("socketLoopIteration", async function () {
          return (await t, i().socketLoopIteration());
        }),
        trySoftCloseSocket: u("trySoftCloseSocket", async function (e) {
          var n = e.reason;
          return (await t, i().trySoftCloseSocket(n));
        }),
        stopComms: u("stopComms", async function (e) {
          var n = e.reason;
          return (await t, i().stopComms(n));
        }),
        closeSocket: u("closeSocket", async function (e) {
          var n = e.reason;
          return (await t, i().closeSocket(n));
        }),
        closeSocketInDebugMode: u("closeSocketInDebugMode", async function () {
          return (await t, i().closeSocketInDebugMode());
        }),
        closeSocketAndPreventRetry: u(
          "closeSocketAndPreventRetry",
          async function (e) {
            var n = e.reason;
            return (await t, i().closeSocketAndPreventRetry(n));
          },
        ),
        closeSocketAndPause: u("closeSocketAndPause", async function (e) {
          var n = e.reason;
          return (await t, i().closeSocketAndPause(n));
        }),
        closeSocketAndResume: u("closeSocketAndResume", async function (e) {
          var n = e.reason;
          return (await t, i().closeSocketAndResume(n));
        }),
        openSocketLoop: u("openSocketLoop", async function () {
          return (await t, i().openSocketLoop());
        }),
        maybeResetSocketLoop: u("maybeResetSocketLoop", async function () {
          return (await t, i().maybeResetSocketLoop());
        }),
        forceResetSocketLoop: u("forceResetSocketLoop", async function () {
          return (await t, i().forceResetSocketLoop());
        }),
        forceAbortSocketConnection: u(
          "forceAbortSocketConnection",
          async function () {
            return (await t, i().forceAbortSocketConnection());
          },
        ),
        onStreamErrorReceived: u("onStreamErrorReceived", async function () {
          return (await t, i().onStreamErrorReceived());
        }),
        cancelDeadSocketTimer: u("cancelDeadSocketTimer", async function () {
          return (await t, i().cancelDeadSocketTimer());
        }),
        deprecatedSendStanzaAndReturnAck: u(
          "deprecatedSendStanzaAndReturnAck",
          async function (e) {
            var n = e.expectedAck,
              a = e.stanza;
            await t;
            var i = await o("WAWap").decodeStanza(a, r),
              l = await o(
                "WADeprecatedSendIq",
              ).deprecatedSendStanzaAndReturnAck(i, n),
              s = o("WAWap").encodeStanza(l);
            return o("WATransferableResult").withTransferables(s, [s.buffer]);
          },
        ),
        createComms: u("createComms", async function (a) {
          var i = a.passive,
            l = a.pull;
          (o("WAWebBackendWorkerRegistrationState").markRegistered(),
            o("WAWebPageLoadLogging").startPageLoadQplMeasure(
              "createCommsWaitForWorkerState",
            ),
            await t,
            o("WAWebPageLoadLogging").endPageLoadQplMeasure(
              "createCommsWaitForWorkerState",
            ));
          var s = n({ passive: i, pull: l });
          o("WAComms").startComms(
            async function (t, n, a, i) {
              var l = i != null ? i : o("WAWap").encodeStanzaWithoutHeader(t),
                s = await e.sendAndReceive(
                  "mainthread_comms",
                  "handleStanza",
                  { stanza: l, socketId: n, size: a },
                  !0,
                  void 0,
                  void 0,
                  [l.buffer],
                );
              return s instanceof Uint8Array
                ? o("WAWap").decodeStanza(s, r)
                : s;
            },
            s,
            function (e) {
              return Promise.resolve(o("WAGzip").inflate(e));
            },
            !1,
          );
        }),
        setUnifiedSessionId: u("setUnifiedSessionId", function (e) {
          var t = e.unifiedSessionId;
          (o("WAWebCommsUnifiedSessionId").setCommsUnifiedSessionId(t),
            o("WAWebBackendWorkerRegistrationState").isRegistered() &&
              o("WAComms").isSocketConnected() &&
              o("WAWebCommsConfigBase").shareUnifiedSessionId());
        }),
      };
    }
    l.createCommsWorkerHandlers = c;
  },
  98,
);
