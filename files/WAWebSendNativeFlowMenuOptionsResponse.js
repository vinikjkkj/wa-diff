__d(
  "WAWebSendNativeFlowMenuOptionsResponse",
  [
    "WAWebBotBaseGating",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebInteractiveResponseMessageType",
    "WAWebMsgDataUtils",
    "WAWebMsgType",
    "WAWebSendMsgChatAction",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return (
        o("WAWebBotUtils").isAnyMetaAiBot(e) &&
        t === r("WAWebInteractiveMessagesNativeFlowName").QUICK_REPLY
      );
    }
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = n.label,
            a = n.selectionId;
          if (!(r == null || a == null)) {
            var i = yield c({
              chat: e,
              label: r,
              quotedMsg: t,
              selectionId: a,
            });
            yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(e, i)[1];
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.chat,
            a = e.label,
            i = e.quotedMsg,
            l = e.selectionId,
            s = yield o("WAWebMsgDataUtils").genOutgoingMsgData(
              n,
              o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE,
            ),
            u = o("WAWebBotBaseGating").isBotEnabled() && n.id.isBot(),
            c = u ? self.crypto.getRandomValues(new Uint8Array(32)) : void 0,
            d = u
              ? (t = o("WAWebBotProfileCollection").BotProfileCollection.get(
                  n.id,
                )) == null
                ? void 0
                : t.personaId
              : void 0;
          return babelHelpers.extends(
            {},
            s,
            {
              type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE,
              kind: o("WAWebMsgType").MsgKind.InteractiveResponse,
              interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
              nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
                .MENU_OPTIONS,
              interactivePayload: {
                type: r("WAWebInteractiveResponseMessageType").NATIVE_FLOW,
                name: r("WAWebInteractiveMessagesNativeFlowName").MENU_OPTIONS,
                version: 1,
                paramsJson: JSON.stringify({ id: l }),
              },
              body: a,
              messageSecret: c,
              botPersonaId: d,
            },
            i.msgContextInfo(n.id),
          );
        })),
        d.apply(this, arguments)
      );
    }
    ((l.shouldUseNativeFlowMenuOptionsResponse = e),
      (l.sendNativeFlowMenuOptionsResponse = s));
  },
  98,
);
