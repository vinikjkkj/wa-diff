__d(
  "WAWebBizNativeAdsBootstrap",
  [
    "WAWebBizNativeAdsBoostLanding",
    "WAWebBizNativeAdsEntryTask",
    "WAWebBizNativeAdsFlowTypes",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return n != null
        ? u(e)
          ? s({ kind: "manage" })
          : s(n)
        : o("WAWebBizNativeAdsBoostLanding").shouldBoostOpenAdCreation(e, t)
          ? {
              initialStack: e === "RETURNING_WITH_ADS" ? c() : null,
              initialStep: o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                .AdCreation,
              preparation: {},
            }
          : {
              initialStack: null,
              initialStep: o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                .AdManagement,
              preparation: null,
            };
    }
    function s(e) {
      var t = o(
        "WAWebBizNativeAdsEntryTask",
      ).getNativeAdsTaskPreparationOptions(e);
      return t == null
        ? {
            initialStack: null,
            initialStep: o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
              .AdManagement,
            preparation: null,
          }
        : {
            initialStack: c(),
            initialStep: o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
              .AdCreation,
            preparation: babelHelpers.extends({}, t),
          };
    }
    function u(e) {
      return (
        e === "FIRST_TIME_NOT_WAA_ELIGIBLE" ||
        e === "HAS_FB_ADS_NOT_WAA_ELIGIBLE"
      );
    }
    function c() {
      return [
        o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement,
        o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation,
      ];
    }
    ((l.getNativeAdsBootstrap = e), (l.getNativeAdsTaskBootstrap = s));
  },
  98,
);
