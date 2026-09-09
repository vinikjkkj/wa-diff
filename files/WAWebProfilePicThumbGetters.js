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
      m = s.unsafeIdentityGetter,
      p = o("WAWebGetters").createGetterFactories({
        root: m,
        createCache: o("WAWebGettersCaches").createFrontendProfilePicThumbCache,
      }),
      _ = p.clearCacheFor,
      f = p.field;
    function g(e) {
      (u(e), _(e));
    }
    var h = d("id"),
      y = f("img"),
      C = f("imgFull"),
      b = c(
        function (t) {
          var n = t[0];
          return r("WAWebWid").isUser(n)
            ? e.SINGLE
            : (r("WAWebWid").isGroup(n), e.GROUP);
        },
        [h],
      );
    ((l.FALLBACK = e),
      (l.clearProfilePicThumbGetterCacheFor = g),
      (l.getId = h),
      (l.getImg = y),
      (l.getImgFull = C),
      (l.getFallbackType = b));
  },
  98,
);
