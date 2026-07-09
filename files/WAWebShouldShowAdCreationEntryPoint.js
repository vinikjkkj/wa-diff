__d(
  "WAWebShouldShowAdCreationEntryPoint",
  [
    "WAWebActiveAccountInfoContext.react",
    "WAWebAuthAgentFeatureControlGateKeeper",
    "WAWebMobilePlatforms",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.activeAccountInfo,
        n = e.isEligibleWhenNotLinked;
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        t != null &&
        (t !== "not-linked" || n()) &&
        !o("WAWebAuthAgentFeatureControlGateKeeper").isFeatureDisabled(
          "CTW_ADS",
        )
      );
    }
    function s(t) {
      var n = t.isEligibleWhenNotLinked;
      return e({
        activeAccountInfo: o(
          "WAWebActiveAccountInfoContext.react",
        ).getActiveAccountInfo(),
        isEligibleWhenNotLinked: n,
      });
    }
    ((l.computeShouldShowAdCreationEntryPoint = e),
      (l.getShouldShowAdCreationEntryPoint = s));
  },
  98,
);
