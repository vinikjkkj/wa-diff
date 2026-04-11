__d(
  "WAWebFrontendStatusGetters",
  ["WAWebGetters", "WAWebGettersCaches", "WAWebStatusGetters"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        root: o("WAWebStatusGetters").getStatusUnsafe,
        createCache: o("WAWebGettersCaches").createFrontendStatusCache,
      }),
      s = e.clearCacheFor,
      u = e.computed,
      c = e.field,
      d = s,
      m = c("msgs"),
      p = c("msgsChanged"),
      _ = c("contact"),
      f = u(
        function (e) {
          var t = e[0],
            n = e[1];
          return n.last();
        },
        [p, m],
      );
    ((l.clearFrontendStatusGetterCacheFor = d),
      (l.getContact = _),
      (l.getLastStatus = f));
  },
  98,
);
