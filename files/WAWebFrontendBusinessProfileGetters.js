__d(
  "WAWebFrontendBusinessProfileGetters",
  [
    "WAWebBusinessProfileGetters",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebProductCatalogMetaLinkingGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        root: o("WAWebBusinessProfileGetters").getBusinessProfileUnsafe,
        createCache: o("WAWebGettersCaches").createFrontendBusinessProfileCache,
      }),
      s = e.clearCacheFor,
      u = e.computed,
      c = e.field,
      d = s,
      m = c("googlePlace"),
      p = c("stale"),
      _ = u(
        function (e) {
          var t = e[0];
          return o(
            "WAWebProductCatalogMetaLinkingGatingUtils",
          ).shouldDisableCatalogDueToMetaLinkingForProfileOptions(t);
        },
        [o("WAWebBusinessProfileGetters").getProfileOptions],
      );
    ((l.clearFrontendBusinessProfileGetterCacheFor = d),
      (l.getGooglePlace = m),
      (l.getStale = p),
      (l.getIsCatalogDisabledDueToMetaLinking = _));
  },
  98,
);
