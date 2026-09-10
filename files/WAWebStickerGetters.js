__d(
  "WAWebStickerGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createStickerCache,
      }),
      s = e.clearCacheFor,
      u = e.field,
      c = e.unsafeIdentityGetter,
      d = c,
      m = o("WAWebGetters").createGetterFactories({
        root: d,
        createCache: o("WAWebGettersCaches").createFrontendStickerCache,
      }),
      p = m.clearCacheFor,
      _ = m.field;
    function f(e) {
      (s(e), p(e));
    }
    var g = u("id"),
      h = u("filehash"),
      y = u("isCreateButton"),
      C = u("isPlaceholder"),
      b = u("mimetype"),
      v = _("mediaData");
    ((l.getStickerUnsafe = d),
      (l.clearStickerGetterCacheFor = f),
      (l.getId = g),
      (l.getFilehash = h),
      (l.getIsCreateButton = y),
      (l.getIsPlaceholder = C),
      (l.getMimetype = b),
      (l.getMediaData = v));
  },
  98,
);
