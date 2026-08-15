__d(
  "WAWebPresenceGetters",
  ["WAWebGetters", "WAWebGettersCaches", "WAWebWid"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createPresenceCache,
      }),
      s = e.clearCacheFor,
      u = e.computed,
      c = e.field,
      d = e.unsafeIdentityGetter,
      m = s,
      p = d,
      _ = c("id"),
      f = u(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isGroup(t);
        },
        [_],
      ),
      g = u(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isUser(t);
        },
        [_],
      );
    ((l.clearPresenceGetterCacheFor = m),
      (l.getPresenceUnsafe = p),
      (l.getId = _),
      (l.getIsGroup = f),
      (l.getIsUser = g));
  },
  98,
);
