__d(
  "WAWebChatThemeGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebABProps").getABPropConfigValue("wa_web_chat_themes");
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_chat_themes_logging",
      );
    }
    function u() {
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_chat_themes_solid_wallpaper_sync_encode",
        )
      );
    }
    function c(e) {
      var t = e.isNotification,
        n = e.isSentByMe,
        r = e.isVibrant;
      return r && n && !t;
    }
    function d(e) {
      var t = e.isCallLink,
        n = e.isSentByMe,
        r = e.isVibrant;
      return t && n && !r;
    }
    ((l.isChatThemesEnabled = e),
      (l.isChatThemeLoggingEnabled = s),
      (l.isSolidWallpaperSyncEncodeEnabled = u),
      (l.shouldApplyVibrantOverride = c),
      (l.shouldApplyCallLinkContrastOverride = d));
  },
  98,
);
