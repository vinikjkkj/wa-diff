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
    function u(e) {
      var t = e.isNotification,
        n = e.isSentByMe,
        r = e.isVibrant;
      return r && n && !t;
    }
    ((l.isChatThemesEnabled = e),
      (l.isChatThemeLoggingEnabled = s),
      (l.shouldApplyVibrantOverride = u));
  },
  98,
);
