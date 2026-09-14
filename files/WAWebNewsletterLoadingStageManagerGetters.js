__d(
  "WAWebNewsletterLoadingStageManagerGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache:
          o("WAWebGettersCaches").createNewsletterLoadingStageManagerCache,
      }),
      s = e.field,
      u = s("stage");
    l.getStage = u;
  },
  98,
);
