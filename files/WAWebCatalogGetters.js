__d(
  "WAWebCatalogGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createCatalogCache,
      }),
      s = e.clearCacheFor,
      u = e.field,
      c = e.unsafeIdentityGetter,
      d = c,
      m = o("WAWebGetters").createGetterFactories({
        root: d,
        createCache: o("WAWebGettersCaches").createFrontendCatalogCache,
      }),
      p = m.clearCacheFor,
      _ = m.field;
    function f(e) {
      (s(e), p(e));
    }
    var g = u("id"),
      h = u("afterCursor"),
      y = u("hasCatalogCategories"),
      C = u("index"),
      b = _("lastUsedCountryCode");
    ((l.clearCatalogGetterCacheFor = f),
      (l.getId = g),
      (l.getAfterCursor = h),
      (l.getHasCatalogCategories = y),
      (l.getIndex = C),
      (l.getLastUsedCountryCode = b));
  },
  98,
);
