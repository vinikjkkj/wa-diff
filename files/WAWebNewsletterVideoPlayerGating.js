__d(
  "WAWebNewsletterVideoPlayerGating",
  ["WAWebMsgGetters", "WAWebNewsletterGatingUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e != null && s(o("WAWebMsgGetters").getIsNewsletterMsg(e));
    }
    function s(e) {
      return (
        e &&
        o("WAWebNewsletterGatingUtils").isNewsletterVideoPlayLoggingEnabled()
      );
    }
    ((l.isNewsletterVideoWithPlaybackLogging = e),
      (l.isNewsletterVideoWithPlaybackLoggingFor = s));
  },
  98,
);
