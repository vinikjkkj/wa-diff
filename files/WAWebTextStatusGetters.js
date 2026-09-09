__d(
  "WAWebTextStatusGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createTextStatusCache,
      }),
      s = e.clearCacheFor,
      u = e.field,
      c = e.unsafeIdentityGetter,
      d = s,
      m = c,
      p = u("status");
    ((l.clearTextStatusGetterCacheFor = d),
      (l.getTextStatusUnsafe = m),
      (l.getStatus = p));
  },
  98,
);
