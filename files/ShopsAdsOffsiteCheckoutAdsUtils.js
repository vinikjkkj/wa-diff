__d(
  "ShopsAdsOffsiteCheckoutAdsUtils",
  [
    "$InternalEnum",
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedUtils",
    "AdsChildAttachmentsUtils",
    "AdsCreativeFlexAssetUtils",
    "AdsDynamicAdsUtils",
    "AdsPCAConsolidationUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupCreativeFormat",
    "NativeCommerceExperienceAdsUtils",
    "gkx",
    "immutable",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("$InternalEnum")({
        IG_IDENTITY_CHANGE: "Instagram Identity Change",
        FB_IDENTITY_CHANGE: "FB Identity Change",
        CUSTOM_EVENT_TYPE_CHANGE: "Custom Event Type Change",
        CATALOG_ID_CHANGE: "Catalog ID Change",
        OPTIMIZATION_GOAL_CHANGE: "Optimization Goal Change",
        DYNAMIC_TO_STATIC_FORMAT_CHANGE: "Dynamic to Static Format Change",
        STATIC_TO_DYNAMIC_FORMAT_CHANGE: "Static to Dynamic Format Change",
        COLLECTIONS_AD_CANVAS_CHANGE: "Collections Ad Canvas Change",
        LINK_POST_FORMAT_SINGLE_MEDIA_CHANGE:
          "Link Post Format Single Media Change",
        LINK_POST_FORMAT_CAROUSEL_CHANGE: "Link Post Format Carousel Change",
        LINK_POST_FORMAT_COLLECTION_CHANGE:
          "Link Post Format Collection Change",
        LINK_POST_FORMAT_FLEXIBLE_CHANGE: "Link Post Format Flexible Change",
        INITIAL_LOAD: "Initial Load",
        INITIAL_LOAD_WITH_DOI_AD_SPEC_TRACKING:
          "Initial Load With DOI Ad Spec Tracking",
        UNKNOWN: "Unknown",
      }),
      u = n("$InternalEnum")({
        MFR: "MFR",
        PFR: "PFR",
        PFR_HUB: "PFR_HUB",
        DwU: "DwU",
        DirectDuplication: "Direct Duplication",
        DirectCreation: "Direct Creation",
      });
    function c(e) {
      var t,
        n = e.campaign,
        a = e.campaignGroup,
        i = a.objective,
        l = n.conversion_locations;
      if (l != null && l === r("AdsPromotedObjectTypes").MOBILE_APP)
        return { isEligible: !1, reason: "app_only_campaign_not_supported" };
      var s = [
          r("AdsAPIObjectives").PRODUCT_CATALOG_SALES,
          r("AdsAPIObjectives").CONVERSIONS,
          r("AdsAPIObjectives").OUTCOME_SALES,
        ],
        u =
          s.find(function (e) {
            return e === i;
          }) != null;
      if (!u) return { isEligible: !1, reason: "objective_not_supported:" + i };
      var c = (t = n.promoted_object) == null ? void 0 : t.custom_event_type,
        m = [
          "PURCHASE",
          "ADD_TO_CART",
          "ADD_TO_WISHLIST",
          "INITIATED_CHECKOUT",
          "CONTENT_VIEW",
        ],
        p =
          m.find(function (e) {
            return e === c;
          }) != null;
      if (!p)
        return {
          isEligible: !1,
          reason: "custom_event_type_not_supported:" + (c != null ? c : "null"),
        };
      if (!o("NativeCommerceExperienceAdsUtils").isWebsiteCampaign(n))
        return { isEligible: !1, reason: "not_website_campaign" };
      var _ = g(e);
      if (!_.isSupported) {
        var h;
        return {
          isEligible: !1,
          reason:
            "adgroup_format_not_supported:" +
            ((h = _.reason) != null ? h : "unknown"),
        };
      }
      var y = f(e);
      if (!y.isSupported) {
        var C;
        return {
          isEligible: !1,
          reason:
            "ad_creative_feature_not_supported:" +
            ((C = y.reason) != null ? C : "unknown"),
        };
      }
      var b =
        n.optimization_goal ===
          r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS ||
        n.optimization_goal === r("AdsAPIOptimizationGoals").VALUE;
      if (!b)
        return {
          isEligible: !1,
          reason: "optimization_goal_not_supported:" + n.optimization_goal,
        };
      var v =
        i === r("AdsAPIObjectives").CONVERSIONS ||
        i === r("AdsAPIObjectives").OUTCOME_SALES;
      return v && !o("AdsPCAConsolidationUtils").isPCAVariation(n) && d(n)
        ? { isEligible: !1, reason: "web_and_app_not_supported" }
        : { isEligible: !0, reason: null };
    }
    function d(e) {
      var t,
        n =
          (t = e.promoted_object) == null || (t = t.omnichannel_object) == null
            ? void 0
            : t.app;
      return n == null ? !1 : Array.isArray(n) ? n.length > 0 : n.size > 0;
    }
    function m(e, t) {
      var n = c(e);
      if (!n.isEligible) return !1;
      var a = o("AdsDynamicAdsUtils").isDynamicAd(e.adgroup),
        i = o("AdsUEditorAdgroupAdObjectsUtils").getCreativeFormat(e, !1);
      return t
        ? !1
        : !!(
            i === r("AdsUEditorAdgroupCreativeFormat").CAROUSEL ||
            (i === r("AdsUEditorAdgroupCreativeFormat").COLLECTIONS && a) ||
            (i === r("AdsUEditorAdgroupCreativeFormat").ACO && a) ||
            (a &&
              (i === r("AdsUEditorAdgroupCreativeFormat").SINGLE_IMAGE ||
                i === r("AdsUEditorAdgroupCreativeFormat").SINGLE_VIDEO))
          );
    }
    function p(e, t, n, o, a, i) {
      var l,
        s,
        u = e.adgroup,
        c = e.campaign,
        m = e.campaignGroup,
        p =
          (n === "app" && t == null) ||
          t === "deeplink_with_web_fallback" ||
          t === "automatic",
        _ = d(c) && t == null,
        f =
          ((l = u.creative) == null ||
          (l = l.template_url_spec) == null ||
          (l = l.config) == null
            ? void 0
            : l.app_id) != null && t == null;
      if (!(!p && !_ && !f)) {
        var h = c.conversion_locations;
        if (!(h != null && h === r("AdsPromotedObjectTypes").MOBILE_APP)) {
          var y = m.objective,
            C = [
              r("AdsAPIObjectives").PRODUCT_CATALOG_SALES,
              r("AdsAPIObjectives").CONVERSIONS,
              r("AdsAPIObjectives").OUTCOME_SALES,
            ];
          if (
            C.find(function (e) {
              return e === y;
            }) != null
          ) {
            var b =
              (s = c.promoted_object) == null ? void 0 : s.custom_event_type;
            if (b == null) {
              var v;
              b =
                (v = c.promoted_object) == null ||
                (v = v.omnichannel_object) == null ||
                (v = v.pixel) == null ||
                (v = v.first()) == null
                  ? void 0
                  : v.toJS().custom_event_type;
            }
            var S = ["PURCHASE"];
            if (
              S.find(function (e) {
                return e === b;
              }) != null
            ) {
              var R = g(e);
              R.isSupported &&
                ((c.optimization_goal !==
                  r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS &&
                  c.optimization_goal !== r("AdsAPIOptimizationGoals").VALUE) ||
                  o == null ||
                  !o.includes("OFFSITE_IAB_CHECKOUT_ENABLED") ||
                  (a != null && i != null && a !== i) ||
                  r("qex")._("1531"));
            }
          }
        }
      }
    }
    var _ = r("immutable").Set([
      (e = r("AdsUEditorAdgroupCreativeFormat")).SINGLE_IMAGE,
      e.SINGLE_VIDEO,
      e.EXISTING_POST,
      e.CAROUSEL,
    ]);
    function f(e) {
      var t = o("AdsCreativeFlexAssetUtils").hasMultiMediaAssetsOfSource(
        e.adgroup,
        "multi_media",
      );
      return t && !r("gkx")("1637")
        ? { isSupported: !1, reason: "multi_media_not_supported" }
        : { isSupported: !0, reason: null };
    }
    function g(e) {
      var t = o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(e.adgroup);
      if (t) return { isSupported: !1, reason: "dco_adgroup" };
      var n = o("AdsUEditorAdgroupAdObjectsUtils").getCreativeFormat(e, !1),
        a = o("AdsDynamicAdsUtils").isDynamicAd(e.adgroup);
      if (a) {
        var i = o("AdsChildAttachmentsUtils").isDynamicAdCarouselMediaFormat(
          e.adgroup,
        );
        return i || n === r("AdsUEditorAdgroupCreativeFormat").COLLECTIONS
          ? { isSupported: !0, reason: null }
          : n === r("AdsUEditorAdgroupCreativeFormat").SINGLE_IMAGE ||
              n === r("AdsUEditorAdgroupCreativeFormat").SINGLE_VIDEO
            ? { isSupported: !0, reason: null }
            : { isSupported: !1, reason: "dynamic_ad_unsupported_format:" + n };
      }
      return _.contains(n)
        ? { isSupported: !0, reason: null }
        : { isSupported: !1, reason: "static_ad_unsupported_format:" + n };
    }
    function h(e, t, n, r) {
      if (e !== "OFFSITE_IAB_CHECKOUT")
        return o("NativeCommerceExperienceAdsUtils")
          .NativeCommerceExperienceOptinIneligibilityReason
          .OFFSITE_IAB_CHECKOUT;
      C(t, n, r);
    }
    function y() {
      return !r("gkx")("4862");
    }
    function C(e, t, n) {
      var r;
      if (t == null)
        return o("NativeCommerceExperienceAdsUtils")
          .NativeCommerceExperienceOptinIneligibilityReason
          .CATALOG_NOT_SELECTED;
      var a =
        (r = n.get(t)) == null || (r = r.getValue()) == null
          ? void 0
          : r.catalogID;
      return e !== a && y()
        ? o("NativeCommerceExperienceAdsUtils")
            .NativeCommerceExperienceOptinIneligibilityReason
            .CATALOG_NOT_MATCHING
        : null;
    }
    function b(e, t) {
      return e !== t && y()
        ? o("NativeCommerceExperienceAdsUtils")
            .NativeCommerceExperienceOptinIneligibilityReason
            .CATALOG_NOT_MATCHING
        : null;
    }
    function v(e) {
      if (e == null) return !0;
      var t = [
        r("AdCampaignDestination").WEBSITE,
        r("AdCampaignDestination").UNDEFINED,
      ];
      return (
        t.find(function (t) {
          return t === e;
        }) != null
      );
    }
    function S(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.destination_spec) == null
          ? void 0
          : t.destination_type) === "WEBSITE_AND_SHOP"
      );
    }
    function R(e, t, n) {
      var o = r(
        "AdsAdgroupRecordAccessors",
      ).creative.destination_spec.native_commerce_experience.shop.enroll_status.set(
        t,
        e,
      );
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.destination_spec.native_commerce_experience.shop.action_metadata.type.set(
        n,
        o,
      );
    }
    ((l.SAOffDefaultingTrigger = s),
      (l.ShopsAdsEntryPoint = u),
      (l.isEligibleForOffsiteCheckoutShopsAds = c),
      (l.shouldShowSAOffOptInForLastCard = m),
      (l.logSAOffWebAndAppExposure = p),
      (l.shouldShowSAOffOptIn = h),
      (l.isCatalogMismatchIneligibilityEnforced = y),
      (l.shouldShowSAOffOptInForDynamicAds = C),
      (l.shouldShowSAOffOptInForPCAU = b),
      (l.isWebsiteDestinationType = v),
      (l.adgroupHasWebsiteAndShopDestinationSpec = S),
      (l.updateShopAdSpec = R));
  },
  98,
);
