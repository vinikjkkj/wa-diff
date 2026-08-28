__d(
  "AdsAPICampaignRecordUtils",
  [
    "AEMv2AdCampaignAttribution",
    "AdCampaignDestination",
    "AdsAPICampaignRecordUtilsShared",
    "AdsAPIObjectives",
    "AdsAccountStore",
    "AdsCampaignRecordAccessors",
    "AdsPCAUnificationUtils",
    "AdsPromotedObjectTypes",
    "adsConvertAdObjectRecordToPlainJS",
    "isFalsey",
    "isTruthy",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.destination_type;
    }
    function s(e) {
      var t;
      return (t = e.promoted_object) == null ? void 0 : t.application_id;
    }
    function u(e) {
      var t;
      return (t = e.promoted_object) == null ? void 0 : t.object_store_url;
    }
    function c(e) {
      return e.optimization_goal;
    }
    function d(e) {
      var t;
      return (t = e.promoted_object) == null ? void 0 : t.pixel_id;
    }
    function m(e) {
      var t;
      return (t = e.promoted_object) == null ? void 0 : t.product_set_id;
    }
    function p(e) {
      var t;
      return (t = e.promoted_object) == null ? void 0 : t.offer_id;
    }
    function _(e) {
      return e.start_time;
    }
    function f(e) {
      return e.end_time;
    }
    function g(e) {
      return e.targeting.age_min;
    }
    function h(e) {
      return e.targeting.age_max;
    }
    function y(e) {
      var t = e.targeting.age_range;
      return t == null ? null : Array.isArray(t) ? t : t.toArray();
    }
    function C(e) {
      return e.bid_strategy;
    }
    function b(e) {
      return e.billing_event;
    }
    function v(e) {
      return e.pacing_type;
    }
    function S(e) {
      return e.bid_amount;
    }
    function R(e) {
      return e.source_adset_id;
    }
    function L(e) {
      return (
        e.campaign_attribution === r("AEMv2AdCampaignAttribution").SKADNETWORK
      );
    }
    function E(e) {
      return e.campaign_attribution === r("AEMv2AdCampaignAttribution").AEM;
    }
    function k(e) {
      return (
        e.campaign_attribution ===
          r("AEMv2AdCampaignAttribution").SKADNETWORK ||
        e.campaign_attribution === r("AEMv2AdCampaignAttribution").AEM
      );
    }
    function I() {
      try {
        return r("AdsAccountStore").getSelectedAccount().getValue();
      } catch (e) {
        return null;
      }
    }
    function T(e, t, n) {
      var a = e == null ? void 0 : e.promoted_object,
        i = P(t == null ? void 0 : t.objective, e, n);
      if (
        (t == null ? void 0 : t.collaborative_ads_partner_info) != null &&
        (a == null ? void 0 : a.product_set_id) != null &&
        i !== r("AdsPromotedObjectTypes").MESSENGER &&
        i !== r("AdsPromotedObjectTypes").WHATSAPP
      ) {
        var l =
          (a == null ? void 0 : a.variation) ===
            "PRODUCT_SET_AND_OMNICHANNEL" ||
          (a == null ? void 0 : a.variation) === "PRODUCT_SET_AND_APP" ||
          (a == null ? void 0 : a.variation) === "PRODUCT_SET_AND_WEBSITE";
        if ((a == null ? void 0 : a.pixel_id) != null && !l)
          return r("AdsPromotedObjectTypes").PIXEL;
        if (
          t.objective === r("AdsAPIObjectives").OUTCOME_SALES &&
          o(
            "AdsPCAUnificationUtils",
          ).AdsIsCollaborativeAdsGKEnabledForPCAUnification() &&
          r("isTruthy")(t == null ? void 0 : t.is_pca_unified)
        ) {
          var s = a == null ? void 0 : a.omnichannel_object,
            u = (s == null ? void 0 : s.offline) != null,
            c = (s == null ? void 0 : s.pixel) != null;
          return u && c
            ? r("AdsPromotedObjectTypes").WEBSITE_AND_IN_STORE
            : s != null
              ? r("AdsPromotedObjectTypes").WEB_AND_APP
              : (a == null ? void 0 : a.application_id) != null
                ? r("AdsPromotedObjectTypes").MOBILE_APP
                : r("AdsPromotedObjectTypes").PIXEL;
        }
        if (
          t.objective == r("AdsAPIObjectives").LINK_CLICKS &&
          i != r("AdsPromotedObjectTypes").MOBILE_APP
        )
          return r("AdsPromotedObjectTypes").WEBSITE;
      }
      return i;
    }
    function D(e, t) {
      return (
        (e === r("AdsAPIObjectives").OUTCOME_SALES ||
          e === r("AdsAPIObjectives").CONVERSIONS) &&
        t === r("AdsPromotedObjectTypes").WEB_AND_APP
      );
    }
    function x(e, t) {
      return (
        e === r("AdsAPIObjectives").LINK_CLICKS &&
        t === r("AdsPromotedObjectTypes").MOBILE_APP
      );
    }
    function $(e) {
      var t;
      return e == null || (t = e.promoted_object) == null
        ? void 0
        : t.variation;
    }
    function P(e, t, n, a) {
      return (
        n === void 0 && (n = null),
        o("AdsAPICampaignRecordUtilsShared").getPromotedObjectType(
          I(),
          e,
          t == null ? null : r("adsConvertAdObjectRecordToPlainJS")(t),
          n,
          a,
        )
      );
    }
    var N = "SINGLE_NEW_CAMPAIGN_ID";
    function M(e) {
      var t = e.id;
      return r("isFalsey")(t) || t.startsWith(N);
    }
    function w(e) {
      var t = e.daily_budget,
        n = e.lifetime_budget,
        r = n != null ? Number(n) : null;
      return t != null && t !== 0
        ? "daily"
        : r != null && r !== 0
          ? "lifetime"
          : null;
    }
    function A(e) {
      var t,
        n,
        r = w(e);
      switch (r) {
        case "daily":
          return (t = e.daily_budget) != null ? t : 0;
        case "lifetime":
          return Number((n = e.lifetime_budget) != null ? n : 0);
        default:
          return 0;
      }
    }
    function F(e) {
      return w(e) != null;
    }
    function O(e) {
      var t;
      return (t = e.targeting) == null ? void 0 : t.tafe_ca_mitigation_strategy;
    }
    function B(e) {
      var t;
      return (
        e.saved_audience_id != null ||
        ((t = e.saved_audience) == null ? void 0 : t.id) != null
      );
    }
    function W() {
      return r("justknobx")._("3783");
    }
    function q(e) {
      var t;
      if (!W()) return e;
      var n = (t = e.saved_audience) == null ? void 0 : t.id;
      return r("isTruthy")(n)
        ? r("AdsCampaignRecordAccessors").saved_audience_id.set(n, e)
        : e;
    }
    function U(e) {
      var t;
      return (
        (e == null || (t = e.live_video_ad_campaign_config) == null
          ? void 0
          : t.live_video_ad_type) === "SCHEDULED_LIVE"
      );
    }
    function V(e) {
      return (
        (e == null ? void 0 : e.destination_type) ===
        r("AdCampaignDestination").INSTAGRAM_LIVE
      );
    }
    ((l.getDestinationType = e),
      (l.getApplicationID = s),
      (l.getObjectStoreURL = u),
      (l.getOptimizationGoal = c),
      (l.getPixelID = d),
      (l.getProductSetID = m),
      (l.getOfferID = p),
      (l.getStartDate = _),
      (l.getEndDate = f),
      (l.getMinAge = g),
      (l.getMaxAge = h),
      (l.getAgeRange = y),
      (l.getBidStrategy = C),
      (l.getBillingEvent = b),
      (l.getDeliveryType = v),
      (l.getBidCap = S),
      (l.getSourceID = R),
      (l.isSKAdNetworkCampaignAttribution = L),
      (l.isAEMCampaignAttribution = E),
      (l.isSKAdNetworkOrAEMCampaignAttribution = k),
      (l.getDerivedPromotedObjectType = T),
      (l.isWebAndAppPromotedObjectType = D),
      (l.isAppLinkClickAd = x),
      (l.getDerivedPromotedObjectTypeWithVariation = $),
      (l.getPromotedObjectType = P),
      (l.isNewCampaign = M),
      (l.getBudgetMode = w),
      (l.getBudgetValue = A),
      (l.hasBudget = F),
      (l.getTafeCaMitigationStrategy = O),
      (l.hasSavedAudience = B),
      (l.isSavedAudiencePublishPreservationEnabled = W),
      (l.reassertSavedAudienceIDForPublish = q),
      (l.isScheduledLiveVideoAd = U),
      (l.isInstagramLiveVideoAd = V));
  },
  98,
);
