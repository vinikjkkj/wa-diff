__d(
  "WAWebPollsCagsGatingUtils",
  ["WAWebABProps", "WAWebMobilePlatforms", "WAWebPrimaryFeatures"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (o("WAWebMobilePlatforms").isSMB() &&
        !o("WAWebABProps").getABPropConfigValue(
          "parent_group_view_enabled_for_smb_on_web",
        )) ||
        !o("WAWebPrimaryFeatures").primaryFeatureEnabled("poll_creation_cag")
        ? !1
        : o("WAWebABProps").getABPropConfigValue("poll_creation_cag_enabled");
    }
    function s() {
      return e()
        ? !0
        : o("WAWebABProps").getABPropConfigValue("poll_receiving_cag_enabled");
    }
    ((l.isPollsCreationEnabledInCags = e),
      (l.isPollsReceivingEnabledInCags = s));
  },
  98,
);
