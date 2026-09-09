__d(
  "WAWebFrontendTextStatusGetters",
  ["WAWebGetters", "WAWebGettersCaches", "WAWebTextStatusGetters"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        root: o("WAWebTextStatusGetters").getTextStatusUnsafe,
        createCache: o("WAWebGettersCaches").createFrontendTextStatusCache,
      }),
      s = e.clearCacheFor,
      u = e.field,
      c = s,
      d = u("stale");
    ((l.clearFrontendTextStatusGetterCacheFor = c), (l.getStale = d));
  },
  98,
);
