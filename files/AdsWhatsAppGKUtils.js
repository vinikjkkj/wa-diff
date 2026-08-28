__d(
  "AdsWhatsAppGKUtils",
  [
    "AdsAPIObjectives",
    "AdsPromotedObjectTypes",
    "AdsWebsiteAdUtils",
    "AdsWhatsAppLoggingUtils",
    "AdsWhatsAppUtils",
    "ClickToMessageCTDFeatureGating",
    "CtxAdvertiserQeHbtExposureFalcoEvent",
    "WebToWAExistingPostUtils",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return !1;
    }
    function s(e, t) {
      if (e.qe_non_heuristic == null) return !1;
      var n = e.qe_non_heuristic;
      switch (n) {
        case "cta_defaulting_mtml_ad_suggestions_hbt_wave5": {
          var a = r("gkx")("13115");
          return (u(t, a, "cta_defaulting_mtml_ad_suggestions_hbt_wave5"), a);
        }
        case "cta_defaulting_mtml_ig_post":
          return o(
            "ClickToMessageCTDFeatureGating",
          ).isMTMLIGPostCTADefaultingEnabled();
        default:
          return !1;
      }
    }
    function u(e, t, n) {
      var o = r("gkx")("15748");
      o ||
        r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
          var r;
          return {
            condition: t ? "test" : "control",
            feature_name: "cta_defaulting_ml_based",
            hbt_name: n,
            unit_id: (r = e == null ? void 0 : e.account_id) != null ? r : "",
            unit_type: "ad_account_id",
          };
        });
    }
    function c(e) {
      return (
        e === r("AdsAPIObjectives").LEAD_GENERATION ||
        e === r("AdsAPIObjectives").OUTCOME_LEADS
      );
    }
    function d(e, t) {
      return (o("AdsWhatsAppLoggingUtils").logCTXDefaultingEvent(e, t), !c(t));
    }
    function m(e, t, n) {
      var a = e.cta === "WHATSAPP_MESSAGE" || e.cta === "MESSAGE_PAGE",
        i =
          n === r("AdsPromotedObjectTypes").WEBSITE ||
          o("AdsWebsiteAdUtils").isWebsiteObjective(t, n),
        l = t === r("AdsAPIObjectives").LINK_CLICKS;
      return a && l && i;
    }
    function p(e, t, n) {
      if (n != null) {
        var a = o(
          "WebToWAExistingPostUtils",
        ).shouldDisableCTXDefaultingForWTWAExistingPosts(t, n);
        if (a) return !0;
      }
      return !!(
        (e.cta === "INSTAGRAM_MESSAGE" &&
          t === r("AdsAPIObjectives").CONVERSIONS &&
          n === r("AdsPromotedObjectTypes").PIXEL &&
          o("ClickToMessageCTDFeatureGating").isCTADefaultingEnabled()) ||
        m(e, t, n)
      );
    }
    function _(e) {
      var t;
      switch (e) {
        case "ctx_long_term_defaulting_holdout":
          return ((t = r("qex")._("1888")) != null ? t : !1) === !1;
        default:
          return null;
      }
    }
    function f(e) {
      var t = new Set([
        "live_boosting_ctm_defaulting_am_gk",
        "bmxm_ctwa_pm_cleaned_gk",
        "bmxm_ctwa_adoption_cleaned_gk",
        "ctx_am_igcta_defaulting",
        "ctd_am_l1_default_iteration",
        "ctm_adoption_defaulting_improvements",
      ]);
      return t.has(e);
    }
    function g(e, t, n) {
      var r = new Set([
        "ctx_streamline_am_l1_awareness_holdout",
        "ctx_streamline_am_ad_creation_iteration",
        "ctx_streamline_am_ad_creation_iteration_h2_launch",
      ]);
      return r.has(n) ? d(e, t) : !1;
    }
    function h(e, t, n) {
      var r = _(n);
      if (r != null) return r;
      if (f(n)) return !0;
      var o = g(e, t, n);
      return o || !1;
    }
    function y(e, t, n) {
      return n == null ? !1 : h(e, t, n);
    }
    function C(e, t, n, r) {
      var o;
      if (p(t, n, r)) return !1;
      var a = (o = t.gk) != null ? o : t.qe;
      return y(e, n, a);
    }
    function b() {
      return r("gkx")("9812") ? "tail" : null;
    }
    function v() {
      return b();
    }
    function S(e, t) {
      return (
        o("AdsWhatsAppUtils").hasSMBNumberConnected(t) &&
        o("AdsWhatsAppUtils").hasWAselectedAsDestination(e) &&
        r("gkx")("22132")
      );
    }
    ((l.checkEligibilityForOverrideExistingCTADefaulting = e),
      (l.checkEligibilityForNonHeuristicExistingCTADefaulting = s),
      (l.checkEligibilityForCTADefaulting = C),
      (l.getCTWAActiveAdvertiserSize = v),
      (l.shouldDefaultToIGForSMBBrazil = S));
  },
  98,
);
