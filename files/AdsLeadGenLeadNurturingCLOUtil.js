__d(
  "AdsLeadGenLeadNurturingCLOUtil",
  [
    "errorCode",
    "errorDesc",
    "AdCampaignDestination",
    "AdsAPICampaignPaths",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsError",
    "AdsErrorsCTAStrings",
    "AdsOnsiteCLOStandardInfraUtil",
    "ClickToMessageAdoptionPerformanceLongTermHoldout",
    "LeadNurturingFeatureGating",
    "XAdsEventsManagerHomeControllerRouteBuilder",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e() {
      return r("qex")._("312") === !0;
    }
    function c() {
      return r("qex")._("264") === !0;
    }
    function d(e, t) {
      return r("XAdsEventsManagerHomeControllerRouteBuilder").buildURL({
        business_id: t != null ? t : "",
        act: e != null ? e : "",
        dialog: "lead_gen_onsite_clo",
      });
    }
    function m() {
      return !R(!1) ||
        o(
          "ClickToMessageAdoptionPerformanceLongTermHoldout",
        ).isAccountInEpdJurisdiction()
        ? !1
        : r("gkx")("9019")
          ? r("qex")._("3944") === !0
          : !1;
    }
    function p() {
      return !R(!1) ||
        o(
          "ClickToMessageAdoptionPerformanceLongTermHoldout",
        ).isAccountInEpdJurisdiction()
        ? !1
        : c()
          ? !0
          : r("gkx")("9019")
            ? r("qex")._("3944") === !0
            : !1;
    }
    function _() {
      return o("AdsOnsiteCLOStandardInfraUtil").isEligibleForOnsiteCLODepAET()
        ? "onsite_clo_dep_aet"
        : r("gkx")("21160")
          ? "onsite_crm"
          : m()
            ? "meta_source"
            : null;
    }
    function f() {
      return "whatsapp_conversations";
    }
    function g(e) {
      return !1;
    }
    function h(e) {
      return !1;
    }
    function y(e, t) {
      if (e === "onsite_p2b_call" && t != null) {
        var n = t.thank_you_page;
        if (n != null && n.button_type !== "CALL_BUSINESS")
          return new (r("AdsError"))(
            1892271,
            u._(function (e, t) {
              return e._(
                /*BTDS*/ '"Calls" is selected as the data source to optimize conversion leads for the ad set, but the ad has a form without "Call Business" action. Please use a form with "Call Business" action or select another data source.',
              );
            }, {}),
            { level: r("AdsError").Level.RECOMMEND },
          );
      }
    }
    function C() {
      return new (r("AdsError"))(
        2490520,
        u._(function (e, t) {
          return e._(
            /*BTDS*/ "Select a data source to help optimize your ad performance for conversion leads.",
          );
        }, {}),
        {
          level: r("AdsError").Level.WARN,
          path: r("AdsAPICampaignPaths").PROMOTED_OBJECT
            .LEAD_ADS_FORM_EVENT_SOURCE_TYPE,
        },
      );
    }
    function b() {
      return new (r("AdsError"))(
        2490587,
        u._(function (e, t) {
          return e._(
            /*BTDS*/ "To nurture leads using your chosen signal source, choose a lead follow-up event.",
          );
        }, {}),
        {
          level: r("AdsError").Level.WARN,
          path: r("AdsAPICampaignPaths").PROMOTED_OBJECT
            .LEAD_ADS_FOLLOW_UP_EVENT,
        },
      );
    }
    function v() {
      return new (r("AdsError"))(
        2490593,
        u._(function (e, t) {
          return e._(
            /*BTDS*/ "To use WhatsApp conversations for lead follow-up, you need a WhatsApp Business account",
          );
        }, {}),
        {
          level: r("AdsError").Level.WARN,
          path: r("AdsAPICampaignPaths").PROMOTED_OBJECT
            .PAGE_WHATSAPP_NUMBER_ID,
          cta: r("AdsErrorsCTAStrings").CONNECT_WHATSAPP_BUSINESS_ACCOUNT,
        },
      );
    }
    function S() {
      return new (r("AdsError"))(
        2923012,
        u._(function (e, t) {
          return e._(
            /*BTDS*/ "A WhatsApp Business account is required to run ads that open WhatsApp chats. If you use the same number, your chats, media and contacts will move automatically.",
          );
        }, {}),
        {
          level: r("AdsError").Level.WARN,
          path: r("AdsAPICampaignPaths").PROMOTED_OBJECT
            .PAGE_WHATSAPP_NUMBER_ID,
          cta: r("AdsErrorsCTAStrings").UPDATE_WHATSAPP_BUSINESS,
        },
      );
    }
    function R(e) {
      return o(
        "ClickToMessageAdoptionPerformanceLongTermHoldout",
      ).isAccountInEpdJurisdiction() && c()
        ? !1
        : o("LeadNurturingFeatureGating").passLeadGenPlusAllowList()
          ? !0
          : o("LeadNurturingFeatureGating").passLeadGenPlusQE(e);
    }
    function L(e, t, n, a, i) {
      return (
        (e === o("AdsAPIObjectives").OUTCOME_LEADS ||
          e === o("AdsAPIObjectives").LEAD_GENERATION) &&
        t === r("AdCampaignDestination").ON_AD &&
        n === r("AdsAPIOptimizationGoals").QUALITY_LEAD &&
        i === "meta_source" &&
        a === "whatsapp_conversations"
      );
    }
    ((l.passCRMEnforceQEWithLogExposure = e),
      (l.passCRMEnforceQEWithoutLogExposure = c),
      (l.getConnectCRMURL = d),
      (l.shouldDefaultCloAndMetaSource = m),
      (l.shouldDefaultMetaSource = p),
      (l.getDefaultedEventSource = _),
      (l.getDefaultedFollowUpEvent = f),
      (l.canSeeP2BCallCLO = g),
      (l.canSeeMessagingCLO = h),
      (l.getFormWithoutBusinessCallActionError = y),
      (l.getDataSourceNotSelectedError = C),
      (l.getMetaSourceNotSetUpError = b),
      (l.getLeadgenPlusWANotConnectedError = v),
      (l.getLeadgenPlusWAConsumerNumberError = S),
      (l.canSeeMetaSourceCLO = R),
      (l.isLeadgenPlusWhatsAppOptimization = L));
  },
  226,
);
