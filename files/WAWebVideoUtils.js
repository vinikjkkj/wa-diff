__d(
  "WAWebVideoUtils",
  [
    "WAWebBotUtils",
    "WAWebFeatureDetectionSwSupport",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaOpaqueData",
    "WAWebMsgGetters",
    "WAWebPipVideoStreaming",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = t.mediaBlob,
        a = !!n,
        i = s(e);
      if ((a || !i) && n instanceof r("WAWebMediaOpaqueData")) return n.url();
      if (i)
        return (
          o("WAWebPipVideoStreaming").VIDEO_STREAM_URL +
          "?key=" +
          e.id.toString()
        );
    }
    function s(e) {
      return u(e, r("WAWebFeatureDetectionSwSupport").getStreamingSupported());
    }
    function u(e, t) {
      var n = e.mediaData;
      return n != null && n.isStreamable(t) && c(e);
    }
    function c(e) {
      var t = o("WAWebMsgGetters").getSender(e),
        n = t != null && o("WAWebBotUtils").isAnyMetaAiBot(t);
      return (
        !n &&
        o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(e)
      );
    }
    ((l.getVideoUrl = e),
      (l.isMsgStreamable = s),
      (l.isMsgStreamableWithSupport = u),
      (l.canMsgStream = c));
  },
  98,
);
