__d(
  "insituGuidanceTypeGate",
  ["AdsDeliveryColumnMFRsQEUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n, r;
      return {
        ad_object_ids: e.adObjectIds,
        ad_object_level: e.adObjectLevel,
        recommendation_hash_string:
          (n = e.recommendationHashString) != null ? n : "",
        recommendation_hash_id: 0,
        recommendation_id: e.guidanceId,
        recommendation_type: t,
        www_request_id: e.wwwRequestId,
        guidance_version: null,
        generated_time: null,
        guidance_score: null,
        ab_test_eligible_ad_object: null,
        learning_phase_info: null,
        is_precreate: (r = e.isPrecreate) != null ? r : !1,
        is_seen_by_user: !1,
        feedback_type: null,
        worst_performing_ad_object_ids: [],
        extra_data: null,
        fragmentation_extra_data: null,
        root_cause_identifier_extra_data: null,
        guidance_likelihood: null,
        recommendation_stage: null,
        autoflow_extra_data: null,
        automatic_placements_extra_data: null,
        creative_fatigue_extra_data: null,
        scale_good_campaign_extra_data: null,
        scale_good_vo_campaign_extra_data: null,
      };
    }
    function s(t, n) {
      var r = n == null ? void 0 : n.recommendationType;
      if (n == null || r == null || t == null) return !0;
      var a = o(
        "AdsDeliveryColumnMFRsQEUtils",
      ).getExperimentalExcludedRecommendations(t, [e(n, r)]);
      return !a.includes(r);
    }
    ((l.buildInsituGuidanceRecommendation = e),
      (l.isInsituGuidanceTypeSupported = s));
  },
  98,
);
