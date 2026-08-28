__d(
  "AdsMidFlightRecommendationLoggingUtils",
  [
    "AdsInterfacesLogger",
    "AdsPerformanceSummaryTypes",
    "PerformanceSummaryLoggingUtils",
    "SYDEventTypesEnum",
    "SYDUnifiedLoggingUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      r("AdsInterfacesLogger").log({
        eventCategory: "midflight_recommendations",
        eventName: "midflight_click",
        data: e,
      });
    }
    function c(e) {
      r("AdsInterfacesLogger").log({
        eventCategory: "midflight_recommendations",
        eventName: "midflight_load",
        data: e,
      });
    }
    function d(e) {
      r("AdsInterfacesLogger").log({
        eventCategory: "midflight_recommendations",
        eventName: "midflight_visible",
        data: e,
      });
    }
    function m(e, t, n, r, o) {
      var a = {
        component_name: e,
        custom_event_type: "drop_off",
        event_source: t,
        message_id: n,
        message: r,
        www_request_id: o,
      };
      u(a);
    }
    function p(e, t, n, r, o, a, i) {
      var l = {
        component_name: e,
        custom_event_type: "drop_off",
        event_source: t,
        recommendation_type: n,
        recommendation_hash_string: r,
        message_id: o,
        message: a,
        www_request_id: i,
      };
      u(l);
    }
    function _(e, t, n, r, o) {
      var a = {
        component_name: e,
        custom_event_type: "impression",
        event_source: t,
        message_id: n,
        message: r,
        www_request_id: o,
      };
      c(a);
    }
    function f(e, t) {
      var n = { unseen_recs: e, unseen_recs_count: e.length, non_mfr_count: t };
      _("notifications", "ads_manager_navigation", void 0, JSON.stringify(n));
    }
    function g(e, t, n) {
      var r = { hash: n };
      C("learn_more", t, e, JSON.stringify(r));
    }
    function h(e, t) {
      var n;
      switch (t) {
        case "account_overview":
        case "guidance_hub_v3":
          o("SYDUnifiedLoggingUtils").logClick(
            "GuidanceHubV3",
            r("SYDEventTypesEnum").CallToAction,
            !0,
            e,
            ((n = {}),
            (n.message = "potential_duplicate_event_open_resolution"),
            n),
          );
          break;
        case "performance_summary":
          o("PerformanceSummaryLoggingUtils").logClick(
            o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
              .Recommendations,
            o("PerformanceSummaryLoggingUtils").PerformanceSummaryEventTypesEnum
              .CallToAction,
            !0,
            { message_id: e },
          );
          break;
        default:
          break;
      }
    }
    function y(e, t, n, r, o) {
      (C(
        "open_resolution",
        P(t, "account_row"),
        e,
        JSON.stringify({ cta_level: r, hash: n, recommendation_source: t }),
        o,
      ),
        h(e, t));
    }
    function C(e, t, n, r, o) {
      var a = {
        component_name: e,
        custom_event_type: "navigation",
        event_source: t,
        message_id: n,
        message: r,
        www_request_id: o,
      };
      u(a);
    }
    function b(e, t, n, r) {
      var o = {
        component_name: e,
        custom_event_type: "error",
        event_source: t,
        message_id: n,
        message: r,
      };
      c(o);
    }
    function v(e, t, n, r, o) {
      var a = {
        component_name: "pause_and_publish",
        custom_event_type: "resolution",
        event_source: e,
        message_id: t,
        message: n,
        www_request_id: r,
        recommendation_hash_string: o,
      };
      u(a);
    }
    function S(e, t, n, r, o) {
      var a = {
        component_name: "pause_and_publish",
        custom_event_type: "resolution",
        event_source: e,
        recommendation_type: t,
        recommendation_hash_string: n,
        message_id: r,
        message: o,
      };
      u(a);
    }
    function R(e, t, n, r, o) {
      var a = {
        component_name: "pause_and_publish",
        custom_event_type: "resolution",
        event_source: e,
        message_id: n,
        current_action_ads_count: t,
        message: r,
        www_request_id: o,
      };
      u(a);
    }
    function L(e, t, n, r, o) {
      u({
        component_name: "batch_resolution_flow",
        custom_event_type: "resolution",
        event_source: e,
        recommendation_type: t,
        recommendation_hash_string: n,
        current_action_ads_count: r,
        message: o,
      });
    }
    function E(e, t, n, r, o, a) {
      c({
        component_name: "batch_resolution_flow",
        custom_event_type: "impression",
        event_source: e,
        recommendation_type: t,
        recommendation_hash_string: n,
        current_action_ads_count: r,
        message: o,
        www_request_id: a,
      });
    }
    function k(e, t, n, r) {
      var o = {
        component_name: "one_click_resolution",
        custom_event_type: "edit",
        event_source: e,
        message_id: t,
        message: n,
        www_request_id: r,
      };
      u(o);
    }
    function I(e, t) {
      var n = {
        component_name: "guidance_card",
        custom_event_type: "navigation",
        event_source: e,
        message: t,
      };
      u(n);
    }
    function T(e, t, n) {
      var r = {
        component_name: e,
        custom_event_type: "navigation",
        event_source: "resolution_view",
        message_id: n,
        message: t,
      };
      u(r);
    }
    function D(e, t) {
      u({
        component_name: "select_all",
        custom_event_type: "edit",
        event_source: e,
        message: t,
      });
    }
    function x(e, t) {
      u({
        component_name: "select_single",
        custom_event_type: "edit",
        event_source: e,
        message: t,
      });
    }
    function $(e, t, n, r) {
      var a = o("react-compiler-runtime").c(6),
        i,
        l;
      (a[0] !== e || a[1] !== t || a[2] !== r || a[3] !== n
        ? ((i = function () {
            _(e, t, n, r);
          }),
          (l = [e, t, r, n]),
          (a[0] = e),
          (a[1] = t),
          (a[2] = r),
          (a[3] = n),
          (a[4] = i),
          (a[5] = l))
        : ((i = a[4]), (l = a[5])),
        s(i, l));
    }
    function P(e, t) {
      switch (e) {
        case "performance_summary":
          return "performance_summary";
        case "delivery_column":
          return "delivery_column";
        case "anomaly_detection_inspect_side_panel":
          return "anomaly_detection_inspect_side_panel";
        case "anomaly_detection_hovercard":
          return "anomaly_detection_hovercard";
        case "actions_column":
        case "recommendation_column":
          return "recommendation_column";
        case "os_score_hovercard":
        case "ads_manager_table":
          return "ads_manager_table";
        case "account_overview":
        case "guidance_hub_v3":
          return "start_your_day";
        default:
          return t;
      }
    }
    function N(e) {
      u(
        babelHelpers.extends({}, e, {
          custom_event_type: "navigation",
          event_source: "delivery_column",
          component_name: "delivery_column",
        }),
      );
    }
    function M(e) {
      u(
        babelHelpers.extends({}, e, {
          custom_event_type: "navigation",
          event_source: "delivery_column",
        }),
      );
    }
    function w(e, t) {
      u({
        component_name: "toggle",
        custom_event_type: "edit",
        event_source: e,
        message: t,
      });
    }
    function A(e, t) {
      u({
        component_name: "data_source",
        custom_event_type: "navigation",
        recommendation_type: e,
        message: t,
      });
    }
    ((l.logDropOff = m),
      (l.logDropOffWithRecommendationType = p),
      (l.logImpression = _),
      (l.logMidFlightNotificationImpression = f),
      (l.logLearnMoreClick = g),
      (l.logGuidanceCardCTAClick = y),
      (l.logNavigation = C),
      (l.logLoadingError = b),
      (l.logPublish = v),
      (l.logPublishWithRecommendationType = S),
      (l.logPublishWithAdCount = R),
      (l.logBatchResolutionPublish = L),
      (l.logBatchResolutionImpression = E),
      (l.logOCREditSectionClick = k),
      (l.logLineClampToggle = I),
      (l.logFilterCardToggle = T),
      (l.logGuidanceModalSelectAll = D),
      (l.logGuidanceModalSelectSingle = x),
      (l.useMidFlightImpressionLogger = $),
      (l.getEventSourceFromRecommendationSource = P),
      (l.logDeliveryColumnInteraction = N),
      (l.logHoverCardCTAClick = M),
      (l.logGuidanceModalInclude = w),
      (l.logDataSourceClick = A));
  },
  98,
);
