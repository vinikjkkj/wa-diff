__d(
  "WAWebPollsCagsGatingUtils",
  ["WAWebABProps", "WAWebPrimaryFeatures"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebPrimaryFeatures").primaryFeatureEnabled(
        "poll_creation_cag",
      )
        ? o("WAWebABProps").getABPropConfigValue("poll_creation_cag_enabled")
        : !1;
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
