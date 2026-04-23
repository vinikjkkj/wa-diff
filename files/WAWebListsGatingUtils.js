__d(
  "WAWebListsGatingUtils",
  ["WAWebABProps", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue("lists_smb_web_enabled")
        : o("WAWebABProps").getABPropConfigValue("wa_web_lists_m1_enabled");
    }
    function s() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "lists_chat_list_row_pill_enabled",
        )
      );
    }
    function u() {
      return (
        e() &&
        !o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("wa_web_lists_m2_enabled")
      );
    }
    ((l.isListsEnabled = e),
      (l.isListsChatListRowPillEnabled = s),
      (l.isListsM2Enabled = u));
  },
  98,
);
