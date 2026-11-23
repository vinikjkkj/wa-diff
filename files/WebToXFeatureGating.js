__d(
  "WebToXFeatureGating",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsBrandAwarenessUtils",
    "AdsODAXUtils",
    "AdsPageStore",
    "AdsPageUtils",
    "AdsPromotedObjectTypes",
    "AdsWebToWhatsAppBudgetRecommendationUtils",
    "AdsWebsiteExtensionTypeUtils",
    "CTXChatBuilderFeatureGating",
    "ClickToMessageAdDestinationUtils",
    "CtxAdvertiserQeHbtExposureFalcoEvent",
    "CtxBudgetGuidanceLongTermHoldoutUtils",
    "CurrentAdAccount",
    "ShopsAdsOffsiteCheckoutAdsUtils",
    "WebToWhatsappUtils",
    "WebToXAdsUnifiedFalcoEvent",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 10,
      s = 0.75;
    function u(e) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_SALES ||
        e === r("AdsAPIObjectives").LINK_CLICKS ||
        e === r("AdsAPIObjectives").OUTCOME_LEADS ||
        e === r("AdsAPIObjectives").OUTCOME_AWARENESS
      );
    }
    function c(e, t) {
      t === void 0 && (t = !0);
      var n = u(e);
      return n ? (t ? r("gkx")("9446") === !0 : r("gkx")("9454") === !0) : !1;
    }
    function d(e, t, n, r, o, a) {
      return (
        o === void 0 && (o = !0),
        a === void 0 && (a = !1),
        e && j(t, n, r) ? (a === !0 || o ? c(t, !0) : c(t, !1)) : !1
      );
    }
    function m(e, t, n, r) {
      return (r === void 0 && (r = !1), p(e, t, n) && g(e, !1, t, null, !r));
    }
    function p(e, t, n) {
      return n === null || e == null
        ? !1
        : e === r("AdsAPIObjectives").OUTCOME_SALES &&
            t === r("AdsPromotedObjectTypes").PRODUCT_SET &&
            n === "PRODUCT_SET_AND_WEBSITE";
    }
    function _(e, t, n) {
      var r = e.objective,
        a = o("AdsAPICampaignRecordUtils").getPromotedObjectType(r, t),
        i = o("WebToWhatsappUtils").isWebToWhatsAppEligibleForCatalogAds(
          r,
          a,
          n,
          !1,
        ),
        l = m(r, a, n, !1);
      return i || l;
    }
    function f(e, t, n, r, a) {
      (r === void 0 && (r = !0), a === void 0 && (a = !1));
      var i = e.objective,
        l = o(
          "AdsAPIAdgroupRecordUtils",
        ).isFlexibleFormatAdOrCreativeAssetGroup(n),
        s = o("AdsAPICampaignRecordUtils").getPromotedObjectType(i, t),
        u = o("AdsODAXUtils").maybeTranslateObjective(
          e.objective,
          s,
          t.optimization_goal,
        );
      return g(i, l, s, u, r, a);
    }
    function g(e, t, n, r, o, a) {
      if ((o === void 0 && (o = !0), a === void 0 && (a = !1), !u(e)))
        return !1;
      var i = !1;
      return (t && j(e, r, n) ? (i = d(t, e, r, n, o, a)) : (i = c(e, o)), i);
    }
    function h(e) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_TRAFFIC ||
        e === r("AdsAPIObjectives").LINK_CLICKS
      );
    }
    function y(e) {
      return e === r("AdsAPIObjectives").OUTCOME_LEADS;
    }
    function C(e) {
      return h(e) || y(e);
    }
    function b(e) {
      return e === r("AdsAPIObjectives").OUTCOME_SALES || h(e);
    }
    function v(e, t) {
      return C(e)
        ? !0
        : t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS ||
            t === r("AdsAPIOptimizationGoals").RETURN_ON_AD_SPEND;
    }
    function S(e) {
      return e === r("AdsAPIObjectives").OUTCOME_SALES || C(e);
    }
    function R(e) {
      e === void 0 && (e = !0);
      var t = r("gkx")("22369") === !0;
      return t
        ? e
          ? r("qex")._("4596") === !0
          : r("qex")._("4599") === !0
        : !1;
    }
    function L(e) {
      return (
        e === r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS ||
        e === r("AdsAPIOptimizationGoals").LINK_CLICKS
      );
    }
    function E(e, t) {
      return (
        t === void 0 && (t = !0),
        L(e) ? (t ? r("qex")._("4806") === !0 : r("qex")._("4807") === !0) : !1
      );
    }
    function k(e, t) {
      return (
        t === void 0 && (t = !0),
        S(e) ? (t ? r("gkx")("6644") === !0 : r("gkx")("7071") === !0) : !1
      );
    }
    function I(e, t, n, r) {
      return e && j(t, n, r);
    }
    function T(
      e,
      t,
      n,
      o,
      a,
      i,
      l,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
    ) {
      r("WebToXAdsUnifiedFalcoEvent").log(function () {
        var r, E, k;
        return {
          event: "wtd_eligibility_check",
          ad_account_id: e.account_id,
          ad_group_id: e.id,
          ad_page_id: t != null ? t : "",
          event_info: [
            "eligible:" + String(m),
            "existing_wtd_ad:" + String(o),
            "objective:" + (a != null ? a : ""),
            "optimization_goal:" + (i != null ? i : ""),
            "l28_ig_sends:" +
              ((r = n == null ? void 0 : n.toString()) != null ? r : ""),
            "passes_override_gk:" + String(s),
            "passes_eligibility_gk:" + String(l),
            "sales_primary_objective:" + String(u),
            "ig_spend_l28:" +
              ((E = c == null ? void 0 : c.toString()) != null ? E : ""),
            "total_spend_l28:" +
              ((k = d == null ? void 0 : d.toString()) != null ? k : ""),
            "ig_share:" + (p != null ? p.toFixed(4) : ""),
            "ig_share_threshold:" + _.toString(),
            "is_ig_heavy:" + String(f),
            "traffic_qe_enabled:" + (g != null ? String(g) : ""),
            "has_linked_ig:" + String(h),
            "is_iabp:" + String(y),
            "has_fb_placement:" + String(C),
            "has_ig_placement:" + String(b),
            "is_ig_only:" + String(v),
            "cas_expansion_qe_enabled:" + (S != null ? String(S) : ""),
            "non_oc_qe_enabled:" + (R != null ? String(R) : ""),
            "leads_qe_enabled:" + (L != null ? String(L) : ""),
          ].join(","),
        };
      });
    }
    function D(e) {
      var t = null;
      return (
        h(e) ? (t = r("qex")._("772")) : y(e) && (t = r("qex")._("1740")),
        t != null ? t : s
      );
    }
    function x(e) {
      return h(e)
        ? r("qex")._("799") === !0
        : y(e)
          ? r("qex")._("1741") === !0
          : !1;
    }
    function $(e) {
      h(e) ? r("qex")._("1532") : y(e) && r("qex")._("1827");
    }
    function P(e, t) {
      var n, a;
      if (!C(t)) return { igShare: null, igShareThreshold: s, isIGHeavy: !1 };
      var i = o("AdsPageUtils").getPageID(e),
        l = i != null ? r("AdsPageStore").getLoadObject(i).getValue() : null,
        u =
          (n = l == null ? void 0 : l.external_legal_budget_l28) != null
            ? n
            : 0,
        c =
          (a = l == null ? void 0 : l.instagram_external_legal_budget_l28) !=
          null
            ? a
            : 0,
        d = D(t),
        m = u > 0 ? c / u : null,
        p = m != null && m > d;
      return { igShare: m, igShareThreshold: d, isIGHeavy: p };
    }
    function N(e, t) {
      return t.isIGHeavy && x(e);
    }
    function M(t, n, a, i, l) {
      var s, u, c;
      i === void 0 && (i = !0);
      var d = r("gkx")("7672") === !0,
        m = r("gkx")("7198") === !0,
        p = o("AdsPageUtils").getPageID(t),
        _ = p != null ? r("AdsPageStore").getLoadObject(p).getValue() : null,
        f = o("AdsAPIAdgroupRecordUtils").isWebToIGDAd(t),
        g =
          (_ == null ? void 0 : _.ad_account_primary_objective) ===
          r("AdsAPIObjectives").OUTCOME_SALES,
        C = P(t, n),
        k = N(n, C),
        I = h(n) && C.isIGHeavy ? k : null,
        D = y(n) && C.isIGHeavy ? k : null,
        x =
          (_ == null || (s = _.connected_instagram_account) == null
            ? void 0
            : s.user_igid) != null,
        M = (_ == null ? void 0 : _.is_instagram_account_backed_page) === !0,
        w = m ? null : r("qex")._("4596") === !0,
        A = L(a) ? r("qex")._("4806") === !0 : null,
        F =
          l == null || (u = l.targeting) == null
            ? void 0
            : u.publisher_platforms,
        O = F == null ? !0 : F.includes("facebook"),
        B = F == null ? !0 : F.includes("instagram"),
        W = B && !O;
      if (d)
        return (
          T(
            t,
            p,
            _ == null ? void 0 : _.connected_ig_sends_l28,
            f,
            n,
            a,
            m,
            d,
            g,
            _ == null ? void 0 : _.instagram_external_legal_budget_l28,
            _ == null ? void 0 : _.external_legal_budget_l28,
            !0,
            C.igShare,
            C.igShareThreshold,
            C.isIGHeavy,
            I,
            x,
            M,
            O,
            B,
            W,
            w,
            A,
            D,
          ),
          !0
        );
      var q =
          (c = _ == null ? void 0 : _.connected_ig_sends_l28) != null ? c : 0,
        U = !1;
      q >= 1 && (U = r("qex")._("2385") === !0);
      var V = U ? 1 : e,
        H = q >= V,
        G = S(n),
        z = v(n, a),
        j = z || E(a),
        K = G && j && H,
        Q = m || R(),
        X = Q && K,
        Y = g && b(n),
        J = Y || k,
        Z = C.isIGHeavy && !Y,
        ee = X && J;
      return (
        !i && X && Z && $(n),
        !i && !m && K && J && R(!1),
        !i && !z && G && H && Q && J && E(a, !1),
        T(
          t,
          p,
          _ == null ? void 0 : _.connected_ig_sends_l28,
          f,
          n,
          a,
          m,
          d,
          g,
          _ == null ? void 0 : _.instagram_external_legal_budget_l28,
          _ == null ? void 0 : _.external_legal_budget_l28,
          ee,
          C.igShare,
          C.igShareThreshold,
          C.isIGHeavy,
          I,
          x,
          M,
          O,
          B,
          W,
          w,
          A,
          D,
        ),
        ee
      );
    }
    function w(e) {
      var t,
        n = (t = r("gkx")("25277")) != null ? t : !1;
      return (A(n, e), n);
    }
    function A(e, t) {
      if (t != null) {
        var n = r("gkx")("11835");
        n === !1 &&
          r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
            return {
              condition: e === !0 ? "test" : "control",
              feature_name: "wtwa_upsell_in_duplication",
              hbt_name: "bmxm_enablement_guidance_wtwa_wave2_bundle",
              unit_id: t,
              unit_type: "ad_account_id",
            };
          });
      }
    }
    function F(e, t, n, r) {
      r === void 0 && (r = !0);
      var a = e.objective,
        i = o(
          "AdsAPIAdgroupRecordUtils",
        ).isFlexibleFormatAdOrCreativeAssetGroup(n),
        l = o("AdsAPICampaignRecordUtils").getPromotedObjectType(a, t),
        s = o("AdsODAXUtils").maybeTranslateObjective(
          e.objective,
          l,
          t.optimization_goal,
        ),
        u = !i || I(i, a, s, l);
      if (y(a)) {
        var c =
          u &&
          k(a) &&
          s != null &&
          o("AdsWebsiteExtensionTypeUtils").isWebsiteExtensionsRadioListEnabled(
            a,
            s,
            t,
          );
        if (!c) return !1;
      }
      return !M(n, a, t.optimization_goal, r, t) || !u ? !1 : k(a, r);
    }
    function O() {
      return r("gkx")("11067") === !0;
    }
    function B(e, t) {
      if (e) {
        var n = r("gkx")("14102") === !0;
        return (q(n, t), n);
      }
      return r("gkx")("14152") === !0;
    }
    function W(e, t) {
      if (t != null) {
        var n = r("gkx")("15748");
        n === !0 &&
          r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
            return {
              condition: e === !0 ? "test" : "control",
              feature_name: "suggested_post_enablement_for_pe_tail",
              hbt_name: "bmxm_2025h2_understanding_bundle_launch_gk",
              unit_id: t,
              unit_type: "ad_account_id",
            };
          });
      }
    }
    function q(e, t) {
      if (t != null) {
        var n = r("gkx")("15748");
        n === !0 &&
          r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
            return {
              condition: e === !0 ? "test" : "control",
              feature_name: "suggested_post_enablement_for_oc_low",
              hbt_name: "bmxm_2025h2_understanding_bundle_launch_gk",
              unit_id: t,
              unit_type: "ad_account_id",
            };
          });
      }
    }
    function U(e, t) {
      if (e) {
        var n = r("gkx")("14102") === !0;
        return (W(n, t), n);
      }
      return r("gkx")("14152") === !0;
    }
    function V(e) {
      return e ? r("qex")._("3598") === !0 : r("qex")._("3599") === !0;
    }
    function H(e) {
      return e ? r("qex")._("3600") === !0 : r("qex")._("3601") === !0;
    }
    function G(e) {
      return e ? r("qex")._("4765") === !0 : r("qex")._("4766") === !0;
    }
    function z(e, t, n) {
      var r = K(!1);
      return j(e, t, n) && r;
    }
    function j(e, t, n) {
      return (
        t === r("AdsAPIObjectives").CONVERSIONS &&
        e === r("AdsAPIObjectives").OUTCOME_SALES &&
        n === r("AdsPromotedObjectTypes").PIXEL
      );
    }
    function K(e, t) {
      var n = !0,
        o = r("gkx")("3887") === !0;
      return (
        e
          ? o && ((n = r("gkx")("3929") === !0), Q(n, t))
          : o && (n = r("gkx")("3970") === !0),
        n
      );
    }
    function Q(e, t) {
      if (t != null) {
        var n = r("gkx")("11865") === !0;
        n === !0 &&
          r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
            return {
              condition: e ? "test" : "control",
              feature_name: "wtwa_flexible_format_enablement_sales",
              hbt_name:
                "bmxm_enablement_ctx_guidance_wtwa_wave0_bundle_backtest",
              unit_id: t,
              unit_type: "ad_account_id",
            };
          });
      }
    }
    function X(e, t) {
      return (
        (e === r("AdsAPIObjectives").OUTCOME_SALES ||
          e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
          e === r("AdsAPIObjectives").LINK_CLICKS ||
          e === r("AdsAPIObjectives").OUTCOME_LEADS) &&
        (t === r("AdsPromotedObjectTypes").PIXEL ||
          t === r("AdsPromotedObjectTypes").WEBSITE)
      );
    }
    function Y(e, t, n, a) {
      if (
        !e ||
        o("ClickToMessageAdDestinationUtils").isClickToMessageAdDestination(t)
      )
        return !1;
      if (o("ShopsAdsOffsiteCheckoutAdsUtils").isWebsiteDestinationType(t)) {
        if (o("AdsBrandAwarenessUtils").isBrandObjective(n)) return !1;
        var i = r("gkx")("14102");
        return (J(i, a), i);
      }
      return !1;
    }
    function J(e, t) {
      if (t != null) {
        var n = r("gkx")("15748");
        n === !0 &&
          r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
            return {
              condition: e === !0 ? "test" : "control",
              feature_name: "multi_photo_post_expansion",
              hbt_name: "bmxm_2025h2_understanding_bundle_launch_gk",
              unit_id: t,
              unit_type: "ad_account_id",
            };
          });
      }
    }
    function Z(e, t, n) {
      return o(
        "AdsWebToWhatsAppBudgetRecommendationUtils",
      ).isEligibleCampaignForWTWAZO(e, t) === !1
        ? !1
        : ee(n);
    }
    function ee(e) {
      if (!e) return r("gkx")("22328") === !0;
      var t = r("gkx")("11835"),
        n = r("gkx")("22329");
      return (
        t ||
          r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
            var e;
            return {
              condition: n ? "test" : "control",
              feature_name: "wtwa_zo_in_cbo",
              hbt_name: "ctx_budget_hbt_wave_1_2026",
              unit_id: (e = r("CurrentAdAccount").getID()) != null ? e : "",
              unit_type: "ad_account_id",
            };
          }),
        n
      );
    }
    function te(e, t) {
      return (
        t === void 0 && (t = "WebToXFeatureGating"),
        e
          ? o(
              "CtxBudgetGuidanceLongTermHoldoutUtils",
            ).isCtxBudgetGuidanceLongTermHoldoutEnabled(
              !0,
              "WTWAZOBudgetDefaultInNonCBOFlow",
              t,
            )
          : o(
              "CtxBudgetGuidanceLongTermHoldoutUtils",
            ).isCtxBudgetGuidanceLongTermHoldoutEnabled(
              !1,
              "WTWAZOBudgetDefaultInNonCBOFlow",
              t,
            )
      );
    }
    function ne(e, t) {
      var n = e === !0 ? r("gkx")("9798") : r("gkx")("13573");
      if (e) {
        var o = r("gkx")("11835");
        o ||
          r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
            return {
              condition: n ? "test" : "control",
              feature_name: "wtwa_zo_post_publish_recommendation_non_cbo",
              hbt_name: "ctx_guidance_hbt_wave_3_26",
              unit_id: t,
              unit_type: "ad_account_id",
            };
          });
      }
      return n;
    }
    function re(e) {
      return e ? r("qex")._("3894") === !0 : r("qex")._("3924") === !0;
    }
    function oe(e) {
      if (r("gkx")("20279")) {
        var t = r("gkx")("25278");
        return (ie(t, e), t);
      }
      return !1;
    }
    function ae(e) {
      if (r("gkx")("20279")) {
        var t = r("gkx")("25278");
        return (ie(t, e), t);
      }
      return !1;
    }
    function ie(e, t) {
      if (t != null) {
        var n = r("gkx")("11835");
        n === !1 &&
          r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
            return {
              condition: e === !0 ? "test" : "control",
              feature_name: "existing_post_prefill",
              hbt_name: "bmxm_enablement_guidance_wtwa_wave2_bundle",
              unit_id: t,
              unit_type: "ad_account_id",
            };
          });
      }
    }
    function le(e) {
      e != null;
    }
    function se(e, t) {
      if (t != null) {
        var n = r("gkx")("11835");
        n === !1 &&
          r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
            return {
              condition: e === !0 ? "test" : "control",
              feature_name: "sales_prefill",
              hbt_name: "bmx_enablement_ctx_guidance_wtwa_wave2_bundle",
              unit_id: t,
              unit_type: "ad_account_id",
            };
          });
      }
    }
    function ue(e) {
      if (!e) return r("gkx")("12056") === !0;
      var t = r("gkx")("12083");
      return t;
    }
    function ce(e) {
      return e ? r("gkx")("1426") === !0 : r("gkx")("995") === !0;
    }
    function de(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("gkx")("2088") === !0 : r("gkx")("2550") === !0
      );
    }
    function me(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("gkx")("8065") === !0 : r("gkx")("8626") === !0
      );
    }
    function pe() {
      return r("qex")._("2521") === !0;
    }
    function _e() {
      return r("qex")._("3396") === !0;
    }
    function fe(e, t) {
      if (t != null) {
        var n = r("gkx")("11835");
        n === !1 &&
          r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
            return {
              condition: e === !0 ? "test" : "control",
              feature_name: "ig_existing_post_prefill",
              hbt_name: "bmxm_enablement_guidance_wtwa_wave2_bundle",
              unit_id: t,
              unit_type: "ad_account_id",
            };
          });
      }
    }
    function ge(e) {
      var t = r("gkx")("11835");
      if (t === !0) return pe();
      var n = r("gkx")("25279");
      return (fe(n === !0, e), n === !0);
    }
    function he(e) {
      return r("gkx")("7672")
        ? !0
        : e
          ? r("qex")._("3482") === !0
          : r("qex")._("3520") === !0;
    }
    function ye(e) {
      return e ? r("gkx")("9211") === !0 : r("gkx")("9286") === !0;
    }
    function Ce(e) {
      return e ? r("qex")._("3823") === !0 : r("qex")._("3836") === !0;
    }
    function be(e) {
      return e ? r("qex")._("4803") === !0 : r("qex")._("5104") === !0;
    }
    function ve(e) {
      return e ? r("qex")._("3961") === !0 : r("qex")._("3486") === !0;
    }
    function Se(e, t) {
      return o("CTXChatBuilderFeatureGating").enableMessageTemplateForWTD(
        o("AdsWebsiteExtensionTypeUtils").getSelectedMessageExtensiontype(e),
        null,
        !1,
        t,
      );
    }
    function Re(e, t) {
      var n = t == null ? void 0 : t.whatsapp_numbers_info;
      if (e != null && n != null && n.length > 0) {
        var r = n.find(function (t) {
          return t.page_whatsapp_number_id === e;
        });
        return (
          !(r != null && r.is_business_number) ||
          (r == null ? void 0 : r.whatsapp_smb_device) === "SMBA" ||
          (r == null ? void 0 : r.whatsapp_smb_device) === "SMBI"
        );
      }
      return (
        (t == null ? void 0 : t.whatsapp_number_type) === "PERSONAL" ||
        (o("AdsPageUtils").hasWhatsAppBusinessNumber(t) &&
          ((t == null ? void 0 : t.whatsapp_smb_device) === "SMBA" ||
            (t == null ? void 0 : t.whatsapp_smb_device) === "SMBI"))
      );
    }
    function Le() {
      return r("qex")._("4013") != null;
    }
    function Ee() {
      return r("gkx")("20056");
    }
    function ke() {
      return r("gkx")("4033");
    }
    function Ie() {
      return r("gkx")("27926");
    }
    ((l.isWTMEligibleObjective = u),
      (l.checkWebToMessengerQE = c),
      (l.shouldEnableWebToMFlexibleFormat = d),
      (l.isWebToMessengerEligibleForCatalogAds = m),
      (l.isWebToXEligibleForCatalogAds = p),
      (l.shouldShowWTXForL3CatalogAds = _),
      (l.enableWebToM = f),
      (l.isWTDLeadsObjective = y),
      (l.checkWebToIGQE = k),
      (l.shouldEnableWebToDFlexibleFormat = I),
      (l.checkPassesWebToIGDTargetingCriteria = M),
      (l.checkWtwaUpsellInDuplication = w),
      (l.enableWebToIGD = F),
      (l.isWebToWAActiveAdvertiser = O),
      (l.shouldEnableSuggestedPostForOC = B),
      (l.suggestedPostExposureLoggingForPE = W),
      (l.suggestedPostExposureLoggingForOC = q),
      (l.shouldEnableSuggestedPostForPostEngagement = U),
      (l.shouldEnableSuggestedPostForThruPlay = V),
      (l.shouldEnableSuggestedPostForAwareness = H),
      (l.shouldEnableWebToWhatsAppFirstMessageTemplate = G),
      (l.shouldEnableFlexibleFormatForWebsiteExtensions = z),
      (l.shouldEnableWebToWhatsAppFlexibleFormat = K),
      (l.exposeWTWAFlexibleFormatToExposureTable = Q),
      (l.isEligibleForWTXDefaultingAnyObjective = X),
      (l.enableMultiPhotoWebCTAExpansion = Y),
      (l.multiPhotoPostEnablementExposureLogging = J),
      (l.enableWTWAZOBudgetDefaultInCBOFlow = Z),
      (l.enableWTWAZOBudgetDefaultInCBOFlowQE = ee),
      (l.enableWTWAZOBudgetDefaultInNonCBOFlowQE = te),
      (l.enableWTWAPostPublishZORecommendation = ne),
      (l.shouldEnableWTXBudgetCreativeCombinedWarning = re),
      (l.isInAdsManagerCTAWEblinkPrefillQETest1or2 = oe),
      (l.isInAdsManagerCTAWEblinkPrefillQETest2 = ae),
      (l.existingPostPrefillExposureLogging = ie),
      (l.trafficPrefillExposureLogging = le),
      (l.salesPrefillExposureLogging = se),
      (l.enableWTWASABRBudgeInNonCBOFlowQE = ue),
      (l.enableWTWASABRBudgeInCBOFlowQE = ce),
      (l.isInWtwaSabrNewModelExperiment = de),
      (l.isInWtwaSabrNewModelCbo = me),
      (l.isInAdsManagerIGPostCTAWeblinkDefaultingQE = pe),
      (l.isInAdsManagerIGPostCTAWeblinkDefaultingFrequentQE = _e),
      (l.igExistingPostPrefillExposureLogging = fe),
      (l.isInAdsManagerIGExistingPostWeblinkPrefillEnabled = ge),
      (l.enablePTWAMessageTemplateQE = he),
      (l.enableWTXNonSalesMessageTemplate = ye),
      (l.enableWTDFollowUp = Ce),
      (l.enableWTMFollowUp = be),
      (l.enableWTDChatBuilderDefaultExpanded = ve),
      (l.isMessagingTemplateEnabledForWTD = Se),
      (l.isPersonalOrSMBWANumber = Re),
      (l.isInWTMPFRExperiment = Le),
      (l.isAdAccountOptedOutOfWTMDefaulting = Ee),
      (l.isAdAccountExcludedFromWTXDefaulting = ke),
      (l.isAdAccountInWTXDefaultingBacktest = Ie));
  },
  98,
);
