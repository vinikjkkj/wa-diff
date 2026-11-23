__d(
  "MAIBAInlinedContext",
  [
    "invariant",
    "ALFlowChannel",
    "ALToolTab",
    "AdsAIContextPathUtils",
    "AdsALAppData",
    "AdsALChannel",
    "AdsApplicationIDs",
    "AdsManagerAutoLoggingAppConfig",
    "BusinessConsoleDynamicFields",
    "CurrentUser",
    "ExecutionEnvironment",
    "MAIBAChatAppStore",
    "MAIBAChatAppUIProvider",
    "MAIBAIGBoostEntryPointUtils.facebook",
    "MAIBAIGBoostLaunchSource",
    "MAIBAResponseTonePreferenceStorage",
    "Timezone",
    "WebApiApplication",
    "XFBAutoLoggingToolEnumUtils.facebook",
    "XFBAutoLoggingToolTabEnumUtils.facebook",
    "XFBCASSegmentEnumUtils.facebook",
    "gkx",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = null,
      c = 0,
      d = 0,
      m = 0,
      p = new Set(),
      _ = 12,
      f = "[data-maiba-workspace-canvas]",
      g = "data-maiba-workspace-navigation-action",
      h = "/latest/whatsapp_manager",
      y = "/latest/whatsapp_manager/template_details",
      C = "/latest/messaging_campaigns";
    function b(e) {
      var t = !0;
      return function () {
        t && ((t = !1), e());
      };
    }
    function v() {
      return (
        (m += 1),
        b(function () {
          m -= 1;
        })
      );
    }
    function S() {
      return (
        (d += 1),
        b(function () {
          d -= 1;
        })
      );
    }
    function R() {
      return (
        (c += 1),
        b(function () {
          c -= 1;
        })
      );
    }
    function L() {
      var e = o("MAIBAChatAppStore").shouldUseLaminarForMAIBA()
        ? r("MAIBAChatAppUIProvider")()
        : o("MAIBAChatAppStore").getState();
      return e.surfaceMode === "canvas";
    }
    function E(t) {
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var n = window.getComputedStyle(t);
        return (
          n.display !== "none" &&
          n.visibility !== "hidden" &&
          n.opacity !== "0" &&
          t.getAttribute("aria-hidden") !== "true" &&
          t.getAttribute("aria-disabled") !== "true" &&
          !t.hasAttribute("disabled")
        );
      }
      return !1;
    }
    function k(t, n, o) {
      return (e || (e = r("ExecutionEnvironment"))).canUseDOM
        ? n.width > 0 &&
            n.height > 0 &&
            E(t) &&
            n.right > o.left &&
            n.left < o.right &&
            n.bottom > o.top &&
            n.top < o.bottom
        : !1;
    }
    function I() {
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var t = document.querySelector(f);
        if (!(t instanceof HTMLElement)) return !1;
        var n = t.querySelectorAll("[" + g + '="view_ad"]');
        return Array.from(n).some(function (e) {
          return e instanceof HTMLElement && E(e);
        });
      }
      return !1;
    }
    function T(e) {
      return Math.round(Math.max(0, Math.min(1, e)) * 1e3) / 1e3;
    }
    function D() {
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var t = document.querySelector(f);
        if (!(t instanceof HTMLElement)) return [];
        var n = t.getBoundingClientRect();
        if (n.width <= 0 || n.height <= 0) return [];
        var o = [],
          a = t.querySelectorAll("[" + g + "]");
        for (var i of a)
          if (i instanceof HTMLElement) {
            var l = i.getBoundingClientRect();
            if (k(i, l, n)) {
              var s = i.getAttribute(g);
              if (
                !(s == null || s === "") &&
                (o.push({
                  action: s,
                  horizontal_position: T(
                    (l.left + l.width / 2 - n.left) / n.width,
                  ),
                  vertical_position: T(
                    (l.top + l.height / 2 - n.top) / n.height,
                  ),
                }),
                o.length === _)
              )
                break;
            }
          }
        return o;
      }
      return [];
    }
    function x(e) {
      if (e == null) return null;
      for (var t of Object.entries(r("AdsApplicationIDs"))) {
        var n = t[0],
          o = t[1];
        if (o === e) return n;
      }
      return null;
    }
    function $(e) {
      return e != null && e !== "" && e !== "0" ? e : null;
    }
    function P(e) {
      var t = o("AdsAIContextPathUtils").getURLParams(),
        n = t.pathname;
      return (
        e === "WA Messaging Audience" ||
        e === "WA Messaging Campaign Creation" ||
        e === "WA Messaging Campaigns" ||
        e === "WA Messaging Event-Based Send" ||
        e === "Marketing Messages Audiences" ||
        e === "Whatsapp Manager" ||
        n.includes(h)
      );
    }
    function N(e) {
      if (!P(e)) return null;
      var t = o("AdsAIContextPathUtils").getURLParams(),
        n = t.searchParams;
      if (e === "Marketing Messages Audiences") return $(n.get("waba_id"));
      var r = $(n.get("asset_id"));
      return r != null ? r : $(n.get("waba_id"));
    }
    function M() {
      var e = o("AdsAIContextPathUtils").getURLParams(),
        t = e.pathname,
        n = e.searchParams;
      return t.includes(y)
        ? { campaign_id: $(n.get("campaign_id")), template_id: $(n.get("id")) }
        : t.includes(C)
          ? {
              campaign_id: $(n.get("campaign_id")),
              template_id: $(n.get("template_id")),
            }
          : { campaign_id: null, template_id: null };
    }
    function w() {
      var e = o("AdsAIContextPathUtils").getURLParams(),
        t = e.searchParams;
      return $(t.get("act"));
    }
    function A() {
      var e,
        t = o("AdsAIContextPathUtils").getURLParams(),
        n = t.searchParams;
      return (e = $(n.get("business_id"))) != null
        ? e
        : $(n.get("global_scope_id"));
    }
    function F() {
      var e = o("AdsAIContextPathUtils").getURLParams(),
        t = e.searchParams;
      return $(t.get("selected_business_page_id"));
    }
    function O(e, t) {
      var n = o("AdsAIContextPathUtils").getURLParams(),
        r = n.searchParams;
      if (e === "Creator Marketing Hub") return F();
      var a = $(r.get("page_id"));
      return a != null ? a : P(t) ? null : $(r.get("asset_id"));
    }
    function B() {
      var e = o("AdsAIContextPathUtils").getURLParams(),
        t = e.searchParams;
      return $(t.get("agency_brand_id"));
    }
    function W() {
      var e = o("AdsAIContextPathUtils").getURLParams(),
        t = e.searchParams;
      return $(t.get("selected_business_ig_user_id"));
    }
    function q() {
      var e,
        t,
        n,
        a,
        i,
        l,
        s,
        p = r("CurrentUser").getID(),
        _ = o("AdsALAppData").getAppData(),
        f = o("ALToolTab").getCurrentToolTab(),
        g = r("nullthrows")(
          (e = o("XFBAutoLoggingToolEnumUtils.facebook").fromJSEnum(f.tool)) !=
            null
            ? e
            : o("XFBAutoLoggingToolEnumUtils.facebook").fromJSEnum("Unknown"),
          '("Unknown") should always be a valid enum value',
        ),
        h = o("XFBAutoLoggingToolTabEnumUtils.facebook").fromJSEnum(f.tab),
        y = N(f.tab),
        C = M(),
        b = C.campaign_id,
        v = C.template_id,
        S = $(_ == null ? void 0 : _.ad_account_id),
        R = $(_ == null ? void 0 : _.business_id),
        E = L(),
        k = E ? D() : [],
        T = E && I(),
        P = r("BusinessConsoleDynamicFields").enterprise_id,
        w = P != null && P !== "" && P !== "0" ? P : null,
        A = o("WebApiApplication").getClientID(),
        F = x(A),
        q;
      f.tool === "Facebook Ad Center"
        ? (q = o("XFBAutoLoggingToolEnumUtils.facebook").fromJSEnum("LWI"))
        : r("gkx")("9497")
          ? (q = o("XFBAutoLoggingToolEnumUtils.facebook").fromJSEnum(
              "Ads Manager (Campaigns)",
            ))
          : r("gkx")("9506")
            ? (q = o("XFBAutoLoggingToolEnumUtils.facebook").fromJSEnum("MBS"))
            : (q = o("XFBAutoLoggingToolEnumUtils.facebook").fromJSEnum(
                "Unknown",
              ));
      var U = (t = u) == null ? void 0 : t.surface,
        V = (n = u) == null ? void 0 : n.page_id,
        H = f.tool === "Creator Marketing Hub",
        G = O(f.tool, f.tab),
        z = (a = u) == null ? void 0 : a.seed_media_flow,
        j = (i = u) == null ? void 0 : i.seed_media_source,
        K = (l = u) == null ? void 0 : l.synthesized_business_context,
        Q = (s = u) == null ? void 0 : s.entrypoint_client_context;
      return (
        (u = {
          user_id: p !== "0" ? p : null,
          ad_account_id: S,
          business_id: R,
          waba_id: y,
          template_id: v,
          campaign_id: b,
          page_id: H ? G : V != null ? V : G,
          beneficiary_brand_ig_user_id: B(),
          selected_business_ig_user_id: W(),
          organization_id: w,
          app: F,
          browser_timezone_id: o("Timezone").getEnvironmentTimezoneID(),
          tool: g,
          tab: h,
          advertiser_type: {
            main_tool: r("nullthrows")(
              q,
              "advertiserMainTool should always be a valid enum value",
            ),
            cas_segment_account: o(
              "XFBCASSegmentEnumUtils.facebook",
            ).fromJSEnum(
              o("AdsManagerAutoLoggingAppConfig").cas_segment_account,
            ),
          },
          metadata: {
            is_user_editing_draft: !1,
            is_workspace_ad_draft_editor_open: d > 0,
            is_workspace_canvas_back_navigation_available: m > 0,
            is_workspace_canvas_open: E,
            is_workspace_canvas_view_ad_navigation_available: T,
            is_workspace_prompt_edit: !1,
            is_wrapped_simple_create: c > 0,
            workspace_canvas_navigation_controls: k.length > 0 ? k : null,
            response_tone_preference: o(
              "MAIBAResponseTonePreferenceStorage",
            ).getStoredResponseTonePreference(),
          },
          al_browser_session_id: _.browser_session_id,
          al_app_session_id: _.app_session_id,
          al_event_index: -1,
          surface: U,
          seed_media_flow: z,
          seed_media_source: j,
          maiba_ig_boost_entry_point:
            g ===
            o("XFBAutoLoggingToolEnumUtils.facebook").fromJSEnum("Instagram")
              ? o("MAIBAIGBoostEntryPointUtils.facebook").fromJSEnum(
                  o("MAIBAIGBoostLaunchSource").getMAIBAIGBoostLaunchSource(),
                )
              : null,
          synthesized_business_context: K,
          entrypoint_client_context: Q,
        }),
        u
      );
    }
    function U() {
      (q(),
        o("ALFlowChannel").ALFlowChannel.addListener(
          "al_flow_status",
          function (e) {
            switch (e.flowStatus) {
              case o("ALFlowChannel").ALFlowStatus.STARTED:
                p.add(e.flow);
                break;
              case o("ALFlowChannel").ALFlowStatus.SUCCEEDED:
              case o("ALFlowChannel").ALFlowStatus.CANCELLED:
              case o("ALFlowChannel").ALFlowStatus.FAILED:
              case o("ALFlowChannel").ALFlowStatus.TIMEDOUT:
              default:
                p.delete(e.flow);
                break;
            }
          },
        ),
        o("AdsALChannel").AdsALChannel.addListener("al_ui_event", function (e) {
          /click|keydown|submit/.test(e.event) &&
            e.surface != null &&
            /maiba/.test(e.surface) &&
            u != null &&
            ((u.al_event_index = e.eventIndex), (u.surface = e.surface));
        }));
    }
    function V(e) {
      (u == null && U(),
        u != null || s(0, 114030),
        (u = babelHelpers.extends({}, u, e)));
    }
    function H(e) {
      u == null && (U(), u != null || s(0, 114030));
      var t = q(),
        n = babelHelpers.extends({}, t, e, {
          metadata: babelHelpers.extends(
            {},
            t == null ? void 0 : t.metadata,
            e == null ? void 0 : e.metadata,
          ),
          flow: Array.from(p)
            .map(function (e) {
              return e.name;
            })
            .filter(Boolean)
            .join(","),
        }),
        a = A(),
        i = o("ALToolTab").getCurrentToolTab(),
        l = i.tool;
      (e == null ? void 0 : e.business_id) == null &&
        a != null &&
        (l === "Ads Manager (Campaigns)" ||
          l === "Advertising Settings" ||
          l === "Account Overview" ||
          l === "Audiences" ||
          (l === "Commerce Manager" && r("justknobx")._("6841")) ||
          l === "DIRECT_SUPPORT") &&
        (n.business_id = a);
      var c = o("AdsAIContextPathUtils").getURLParams(),
        d = c.pathname,
        m =
          l === "MBS" &&
          (d === "/latest/settings/mma" || d === "/latest/settings/mma/");
      return (
        (n.metadata.mma_settings_business_id =
          m && n.business_id != null && (a == null || a === n.business_id)
            ? n.business_id
            : null),
        (n.metadata.mma_guidance_ad_account_id = w()),
        (n.metadata.mma_a2ui_link_button_supported = !r("gkx")("24820")),
        n
      );
    }
    ((l.registerMAIBAWorkspaceCanvasBackNavigation = v),
      (l.registerMAIBAWorkspaceAdDraftEditor = S),
      (l.registerMAIBAWrappedSimpleCreate = R),
      (l.getAdAccountIDFromURL = w),
      (l.getBusinessIDFromURL = A),
      (l.init = U),
      (l.updateInlinedContext = V),
      (l.getInlinedContext = H));
  },
  98,
);
