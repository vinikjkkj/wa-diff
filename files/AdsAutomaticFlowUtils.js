__d(
  "AdsAutomaticFlowUtils",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAPlusCDAExperimentUtils",
    "AdsAccountUtils",
    "AdsAdgroupSpecUtils",
    "AdsAssetFeedSimpleFieldCheckUtils",
    "AdsBuyingTypes",
    "AdsChildAttachmentsUtils",
    "AdsCollectionsAdUtils",
    "AdsConnectedSourcesAwarenessUtils",
    "AdsCreativeFeaturesUtils",
    "AdsDynamicAdsUtils",
    "AdsODAXUtils",
    "AdsObjectTypeUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPromotedObjectOmnichannelUtils",
    "AdsPromotedObjectTypes",
    "AdsRegulatedCategory",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsWAImageFilteringUtils",
    "BrandedContentAdsUtils",
    "CTMSMCCatalogAdAdoptionLogger",
    "PEFunnelLogger",
    "adsConvertAdObjectRecordToPlainJS",
    "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
    "getByPath",
    "gkx",
    "isFalsey",
    "isTruthy",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = [(s = o("AdsAPIObjectives")).LINK_CLICKS, s.CONVERSIONS],
      c = new Map([
        [
          s.LINK_CLICKS,
          [(e = r("AdsPromotedObjectTypes")).WEBSITE, e.INSTAGRAM],
        ],
        [s.CONVERSIONS, [e.PIXEL]],
        [s.LEAD_GENERATION, [e.NONE, e.MESSENGER]],
        [s.MESSAGES, [e.MESSENGER, e.WHATSAPP, e.INSTAGRAM]],
        [
          s.OUTCOME_LEADS,
          [
            e.PIXEL,
            e.ON_AD,
            e.MESSENGER,
            e.LEAD_FROM_IG_DIRECT,
            e.LEAD_FORM_MESSENGER,
          ],
        ],
        [s.OUTCOME_ENGAGEMENT, [e.PIXEL, e.MESSENGER, e.WHATSAPP, e.INSTAGRAM]],
        [s.OUTCOME_SALES, [e.PIXEL, e.INSTAGRAM]],
      ]),
      d = [
        s.LINK_CLICKS,
        s.CONVERSIONS,
        s.LEAD_GENERATION,
        s.APP_INSTALLS,
        s.MESSAGES,
        s.EVENT_RESPONSES,
        s.POST_ENGAGEMENT,
        s.VIDEO_VIEWS,
      ],
      m = [
        e.WEBSITE,
        e.PIXEL,
        e.ON_AD,
        e.MESSENGER,
        e.WHATSAPP,
        e.INSTAGRAM,
        e.MOBILE_APP,
        e.EVENT,
        e.POST,
        e.VIDEO,
        e.GROUP,
        e.REMINDER,
        e.NONE,
      ].concat(
        o("AdsPromotedObjectOmnichannelUtils")
          .OMNICHANNEL_PROMOTED_OBJECT_TYPES,
      );
    function p(e) {
      return e.campaignGroup.objective ===
        o("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY
        ? !0
        : L(e.campaign) &&
            E(
              e.campaignGroup,
              o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType(e),
            ) &&
            _(e);
    }
    function _(e) {
      var t = e.campaignGroup.special_ad_categories;
      if (
        t != null &&
        t.includes(r("AdsRegulatedCategory").ISSUES_ELECTIONS_POLITICS)
      )
        return !1;
      if (
        r("justknobx")._("4143") &&
        o("AdsCreativeFeaturesUtils").isAdsRegulatedCategory(e.campaignGroup)
      ) {
        var n = e.campaignGroup.special_ad_categories,
          a =
            n != null &&
            (n.includes(r("AdsRegulatedCategory").ISSUES_ELECTIONS_POLITICS) ||
              n.includes(r("AdsRegulatedCategory").SOCIAL_ISSUES) ||
              n.includes(r("AdsRegulatedCategory").ELECTIONS_POLITICS));
        if (a) return !1;
      }
      return !0;
    }
    function f(e) {
      var t = r("AdsAccountUtils").hasCapability(e, "ADS_TRUST_TIER_0_FULL");
      return !t || r("gkx")("21565");
    }
    function g(e, t, n) {
      return o("AdsAPIAdgroupRecordUtils").isFlexibleFormatAd(t.adgroup) ||
        o("AdsAPIAdgroupRecordUtils").isCreativeAssetGroupingsAd(t.adgroup)
        ? !1
        : h(e, t) ||
            o("AdsAPlusCDAExperimentUtils").isEligibleForAPlusCDA(t) ||
            o("AdsAPlusCDAExperimentUtils").isEligibleForDADynamicDescription(
              t,
            ) ||
            o("AdsAPlusCDAExperimentUtils").isEligibleForDAAdaptToPlacement(
              t,
            ) ||
            o("AdsAPlusCDAExperimentUtils").isEligibleForDAAdaptImages(t) ||
            I(e, t, n) ||
            (T(e, t) &&
              t.campaign.destination_type ===
                r("AdCampaignDestination").INSTAGRAM_PROFILE) ||
            w(e, t);
    }
    function h(e, t) {
      var n = t.adgroup,
        a = f(e),
        i = y(n),
        l = p(t),
        s = a && i && l,
        u = r("getByPath")(t, ["campaignGroup", "id"], null);
      if (u != null) {
        var c,
          d,
          m = {
            ad_account_id: (d = r("getByPath"))(e, ["account_id"], null),
            campaign_group_id: u,
            campaign_id: d(t, ["campaign", "id"], null),
            adgroup_id: d(t, ["adgroup", "id"], null),
            object_level: "campaign_level",
          },
          _ = babelHelpers.extends(
            {
              is_account_eligible: a,
              is_campaign_group_eligible: l,
              is_static_single_image_or_video: i,
              campaign_objective: d(t, ["campaignGroup", "objective"], null),
              promoted_object_type:
                (c = o(
                  "AdsUEditorCampaignAdObjectsUtils",
                ).getPromotedObjectType(t)) != null
                  ? c
                  : null,
            },
            o("PEFunnelLogger").getPEGKBlocklistFields(),
          );
        if (
          (a
            ? o("PEFunnelLogger").logPrereqPass(m, _)
            : o("PEFunnelLogger").logPrereqFail(m, _),
          l
            ? o("PEFunnelLogger").logL3EligibilityPass(m, _)
            : o("PEFunnelLogger").logL3EligibilityFail(m, _),
          l)
        ) {
          var g = babelHelpers.extends({}, m, { object_level: "ad_level" });
          i
            ? o("PEFunnelLogger").logL1EligibilityPass(g, _)
            : o("PEFunnelLogger").logL1EligibilityFail(
                g,
                babelHelpers.extends({}, _, {
                  ineligibility_reason: "INELIGIBLE_FORMAT",
                }),
              );
        }
      }
      return s;
    }
    function y(e) {
      var t = o("AdsDynamicAdsUtils").isDynamicAd(e);
      return !(
        o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) ||
        o("AdsChildAttachmentsUtils").isCarouselAd(e) ||
        t ||
        o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e)
      );
    }
    function C(e) {
      return o("AdsAdgroupSpecUtils").getDoesAdgroupHaveImages(e) && y(e);
    }
    function b(e) {
      return o("AdsAdgroupSpecUtils").getDoesAdgroupHaveVideos(e) && y(e);
    }
    function v(e) {
      var t;
      return (
        o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e) &&
        ((t = e.creative) == null ? void 0 : t.source_instagram_media_id) !=
          null
      );
    }
    function S(e) {
      var t;
      return (
        o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e) &&
        ((t = e.creative) == null ? void 0 : t.object_story_id) != null
      );
    }
    function R(e) {
      var t,
        n,
        a,
        i,
        l = r("adsConvertAdObjectRecordToPlainJS")(e),
        s = babelHelpers.extends({}, l, {
          targeting: {
            facebook_positions:
              (t = l.targeting) == null ? void 0 : t.facebook_positions,
            instagram_positions:
              (n = l.targeting) == null ? void 0 : n.instagram_positions,
            publisher_platforms:
              (a = l.targeting) == null ? void 0 : a.publisher_platforms,
            whatsapp_positions:
              (i = l.targeting) == null ? void 0 : i.whatsapp_positions,
          },
        }),
        u = o(
          "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
        ).convertCampaignRecordToPlacementSpec(s),
        c = o("AdsPlacementAPISpecReaderUtils").isActiveFacebookFeedPosition(u),
        d = o("AdsPlacementAPISpecReaderUtils").isActiveInstagramFeedPosition(
          u,
        ),
        m = o("AdsPlacementAPISpecReaderUtils").isActiveInstagramStoryPosition(
          u,
        ),
        p =
          o("AdsWAImageFilteringUtils").passWAImageFilteringGK("silent") &&
          o(
            "AdsPlacementAPISpecReaderUtils",
          ).isActiveWhatsAppMessageMarketingPosition(u),
        _ = o("AdsPlacementAPISpecReaderUtils").isActiveFacebookStoryPosition(
          u,
        );
      return c || _ || d || m || p;
    }
    function L(e) {
      var t,
        n = o("AdsAssetFeedSimpleFieldCheckUtils").isRegularDCOCampaign(e),
        a = R(e),
        i = r("isTruthy")(
          (t = e.promoted_object) == null ? void 0 : t.offer_id,
        );
      return !n && !i && a;
    }
    function E(e, t) {
      var n, a;
      return e.buying_type !== r("AdsBuyingTypes").AUCTION
        ? !1
        : (e.objective === o("AdsAPIObjectives").OUTCOME_AWARENESS &&
              o(
                "AdsConnectedSourcesAwarenessUtils",
              ).isOCMRAwarenessGKEnabled() &&
              (t === r("AdsPromotedObjectTypes").WEBSITE ||
                t === r("AdsPromotedObjectTypes").NONE)) ||
            (c.has(e.objective) &&
              (n = c.get(e.objective)) != null &&
              n.includes(t)) ||
            ((a = e.promoted_object) == null ? void 0 : a.product_catalog_id) !=
              null ||
            t === r("AdsPromotedObjectTypes").WEBSITE_AND_INSTANT_FORM
          ? !0
          : d.includes(
              o("AdsODAXUtils").maybeTranslateObjective(e.objective, t),
            ) &&
            t != null &&
            m.includes(t);
    }
    function k(e) {
      var t = e.adgroup,
        n = e.campaignGroup;
      return !(
        !o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t) ||
        n.buying_type !== r("AdsBuyingTypes").AUCTION ||
        o("AdsCreativeFeaturesUtils").isAdsRegulatedCategory(n)
      );
    }
    function I(e, t, n, a) {
      var i = t.adgroup,
        l = t.campaign,
        s = t.campaignGroup;
      if (
        !o("AdsAPIAdgroupRecordUtils").isExistingPostAd(i) ||
        n == null ||
        (r("justknobx")._("4143") &&
          o("AdsCreativeFeaturesUtils").isAdsRegulatedCategory(s))
      )
        return !1;
      var u = f(e),
        c = R(l),
        d = k(t),
        m = M(n, t, a),
        p = u && c && d && m,
        _ = r("getByPath")(t, ["campaignGroup", "id"], null);
      if (_ != null) {
        var g,
          h,
          y = {
            ad_account_id: (h = r("getByPath"))(e, ["account_id"], null),
            campaign_group_id: _,
            campaign_id: h(t, ["campaign", "id"], null),
            adgroup_id: h(t, ["adgroup", "id"], null),
            object_level: "campaign_level",
            object_creation_source: "existing_post",
          },
          C = {
            is_account_eligible: u,
            campaign_objective: h(t, ["campaignGroup", "objective"], null),
            promoted_object_type:
              (g = o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType(
                t,
              )) != null
                ? g
                : null,
          };
        (u
          ? o("PEFunnelLogger").logPrereqPass(y, C)
          : o("PEFunnelLogger").logPrereqFail(y, C),
          p
            ? o("PEFunnelLogger").logL3EligibilityPass(y, C)
            : o("PEFunnelLogger").logL3EligibilityFail(y, C));
      }
      return p;
    }
    function T(e, t) {
      var n = t.adgroup,
        r = t.campaign,
        a = t.campaignGroup;
      return (
        !o("AdsAPIAdgroupRecordUtils").isExistingPostAd(n) &&
        !o("AdsCreativeFeaturesUtils").isAdsRegulatedCategory(a) &&
        f(e) &&
        R(r)
      );
    }
    function D(e) {
      var t = r("getByPath")(e, ["attachments", "data", "0", "type"], "");
      r("isFalsey")(t) && (t = r("getByPath")(e, ["type"], ""));
      var n = t === "album" || t === "photo";
      return t === "share" || (t && t.startsWith("video")) || n;
    }
    function x(e) {
      var t = e.is_instagram_post;
      if (t) return !1;
      var n = r("getByPath")(e, ["attachments", "data", "0", "type"], "");
      return n === "album" || n === "photo";
    }
    function $(e) {
      var t = "",
        n = r("getByPath")(e, ["attachments", "data", "0", "type"], "");
      ((t += "Orig postAttachementType=" + n + ", "),
        n === "" && (n = r("getByPath")(e, ["postType"], "")),
        (t += "Updated postAttachementType=" + n + ", "));
      var a =
        n === "photo" ||
        n === "LIVE" ||
        (n && n.startsWith("video")) ||
        n === "VIDEOS" ||
        n === "REELS" ||
        n === "album";
      return (
        o("CTMSMCCatalogAdAdoptionLogger").logSMCProductSelectionAMEvents(
          a
            ? o("CTMSMCCatalogAdAdoptionLogger").CtmSMCCatalogAdAdoptionMessage
                .AdCreativeComponentProductRecommendationTriggerSupportedPage
            : o("CTMSMCCatalogAdAdoptionLogger").CtmSMCCatalogAdAdoptionMessage
                .AdCreativeComponentProductRecommendationTriggerNotSupportedPage,
          null,
          null,
          null,
          [],
          null,
          r("getByPath")(e, ["id"], ""),
          null,
          !1,
          t,
        ),
        a
      );
    }
    function P(e) {
      var t = r("getByPath")(e, ["type"], "");
      return t === "photo" || t === "video";
    }
    function N(e) {
      var t = r("getByPath")(e, ["attachments", "data", "0", "type"], "");
      return (
        r("isFalsey")(t) && (t = r("getByPath")(e, ["type"], "")),
        t === "multi_share" || t === "carousel"
      );
    }
    function M(e, t, n) {
      var a;
      if (e == null) return !1;
      if (N(e)) return !0;
      var i = e.is_instagram_post,
        l = i ? P(e) : D(e);
      if (!l) return !1;
      var s = t.adgroup,
        u = s == null ? void 0 : s.creative,
        c =
          (u == null || (a = u.branded_content) == null
            ? void 0
            : a.ui_version) === 1,
        d = o("BrandedContentAdsUtils").isBrandedContentPost(e);
      return !c || !d
        ? !0
        : r("isTruthy")(n) ||
            o("BrandedContentAdsUtils").hasUpgradedPAPermissionForCapability(
              e,
              "CAN_USE_CREATIVE_OPTIMIZATION",
            );
    }
    function w(e, t) {
      var n,
        a = t.adgroup,
        i = t.campaign,
        l = t.campaignGroup;
      return !f(e) ||
        l.buying_type !== r("AdsBuyingTypes").AUCTION ||
        o("AdsCreativeFeaturesUtils").isAdsRegulatedCategory(l) ||
        !L(i) ||
        o("AdsAPIAdgroupRecordUtils").isTemplateCreative(a) ||
        o("AdsObjectTypeUtils").isDynamicProductAd(a)
        ? !1
        : o("AdsChildAttachmentsUtils").isCarouselAd(a) &&
            ((n = r("qex")._("1874")) != null ? n : !1);
    }
    function A(e, t, n, r, a) {
      var i = e.getValues();
      return i.length === 0 ||
        t == null ||
        t.length === 0 ||
        a ||
        !y(t[0]) ||
        n !== o("AdsAPIObjectives").PRODUCT_CATALOG_SALES ||
        !r
        ? !1
        : i.every(function (e) {
            return e != null;
          });
    }
    ((l.eligibleObjectives = u),
      (l.isAccountEligibleForAutomaticFlowLite = f),
      (l.isAdvantagePlusCreativeEligible = g),
      (l.isEligibleForAutomaticFlowLite = h),
      (l.isStaticSingleImageOrVideoFormat = y),
      (l.isSingleImageFormat = C),
      (l.isStaticSingleVideoFormat = b),
      (l.isIGExistingPostAd = v),
      (l.isFBExistingPostAd = S),
      (l.isAdPlacementEligibleForAPlusC = R),
      (l.isCampaignEligibleForAutoflow = L),
      (l.isCampaignGroupEligibleForAutoflow = E),
      (l.isEligibleForAPlusCUseExistingPost = I),
      (l.isFBPostPhotoAlbumAd = x),
      (l.isSupportedCTMPEExistingPost = $),
      (l.isSupportedIGPostForAutomaticFlowLite = P),
      (l.isSupportedIGCarouselAds = N),
      (l.isEligibleForAutomaticFlowLiteUseStaticCarouselTest = w),
      (l.adsIsSAInDAEnabledLogic = A));
  },
  98,
);
