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
      if (o("WAWebPaymentsGatingUtils").isMessageWithLinkNfmEnabled()) {
        if (
          e.nativeFlowName !==
            r("WAWebInteractiveMessagesNativeFlowName").MESSAGE_WITH_LINK ||
          e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
          e.interactiveType !== r("WAWebInteractiveMessageType").NATIVE_FLOW ||
          e.interactivePayload == null
        )
          return null;
        var t = e.interactivePayload;
        if (t != null && t.buttons && t.buttons.length > 0) {
          var n = t.buttons[0],
            a = n.buttonParamsJson,
            i = n.name;
          if (i === "open_webview" && a != null) {
            var l = JSON.parse(a),
              s = l.link,
              u = l.title;
            return {
              label: u,
              onClick: function () {
                return o("WAWebExternalLink.react").openExternalLink(s.url);
              },
            };
          }
        }
      }
      return null;
    }
    l.getOpenMessageWithLinkAction = e;
  },
  98,
);
