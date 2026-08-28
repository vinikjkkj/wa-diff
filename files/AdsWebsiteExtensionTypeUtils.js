__d(
  "AdsWebsiteExtensionTypeUtils",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedFieldUtils",
    "AdsLeadGenAdGroupUtils",
    "AdsMessageExtensionType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return u(e);
    }
    function s(e) {
      for (var t of Object.entries(r("AdsMessageExtensionType"))) {
        var n = t[0],
          o = t[1];
        if (o === e) return r("AdsMessageExtensionType")[n];
      }
      return null;
    }
    function u(e) {
      var t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.message_extensions.get(e),
        n = o("AdsAssetFeedFieldUtils").getAssetAtIndex(
          t,
          "type",
          o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(
            e,
            "message_extensions",
          ),
        ),
        a = s(n);
      return a;
    }
    function c(e) {
      return S(e, "whatsapp");
    }
    function d(e) {
      var t = r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.message_extensions.get(e);
      if (t && t.count() > 1) return !1;
      var n = o("AdsAssetFeedFieldUtils").getAssetAtIndex(
        t,
        "type",
        o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(
          e,
          "message_extensions",
        ),
      );
      return n === "whatsapp";
    }
    function m(e) {
      return S(e, "messenger");
    }
    function p(e) {
      var t = r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.message_extensions.get(e);
      if (t && t.count() > 1) return !1;
      var n = o("AdsAssetFeedFieldUtils").getAssetAtIndex(
        t,
        "type",
        o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(
          e,
          "message_extensions",
        ),
      );
      return n === "messenger";
    }
    function _(e) {
      return S(e, "instagram_message");
    }
    function f(e) {
      var t = r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.message_extensions.get(e);
      if (t && t.count() > 1) return !1;
      var n = o("AdsAssetFeedFieldUtils").getAssetAtIndex(
        t,
        "type",
        o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(
          e,
          "message_extensions",
        ),
      );
      return n === "instagram_message";
    }
    function g(e) {
      var t = u(e);
      return t == null
        ? !1
        : t === "whatsapp" ||
            t === "messenger" ||
            t === "instagram_message" ||
            t === "none";
    }
    function h(e, t, n) {
      var a = t === r("AdsAPIObjectives").CONVERSIONS,
        i = t === r("AdsAPIObjectives").LINK_CLICKS,
        l = e === r("AdsAPIObjectives").OUTCOME_AWARENESS,
        s =
          n.destination_type ===
            r("AdCampaignDestination").WEBSITE_AND_LEAD_FORM ||
          n.destination_type ===
            r("AdCampaignDestination").WEBSITE_AND_PHONE_CALL,
        u =
          e === r("AdsAPIObjectives").OUTCOME_LEADS &&
          o("AdsLeadGenAdGroupUtils").isLeadGenFormExtensionCampaign(n),
        c = l && t === r("AdsAPIObjectives").BRAND_AWARENESS;
      return c
        ? !0
        : !s &&
            ((a && e === r("AdsAPIObjectives").OUTCOME_SALES) ||
              i ||
              (a && e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT) ||
              l ||
              u);
    }
    function y(e, t, n) {
      var a = t === r("AdsAPIObjectives").CONVERSIONS,
        i = t === r("AdsAPIObjectives").LINK_CLICKS,
        l =
          e === r("AdsAPIObjectives").OUTCOME_LEADS &&
          o("AdsLeadGenAdGroupUtils").isLeadGenFormExtensionCampaign(n),
        s =
          (a && e === r("AdsAPIObjectives").OUTCOME_SALES) ||
          (a && e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT) ||
          i ||
          l,
        u = v(n);
      return s && !u;
    }
    function C(e) {
      switch (e) {
        case "whatsapp":
          return "WHATSAPP";
        case "messenger":
          return "MESSENGER";
        case "messenger_facebook_page":
          return "MESSENGER_FACEBOOK_PAGE";
        case "instagram_message":
          return "INSTAGRAM_MESSAGE";
        case "whatsapp_facebook_page":
          return "WHATSAPP_FACEBOOK_PAGE";
        case "whatsapp_promo":
          return "WHATSAPP_PROMO";
        case "none":
          return "NONE";
        default:
          return null;
      }
    }
    function b(e) {
      return e === "whatsapp";
    }
    function v(e) {
      var t;
      return (
        ((t = e.promoted_object) == null ? void 0 : t.mcme_conversion_id) !=
        null
      );
    }
    function S(e, t) {
      var n = r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.message_extensions.get(e);
      return n == null
        ? !1
        : n.some(function (e) {
            var n = e.get("type");
            return n === t;
          });
    }
    function R(e) {
      var t,
        n,
        r,
        o =
          ((t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.phone_data_ids) != null,
        a =
          ((n = e.creative) == null ||
          (n = n.object_story_spec) == null ||
          (n = n.link_data) == null
            ? void 0
            : n.phone_data_id) != null,
        i =
          ((r = e.creative) == null ||
          (r = r.asset_feed_spec) == null ||
          (r = r.call_ads_configuration) == null
            ? void 0
            : r.call_destination_type) === "WEBSITE_AND_CALL";
      return o || a || i;
    }
    ((l.getSelectedMessageExtensiontype = e),
      (l.isWhatsAppExtensionTypeSelected = c),
      (l.isOnlyWhatsAppExtensionTypeSelected = d),
      (l.isMessengerExtensionTypeSelected = m),
      (l.isOnlyMessengerExtensionTypeSelected = p),
      (l.isInstagramExtensionTypeSelected = _),
      (l.isOnlyInstagramExtensionTypeSelected = f),
      (l.isMessagingAppsExtensionTypeSelected = g),
      (l.isWebsiteExtensionsRadioListEnabled = h),
      (l.isWebsiteExtensionsRadioListEnabledForCatalog = y),
      (l.toGraphQLMessageExtensionType = C),
      (l.hasWhatsAppWebsiteExtension = b),
      (l.hasMessageExtensionType = S),
      (l.isCallExtensionTypeSelected = R));
  },
  98,
);
