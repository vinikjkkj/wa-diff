__d(
  "WAWebNewsletterLoadingStageManagerGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache:
          o("WAWebGettersCaches").createNewsletterLoadingStageManagerCache,
      }),
      s = e.clearCacheFor,
      u = e.field,
      c = s,
      d = u("stage");
    ((l.clearNewsletterLoadingStageManagerGetterCacheFor = c),
      (l.getStage = d));
  },
  98,
);
