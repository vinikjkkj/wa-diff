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
      p = u("enterIsSend"),
      _ = u("hdMediaEnabled"),
      f = u("spellcheck"),
      g = u("transformTextEmoji"),
      h = u("wallpaperValue");
    ((l.clearChatPreferenceGetterCacheFor = c),
      (l.getAutoplayAnimatedImages = d),
      (l.getChatThemeValue = m),
      (l.getEnterIsSend = p),
      (l.getHdMediaEnabled = _),
      (l.getSpellcheck = f),
      (l.getTransformTextEmoji = g),
      (l.getWallpaperValue = h));
  },
  98,
);
