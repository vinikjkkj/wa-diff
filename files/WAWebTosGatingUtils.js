__d(
  "WAWebTosGatingUtils",
  ["WAWebABProps", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebMobilePlatforms").isSMB()
        ? !1
        : o("WAWebABProps").getABPropConfigValue("tos_3_client_gating_enabled");
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "tos_client_state_fetch_iteration",
      );
    }
    function u() {
      return o("WAWebMobilePlatforms").isSMB()
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "tos_client_state_fetch_enabled",
          );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "country_client_gating_enabled",
      );
    }
    ((l.tos3GatingEnabled = e),
      (l.tosFetchIteration = s),
      (l.tosFetchEnabled = u),
      (l.countryGatingEnabled = c));
  },
  98,
);
