__d(
  "WAWebChatThemeGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebABProps").getABPropConfigValue("wa_web_chat_themes");
    }
    function s(e) {
      var t = e.isNotification,
        n = e.isSentByMe,
        r = e.isVibrant;
      return r && n && !t;
    }
    ((l.isChatThemesEnabled = e), (l.shouldApplyVibrantOverride = s));
  },
  98,
);
