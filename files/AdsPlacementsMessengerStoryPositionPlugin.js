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
      switch (e) {
        case r("AdsPromotedObjectTypes").DONATION:
          return o("AdsPlacementIneligibilityReason").createDonationReason();
        case r("AdsPromotedObjectTypes").GROUP:
          return o(
            "AdsPlacementIneligibilityReason",
          ).createGroupPromotionReason();
        case r("AdsPromotedObjectTypes").IMAGINATION:
          return o("AdsPlacementIneligibilityReason").createImaginationReason();
        case r("AdsPromotedObjectTypes").REMINDER:
          return o(
            "AdsPlacementIneligibilityReason",
          ).createReminderPromotionReason();
        default:
          return null;
      }
    }
    function m(e, t) {
      var n;
      return (n = e.isClickToMPAds) != null && n
        ? o("AdsPlacementIneligibilityReason").createGenericReason()
        : o(
              "AdsClickToCallAdsUtils",
            ).getIsCallAdsNewOptimizationUnderTrafficObjective(
              babelHelpers.extends({}, e, { objective: t }),
            )
          ? o("AdsPlacementIneligibilityReason").createPhoneCallTrafficReason()
          : o(
                "AdsClickToCallAdsUtils",
              ).getIsClickToCallAdsUnderLeadGenObjective(
                babelHelpers.extends({}, e, { objective: t }),
              )
            ? o("AdsPlacementIneligibilityReason").createPhoneCallLeadReason()
            : o(
                  "AdsClickToCallAdsUtils",
                ).getIsClickToCallAdsUnderConversionsOrSalesObjective(
                  babelHelpers.extends({}, e, { objective: t }),
                )
              ? o(
                  "AdsPlacementIneligibilityReason",
                ).createPhoneCallConversionsOrSalesReason()
              : null;
    }
    var p = {
        type: "placements/position",
        key: "messenger/story",
        name: s._(/*BTDS*/ ""),
        nameWithPlatform: s._(/*BTDS*/ ""),
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
        shouldHideInPlacementUI: function (t) {
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
          var e = o("AdsBwIPlacementUtils").getIneligibilityReason(t);
          if (e) return e;
          var n = o(
            "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
          ).getSOOBundleParentIneligibilityReason(p, t);
          if (n != null) return n;
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
          var i = r("IOS14Utils").isIOS14AdAccount(t.account);
          if (i)
            return o("AdsPlacementIneligibilityReason").createIOS14Reason();
          if (
            !c.includes(a) &&
            (a !== r("AdsAPIObjectives").LEAD_GENERATION ||
              t.promotedObjectType !== r("AdsPromotedObjectTypes").MESSENGER)
          )
            return o("AdsPlacementIneligibilityReason").createObjectiveReason(
              t.objective,
            );
          if (
            !o(
              "AdsVideoBuyingStoreUtils",
            ).checkIfPlacementPositionValidForBuyingOption(
              babelHelpers.extends({}, t, { objective: a }),
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
              babelHelpers.extends({}, t, { objective: a }),
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createOmnichannelReason();
          if (
            a === r("AdsAPIObjectives").APP_INSTALLS &&
            t.promotedObjectType === r("AdsPromotedObjectTypes").CANVAS_APP
          )
            return o("AdsPlacementIneligibilityReason").createCanvasAppReason();
          if (
            o(
              "AdsPlacementEligibilityInfoUtils",
            ).isIneligibleWithMobileOnlyObjectives(
              babelHelpers.extends({}, t, { objective: a }),
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
          var l = o(
            "AdsReachFrequencyPlacementUtils",
          ).getReachFrequencyDisabledReason(
            "messenger/story",
            babelHelpers.extends({}, t, { objective: a }),
          );
          if (l !== null) return l;
          if (
            o("AdsWhatsAppPlacementUtils").isIneligibleForMessengerStory(
              babelHelpers.extends({}, t, { objective: a }),
            )
          )
            return o("AdsPlacementIneligibilityReason").createWhatsAppReason(
              t.objective,
            );
          if (
            o("AdsManagerIGLoginUtils").getIsIGLogin(t.account) &&
            !o("igAccessAdsManagerUtils").isIGAccessParityEnabled()
          )
            return o("AdsPlacementIneligibilityReason").createIGLoginReason();
          if (
            o(
              "AdsUnifiedProfileVisitUtils",
            ).getIsPositionAlwaysDisabledForProfileVisits(
              a,
              t.promotedObjectType,
            )
          )
            return o(
              "AdsUnifiedProfileVisitUtils",
            ).getUnifiedProfileVisitsAdsPlacementIneligibilityReason(
              t.destinationType,
            );
          if (
            o(
              "AdsInstagramPlacementUtils",
            ).isInstagramDestinationEnabledAndSelected(
              babelHelpers.extends({}, t, { objective: a }),
            ) ||
            (t.promotedObjectType === r("AdsPromotedObjectTypes").INSTAGRAM &&
              (a === r("AdsAPIObjectives").CONVERSIONS ||
                t.objective === r("AdsAPIObjectives").LINK_CLICKS))
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createInstagramDirectReason(t.objective);
          if (
            o(
              "AdsInstagramLeadGenPlacementUtils",
            ).isInstagramLeadGenDestinationSelected(
              babelHelpers.extends({}, t, { objective: a }),
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createInstagramLeadGenReason(t.objective);
          if (t.directInstallDevices === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDirectInstallReason();
          if (t.containsDCO === !0)
            return o("AdsPlacementIneligibilityReason").createDCOReason();
          var u = d(t.promotedObjectType);
          if (u != null) return u;
          if (t.destinationType === r("AdCampaignDestination").INSTAGRAM_LIVE)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createInstagramLiveReason();
          if (t.destinationType === r("AdCampaignDestination").FACEBOOK_LIVE)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createFacebookLiveReason();
          var _ = m(t, a);
          return _ != null
            ? _
            : r("AdsAppUrlUtils").isInstantGameURL(t.objectStoreURL)
              ? o("AdsPlacementIneligibilityReason").createInstantGameReason()
              : o("AdsPlacementIneligibilityReason").createCustomReason(
                  s._(/*BTDS*/ ""),
                );
        },
        isActive: function (t) {
          return o(
            "AdsPlacementAPISpecReaderUtilsShared",
          ).isActiveMessengerPosition(t, "story");
        },
        adsetValidators: [r("AdsCampaignMessengerStoryPositionValidator")],
        adsetReducer: function (t, n) {
          var e = n.action;
          if (!p.isEnabled(e.eligibilityInformation.capabilities)) return t;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removeGroups.includes("messenger/story")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o(
                      "AdsPlacementAPISpecWriterUtils",
                    ).removeGroupAnyway(
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
                  return e.pluginKey === "messenger/story"
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
      _ = p;
    l.default = _;
  },
  226,
);
