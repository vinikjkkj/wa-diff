__d(
  "MAIBASurfacesUtils",
  [
    "invariant",
    "ALToolTab",
    "AdsAISurfaceToGKMap",
    "AdsHelpTrayUILoggerStoreUtils",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = new Set();
    function u() {
      return o("ALToolTab").getCurrentToolTab().tool;
    }
    var c = new Set([
        "Account Overview",
        "Ad Account Settings",
        "Ad Limits",
        "Ads Manager (Campaigns)",
        "Ads Reporting",
        "Advertising Settings",
        "Audience Insights",
        "Audiences",
        "Automated Rules",
        "Billing & Payments",
        "Creation Package",
        "Insights",
      ]),
      d = new Set([
        "WA Messaging Audience",
        "WA Messaging Campaign Creation",
        "WA Messaging Campaigns",
        "WA Messaging Event-Based Send",
      ]),
      m = new Set(["Instagram"]);
    function p(e) {
      return r("gkx")("2830") ? !1 : e ? r("gkx")("3759") : r("gkx")("13523");
    }
    function _(e, t) {
      var n = f(e, t);
      if (n != null) return n;
      var o = g(e, t);
      if (o != null) return o;
      var a = h(e, t);
      return a != null
        ? a
        : e === "an_product_support_maiba"
          ? t
            ? r("gkx")("28080") || r("gkx")("28406")
            : r("gkx")("28081") || r("gkx")("28411")
          : e === "mma_maiba_resolution_framework"
            ? t
              ? r("gkx")("12419")
              : r("gkx")("19203")
            : e === "adex_maiba_split_test_chat"
              ? t
                ? r("gkx")("25948")
                : r("gkx")("25949")
              : e === "maiba_wam_dev_dogfood"
                ? t
                  ? r("gkx")("25900")
                  : r("gkx")("25901")
                : e === "maiba_bizm_subagent_tool"
                  ? r("gkx")("16918")
                  : y(e, t);
    }
    function f(e, t) {
      return e === "signals_ai_agent_em"
        ? t
          ? r("gkx")("2233")
          : r("gkx")("15913")
        : null;
    }
    function g(e, t) {
      return e === "maiba_moma_integration_gk"
        ? t
          ? r("gkx")("14500")
          : r("gkx")("18589")
        : e === "maiba_brand_safety_integration_gk"
          ? t
            ? r("gkx")("17709")
            : r("gkx")("19171")
          : null;
    }
    function h(e, t) {
      return e === "maiba_on_bsh"
        ? t
          ? r("gkx")("15070")
          : r("gkx")("15468")
        : e === "maiba_on_creator_marketing_hub"
          ? t
            ? r("gkx")("6096")
            : r("gkx")("6139")
          : e === "maiba_bhc_home"
            ? t
              ? r("gkx")("10351")
              : r("gkx")("16474")
            : e === "maiba_direct_support_platform_rollout"
              ? t
                ? r("gkx")("15832")
                : r("gkx")("15837")
              : e === "maiba_fb_lwi"
                ? t
                  ? r("gkx")("761")
                  : r("gkx")("16530")
                : null;
    }
    function y(e, t) {
      return e === "bizapp_maiba_support_h2_2026"
        ? t
          ? r("gkx")("16169")
          : r("gkx")("16296")
        : e === "fbapp_maiba_support_h2_2026"
          ? t
            ? r("gkx")("13129")
            : r("gkx")("13498")
          : e === "wa_embedded_signup_ai_agent"
            ? t
              ? r("gkx")("28072")
              : r("gkx")("28073")
            : null;
    }
    function C(e, t) {
      var n = _(e, t);
      if (n != null) return n;
      if (e === "metaai_business_assistant_eligibility") return p(t);
      if (e === "mbs_maiba_rollout") return r("qex")._("4940") === !0;
      if (e === "maiba_r2_3_boost_post_mbs_alpha_launch") return !1;
      if (e === "maiba_r23_boost_mbs_beta_launch_universe")
        return r("qex")._("792") === !0;
      if (e === "maiba_mbs_boost_26_h2_universe")
        return r("qex")._("4899") === !0;
      if (e === "cpas_maiba_acting_account_experimentation_v2")
        return r("qex")._("2766") === !0;
      if (e === "maiba_ig_lwi_integration_gk")
        return t ? r("gkx")("18624") : r("gkx")("17968");
      if (e === "cm_maiba_rollout") return r("qex")._("5472") === !0;
      if (e === "mm_1p_maiba_user") {
        var a = o("ALToolTab").getCurrentToolTab(),
          i = a.tab,
          l = a.tool;
        return l !== "WhatsApp Manager" && (i == null || !d.has(i))
          ? !1
          : t
            ? r("gkx")("9523")
            : r("gkx")("9439");
      } else {
        if (e === "ama_maiba_h1_26_gk") return !0;
        s(0, 107710, e);
      }
    }
    function b(e, t, n) {
      t === void 0 && (t = !0);
      var o = t ? r("gkx")("9842") : r("gkx")("9845");
      if (o) return !1;
      var a = r("AdsAISurfaceToGKMap"),
        i = S(n);
      if (i == null) return !1;
      var l = a[i];
      if (l == null) return !1;
      var s = (window.location.origin + window.location.pathname).replace(
          /[0-9]+/g,
          "XXX",
        ),
        u = !1;
      for (var c of l) {
        var d = C(c, t);
        ((u = u || d), R(c, t, d, s, e, n));
      }
      return u;
    }
    function v(e) {
      if (r("gkx")("9845")) return "excluded_user";
      var t = r("AdsAISurfaceToGKMap"),
        n = S(e);
      if (n == null) return "no_surface";
      var o = t[n];
      return o == null
        ? "no_surface_gates"
        : o.some(function (e) {
              return C(e, !1);
            })
          ? null
          : o.length === 1 && o[0] === "metaai_business_assistant_eligibility"
            ? r("gkx")("2830")
              ? "auto_2_rollout_excluded"
              : "eligibility_gate_off"
            : "surface_gates_off";
    }
    function S(e) {
      var t = r("AdsAISurfaceToGKMap");
      return e != null && t[e] != null
        ? e
        : o("ALToolTab").getCurrentToolTab().tool;
    }
    function R(t, n, r, a, i, l) {
      var s = {
          experiment_group: r ? "true" : "false",
          experiment_name: t,
          function_callsite: i,
          log_exposure: n ? "1" : "0",
          surface: l != null ? l : "",
          url_path: a,
        },
        u = JSON.stringify(s);
      e.has(u) ||
        (o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents(
          "maiba_experiment_eligibility_check",
          s,
        ),
        e.add(u));
    }
    function L(e) {
      return e === "ACCOUNT_QUALITY"
        ? "Business Support"
        : "Ads Manager (Campaigns)";
    }
    ((l.getCurrentAutoLoggingTool = u),
      (l.ADS_MANAGER_SURFACES = c),
      (l.IG_SURFACES = m),
      (l.getIsAdsAIBetaM2AvailableOnCurrentSurface = b),
      (l.getAdsAIBetaM2UnavailableReason = v),
      (l.getEffectiveAdsAIBetaM2Surface = S),
      (l.getSurfaceFromToolType = L));
  },
  98,
);
