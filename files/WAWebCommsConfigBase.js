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
    "cr:17672",
    "gkx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 9e5;
    function u(e, t) {
      !r("gkx")("16539") ||
        n("cr:17672") == null ||
        (o("WAWebABProps").getABPropConfigValue("web_memlab_fixes_4") &&
          !n("cr:17672").hasDevToolHandler()) ||
        n("cr:17672").sendNewStanzaToDevTool(e, t);
    }
    function c() {
      return {
        jitter: 0.1,
        max: s,
        algo: { type: "fibonacci", first: 1e3, second: 1e3 },
        relativeDelay: !1,
      };
    }
    function d(t) {
      var n = o(
        "WAWebOfflineResumePreAckHandler",
      ).createParseAndSerializeOfflinePreAck(t.isRegistered);
      return function (a) {
        var i,
          l = a || { passive: !1, pull: !1 };
        return {
          maxRetries: Number.MAX_SAFE_INTEGER,
          openChatSocket: function (n, a) {
            return (
              o("WAWebABProps").getABPropConfigValue(
                "web_comms_socket_reconnect_enabled",
              )
                ? (l.signal = r("nullthrows")(a))
                : (l.signal = new AbortController().signal),
              o("WAWebOpenChatSocket")
                .openChatSocket(l, t.isRegistered())
                .then(function (e) {
                  return (n(), (l.passive = !1), e);
                })
            );
          },
          healthCheckInterval: 15,
          deadSocketTime: 2e4,
          maxSocketLoopWaitTime: s,
          shouldCloseStaleSocket: !0,
          socketReconnectBackoffAlgo: c(),
          shouldBlockReceivingUntilSuccess: !0,
          handlers: {
            onConnect: function () {
              t.isRegistered() &&
                (o("WAWebBackendEventBusWorkerCompatible")
                  .getBackendEventBus()
                  .triggerSetSocketState(
                    o("WAWebSocketConstants").SOCKET_STATE.CONNECTED,
                  ),
                l.openStreamAfterLogin !== !0 &&
                  o("WAWebBackendEventBusWorkerCompatible")
                    .getBackendEventBus()
                    .triggerOpenSocketStream());
            },
            onDisconnect: function (t) {
              o("WAWebBackendEventBusWorkerCompatible")
                .getBackendEventBus()
                .triggerSocketStreamDisconnected(t);
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
            onBeforeCastStanza: function (t, r) {
              t.tag === "ack" &&
                !(r != null && r.preAck) &&
                !o("WAWebBackendEventBusWorkerCompatible").getBackendEventBus()
                  .isOfflineDeliveryEnd &&
                n(t);
            },
            onCastStanza: function (n) {
              (r("gkx")("26259") &&
                n.tag === "ack" &&
                !(n.attrs.to instanceof o("WAWapJid").WapJid) &&
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "ack.to is a ",
                        " not a WapJid: ",
                        "",
                      ])),
                    typeof n.attrs.to,
                    n,
                  )
                  .sendLogs("send-string-jid"),
                u(n, !0),
                o("WAWebStanzaValidation").validateSentStanza(n));
            },
            onHandleAck: function (t) {
              r("WAWebCommsProcessAck")(t);
            },
            onHandleStanza: function (t) {
              u(t, !1);
            },
            onSendIq: o("WAWebStanzaValidation").validateSentStanza,
            onClockSkewUpdate:
              (i = t.onClockSkewUpdate) != null
                ? i
                : o("WAWebCommsSendPing").updateClockSkew,
          },
          isPauseEnabled: r("WAWebEnvironment").isWindows,
        };
      };
    }
    l.createGetCommsConfig = d;
  },
  98,
);
