__d(
  "WAWebChannelVideoDashPrefetchGating",
  ["WAWebCanPlayChannelVideoDash"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.isNewsletterMsg,
        n = e.manifestUrl;
      return o("WAWebCanPlayChannelVideoDash").canPlayChannelVideoDashFor({
        hasDebugOverride: !1,
        isNewsletterMsg: t,
        manifestUrl: n,
      });
    }
    l.canPrefetchChannelVideoDash = e;
  },
  98,
);
