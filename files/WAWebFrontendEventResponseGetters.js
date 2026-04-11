__d(
  "WAWebFrontendEventResponseGetters",
  ["WAWebEventResponseGetters", "WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        root: o("WAWebEventResponseGetters").getEventResponseUnsafe,
        createCache: o("WAWebGettersCaches").createFrontendEventResponseCache,
      }),
      s = e.clearCacheFor,
      u = s;
    l.clearFrontendEventResponseGetterCacheFor = u;
  },
  98,
);
