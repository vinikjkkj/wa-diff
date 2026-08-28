__d(
  "AdsReachFrequencyPlacementUtils",
  [
    "fbt",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAPITargetFields",
    "AdsAccountUtils",
    "AdsBuyingTypes",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementUtils",
    "AdsPlacementsFacebookFbReelsPositionPlugin",
    "AdsPlacementsFacebookReelsOverlayPositionPlugin",
    "AdsPromotedObjectTypes",
    "AdsReachFrequencyODAXHelper",
    "AdsReachFrequencyOptimizationEvents",
    "AdsReachFrequencyOptimizationGoalHelper",
    "AdsReelsTrendingAdsConstants",
    "AdsReelsTrendingAdsPlacementUtils",
    "AdsThruPlayDurationUtils",
    "StrSet",
    "adsIGLoginPlacementUtils",
    "adsReachFrequencyAdFormatsUtilsGetHasNonCanvasAdFormats",
    "adsReachFrequencyAdFormatsUtilsGetIneligibleFormatsForPlacementPosition",
    "adsReachFrequencyAdFormatsUtilsGetIsInstreamEligibleAdFormats",
    "adsReachFrequencyCreativeFormatGetFormatLabels",
    "adsReachFrequencyCreativeFormatGetIneligibleFormatsForPlacementPosition",
    "getByPath",
    "igAccessAdsManagerUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = new (e = r("StrSet"))([
        (u = r("AdsAPIObjectives")).BRAND_AWARENESS,
        u.POST_ENGAGEMENT,
        u.REACH,
        u.VIDEO_VIEWS,
      ]),
      d = new e([
        "facebook/fb_reels",
        "facebook/feed",
        "facebook/instant_article",
        "facebook/instream_video",
        "facebook/marketplace",
        "facebook/search",
        "facebook/reels_overlay",
        "facebook/right_column",
        "facebook/stories",
        "facebook/video_feeds",
        "facebook/profile_feed",
        "instagram/story",
        "instagram/stream",
        "instagram/explore",
        "instagram/explore_home",
        "instagram/reels",
        "instagram/profile_reels",
        "audience_network/classic",
        "audience_network/instream_video",
      ]),
      m = new e([
        "facebook/fb_reels",
        "facebook/feed",
        "facebook/stories",
        "instagram/reels",
        "instagram/story",
        "instagram/stream",
      ]),
      p = new e([
        "instagram/story",
        "facebook/instant_article",
        "facebook/marketplace",
        "facebook/search",
        "facebook/right_column",
        "facebook/stories",
        "messenger/inbox",
        "facebook/group_tab",
      ]),
      _ = ["facebook/", "audience_network/"],
      f = s._(
        /*BTDS*/ "This placement isn't available with no non-canvas ad formats.",
      ),
      g = s._(
        /*BTDS*/ "Stories carousel ad format is only compatible with instagram stories placement.",
      ),
      h = s._(
        /*BTDS*/ "This placement isn't available with no eligible ad formats provided.",
      );
    function y(e, t) {
      if (t.buyingType !== r("AdsBuyingTypes").RESERVED) return null;
      if (t.isMetaMomentMaker === !0 && !m.contains(e))
        return o(
          "AdsPlacementIneligibilityReason",
        ).createMetaMomentMakerReason();
      if (!R(e, t))
        return t.buyingType === r("AdsBuyingTypes").AUCTION
          ? o("AdsPlacementIneligibilityReason").createCustomReason(
              s._(/*BTDS*/ "Predictions for this placement aren't available."),
            )
          : o("AdsPlacementIneligibilityReason").createBuyingTypeReason(
              r("AdsBuyingTypes").RESERVED,
              e,
            );
      var n = r(
        "adsReachFrequencyCreativeFormatGetIneligibleFormatsForPlacementPosition",
      )(e, t);
      if (n.length)
        return o("AdsPlacementIneligibilityReason").createCustomReason(
          s._(
            /*BTDS*/ "This placement isn't available with {unsupported_formats} format.",
            [
              s._param(
                "unsupported_formats",
                r("adsReachFrequencyCreativeFormatGetFormatLabels")(n, !0),
              ),
            ],
          ),
        );
      var a = S(e, t);
      return (
        a ||
        (t.optimizationGoal ===
          r("AdsAPIOptimizationGoals").TWO_SECOND_CONTINUOUS_VIDEO_VIEWS &&
        p.contains(e)
          ? o("AdsPlacementIneligibilityReason").createOptimizationGoalReason()
          : null)
      );
    }
    function C(e, t, n, a, i, l, s) {
      (i === void 0 && (i = !1), s === void 0 && (s = !1));
      var u =
          i && s
            ? o(
                "AdsReelsTrendingAdsPlacementUtils",
              ).getCapabilitiesWithRTAFBReelsDefault(n)
            : n,
        c,
        d;
      t == null
        ? E(e)
          ? ((c = r(
              "AdsReachFrequencyOptimizationGoalHelper",
            ).getDefaultOptimizationGoal(e)),
            (d = v(e, c)))
          : ((c = r(
              "AdsReachFrequencyOptimizationGoalHelper",
            ).getOptimizationGoalByEvent(a)),
            (d = b(e)))
        : ((c = t), (d = v(e, c)));
      var m = {
          buyingType: r("AdsBuyingTypes").RESERVED,
          capabilities: u,
          isConversionGoal: [
            r("AdsReachFrequencyOptimizationEvents").VIDEO_VIEW_2_SECONDS,
            r("AdsReachFrequencyOptimizationEvents").VIDEO_VIEW_15_SECONDS,
          ].includes(a),
          objective: e,
          optimizationGoal: c,
          promotedObjectType: d,
          isReelsTrendingAds: i,
          isCountryEnabledForFBReels: s,
          accountPlacementExclusions: l != null ? l : void 0,
        },
        p = r("AdsPlacementUtils").getDefaultCampaignPlacement(m);
      if (
        (i &&
          s &&
          (p = o(
            "AdsReelsTrendingAdsPlacementUtils",
          ).getPlacementWithRTAFBReelsDefault(p)),
        i &&
          p.brand_safety_content_filter_levels != null &&
          (p = babelHelpers.extends({}, p, {
            brand_safety_content_filter_levels: [
              o("AdsReelsTrendingAdsConstants")
                .DEFAULT_BRAND_SAFETY_IF_FEED_LEVEL,
            ],
          })),
        e === r("AdsAPIObjectives").VIDEO_VIEWS &&
          n.includes("ADNW_DISABLE_INSTREAM_AND_WEB_PLACEMENT"))
      ) {
        var _;
        p.publisher_platforms =
          (_ = p.publisher_platforms) == null
            ? void 0
            : _.filter(function (e) {
                return e !== "audience_network";
              });
      }
      if (a === r("AdsReachFrequencyOptimizationEvents").VIDEO_VIEW_2_SECONDS) {
        var f,
          g = r("getByPath")(p, [r("AdsAPITargetFields").DEVICE_PLATFORMS], []);
        p = babelHelpers.extends(
          {},
          p,
          ((f = {}), (f[r("AdsAPITargetFields").DEVICE_PLATFORMS] = g), f),
        );
      }
      return { partialEligibilityInfo: m, placement: p };
    }
    function b(e) {
      return e === r("AdsAPIObjectives").APP_INSTALLS
        ? r("AdsPromotedObjectTypes").MOBILE_APP
        : null;
    }
    function v(e, t) {
      if (e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT) {
        if (t == null) return null;
        if (t === r("AdsAPIOptimizationGoals").POST_ENGAGEMENT)
          return r("AdsPromotedObjectTypes").POST;
        if (o("AdsThruPlayDurationUtils").isThruPlayFamilyGoal(t))
          return r("AdsPromotedObjectTypes").VIDEO;
      }
      return null;
    }
    function S(e, t) {
      if (!t.adFormats || t.adFormats.length === 0) return null;
      var n = t.adFormats;
      if (
        e !== "instagram/story" &&
        n.some(function (e) {
          return e.formatType === "stories_carousel";
        })
      )
        return o("AdsPlacementIneligibilityReason").createCustomReason(g);
      var a = r(
        "adsReachFrequencyAdFormatsUtilsGetIneligibleFormatsForPlacementPosition",
      )(e, t);
      if (a.length)
        return o("AdsPlacementIneligibilityReason").createCustomReason(h);
      switch (e) {
        case "facebook/instream_video":
          if (!r("adsReachFrequencyAdFormatsUtilsGetHasNonCanvasAdFormats")(n))
            return o("AdsPlacementIneligibilityReason").createCustomReason(f);
          if (
            !r("adsReachFrequencyAdFormatsUtilsGetIsInstreamEligibleAdFormats")(
              n,
            )
          )
            return o("AdsPlacementIneligibilityReason").createCustomReason(h);
          break;
        case "audience_network/classic":
        case "audience_network/instream_video":
        case "audience_network/rewarded_video":
        case "facebook/instant_article":
        case "facebook/marketplace":
        case "facebook/search":
        case "facebook/right_column":
        case "facebook/stories":
        case "facebook/video_feeds":
        case "messenger/inbox":
        case "messenger/story":
          if (!r("adsReachFrequencyAdFormatsUtilsGetHasNonCanvasAdFormats")(n))
            return o("AdsPlacementIneligibilityReason").createCustomReason(f);
          break;
        case "facebook/feed":
          if (
            o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
              t.spec,
              r("AdsAPIDevicePlatform").DESKTOP,
            ) &&
            !r("adsReachFrequencyAdFormatsUtilsGetHasNonCanvasAdFormats")(n)
          )
            return o("AdsPlacementIneligibilityReason").createCustomReason(f);
      }
      return null;
    }
    function R(e, t) {
      if (e === r("AdsPlacementsFacebookFbReelsPositionPlugin").key)
        return r("AdsAccountUtils").hasCapabilityFromList(
          t.capabilities,
          "ADS_RF_FB_REELS_PLACEMENT",
        );
      if (e === r("AdsPlacementsFacebookReelsOverlayPositionPlugin").key)
        return !0;
      if (
        !d.contains(e) ||
        (o("igAccessAdsManagerUtils").isIGAccessParityEnabled() &&
          o(
            "adsIGLoginPlacementUtils",
          ).getShouldDisableFBPlacementForIGLoginUsers(t.account) &&
          _.some(function (t) {
            return e.startsWith(t);
          }))
      )
        return !1;
      if (e.startsWith("audience_network"))
        return t.objective === r("AdsAPIObjectives").VIDEO_VIEWS &&
          r("AdsAccountUtils").hasCapabilityFromList(
            t.capabilities,
            "ADNW_DISABLE_INSTREAM_AND_WEB_PLACEMENT",
          )
          ? !1
          : c.contains(t.objective);
      switch (e) {
        case "facebook/stories":
          return L(t);
        case "facebook/marketplace":
          return r("AdsAccountUtils").hasCapabilityFromList(
            t.capabilities,
            "RF_ALLOW_MARKETPLACE_ACCOUNT",
          );
        case "facebook/search":
          return r("AdsAccountUtils").hasCapabilityFromList(
            t.capabilities,
            "RF_ALLOW_SEARCH_ACCOUNT",
          );
      }
      return !0;
    }
    function L(e) {
      var t = E(e.objective)
        ? o("AdsReachFrequencyODAXHelper").convertODAXToLegacyObjective(
            e.objective,
            e.optimizationGoal,
          )
        : e.objective;
      switch (t) {
        case r("AdsAPIObjectives").APP_INSTALLS:
          return r("AdsAccountUtils").hasCapabilityFromList(
            e.capabilities,
            "ENABLE_MOBILE_APP_INSTALLS_FOR_FB_STORY_ADS",
          );
        case r("AdsAPIObjectives").CONVERSIONS:
          return r("AdsAccountUtils").hasCapabilityFromList(
            e.capabilities,
            "ENABLE_WEBSITE_CONVERSIONS_FOR_FB_STORY_ADS",
          );
        case r("AdsAPIObjectives").LINK_CLICKS:
          return r("AdsAccountUtils").hasCapabilityFromList(
            e.capabilities,
            "ENABLE_LINK_CLICKS_FOR_FB_STORY_ADS",
          );
        case r("AdsAPIObjectives").REACH:
          return r("AdsAccountUtils").hasCapabilityFromList(
            e.capabilities,
            "ENABLE_REACH_FOR_FB_STORY_ADS",
          );
        case r("AdsAPIObjectives").VIDEO_VIEWS:
          return r("AdsAccountUtils").hasCapabilityFromList(
            e.capabilities,
            "ENABLE_VIDEO_VIEWS_FOR_FB_STORY_ADS",
          );
        case r("AdsAPIObjectives").BRAND_AWARENESS:
          return !0;
      }
      return !1;
    }
    function E(e) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_AWARENESS ||
        e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT
      );
    }
    ((l.ALLOWLISTED_POSITIONS = d),
      (l.getReachFrequencyDisabledReason = y),
      (l.getDefaultPlacement = C),
      (l.getPromotedObjectType = b),
      (l.getPromotedObjectTypeForODAXObjective = v),
      (l.getIneligiblePositionReason = S),
      (l.isPositionSupported = R),
      (l.isFacebookStorySupported = L),
      (l.isODAXObjective = E));
  },
  226,
);
