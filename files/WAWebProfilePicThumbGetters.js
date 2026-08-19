__d(
  "WAWebProfilePicThumbGetters",
  ["WAWebGetters", "WAWebGettersCaches", "WAWebWid"],
  function (t, n, r, o, a, i, l) {
    var e = { SINGLE: "SINGLE", GROUP: "GROUP" },
      s = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createProfilePicThumbCache,
      }),
      u = s.clearCacheFor,
      c = s.computed,
      d = s.field,
      m = u,
      p = d("id"),
      _ = c(
        function (t) {
          var n = t[0];
          return r("WAWebWid").isUser(n)
            ? e.SINGLE
            : (r("WAWebWid").isGroup(n), e.GROUP);
        },
        [p],
      );
    ((l.FALLBACK = e),
      (l.clearProfilePicThumbGetterCacheFor = m),
      (l.getId = p),
      (l.getFallbackType = _));
  },
  98,
);
