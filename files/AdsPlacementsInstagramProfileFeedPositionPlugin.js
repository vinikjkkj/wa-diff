__d(
  "AdsPlacementsInstagramProfileFeedPositionPlugin",
  [
    "fbt",
    "ix",
    "AdCampaignDestination",
    "AdImageSpecCropKeys",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAPITargetFields",
    "AdsAccountUtils",
    "AdsBuyingTypes",
    "AdsBwIPlacementUtils",
    "AdsCampaignInstagramProfileFeedPositionValidator",
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
    "AdsPlacementInstagramPositionPluginUtils",
    "AdsPlacementPositionLabelConstant",
    "AdsPromotedObjectTypes",
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
    function e() {
      return r("gkx")("19623") ? u("947342") : u("277826");
    }
    var c = {
        type: "placements/position",
        key: "instagram/profile_feed",
        name: r("AdsPlacementPositionLabelConstant").profile_feed,
        nameWithPlatform: s._(/*BTDS*/ "Instagram profile feed"),
        adsetValidators: [
          r("AdsCampaignInstagramProfileFeedPositionValidator"),
        ],
        apiPosition: "profile_feed",
        mediaRecommendation: {
          copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION
            .IG_PROFILE_FEED,
          imageCrop: r("AdImageSpecCropKeys")["100x100"],
          videoCrop: "1:1",
        },
        placementPreviewImage: e(),
        platformKey: "instagram",
        parentPlacements: r("immutable").OrderedSet(["instagram/stream"]),
        childPlacements: r("immutable").OrderedSet([]),
        isEnabled: function (t) {
          return r("AdsAccountUtils").hasCapabilityFromList(
            t,
            "IS_IN_SENSITIVE_ADVERTISER_VERTICAL_FOR_PROFILE_FEED",
          )
            ? !1
            : r("gkx")("21833") ||
                r("AdsAccountUtils").hasCapabilityFromList(
                  t,
                  "CAN_USE_IG_PROFILE_FEED_POSITION",
                );
        },
        getIneligibilityReason: function (t) {
          var e,
            n = o("AdsBwIPlacementUtils").getIneligibilityReason(t);
          if (n) return n;
          if (t.isReelsTrendingAds === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createReelsTrendingAdsReason();
          var a = o("AdsODAXUtils").maybeTranslateObjective(
            t.objective,
            t.promotedObjectType,
            t.optimizationGoal,
          );
          if (
            t.spec &&
            o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
              t.spec,
              r("AdsAPIDevicePlatform").CONNECTED_TV,
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(
              r("AdsAPIDevicePlatform").CONNECTED_TV,
            );
          var i = r("AdsAccountUtils").hasCapabilityFromList(
            t.capabilities,
            "ADS_TRUST_TIER_0_FULL",
          );
          if (i)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createAdAccountTrustTierReason();
          var l = o(
            "AdsPlacementConfigObjectiveEligibilityUtils",
          ).getObjectiveIneligibilityReasonForPlacementType(
            "instagram",
            "profile_feed",
            t,
            !0,
          );
          if (l !== null) return l;
          var s = o(
            "AdsPlacementConfigOptimizationGoalEligibilityUtils",
          ).getOptimizationGoalIneligibilityReasonForPlacementType(
            "instagram",
            "profile_feed",
            t,
            !0,
          );
          if (s != null) return s;
          var u = t.buyingType,
            d = t.spec;
          if (
            d.device_platforms &&
            !(
              (e = d.device_platforms) != null &&
              e.includes(r("AdsAPIDevicePlatform").MOBILE)
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(r("AdsAPIDevicePlatform").DESKTOP);
          if (u !== r("AdsBuyingTypes").AUCTION)
            return o("AdsPlacementIneligibilityReason").createBuyingTypeReason(
              u,
              c.key,
            );
          if (t.promotedObjectType === r("AdsPromotedObjectTypes").DONATION)
            return o("AdsPlacementIneligibilityReason").createDonationReason();
          if (t.promotedObjectType === r("AdsPromotedObjectTypes").GROUP)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createGroupPromotionReason();
          if (t.promotedObjectType === r("AdsPromotedObjectTypes").IMAGINATION)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createImaginationReason();
          if (t.promotedObjectType === r("AdsPromotedObjectTypes").REMINDER)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createReminderPromotionReason();
          if (
            t.objective === r("AdsAPIObjectives").APP_INSTALLS &&
            t.promotedObjectType === r("AdsPromotedObjectTypes").CANVAS_APP
          )
            return o("AdsPlacementIneligibilityReason").createCanvasAppReason();
          if (
            a === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
            t.optimizationGoal === r("AdsAPIOptimizationGoals").QUALITY_CALL
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createOptimizationGoalReason();
          if (t.destinationType === r("AdCampaignDestination").FACEBOOK_LIVE)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createFacebookLiveReason();
          if (
            o(
              "AdsInstagramProfileUtils",
            ).getIsInstagramTrafficObjectiveAndMobileApp(
              a,
              t.promotedObjectType,
            )
          )
            return o("AdsPlacementIneligibilityReason").createMobileAppReason();
          if (
            o(
              "AdsUnifiedProfileVisitUtils",
            ).getIsIGPositionCondtionallyDisabledForUnifiedProfileVisits(
              a,
              t.promotedObjectType,
              t.destinationType,
              t.optimizationGoal,
            )
          )
            return o(
              "AdsUnifiedProfileVisitUtils",
            ).getUnifiedProfileVisitsAdsPlacementIneligibilityReason(
              t.destinationType,
            );
          if (t.destinationType === r("AdCampaignDestination").INSTAGRAM_LIVE)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createInstagramLiveReason();
          var m = o(
            "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
          ).getSOOBundleParentIneligibilityReason(c, t);
          return m != null ? m : null;
        },
        isActive: function (t) {
          return o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(
            t,
            "profile_feed",
          );
        },
        isInactiveByDefault: function (t) {
          if (
            !r("AdsAccountUtils").hasCapabilityFromList(
              t.capabilities,
              "CAN_USE_IG_PROFILE_FEED_POSITION",
            ) ||
            r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
          )
            return !0;
          var e = o("AdsODAXUtils").maybeTranslateObjective(
            t.objective,
            t.promotedObjectType,
            t.optimizationGoal,
          );
          return !o(
            "AdsPlacementInstagramPositionPluginUtils",
          ).isEligibleObjectiveForInstagramProfileFeed(e);
        },
        getPreviews: function (t) {
          var e = ["previews/instagram_profile_feed"];
          return r("immutable").OrderedSet(e);
        },
        getDefaultPreview: function () {
          return "previews/instagram_profile_feed";
        },
        adsetReducer: function (t, n) {
          var e = n.action;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removeGroups.includes("instagram/profile_feed")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      t,
                      "instagram/profile_feed",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                      "instagram",
                    );
                  })
                : e.addGroups.includes("instagram/profile_feed")
                  ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        t,
                        "instagram/profile_feed",
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
      d = c;
    l.default = d;
  },
  226,
);
