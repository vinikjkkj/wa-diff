__d(
  "WAWebCommsConfigBase",
  [
    "WALogger",
    "WAWapJid",
    "WAWebABProps",
    "WAWebBackendEventBusWorkerCompatible",
    "WAWebCommsProcessAck",
    "WAWebCommsSendPing",
    "WAWebEnvironment",
    "WAWebNoop",
    "WAWebOfflineResumePreAckHandler",
    "WAWebOpenChatSocket",
    "WAWebSocketConstants",
    "WAWebStanzaValidation",
    "cr:7907",
    "gkx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 9e5;
    function u() {
      return {
        jitter: 0.1,
        max: s,
        algo: { type: "fibonacci", first: 1e3, second: 1e3 },
        relativeDelay: !1,
      };
    }
    function c(t) {
      return function (a) {
        var i = a || { passive: !1, pull: !1 };
        return {
          maxRetries: Number.MAX_SAFE_INTEGER,
          openChatSocket: function (n, a) {
            return (
              o("WAWebABProps").getABPropConfigValue(
                "web_comms_socket_reconnect_enabled",
              )
                ? (i.signal = r("nullthrows")(a))
                : (i.signal = new AbortController().signal),
              o("WAWebOpenChatSocket")
                .openChatSocket(i, t.isRegistered())
                .then(function (e) {
                  return (n(), (i.passive = !1), e);
                })
            );
          },
          healthCheckInterval: 15,
          deadSocketTime: 2e4,
          maxSocketLoopWaitTime: s,
          shouldCloseStaleSocket: !0,
          socketReconnectBackoffAlgo: u(),
          shouldBlockReceivingUntilSuccess: !0,
          handlers: {
            onConnect: function () {
              t.isRegistered() &&
                (o("WAWebBackendEventBusWorkerCompatible")
                  .getBackendEventBus()
                  .triggerSetSocketState(
                    o("WAWebSocketConstants").SOCKET_STATE.CONNECTED,
                  ),
                o("WAWebBackendEventBusWorkerCompatible")
                  .getBackendEventBus()
                  .triggerOpenSocketStream());
            },
            onDisconnect: function () {
              o("WAWebBackendEventBusWorkerCompatible")
                .getBackendEventBus()
                .triggerSocketStreamDisconnected();
            },
            onSocketOpen: function () {
              o("WAWebBackendEventBusWorkerCompatible")
                .getBackendEventBus()
                .triggerSetSocketState(
                  o("WAWebSocketConstants").SOCKET_STATE.PAIRING,
                );
            },
            onSocketLoopIteration: function (t) {
              o("WAWebBackendEventBusWorkerCompatible")
                .getBackendEventBus()
                .triggerSetSocketState(
                  o("WAWebSocketConstants").SOCKET_STATE.OPENING,
                );
            },
            onConnectionChange: r("WAWebNoop"),
            onOptimisticConnectionChange: r("WAWebNoop"),
            onBeforeCastStanzaForE2E: function (t, n) {
              t.tag === "ack" &&
                !(n != null && n.preAck) &&
                !o("WAWebBackendEventBusWorkerCompatible").getBackendEventBus()
                  .isOfflineDeliveryEnd &&
                o(
                  "WAWebOfflineResumePreAckHandler",
                ).parseAndSerializeOfflinePreAck(t);
            },
            onCastStanza: function (a) {
              (r("gkx")("26259") &&
                a.tag === "ack" &&
                !(a.attrs.to instanceof o("WAWapJid").WapJid) &&
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "ack.to is a ",
                        " not a WapJid: ",
                        "",
                      ])),
                    typeof a.attrs.to,
                    a,
                  )
                  .sendLogs("send-string-jid"),
                r("gkx")("26258") ||
                  n("cr:7907") == null ||
                  n("cr:7907").sendNewStanzaToDevTool(a, !0),
                o("WAWebStanzaValidation").validateSentStanza(a));
            },
            onHandleAck: function (t) {
              r("WAWebCommsProcessAck")(t);
            },
            onHandleStanza: function (t) {
              r("gkx")("26258") ||
                n("cr:7907") == null ||
                n("cr:7907").sendNewStanzaToDevTool(t, !1);
            },
            onSendIq: o("WAWebStanzaValidation").validateSentStanza,
            onClockSkewUpdate: function (t) {
              o("WAWebCommsSendPing").updateClockSkew(t);
            },
          },
          isPauseEnabled: r("WAWebEnvironment").isWindows,
        };
      };
    }
    l.createGetCommsConfig = c;
  },
  98,
);
