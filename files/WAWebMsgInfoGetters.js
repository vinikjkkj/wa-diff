__d(
  "WAWebMsgInfoGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createMsgInfosCache,
      }),
      s = e.clearCacheFor,
      u = e.field,
      c = s,
      d = u("playedRemaining"),
      m = u("readRemaining"),
      p = u("deliveryRemaining");
    ((l.clearMsgInfoGetterCacheFor = c),
      (l.getPlayedRemaining = d),
      (l.getReadRemaining = m),
      (l.getDeliveryRemaining = p));
  },
  98,
);
