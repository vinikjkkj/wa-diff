__d(
  "WebToWhatsappUtils",
  [
    "$InternalEnum",
    "AdCampaignDestination",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupSemanticFields",
    "AdsArLinkUtils",
    "AdsCanvasAdUtils",
    "AdsLeadGenAdGroupUtils",
    "AdsLinkTypeUtils",
    "AdsODAXUtils",
    "AdsPromotedObjectTypes",
    "AdsWebsiteExtensionTypeUtils",
    "ApiAdObjectTypes",
    "CTXChatBuilderFeatureGating",
    "ClickToMessageAdCaptionEligibilityUtils",
    "WebToXFeatureGating",
    "adsMessengerValidationIsL1MessengerAd",
    "gkx",
    "isStringNullOrEmpty",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
      "NoConnection",
      "AccountNotice",
      "MultiNumberConnection",
    ]);
    function s(e) {
      return (
        e === void 0 && (e = !0),
        e ? r("qex")._("4096") === !0 : r("qex")._("4097") === !0
      );
    }
    function u(e, t, n, r) {
      return (
        r === void 0 && (r = !0),
        o("WebToXFeatureGating").isWebToXEligibleForCatalogAds(e, t, n) && s(r)
      );
    }
    function c(e, t) {
      var n = e.adgroup,
        a = e.campaign,
        i = e.campaignGroup,
        l = o("AdsLeadGenAdGroupUtils").isLeadGenFormEnabled(a, n, t),
        s = !r("isStringNullOrEmpty")(
          r("AdsAdgroupSemanticFields").pageID.get(t, n),
        ),
        u = o("AdsCanvasAdUtils").isCanvasDestinationEnabled(n),
        c =
          o("AdsAPIAdgroupRecordUtils").getObjectType(n) ===
          r("ApiAdObjectTypes").DOMAIN,
        d =
          s &&
          o("AdsLeadGenAdGroupUtils").isLeadGenFormExtensionEnabled(
            i.objective,
            a,
          ),
        m = o("AdsLinkTypeUtils").isEventLinkTypeSelected(n, t),
        p = r("adsMessengerValidationIsL1MessengerAd")(e),
        _ =
          o("AdsLinkTypeUtils").isPhoneCallLinkTypeSelected(n, t) &&
          o("AdsAPICampaignGroupRecordUtils").getObjective(i) ===
            r("AdsAPIObjectives").LINK_CLICKS,
        f = o("AdsArLinkUtils").isArAd(n, t),
        g = o("AdsODAXUtils").maybeTranslateObjective(
          i.objective,
          o("AdsAPICampaignRecordUtils").getPromotedObjectType(i.objective, a),
          a.optimization_goal,
        ),
        h = o(
          "AdsWebsiteExtensionTypeUtils",
        ).isWebsiteExtensionsRadioListEnabled(i.objective, g, a);
      return (!l || d) && !u && (c || (!m && !p && !_)) && !f && h;
    }
    var d = function (t, n, o) {
      var e = o.getValue(),
        a = !1,
        i = n == null ? void 0 : n.whatsAppNumber,
        l = !r("isStringNullOrEmpty")(i) && n != null && t != null,
        s = e != null && e.length > 0;
      return {
        isBusinessNumberRequired: a,
        pageHasValidWAAccount: l,
        validPageWhatsAppNumber: i,
        whatsAppAccountConnectionType: p(n, s),
      };
    };
    function m(e, t) {
      return (
        ((e == null ? void 0 : e.whatsAppNumbersInfo) != null &&
          e.whatsAppNumbersInfo.length > 1) ||
        (r("justknobx")._("1458") && t)
      );
    }
    function p(t, n) {
      return m(t, n)
        ? e.MultiNumberConnection
        : (t == null ? void 0 : t.hasWhatsAppNumber) === !0
          ? e.AccountNotice
          : e.NoConnection;
    }
    function _(e, t, n) {
      return (
        t === r("AdsAPIObjectives").OUTCOME_SALES &&
        n === r("AdsPromotedObjectTypes").PIXEL &&
        (e == null ? void 0 : e.ctx_flexible_format_targeting) === !0 &&
        r("gkx")("11241")
      );
    }
    function f(e, t) {
      if (e === r("AdsAPIObjectives").OUTCOME_SALES && r("gkx")("1554")) {
        var n = r("gkx")("7572");
        return (o("WebToXFeatureGating").salesPrefillExposureLogging(n, t), n);
      }
      return !1;
    }
    function g(e) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
        r("qex")._("1265") === !0
      );
    }
    function h(e, t, n) {
      if ((t === void 0 && (t = !0), t === !1))
        return (
          e === r("AdsAPIObjectives").LINK_CLICKS &&
          r("gkx")("20132") &&
          r("gkx")("12041")
        );
      if (e === r("AdsAPIObjectives").LINK_CLICKS && r("gkx")("20132")) {
        var a = r("gkx")("12042");
        return (o("WebToXFeatureGating").trafficPrefillExposureLogging(n), a);
      }
      return !1;
    }
    function y(e, t) {
      if ((t === void 0 && (t = !0), t === !1)) {
        var n;
        return (
          e === r("AdsAPIObjectives").LINK_CLICKS &&
          ((n = r("qex")._("1858")) != null ? n : !1)
        );
      } else {
        var o;
        return (
          e === r("AdsAPIObjectives").LINK_CLICKS &&
          ((o = r("qex")._("1728")) != null ? o : !1)
        );
      }
    }
    function C(e, t, n) {
      return (t === void 0 && (t = !1), y(e, t) || h(e, t, n));
    }
    function b(e, t) {
      (y(e, !0), h(e, !0, t));
    }
    function v(e) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_LEADS && r("qex")._("1395") === !0
      );
    }
    function S(e) {
      if (e === r("AdsAPIObjectives").OUTCOME_LEADS) {
        var t;
        return (t = r("qex")._("5201")) != null ? t : null;
      }
      if (e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT) {
        var n;
        return (n = r("qex")._("5202")) != null ? n : null;
      }
      return null;
    }
    function R(e, t) {
      return o("CTXChatBuilderFeatureGating").enableMessageTemplateForWTWA(
        o("AdsWebsiteExtensionTypeUtils").getSelectedMessageExtensiontype(e),
        null,
        !1,
        t,
      );
    }
    function L(e, t, n, a) {
      return (
        t === "whatsapp" &&
        e !== r("AdCampaignDestination").WHATSAPP &&
        a === r("AdsAPIObjectives").OUTCOME_SALES &&
        o(
          "ClickToMessageAdCaptionEligibilityUtils",
        ).isAdCaptionEligibleForAIGen(n)
      );
    }
    function E(e, t, n, o) {
      return L(e, t, n, o) ? r("qex")._("4040") === !0 : !1;
    }
    ((l.SXWAAccountConnectionType = e),
      (l.shouldEnableWebToWhatsAppCatalogAds = s),
      (l.isWebToWhatsAppEligibleForCatalogAds = u),
      (l.isWebToXEligibleForSingleCreative = c),
      (l.getPageInfoForWhatsAppSecondayExperienceAds = d),
      (l.isWebToWAMultinumberEligible = m),
      (l.isSalesFlexibleFormatDefaultingEnabled = _),
      (l.isInAdsManagerSalesObjectiveWeblinkPrefillQE = f),
      (l.isInAdsManagerEngagementObjectiveWeblinkPrefillV2QE = g),
      (l.isInAdsManagerLinkClicksObjectiveWeblinkPrefillQEWizL2Defaulting = y),
      (l.isInAdsManagerLinkClicksObjectiveWeblinkPrefillQE = C),
      (l.logExposureForAdsManagerLinkClicksObjectiveWeblinkPrefillQE = b),
      (l.isInAdsManagerLeadsObjectiveWeblinkPrefillV2QE = v),
      (l.getAdsManagerWeblinkPrefillV2UrlSourceQE = S),
      (l.isMessagingTemplateEnabledForWTWA = R),
      (l.isInWTWAAIGenPrefillPopulation = L),
      (l.shouldEnableWTWAAIGenPrefill = E));
  },
  98,
);
