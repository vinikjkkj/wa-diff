__d(
  "WAWebHatchBubble",
  ["WAWebHatchBubbleTheme.stylex", "WAWebHatchFrontendGating"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      "--WAWeb-minimal-msg-bubble-shadow": "none",
      "--WAWeb-minimal-tail-shadow-opacity": "0",
    };
    function s(e, t) {
      return o("WAWebHatchFrontendGating").isHatchThemeColorsEnabled(e)
        ? t
          ? o("WAWebHatchBubbleTheme.stylex").hatchThemedBubbleDark
          : o("WAWebHatchBubbleTheme.stylex").hatchThemedBubbleLight
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
          ? o("WAWebHatchBubbleTheme.stylex").hatchSendButtonDark
          : o("WAWebHatchBubbleTheme.stylex").hatchSendButtonLight
        : null;
    }
    function m(e, t) {
      return o("WAWebHatchFrontendGating").isHatchThemeColorsEnabled(e)
        ? t
          ? o("WAWebHatchBubbleTheme.stylex").hatchWallpaperDark
          : o("WAWebHatchBubbleTheme.stylex").hatchWallpaperLight
        : null;
    }
    function p(e, t, n) {
      var r = m(e, t);
      if (r == null) return n;
      var o = {};
      for (var a of Object.keys(n.backgroundWrapperStyle))
        a.startsWith("--") || (o[a] = n.backgroundWrapperStyle[a]);
      return { backgroundWrapperStyle: o, wallpaperStyle: r };
    }
    ((l.getHatchBubbleStyle = s),
      (l.getHatchChatThemeFlags = u),
      (l.withHatchInlineOverrides = c),
      (l.getHatchSendButtonTheme = d),
      (l.getHatchWallpaperStyle = m),
      (l.getHatchPanelTheme = p));
  },
  98,
);
