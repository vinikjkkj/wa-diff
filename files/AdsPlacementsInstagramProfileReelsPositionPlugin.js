__d(
  "AdsPlacementsInstagramProfileReelsPositionPlugin",
  [
    "fbt",
    "ix",
    "AdCampaignDestination",
    "AdImageSpecCropKeys",
    "AdsAPIDevicePlatform",
    "AdsAPITargetFields",
    "AdsAccountUtils",
    "AdsBuyingTypes",
    "AdsBwIPlacementUtils",
    "AdsCampaignInstagramProfileReelsPositionValidator",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsInstagramProfileUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementConfigObjectiveEligibilityUtils",
    "AdsPlacementConfigOptimizationGoalEligibilityUtils",
    "AdsPlacementCopy",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementPositionLabelConstant",
    "AdsPromotedObjectTypes",
    "AdsReachFrequencyPlacementUtils",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "AdsUnifiedProfileVisitUtils",
    "IGAdsSensitiveVerticalsUtils",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = {
        type: "placements/position",
        key: "instagram/profile_reels",
        name: r("AdsPlacementPositionLabelConstant").profile_reels,
        nameWithPlatform: s._(/*BTDS*/ "Instagram profile reels"),
        mediaRecommendation: {
          copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION.IG_REELS,
          imageCrop: r("AdImageSpecCropKeys")["90x160"],
          videoCrop: "9:16",
        },
        apiPosition: "profile_reels",
        placementPreviewImage: u("397461"),
        platformKey: "instagram",
        adsetValidators: [
          r("AdsCampaignInstagramProfileReelsPositionValidator"),
        ],
        isEnabled: function () {
          return r("gkx")("21837");
        },
        getIneligibilityReason: function (n) {
          var t,
            a = o("AdsBwIPlacementUtils").getIneligibilityReason(n);
          if (a) return a;
          var i = o(
            "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
          ).getSOOBundleParentIneligibilityReason(e, n);
          if (i != null) return i;
          if (n.isReelsTrendingAds === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createReelsTrendingAdsReason();
          var l = n.buyingType,
            s = n.promotedObjectType,
            u = n.spec,
            c = o("AdsODAXUtils").maybeTranslateObjective(
              n.objective,
              s,
              n.optimizationGoal,
            );
          if (
            n.spec &&
            o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
              n.spec,
              r("AdsAPIDevicePlatform").CONNECTED_TV,
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(
              r("AdsAPIDevicePlatform").CONNECTED_TV,
            );
          if (n.promotedObjectType === r("AdsPromotedObjectTypes").REMINDER)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createReminderPromotionReason();
          if (n.promotedObjectType === r("AdsPromotedObjectTypes").IMAGINATION)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createImaginationReason();
          if (
            l !== r("AdsBuyingTypes").AUCTION &&
            l !== r("AdsBuyingTypes").RESERVED
          )
            return o("AdsPlacementIneligibilityReason").createBuyingTypeReason(
              l,
              e.key,
            );
          if (l === r("AdsBuyingTypes").RESERVED) {
            var d = o(
              "AdsReachFrequencyPlacementUtils",
            ).getReachFrequencyDisabledReason(
              "instagram/profile_reels",
              babelHelpers.extends({}, n, { objective: c }),
            );
            if (d !== null) return d;
          }
          var m = r("AdsAccountUtils").hasAnyCapabilityFromList(
            n.capabilities,
            ["ADS_TRUST_TIER_0_FULL", "ADS_TRUST_TIER_1"],
          );
          if (m)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createAdAccountTrustTierReason();
          var p = o(
            "AdsPlacementConfigObjectiveEligibilityUtils",
          ).getObjectiveIneligibilityReasonForPlacementType(
            "instagram",
            "profile_reels",
            n,
          );
          if (p != null) return p;
          var _ = o(
            "AdsPlacementConfigOptimizationGoalEligibilityUtils",
          ).getOptimizationGoalIneligibilityReasonForPlacementType(
            "instagram",
            "profile_reels",
            n,
            !0,
          );
          if (_ != null) return _;
          if (
            u.device_platforms &&
            !(
              (t = u.device_platforms) != null &&
              t.includes(r("AdsAPIDevicePlatform").MOBILE)
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(r("AdsAPIDevicePlatform").DESKTOP);
          if (s === r("AdsPromotedObjectTypes").DONATION)
            return o("AdsPlacementIneligibilityReason").createDonationReason();
          if (
            o(
              "AdsInstagramProfileUtils",
            ).getIsInstagramTrafficObjectiveAndMobileApp(c, s)
          )
            return o("AdsPlacementIneligibilityReason").createMobileAppReason();
          var f = n.destinationType;
          return o(
            "AdsUnifiedProfileVisitUtils",
          ).getIsIGPositionCondtionallyDisabledForUnifiedProfileVisits(
            c,
            s,
            f,
            n.optimizationGoal,
          )
            ? o(
                "AdsUnifiedProfileVisitUtils",
              ).getUnifiedProfileVisitsAdsPlacementIneligibilityReason(f)
            : n.destinationType === r("AdCampaignDestination").INSTAGRAM_LIVE
              ? o("AdsPlacementIneligibilityReason").createInstagramLiveReason()
              : null;
        },
        isActive: function (t) {
          return o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(
            t,
            "profile_reels",
          );
        },
        isInactiveByDefault: function (t) {
          return r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical;
        },
        getPreviews: function (t) {
          var e = ["previews/instagram_profile_reels"];
          return r("immutable").OrderedSet(e);
        },
        getDefaultPreview: function () {
          return "previews/instagram_profile_reels";
        },
        adsetReducer: function (t, n) {
          var e = n.action;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removeGroups.includes("instagram/profile_reels")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      t,
                      "instagram/profile_reels",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                      "instagram",
                    );
                  })
                : e.addGroups.includes("instagram/profile_reels")
                  ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        t,
                        "instagram/profile_reels",
                        e.eligibilityInformation,
                        r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                        "instagram",
                      );
                    })
                  : t;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(t, e.ids, function (t) {
                return o("AdsPlacementAPISpecWriterUtils").addGroup(
                  t,
                  e.pluginKey,
                  e.eligibilityInformation,
                  r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                  "instagram",
                );
              });
            case o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType:
              return o("AdsMutators").mutateEach(
                t,
                e.campaignIDs,
                function (t) {
                  return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                    t,
                    e.pluginKey,
                    e.eligibilityInformation,
                    r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                    "instagram",
                  );
                },
              );
          }
          return t;
        },
      },
      c = e;
    l.default = c;
  },
  226,
);
