__d(
  "WAWebStatusGetters",
  ["WALogger", "WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createStatusCache,
      }),
      u = s.clearCacheFor,
      c = s.computed,
      d = s.field,
      m = s.unsafeIdentityGetter,
      p = u,
      _ = m,
      f = d("id"),
      g = d("t"),
      h = d("unreadCount"),
      y = d("totalCount"),
      C = d("isLoading"),
      b = c(
        function (e) {
          var t = e[0];
          return t > 0;
        },
        [h],
      ),
      v = c(
        function (t) {
          var n = t[0],
            r = t[1],
            a = r - n;
          return Number.isFinite(a)
            ? a
            : (o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Bad status read count, ",
                    ", ",
                    "",
                  ])),
                r,
                n,
              ),
              0);
        },
        [h, y],
      );
    ((l.clearStatusGetterCacheFor = p),
      (l.getStatusUnsafe = _),
      (l.getId = f),
      (l.getT = g),
      (l.getUnreadCount = h),
      (l.getTotalCount = y),
      (l.getIsLoading = C),
      (l.getHasUnread = b),
      (l.getReadCount = v));
  },
  98,
);
