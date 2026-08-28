__d(
  "AdsCanvasAdUtils",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAccountUtils",
    "AdsApplicationUtils",
    "AdsAssetFeedUtils",
    "AdsCanvasConstants",
    "AdsCanvasSV.experimental",
    "AdsMobileAppObjectivesUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "adsPlacementAPISpecReaderIsActiveFacebookPosition",
    "adsPlacementAPISpecReaderIsActivePublisherPlatform",
    "immutable",
    "isAdsCanvasLink",
    "mixedToString",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n =
          e == null ||
          (t = e.creative) == null ||
          (t = t.asset_feed_spec) == null
            ? void 0
            : t.link_urls,
        o;
      if (n && n instanceof Array) {
        var a;
        o = (a = n[0]) == null ? void 0 : a.website_url;
      }
      if (n && n instanceof r("immutable").List) {
        var i;
        o = r("mixedToString")(
          (i = n.first()) == null ? void 0 : i.get("website_url"),
        );
      }
      return o;
    }
    function s(e) {
      if (e == null || !e.match) return null;
      var t = e.match(RegExp(o("AdsCanvasConstants").CANVAS_PREFIX + "(\\d+)"));
      return t ? t[1] : null;
    }
    function u(e) {
      return e == null ? !1 : e === o("AdsCanvasConstants").EMPTY_CANVAS_LINK;
    }
    function c(e) {
      var t,
        n = r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
          e,
          "facebook",
        ),
        a = (t = r("adsPlacementAPISpecReaderIsActiveFacebookPosition"))(
          e,
          "feed",
        ),
        i = t(e, "story"),
        l = t(e, "facebook_reels"),
        s = t(e, "instant_article"),
        u = o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
          e,
          r("AdsAPIDevicePlatform").MOBILE,
        );
      return u && n && (a || s || i || l);
    }
    function d(e) {
      var t = r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
        e,
        "instagram",
      );
      return t;
    }
    function m(e, t) {
      return c(e) || d(e);
    }
    function p(e) {
      return _(e)
        ? r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(e, "facebook")
          ? (o(
              "AdsPlacementAPISpecReaderUtils",
            ).isOnlyActivePublisherPlatformGroup(
              e,
              "facebook",
              "facebook/feed",
            ) ||
              o(
                "AdsPlacementAPISpecReaderUtils",
              ).isOnlyActivePublisherPlatformGroup(
                e,
                "facebook",
                "facebook/instant_article",
              )) &&
            o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
              e,
              r("AdsAPIDevicePlatform").MOBILE,
            )
          : !0
        : !1;
    }
    function _(e) {
      if (!e.publisher_platforms || e.publisher_platforms.length === 0)
        return !1;
      var t = e.publisher_platforms.filter(function (e) {
        return e !== "facebook" && e !== "instagram";
      });
      return !!t && t.length === 0;
    }
    function f(e, t) {
      return (
        (e === r("AdsAPIObjectives").APP_INSTALLS &&
          t === r("AdsPromotedObjectTypes").MOBILE_APP) ||
        e === r("AdsAPIObjectives").BRAND_AWARENESS ||
        (e === r("AdsAPIObjectives").CONVERSIONS &&
          (t === r("AdsPromotedObjectTypes").WEBSITE ||
            t === r("AdsPromotedObjectTypes").MOBILE_APP ||
            t === r("AdsPromotedObjectTypes").PIXEL ||
            t === r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL)) ||
        (e === r("AdsAPIObjectives").LINK_CLICKS &&
          (t === r("AdsPromotedObjectTypes").WEBSITE ||
            t === r("AdsPromotedObjectTypes").MOBILE_APP)) ||
        e === r("AdsAPIObjectives").POST_ENGAGEMENT ||
        e === r("AdsAPIObjectives").REACH ||
        e === r("AdsAPIObjectives").VIDEO_VIEWS ||
        e === r("AdsAPIObjectives").STORE_VISITS
      );
    }
    function g(e, t) {
      if (!t || !e) return !1;
      var n = o("AdsAPICampaignRecordUtils").getPromotedObjectType(e, t);
      return o("AdsMobileAppObjectivesUtils").isMobileAppObjective(e, n);
    }
    function h(e) {
      return e.some(function (e) {
        return g(
          o("AdsUEditorCampaignGroupAdObjectsUtils").getObjective(e),
          e.campaign,
        );
      });
    }
    function y(e) {
      return o("AdsCanvasConstants").CANVAS_PREFIX.concat(e);
    }
    function C(e) {
      var t = S(e);
      return r("isAdsCanvasLink")(t);
    }
    function b(e) {
      var t, n, r, o, a;
      return (t =
        (n =
          e == null ||
          (r = e.creative) == null ||
          (r = r.object_story_spec) == null ||
          (r = r.link_data) == null
            ? void 0
            : r.link) != null
          ? n
          : e == null ||
              (o = e.creative) == null ||
              (o = o.object_story_spec) == null ||
              (o = o.template_data) == null
            ? void 0
            : o.link) != null
        ? t
        : e == null ||
            (a = e.creative) == null ||
            (a = a.object_story_spec) == null ||
            (a = a.video_data) == null ||
            (a = a.call_to_action) == null ||
            (a = a.value) == null
          ? void 0
          : a.link;
    }
    function v(e) {
      return o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e) &&
        !o("AdsAssetFeedUtils").hasCarouselFormat(e)
        ? o("AdsAssetFeedUtils").isPACIXAdFromRecord(e)
        : r("isAdsCanvasLink")(b(e));
    }
    function S(t) {
      var n,
        r,
        o,
        a,
        i,
        l =
          (n =
            (r =
              (o = t.creative) == null ||
              (o = o.object_story_spec) == null ||
              (o = o.link_data) == null
                ? void 0
                : o.link) != null
              ? r
              : (a = t.creative) == null ||
                  (a = a.object_story_spec) == null ||
                  (a = a.template_data) == null
                ? void 0
                : a.link) != null
            ? n
            : (i = t.creative) == null ||
                (i = i.object_story_spec) == null ||
                (i = i.video_data) == null ||
                (i = i.call_to_action) == null ||
                (i = i.value) == null
              ? void 0
              : i.link;
      return l != null ? l : e(t);
    }
    function R(e) {
      var t = L(e);
      return t != null && r("isAdsCanvasLink")(t) ? "CANVAS" : "WEBSITE";
    }
    function L(t) {
      var n,
        r,
        o,
        a,
        i,
        l =
          (n =
            (r =
              t == null ||
              (o = t.creative) == null ||
              (o = o.object_story_spec) == null ||
              (o = o.link_data) == null
                ? void 0
                : o.link) != null
              ? r
              : t == null ||
                  (a = t.creative) == null ||
                  (a = a.object_story_spec) == null ||
                  (a = a.template_data) == null
                ? void 0
                : a.link) != null
            ? n
            : t == null ||
                (i = t.creative) == null ||
                (i = i.object_story_spec) == null ||
                (i = i.video_data) == null ||
                (i = i.call_to_action) == null ||
                (i = i.value) == null
              ? void 0
              : i.link;
      return l != null ? l : e(t);
    }
    function E() {
      return o("AdsApplicationUtils").isPowerEditor()
        ? "power_editor"
        : o("AdsApplicationUtils").isCampaignManager()
          ? "create_flow"
          : o("AdsApplicationUtils").isCreativeStudio()
            ? "creative_studio"
            : "other";
    }
    function k(e) {
      return r(
        "AdsCanvasSV.experimental",
      ).ads_canvas_ad_account_gks_to_log.filter(function (t) {
        return r("AdsAccountUtils").hasCapability(e, t);
      });
    }
    function I(e) {
      switch (e) {
        case o("AdsCanvasConstants").GET_NEW_CUSTOMERS_TEMPLATE_ID:
          return "get_new_customers";
        case o("AdsCanvasConstants").SELL_PRODUCTS_GRID_LAYOUT_TEMPLATE_ID:
          return "sell_products_product_set";
        case o("AdsCanvasConstants").STORYTELLING_TEMPLATE_ID:
          return "showcase_your_business";
        case o("AdsCanvasConstants").SELL_PRODUCTS_MANUAL_TEMPLATE_ID:
          return "sell_products_manual";
        case o("AdsCanvasConstants").SELL_PRODUCTS_LIFESTYLE_TEMPLATE_ID:
          return "sell_product_liftstyle";
        case o("AdsCanvasConstants").DIGITAL_CIRCULARS_TEMPLATE_ID:
          return "digital_circulars";
        case "300256223748293":
          return "unknown";
        default:
          return null;
      }
    }
    ((l.getCanvasID = s),
      (l.isEmptyCanvasLink = u),
      (l.hasCompatibleFacebookPlacement = c),
      (l.hasCompatibleInstagramPlacement = d),
      (l.hasCompatiblePlacement = m),
      (l.isPlacementCompatibleForPlacementSpec = p),
      (l.isCanvasSupportPublisherPlatform = _),
      (l.isCanvasValidationSupported = f),
      (l.isMobileAppPromotedObjectType = g),
      (l.someHaveMobileAppPromotedObjectType = h),
      (l.getCanvasLink = y),
      (l.isCanvasAd = C),
      (l.getDestinationLinkFromAdgroup = b),
      (l.isCanvasDestinationEnabled = v),
      (l._getDestinationLink = S),
      (l.getDestinationType = R),
      (l._getDestinationLinkForLogging = L),
      (l.getAdPlatformSource = E),
      (l.getAdAccountGKsToLog = k),
      (l.getTemplateNameFromTemplateID = I));
  },
  98,
);
