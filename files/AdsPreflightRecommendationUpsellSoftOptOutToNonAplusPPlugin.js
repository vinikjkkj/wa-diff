__d(
  "AdsPreflightRecommendationUpsellSoftOptOutToNonAplusPPlugin",
  [
    "AdsPlacementUpsellSoftOptOutToNonAplusPGuidanceStrings",
    "AdsPreflightRecommendationPluginType",
    "AdsUEditorPreflightRecommendationPluginCommonConstants",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        key: "upsell_soft_opt_out_to_non_aplus_p",
        type: "preflight_recommendation",
        guidanceType: o("AdsPreflightRecommendationPluginType").PFRGuidanceTypes
          .RECOMMENDATION,
        recommendationType: "upsell_soft_opt_out_to_non_aplus_p",
        surfaceToRender: [
          o("AdsPreflightRecommendationPluginType").PFRPluginSurfaces
            .CREATION_FLOW_EDITOR,
          o("AdsPreflightRecommendationPluginType").PFRPluginSurfaces
            .CREATION_FLOW_INLINE_TAGGING,
        ],
        getAdObjectLevel: function () {
          return "ad_set";
        },
        getEstimateLiftOutcomeText: function () {
          return o("AdsUEditorPreflightRecommendationPluginCommonConstants")
            .EMPTY_FBT;
        },
        getEstimateLiftSourceText: function () {
          return o("AdsUEditorPreflightRecommendationPluginCommonConstants")
            .EMPTY_FBT;
        },
        getEstimateLiftSourceExplanationText: function () {
          return o("AdsPlacementUpsellSoftOptOutToNonAplusPGuidanceStrings")
            .UPSELL_SOFT_OPT_OUT_GUIDANCE_LIFT_SOURCE_EXPLANATION;
        },
        getHeaderText: function () {
          return o("AdsPlacementUpsellSoftOptOutToNonAplusPGuidanceStrings")
            .UPSELL_SOFT_OPT_OUT_GUIDANCE_HEADER;
        },
        getEligibilityCheck: function () {
          return new Map();
        },
        getLearnMoreCMSID: function () {
          return "";
        },
        getDescriptionText: function () {
          return o(
            "AdsPlacementUpsellSoftOptOutToNonAplusPGuidanceStrings",
          ).UPSELL_SOFT_OPT_OUT_GUIDANCE_DESCRIPTION();
        },
        getPrimaryButtonLabel: function () {
          return o("AdsUEditorPreflightRecommendationPluginCommonConstants")
            .APPLY_LABEL;
        },
        shouldUseURCForContent: function () {
          return !0;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
