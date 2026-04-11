__d(
  "WAWebSettingsGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createSettingsCache,
      }),
      s = e.clearCacheFor,
      u = e.computed,
      c = e.field,
      d = s,
      m = c("archive"),
      p = c("isFBLinked"),
      _ = c("isIGLinked"),
      f = c("linkState"),
      g = c("shareToFB"),
      h = c("shareToIG"),
      y = u(
        function (e) {
          var t = e[0];
          return t.enabled ? !t.classic : !1;
        },
        [m],
      );
    ((l.clearSettingsGetterCacheFor = d),
      (l.getArchive = m),
      (l.getIsFBLinked = p),
      (l.getIsIGLinked = _),
      (l.getLinkState = f),
      (l.getShareToFB = g),
      (l.getShareToIG = h),
      (l.getShowArchiveV2 = y));
  },
  98,
);
