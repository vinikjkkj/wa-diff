__d(
  "SYDExperimentationUtils",
  ["AdsDeliveryIntelligenceGuidanceQeExposureFalcoEvent", "gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return r("gkx")("16852");
    }
    function s() {
      return r("gkx")("18067");
    }
    function u() {
      return !!(r("gkx")("11416") || r("qex")._("3891"));
    }
    function c() {
      return !!(r("gkx")("22749") || r("qex")._("5073"));
    }
    function d() {
      return r("gkx")("13493") ? !0 : r("gkx")("11389");
    }
    function m() {
      return r("gkx")("13493") ? !0 : r("gkx")("14266");
    }
    function p() {
      return r("qex")._("2244") === !0;
    }
    function _() {
      return r("qex")._("2068") === !0;
    }
    function f() {
      return r("qex")._("890") === !0;
    }
    function g(e) {
      return e == null ? "null" : e === !0 ? "test" : "control";
    }
    function h(e) {
      return e === "ads_mfr_ple_improvements_h1_2026_universe"
        ? r("qex")._("4652") === "with_mr_ple_lift_estimation_with_plev2"
        : !1;
    }
    function y(e) {
      return r("gkx")("13888")
        ? !0
        : e == null
          ? !1
          : e.some(function (e) {
              var t;
              return h((t = e.qe_universe_name) != null ? t : "");
            });
    }
    var C = [
      "performant_creative_reels_opt_in",
      "multi_text",
      "uncrop_image",
      "fragmentation",
      "landing_page_view_optimization_goal",
      "mixed_formats",
      "reels_pc_recommendation",
      "aplusc_standard_enhancements_bundle",
    ];
    function b(e) {
      return e != null && C.includes(e);
    }
    function v(e) {
      return !!(
        r("gkx")("11843") ||
        e === "ads_mfr_cib_lift_ctx_content" ||
        e === "ads_midflight_cib_insights_expansion_h2_25_universe"
      );
    }
    function S(e, t) {
      var n = r("qex")._("3255");
      e != null &&
        r("AdsDeliveryIntelligenceGuidanceQeExposureFalcoEvent").log(
          function () {
            return {
              ad_account_id: e,
              experiment: "ads_guidance_audience_liquidity_content",
              event: "gen_qe_and_log_exposure",
              qe_group: n != null ? n : "null",
              exposure_surface: t != null ? t : "null",
              recommendation_type: "advantage_plus_audience",
              recommendation_stage: "mid_flight_recommendation",
              experiment_extra_data: {},
            };
          },
        );
    }
    function R(e, t) {
      var n = r("qex")._("3256");
      e != null &&
        r("AdsDeliveryIntelligenceGuidanceQeExposureFalcoEvent").log(
          function () {
            return {
              ad_account_id: e,
              experiment: "ads_guidance_audience_liquidity_content_aa_test",
              event: "gen_qe_and_log_exposure",
              qe_group: n != null ? n : "null",
              exposure_surface: t != null ? t : "null",
              recommendation_type: "advantage_plus_audience",
              recommendation_stage: "mid_flight_recommendation",
              experiment_extra_data: {},
            };
          },
        );
    }
    function L(e, t) {
      var n = r("qex")._("137"),
        o = g(n);
      e != null &&
        r("AdsDeliveryIntelligenceGuidanceQeExposureFalcoEvent").log(
          function () {
            return {
              ad_account_id: e,
              experiment: "ads_guidance_audience_mfr_narrow_audience_qe",
              event: "gen_qe_and_log_exposure",
              qe_group: o,
              exposure_surface: t != null ? t : "null",
              recommendation_type: "advantage_plus_audience",
              recommendation_stage: "mid_flight_recommendation",
              experiment_extra_data: {},
            };
          },
        );
    }
    function E(e, t) {
      var n = r("qex")._("180");
      e != null &&
        r("AdsDeliveryIntelligenceGuidanceQeExposureFalcoEvent").log(
          function () {
            return {
              ad_account_id: e,
              experiment: "ads_guidance_audience_mfr_narrow_audience_aa_qe",
              event: "gen_qe_and_log_exposure",
              qe_group: g(n),
              exposure_surface: t != null ? t : "null",
              recommendation_type: "advantage_plus_audience",
              recommendation_stage: "mid_flight_recommendation",
              experiment_extra_data: {},
            };
          },
        );
    }
    function k(e, t) {
      var n = r("qex")._("5725"),
        o = g(n);
      (e != null &&
        r("AdsDeliveryIntelligenceGuidanceQeExposureFalcoEvent").log(
          function () {
            return {
              ad_account_id: e,
              experiment: "ads_guidance_mfr_problem_statement_qe",
              event: "debug_event_after_processing",
              qe_group: o,
              exposure_surface: t != null ? t : "null",
              recommendation_type: "advantage_plus_audience",
              recommendation_stage: "mid_flight_recommendation",
              experiment_extra_data: {},
            };
          },
        ),
        !(o === "test" && !r("gkx")("15332")) &&
          ((o === "control" && !r("gkx")("15399")) ||
            (r("qex")._("5726"),
            e != null &&
              r("AdsDeliveryIntelligenceGuidanceQeExposureFalcoEvent").log(
                function () {
                  return {
                    ad_account_id: e,
                    experiment: "ads_guidance_mfr_problem_statement_qe",
                    event: "gen_qe_and_log_exposure",
                    qe_group: o,
                    exposure_surface: t != null ? t : "null",
                    recommendation_type: "advantage_plus_audience",
                    recommendation_stage: "mid_flight_recommendation",
                    experiment_extra_data: {},
                  };
                },
              ))));
    }
    function I(e, t) {
      var n = r("qex")._("5727");
      e != null &&
        r("AdsDeliveryIntelligenceGuidanceQeExposureFalcoEvent").log(
          function () {
            return {
              ad_account_id: e,
              experiment: "ads_guidance_mfr_problem_statement_aa_qe",
              event: "gen_qe_and_log_exposure",
              qe_group: g(n),
              exposure_surface: t != null ? t : "null",
              recommendation_type: "advantage_plus_audience",
              recommendation_stage: "mid_flight_recommendation",
              experiment_extra_data: {},
            };
          },
        );
    }
    function T(e, t, n) {
      switch (e) {
        case "ads_guidance_audience_liquidity_content":
          return S(t, n);
        case "ads_guidance_audience_liquidity_content_aa_test":
          return R(t, n);
        case "ads_guidance_audience_mfr_narrow_audience_qe":
          return L(t, n);
        case "ads_guidance_audience_mfr_narrow_audience_aa_qe":
          return E(t, n);
        case "guidance_hbt_train4_bundle3_h1_2026_universe":
          return k(t, n);
        case "guidance_hbt_train4_bundle3_h1_2026_aa_universe":
          return I(t, n);
      }
    }
    function D(e, t, n) {
      if (e != null) for (var r of e) T(r.qe_universe_name, t, n);
    }
    function x(e) {
      if (e != null) for (var t of e) $(t.qe_universe_name);
    }
    function $(e) {
      switch (e) {
        case "ads_pcr_content_improvements_h1_2026_ibt":
          P(e);
          break;
      }
    }
    function P(e) {
      return e === "ads_pcr_content_improvements_h1_2026_ibt"
        ? r("gkx")("5502")
        : !1;
    }
    function N() {
      return r("gkx")("17002");
    }
    function M() {
      return r("gkx")("17003");
    }
    function w() {
      return r("gkx")("17284");
    }
    function A() {
      return r("gkx")("1552");
    }
    function F() {
      return r("qex")._("5695") === !0;
    }
    function O(e) {
      var t;
      return (t =
        (e == null ? void 0 : e.includes("Led")) &&
        !(e != null && e.includes("Generic"))) != null
        ? t
        : !1;
    }
    ((l.enableRsmFrameworkForAdvantagePlusAudience = e),
      (l.enableRsmFrameworkForFragmentation = s),
      (l.isLearningPhaseDisclosureEnabled = u),
      (l.isLearningPhaseDisclosureEnabledWithoutExposureLogging = c),
      (l.isCampaignContextEnabledWithoutExposureLogging = d),
      (l.isCampaignContextEnabled = m),
      (l.isAdObjectLinkingEnabled = p),
      (l.isRecentCampaignsM2Enabled = _),
      (l.exposeRecentCampaignsM2 = f),
      (l.getQEGroupFromCompositeUtilsResult = g),
      (l.getShouldSeePLEV2ImprovementsFromInfos = y),
      (l.isPLEV2RecommendationType = b),
      (l.getShouldSeeCIBTest = v),
      (l.exposeAudienceLiquidityContentQE = S),
      (l.exposeAudienceLiquidityContentAAQE = R),
      (l.exposeNarrowAudienceQE = L),
      (l.exposeNarrowAudienceAAQE = E),
      (l.exposeContentQEs = T),
      (l.exposeAllContentQEs = D),
      (l.exposeAllContentGKs = x),
      (l.exposeContentGKs = $),
      (l.getShouldSeePCRContentImprovementsTest = P),
      (l.isLPVOptGoalOneClickApplyEnabled = N),
      (l.isPerformantCreativeReelsOptInOneClickApplyEnabled = M),
      (l.enableValueOptGoalImprovedResolutionFlow = w),
      (l.enableOffsiteConversionsImprovedResolutionFlow = A),
      (l.isGuidanceHubEmptyStateImproved = F),
      (l.isInsightsFocusedGuidanceGenericHeading = O));
  },
  98,
);
