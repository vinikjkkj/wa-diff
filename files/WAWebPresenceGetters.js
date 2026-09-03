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
      d = s,
      m = c("id"),
      p = u(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isGroup(t);
        },
        [m],
      ),
      _ = u(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isUser(t);
        },
        [m],
      );
    ((l.clearPresenceGetterCacheFor = d),
      (l.getIsGroup = p),
      (l.getIsUser = _));
  },
  98,
);
