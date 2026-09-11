__d(
  "WAWebChatstateGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createChatstateCache,
      }),
      s = e.clearCacheFor,
      u = e.field,
      c = s,
      d = u("type"),
      m = u("deny"),
      p = u("t");
    ((l.clearChatstateGetterCacheFor = c),
      (l.getType = d),
      (l.getDeny = m),
      (l.getT = p));
  },
  98,
);
