__d(
  "WAWebMuteGetters",
  ["WAWeb-moment", "WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createMuteCache,
      }),
      s = e.clearCacheFor,
      u = e.computed,
      c = e.field,
      d = s,
      m = c("callExpiration"),
      p = c("expiration"),
      _ = c("mentionAllMuteExpiration"),
      f = u(
        function (e) {
          var t = e[0];
          return !!t;
        },
        [p],
      ),
      g = u(
        function (e) {
          var t = e[0];
          return !!t;
        },
        [m],
      ),
      h = -1,
      y = u(
        function (e) {
          var t = e[0],
            n = e[1];
          return !n || !t ? !1 : t === h ? !0 : t > r("WAWeb-moment")().unix();
        },
        [_, f],
      );
    ((l.clearMuteGetterCacheFor = d),
      (l.getCallExpiration = m),
      (l.getExpiration = p),
      (l.getIsMuted = f),
      (l.getIsCallMuted = g),
      (l.getIsMentionAllMuted = y));
  },
  98,
);
