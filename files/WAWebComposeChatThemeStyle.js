__d(
  "WAWebComposeChatThemeStyle",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return e === void 0 ? t : l(e, t);
    }
    function l(e, t) {
      return e == null ? null : t != null && s(t) === s(e) ? t : e;
    }
    function s(e) {
      return String(e).replace(/@.*$/, "");
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
    ((i.resolvePreviewWallpaperThemeId = e),
      (i.resolveWallpaperThemeId = l),
      (i.composeChatThemeStyleSplit = u));
  },
  66,
);
