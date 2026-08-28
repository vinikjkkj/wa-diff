__d(
  "AdsGuidanceUnifiedEventsLoggingUtils",
  [
    "AdsGuidanceActionsPerfScoreQEUtils",
    "AdsGuidanceUnifiedEventsLoggerFalcoEvent",
    "AdsManagerAppConfig",
    "AdsPERouterHelper",
    "DateTime",
    "Timezone",
    "objectEntries",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.event,
        n = e.eventCategory,
        a = e.adAccountID,
        i = e.adObjectIDs,
        l = e.adObjectLevel,
        s = e.gk_exposures,
        c = e.qe_exposures,
        d = e.recommendationSource,
        m = e.recommendationHash,
        p = e.recommendationType,
        g = e.recommendationName,
        h = e.component,
        y = e.message,
        C = e.surface,
        b = e.channel,
        v = e.widget,
        S = e.wwwRequestID,
        R = e.featureVariant,
        L = e.frameworkCoverage,
        E = e.errorCode,
        k = e.errorSubcode,
        I = e.errorType,
        T = e.stackTrace,
        D = e.logLevel,
        x = D === void 0 ? "info" : D,
        $ = e.client_latency,
        P = e.account_os,
        N = e.os_lift,
        M = e.os_version,
        w =
          M === void 0
            ? o(
                "AdsGuidanceActionsPerfScoreQEUtils",
              ).getOpportunityScoreVersionNameForUGP()
            : M,
        A = e.os_score_map,
        F = e.resolution_type,
        O = L
          ? Object.fromEntries(
              r("objectEntries")(L).map(function (e) {
                var t = e[0],
                  n = e[1];
                return [t, String(Math.round(n))];
              }),
            )
          : void 0,
        B = {
          actual_event_time:
            r("DateTime")
              .now(o("Timezone").getEnvironmentTimezoneID())
              .getUnixTimestamp() / 1e3,
          ad_account_id: a,
          ad_object_ids: i,
          ad_object_level: String(l),
          channel: b,
          client_latency: $,
          component: h != null ? h : f(d),
          event: t,
          event_category: n,
          guidance_name: g,
          guidance_type: p,
          gk_exposures: s,
          qe_exposures: c,
          message: y,
          rec_hash: m,
          referral_source: u(d),
          surface: C,
          widget: v != null ? v : _(d),
          request_id: S,
          log_level_override: x,
          feature_variant: R,
          framework_coverage: O,
          error_code: E,
          error_subcode: k,
          error_type: I,
          stack_trace: T,
          session_id: o("AdsManagerAppConfig").sessionID,
          account_os: P,
          os_lift: N,
          os_version: w,
          os_score_map: A ? Object.fromEntries(A) : null,
          resolution_type: F,
        };
      r("AdsGuidanceUnifiedEventsLoggerFalcoEvent").log(function () {
        return B;
      });
    }
    function s(e) {
      var t = e.event,
        n = e.eventCategory,
        a = e.account_os,
        i = e.adAccountID,
        l = e.adObjectIDs,
        s = e.adObjectLevel,
        c = e.gk_exposures,
        d = e.qe_exposures,
        m = e.recommendationSource,
        p = e.component,
        g = e.message,
        h = e.os_version,
        y =
          h === void 0
            ? o(
                "AdsGuidanceActionsPerfScoreQEUtils",
              ).getOpportunityScoreVersionNameForUGP()
            : h,
        C = e.surface,
        b = e.channel,
        v = e.widget,
        S = e.wwwRequestID,
        R = e.featureVariant,
        L = e.errorCode,
        E = e.errorSubcode,
        k = e.errorType,
        I = e.stackTrace,
        T = e.logLevel,
        D = T === void 0 ? "info" : T,
        x = e.client_latency,
        $ = {
          account_os: a,
          actual_event_time:
            r("DateTime")
              .now(o("Timezone").getEnvironmentTimezoneID())
              .getUnixTimestamp() / 1e3,
          ad_account_id: i,
          ad_object_ids: l,
          ad_object_level: String(s),
          channel: b,
          client_latency: x,
          component: p != null ? p : f(m),
          event: t,
          event_category: n,
          guidance_name: "",
          guidance_type: "",
          gk_exposures: c,
          qe_exposures: d,
          message: g,
          os_version: y,
          rec_hash: "",
          referral_source: u(m),
          surface: C,
          widget: v != null ? v : _(m),
          request_id: S,
          log_level_override: D,
          feature_variant: R,
          error_code: L,
          error_subcode: E,
          error_type: k,
          stack_trace: I,
          session_id: o("AdsManagerAppConfig").sessionID,
        };
      r("AdsGuidanceUnifiedEventsLoggerFalcoEvent").log(function () {
        return $;
      });
    }
    function u(e) {
      switch (e) {
        case "email":
        case "email_v2":
          return "email";
        case "jewel":
        case "jewel_v2":
          return "jewel";
        case "benchmark_report":
          return "benchmark_report";
        case "anomaly_detection_inspect_side_panel":
          return "anomaly_detection_inspect_side_panel";
        case "anomaly_detection_hovercard":
          return "anomaly_detection_hovercard";
        case "benchmark_triggers_hovercard":
          return "benchmark_triggers_hovercard";
        case "benchmark_triggers_side_panel":
          return "benchmark_triggers_side_panel";
        case "automation_insights_hovercard":
          return "automation_insights_hovercard";
        case "close_the_loop_insights_hovercard":
          return "close_the_loop_insights_hovercard";
        case "close_the_loop_insights_sidepanel":
          return "close_the_loop_insights_sidepanel";
        default:
          return "organic";
      }
    }
    function c(e) {
      switch (e) {
        case "ads_manager_table":
        case "delivery_column":
        case "recommendation_column":
          return "ads_manager_table";
        case "anomaly_detection_inspect_side_panel":
        case "anomaly_detection_hovercard":
        case "benchmark_triggers_hovercard":
        case "benchmark_triggers_side_panel":
          return "applied_insights";
        case "performance_summary":
          return "performance_summary";
        case "start_your_day":
          return "start_your_day";
        default:
          return "undefined";
      }
    }
    function d(e) {
      switch (e) {
        case "performance_summary":
        case "actions_panel":
          return "performance_summary";
        case "delivery_column":
        case "recommendation_column":
        case "guidance_column":
        case "ads_manager_table":
        case "table_cta":
        case "benchmark_report":
        case "actions_column":
        case "os_score_hovercard":
        case "post_adoption_budget_scaling_hovercard":
        case "post_adoption_budget_scaling_side_panel":
        case "learning_phase_hovercard":
          return "ads_manager_table";
        case "anomaly_detection_inspect_side_panel":
        case "anomaly_detection_hovercard":
        case "benchmark_triggers_hovercard":
        case "benchmark_triggers_side_panel":
          return "applied_insights";
        case "ads_ai":
          return "ads_ai";
        case "guidance_hub_v3":
        case "account_overview":
          return "start_your_day";
        default:
          return "undefined";
      }
    }
    function m(e) {
      if (e == null) return 5;
      switch (e) {
        case "CAMPAIGN":
          return 5;
        case "CAMPAIGN_GROUP":
          return 6;
        case "ACCOUNT":
        case "BUSINESS_ACCOUNT":
          return 7;
        case "CREATIVE":
          return 3;
        case "ADGROUP":
          return 4;
        case "MESSAGES":
          return 23;
        default:
          return 5;
      }
    }
    function p(e) {
      switch (e) {
        case "anomaly_detection_inspect_side_panel":
        case "anomaly_detection_hovercard":
        case "benchmark_triggers_hovercard":
        case "benchmark_triggers_side_panel":
        case "delivery_column":
        case "recommendation_column":
        case "os_score_hovercard":
        case "learning_phase_hovercard":
          return "guidance_card_explicit_impression";
        case "industry_benchmark_di_widget":
        default:
          return "guidance_card_implicit_impression";
      }
    }
    function _(e) {
      switch (e) {
        case "delivery_column":
          return "delivery_column";
        case "recommendation_column":
          return "recommendation_column";
        case "guidance_hub_v2":
          return "guidance_hub_v2";
        case "guidance_hub_v3":
        case "account_overview":
          return "guidance_hub_v3";
        case "guidance_column":
          return "guidance_column";
        case "manual_edit_flow":
          return "manual_edit_flow";
        case "os_score_hovercard":
          return "os_score_hovercard";
        case "actions_column":
          return "actions_column";
        case "anomaly_detection_inspect_side_panel":
          return "anomaly_detection_inspect_side_panel";
        case "anomaly_detection_hovercard":
          return "anomaly_detection_hovercard";
        case "benchmark_triggers_hovercard":
          return "benchmark_triggers_hovercard";
        case "benchmark_triggers_side_panel":
          return "benchmark_triggers_side_panel";
        case "budget_column":
          return "budget_column";
        case "performance_summary_budget_tab":
          return "performance_summary_budget_tab";
        case "post_adoption_budget_scaling_hovercard":
          return "post_adoption_budget_scaling_hovercard";
        case "post_adoption_budget_scaling_side_panel":
          return "post_adoption_budget_scaling_side_panel";
        case "learning_phase_hovercard":
          return "learning_phase_hovercard";
        default:
          return null;
      }
    }
    function f(e) {
      switch (e) {
        case "delivery_column":
        case "recommendation_column":
          return "hover_card";
        case "industry_benchmark_di_widget":
        default:
          return "guidance_card";
      }
    }
    function g(e) {
      var t = e;
      if (e === "") {
        var n = r("AdsPERouterHelper").isInitialized()
          ? r("AdsPERouterHelper").getRouteBuilder().getURI().toString()
          : null;
        if (n == null) return "unspecified";
        var o = /\/adsmanager\/manage\/(campaigns|adsets|ads)\/insights\?/,
          a = /adsmanager\/manage\/(campaigns|adsets|ads)\?/,
          i = /\/adsmanager\/manage\/(campaigns|adsets|ads)\/edit\?/,
          l = /\/adsmanager\/manage\/accounts\?/;
        o.test(n)
          ? (t = "performance_summary")
          : a.test(n) || i.test(n)
            ? (t = "ads_manager_table")
            : l.test(n)
              ? (t = "account_overview")
              : (t = "unspecified");
      }
      switch (t) {
        case "email":
        case "email_v2":
          return "email";
        case "jewel":
        case "jewel_v2":
          return "jewel";
        case "benchmark_report":
        case "industry_benchmark_di_widget":
        case "industry_benchmark_guidance_hub":
          return "benchmark_report";
        case "delivery_column":
          return "delivery_column";
        case "recommendation_column":
          return "recommendation_column";
        case "ads_manager_table":
          return "ads_manager_table";
        case "performance_summary":
          return "performance_summary";
        case "ads_ai":
          return "ads_ai";
        case "automation_insights_hovercard":
          return "automation_insights_hovercard";
        case "account_overview":
        case "guidance_hub_v3":
          return "account_overview";
        default:
          return "unspecified";
      }
    }
    function h(e) {
      switch (e) {
        case "ad_account":
          return 7;
        case "campaign":
          return 6;
        case "ad_set":
          return 5;
        case "ad":
          return 4;
        default:
          return 5;
      }
    }
    ((l.logGuidanceEvent = e),
      (l.logGenericGuidanceEvent = s),
      (l.convertEventSourceToGuidanceChannel = c),
      (l.convertRecommendationSourceToGuidanceChannel = d),
      (l.convertAdObjectLevel = m),
      (l.getGuidanceCardEvent = p),
      (l.convertRecommendationSourceToWidget = _),
      (l.convertRecommendationSourceToComponent = f),
      (l.convertRecommendationSourceToRecommendationSourceType = g),
      (l.convertPFRAdObjectLevel = h));
  },
  98,
);
