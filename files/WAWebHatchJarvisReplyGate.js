__d(
  "WAWebHatchJarvisReplyGate",
  ["WAWebBotBaseGating", "WAWebBotUtils", "WAWebHatchFrontendGating"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.chatId,
        n = e.isForwarded,
        r = e.isFromMe,
        a = e.unifiedResponse;
      return (a == null ? void 0 : a.passthrough_payload) == null
        ? !1
        : n
          ? o(
              "WAWebBotBaseGating",
            ).isRichResponseJarvisForwardReceivingEnabled()
          : !r &&
            o("WAWebBotUtils").isHatchBot(t) &&
            o("WAWebHatchFrontendGating").isHatchJarvisRendererEnabled();
    }
    l.shouldDrawHatchJarvisReply = e;
  },
  98,
);
