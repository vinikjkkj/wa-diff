__d(
  "useWAWebNativeAdsMvpEligibility",
  [
    "WAWebMobilePlatforms",
    "WAWebNativeAdsMvpEligibilityModel",
    "WAWebUserPrefsCTWA",
    "WAWebWorkerSafeBackendApi",
    "justknobx",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d() {
      var e = c(
          o("WAWebNativeAdsMvpEligibilityModel").buildEligibilitySnapshot,
        ),
        t = e[0],
        n = e[1];
      return (
        o("useWAWebListener").useListener(
          o("WAWebNativeAdsMvpEligibilityModel")
            .NativeAdsMvpEligibilityEventBus,
          "updated",
          n,
        ),
        u(function () {
          if (
            o("WAWebMobilePlatforms").isSMB() &&
            !o("WAWebNativeAdsMvpEligibilityModel").isEligibilityDataLoaded()
          ) {
            if (r("justknobx")._("4235")) {
              var e = o("WAWebUserPrefsCTWA").getNativeAdsMvpEligibility();
              if (e != null) {
                o(
                  "WAWebNativeAdsMvpEligibilityModel",
                ).setNativeAdsMvpEligibility(e);
                return;
              }
            }
            o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
              "fetchNativeAdsMvpEligibility",
            );
          }
        }, []),
        t
      );
    }
    l.useNativeAdsMvpEligibility = d;
  },
  98,
);
