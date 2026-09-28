__d(
  "WAWebHandleCoexV2ChatState",
  [
    "WAHandleChatStateProtocol",
    "WALogger",
    "WASmaxChatstateServerNotificationRPC",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2ChatState",
    "WAWebCoexV2GatingUtils",
    "WAWebDecodeJid",
    "WAWebHandleChatState",
    "WAWebWid",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t,
        n = d((t = e.attrs.from) == null ? void 0 : t.toString());
      return n == null ||
        !n.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) ||
        !o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled()
        ? null
        : u(e, n);
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            var a,
              i = d((a = t.attrs.participant) == null ? void 0 : a.toString()),
              l = o("WAWebCoexV2ChatState").normalizeCoexV2BotChatStateWid(
                n,
                i,
              );
            if (l == null) return "NO_ACK";
            var s = o(
                "WASmaxChatstateServerNotificationRPC",
              ).receiveServerNotificationRPC(t),
              u = s.parsedRequest.stateTypes,
              c = o("WAHandleChatStateProtocol").parseChatStatus(u);
            return (
              yield o("WAWebHandleChatState").handleIndividualChatState({
                jid: o("WAWebWidToJid").widToUserJid(l),
                status: c,
              }),
              "NO_ACK"
            );
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to handle CoEx v2 chatstate",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("coexv2-chatstate-handle-fail", { sampling: 0.1 }),
              "NO_ACK"
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      var t = o("WAWebDecodeJid").decodeJid(e);
      return t instanceof r("WAWebWid") ? t : null;
    }
    l.maybeHandleCoexV2ChatStateStanza = s;
  },
  98,
);
