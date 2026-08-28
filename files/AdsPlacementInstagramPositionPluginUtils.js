__d(
  "AdsPlacementInstagramPositionPluginUtils",
  [
    "ix",
    "AdCampaignDestination",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAppUrlUtils",
    "AdsInstagramAvailabilityUtils",
    "AdsInstagramProfileReelsConfig",
    "AdsInstagramReelsConfig",
    "AdsInstagramSearchAdsUtils",
    "AdsInstagramShopConfig",
    "AdsInstagramSupportedObjectives",
    "AdsInstagramSupportedOptimizationGoals",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementCopy",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementsInstagramPlatformPlugin",
    "AdsPlacementsInstagramReelsPositionPlugin",
    "AdsPromotedObjectTypes",
    "AdsReachFrequencyPlacementUtils",
    "AdsUnifiedProfileVisitUtils",
    "AdsVideoBuyingStoreUtils",
    "AdsWhatsAppPlacementUtils",
    "gkx",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function (t) {
        if (r("AdsAppUrlUtils").isWindowsURL(t.objectStoreURL))
          return o("AdsPlacementIneligibilityReason").createWindowsAppReason();
        if (
          t.spec.device_platforms &&
          !t.spec.device_platforms.includes(r("AdsAPIDevicePlatform").MOBILE)
        )
          return o(
            "AdsPlacementIneligibilityReason",
          ).createDevicePlatformReason(r("AdsAPIDevicePlatform").DESKTOP);
        var e = o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
          t.spec,
          r("AdsAPIDevicePlatform").MOBILE,
        );
        return o("AdsWhatsAppPlacementUtils").isIneligibleForIGFeedAndExplore(
          t,
          e,
        )
          ? o("AdsPlacementIneligibilityReason").createWhatsAppReason(
              t.objective,
            )
          : null;
      },
      u = function (t, n) {
        return o(
          "AdsVideoBuyingStoreUtils",
        ).checkIfPlacementPositionValidForBuyingOption(t, n)
          ? t.objective === r("AdsAPIObjectives").APP_INSTALLS &&
            t.promotedObjectType === r("AdsPromotedObjectTypes").CANVAS_APP
            ? o("AdsPlacementIneligibilityReason").createCanvasAppReason()
            : r("AdsAppUrlUtils").isFacebookDesktopURL(t.objectStoreURL)
              ? o("AdsPlacementIneligibilityReason").createGenericReason()
              : t.objective === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
                  (t.optimizationGoal ===
                    r("AdsAPIOptimizationGoals").REPLIES ||
                    t.optimizationGoal ===
                      r("AdsAPIOptimizationGoals").CONVERSATIONS ||
                    t.optimizationGoal ===
                      r("AdsAPIOptimizationGoals").QUALITY_CALL)
                ? o(
                    "AdsPlacementIneligibilityReason",
                  ).createOptimizationGoalReason()
                : t.promotedObjectType === r("AdsPromotedObjectTypes").DONATION
                  ? o("AdsPlacementIneligibilityReason").createDonationReason()
                  : t.promotedObjectType === r("AdsPromotedObjectTypes").GROUP
                    ? o(
                        "AdsPlacementIneligibilityReason",
                      ).createGroupPromotionReason()
                    : t.promotedObjectType ===
                        r("AdsPromotedObjectTypes").IMAGINATION
                      ? o(
                          "AdsPlacementIneligibilityReason",
                        ).createImaginationReason()
                      : t.destinationType ===
                          r("AdCampaignDestination").FACEBOOK_LIVE
                        ? o(
                            "AdsPlacementIneligibilityReason",
                          ).createFacebookLiveReason()
                        : null
          : o("AdsPlacementIneligibilityReason").createOptimizationGoalReason();
      },
      c = function (t, n) {
        var e = n === "explore" ? "instagram/explore" : "instagram/stream",
          r = o(
            "AdsReachFrequencyPlacementUtils",
          ).getReachFrequencyDisabledReason(e, t);
        return r !== null
          ? r
          : o("AdsInstagramAvailabilityUtils").supportsBuyingType(t.buyingType)
            ? t.containsOffer === !0
              ? o("AdsPlacementIneligibilityReason").createOfferOptionReason(
                  t.objective,
                )
              : t.directInstallDevices === !0
                ? o(
                    "AdsPlacementIneligibilityReason",
                  ).createDirectInstallReason()
                : null
            : o("AdsPlacementIneligibilityReason").createBuyingTypeReason(
                t.buyingType,
                null,
              );
      },
      d = function (n, r) {
        var t = e(n);
        if (t) return t;
        var a = u(n, r);
        if (a) return a;
        var i = c(n, r);
        return (
          i ||
          (o(
            "AdsUnifiedProfileVisitUtils",
          ).getIsIGPositionCondtionallyDisabledForUnifiedProfileVisits(
            n.objective,
            n.promotedObjectType,
            n.destinationType,
            n.optimizationGoal,
          )
            ? o(
                "AdsUnifiedProfileVisitUtils",
              ).getUnifiedProfileVisitsAdsPlacementIneligibilityReason(
                n.destinationType,
              )
            : null)
        );
      };
    function m(e, t) {
      var n = o(
          "AdsPlacementAPISpecReaderUtils",
        ).convertCampaignToPlacementSpec_LEGACY(e),
        a = [r("AdsPlacementsInstagramReelsPositionPlugin")],
        i = r("AdsPlacementsInstagramPlatformPlugin").positions.subtract(a);
      return i.every(function (e) {
        return o(
          "AdsPlacementAPISpecReaderUtils",
        ).isActiveOrIneligibleInstagramPosition(n, t, e);
      });
    }
    function p(e) {
      var t,
        n =
          (t = o("AdsInstagramSupportedObjectives").supportedObjectives.get(
            "stream",
          )) != null
            ? t
            : [];
      return n.includes(e.objective);
    }
    function _(e) {
      var t,
        n =
          (t = o("AdsInstagramSupportedObjectives").supportedObjectives.get(
            "explore",
          )) != null
            ? t
            : [];
      return n.includes(e.objective);
    }
    function f(e, t) {
      var n,
        a = e.account,
        i = t === (n = r("AdsAPIObjectives")).MESSAGES,
        l = a != null,
        s = t === n.POST_ENGAGEMENT,
        u = t === n.CONVERSIONS,
        c = a != null,
        d = t === n.RESEARCH_POLL,
        m = o("AdsInstagramReelsConfig").ELIGIBLE_OBJECTIVES,
        p = t != null && m.has(t);
      return p || i || u || (d && c) || (s && l);
    }
    function g(e) {
      var t = o("AdsInstagramProfileReelsConfig").ELIGIBLE_OBJECTIVES,
        n = e != null && t.has(e);
      return n;
    }
    function h(e) {
      var t = o("AdsInstagramShopConfig").ELIGIBLE_BUYING_TYPES;
      return e != null && t.has(e);
    }
    function y(e) {
      var t = o("AdsInstagramShopConfig").ELIGIBLE_OBJECTIVES;
      return e != null && t.has(e);
    }
    function C(e) {
      var t = o("AdsInstagramShopConfig").UNSUPPORTED_OPTIMIZATION_GOALS;
      return e != null && t.has(e);
    }
    function b(e, t) {
      var n = o("AdsInstagramSupportedObjectives").supportedObjectives.get(
        "explore_home",
      );
      return e != null && n != null && n.includes(e);
    }
    function v(e) {
      var t = o(
        "AdsInstagramSupportedOptimizationGoals",
      ).supportedOptimizationGoals.get("explore_home");
      return e != null && t != null && !t.includes(e);
    }
    function S(e) {
      var t,
        n =
          (t = o("AdsInstagramSupportedObjectives").supportedObjectives.get(
            "profile_feed",
          )) != null
            ? t
            : [];
      return e != null && n.includes(e);
    }
    function R() {
      return r("gkx")("15469")
        ? r("AdsPlacementCopy").POSITION_GROUP_MEDIA_RECOMMENDATION.SEARCH_GROUP
        : r("AdsPlacementCopy").POSITION_GROUP_MEDIA_RECOMMENDATION
            .IG_SEARCH_GRID;
    }
    function L() {
      return r("gkx")("15469") ? s("903715") : s("1000183");
    }
    function E() {
      return r("gkx")("15469")
        ? {
            placement: "search",
            squareAdsPreviewImage: s("903715"),
            verticalAdsPreviewImage: s("903716"),
          }
        : null;
    }
    function k() {
      return o(
        "AdsInstagramSearchAdsUtils",
      ).shouldEnableIGSearchFeedAdsInReelsChainCreation()
        ? r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION
            .IG_SEARCH_FEED_IN_REELS
        : r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION.IG_SEARCH_GRID;
    }
    function I() {
      return o(
        "AdsInstagramSearchAdsUtils",
      ).shouldEnableIGSearchFeedAdsInReelsChainCreation()
        ? s("869769")
        : s("428594");
    }
    function T() {
      return r("gkx")("5365")
        ? r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION
            .IG_EXPLORE_TALL_GRID
        : r("gkx")("21469")
          ? r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION
              .IG_EXPLORE_HOME_2_BY_2_DEPRECATION
          : r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION.IG_EXPLORE_HOME;
    }
    ((l.getIneligibilityReasonForIgFeedAndExplorePosition = d),
      (l.isEveryEligibleNonExclusivePositionActive = m),
      (l.isEligibleObjectiveForFeed = p),
      (l.isEligibleObjectiveForExplore = _),
      (l.isEligibleObjectiveForReels = f),
      (l.isEligibleObjectiveForProfileReels = g),
      (l.isEligibleBuyingTypeForInstagramShop = h),
      (l.isEligibleObjectiveForInstagramShop = y),
      (l.isUnsupportedOptimizationGoalForInstagramShop = C),
      (l.isEligibleObjectiveForInstagramExploreHome = b),
      (l.isUnsupportedOptimizationGoalForInstagramExploreHome = v),
      (l.isEligibleObjectiveForInstagramProfileFeed = S),
      (l.getSearchGroupMediaRecommendation = R),
      (l.getSearchGroupPlacementPreviewImage = L),
      (l.getSearchGroupPlacementSpecificPreviewInfo = E),
      (l.getInstagramSearchPositionMediaRecommendation = k),
      (l.getInstagramSearchPositionPlacementPreviewImage = I),
      (l.getInstagramExploreHomePositionMediaRecommendation = T));
  },
  98,
);
