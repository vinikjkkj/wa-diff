__d(
  "WAWebNewsletterVideoPlayerGating",
  ["WAWebMsgGetters", "WAWebNewsletterGatingUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        e != null &&
        o("WAWebMsgGetters").getIsNewsletterMsg(e) &&
        o("WAWebNewsletterGatingUtils").isNewsletterVideoPlayLoggingEnabled()
      );
    }
    l.isNewsletterVideoWithPlaybackLogging = e;
  },
  98,
);
