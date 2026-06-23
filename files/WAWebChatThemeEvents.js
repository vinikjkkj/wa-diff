__d(
  "WAWebChatThemeEvents",
  ["WAWebChatPreferenceCollection", "useWAWebListener"],
  function (t, n, r, o, a, i, l) {
    var e = "chat_theme_drawer_open",
      s = "chat_theme_drawer_close",
      u = "wallpaper_preview",
      c = "minimal_mode_active";
    function d(t) {
      r("WAWebChatPreferenceCollection").trigger(e, t);
    }
    function m(t) {
      o("useWAWebListener").useListener(
        r("WAWebChatPreferenceCollection"),
        e,
        t,
      );
    }
    function p(e) {
      r("WAWebChatPreferenceCollection").trigger(s, e);
    }
    function _(e) {
      o("useWAWebListener").useListener(
        r("WAWebChatPreferenceCollection"),
        s,
        e,
      );
    }
    function f(e) {
      r("WAWebChatPreferenceCollection").trigger(u, e);
    }
    function g(e) {
      o("useWAWebListener").useListener(
        r("WAWebChatPreferenceCollection"),
        u,
        e,
      );
    }
    function h(e) {
      r("WAWebChatPreferenceCollection").trigger(c, e);
    }
    function y(e) {
      o("useWAWebListener").useListener(
        r("WAWebChatPreferenceCollection"),
        c,
        e,
      );
    }
    ((l.triggerChatThemeDrawerOpen = d),
      (l.useChatThemeDrawerOpenListener = m),
      (l.triggerChatThemeDrawerClose = p),
      (l.useChatThemeDrawerCloseListener = _),
      (l.triggerWallpaperPreview = f),
      (l.useWallpaperPreviewListener = g),
      (l.triggerMinimalModeActive = h),
      (l.useMinimalModeActiveListener = y));
  },
  98,
);
