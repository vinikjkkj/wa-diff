__d(
  "WAWebCommandGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createCommandCache,
      }),
      s = e.clearCacheFor,
      u = e.field,
      c = s,
      d = u("id"),
      m = u("label"),
      p = u("name");
    ((l.clearCommandGetterCacheFor = c),
      (l.getId = d),
      (l.getLabel = m),
      (l.getName = p));
  },
  98,
);
