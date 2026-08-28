__d(
  "ClickToMessageCTDFeatureGating",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "CTDDefaultCTAConstants",
    "ClickToMessageAIGenEligibilityUtils",
    "ClickToMessageCTDAdPreviewGating",
    "ClickToMessageCTDHeadlineGating",
    "CtxAdvertiserQeHbtExposureFalcoEvent",
    "CtxBudgetGuidanceLongTermHoldoutUtils",
    "CurrentAdAccount",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      var t;
      if ((e === void 0 && (e = !1), e)) {
        var n;
        return (n = r("gkx")("11140")) != null ? n : !1;
      }
      return (t = r("gkx")("11154")) != null ? t : !1;
    }
    function c(e, t) {
      return (
        t === void 0 && (t = !1),
        e === r("AdCampaignDestination").INSTAGRAM_DIRECT && u(t)
      );
    }
    function d(e, t) {
      return (
        e === void 0 && (e = !1),
        t === void 0 && (t = "ClickToMessageCTDFeatureGating"),
        o(
          "CtxBudgetGuidanceLongTermHoldoutUtils",
        ).isCtxBudgetGuidanceLongTermHoldoutEnabled(!e, "CTXMinBudgetAM", t)
      );
    }
    function m() {
      return r("justknobx")._("1488");
    }
    function p(e, t) {
      return (
        e === r("AdCampaignDestination").INSTAGRAM_DIRECT &&
        o("ClickToMessageAIGenEligibilityUtils").isAdCaptionEligibleForAIGen(
          t,
        ) &&
        r("justknobx")._("2143")
      );
    }
    function _(e) {
      return e === r("AdCampaignDestination").INSTAGRAM_DIRECT;
    }
    var f = new Set([
        (e = r("AdsAPIObjectives")).OUTCOME_SALES,
        e.OUTCOME_ENGAGEMENT,
        e.OUTCOME_TRAFFIC,
        e.LINK_CLICKS,
      ]),
      g = new Set([
        void 0,
        (s = r("AdCampaignDestination")).WEBSITE,
        s.MESSENGER,
        s.INSTAGRAM_DIRECT,
        s.MESSAGING_MESSENGER_WHATSAPP,
        s.MESSAGING_INSTAGRAM_DIRECT_MESSENGER,
        s.MESSAGING_INSTAGRAM_DIRECT_WHATSAPP,
        s.MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP,
        s.ON_POST,
        s.ON_AD,
        s.ON_VIDEO,
        s.ON_EVENT,
        s.INSTAGRAM_PROFILE,
        s.FACEBOOK_PAGE,
        s.INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE,
      ]);
    function h(e) {
      var t, n;
      return (
        ((t =
          e == null ||
          (n = e.instagram_accounts) == null ||
          (n = n.data) == null
            ? void 0
            : n.length) != null
          ? t
          : 0) > 0 ||
        (e == null ? void 0 : e.instagram_business_account) != null
      );
    }
    function y(e, t, n) {
      var o;
      return r("justknobx")._("4404") ||
        e == null ||
        !f.has(e) ||
        !g.has(t) ||
        (n !== void 0 && !h(n))
        ? !1
        : (o = r("qex")._("5402")) != null
          ? o
          : !1;
    }
    function C() {
      var e;
      return (e = r("gkx")("9882")) != null ? e : !1;
    }
    function b() {
      var e;
      return (e = r("gkx")("14726")) != null ? e : !1;
    }
    function v(e) {
      return e ? r("qex")._("516") : r("qex")._("2101");
    }
    function S(e) {
      e === void 0 && (e = !1);
      var t = v(e);
      return (
        t != null &&
        o("CTDDefaultCTAConstants").CTD_DEFAULT_CTA_VARIANT_MAP[t] != null
      );
    }
    function R(e) {
      var t;
      e === void 0 && (e = !0);
      var n = v(e);
      return n == null
        ? "INSTAGRAM_MESSAGE"
        : (t = o("CTDDefaultCTAConstants").CTD_DEFAULT_CTA_VARIANT_MAP[n]) !=
            null
          ? t
          : "INSTAGRAM_MESSAGE";
    }
    function L() {
      return r("gkx")("10397") === !0;
    }
    function E() {
      var e;
      return (e = r("qex")._("3764")) != null ? e : !1;
    }
    function k() {
      var e;
      return (e = r("qex")._("1815")) != null ? e : !1;
    }
    function I() {
      var e = r("gkx")("11835");
      if (e) return !0;
      var t = r("gkx")("21216") === !0;
      return (
        r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
          var e;
          return {
            condition: t ? "test" : "control",
            feature_name: "smb_am_cta_defaulting",
            hbt_name: "h126_wave4_ctx_automation_hbt",
            unit_id: (e = r("CurrentAdAccount").getID()) != null ? e : "",
            unit_type: "ad_account_id",
          };
        }),
        t
      );
    }
    function T() {
      var e = r("gkx")("11155") === !0;
      if (!e) return !1;
      var t = r("gkx")("11835") === !0;
      if (t) return !0;
      var n = r("gkx")("18078") === !0;
      return (
        r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
          var e;
          return {
            condition: n ? "test" : "control",
            feature_name: "remove_existing_post_cta_guidance",
            hbt_name: "h2_26_train_1_bundle_7_ad_acct_hbt",
            unit_id: (e = r("CurrentAdAccount").getID()) != null ? e : "",
            unit_type: "ad_account_id",
          };
        }),
        n
      );
    }
    function D(e, t) {
      t === void 0 && (t = {});
      var n = t,
        o = n.shouldLogExposure,
        a = o === void 0 ? !1 : o;
      return e
        ? a
          ? r("qex")._("5286") === !0
          : r("qex")._("3465") === !0
        : !1;
    }
    ((l.isWelcomeMessageCTAGKEnabled = u),
      (l.enableCTDWelcomeMessageCTA = c),
      (l.enableCTXMinBudgetAMQE = d),
      (l.isFBPlacementsEnabledForCTD = m),
      (l.shouldEnableCTDAIGenIcebreakers = p),
      (l.enableCTDNudge = _),
      (l.hasLinkedInstagramAccount = h),
      (l.isEligibleForCommentToDM = y),
      (l.isIGCTAEnabledForPostEngagementExistingPost = C),
      (l.isCTDSingleDestCTAFixEnabled = b),
      (l.isInCTDDefaultCTAExperimentTestGroup = S),
      (l.getCTDDefaultCTAFromExperiment = R),
      (l.shouldShowCTDCustomHeadline = o(
        "ClickToMessageCTDHeadlineGating",
      ).shouldShowCTDCustomHeadline),
      (l.shouldApplyCTDAdPreviewFixes = o(
        "ClickToMessageCTDAdPreviewGating",
      ).shouldApplyCTDAdPreviewFixes),
      (l.isMTMLIGPostCTADefaultingEnabled = L),
      (l.isIGCTAEnabledForSalesWebsite = E),
      (l.isLeadsIGExistingPostCTAFilterFixEnabled = k),
      (l.isCTADefaultingEnabled = I),
      (l.isExistingPostCTAGuidanceCardRemovalEnabled = T),
      (l.enableCTDProductExtensionsIGPlacement = D));
  },
  98,
);
