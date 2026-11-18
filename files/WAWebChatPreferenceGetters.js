__d(
  "WAWebChatPreferenceGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createChatPreferenceCache,
      }),
      s = e.clearCacheFor,
      u = e.field,
      c = s,
      d = u("autoplayAnimatedImages"),
      m = u("chatThemeValue"),
      p = u("chatlistDensity"),
      _ = u("chatlistShowParentName"),
      f = u("enterIsSend"),
      g = u("hdMediaEnabled"),
      h = u("hdMediaQualityChosen"),
      y = u("spellcheck"),
      C = u("transformTextEmoji"),
      b = u("wallpaperValue");
    ((l.clearChatPreferenceGetterCacheFor = c),
      (l.getAutoplayAnimatedImages = d),
      (l.getChatThemeValue = m),
      (l.getChatlistDensity = p),
      (l.getChatlistShowParentName = _),
      (l.getEnterIsSend = f),
      (l.getHdMediaEnabled = g),
      (l.getHdMediaQualityChosen = h),
      (l.getSpellcheck = y),
      (l.getTransformTextEmoji = C),
      (l.getWallpaperValue = b));
  },
  98,
);
