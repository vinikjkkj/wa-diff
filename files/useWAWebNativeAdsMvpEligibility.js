__d(
  "useWAWebNativeAdsMvpEligibility",
  [
    "WAWebMobilePlatforms",
    "WAWebNativeAdsMvpEligibilityModel",
    "WAWebUserPrefsCTWA",
    "WAWebWorkerSafeBackendApi",
    "justknobx",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d() {
      var e = o("react-compiler-runtime").c(1),
        t = c(o("WAWebNativeAdsMvpEligibilityModel").buildEligibilitySnapshot),
        n = t[0],
        r = t[1];
      o("useWAWebListener").useListener(
        o("WAWebNativeAdsMvpEligibilityModel").NativeAdsMvpEligibilityEventBus,
        "updated",
        r,
      );
      var a;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = []), (e[0] = a))
          : (a = e[0]),
        u(m, a),
        n
      );
    }
    function m() {
      if (
        o("WAWebMobilePlatforms").isSMB() &&
        !o("WAWebNativeAdsMvpEligibilityModel").isEligibilityDataLoaded()
      ) {
        if (r("justknobx")._("4235")) {
          var e = o("WAWebUserPrefsCTWA").getNativeAdsMvpEligibility();
          if (e != null) {
            o("WAWebNativeAdsMvpEligibilityModel").setNativeAdsMvpEligibility(
              e,
            );
            return;
          }
        }
        o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
          "fetchNativeAdsMvpEligibility",
        );
      }
    }
    l.useNativeAdsMvpEligibility = d;
  },
  98,
);
