__d(
  "WAWebNewsletterVideoPlayerGating",
  ["WAWebMsgGetters", "WAWebNewsletterGatingUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        s(e) && o("WAWebNewsletterGatingUtils").isCometVideoPlayerEnabled()
      );
    }
    function s(e) {
      return (
        e != null &&
        o("WAWebMsgGetters").getIsNewsletterMsg(e) &&
        o("WAWebNewsletterGatingUtils").isNewsletterVideoPlayLoggingEnabled()
      );
    }
    ((l.shouldRenderNewsletterVideoInCometPlayer = e),
      (l.isNewsletterVideoWithPlaybackLogging = s));
  },
  98,
);
