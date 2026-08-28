__d(
  "WAWebCanPlayChannelVideoDash",
  ["WAWebNewsletterGatingUtils", "WAWebNewsletterVideoPlayerGating"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.hasDebugOverride,
        n = e.manifestUrl,
        r = e.msg;
      return (
        (n != null || t) &&
        o(
          "WAWebNewsletterVideoPlayerGating",
        ).shouldRenderNewsletterVideoInCometPlayer(r) &&
        (t ||
          o("WAWebNewsletterGatingUtils").isChannelVideoDashPlaybackEnabled())
      );
    }
    l.canPlayChannelVideoDash = e;
  },
  98,
);
