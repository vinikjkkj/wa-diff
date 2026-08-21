__d(
  "WAWebChatEmptyStateGatingUtils",
  ["WAWebABProps", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue(
            "wa_web_smb_chat_empty_state_v2_enabled",
          )
        : !0;
    }
    l.isRefreshedChatEmptyStateEnabled = e;
  },
  98,
);
