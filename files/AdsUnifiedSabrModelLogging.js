__d(
  "AdsUnifiedSabrModelLogging",
  ["AdsDeliveryIntelligenceGuidanceQeExposureFalcoEvent", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("justknobx")._("5648");
    }
    function s(e) {
      return e ? "test" : "control_or_not_in_experiment";
    }
    var u = new Set();
    function c(t) {
      !e() ||
        u.has(t) ||
        (u.add(t),
        r("AdsDeliveryIntelligenceGuidanceQeExposureFalcoEvent").log(
          function () {
            return {
              ad_account_id: null,
              event: "gen_qe_without_logging_exposure",
              experiment: "pfr_of_sabr_unified_model_defaulting",
              experiment_extra_data: {
                raw_recommendation_type: t,
                sub_event: "unmapped_recommendation_type",
              },
              exposure_surface: "sabr_budget_defaulting",
              qe_group: null,
              recommendation_stage: "preflight",
              recommendation_type: "outcome_forecaster_budget_recommendation",
            };
          },
        ));
    }
    var d = new Set();
    function m(t, n, o, a, i, l) {
      if (e()) {
        var u =
          (t != null ? t : "") + ":" + (n != null ? n : "") + ":" + String(o);
        d.has(u) ||
          (d.add(u),
          r("AdsDeliveryIntelligenceGuidanceQeExposureFalcoEvent").log(
            function () {
              return {
                ad_account_id: t,
                event: "gen_qe_and_log_exposure",
                experiment: "pfr_of_sabr_unified_model_defaulting",
                experiment_extra_data: {
                  defaulted_budget: i != null ? String(i) : null,
                  objective: n != null ? String(n) : null,
                  recommendation_type: l,
                  sub_event: "defaulting_notice_baseline",
                },
                exposure_surface: o
                  ? "defaulting_notice_cbo_l3"
                  : "defaulting_notice_l2",
                qe_group: s(a),
                recommendation_stage: "preflight",
                recommendation_type: "outcome_forecaster_budget_recommendation",
              };
            },
          ));
      }
    }
    var p = new Set();
    function _(t, n, o, a) {
      if (e()) {
        var i = (t != null ? t : "") + ":" + n;
        p.has(i) ||
          (p.add(i),
          r("AdsDeliveryIntelligenceGuidanceQeExposureFalcoEvent").log(
            function () {
              return {
                ad_account_id: t,
                event: "gen_qe_and_log_exposure",
                experiment: "pfr_of_sabr_unified_model_guidance",
                experiment_extra_data: {
                  ad_object_id: n,
                  sub_event: "guidance_query_reach",
                  would_newly_reach: a ? "true" : "false",
                },
                exposure_surface: "guidance_card_l2",
                qe_group: s(o),
                recommendation_stage: "preflight",
                recommendation_type: "outcome_forecaster_budget_recommendation",
              };
            },
          ));
      }
    }
    var f = new Set();
    function g(t, n, o, a, i, l) {
      if (e()) {
        var u = (t != null ? t : "") + ":" + n;
        f.has(u) ||
          (f.add(u),
          r("AdsDeliveryIntelligenceGuidanceQeExposureFalcoEvent").log(
            function () {
              return {
                ad_account_id: t,
                event: "gen_qe_and_log_exposure",
                experiment: "pfr_of_sabr_unified_model_guidance",
                experiment_extra_data: {
                  ad_object_id: n,
                  is_seasonality_exempt: l ? "true" : "false",
                  sub_event: "suppression_would_flip",
                  suppressed_by_budget_alone: i ? "true" : "false",
                  suppressed_today: a ? "true" : "false",
                  would_flip: a !== i ? "true" : "false",
                },
                exposure_surface: "guidance_card_l2",
                qe_group: s(o),
                recommendation_stage: "preflight",
                recommendation_type: "outcome_forecaster_budget_recommendation",
              };
            },
          ));
      }
    }
    ((l.logUnmappedSabrRecommendationType = c),
      (l.logUnifiedModelDefaultingBaseline = m),
      (l.logUnifiedModelGuidanceQueryWouldReach = _),
      (l.logUnifiedModelSuppressionWouldFlip = g));
  },
  98,
);
