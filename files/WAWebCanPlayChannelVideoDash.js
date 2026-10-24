__d(
  "WAWebCanPlayChannelVideoDash",
  [
    "WAWebMsgGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterVideoPlayerGating",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.hasDebugOverride,
        n = e.manifestUrl,
        r = e.msg;
      return s({
        hasDebugOverride: t,
        isNewsletterMsg: o("WAWebMsgGetters").getIsNewsletterMsg(r),
        manifestUrl: n,
      });
    }
    function s(e) {
      var t = e.hasDebugOverride,
        n = t === void 0 ? !1 : t,
        r = e.isNewsletterMsg,
        a = e.manifestUrl;
      return (
        (a != null || n) &&
        o(
          "WAWebNewsletterVideoPlayerGating",
        ).isNewsletterVideoWithPlaybackLoggingFor(r) &&
        (n ||
          o("WAWebNewsletterGatingUtils").isChannelVideoDashPlaybackEnabled())
      );
    }
    ((l.canPlayChannelVideoDash = e), (l.canPlayChannelVideoDashFor = s));
  },
  98,
);
