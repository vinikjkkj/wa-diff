__d(
  "WAWebVideoUtils",
  [
    "WAWebBotUtils",
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
      var t = e.mediaData,
        n = o("WAWebMsgGetters").getSender(e),
        r = n != null && o("WAWebBotUtils").isMetaAiBot(n);
      return (
        (t == null ? void 0 : t.streamable) &&
        (t == null ? void 0 : t.isStreamable()) &&
        !r &&
        o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(e)
      );
    }
    ((l.getVideoUrl = e), (l.isMsgStreamable = s));
  },
  98,
);
