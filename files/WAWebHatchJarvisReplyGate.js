__d(
  "WAWebHatchJarvisReplyGate",
  [
    "WAWebBotBaseGating",
    "WAWebBotUtils",
    "WAWebHatchFrontendGating",
    "WAWebHatchJsonReaders",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "XMSGGenAIJarvisPayload";
    function s(e) {
      return e.isForwarded || e.hasForwardedAttribution
        ? u(e)
          ? "forwarded"
          : "none"
        : c(e)
          ? "reply"
          : "none";
    }
    function u(t) {
      var n = t.unifiedResponse;
      return (
        o("WAWebHatchJsonReaders").readString(
          n == null ? void 0 : n.passthrough_payload,
          "__typename",
        ) === e &&
        o("WAWebBotBaseGating").isRichResponseJarvisForwardReceivingEnabled()
      );
    }
    function c(e) {
      var t = e.chatId,
        n = e.isFromMe,
        r = e.unifiedResponse;
      return (
        (r == null ? void 0 : r.passthrough_payload) != null &&
        !n &&
        o("WAWebBotUtils").isHatchBot(t) &&
        o("WAWebHatchFrontendGating").isHatchJarvisRendererEnabled()
      );
    }
    l.getHatchJarvisDrawMode = s;
  },
  98,
);
