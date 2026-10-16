__d(
  "WAWebGetInteractiveButtonActionValues",
  ["WAWebCarouselMsgUtils", "WAWebFrontendMsgGetters", "WAWebMsgGetters"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.unsafe();
      return {
        chat: o("WAWebFrontendMsgGetters").getChat(t),
        galaxyFlowDisabled: t.galaxyFlowDisabled,
        isFromTemplate: e.isFromTemplate,
        isOutgoingBizBot: o("WAWebCarouselMsgUtils").isOutgoingBizBotMessage(t),
        isSentByMe: o("WAWebMsgGetters").getIsSentByMe(t),
        nativeFlowName: e.nativeFlowName,
        signupCtaTapped: e.signupCtaTapped,
      };
    }
    l.default = e;
  },
  98,
);
