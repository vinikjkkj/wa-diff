__d(
  "WAWebBizAdCreationContinuousDurationUtils",
  ["TWAWebBizAdCreationSpec", "WAWebBizNativeAdsGatingUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        o("WAWebBizNativeAdsGatingUtils").continuousDurationEnabled() &&
        e === o("TWAWebBizAdCreationSpec").CONTINUOUS_DURATION
      );
    }
    l.isContinuousDurationActive = e;
  },
  98,
);
