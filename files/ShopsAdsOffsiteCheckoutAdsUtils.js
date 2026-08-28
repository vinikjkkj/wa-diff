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
    "AdsPCAUnificationUtils",
    "AdsPCAUnifiedFormatEligibilityUtils",
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
    function c(e, t) {
      return (
        (e &&
          !o(
            "AdsPCAUnificationUtils",
          ).AdsIsPcaUnificationWs1ScaledAlphaOrBetaGKEnabled()) ||
        t
      );
    }
    function d(e) {
      var t,
        n = e.adgroup,
        a = e.campaign,
        i = e.campaignGroup,
        l = i.objective,
        s = c(
          o("AdsPCAUnificationUtils").isPcaUnificationEnabled(i),
          o("AdsPCAUnifiedFormatEligibilityUtils").isEligiblePCAUnifiedAdgroup(
            n,
          ),
        );
      if (s)
        return {
          isEligible: !1,
          reason: "pca_unification_enabled_without_sa_off_gk",
        };
      var u = a.conversion_locations;
      if (u != null && u === r("AdsPromotedObjectTypes").MOBILE_APP)
        return { isEligible: !1, reason: "app_only_campaign_not_supported" };
      var d = [
          r("AdsAPIObjectives").PRODUCT_CATALOG_SALES,
          r("AdsAPIObjectives").CONVERSIONS,
          r("AdsAPIObjectives").OUTCOME_SALES,
        ],
        m =
          d.find(function (e) {
            return e === l;
          }) != null;
      if (!m) return { isEligible: !1, reason: "objective_not_supported:" + l };
      var p = (t = a.promoted_object) == null ? void 0 : t.custom_event_type,
        _ = [
          "PURCHASE",
          "ADD_TO_CART",
          "ADD_TO_WISHLIST",
          "INITIATED_CHECKOUT",
          "CONTENT_VIEW",
        ],
        h =
          _.find(function (e) {
            return e === p;
          }) != null;
      if (!h)
        return {
          isEligible: !1,
          reason: "custom_event_type_not_supported:" + (p != null ? p : "null"),
        };
      if (!o("NativeCommerceExperienceAdsUtils").isWebsiteCampaign(a))
        return { isEligible: !1, reason: "not_website_campaign" };
      var y = g(e);
      if (!y.isSupported) {
        var C;
        return {
          isEligible: !1,
          reason:
            "adgroup_format_not_supported:" +
            ((C = y.reason) != null ? C : "unknown"),
        };
      }
      var b = f(e);
      if (!b.isSupported) {
        var v;
        return {
          isEligible: !1,
          reason:
            "ad_creative_feature_not_supported:" +
            ((v = b.reason) != null ? v : "unknown"),
        };
      }
      var S =
        a.optimization_goal ===
          r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS ||
        a.optimization_goal === r("AdsAPIOptimizationGoals").VALUE;
      return S
        ? { isEligible: !0, reason: null }
        : {
            isEligible: !1,
            reason: "optimization_goal_not_supported:" + a.optimization_goal,
          };
    }
    function m(e, t) {
      var n = d(e);
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
    function p(e, t, n, a, i, l) {
      var s,
        u,
        d,
        m = e.adgroup,
        p = e.campaign,
        _ = e.campaignGroup,
        f =
          (n === "app" && t == null) ||
          t === "deeplink_with_web_fallback" ||
          t === "automatic",
        h =
          (s = p.promoted_object) == null || (s = s.omnichannel_object) == null
            ? void 0
            : s.app,
        y = h != null && h.size > 0,
        C = y && t == null,
        b =
          ((u = m.creative) == null ||
          (u = u.template_url_spec) == null ||
          (u = u.config) == null
            ? void 0
            : u.app_id) != null && t == null;
      if (!(!f && !C && !b)) {
        var v = c(
          o("AdsPCAUnificationUtils").isPcaUnificationEnabled(_),
          o("AdsPCAUnifiedFormatEligibilityUtils").isEligiblePCAUnifiedAdgroup(
            m,
          ),
        );
        if (!v) {
          var S = p.conversion_locations;
          if (!(S != null && S === r("AdsPromotedObjectTypes").MOBILE_APP)) {
            var R = _.objective,
              L = [
                r("AdsAPIObjectives").PRODUCT_CATALOG_SALES,
                r("AdsAPIObjectives").CONVERSIONS,
                r("AdsAPIObjectives").OUTCOME_SALES,
              ];
            if (
              L.find(function (e) {
                return e === R;
              }) != null
            ) {
              var E =
                (d = p.promoted_object) == null ? void 0 : d.custom_event_type;
              if (E == null) {
                var k;
                E =
                  (k = p.promoted_object) == null ||
                  (k = k.omnichannel_object) == null ||
                  (k = k.pixel) == null ||
                  (k = k.first()) == null
                    ? void 0
                    : k.toJS().custom_event_type;
              }
              var I = ["PURCHASE"];
              if (
                I.find(function (e) {
                  return e === E;
                }) != null
              ) {
                var T = g(e);
                T.isSupported &&
                  ((p.optimization_goal !==
                    r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS &&
                    p.optimization_goal !==
                      r("AdsAPIOptimizationGoals").VALUE) ||
                    a == null ||
                    !a.includes("OFFSITE_IAB_CHECKOUT_ENABLED") ||
                    (i != null && l != null && i !== l) ||
                    r("qex")._("1531"));
              }
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
      y(t, n, r);
    }
    function y(e, t, n) {
      var r;
      if (t == null)
        return o("NativeCommerceExperienceAdsUtils")
          .NativeCommerceExperienceOptinIneligibilityReason
          .CATALOG_NOT_SELECTED;
      var a =
        (r = n.get(t)) == null || (r = r.getValue()) == null
          ? void 0
          : r.catalogID;
      return e !== a
        ? o("NativeCommerceExperienceAdsUtils")
            .NativeCommerceExperienceOptinIneligibilityReason
            .CATALOG_NOT_MATCHING
        : null;
    }
    function C(e, t) {
      return e !== t
        ? o("NativeCommerceExperienceAdsUtils")
            .NativeCommerceExperienceOptinIneligibilityReason
            .CATALOG_NOT_MATCHING
        : null;
    }
    function b(e) {
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
    function v(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.destination_spec) == null
          ? void 0
          : t.destination_type) === "WEBSITE_AND_SHOP"
      );
    }
    function S(e, t, n) {
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
      (l.isSAOffDisabledForPCAU = c),
      (l.isEligibleForOffsiteCheckoutShopsAds = d),
      (l.shouldShowSAOffOptInForLastCard = m),
      (l.logSAOffWebAndAppExposure = p),
      (l.shouldShowSAOffOptIn = h),
      (l.shouldShowSAOffOptInForDynamicAds = y),
      (l.shouldShowSAOffOptInForPCAU = C),
      (l.isWebsiteDestinationType = b),
      (l.adgroupHasWebsiteAndShopDestinationSpec = v),
      (l.updateShopAdSpec = S));
  },
  98,
);
