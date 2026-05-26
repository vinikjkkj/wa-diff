__d(
  "WAWebBizToolsGatingUtils",
  ["WAWebABProps", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "web_business_tools_drawer_enabled",
        )
      );
    }
    function s() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function u() {
      return s() && o("WAWebABProps").getABPropConfigValue("smb_core_rec_card");
    }
    ((l.isBizToolsDrawerEnabled = e),
      (l.isBizToolsTopCardEnabled = s),
      (l.isRecCardEnabled = u));
  },
  98,
);
