__d(
  "WAWebListsLabelGatingUtils",
  ["WAWebABProps", "WAWebListsGatingUtils", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebMobilePlatforms").isSMB() ||
        o("WAWebListsGatingUtils").isListsEnabled()
      );
    }
    function s() {
      return (
        (o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebABProps").getABPropConfigValue("smart_filters_enabled")) ||
        (!o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebABProps").getABPropConfigValue(
            "smart_filters_enabled_consumer",
          ))
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_smb_label_chat_header_enabled_web",
      );
    }
    ((l.labelsEditingEnabled = e),
      (l.smartFiltersEnabled = s),
      (l.isCTWASMBLabelChatHeaderEnabledWeb = u));
  },
  98,
);
