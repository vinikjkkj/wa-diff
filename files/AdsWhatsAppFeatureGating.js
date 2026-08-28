__d(
  "AdsWhatsAppFeatureGating",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAccountUtils",
    "AdsNonODAXToODAXMigrationUtils",
    "CurrencyConstants",
    "ODS",
    "firstx",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return r("gkx")("22255");
    }
    function u(e, t, n) {
      if (n !== !0) return !1;
      var o = r("gkx")("22256"),
        a = S(e);
      return !o && !a
        ? !1
        : t === r("AdsAPIObjectives").LINK_CLICKS && (r("gkx")("22257") || a);
    }
    function c(e, t) {
      return e !== r("AdsAPIObjectives").MESSAGES ? !1 : !t;
    }
    var d = [58, 252, 967, 218, 235];
    function m(e) {
      if (e == null || e === "") return !1;
      var t = e.match(/^\+(\d{1,3})/);
      if (t) {
        var n = parseInt(t[1], 10);
        return d.includes(n);
      }
      return !1;
    }
    function p(e) {
      var t = r("gkx")("22256");
      return S(e) ? !1 : !t;
    }
    function _(e) {
      return !p(e);
    }
    function f(e, t, n) {
      return (
        e != null &&
        t != null &&
        (n == null
          ? void 0
          : n.find(function (n) {
              return n.whatsapp_number === t + e && n.is_business_number === !0;
            })) != null
      );
    }
    function g(e, t) {
      var n = r("gkx")("22256");
      return !n || p(e)
        ? !1
        : t === r("AdsAPIObjectives").MESSAGES ||
            t === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT;
    }
    function h(e, t) {
      var n;
      if (e.length !== 1) return !1;
      var o = r("firstx")(e),
        a =
          (n = o.campaign) == null || (n = n.promoted_object) == null
            ? void 0
            : n.page_id;
      if (a == null) return !1;
      var i = t(a);
      return (i == null ? void 0 : i.has_whatsapp_business_number) === !0;
    }
    function y(e, t, n) {
      return (
        t === void 0 && (t = !0),
        C(e, n)
          ? !0
          : e
            ? r("AdsAccountUtils").hasCapability(e, "CTW_ADS_TIER_0_ENFORCING")
              ? !0
              : t === !0
                ? r("gkx")("22258")
                : r("qex")._("1365") === !0 || r("gkx")("3493")
            : !1
      );
    }
    function C(e, t) {
      return (
        (e == null ? void 0 : e.ctwa_smb_enforcing_days_left) != null ||
        t != null
      );
    }
    function b(e, t) {
      var n,
        r =
          (n = e == null ? void 0 : e.ctwa_smb_enforcing_days_left) != null
            ? n
            : t;
      return C(e, t) && r != null && r !== 0;
    }
    function v(e, t, n) {
      return g(e, t) && !y(e, null, n);
    }
    function S(e) {
      return !(
        !e ||
        (e.business_country_code !== "India" &&
          e.currency !== r("CurrencyConstants").ISO_CURRENCY_INDIAN_RUPEE)
      );
    }
    function R(t) {
      (e || (e = o("ODS"))).bumpEntityKey(
        1967,
        "ctwa",
        "check_allow_conversations_in_optimization_dropdown",
      );
      var n =
        (t === r("AdCampaignDestination").WHATSAPP &&
          r("qex")._("4675") === !0) ||
        L(t);
      return (
        e.bumpEntityKey(
          1967,
          "ctwa",
          n
            ? "allow_conversations_in_optimization_dropdown"
            : "disable_conversations_in_optimization_dropdown",
        ),
        n
      );
    }
    function L(e, t) {
      t === void 0 && (t = !0);
      var n =
        e === r("AdCampaignDestination").MESSAGING_MESSENGER_WHATSAPP ||
        e === r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_WHATSAPP ||
        e ===
          r("AdCampaignDestination")
            .MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP;
      return n ? (t ? r("gkx")("25149") : r("gkx")("25869")) : !1;
    }
    function E(e, t, n) {
      return (n === void 0 && (n = !1), !(n || !e || t !== !0));
    }
    function k() {
      var e = r("gkx")("22256");
      return e;
    }
    function I() {
      return r("gkx")("26073");
    }
    function T(t, n, a, i, l) {
      if (t !== r("AdCampaignDestination").WHATSAPP) return !1;
      var s =
          n && i
            ? o("AdsNonODAXToODAXMigrationUtils").getODAXObjectives(
                n,
                i,
                null,
                l,
                null,
              )
            : [],
        u = n != null ? n : "unknown";
      return (
        s.length > 0
          ? s.forEach(function (t) {
              (e || (e = o("ODS"))).bumpEntityKey(
                4090,
                "obc.www.all",
                "autofill_eligible_check." + u + "." + t,
              );
            })
          : (e || (e = o("ODS"))).bumpEntityKey(
              4090,
              "obc.www.all",
              "autofill_eligible_check." + u + ".no_odax_mapping",
            ),
        !0
      );
    }
    function D(e, t) {
      var n;
      if (e.length !== 1) return !1;
      var o = r("firstx")(e),
        a =
          (n = o.campaign) == null || (n = n.promoted_object) == null
            ? void 0
            : n.page_id;
      if (a == null) return !1;
      var i = t(a);
      return (i == null ? void 0 : i.has_whatsapp_number) === !0;
    }
    function x(e, t, n) {
      return e !== r("AdsAPIObjectives").OUTCOME_LEADS ||
        n !== r("AdCampaignDestination").WHATSAPP ||
        t !== r("AdsAPIOptimizationGoals").LEAD_GENERATION
        ? !1
        : r("gkx")("339");
    }
    function $() {
      return r("qex")._("2465") === !0;
    }
    function P() {
      return r("qex")._("201") === !0 ? !0 : $();
    }
    function N() {
      return r("gkx")("19408") ? !0 : $();
    }
    ((l.canUseWhatsAppCTAMessagesObjectiveLWI = s),
      (l.isConversationEnabledForTrafficObjectiveWhatsappForNonEU = u),
      (l.shouldDisableConversationsForNonWASMBAdvertisers = c),
      (l.isWhatsappDestinationRestrictedToLinkClicksDueToNumber = m),
      (l.isWhatsappDestinationRestrictedToLinkClicks = p),
      (l.isBusinessNumberRequiredForMessagesObjective = _),
      (l.enableWhatsAppInputNumberFix = f),
      (l.isWaBusinessUpsellEligible = g),
      (l.adUsesWhatsappBusinessAccount = h),
      (l.isWASMBEnforcingEnabled = y),
      (l.isWASMBEnforcing2023Enabled = C),
      (l.isWASMBEnforcing2023Warning = b),
      (l.shouldWaiveBizRequirement = v),
      (l.isEPDAdvertiserInConversationsExperiment = R),
      (l.isCtwaMdDcmoEnabled = L),
      (l.isCTWAIcebreakerAutoRepliesSupportEnabled = E),
      (l.shouldSalesObjectiveWhatsAppDefaultConversations = k),
      (l.isCTWASalesPlacementCleanupEnabled = I),
      (l.isAutofillEligible = T),
      (l.adUsesWhatsappAccount = D),
      (l.hideCTWATosLead = x),
      (l.shouldApplyPWANMismatchFixBundle = $),
      (l.shouldClearPWANOnPageSwitch = P),
      (l.shouldSkipCrossPageWANAutoSelect = N));
  },
  98,
);
