__d(
  "WAWebNoticeGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createNoticeCache,
      }),
      s = e.clearCacheFor,
      u = e.field,
      c = s,
      d = u("noticeId"),
      m = u("blocking"),
      p = u("banner"),
      _ = u("shouldShowButterBar");
    ((l.clearNoticeGetterCacheFor = c),
      (l.getNoticeId = d),
      (l.getBlocking = m),
      (l.getBanner = p),
      (l.getShouldShowButterBar = _));
  },
  98,
);
