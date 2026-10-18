__d(
  "WAWebHatchMuseBubble",
  [
    "WAWebBotUtils",
    "WAWebHatchFrontendGating",
    "WAWebHatchMuseBubbleTheme.stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      "--WAWeb-minimal-msg-bubble-shadow": "none",
      "--WAWeb-minimal-tail-shadow-opacity": "0",
    };
    function s(e, t) {
      return e == null || !o("WAWebBotUtils").isHatchBot(e)
        ? null
        : o("WAWebHatchFrontendGating").isHatchThemeColorsEnabled(e)
          ? t
            ? o("WAWebHatchMuseBubbleTheme.stylex").museThemedBubbleDark
            : o("WAWebHatchMuseBubbleTheme.stylex").museThemedBubbleLight
          : !t && o("WAWebHatchFrontendGating").isHatchJarvisRendererEnabled()
            ? o("WAWebHatchMuseBubbleTheme.stylex").museBubbleLight
            : null;
    }
    function u(e, t) {
      return o("WAWebHatchFrontendGating").isHatchThemeColorsEnabled(e)
        ? { isMinimalMode: !1, isVibrant: !1 }
        : t;
    }
    function c(t, n) {
      return o("WAWebHatchFrontendGating").isHatchThemeColorsEnabled(t)
        ? babelHelpers.extends({}, n, e)
        : n;
    }
    function d(e, t) {
      return o("WAWebHatchFrontendGating").isHatchThemeColorsEnabled(e)
        ? t
          ? o("WAWebHatchMuseBubbleTheme.stylex").museWallpaperDark
          : o("WAWebHatchMuseBubbleTheme.stylex").museWallpaperLight
        : null;
    }
    function m(e, t, n) {
      var r = d(e, t);
      if (r == null) return n;
      var o = {};
      for (var a of Object.keys(n.backgroundWrapperStyle))
        a.startsWith("--") || (o[a] = n.backgroundWrapperStyle[a]);
      return { backgroundWrapperStyle: o, wallpaperStyle: r };
    }
    ((l.getHatchMuseBubbleStyle = s),
      (l.getHatchMuseChatThemeFlags = u),
      (l.withHatchMuseInlineOverrides = c),
      (l.getHatchMuseWallpaperStyle = d),
      (l.getHatchMusePanelTheme = m));
  },
  98,
);
