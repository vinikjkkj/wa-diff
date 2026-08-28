__d(
  "AdsObjectTypeUtils",
  [
    "AdsAPIObjectives",
    "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
    "AdsCreativeSpecTypes",
    "AdsLocalUtils",
    "AdsObjectTypes",
    "AdsUEditorAdgroupStaticAdsUsingAFSUtils",
    "ApiAdObjectTypes",
    "expectationViolation",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      adAccount: "id",
      adgroup: "id",
      campaign: "id",
      campaignGroup: "id",
      privacyInfoCenter: "null",
      opportunities: "null",
      product: "null",
      topline: "id",
      uniqueAdCreative: "visual_hash",
    };
    function s(e) {
      switch (e) {
        case "campaign":
          return r("AdsObjectTypes").CAMPAIGN_GROUP;
        case "ad_set":
          return r("AdsObjectTypes").CAMPAIGN;
        case "ad":
          return r("AdsObjectTypes").ADGROUP;
        case "ad_account":
          return r("AdsObjectTypes").ACCOUNT;
        case "unique_adcreative":
          return r("AdsObjectTypes").CREATIVE;
        default:
          return null;
      }
    }
    function u(e) {
      var t = y(e);
      switch (t) {
        case r("ApiAdObjectTypes").PHOTO:
          return r("AdsCreativeSpecTypes").PHOTO_DATA;
        case r("ApiAdObjectTypes").SHARE:
          return C(e)
            ? r("AdsCreativeSpecTypes").TEMPLATE_DATA
            : r("AdsCreativeSpecTypes").LINK_DATA;
        case r("ApiAdObjectTypes").STATUS:
          return r("AdsCreativeSpecTypes").TEXT_DATA;
        case r("ApiAdObjectTypes").VIDEO:
          return r("AdsCreativeSpecTypes").VIDEO_DATA;
        case r("ApiAdObjectTypes").OFFER:
          return r("AdsCreativeSpecTypes").OFFER_DATA;
        default:
          return r("AdsCreativeSpecTypes").STANDARD;
      }
    }
    function c(e) {
      var t,
        n,
        a,
        i,
        l,
        s,
        u,
        c =
          (t = e.creative) == null || (t = t.object_story_spec) == null
            ? void 0
            : t.photo_data,
        d =
          (n = e.creative) == null || (n = n.object_story_spec) == null
            ? void 0
            : n.video_data,
        m =
          (a = e.creative) == null || (a = a.object_story_spec) == null
            ? void 0
            : a.offer_data,
        p =
          (i = e.creative) == null || (i = i.object_story_spec) == null
            ? void 0
            : i.text_data,
        _ =
          (l = e.creative) == null || (l = l.object_story_spec) == null
            ? void 0
            : l.link_data,
        f =
          (s = e.creative) == null || (s = s.object_story_spec) == null
            ? void 0
            : s.template_data,
        g = (u = e.creative) == null ? void 0 : u.asset_feed_spec,
        h =
          o(
            "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
          ).isUnifiedCreativePhotoDataSupported(e) &&
          !!g &&
          !g.optimization_type;
      return g != null &&
        !o(
          "AdsUEditorAdgroupStaticAdsUsingAFSUtils",
        ).isAdgroupUsingOnlyAssetFeedForStaticAds(e) &&
        !h
        ? r("ApiAdObjectTypes").SHARE
        : c || h
          ? r("ApiAdObjectTypes").PHOTO
          : d
            ? r("ApiAdObjectTypes").VIDEO
            : m
              ? r("ApiAdObjectTypes").OFFER
              : p
                ? r("ApiAdObjectTypes").STATUS
                : _ || f
                  ? r("ApiAdObjectTypes").SHARE
                  : null;
    }
    function d(e) {
      switch (e) {
        case r("AdsAPIObjectives").BRAND_AWARENESS:
        case r("AdsAPIObjectives").POST_ENGAGEMENT:
        case r("AdsAPIObjectives").OUTCOME_AWARENESS:
          return r("ApiAdObjectTypes").PHOTO;
        case r("AdsAPIObjectives").CANVAS_APP_ENGAGEMENT:
        case r("AdsAPIObjectives").CANVAS_APP_INSTALLS:
        case r("AdsAPIObjectives").EVENT_RESPONSES:
        case r("AdsAPIObjectives").LEAD_GENERATION:
        case r("AdsAPIObjectives").MOBILE_APP_ENGAGEMENT:
        case r("AdsAPIObjectives").MOBILE_APP_INSTALLS:
        case r("AdsAPIObjectives").PRODUCT_CATALOG_SALES:
        case r("AdsAPIObjectives").REACH:
        case r("AdsAPIObjectives").LINK_CLICKS:
        case r("AdsAPIObjectives").WEBSITE_CONVERSIONS:
        case r("AdsAPIObjectives").CONVERSIONS:
        case r("AdsAPIObjectives").APP_INSTALLS:
        case r("AdsAPIObjectives").MESSAGES:
        case r("AdsAPIObjectives").OUTCOME_LEADS:
        case r("AdsAPIObjectives").OUTCOME_SALES:
        case o("AdsLocalUtils").isLocalObjectiveSwitch(e):
        case r("AdsAPIObjectives").OFFER_CLAIMS:
        case r("AdsAPIObjectives").PAGE_LIKES:
          return r("ApiAdObjectTypes").SHARE;
        case r("AdsAPIObjectives").VIDEO_VIEWS:
        case r("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
          return r("ApiAdObjectTypes").VIDEO;
      }
      return null;
    }
    function m(e) {
      return (
        e === r("ApiAdObjectTypes").OFFER ||
        e === r("ApiAdObjectTypes").PHOTO ||
        e === r("ApiAdObjectTypes").SHARE ||
        e === r("ApiAdObjectTypes").STATUS ||
        e === r("ApiAdObjectTypes").VIDEO
      );
    }
    function p(e) {
      return !!(m(e) || e === r("ApiAdObjectTypes").PAGE);
    }
    function _(e) {
      switch (e) {
        case "ad_account":
          return "adAccount";
        case "ad":
          return "adgroup";
        case "ad_set":
          return "campaign";
        case "campaign":
          return "campaignGroup";
        case "privacy_info_center":
          return "privacyInfoCenter";
        case "opportunities":
          return "opportunities";
        case "topline":
          return "topline";
        case "unique_adcreative":
          return "uniqueAdCreative";
        default:
          return (
            e && r("expectationViolation")("Unknown object level: %s", e),
            null
          );
      }
    }
    function f(e) {
      switch (e) {
        case "ad_account":
        case "unique_adcreative":
          return r("AdsObjectTypes").ACCOUNT;
        case "ad_set":
          return r("AdsObjectTypes").CAMPAIGN;
        case "campaign":
          return r("AdsObjectTypes").CAMPAIGN_GROUP;
        case "ad":
          return r("AdsObjectTypes").ADGROUP;
        case "privacy_info_center":
          return r("AdsObjectTypes").PRIVACY_INFO_CENTER;
        case "opportunities":
          return r("AdsObjectTypes").OPPORTUNITIES;
        default:
          return (
            e && r("expectationViolation")("Unknown object level: %s", e),
            null
          );
      }
    }
    function g(e) {
      switch (e) {
        case "opportunities":
          return "opportunities";
        case "adAccount":
          return "ad_account";
        case "adgroup":
          return "ad";
        case "campaign":
          return "ad_set";
        case "campaignGroup":
          return "campaign";
        case "privacyInfoCenter":
          return "privacy_info_center";
        case "topline":
          return "topline";
        case "uniqueAdCreative":
          return "unique_adcreative";
        default:
          return (
            e && r("expectationViolation")("Unknown ad level: %s", e),
            null
          );
      }
    }
    function h(e) {
      switch (e) {
        case r("AdsObjectTypes").CAMPAIGN_GROUP:
          return "campaign";
        case r("AdsObjectTypes").CAMPAIGN:
          return "ad_set";
        case r("AdsObjectTypes").ADGROUP:
          return "ad";
        case r("AdsObjectTypes").ACCOUNT:
          return "ad_account";
        case r("AdsObjectTypes").CREATIVE:
          return "unique_adcreative";
        case r("AdsObjectTypes").OPPORTUNITIES:
          return "opportunities";
        case r("AdsObjectTypes").PRIVACY_INFO_CENTER:
          return "privacy_info_center";
        default:
          return null;
      }
    }
    function y(e) {
      var t;
      return e == null || (t = e.creative) == null ? void 0 : t.object_type;
    }
    function C(e) {
      var t;
      return !!(
        e != null &&
        (t = e.creative) != null &&
        (t = t.object_story_spec) != null &&
        t.template_data
      );
    }
    function b(e) {
      var t;
      return !!(e != null && (t = e.creative) != null && t.product_set_id);
    }
    function v(e) {
      switch (e) {
        case r("AdsObjectTypes").CAMPAIGN_GROUP:
          return "name";
        case r("AdsObjectTypes").CAMPAIGN:
          return "name";
        case r("AdsObjectTypes").ADGROUP:
          return "name";
        default:
          return "";
      }
    }
    function S(t) {
      return e[t];
    }
    function R(e) {
      return (e == null ? void 0 : e.is_message_campaign) === !0;
    }
    ((l.fromObjectLevel = s),
      (l.getCreativeSpecType = u),
      (l.getObjectTypeFromCreativeSpecType = c),
      (l.getDefaultObjectType = d),
      (l.isPagePostObjectType = m),
      (l.objectTypeRequiresActor = p),
      (l.getAdLevelFromObjectLevel = _),
      (l.getTabObjectTypeFromObjectLevel = f),
      (l.getObjectLevelFromAdLevel = g),
      (l.toObjectLevel = h),
      (l.isTemplateCreative = C),
      (l.isDynamicProductAd = b),
      (l.getNameFieldFromObjectType = v),
      (l.getIdentifierFieldForAdLevel = S),
      (l.isMessageCampaign = R));
  },
  98,
);
