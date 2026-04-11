__d(
  "WAWebCommsConfig",
  [
    "WALogger",
    "WANullthrows",
    "WAWapJid",
    "WAWebABProps",
    "WAWebBackendEventBus",
    "WAWebCommsProcessAck",
    "WAWebCommsSendPing",
    "WAWebEnvironment",
    "WAWebNoop",
    "WAWebOfflineResumePreAckHandler",
    "WAWebOpenChatSocket",
    "WAWebSocketConstants",
    "WAWebStanzaValidation",
    "WAWebUserPrefsMultiDevice",
    "cr:7907",
    "gkx",
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
      var a = t || { passive: !1, pull: !1 };
      return {
        maxRetries: Number.MAX_SAFE_INTEGER,
        openChatSocket: function (t, n) {
          return (
            o("WAWebABProps").getABPropConfigValue(
              "web_comms_socket_reconnect_enabled",
            )
              ? (a.signal = r("WANullthrows")(n))
              : (a.signal = new AbortController().signal),
            r("WAWebOpenChatSocket")(a).then(function (e) {
              return (t(), (a.passive = !1), e);
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
            o("WAWebUserPrefsMultiDevice").isRegistered() &&
              (o("WAWebBackendEventBus").BackendEventBus.triggerSetSocketState(
                o("WAWebSocketConstants").SOCKET_STATE.CONNECTED,
              ),
              o(
                "WAWebBackendEventBus",
              ).BackendEventBus.triggerOpenSocketStream());
          },
          onDisconnect: function () {
            o(
              "WAWebBackendEventBus",
            ).BackendEventBus.triggerSocketStreamDisconnected();
          },
          onSocketOpen: function () {
            o("WAWebBackendEventBus").BackendEventBus.triggerSetSocketState(
              o("WAWebSocketConstants").SOCKET_STATE.PAIRING,
            );
          },
          onSocketLoopIteration: function (t) {
            o("WAWebBackendEventBus").BackendEventBus.triggerSetSocketState(
              o("WAWebSocketConstants").SOCKET_STATE.OPENING,
            );
          },
          onConnectionChange: r("WAWebNoop"),
          onOptimisticConnectionChange: r("WAWebNoop"),
          onBeforeCastStanzaForE2E: function (t, n) {
            t.tag === "ack" &&
              !(n != null && n.preAck) &&
              !o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd &&
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
    }
    l.getCommsConfig = c;
  },
  98,
);
