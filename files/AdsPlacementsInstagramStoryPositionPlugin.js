__d(
  "AdsPlacementsInstagramStoryPositionPlugin",
  [
    "fbt",
    "ix",
    "AdCampaignDestination",
    "AdImageSpecCropKeys",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAPITargetFields",
    "AdsAppUrlUtils",
    "AdsBuyingTypes",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsInstagramAvailabilityUtils",
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
    "AdsVideoBuyingStoreUtils",
    "AdsWhatsAppPlacementUtils",
    "InstagramSpecificFormatInfo.react",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "gkx",
    "immutable",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react"));
    function d() {
      return r("gkx")("19623") ? u("947345") : u("556723");
    }
    var m = {
        type: "placements/position",
        key: "instagram/story",
        name: r("AdsPlacementPositionLabelConstant").story,
        nameWithPlatform: s._(/*BTDS*/ "Instagram Stories"),
        mediaRecommendation: {
          copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION.STORY,
          imageCrop: r("AdImageSpecCropKeys")["90x160"],
          videoCrop: "9:16",
        },
        apiPosition: "story",
        placementPreviewImage: d(),
        platformKey: "instagram",
        getPlacementSpecificPreviewInfo: function (t) {
          return {
            description: c.jsx(r("InstagramSpecificFormatInfo.react"), {}),
          };
        },
        isEnabled: function (t, n) {
          return !0;
        },
        getIneligibilityReason: function (t) {
          var e = o("AdsODAXUtils").maybeTranslateObjective(
              t.objective,
              t.promotedObjectType,
              t.optimizationGoal,
            ),
            n = o(
              "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
            ).getSOOBundleParentIneligibilityReason(m, t);
          if (n != null) return n;
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
          if (t.isReelsTrendingAds === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createReelsTrendingAdsReason();
          var a = o(
            "AdsPlacementConfigObjectiveEligibilityUtils",
          ).getObjectiveIneligibilityReasonForPlacementType(
            "instagram",
            "story",
            t,
          );
          if (a != null) return a;
          if (
            t.spec.device_platforms &&
            !t.spec.device_platforms.includes(r("AdsAPIDevicePlatform").MOBILE)
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(r("AdsAPIDevicePlatform").DESKTOP);
          var i = o(
            "AdsReachFrequencyPlacementUtils",
          ).getReachFrequencyDisabledReason(
            "instagram/story",
            babelHelpers.extends({}, t, { objective: e }),
          );
          if (i !== null) return i;
          if (t.promotedObjectType === r("AdsPromotedObjectTypes").CANVAS_APP)
            return o("AdsPlacementIneligibilityReason").createCanvasAppReason();
          var l = o(
            "AdsPlacementAPISpecReaderUtils",
          ).isOnlyActiveDevicePlatform(
            t.spec,
            r("AdsAPIDevicePlatform").MOBILE,
          );
          if (
            o("AdsWhatsAppPlacementUtils").isIneligibleForIGStory(
              babelHelpers.extends({}, t, { objective: e }),
              l,
            )
          )
            return o("AdsPlacementIneligibilityReason").createWhatsAppReason(
              t.objective,
            );
          if (
            !o(
              "AdsVideoBuyingStoreUtils",
            ).checkIfPlacementPositionValidForBuyingOption(
              babelHelpers.extends({}, t, { objective: e }),
              "story",
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createOptimizationGoalReason();
          if (t.containsOffer === !0)
            return o("AdsPlacementIneligibilityReason").createOfferOptionReason(
              t.objective,
            );
          if (t.directInstallDevices === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDirectInstallReason();
          if (r("AdsAppUrlUtils").isWindowsURL(t.objectStoreURL))
            return o(
              "AdsPlacementIneligibilityReason",
            ).createWindowsAppReason();
          if (r("AdsAppUrlUtils").isInstantGameURL(t.objectStoreURL))
            return o(
              "AdsPlacementIneligibilityReason",
            ).createInstantGameReason();
          if (
            e === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
            (t.optimizationGoal === r("AdsAPIOptimizationGoals").REPLIES ||
              t.optimizationGoal ===
                r("AdsAPIOptimizationGoals").CONVERSATIONS ||
              t.optimizationGoal === r("AdsAPIOptimizationGoals").QUALITY_CALL)
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createOptimizationGoalReason();
          var s = o(
            "AdsPlacementConfigOptimizationGoalEligibilityUtils",
          ).getOptimizationGoalIneligibilityReasonForPlacementType(
            "instagram",
            "story",
            t,
            !0,
          );
          return s != null
            ? s
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
                    : o(
                          "AdsUnifiedProfileVisitUtils",
                        ).getIsIGPositionCondtionallyDisabledForUnifiedProfileVisits(
                          e,
                          t.promotedObjectType,
                          t.destinationType,
                          t.optimizationGoal,
                        )
                      ? o(
                          "AdsUnifiedProfileVisitUtils",
                        ).getUnifiedProfileVisitsAdsPlacementIneligibilityReason(
                          t.destinationType,
                        )
                      : null;
        },
        isInactiveByDefault: function (t) {
          var e = o("AdsODAXUtils").maybeTranslateObjective(
            t.objective,
            t.promotedObjectType,
            t.optimizationGoal,
          );
          return (
            t.buyingType === r("AdsBuyingTypes").AUCTION &&
            !o("AdsInstagramAvailabilityUtils").supportsObjective(
              e,
              t.capabilities,
            )
          );
        },
        isActive: function (t) {
          return o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(
            t,
            "story",
          );
        },
        getPreviews: function (t) {
          var e = ["previews/instagram_story"],
            n = o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
              t.spec,
              r("AdsAPIDevicePlatform").DESKTOP,
            );
          return (
            n && e.push("previews/instagram_web_story"),
            r("immutable").OrderedSet(e)
          );
        },
        getDefaultPreview: function (t) {
          var e = o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
              t.spec,
              r("AdsAPIDevicePlatform").MOBILE,
            ),
            n = o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
              t.spec,
              r("AdsAPIDevicePlatform").DESKTOP,
            );
          return n && !e
            ? "previews/instagram_web_story"
            : "previews/instagram_story";
        },
        adsetReducer: function (t, n) {
          var e = n.action;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removeGroups.includes("instagram/story")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      t,
                      "instagram/story",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                      "instagram",
                    );
                  })
                : e.addGroups.includes("instagram/story")
                  ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        t,
                        "instagram/story",
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
      p = m;
    l.default = p;
  },
  226,
);
