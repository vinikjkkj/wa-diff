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
            var i = yield c(e, t, r, a);
            yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(e, i)[1];
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t, n, r) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i,
              l = yield o("WAWebMsgDataUtils").genOutgoingMsgData(
                e,
                o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE,
              ),
              s = o("WAWebBotBaseGating").isBotEnabled() && e.id.isBot(),
              u = s ? self.crypto.getRandomValues(new Uint8Array(32)) : void 0,
              c = s
                ? (i = o("WAWebBotProfileCollection").BotProfileCollection.get(
                    e.id,
                  )) == null
                  ? void 0
                  : i.personaId
                : void 0;
            return babelHelpers.extends(
              {},
              l,
              {
                type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE,
                kind: o("WAWebMsgType").MsgKind.InteractiveResponse,
                interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
                nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
                  .MENU_OPTIONS,
                interactivePayload: {
                  type: r("WAWebInteractiveResponseMessageType").NATIVE_FLOW,
                  name: r("WAWebInteractiveMessagesNativeFlowName")
                    .MENU_OPTIONS,
                  version: 1,
                  paramsJson: JSON.stringify({ id: a }),
                },
                body: n,
                messageSecret: u,
                botPersonaId: c,
              },
              t.msgContextInfo(e.id),
            );
          },
        )),
        d.apply(this, arguments)
      );
    }
    ((l.shouldUseNativeFlowMenuOptionsResponse = e),
      (l.sendNativeFlowMenuOptionsResponse = s));
  },
  98,
);
