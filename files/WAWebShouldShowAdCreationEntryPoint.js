__d(
  "WAWebShouldShowAdCreationEntryPoint",
  [
    "WAWebActiveAccountInfoContext.react",
    "WAWebAuthAgentFeatureControlGateKeeper",
    "WAWebMobilePlatforms",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.activeAccountInfo;
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        t != null &&
        !o("WAWebAuthAgentFeatureControlGateKeeper").isFeatureDisabled(
          "CTW_ADS",
        )
      );
    }
    function s() {
      return e({
        activeAccountInfo: o(
          "WAWebActiveAccountInfoContext.react",
        ).getActiveAccountInfo(),
      });
    }
    ((l.computeShouldShowAdCreationEntryPoint = e),
      (l.getShouldShowAdCreationEntryPoint = s));
  },
  98,
);
