__d(
  "WAWebProductImageGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createProductImageCache,
      }),
      s = e.clearCacheFor,
      u = e.field,
      c = s,
      d = u("mediaUrl"),
      m = u("videoUrl");
    ((l.clearProductImageGetterCacheFor = c),
      (l.getMediaUrl = d),
      (l.getVideoUrl = m));
  },
  98,
);
