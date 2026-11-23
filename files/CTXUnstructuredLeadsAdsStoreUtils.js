__d(
  "CTXUnstructuredLeadsAdsStoreUtils",
  [
    "fbt",
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsMessengerVisualEditorLandingScreenType",
    "AdsMessengerVisualEditorUtils",
    "AdsPageStore",
    "CTXChatBuilderFeatureGating",
    "gkx",
    "isStringNullOrEmpty",
    "qex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, o, a) {
      return (
        o === void 0 && (o = !1),
        a === void 0 && (a = !1),
        e == null || t == null || n == null
          ? !1
          : n === r("AdCampaignDestination").MESSENGER &&
              (t === r("AdsAPIObjectives").OUTCOME_LEADS ||
                t === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT)
            ? b(e)
            : n === r("AdCampaignDestination").INSTAGRAM_DIRECT ||
                n === r("AdCampaignDestination").LEAD_FROM_IG_DIRECT
              ? y(e, o)
              : !1
      );
    }
    function u(t, n, o, a, i) {
      var l =
        t === r("AdsMessengerVisualEditorLandingScreenType").CTM_LEAD_GEN_NEW ||
        t === r("AdsMessengerVisualEditorLandingScreenType").CTM_LEAD_GEN ||
        t ===
          r("AdsMessengerVisualEditorLandingScreenType")
            .LITE_WEIGHT_AUTOMATED_CHAT;
      return i !== r("AdsAPIOptimizationGoals").LEAD_GENERATION
        ? !1
        : l && e(a, n, o);
    }
    function c(t, n, o) {
      return (
        t === r("AdsAPIObjectives").OUTCOME_LEADS &&
        (n === r("AdCampaignDestination").MESSENGER ||
          n === r("AdCampaignDestination").LEAD_FROM_IG_DIRECT) &&
        e(o, t, n)
      );
    }
    function d(e) {
      if (r("isStringNullOrEmpty")(e)) return !1;
      var t = _(e),
        n =
          t === r("AdsMessengerVisualEditorLandingScreenType").WELCOME_MESSAGE,
        o = f(e) !== "VISUAL_EDITOR";
      return n || o;
    }
    function m(e) {
      if (r("isStringNullOrEmpty")(e)) return !1;
      var t = _(e),
        n =
          t ===
          r("AdsMessengerVisualEditorLandingScreenType")
            .LITE_WEIGHT_AUTOMATED_CHAT;
      return n;
    }
    function p(e) {
      if (r("isStringNullOrEmpty")(e)) return !1;
      var t = _(e),
        n = t === r("AdsMessengerVisualEditorLandingScreenType").CTD_LEAD_GEN,
        o = t === r("AdsMessengerVisualEditorLandingScreenType").CTM_LEAD_GEN,
        a =
          t === r("AdsMessengerVisualEditorLandingScreenType").CTM_LEAD_GEN_NEW;
      return n || o || a;
    }
    function _(e) {
      var t;
      if (r("isStringNullOrEmpty")(e))
        return r("AdsMessengerVisualEditorLandingScreenType").WELCOME_MESSAGE;
      var n = JSON.parse(e);
      return (t = n == null ? void 0 : n.landing_screen_type) != null
        ? t
        : r("AdsMessengerVisualEditorLandingScreenType").WELCOME_MESSAGE;
    }
    function f(e) {
      if (r("isStringNullOrEmpty")(e)) return "LEGACY_DATA";
      var t = JSON.parse(e);
      return o("AdsMessengerVisualEditorUtils").getWelcomeMessageDataType(t);
    }
    function g(e) {
      var t,
        n =
          e != null
            ? (t = r("AdsPageStore").getLoadObject(e)) == null
              ? void 0
              : t.getValue()
            : null;
      return (n == null ? void 0 : n.leadgen_tos_accepted) === !0;
    }
    var h = s._(/*BTDS*/ "");
    function y(e, t) {
      var n,
        o,
        a =
          e != null
            ? (n = r("AdsPageStore").getLoadObject(e)) == null
              ? void 0
              : n.getValue()
            : null,
        i =
          (o =
            a == null ? void 0 : a.is_ctd_leads_optimization_goal_eligible) !=
          null
            ? o
            : !1;
      return (t && C(a), i ? (t ? r("gkx")("15422") : r("gkx")("15423")) : !1);
    }
    function C(e) {
      var t =
        e == null
          ? void 0
          : e.ctd_leads_optimization_eligibility_expansion_universe;
      if (t != null)
        switch (t) {
          case "ctd_lo_relaxed_eligibility":
            r("qex")._("679");
            break;
          default:
            return;
        }
    }
    function b(e) {
      var t,
        n =
          e != null
            ? (t = r("AdsPageStore").getLoadObject(e)) == null
              ? void 0
              : t.getValue()
            : null;
      return (n == null ? void 0 : n.is_messaging_light_switch_enabled) !== !0;
    }
    function v(e) {
      var t,
        n,
        o =
          e != null
            ? (t = r("AdsPageStore").getLoadObject(e)) == null
              ? void 0
              : t.getValue()
            : null;
      return (n = o == null ? void 0 : o.automated_chat_default_template_id) !=
        null
        ? n
        : "";
    }
    var S = function (t) {
      var e;
      if (t == null || !r("gkx")("13501")) return !1;
      var n =
        (e = r("AdsPageStore").getLoadObject(t)) == null
          ? void 0
          : e.getValue();
      return (n == null ? void 0 : n.is_inbox_waba) === !0;
    };
    function R(t, n, o, a) {
      var i = n;
      (a === r("AdsAPIObjectives").OUTCOME_LEADS ||
        n === r("AdsAPIObjectives").OUTCOME_LEADS) &&
        (i = r("AdsAPIObjectives").OUTCOME_LEADS);
      var l = e(t, i, o);
      return l;
    }
    function L(t, n, a, i) {
      var l = n;
      (i === r("AdsAPIObjectives").OUTCOME_LEADS ||
        n === r("AdsAPIObjectives").OUTCOME_LEADS) &&
        (l = r("AdsAPIObjectives").OUTCOME_LEADS);
      var s = e(t, l, a),
        u = o(
          "CTXChatBuilderFeatureGating",
        ).enableMessageTemplateRedesignForCTD(a, t, l);
      return s && u;
    }
    ((l.enableUnstructuredLeadsOptimization = e),
      (l.shouldShowToSCard = u),
      (l.disableConvertedFormsTemplateForUnstructuredLeads = c),
      (l.isStartConversationsOrPartnerAppAd = d),
      (l.isAutomaticChatAppAd = m),
      (l.isLeadGenLandingScreenType = p),
      (l.hasPageAcceptedToS = g),
      (l.hideDownloadLinkText = h),
      (l.getAutomatedChatDefaultTemplateID = v),
      (l.isInboxWABAForLeadGen = S),
      (l.enableCTMUnstructuredLeadsOptimizationMessageTemplateDefaulting = R),
      (l.enableCTDUnstructuredLeadsOptimizationMessageTemplateDefaulting = L));
  },
  226,
);
