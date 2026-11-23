__d(
  "CTXChatBuilderFeatureGating",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsUEditorMessagingDestinationUtils",
    "CTXChatBuilderPartnerAppStoreUtils",
    "CTXChatBuilderPartnerAppUtils",
    "CTXUnstructuredLeadsAdsStoreUtils",
    "ClickToMessageCTDFeatureGating",
    "WebToXFeatureGating",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s, u, h, C) {
      if (
        (i === void 0 && (i = !1),
        l === void 0 && (l = !1),
        u === void 0 && (u = !1),
        h === void 0 && (h = !1),
        C === void 0 && (C = !1),
        y(C, e, !1) ||
          R(t, null, e, i, u) ||
          ((n === r("AdsAPIObjectives").OUTCOME_LEADS ||
            n === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT) &&
            h === !0 &&
            e === r("AdCampaignDestination").MESSENGER))
      )
        return !0;
      var b = o("CTXChatBuilderPartnerAppUtils").getAppList(e, t, a),
        v = b != null && b.length > 0;
      if (
        (v || l) &&
        o(
          "CTXChatBuilderPartnerAppUtils",
        ).isValidDestinationForPartnerAppConnector(e)
      )
        return !1;
      if (s === "messenger") return _(s, e, !1, n);
      if (s === "whatsapp") return f(s, e, !1, n);
      if (s === "instagram_message") return g(s, e, !1, n);
      var S = c(e),
        L = d(e, n, h),
        E = p(e),
        k = m(e, t, n);
      return S || L || E || k;
    }
    function s(t, n, r, o, a, i, l, s, c, d, m) {
      return (
        a === void 0 && (a = !1),
        i === void 0 && (i = !1),
        s === void 0 && (s = !1),
        c === void 0 && (c = !1),
        d === void 0 && (d = !0),
        m === void 0 && (m = !1),
        e(t, n, r, o, a, i, l, s, c, m) ? !0 : u(t, r, d)
      );
    }
    function u(e, t, n) {
      return (
        n === void 0 && (n = !0),
        o("AdsUEditorMessagingDestinationUtils").isClickToMessageAdDestination(
          e,
        ) ||
        (t !== r("AdsAPIObjectives").OUTCOME_SALES &&
          t !== r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
          t !== r("AdsAPIObjectives").OUTCOME_TRAFFIC &&
          t !== r("AdsAPIObjectives").LINK_CLICKS) ||
        (o("AdsUEditorMessagingDestinationUtils").isWebsiteAdDestination(e) &&
          n !== !0)
          ? !1
          : o("ClickToMessageCTDFeatureGating").isEligibleForCommentToDM(
              t,
              e,
              void 0,
            )
      );
    }
    function c(e) {
      return e === r("AdCampaignDestination").WHATSAPP;
    }
    function d(e, t, n) {
      return (
        n === void 0 && (n = !1),
        t === r("AdsAPIObjectives").OUTCOME_LEADS
          ? n === !0 && e === r("AdCampaignDestination").MESSENGER
          : e === r("AdCampaignDestination").MESSENGER
      );
    }
    function m(e, t, n) {
      return (
        e === r("AdCampaignDestination").ON_POST ||
        e === r("AdCampaignDestination").INSTAGRAM_DIRECT ||
        (e === r("AdCampaignDestination").LEAD_FROM_IG_DIRECT &&
          o(
            "CTXUnstructuredLeadsAdsStoreUtils",
          ).enableUnstructuredLeadsOptimization(t, n, e))
      );
    }
    function p(e) {
      return (
        !o("AdsUEditorMessagingDestinationUtils").isSingleDestination(e) &&
        o("AdsUEditorMessagingDestinationUtils").isMultiDestination(e)
      );
    }
    function _(e, t, n, a) {
      return e !== "messenger" || t === r("AdCampaignDestination").MESSENGER
        ? !1
        : a !== r("AdsAPIObjectives").OUTCOME_SALES
          ? o("WebToXFeatureGating").enableWTXNonSalesMessageTemplate(n)
          : !0;
    }
    function f(e, t, n, a, i) {
      return (
        n === void 0 && (n = !1),
        e !== "whatsapp" || t === r("AdCampaignDestination").WHATSAPP
          ? !1
          : a === r("AdsAPIObjectives").OUTCOME_SALES
            ? !0
            : o("WebToXFeatureGating").enableWTXNonSalesMessageTemplate(n)
      );
    }
    function g(e, t, n, o) {
      return (
        n === void 0 && (n = !1),
        !(
          e !== "instagram_message" ||
          t === r("AdCampaignDestination").INSTAGRAM_DIRECT ||
          o !== r("AdsAPIObjectives").OUTCOME_SALES
        )
      );
    }
    var h = "ptwa";
    function y(e, t, n) {
      return (
        n === void 0 && (n = !1),
        !e || t === r("AdCampaignDestination").WHATSAPP
          ? !1
          : o("WebToXFeatureGating").enablePTWAMessageTemplateQE(n)
      );
    }
    function C(e, t, n, r) {
      var a = g(e, t, !1, n);
      return a ? o("WebToXFeatureGating").enableWTDFollowUp(r) : !1;
    }
    function b(e, t, n, a) {
      if (n !== r("AdsAPIObjectives").OUTCOME_SALES) return !1;
      var i = _(e, t, !1, n);
      return i ? o("WebToXFeatureGating").enableWTMFollowUp(a) : !1;
    }
    function v(e, t) {
      return e === "instagram_message"
        ? t && o("WebToXFeatureGating").enableWTDChatBuilderDefaultExpanded(!0)
        : !1;
    }
    function S() {
      return r("justknobx")._("1345");
    }
    function R(e, t, n, r, a, i) {
      if (
        (r === void 0 && (r = !1),
        a === void 0 && (a = !1),
        i === void 0 && (i = !1),
        o("CTXChatBuilderPartnerAppUtils").isWhatsAppOnlyDestination(n))
      )
        return a && S();
      if (
        !o(
          "CTXChatBuilderPartnerAppUtils",
        ).isValidDestinationForPartnerAppConnector(n)
      )
        return !1;
      var l = o(
        "CTXChatBuilderPartnerAppStoreUtils",
      ).getPartnerAppWelcomeMessageData(e);
      if (i) {
        var s = o(
          "CTXChatBuilderPartnerAppUtils",
        ).checkHasCompatiblePartnerAppFlows(l, n);
        return s && S();
      }
      var u = o("CTXChatBuilderPartnerAppUtils").checkHasJSONTemplates(t),
        c = o("CTXChatBuilderPartnerAppUtils").checkHasPartnerAppFlows(l);
      return (c || u) && S();
    }
    ((l.enableMessageTemplateRedesign = s),
      (l.isC2DMOnlyChatBuilder = u),
      (l.enableMessageTemplateRedesignForCTD = m),
      (l.enableMessageTemplateForWTM = _),
      (l.enableMessageTemplateForWTWA = f),
      (l.enableMessageTemplateForWTD = g),
      (l.PTWA_CHAT_BUILDER_AD_TYPE = h),
      (l.enableMessageTemplateForPTWA = y),
      (l.enableWTDNudge = C),
      (l.enableWTMNudge = b),
      (l.shouldDefaultExpandWTXChatBuilder = v),
      (l.isPartnerAppSavedTemplateRedesignQEEnabled = S),
      (l.isPartnerAppSavedTemplateRedesignEnabled = R));
  },
  98,
);
