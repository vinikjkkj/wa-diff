__d(
  "WAWebChannelVideoDashManifestCachePolicy",
  ["WAWebNewsletterGatingUtils", "WAWebVideoDashManifestCache"],
  function (t, n, r, o, a, i, l) {
    var e = 50,
      s = 1800 * 1e3;
    function u(e) {
      return (
        d(),
        o("WAWebVideoDashManifestCache").loadVideoDashManifest({
          timeoutMs: o("WAWebVideoDashManifestCache").MANIFEST_FETCH_TIMEOUT_MS,
          url: e,
        })
      );
    }
    function c() {
      return d()
        ? (o("WAWebVideoDashManifestCache").pruneExpiredVideoDashManifests(),
          !0)
        : (o("WAWebVideoDashManifestCache").clearVideoDashManifestCache(), !1);
    }
    function d() {
      return o(
        "WAWebNewsletterGatingUtils",
      ).isChannelVideoDashManifestAtClickEnabled()
        ? (o("WAWebVideoDashManifestCache").configureVideoDashManifestCache({
            maxAgeMs: s,
            maxManifests: e,
          }),
          !0)
        : !1;
    }
    ((l.loadChannelVideoDashManifest = u),
      (l.leaveChannelVideoDashManifestCache = c));
  },
  98,
);
