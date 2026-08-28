__d(
  "WebToXFeatureGating",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsBrandAwarenessUtils",
    "AdsInterfacesLogger",
    "AdsODAXUtils",
    "AdsPageStore",
    "AdsPageUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorMessagingDestinationUtils",
    "AdsWebToWhatsAppBudgetRecommendationUtils",
    "AdsWebsiteExtensionTypeUtils",
    "CTXChatBuilderFeatureGating",
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
      s = 10,
      u = 0.75;
    function c(e) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_SALES ||
        e === r("AdsAPIObjectives").LINK_CLICKS ||
        e === r("AdsAPIObjectives").OUTCOME_LEADS ||
        e === r("AdsAPIObjectives").OUTCOME_AWARENESS
      );
    }
    function d(e, t) {
      t === void 0 && (t = !0);
      var n = c(e);
      return n ? (t ? r("gkx")("9446") === !0 : r("gkx")("9454") === !0) : !1;
    }
    function m(e, t, n, r, o, a) {
      return (
        o === void 0 && (o = !0),
        a === void 0 && (a = !1),
        e && G(t, n, r) ? (a === !0 || o ? d(t, !0) : d(t, !1)) : !1
      );
    }
    function p(t, n, a, i) {
      var l;
      if (r("gkx")("10667") === !0) return !0;
      var s = t != null ? r("AdsPageStore").getLoadObject(t).getValue() : null,
        u = o("AdsAPIAdgroupRecordUtils").isWebToMessengerAd(n);
      if (u) return !0;
      var c = (l = s == null ? void 0 : s.messenger_sends_l28) != null ? l : 0;
      return c >= e ? !0 : w(!0);
    }
    function _(e) {
      if ((e === void 0 && (e = !0), r("gkx")("11835") === !0)) return !0;
      if (e) return r("gkx")("11946") === !0;
      var t = r("gkx")("11803") === !0;
      return (
        r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
          var e;
          return {
            condition: t ? "test" : "control",
            feature_name: "wtm_enable_l3_catalog_ad",
            hbt_name: "h2_train_1_am_mid_adacc_w998_hbt",
            unit_id: (e = r("CurrentAdAccount").getID()) != null ? e : "",
            unit_type: "ad_account_id",
          };
        }),
        t
      );
    }
    function f(e, t, n, r, o, a, i, l) {
      return (
        l === void 0 && (l = !1),
        g(e, t, n) && C(e, !1, t, null, n, r, o, a, i, !l)
      );
    }
    function g(e, t, n) {
      return n === null || e == null
        ? !1
        : e === r("AdsAPIObjectives").OUTCOME_SALES &&
            t === r("AdsPromotedObjectTypes").PRODUCT_SET &&
            n === "PRODUCT_SET_AND_WEBSITE";
    }
    function h(e, t, n, r) {
      var a,
        i = e.objective,
        l = o("AdsAPICampaignRecordUtils").getPromotedObjectType(i, t),
        s = o("AdsPageUtils").getPageID(n),
        u =
          (a = n.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a.message_extensions,
        c = n.account_id,
        d = n.id,
        m = o("WebToWhatsappUtils").isWebToWhatsAppEligibleForCatalogAds(
          i,
          l,
          r,
          !1,
        ),
        p = f(i, l, r, s, u, c, d, !1);
      return m || p;
    }
    function y(e, t, n, r, a) {
      var i, l;
      (r === void 0 && (r = !0), a === void 0 && (a = !1));
      var s = e.objective,
        u = o(
          "AdsAPIAdgroupRecordUtils",
        ).isFlexibleFormatAdOrCreativeAssetGroup(n),
        c = o("AdsAPICampaignRecordUtils").getPromotedObjectType(s, t),
        d = o("AdsODAXUtils").maybeTranslateObjective(
          e.objective,
          c,
          t.optimization_goal,
        ),
        m = (i = t.promoted_object) == null ? void 0 : i.variation,
        p = o("AdsPageUtils").getPageID(n),
        _ =
          (l = n.creative) == null || (l = l.asset_feed_spec) == null
            ? void 0
            : l.message_extensions,
        f = n.account_id,
        g = n.id;
      return C(s, u, c, d, m, p, _, f, g, r, a);
    }
    function C(t, n, o, a, i, l, s, u, f, h, y) {
      var C;
      if ((h === void 0 && (h = !0), y === void 0 && (y = !1), !c(t)))
        return !1;
      var b = !1;
      p(l, s, u, f) && (b = !0);
      var v = h || !b,
        S = !1;
      g(t, o, i)
        ? (S = _(h))
        : n && G(t, a, o)
          ? (S = m(n, t, a, o, v, y))
          : (S = d(t, v));
      var R = l != null ? r("AdsPageStore").getLoadObject(l).getValue() : null,
        L = (C = R == null ? void 0 : R.messenger_sends_l28) != null ? C : 0;
      return (L < e && S && w(h), b && S);
    }
    function b(e, t) {
      return e === r("AdsAPIObjectives").OUTCOME_TRAFFIC ||
        e === r("AdsAPIObjectives").LINK_CLICKS
        ? !0
        : t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS ||
            t === r("AdsAPIOptimizationGoals").RETURN_ON_AD_SPEND;
    }
    function v(e) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_SALES ||
        e === r("AdsAPIObjectives").LINK_CLICKS ||
        e === r("AdsAPIObjectives").OUTCOME_TRAFFIC
      );
    }
    function S(e) {
      e === void 0 && (e = !0);
      var t = r("gkx")("22369") === !0;
      return t
        ? e
          ? r("qex")._("4596") === !0
          : r("qex")._("4599") === !0
        : !1;
    }
    function R(e) {
      return (
        e === r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS ||
        e === r("AdsAPIOptimizationGoals").LINK_CLICKS
      );
    }
    function L(e, t) {
      return (
        t === void 0 && (t = !0),
        R(e) ? (t ? r("qex")._("4806") === !0 : r("qex")._("4807") === !0) : !1
      );
    }
    function E(e, t) {
      return (
        t === void 0 && (t = !0),
        v(e) ? (t ? r("gkx")("6644") === !0 : r("gkx")("7071") === !0) : !1
      );
    }
    function k(e, t, n, r) {
      return e && G(t, n, r);
    }
    function I(
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
    ) {
      r("WebToXAdsUnifiedFalcoEvent").log(function () {
        var r, L, E;
        return {
          event: "wtd_eligibility_check",
          ad_account_id: e.account_id,
          ad_group_id: e.id,
          ad_page_id: t != null ? t : "",
          event_info:
            "eligible:" +
            String(m) +
            ",existing_wtd_ad:" +
            String(o) +
            ",objective:" +
            (a != null ? a : "") +
            ",optimization_goal:" +
            (i != null ? i : "") +
            ",l28_ig_sends:" +
            ((r = n == null ? void 0 : n.toString()) != null ? r : "") +
            ",passes_override_gk:" +
            String(s) +
            ",passes_eligibility_gk:" +
            String(l) +
            ",sales_primary_objective:" +
            String(u) +
            ",ig_spend_l28:" +
            ((L = c == null ? void 0 : c.toString()) != null ? L : "") +
            ",total_spend_l28:" +
            ((E = d == null ? void 0 : d.toString()) != null ? E : "") +
            ",ig_share:" +
            (p != null ? p.toFixed(4) : "") +
            ",ig_share_threshold:" +
            _.toString() +
            ",is_ig_heavy:" +
            String(f) +
            ",traffic_qe_enabled:" +
            (g != null ? String(g) : "") +
            ",has_linked_ig:" +
            String(h) +
            ",is_iabp:" +
            String(y) +
            ",has_fb_placement:" +
            String(C) +
            ",has_ig_placement:" +
            String(b) +
            ",is_ig_only:" +
            String(v) +
            ",cas_expansion_qe_enabled:" +
            (S != null ? String(S) : "") +
            ",non_oc_qe_enabled:" +
            (R != null ? String(R) : ""),
        };
      });
    }
    function T(e, t) {
      var n, a, i;
      if (
        t !== r("AdsAPIObjectives").OUTCOME_TRAFFIC &&
        t !== r("AdsAPIObjectives").LINK_CLICKS
      )
        return { igShare: null, igShareThreshold: u, isIGHeavy: !1 };
      var l = o("AdsPageUtils").getPageID(e),
        s = l != null ? r("AdsPageStore").getLoadObject(l).getValue() : null,
        c =
          (n = s == null ? void 0 : s.external_legal_budget_l28) != null
            ? n
            : 0,
        d =
          (a = s == null ? void 0 : s.instagram_external_legal_budget_l28) !=
          null
            ? a
            : 0,
        m = (i = r("qex")._("772")) != null ? i : u,
        p = c > 0 ? d / c : null,
        _ = p != null && p > m;
      return { igShare: p, igShareThreshold: m, isIGHeavy: _ };
    }
    function D(e, t) {
      return (
        t === void 0 && (t = !0),
        e.isIGHeavy
          ? t
            ? r("qex")._("799") === !0
            : r("qex")._("1532") === !0
          : !1
      );
    }
    function x(e, t, n, a, i) {
      var l, u, c;
      a === void 0 && (a = !0);
      var d = r("gkx")("7672") === !0,
        m = r("gkx")("7198") === !0,
        p = o("AdsPageUtils").getPageID(e),
        _ = p != null ? r("AdsPageStore").getLoadObject(p).getValue() : null,
        f = o("AdsAPIAdgroupRecordUtils").isWebToIGDAd(e),
        g =
          (_ == null ? void 0 : _.ad_account_primary_objective) ===
          r("AdsAPIObjectives").OUTCOME_SALES,
        h = T(e, t),
        y = h.isIGHeavy ? r("qex")._("799") === !0 : null,
        C =
          (_ == null || (l = _.connected_instagram_account) == null
            ? void 0
            : l.user_igid) != null,
        E = (_ == null ? void 0 : _.is_instagram_account_backed_page) === !0,
        k = m ? null : r("qex")._("4596") === !0,
        x = R(n) ? r("qex")._("4806") === !0 : null,
        $ =
          i == null || (u = i.targeting) == null
            ? void 0
            : u.publisher_platforms,
        P = $ == null ? !0 : $.includes("facebook"),
        N = $ == null ? !0 : $.includes("instagram"),
        M = N && !P;
      if (d)
        return (
          I(
            e,
            p,
            _ == null ? void 0 : _.connected_ig_sends_l28,
            f,
            t,
            n,
            m,
            d,
            g,
            _ == null ? void 0 : _.instagram_external_legal_budget_l28,
            _ == null ? void 0 : _.external_legal_budget_l28,
            !0,
            h.igShare,
            h.igShareThreshold,
            h.isIGHeavy,
            y,
            C,
            E,
            P,
            N,
            M,
            k,
            x,
          ),
          !0
        );
      var w =
          (c = _ == null ? void 0 : _.connected_ig_sends_l28) != null ? c : 0,
        A = !1;
      w >= 1 && (A = r("qex")._("2385") === !0);
      var F = A ? 1 : s,
        O = w >= F,
        B = v(t),
        W = b(t, n),
        q = W || L(n),
        U = B && q && O,
        V = m || S(),
        H = V && U && (g || D(h, a)),
        G = g || (h.isIGHeavy && y === !0);
      return (
        !a && !m && U && G && S(!1),
        !a && !W && B && O && V && G && L(n, !1),
        I(
          e,
          p,
          _ == null ? void 0 : _.connected_ig_sends_l28,
          f,
          t,
          n,
          m,
          d,
          g,
          _ == null ? void 0 : _.instagram_external_legal_budget_l28,
          _ == null ? void 0 : _.external_legal_budget_l28,
          H,
          h.igShare,
          h.igShareThreshold,
          h.isIGHeavy,
          y,
          C,
          E,
          P,
          N,
          M,
          k,
          x,
        ),
        H
      );
    }
    function $(e) {
      var t,
        n = (t = r("gkx")("25277")) != null ? t : !1;
      return (P(n, e), n);
    }
    function P(e, t) {
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
    function N(e, t, n, r) {
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
        );
      return !x(n, a, t.optimization_goal, r, t) || (i && !k(i, a, s, l))
        ? !1
        : E(a, r);
    }
    function M() {
      return r("gkx")("11067") === !0;
    }
    function w(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("gkx")("24201") === !0 : r("gkx")("24203") === !0
      );
    }
    function A(e, t) {
      if (e) {
        var n = r("gkx")("14102") === !0;
        return (O(n, t), n);
      }
      return r("gkx")("14152") === !0;
    }
    function F(e, t) {
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
    function O(e, t) {
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
    function B(e, t) {
      if (e) {
        var n = r("gkx")("14102") === !0;
        return (F(n, t), n);
      }
      return r("gkx")("14152") === !0;
    }
    function W(e) {
      return e ? r("qex")._("3598") === !0 : r("qex")._("3599") === !0;
    }
    function q(e) {
      return e ? r("qex")._("3600") === !0 : r("qex")._("3601") === !0;
    }
    function U(e) {
      return (
        e === void 0 && (e = !0),
        e ? r("gkx")("1565") : r("gkx")("2809")
      );
    }
    function V(e) {
      return e ? r("qex")._("4765") === !0 : r("qex")._("4766") === !0;
    }
    function H(e, t, n) {
      var r = z(!1);
      return G(e, t, n) && r;
    }
    function G(e, t, n) {
      return (
        t === r("AdsAPIObjectives").CONVERSIONS &&
        e === r("AdsAPIObjectives").OUTCOME_SALES &&
        n === r("AdsPromotedObjectTypes").PIXEL
      );
    }
    function z(e, t) {
      var n = !0,
        o = r("gkx")("3887") === !0;
      return (
        e
          ? o && ((n = r("gkx")("3929") === !0), j(n, t))
          : o && (n = r("gkx")("3970") === !0),
        n
      );
    }
    function j(e, t) {
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
    function K(e, t, n, o, a) {
      var i,
        l = "",
        s = "";
      (e != null && (l = e == null ? void 0 : e.toLowerCase()),
        t != null && (s = t == null ? void 0 : t.toLowerCase()),
        r("AdsInterfacesLogger").log({
          eventName: o,
          data:
            ((i = {}),
            (i.ad_account_id = a),
            (i.new_value = l),
            (i.old_value = s),
            (i.page_id = n != null ? n : ""),
            i),
        }));
    }
    function Q(e, t) {
      return (
        (e === r("AdsAPIObjectives").OUTCOME_SALES ||
          e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
          e === r("AdsAPIObjectives").LINK_CLICKS ||
          e === r("AdsAPIObjectives").OUTCOME_LEADS) &&
        (t === r("AdsPromotedObjectTypes").PIXEL ||
          t === r("AdsPromotedObjectTypes").WEBSITE)
      );
    }
    function X(e, t, n, a) {
      if (
        !e ||
        o("AdsUEditorMessagingDestinationUtils").isClickToMessageAdDestination(
          t,
        )
      )
        return !1;
      if (o("ShopsAdsOffsiteCheckoutAdsUtils").isWebsiteDestinationType(t)) {
        if (o("AdsBrandAwarenessUtils").isBrandObjective(n)) return !1;
        var i = r("gkx")("14102");
        return (Y(i, a), i);
      }
      return !1;
    }
    function Y(e, t) {
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
    function J(e, t, n) {
      return o(
        "AdsWebToWhatsAppBudgetRecommendationUtils",
      ).isEligibleCampaignForWTWAZO(e, t) === !1
        ? !1
        : Z(n);
    }
    function Z(e) {
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
    function ee(e, t, n, r) {
      return e == null ||
        o(
          "AdsWebToWhatsAppBudgetRecommendationUtils",
        ).isEligibleCampaignForWTWAZO(t, n) === !1
        ? !1
        : te(r, "WebToXFeatureGating");
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
    function oe() {
      return r("qex")._("4225") === !0;
    }
    function ae(e) {
      var t = [
        r("AdCampaignDestination").FACEBOOK_PAGE,
        r("AdCampaignDestination").ON_PAGE,
      ];
      return e != null && t.includes(e) && oe();
    }
    function ie(e) {
      if (r("gkx")("20279")) {
        var t = r("gkx")("25278");
        return (se(t, e), t);
      }
      return !1;
    }
    function le(e) {
      if (r("gkx")("20279")) {
        var t = r("gkx")("25278");
        return (se(t, e), t);
      }
      return !1;
    }
    function se(e, t) {
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
    function ue(e) {
      e != null;
    }
    function ce(e, t) {
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
    function de(e) {
      if (!e) return r("gkx")("12056") === !0;
      var t = r("gkx")("12083");
      return t;
    }
    function me(e) {
      return e ? r("gkx")("1426") === !0 : r("gkx")("995") === !0;
    }
    function pe(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("gkx")("2088") === !0 : r("gkx")("2550") === !0
      );
    }
    function _e(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("gkx")("8065") === !0 : r("gkx")("8626") === !0
      );
    }
    function fe() {
      return r("qex")._("2521") === !0;
    }
    function ge() {
      return r("qex")._("3396") === !0;
    }
    function he(e, t) {
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
    function ye(e) {
      var t = r("gkx")("11835");
      if (t === !0) return fe();
      var n = r("gkx")("25279");
      return (he(n === !0, e), n === !0);
    }
    function Ce(e, t) {
      var n = r("gkx")("469");
      if (n === !0) return !0;
      var o = r("gkx")("11835");
      return o === !0 ? be(e) : ve(e, t);
    }
    function be(e) {
      return r("gkx")("10544") === !0
        ? e
          ? r("gkx")("11695") === !0
          : r("gkx")("14626") === !0
        : !0;
    }
    function ve(e, t) {
      if (r("gkx")("10544") === !0) {
        var n = e ? r("gkx")("9194") === !0 : r("gkx")("10714") === !0;
        return (e && Se(n, t), n);
      }
      return !0;
    }
    function Se(e, t) {
      var n = r("gkx")("12254");
      t != null &&
        !n &&
        r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
          return {
            condition: e ? "test" : "control",
            feature_name: "wtwa_chat_builder",
            hbt_name: "h126_wave4_ptwa_hbt_h2_rerun",
            unit_id: t,
            unit_type: "ad_account_id",
          };
        });
    }
    function Re(e) {
      return e ? r("gkx")("9211") === !0 : r("gkx")("9286") === !0;
    }
    function Le(e) {
      return e ? r("qex")._("3823") === !0 : r("qex")._("3836") === !0;
    }
    function Ee(e) {
      return e ? r("qex")._("3961") === !0 : r("qex")._("3486") === !0;
    }
    function ke(e, t) {
      return o("CTXChatBuilderFeatureGating").enableMessageTemplateForWTD(
        o("AdsWebsiteExtensionTypeUtils").getSelectedMessageExtensiontype(e),
        null,
        !1,
        t,
      );
    }
    function Ie(e, t) {
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
    function Te() {
      return r("qex")._("4013") != null;
    }
    function De() {
      return r("qex")._("2986") === !0;
    }
    function xe() {
      return r("gkx")("20056");
    }
    function $e() {
      return r("gkx")("4033");
    }
    function Pe() {
      return !1;
    }
    ((l.isWTMEligibleObjective = c),
      (l.checkWebToMessengerQE = d),
      (l.shouldEnableWebToMFlexibleFormat = m),
      (l.shouldEnableWTMCatalogAds = _),
      (l.isWebToMessengerEligibleForCatalogAds = f),
      (l.isWebToXEligibleForCatalogAds = g),
      (l.shouldShowWTXForL3CatalogAds = h),
      (l.enableWebToM = y),
      (l.checkWebToIGQE = E),
      (l.shouldEnableWebToDFlexibleFormat = k),
      (l.checkPassesWebToIGDTargetingCriteria = x),
      (l.checkWtwaUpsellInDuplication = $),
      (l.enableWebToIGD = N),
      (l.isWebToWAActiveAdvertiser = M),
      (l.isAudienceExpansionEnabled = w),
      (l.shouldEnableSuggestedPostForOC = A),
      (l.suggestedPostExposureLoggingForPE = F),
      (l.suggestedPostExposureLoggingForOC = O),
      (l.shouldEnableSuggestedPostForPostEngagement = B),
      (l.shouldEnableSuggestedPostForThruPlay = W),
      (l.shouldEnableSuggestedPostForAwareness = q),
      (l.checkWebToWAMultinumberQE = U),
      (l.shouldEnableWebToWhatsAppFirstMessageTemplate = V),
      (l.shouldEnableFlexibleFormatForWebsiteExtensions = H),
      (l.shouldEnableWTXFlexibleFormat = G),
      (l.shouldEnableWebToWhatsAppFlexibleFormat = z),
      (l.exposeWTWAFlexibleFormatToExposureTable = j),
      (l.unifiedDefaultingDefaultingShadowLogging = K),
      (l.isEligibleForWTXDefaultingAnyObjective = Q),
      (l.enableMultiPhotoWebCTAExpansion = X),
      (l.multiPhotoPostEnablementExposureLogging = Y),
      (l.enableWTWAZOBudgetDefaultInCBOFlow = J),
      (l.enableWTWAZOBudgetDefaultInCBOFlowQE = Z),
      (l.enableWTWAZOBudgetDefaultInNonCBOFlow = ee),
      (l.enableWTWAZOBudgetDefaultInNonCBOFlowQE = te),
      (l.enableWTWAPostPublishZORecommendation = ne),
      (l.shouldEnableWTXBudgetCreativeCombinedWarning = re),
      (l.enableProfileToMessenger = oe),
      (l.isEligibleForProfileToMessenger = ae),
      (l.isInAdsManagerCTAWEblinkPrefillQETest1or2 = ie),
      (l.isInAdsManagerCTAWEblinkPrefillQETest2 = le),
      (l.existingPostPrefillExposureLogging = se),
      (l.trafficPrefillExposureLogging = ue),
      (l.salesPrefillExposureLogging = ce),
      (l.enableWTWASABRBudgeInNonCBOFlowQE = de),
      (l.enableWTWASABRBudgeInCBOFlowQE = me),
      (l.isInWtwaSabrNewModelExperiment = pe),
      (l.isInWtwaSabrNewModelCbo = _e),
      (l.isInAdsManagerIGPostCTAWeblinkDefaultingQE = fe),
      (l.isInAdsManagerIGPostCTAWeblinkDefaultingFrequentQE = ge),
      (l.igExistingPostPrefillExposureLogging = he),
      (l.isInAdsManagerIGExistingPostWeblinkPrefillEnabled = ye),
      (l.enableWTWAMessageTemplateQE = Ce),
      (l.enableWTXNonSalesMessageTemplate = Re),
      (l.enableWTDFollowUp = Le),
      (l.enableWTDChatBuilderDefaultExpanded = Ee),
      (l.isMessagingTemplateEnabledForWTD = ke),
      (l.isPersonalOrSMBWANumber = Ie),
      (l.isInWTMPFRExperiment = Te),
      (l.enableWTMDefaultingExpansion = De),
      (l.isAdAccountOptedOutOfWTMDefaulting = xe),
      (l.isAdAccountExcludedFromWTXDefaulting = $e),
      (l.isWTXGenAIChatBuilderEnabled = Pe));
  },
  98,
);
