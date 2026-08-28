__d(
  "WAWebConnGetters",
  ["WAWebGetters", "WAWebGettersCaches", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createConnCache,
      }),
      s = e.clearCacheFor,
      u = e.computed,
      c = e.field,
      d = s,
      m = c("platform"),
      p = c("pushname"),
      _ = u(
        function (e) {
          var t = e[0];
          return (
            t === o("WAWebMobilePlatforms").PLATFORMS.SMBA ||
            t === o("WAWebMobilePlatforms").PLATFORMS.SMBI
          );
        },
        [m],
      );
    ((l.clearConnGetterCacheFor = d),
      (l.getPlatform = m),
      (l.getPushname = p),
      (l.getIsSMB = _));
  },
  98,
);
