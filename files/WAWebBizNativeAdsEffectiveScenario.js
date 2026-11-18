__d(
  "WAWebBizNativeAdsEffectiveScenario",
  ["WAWebBizNativeAdsScenarioRouter"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      if (e == null)
        return {
          effectiveScenario: n != null ? n : "RETURNING_WITH_ADS",
          isFbAuthRecovery: !1,
        };
      var r = e.linkedPagesInfo;
      if (r != null) {
        var a;
        return {
          effectiveScenario: o(
            "WAWebBizNativeAdsScenarioRouter",
          ).resolveNativeAdsScenario({
            activeIdentityType: (a = e.accountType) != null ? a : "FB",
            fbPageHasCreatedAd: r.fbPageHasCreatedAd,
            hasValidFBAccessToken: t || e.accountType === "FB",
            isWAAEligible: e.isWAAEligible,
            waAdsIdentityPageHasCreatedAd: r.waAdsIdentityPageHasCreatedAd,
          }),
          isFbAuthRecovery: !1,
        };
      }
      return e.isWAAEligible
        ? e.relayEnvironment == null &&
          e.accountType !== "WAA" &&
          !e.isSwitching
          ? {
              effectiveScenario: "HAS_FB_ADS_NO_FB_ACCESS_TOKEN",
              isFbAuthRecovery: !0,
            }
          : {
              effectiveScenario: n != null ? n : "RETURNING_WITH_ADS",
              isFbAuthRecovery: !1,
            }
        : {
            effectiveScenario: "FIRST_TIME_NOT_WAA_ELIGIBLE",
            isFbAuthRecovery: !1,
          };
    }
    l.resolveEffectiveNativeAdsScenario = e;
  },
  98,
);
