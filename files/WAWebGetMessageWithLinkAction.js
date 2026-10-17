__d(
  "WAWebGetMessageWithLinkAction",
  [
    "WAWebExternalLink.react",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebPaymentsGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE
        ? null
        : s({
            interactivePayload: e.interactivePayload,
            interactiveType: e.interactiveType,
            nativeFlowName: e.nativeFlowName,
            type: e.type,
          });
    }
    function s(e) {
      var t = e.interactivePayload,
        n = e.interactiveType,
        a = e.nativeFlowName,
        i = e.type;
      if (o("WAWebPaymentsGatingUtils").isMessageWithLinkNfmEnabled()) {
        if (
          a !== r("WAWebInteractiveMessagesNativeFlowName").MESSAGE_WITH_LINK ||
          i !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
          n !== r("WAWebInteractiveMessageType").NATIVE_FLOW ||
          t == null
        )
          return null;
        var l = t;
        if (l != null && l.buttons && l.buttons.length > 0) {
          var s = l.buttons[0],
            u = s.buttonParamsJson,
            c = s.name;
          if (c === "open_webview" && u != null) {
            var d = JSON.parse(u),
              m = d.link,
              p = d.title;
            return {
              label: p,
              onClick: function () {
                return o("WAWebExternalLink.react").openExternalLink(m.url);
              },
            };
          }
        }
      }
      return null;
    }
    ((l.getOpenMessageWithLinkAction = e),
      (l.getOpenMessageWithLinkActionFor = s));
  },
  98,
);
