__d(
  "WAWebProductGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createProductCache,
      }),
      s = e.clearCacheFor,
      u = e.field,
      c = s,
      d = u("availability"),
      m = u("description"),
      p = u("name"),
      _ = u("priceAmount1000");
    ((l.clearProductGetterCacheFor = c),
      (l.getAvailability = d),
      (l.getDescription = m),
      (l.getName = p),
      (l.getPriceAmount1000 = _));
  },
  98,
);
