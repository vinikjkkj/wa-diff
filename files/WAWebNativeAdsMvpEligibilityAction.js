__d(
  "WAWebNativeAdsMvpEligibilityAction",
  ["WAWebNativeAdsMvpEligibilityModel"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      e.type === "success"
        ? o("WAWebNativeAdsMvpEligibilityModel").setNativeAdsMvpEligibility(
            e.data,
          )
        : o("WAWebNativeAdsMvpEligibilityModel").markEligibilityLoadFailed();
    }
    l.loadedNativeAdsMvpEligibility = e;
  },
  98,
);
