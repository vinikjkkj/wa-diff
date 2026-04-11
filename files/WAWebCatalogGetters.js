__d(
  "WAWebCatalogGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createCatalogCache,
      }),
      s = e.field,
      u = s("id");
    l.getId = u;
  },
  98,
);
