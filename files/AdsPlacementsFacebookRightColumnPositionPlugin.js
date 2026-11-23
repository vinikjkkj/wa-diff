__d(
  "AdsPlacementsFacebookRightColumnPositionPlugin",
  [
    "fbt",
    "ix",
    "ASAPlacementControlsStoreUtils",
    "AdCampaignDestination",
    "AdImageSpecCropKeys",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAPITargetFields",
    "AdsAppUrlUtils",
    "AdsBuyingTypes",
    "AdsBwIPlacementUtils",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsClickToCallAdsUtils",
    "AdsInstagramLeadGenPlacementUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementCopy",
    "AdsPlacementEligibilityInfoUtils",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementPositionLabelConstant",
    "AdsPromotedObjectAppUtils",
    "AdsPromotedObjectTypes",
    "AdsReachFrequencyPlacementUtils",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "AdsUPVPlacementExpansionUtils",
    "AdsUnifiedProfileVisitUtils",
    "AdsVideoBuyingStoreUtils",
    "AdsWhatsAppPlacementUtils",
    "adsIGLoginPlacementUtils",
    "adsPlacementAPISpecReaderIsActiveFacebookPosition",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = r("immutable").Set([
        (e = r("AdsAPIObjectives")).CONVERSIONS,
        e.LINK_CLICKS,
        e.PRODUCT_CATALOG_SALES,
        e.WILDCARD_INTERNAL_ONLY,
      ]);
    function d(e, t) {
      return (t === r("AdsAPIObjectives").CONVERSIONS &&
        e.promotedObjectType ===
          r("AdsPromotedObjectTypes").OFFLINE_EVENT_SET) ||
        (t === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
          (e.optimizationGoal === r("AdsAPIOptimizationGoals").REPLIES ||
            e.optimizationGoal === r("AdsAPIOptimizationGoals").CONVERSATIONS ||
            e.optimizationGoal ===
              r("AdsAPIOptimizationGoals").QUALITY_CALL)) ||
        (e.optimizationGoal ===
          r("AdsAPIOptimizationGoals").INCREMENTAL_OFFSITE_CONVERSIONS &&
          t !== r("AdsAPIObjectives").CONVERSIONS) ||
        !o(
          "AdsVideoBuyingStoreUtils",
        ).checkIfPlacementPositionValidForBuyingOption(
          babelHelpers.extends({}, e, { objective: t }),
          "right_hand_column",
        )
        ? o("AdsPlacementIneligibilityReason").createOptimizationGoalReason()
        : null;
    }
    var m = {
        type: "placements/position",
        key: "facebook/right_column",
        name: r("AdsPlacementPositionLabelConstant").right_hand_column,
        nameWithPlatform: s._(/*BTDS*/ ""),
        mediaRecommendation: {
          copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION
            .FB_RIGHT_COLUMN,
          imageCrop: r("AdImageSpecCropKeys")["191x100"],
          videoCrop: "16:9",
        },
        apiPosition: "right_hand_column",
        placementImage: u("556710"),
        placementPreviewImage: u("901244"),
        platformKey: "facebook",
        isEnabled: function () {
          return !0;
        },
        getIneligibilityReason: function (t) {
          if (
            o("ASAPlacementControlsStoreUtils").hasAccountPlacementExclusions(
              t,
              "facebook_right_hand_column",
            )
          ) {
            var e;
            return o(
              "AdsPlacementIneligibilityReason",
            ).createAccountControlPlacementExclusionReason(
              (e = t.account) == null ? void 0 : e.account_id,
              t.objective,
            );
          }
          if (t.isReelsTrendingAds === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createReelsTrendingAdsReason();
          var n = o("AdsBwIPlacementUtils").getIneligibilityReason(t);
          if (n) return n;
          var a = o(
            "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
          ).getSOOBundleParentIneligibilityReason(m, t);
          if (a != null) return a;
          var i = o("AdsODAXUtils").maybeTranslateObjective(
              t.objective,
              t.promotedObjectType,
              t.optimizationGoal,
            ),
            l =
              !!t.spec &&
              r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
                t.spec,
                "right_hand_column",
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
          if (!c.includes(i) && !l)
            return o("AdsPlacementIneligibilityReason").createObjectiveReason(
              t.objective,
            );
          var s = o(
            "AdsReachFrequencyPlacementUtils",
          ).getReachFrequencyDisabledReason(
            "facebook/right_column",
            babelHelpers.extends({}, t, { objective: i }),
          );
          if (s !== null) return s;
          if (
            i === r("AdsAPIObjectives").APP_INSTALLS &&
            t.promotedObjectType === r("AdsPromotedObjectTypes").MOBILE_APP
          )
            return o("AdsPlacementIneligibilityReason").createMobileAppReason();
          if (
            o("AdsPromotedObjectAppUtils").isAppType(t.promotedObjectType) &&
            i === r("AdsAPIObjectives").CONVERSIONS
          )
            return o("AdsPlacementIneligibilityReason").createAppReason();
          if (t.promotedObjectType === r("AdsPromotedObjectTypes").MESSENGER)
            return o("AdsPlacementIneligibilityReason").createMessengerReason(
              t.objective,
            );
          if (
            t.promotedObjectType === r("AdsPromotedObjectTypes").INSTAGRAM &&
            (i === r("AdsAPIObjectives").CONVERSIONS ||
              t.objective === r("AdsAPIObjectives").LINK_CLICKS)
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createInstagramDirectReason(t.objective);
          if (
            o(
              "AdsInstagramLeadGenPlacementUtils",
            ).isInstagramLeadGenDestinationSelected(
              babelHelpers.extends({}, t, { objective: i }),
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createInstagramLeadGenReason(t.objective);
          if (
            o(
              "adsIGLoginPlacementUtils",
            ).getShouldDisableFBPlacementForIGLoginUsers(t.account)
          )
            return o("AdsPlacementIneligibilityReason").createIGLoginReason();
          if (
            o(
              "AdsUnifiedProfileVisitUtils",
            ).getIsPositionAlwaysDisabledForProfileVisits(
              i,
              t.promotedObjectType,
            ) &&
            !o(
              "AdsUPVPlacementExpansionUtils",
            ).getIsFbPlacementsExpansionEnabledForUPV()
          )
            return o(
              "AdsUnifiedProfileVisitUtils",
            ).getUnifiedProfileVisitsAdsPlacementIneligibilityReason(
              t.destinationType,
            );
          if (
            o(
              "AdsPlacementEligibilityInfoUtils",
            ).isIneligibleWithDesktopOnlyObjectives(
              babelHelpers.extends({}, t, { objective: i }),
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(r("AdsAPIDevicePlatform").MOBILE);
          if (
            o(
              "AdsPlacementEligibilityInfoUtils",
            ).isIneligibleWithMobileOnlyObjectives(
              babelHelpers.extends({}, t, { objective: i }),
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(r("AdsAPIDevicePlatform").DESKTOP);
          if (
            t.spec.device_platforms &&
            !t.spec.device_platforms.includes(r("AdsAPIDevicePlatform").DESKTOP)
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(r("AdsAPIDevicePlatform").MOBILE);
          if (r("AdsAppUrlUtils").isWindowsURL(t.objectStoreURL))
            return o(
              "AdsPlacementIneligibilityReason",
            ).createWindowsAppReason();
          if (t.containsOffer === !0)
            return o("AdsPlacementIneligibilityReason").createOfferOptionReason(
              t.objective,
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
            o(
              "AdsClickToCallAdsUtils",
            ).getIsCallAdsNewOptimizationUnderTrafficObjective(
              babelHelpers.extends({}, t, { objective: i }),
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createPhoneCallTrafficReason();
          if (
            o(
              "AdsClickToCallAdsUtils",
            ).getIsClickToCallAdsUnderLeadGenObjective(
              babelHelpers.extends({}, t, { objective: i }),
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createPhoneCallLeadReason();
          if (
            o(
              "AdsClickToCallAdsUtils",
            ).getIsClickToCallAdsUnderConversionsOrSalesObjective(
              babelHelpers.extends({}, t, { objective: i }),
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createPhoneCallConversionsOrSalesReason();
          var u = d(t, i);
          return u != null
            ? u
            : o(
                  "AdsVideoBuyingStoreUtils",
                ).checkIfDevicePlatformValidForBuyingOption(
                  babelHelpers.extends({}, t, { objective: i }),
                )
              ? t.destinationType === r("AdCampaignDestination").INSTAGRAM_LIVE
                ? o(
                    "AdsPlacementIneligibilityReason",
                  ).createInstagramLiveReason()
                : o("AdsWhatsAppPlacementUtils").isIneligibleForFBRightColumn(
                      babelHelpers.extends({}, t, { objective: i }),
                    )
                  ? o("AdsPlacementIneligibilityReason").createWhatsAppReason(
                      t.objective,
                    )
                  : null
              : o("AdsPlacementIneligibilityReason").createDevicePlatformReason(
                  r("AdsAPIDevicePlatform").DESKTOP,
                );
        },
        isInactiveByDefault: function (t) {
          return t.buyingType === r("AdsBuyingTypes").RESERVED;
        },
        isActive: function (t) {
          return r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
            t,
            "right_hand_column",
          );
        },
        getPreviews: function (t) {
          return r("immutable").OrderedSet(["previews/rhc"]);
        },
        getDefaultPreview: function () {
          return "previews/rhc";
        },
        adsetReducer: function (t, n) {
          var e = n.action;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removeGroups.includes("facebook/right_column")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      t,
                      "facebook/right_column",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                      "facebook",
                    );
                  })
                : e.addGroups.includes("facebook/right_column")
                  ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        t,
                        "facebook/right_column",
                        e.eligibilityInformation,
                        r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                        "facebook",
                      );
                    })
                  : t;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(t, e.ids, function (t) {
                var n = o("AdsPlacementAPISpecWriterUtils").addGroup(
                  t,
                  e.pluginKey,
                  e.eligibilityInformation,
                  r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                  "facebook",
                );
                return (
                  (n = o(
                    "AdsPlacementAPISpecWriterUtils",
                  ).removeMessengerThreadPlacement(
                    n,
                    e.eligibilityInformation,
                  )),
                  n
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
      p = m;
    l.default = p;
  },
  226,
);
