__d(
  "SYDGuidanceHubLoggingUtil",
  [
    "AdsInterfacesLogger",
    "SYDEventTypesEnum",
    "SYDGuidanceHubV3LoggingComponentName",
    "SYDGuidanceHubV3LoggingContext",
    "SYDUnifiedLoggingUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "account_os",
        "bot_response_id",
        "channel",
        "event_source",
        "frameworkCoverage",
        "guidance_version",
        "is_actions_panel",
        "is_guidance_hub_v3",
        "is_in_situ",
        "os_lift",
        "os_version",
        "recommendations_above_fold",
        "recommendations_count",
        "selected_category_filter",
      ],
      s = [
        "account_os",
        "bot_response_id",
        "channel",
        "event_source",
        "frameworkCoverage",
        "guidance_version",
        "is_actions_panel",
        "is_guidance_hub_v3",
        "is_in_situ",
        "os_lift",
        "os_version",
        "recommendations_above_fold",
        "recommendations_count",
        "selected_category_filter",
      ],
      u = [
        "account_os",
        "bot_response_id",
        "channel",
        "event_source",
        "frameworkCoverage",
        "guidance_version",
        "is_actions_panel",
        "is_guidance_hub_v3",
        "is_in_situ",
        "os_lift",
        "os_version",
        "recommendations_above_fold",
        "recommendations_count",
        "selected_category_filter",
      ],
      c,
      d = (c || (c = o("react"))).useContext;
    function m(e) {
      var t,
        n = e.channel,
        o = e.componentName,
        a = e.customEventType,
        i = e.data,
        l = e.eventName,
        s = e.eventSource,
        u = e.isGuidanceHubV3,
        c = e.itemID;
      r("AdsInterfacesLogger").log({
        eventName: l,
        eventCategory: "midflight_recommendations",
        data: babelHelpers.extends(
          {},
          i,
          ((t = {}),
          (t.message_id = c),
          (t.channel = n),
          (t.component_name = o),
          (t.custom_event_type = a),
          (t.event_source =
            n === "applied_insights" && s != null
              ? s
              : u === !0
                ? "guidance_hub_v3"
                : "guidance_hub_v2"),
          t),
        ),
      });
    }
    var p = [
      r("SYDGuidanceHubV3LoggingComponentName").OpenResolution,
      r("SYDGuidanceHubV3LoggingComponentName").ApplyRecommendation,
    ];
    function _() {
      var e = o("react-compiler-runtime").c(2),
        t = d(r("SYDGuidanceHubV3LoggingContext")),
        n;
      return (
        e[0] !== t
          ? ((n = function (n, r, a) {
              var e;
              g(n, babelHelpers.extends({}, t, r), a);
              var i =
                (e = r == null ? void 0 : r.selected_category_filter) != null
                  ? e
                  : t.selected_category_filter;
              o("SYDUnifiedLoggingUtils").logClick(
                "GuidanceHubV3",
                b(n),
                p.includes(n),
                a != null ? a : n,
                i != null
                  ? { message: JSON.stringify({ selected_category_filter: i }) }
                  : void 0,
              );
            }),
            (e[0] = t),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    function f() {
      var e = o("react-compiler-runtime").c(2),
        t = _(),
        n;
      return (
        e[0] !== t
          ? ((n = function (n) {
              t(r("SYDGuidanceHubV3LoggingComponentName").AdRewards, void 0, n);
            }),
            (e[0] = t),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    function g(t, n, r) {
      var o = n != null ? n : {},
        a = o.account_os,
        i = o.bot_response_id,
        l = o.channel,
        s = o.event_source,
        u = o.frameworkCoverage,
        c = o.guidance_version,
        d = o.is_actions_panel,
        p = o.is_guidance_hub_v3,
        _ = o.is_in_situ,
        f = o.os_lift,
        g = o.os_version,
        h = o.recommendations_above_fold,
        y = o.recommendations_count,
        C = o.selected_category_filter,
        b = babelHelpers.objectWithoutPropertiesLoose(o, e);
      m({
        channel: l,
        eventSource: s,
        eventName: "midflight_click",
        componentName: t,
        customEventType: "navigation",
        data: b,
        isGuidanceHubV3: p,
        itemID: r,
      });
    }
    function h(e, t, n) {
      var r = t != null ? t : {},
        o = r.account_os,
        a = r.bot_response_id,
        i = r.channel,
        l = r.event_source,
        u = r.frameworkCoverage,
        c = r.guidance_version,
        d = r.is_actions_panel,
        p = r.is_guidance_hub_v3,
        _ = r.is_in_situ,
        f = r.os_lift,
        g = r.os_version,
        h = r.recommendations_above_fold,
        y = r.recommendations_count,
        C = r.selected_category_filter,
        b = babelHelpers.objectWithoutPropertiesLoose(r, s);
      m({
        channel: i,
        eventSource: l,
        eventName: "midflight_load",
        componentName: e,
        customEventType: "impression",
        data: b,
        isGuidanceHubV3: p,
        itemID: n,
      });
    }
    function y(e, t) {
      h(r("SYDGuidanceHubV3LoggingComponentName").AdRewards, t, e);
    }
    function C(e, t, n, r, o) {
      var a,
        i = r != null ? r : {},
        l = i.account_os,
        s = i.bot_response_id,
        c = i.channel,
        d = i.event_source,
        p = i.frameworkCoverage,
        _ = i.guidance_version,
        f = i.is_actions_panel,
        g = i.is_guidance_hub_v3,
        h = i.is_in_situ,
        y = i.os_lift,
        C = i.os_version,
        b = i.recommendations_above_fold,
        v = i.recommendations_count,
        S = i.selected_category_filter,
        R = babelHelpers.objectWithoutPropertiesLoose(i, u);
      m({
        channel: c,
        eventSource: d,
        eventName: "midflight_load",
        componentName: e,
        customEventType: "error",
        data: babelHelpers.extends(
          {},
          R,
          ((a = {}),
          (a.error_name = t),
          (a.message = n),
          (a.fbtrace_id = o),
          a),
        ),
        isGuidanceHubV3: g,
      });
    }
    function b(e) {
      switch (e) {
        case r("SYDGuidanceHubV3LoggingComponentName").SeeMoreOverview:
        case r("SYDGuidanceHubV3LoggingComponentName").SeeMoreRecommendations:
          return r("SYDEventTypesEnum").Expand;
        case r("SYDGuidanceHubV3LoggingComponentName").SeeLessOverview:
          return r("SYDEventTypesEnum").Condense;
        case r("SYDGuidanceHubV3LoggingComponentName").VideoClick:
          return r("SYDEventTypesEnum").LearnMore;
        case r("SYDGuidanceHubV3LoggingComponentName").OpenResolution:
          return r("SYDEventTypesEnum").CallToAction;
        default:
          return r("SYDEventTypesEnum").None;
      }
    }
    ((l.useLogClick = _),
      (l.useLogAdRewardsClick = f),
      (l.logImpression = h),
      (l.logAdRewardsImpression = y),
      (l.logError = C));
  },
  98,
);
