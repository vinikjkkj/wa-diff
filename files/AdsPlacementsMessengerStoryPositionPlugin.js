__d(
  "AdsPlacementsMessengerStoryPositionPlugin",
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
    "AdsBwIPlacementUtils",
    "AdsCampaignMessengerStoryPositionValidator",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsClickToCallAdsUtils",
    "AdsInstagramLeadGenPlacementUtils",
    "AdsInstagramPlacementUtils",
    "AdsManagerIGLoginUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecReaderUtilsShared",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementCopy",
    "AdsPlacementEligibilityInfoUtils",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementOmnichannelUtils",
    "AdsPromotedObjectTypes",
    "AdsReachFrequencyPlacementUtils",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "AdsUnifiedProfileVisitUtils",
    "AdsVideoBuyingStoreUtils",
    "AdsWhatsAppPlacementUtils",
    "IOS14Utils",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "gkx",
    "igAccessAdsManagerUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = r("immutable").Set([
        (e = r("AdsAPIObjectives")).LINK_CLICKS,
        e.CONVERSIONS,
        e.MESSAGES,
        e.APP_INSTALLS,
        e.WILDCARD_INTERNAL_ONLY,
        e.MOBILE_APP_INSTALLS,
        e.REACH,
        e.BRAND_AWARENESS,
        e.VIDEO_VIEWS,
      ]);
    function d(e) {
      return e.hasRecentMessengerStoryAdPlacement === !0 && r("gkx")("26562");
    }
    var m = {
        type: "placements/position",
        key: "messenger/story",
        name: s._(/*BTDS*/ "Stories"),
        nameWithPlatform: s._(/*BTDS*/ "Messenger Stories"),
        mediaRecommendation: {
          copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION.STORY,
          imageCrop: r("AdImageSpecCropKeys")["90x160"],
          videoCrop: "9:16",
        },
        apiPosition: "story",
        placementImage: u("676355"),
        placementPreviewImage: u("676355"),
        platformKey: "messenger",
        isEnabled: function (t) {
          return !0;
        },
        isInactiveByDefault: function (t) {
          var e = o("AdsODAXUtils").maybeTranslateObjective(
              t.objective,
              t.promotedObjectType,
              t.optimizationGoal,
            ),
            n =
              e === r("AdsAPIObjectives").LEAD_GENERATION &&
              t.promotedObjectType === r("AdsPromotedObjectTypes").MESSENGER,
            a = e === r("AdsAPIObjectives").VIDEO_VIEWS;
          return e === r("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY
            ? !1
            : e !== r("AdsAPIObjectives").CONVERSIONS &&
                !(
                  e === r("AdsAPIObjectives").APP_INSTALLS ||
                  e === r("AdsAPIObjectives").MOBILE_APP_INSTALLS
                ) &&
                e !== r("AdsAPIObjectives").LINK_CLICKS &&
                e !== r("AdsAPIObjectives").BRAND_AWARENESS &&
                e !== r("AdsAPIObjectives").MESSAGES &&
                !a &&
                !n;
        },
        getIneligibilityReason: function (t) {
          var e,
            n = o("AdsBwIPlacementUtils").getIneligibilityReason(t);
          if (n) return n;
          var a = o(
            "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
          ).getSOOBundleParentIneligibilityReason(m, t);
          if (a != null) return a;
          if (t.isReelsTrendingAds === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createReelsTrendingAdsReason();
          var i = o("AdsODAXUtils").maybeTranslateObjective(
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
          var l = r("IOS14Utils").isIOS14AdAccount(t.account);
          if (l)
            return o("AdsPlacementIneligibilityReason").createIOS14Reason();
          if (
            !c.includes(i) &&
            (i !== r("AdsAPIObjectives").LEAD_GENERATION ||
              t.promotedObjectType !== r("AdsPromotedObjectTypes").MESSENGER)
          )
            return o("AdsPlacementIneligibilityReason").createObjectiveReason(
              t.objective,
            );
          if (
            !o(
              "AdsVideoBuyingStoreUtils",
            ).checkIfPlacementPositionValidForBuyingOption(
              babelHelpers.extends({}, t, { objective: i }),
              "messenger_stories",
            ) ||
            t.optimizationGoal ===
              r("AdsAPIOptimizationGoals").INCREMENTAL_OFFSITE_CONVERSIONS
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createOptimizationGoalReason();
          if (t.containsOffer === !0)
            return o("AdsPlacementIneligibilityReason").createOfferOptionReason(
              t.objective,
            );
          if (
            o("AdsPlacementOmnichannelUtils").isIneligibleForOmnichannelAd(
              babelHelpers.extends({}, t, { objective: i }),
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createOmnichannelReason();
          if (
            i === r("AdsAPIObjectives").APP_INSTALLS &&
            t.promotedObjectType === r("AdsPromotedObjectTypes").CANVAS_APP
          )
            return o("AdsPlacementIneligibilityReason").createCanvasAppReason();
          if (
            o(
              "AdsPlacementEligibilityInfoUtils",
            ).isIneligibleWithMobileOnlyObjectives(
              babelHelpers.extends({}, t, { objective: i }),
            ) ||
            (t.spec.device_platforms &&
              !t.spec.device_platforms.includes(
                r("AdsAPIDevicePlatform").MOBILE,
              ))
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(r("AdsAPIDevicePlatform").DESKTOP);
          if (r("AdsAppUrlUtils").isWindowsURL(t.objectStoreURL))
            return o(
              "AdsPlacementIneligibilityReason",
            ).createWindowsAppReason();
          var u = o(
            "AdsReachFrequencyPlacementUtils",
          ).getReachFrequencyDisabledReason(
            "messenger/story",
            babelHelpers.extends({}, t, { objective: i }),
          );
          return u !== null
            ? u
            : o("AdsWhatsAppPlacementUtils").isIneligibleForMessengerStory(
                  babelHelpers.extends({}, t, { objective: i }),
                )
              ? o("AdsPlacementIneligibilityReason").createWhatsAppReason(
                  t.objective,
                )
              : o("AdsManagerIGLoginUtils").getIsIGLogin(t.account) &&
                  !o("igAccessAdsManagerUtils").isIGAccessParityEnabled()
                ? o("AdsPlacementIneligibilityReason").createIGLoginReason()
                : o(
                      "AdsUnifiedProfileVisitUtils",
                    ).getIsPositionAlwaysDisabledForProfileVisits(
                      i,
                      t.promotedObjectType,
                    )
                  ? o(
                      "AdsUnifiedProfileVisitUtils",
                    ).getUnifiedProfileVisitsAdsPlacementIneligibilityReason(
                      t.destinationType,
                    )
                  : o(
                        "AdsInstagramPlacementUtils",
                      ).isInstagramDestinationEnabledAndSelected(
                        babelHelpers.extends({}, t, { objective: i }),
                      ) ||
                      (t.promotedObjectType ===
                        r("AdsPromotedObjectTypes").INSTAGRAM &&
                        (i === r("AdsAPIObjectives").CONVERSIONS ||
                          t.objective === r("AdsAPIObjectives").LINK_CLICKS))
                    ? o(
                        "AdsPlacementIneligibilityReason",
                      ).createInstagramDirectReason(t.objective)
                    : o(
                          "AdsInstagramLeadGenPlacementUtils",
                        ).isInstagramLeadGenDestinationSelected(
                          babelHelpers.extends({}, t, { objective: i }),
                        )
                      ? o(
                          "AdsPlacementIneligibilityReason",
                        ).createInstagramLeadGenReason(t.objective)
                      : t.directInstallDevices === !0
                        ? o(
                            "AdsPlacementIneligibilityReason",
                          ).createDirectInstallReason()
                        : t.containsDCO === !0
                          ? o(
                              "AdsPlacementIneligibilityReason",
                            ).createDCOReason()
                          : t.promotedObjectType ===
                              r("AdsPromotedObjectTypes").DONATION
                            ? o(
                                "AdsPlacementIneligibilityReason",
                              ).createDonationReason()
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
                                      r("AdCampaignDestination").INSTAGRAM_LIVE
                                    ? o(
                                        "AdsPlacementIneligibilityReason",
                                      ).createInstagramLiveReason()
                                    : t.destinationType ===
                                        r("AdCampaignDestination").FACEBOOK_LIVE
                                      ? o(
                                          "AdsPlacementIneligibilityReason",
                                        ).createFacebookLiveReason()
                                      : (e = t.isClickToMPAds) != null && e
                                        ? o(
                                            "AdsPlacementIneligibilityReason",
                                          ).createGenericReason()
                                        : o(
                                              "AdsClickToCallAdsUtils",
                                            ).getIsCallAdsNewOptimizationUnderTrafficObjective(
                                              babelHelpers.extends({}, t, {
                                                objective: i,
                                              }),
                                            )
                                          ? o(
                                              "AdsPlacementIneligibilityReason",
                                            ).createPhoneCallTrafficReason()
                                          : o(
                                                "AdsClickToCallAdsUtils",
                                              ).getIsClickToCallAdsUnderLeadGenObjective(
                                                babelHelpers.extends({}, t, {
                                                  objective: i,
                                                }),
                                              )
                                            ? o(
                                                "AdsPlacementIneligibilityReason",
                                              ).createPhoneCallLeadReason()
                                            : o(
                                                  "AdsClickToCallAdsUtils",
                                                ).getIsClickToCallAdsUnderConversionsOrSalesObjective(
                                                  babelHelpers.extends({}, t, {
                                                    objective: i,
                                                  }),
                                                )
                                              ? o(
                                                  "AdsPlacementIneligibilityReason",
                                                ).createPhoneCallConversionsOrSalesReason()
                                              : r(
                                                    "AdsAppUrlUtils",
                                                  ).isInstantGameURL(
                                                    t.objectStoreURL,
                                                  )
                                                ? o(
                                                    "AdsPlacementIneligibilityReason",
                                                  ).createInstantGameReason()
                                                : d(t)
                                                  ? o(
                                                      "AdsPlacementIneligibilityReason",
                                                    ).createCustomReason(
                                                      s._(
                                                        /*BTDS*/ "This placement is no longer available.",
                                                      ),
                                                    )
                                                  : null;
        },
        isActive: function (t) {
          return o(
            "AdsPlacementAPISpecReaderUtilsShared",
          ).isActiveMessengerPosition(t, "story");
        },
        adsetValidators: [r("AdsCampaignMessengerStoryPositionValidator")],
        adsetReducer: function (t, n) {
          var e = n.action;
          if (!m.isEnabled(e.eligibilityInformation.capabilities)) return t;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removeGroups.includes("messenger/story")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return d(e.eligibilityInformation)
                      ? o("AdsPlacementAPISpecWriterUtils").removeGroupAnyway(
                          t,
                          "messenger/story",
                          e.eligibilityInformation,
                          r("AdsAPITargetFields").MESSENGER_POSITIONS,
                          "messenger",
                        )
                      : o("AdsPlacementAPISpecWriterUtils").removeGroup(
                          t,
                          "messenger/story",
                          e.eligibilityInformation,
                          r("AdsAPITargetFields").MESSENGER_POSITIONS,
                          "messenger",
                        );
                  })
                : e.addGroups.includes("messenger/story")
                  ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        t,
                        "messenger/story",
                        e.eligibilityInformation,
                        r("AdsAPITargetFields").MESSENGER_POSITIONS,
                        "messenger",
                      );
                    })
                  : t;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(t, e.ids, function (t) {
                return o("AdsPlacementAPISpecWriterUtils").addGroup(
                  t,
                  e.pluginKey,
                  e.eligibilityInformation,
                  r("AdsAPITargetFields").MESSENGER_POSITIONS,
                  "messenger",
                );
              });
            case o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType:
              return o("AdsMutators").mutateEach(
                t,
                e.campaignIDs,
                function (t) {
                  return e.pluginKey === "messenger/story" &&
                    d(e.eligibilityInformation)
                    ? o("AdsPlacementAPISpecWriterUtils").removeGroupAnyway(
                        t,
                        e.pluginKey,
                        e.eligibilityInformation,
                        r("AdsAPITargetFields").MESSENGER_POSITIONS,
                        "messenger",
                      )
                    : o("AdsPlacementAPISpecWriterUtils").removeGroup(
                        t,
                        e.pluginKey,
                        e.eligibilityInformation,
                        r("AdsAPITargetFields").MESSENGER_POSITIONS,
                        "messenger",
                      );
                },
              );
          }
          return t;
        },
        getPreviews: function (t) {
          var e = [],
            n = o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
              t.spec,
              r("AdsAPIDevicePlatform").MOBILE,
            );
          return (
            n && e.push("previews/messenger_mobile_story_media"),
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
            return "previews/messenger_mobile_story_media";
        },
      },
      p = m;
    l.default = p;
  },
  226,
);
