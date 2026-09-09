__d(
  "WAWebFrontendNewsletterMetadataGetters",
  [
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebL10NAccentFold",
    "WAWebNewsletterMetadataGetters",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        root: o("WAWebNewsletterMetadataGetters").getNewsletterMetadataUnsafe,
        createCache:
          o("WAWebGettersCaches").createFrontendNewsletterMetadataCache,
      }),
      s = e.clearCacheFor,
      u = e.computed,
      c = e.field,
      d = s,
      m = c("adminInsights"),
      p = c("recentlyFollowedFrom"),
      _ = c("similarNewsletters"),
      f = u(
        function (e) {
          var t = e[0];
          return t === "" ? "" : o("WAWebL10NAccentFold").accentFold(t);
        },
        [o("WAWebNewsletterMetadataGetters").getName],
      );
    ((l.clearFrontendNewsletterMetadataGetterCacheFor = d),
      (l.getAdminInsights = m),
      (l.getRecentlyFollowedFrom = p),
      (l.getSimilarNewsletters = _),
      (l.getSearchName = f));
  },
  98,
);
