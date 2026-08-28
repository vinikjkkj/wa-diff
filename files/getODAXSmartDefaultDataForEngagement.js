__d(
  "getODAXSmartDefaultDataForEngagement",
  [
    "AdsAPIObjectives",
    "AdsCampaignLiveVideoAdsUtils",
    "AdsClickToCallAdsUtils",
    "AdsMessagesDefaultDestinationUtils",
    "AdsODAXConversionChannelsUtils",
    "AdsPromotedObjectTypes",
    "CallAdsMLDefaultingUtils",
    "ClickToMessageAdoptionPerformanceLongTermHoldout",
    "SharedSmartDefaultVariables",
    "adsShouldDefaultCTXFromGuidanceSourceInEngagementUtil",
    "cr:39253",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, a) {
      a === void 0 && (a = null);
      var i = o(
        "AdsMessagesDefaultDestinationUtils",
      ).getDefaultDataFromCTXUpsellSource();
      if (i != null) return i;
      var l = o(
        "AdsMessagesDefaultDestinationUtils",
      ).getDefaultDataFromCTWAAdUpsell();
      if (l != null) return l;
      var c = t.engagement;
      if (c == null || c.length === 0) return null;
      var d = c.find(function (e) {
        var t = e.source;
        return t === "ig_live_ads_source";
      });
      if (d != null) {
        var m;
        if (
          (o(
            "SharedSmartDefaultVariables",
          ).setEligibleIGLiveAdsSourceDefaultEngagement(!0),
          n("cr:39253") == null ||
            n("cr:39253").logIgLiveVideoAdsEvents(
              "ig_lva_conversion_location_defaulting_get_data",
              e.account_id,
              {
                objective: "OUTCOME_ENGAGEMENT",
                experiment_group: o(
                  "AdsCampaignLiveVideoAdsUtils",
                ).shouldDefaultLiveVideoConversionLocation(!1)
                  ? "test"
                  : "control",
              },
            ),
          ((m = a) == null || (m = m.promoted_object) == null
            ? void 0
            : m.live_video_destination) === "INSTAGRAM" ||
            o(
              "AdsCampaignLiveVideoAdsUtils",
            ).shouldDefaultLiveVideoConversionLocation(!1))
        )
          return d;
      }
      var p = o("AdsClickToCallAdsUtils").getDefaultFromCallAdsSource(c),
        _ = o("CallAdsMLDefaultingUtils").getCallAdsEngagementDefaultMLScore(
          e.account_id,
        );
      if (p != null || _ != null) {
        var f = p != null,
          g =
            _ != null &&
            _ >= o("CallAdsMLDefaultingUtils").ENGAGEMENT_THRESHOLD_A,
          h =
            _ != null &&
            _ >= o("CallAdsMLDefaultingUtils").ENGAGEMENT_THRESHOLD_B,
          y =
            _ != null &&
            _ >= o("CallAdsMLDefaultingUtils").ENGAGEMENT_THRESHOLD_C,
          C = f !== g || f !== h || f !== y;
        if (C) {
          o(
            "SharedSmartDefaultVariables",
          ).setEligibleCallAdsMLDefaultingEngagement(!0);
          var b = o(
              "CallAdsMLDefaultingUtils",
            ).getCallAdsMLGroupThresholdEngagement(),
            v = _ != null && _ >= b;
          (o("CallAdsMLDefaultingUtils").isCallAdsMLDefaultingEnabledEngagement(
            !1,
          ) &&
            (p = v
              ? o("CallAdsMLDefaultingUtils").CALL_ADS_ML_DEFAULT_DATA
              : null),
            o("CallAdsMLDefaultingUtils").logCallAdsMLDefaultingDecision(
              r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
              {
                controlDefault: f,
                finalDefault: p != null,
                mlScore: _,
                testDefault: v,
              },
            ));
        }
      }
      if (p != null) return p;
      var S = u(c),
        R = s(c);
      if (R != null)
        return S != null &&
          (o(
            "SharedSmartDefaultVariables",
          ).setEligibleCTXGuidanceSourceDefaultEngagement(!0),
          r("adsShouldDefaultCTXFromGuidanceSourceInEngagementUtil")(e, !0))
          ? S
          : R;
      var L = o("SharedSmartDefaultVariables").getQADefault(c);
      if (L != null) return L;
      var E = o("AdsMessagesDefaultDestinationUtils").getDefaultDataFromSpend(
        c,
      );
      if (E == null) {
        var k = o(
          "AdsMessagesDefaultDestinationUtils",
        ).getDefaultDataForWAApiUsersEngagement(c);
        if (k != null) return k;
      }
      var I = c[0];
      return S != null &&
        I.conversion_location !== r("AdsPromotedObjectTypes").MESSENGER &&
        o("AdsODAXConversionChannelsUtils").supportsMessengerPromotedObjectType(
          I.conversion_location,
        ) &&
        (o(
          "SharedSmartDefaultVariables",
        ).setEligibleCTXGuidanceSourceDefaultEngagement(!0),
        r("adsShouldDefaultCTXFromGuidanceSourceInEngagementUtil")(e, !0))
        ? S
        : I;
    }
    function s(e) {
      var t = e.find(function (e) {
        var t = e.source;
        return t === "holdout_default";
      });
      return (
        t != null && o("SharedSmartDefaultVariables").setEligibleCTXHoldout(!0),
        o(
          "ClickToMessageAdoptionPerformanceLongTermHoldout",
        ).isUserInLongTermCTXDefaultingHoldout(!1)
          ? t
          : null
      );
    }
    function u(e) {
      return e.find(function (e) {
        var t = e.source;
        return t === "ctx_guidance_source";
      });
    }
    l.default = e;
  },
  98,
);
