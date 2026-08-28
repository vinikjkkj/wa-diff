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
    "EngagementUnitificationGating",
    "WebToXFeatureGating",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, u, c, y) {
      if (
        (i === void 0 && (i = !1),
        l === void 0 && (l = !1),
        c === void 0 && (c = !1),
        y === void 0 && (y = !1),
        v(t, null, e, i, c) ||
          ((n === r("AdsAPIObjectives").OUTCOME_LEADS ||
            n === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT) &&
            y === !0 &&
            e === r("AdCampaignDestination").MESSENGER))
      )
        return !0;
      var C = o("CTXChatBuilderPartnerAppUtils").getAppList(e, t, a),
        b = C != null && C.length > 0;
      if (
        (b || l) &&
        o(
          "CTXChatBuilderPartnerAppUtils",
        ).isValidDestinationForPartnerAppConnector(e)
      )
        return !1;
      if (u === "messenger") return f(u, e, !1, n);
      if (u === "whatsapp") return g(u, e, !1, n);
      if (u === "instagram_message") return h(u, e, !1, n);
      var S = d(e),
        R = m(e, n, y),
        L = _(e),
        E = p(e, t, n);
      return (
        S ||
        R ||
        L ||
        E ||
        (o("EngagementUnitificationGating").getEULaunch1Experiment(!1) &&
          s(e, t, n))
      );
    }
    function s(e, t, n) {
      return (
        e === r("AdCampaignDestination").ON_POST ||
        e === r("AdCampaignDestination").INSTAGRAM_DIRECT ||
        (e === r("AdCampaignDestination").LEAD_FROM_IG_DIRECT &&
          o(
            "CTXUnstructuredLeadsAdsStoreUtils",
          ).enableUnstructuredLeadsOptimization(t, n, e))
      );
    }
    function u(t, n, r, o, a, i, l, s, u, d) {
      return (
        a === void 0 && (a = !1),
        i === void 0 && (i = !1),
        s === void 0 && (s = !1),
        u === void 0 && (u = !1),
        d === void 0 && (d = !0),
        e(t, n, r, o, a, i, l, s, u) ? !0 : c(t, r, d)
      );
    }
    function c(e, t, n) {
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
    function d(e) {
      return e === r("AdCampaignDestination").WHATSAPP;
    }
    function m(e, t, n) {
      return (
        n === void 0 && (n = !1),
        t === r("AdsAPIObjectives").OUTCOME_LEADS
          ? n === !0 && e === r("AdCampaignDestination").MESSENGER
          : e === r("AdCampaignDestination").MESSENGER
      );
    }
    function p(e, t, n) {
      if (
        e === r("AdCampaignDestination").ON_POST ||
        e === r("AdCampaignDestination").INSTAGRAM_DIRECT ||
        (e === r("AdCampaignDestination").LEAD_FROM_IG_DIRECT &&
          o(
            "CTXUnstructuredLeadsAdsStoreUtils",
          ).enableUnstructuredLeadsOptimization(t, n, e))
      ) {
        var a;
        return (a = r("qex")._("4118")) != null ? a : !1;
      }
      return !1;
    }
    function _(e) {
      return (
        !o("AdsUEditorMessagingDestinationUtils").isSingleDestination(e) &&
        o("AdsUEditorMessagingDestinationUtils").isMultiDestination(e)
      );
    }
    function f(e, t, n, a) {
      return e !== "messenger" || t === r("AdCampaignDestination").MESSENGER
        ? !1
        : a !== r("AdsAPIObjectives").OUTCOME_SALES
          ? o("WebToXFeatureGating").enableWTXNonSalesMessageTemplate(n)
          : !0;
    }
    function g(e, t, n, a, i) {
      return (
        n === void 0 && (n = !1),
        e !== "whatsapp" || t === r("AdCampaignDestination").WHATSAPP
          ? !1
          : a === r("AdsAPIObjectives").OUTCOME_SALES
            ? o("WebToXFeatureGating").enableWTWAMessageTemplateQE(n, i)
            : o("WebToXFeatureGating").enableWTXNonSalesMessageTemplate(n)
      );
    }
    function h(e, t, n, o) {
      return (
        n === void 0 && (n = !1),
        !(
          e !== "instagram_message" ||
          t === r("AdCampaignDestination").INSTAGRAM_DIRECT ||
          o !== r("AdsAPIObjectives").OUTCOME_SALES
        )
      );
    }
    function y(e, t, n, r) {
      var a = h(e, t, !1, n);
      return a ? o("WebToXFeatureGating").enableWTDFollowUp(r) : !1;
    }
    function C(e, t) {
      return e === "instagram_message"
        ? t && o("WebToXFeatureGating").enableWTDChatBuilderDefaultExpanded(!0)
        : !1;
    }
    function b() {
      return r("justknobx")._("1345");
    }
    function v(e, t, n, r, a, i, l) {
      if (
        (r === void 0 && (r = !1),
        a === void 0 && (a = !1),
        i === void 0 && (i = !1),
        l === void 0 && (l = !1),
        o("CTXChatBuilderPartnerAppUtils").isWhatsAppOnlyDestination(n))
      )
        return a && b();
      if (
        !o(
          "CTXChatBuilderPartnerAppUtils",
        ).isValidDestinationForPartnerAppConnector(n)
      )
        return !1;
      var s = o(
        "CTXChatBuilderPartnerAppStoreUtils",
      ).getPartnerAppWelcomeMessageData(e);
      if (l) {
        var u = o(
          "CTXChatBuilderPartnerAppUtils",
        ).checkHasCompatiblePartnerAppFlows(s, n);
        return u && b();
      }
      var c = i || o("CTXChatBuilderPartnerAppUtils").checkHasJSONTemplates(t),
        d = o("CTXChatBuilderPartnerAppUtils").checkHasPartnerAppFlows(s);
      return (d || c) && b();
    }
    ((l.enableMessageTemplateRedesign = u),
      (l.isC2DMOnlyChatBuilder = c),
      (l.enableMessageTemplateRedesignForCTD = p),
      (l.enableMessageTemplateForWTM = f),
      (l.enableMessageTemplateForWTWA = g),
      (l.enableMessageTemplateForWTD = h),
      (l.enableWTDNudge = y),
      (l.shouldDefaultExpandWTXChatBuilder = C),
      (l.isPartnerAppSavedTemplateRedesignQEEnabled = b),
      (l.isPartnerAppSavedTemplateRedesignEnabled = v));
  },
  98,
);
