__d(
  "AdsPlacementsFacebookStoryPositionPlugin",
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
    "AdsAppUrlUtils",
    "AdsAppUtils",
    "AdsCampaignFacebookStoryPositionValidator",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsClickToCallAdsUtils",
    "AdsInstagramLeadGenPlacementUtils",
    "AdsInstagramPlacementUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
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
    "ClickToMessageCTDFeatureGating",
    "adsIGLoginPlacementUtils",
    "adsPlacementAPISpecReaderIsActiveFacebookPosition",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c,
      d = [
        (c = r("AdsAPIObjectives")).BRAND_AWARENESS,
        c.STORE_VISITS,
        c.WILDCARD_INTERNAL_ONLY,
        c.MESSAGES,
      ],
      m = [
        c.APP_INSTALLS,
        c.CONVERSIONS,
        c.LEAD_GENERATION,
        c.LINK_CLICKS,
        c.MOBILE_APP_INSTALLS,
        c.REACH,
        c.OUTCOME_AWARENESS,
        c.VIDEO_VIEWS,
        c.PRODUCT_CATALOG_SALES,
        c.POST_ENGAGEMENT,
      ],
      p =
        ((e = {}),
        (e[c.LINK_CLICKS] = "ENABLE_LINK_CLICKS_FOR_FB_STORY_ADS"),
        (e[c.REACH] = "ENABLE_REACH_FOR_FB_STORY_ADS"),
        (e[c.OUTCOME_AWARENESS] = "ENABLE_REACH_FOR_FB_STORY_ADS"),
        (e[c.VIDEO_VIEWS] = "ENABLE_VIDEO_VIEWS_FOR_FB_STORY_ADS"),
        (e[c.CONVERSIONS] = "ENABLE_WEBSITE_CONVERSIONS_FOR_FB_STORY_ADS"),
        (e[c.APP_INSTALLS] = "ENABLE_MOBILE_APP_INSTALLS_FOR_FB_STORY_ADS"),
        (e[c.MOBILE_APP_INSTALLS] =
          "ENABLE_MOBILE_APP_INSTALLS_FOR_FB_STORY_ADS"),
        (e[c.LEAD_GENERATION] = "ENABLE_LEAD_GEN_FOR_FB_STORY_ADS"),
        (e[c.PRODUCT_CATALOG_SALES] = "ENBABLE_CATALOG_SALES_FOR_FB_STORY"),
        (e[c.POST_ENGAGEMENT] = "ENABLE_POST_ENGAGEMENT_FOR_FB_STORY"),
        e),
      _ = {
        type: "placements/position",
        key: "facebook/stories",
        name: r("AdsPlacementPositionLabelConstant").story,
        nameWithPlatform: s._(/*BTDS*/ "Facebook Stories"),
        mediaRecommendation: {
          copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION.STORY,
          imageCrop: r("AdImageSpecCropKeys")["90x160"],
          videoCrop: "9:16",
        },
        apiPosition: "story",
        placementImage: u("1000168"),
        placementPreviewImage: u("1000168"),
        platformKey: "facebook",
        isEnabled: function (t) {
          return !0;
        },
        getIneligibilityReason: function (t) {
          var e = o(
            "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
          ).getSOOBundleParentIneligibilityReason(_, t);
          if (e != null) return e;
          var n = o("AdsODAXUtils").maybeTranslateObjective(
            t.objective,
            t.promotedObjectType,
            t.optimizationGoal,
          );
          if (t.isReelsTrendingAds === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createReelsTrendingAdsReason();
          var a = o(
            "AdsReachFrequencyPlacementUtils",
          ).getReachFrequencyDisabledReason("facebook/stories", t);
          if (a !== null) return a;
          var i = r("AdsAppUtils").isAppEngagementObjective(
            n,
            t.promotedObjectType,
          );
          if (
            i &&
            !r("AdsAccountUtils").hasCapabilityFromList(
              t.capabilities,
              "ENABLE_MOBILE_APP_ENGAGEMENT_FOR_FB_STORY_ADS",
            )
          )
            return o("AdsPlacementIneligibilityReason").createMobileAppReason();
          var l = m.filter(function (e) {
            var n = p[e];
            return n != null
              ? r("AdsAccountUtils").hasCapabilityFromList(t.capabilities, n)
              : !1;
          });
          if (
            (n === r("AdsAPIObjectives").PAGE_LIKES &&
              l.push(r("AdsAPIObjectives").PAGE_LIKES),
            t.spec &&
              o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
                t.spec,
                r("AdsAPIDevicePlatform").CONNECTED_TV,
              ))
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(
              r("AdsAPIDevicePlatform").CONNECTED_TV,
            );
          if (!d.includes(n) && !l.includes(n))
            return o("AdsPlacementIneligibilityReason").createObjectiveReason(
              t.objective,
            );
          if (
            o(
              "AdsClickToCallAdsUtils",
            ).getIsClickToCallAdsUnderLeadGenObjective(
              babelHelpers.extends({}, t, { objective: n }),
            ) &&
            !r("gkx")("3223")
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createPhoneCallLeadReason();
          if (
            o(
              "AdsClickToCallAdsUtils",
            ).getIsCallAdsNewOptimizationUnderTrafficObjective(
              babelHelpers.extends({}, t, { objective: n }),
            ) &&
            !r("gkx")("3223")
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createPhoneCallTrafficReason();
          if (
            o(
              "AdsClickToCallAdsUtils",
            ).getIsClickToCallAdsUnderConversionsOrSalesObjective(
              babelHelpers.extends({}, t, { objective: n }),
            ) &&
            !r("gkx")("3223")
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createPhoneCallConversionsOrSalesReason();
          if (
            t.containsDCO === !0 &&
            !r("AdsAccountUtils").hasCapabilityFromList(
              t.capabilities,
              "ENABLE_DCO_FOR_FB_STORY_ADS",
            )
          )
            return o("AdsPlacementIneligibilityReason").createDCOReason();
          if (t.destinationType === r("AdCampaignDestination").INSTAGRAM_LIVE)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createInstagramLiveReason();
          if (t.containsOffer === !0)
            return o("AdsPlacementIneligibilityReason").createOfferOptionReason(
              t.objective,
            );
          if (
            t.spec.device_platforms &&
            !t.spec.device_platforms.includes(r("AdsAPIDevicePlatform").MOBILE)
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(r("AdsAPIDevicePlatform").DESKTOP);
          if (
            !o(
              "AdsVideoBuyingStoreUtils",
            ).checkIfPlacementPositionValidForBuyingOption(t, "FB_stories") ||
            (t.optimizationGoal ===
              r("AdsAPIOptimizationGoals").INCREMENTAL_OFFSITE_CONVERSIONS &&
              n !== r("AdsAPIObjectives").CONVERSIONS) ||
            (n === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
              (t.optimizationGoal === r("AdsAPIOptimizationGoals").REPLIES ||
                t.optimizationGoal ===
                  r("AdsAPIOptimizationGoals").CONVERSATIONS))
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createOptimizationGoalReason();
          if (r("AdsAppUrlUtils").isInstantGameURL(t.objectStoreURL))
            return o(
              "AdsPlacementIneligibilityReason",
            ).createInstantGameReason();
          var s = o(
            "AdsPlacementAPISpecReaderUtils",
          ).isOnlyActiveDevicePlatform(
            t.spec,
            r("AdsAPIDevicePlatform").MOBILE,
          );
          return o("AdsWhatsAppPlacementUtils").isIneligibleForFBStory(
            babelHelpers.extends({}, t, { objective: n }),
            s,
          )
            ? o("AdsPlacementIneligibilityReason").createWhatsAppReason(
                t.objective,
              )
            : o(
                  "AdsInstagramPlacementUtils",
                ).isInstagramDestinationEnabledAndSelected(
                  babelHelpers.extends({}, t, { objective: n }),
                ) &&
                !o(
                  "ClickToMessageCTDFeatureGating",
                ).isFBPlacementsEnabledForCTD()
              ? o(
                  "AdsPlacementIneligibilityReason",
                ).createInstagramDirectReason(t.objective)
              : o(
                    "AdsInstagramLeadGenPlacementUtils",
                  ).isInstagramLeadGenDestinationSelected(
                    babelHelpers.extends({}, t, { objective: n }),
                  )
                ? o(
                    "AdsPlacementIneligibilityReason",
                  ).createInstagramLeadGenReason(t.objective)
                : t.promotedObjectType === r("AdsPromotedObjectTypes").DONATION
                  ? o("AdsPlacementIneligibilityReason").createDonationReason()
                  : o(
                        "adsIGLoginPlacementUtils",
                      ).getShouldDisableFBPlacementForIGLoginUsers(t.account)
                    ? o("AdsPlacementIneligibilityReason").createIGLoginReason()
                    : o(
                          "AdsUnifiedProfileVisitUtils",
                        ).getIsFBPositionConditionallyDisabledForProfileVisits(
                          n,
                          t.promotedObjectType,
                          t.destinationType,
                          "story",
                        )
                      ? o(
                          "AdsUnifiedProfileVisitUtils",
                        ).getUnifiedProfileVisitsAdsPlacementIneligibilityReason(
                          t.destinationType,
                        )
                      : t.promotedObjectType ===
                          r("AdsPromotedObjectTypes").GROUP
                        ? o(
                            "AdsPlacementIneligibilityReason",
                          ).createGroupPromotionReason()
                        : t.promotedObjectType ===
                            r("AdsPromotedObjectTypes").IMAGINATION
                          ? o(
                              "AdsPlacementIneligibilityReason",
                            ).createImaginationReason()
                          : t.promotedObjectType ===
                              r("AdsPromotedObjectTypes").REMINDER
                            ? o(
                                "AdsPlacementIneligibilityReason",
                              ).createReminderPromotionReason()
                            : t.destinationType ===
                                r("AdCampaignDestination").FACEBOOK_LIVE
                              ? o(
                                  "AdsPlacementIneligibilityReason",
                                ).createFacebookLiveReason()
                              : t.objective ===
                                    r("AdsAPIObjectives").APP_INSTALLS &&
                                  t.promotedObjectType ===
                                    r("AdsPromotedObjectTypes").CANVAS_APP
                                ? o(
                                    "AdsPlacementIneligibilityReason",
                                  ).createCanvasAppReason()
                                : null;
        },
        isActive: function (t) {
          return r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
            t,
            "story",
          );
        },
        isInactiveByDefault: function (t) {
          return t.isReelsTrendingAds === !0;
        },
        getPreviews: function (t) {
          var e = [],
            n = o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
              t.spec,
              r("AdsAPIDevicePlatform").MOBILE,
            );
          return (
            n && e.push("previews/facebook_story"),
            r("immutable").OrderedSet(e)
          );
        },
        getDefaultPreview: function (t) {
          if (
            o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
              t.spec,
              r("AdsAPIDevicePlatform").MOBILE,
            )
          )
            return "previews/facebook_story";
        },
        adsetValidators: [r("AdsCampaignFacebookStoryPositionValidator")],
        adsetReducer: function (t, n) {
          var e = n.action;
          if (!_.isEnabled(e.eligibilityInformation.capabilities)) return t;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removeGroups.includes("facebook/stories")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      t,
                      "facebook/stories",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                      "facebook",
                    );
                  })
                : e.addGroups.includes("facebook/stories")
                  ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        t,
                        "facebook/stories",
                        e.eligibilityInformation,
                        r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                        "facebook",
                      );
                    })
                  : t;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(t, e.ids, function (t) {
                return o("AdsPlacementAPISpecWriterUtils").addGroup(
                  t,
                  e.pluginKey,
                  e.eligibilityInformation,
                  r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                  "facebook",
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
                    r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                    "facebook",
                  );
                },
              );
          }
          return t;
        },
      },
      f = _;
    l.default = f;
  },
  226,
);
