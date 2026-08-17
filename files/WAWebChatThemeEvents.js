__d(
  "WAWebChatThemeEvents",
  ["WAWebChatPreferenceCollection", "useWAWebListener"],
  function (t, n, r, o, a, i, l) {
    var e = "chat_theme_drawer_open",
      s = "chat_theme_drawer_close",
      u = "wallpaper_preview";
    function c(t) {
      r("WAWebChatPreferenceCollection").trigger(e, t);
    }
    function d(t) {
      o("useWAWebListener").useListener(
        r("WAWebChatPreferenceCollection"),
        e,
        t,
      );
    }
    function m(e) {
      r("WAWebChatPreferenceCollection").trigger(s, e);
    }
    function p(e) {
      o("useWAWebListener").useListener(
        r("WAWebChatPreferenceCollection"),
        s,
        e,
      );
    }
    function _(e) {
      r("WAWebChatPreferenceCollection").trigger(u, e);
    }
    function f(e) {
      o("useWAWebListener").useListener(
        r("WAWebChatPreferenceCollection"),
        u,
        e,
      );
    }
    ((l.triggerChatThemeDrawerOpen = c),
      (l.useChatThemeDrawerOpenListener = d),
      (l.triggerChatThemeDrawerClose = m),
      (l.useChatThemeDrawerCloseListener = p),
      (l.triggerWallpaperPreview = _),
      (l.useWallpaperPreviewListener = f));
  },
  98,
);
