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
    function e(e, t, n) {
      var a = !!t;
      if ((a || !n) && t instanceof r("WAWebMediaOpaqueData")) return t.url();
      if (n)
        return (
          o("WAWebPipVideoStreaming").VIDEO_STREAM_URL +
          "?key=" +
          e.id.toString()
        );
    }
    function s(e) {
      var t, n;
      return (t =
        (n = e.mediaObject) == null
          ? void 0
          : n.getDownloadPromises().some(Boolean)) != null
        ? t
        : !1;
    }
    function u(e) {
      return c(e, r("WAWebFeatureDetectionSwSupport").getStreamingSupported());
    }
    function c(e, t) {
      var n = e.mediaData;
      return n != null && n.isStreamable(t) && d(e);
    }
    function d(e) {
      var t = o("WAWebMsgGetters").getSender(e),
        n = t != null && o("WAWebBotUtils").isAnyMetaAiBot(t);
      return (
        !n &&
        o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(e)
      );
    }
    ((l.getVideoUrl = e),
      (l.isDownloadRunning = s),
      (l.isMsgStreamable = u),
      (l.isMsgStreamableWithSupport = c),
      (l.canMsgStream = d));
  },
  98,
);
