__d(
  "WAWebComposeChatThemeStyle",
  ["WAWebChatThemeEnums", "WAWebChatThemeValue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e === void 0 ? t : s(e, t);
    }
    function s(e, t) {
      return e == null
        ? null
        : o("WAWebChatThemeValue").isMinimalScheme(e) ||
            t == null ||
            t === o("WAWebChatThemeEnums").Theme.Default
          ? e
          : t;
    }
    function u(e) {
      var t = e.bubbleColorSchemeId,
        n = e.chatThemeModule,
        r = e.themeMode,
        o = e.wallpaperThemeId;
      if (n == null) return { wallpaperStyle: null, bubbleStyle: null };
      if (o == null) {
        var a = t != null ? n.getBubbleTheme(t, r) : null;
        return { wallpaperStyle: null, bubbleStyle: a };
      }
      var i = n.getChatTheme(o, r);
      return t == null || t === o
        ? { wallpaperStyle: i, bubbleStyle: null }
        : { wallpaperStyle: i, bubbleStyle: n.getBubbleTheme(t, r) };
    }
    ((l.resolvePreviewWallpaperThemeId = e),
      (l.resolveWallpaperThemeId = s),
      (l.composeChatThemeStyleSplit = u));
  },
  98,
);
