__d(
  "WAWebListsGatingUtils",
  ["WAWebABProps", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "lists_chat_list_row_pill_enabled",
        )
      );
    }
    function s() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue("lists_smb_web_m2_enabled2")
        : o("WAWebABProps").getABPropConfigValue("wa_web_lists_m2_enabled");
    }
    function u() {
      return o("WAWebMobilePlatforms").isSMB() ? !0 : s();
    }
    ((l.isListsChatListRowPillEnabled = e),
      (l.isListsM2Enabled = s),
      (l.isLabelReorderEnabled = u));
  },
  98,
);
