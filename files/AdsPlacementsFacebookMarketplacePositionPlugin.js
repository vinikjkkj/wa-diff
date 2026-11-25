__d(
  "AdsPlacementsFacebookMarketplacePositionPlugin",
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
    "AdsAccountStore",
    "AdsAccountUtils",
    "AdsAppUrlUtils",
    "AdsBwIPlacementUtils",
    "AdsCampaignMarketplacePositionValidator",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsClickToCallAdsUtils",
    "AdsInstagramLeadGenPlacementUtils",
    "AdsInstagramPlacementUtils",
    "AdsMarketplacePlacementUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementCopy",
    "AdsPlacementEligibilityInfoUtils",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementPositionLabelConstant",
    "AdsPromotedObjectTypes",
    "AdsReachFrequencyPlacementUtils",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "AdsUPVPlacementExpansionUtils",
    "AdsUnifiedProfileVisitUtils",
    "AdsVideoBuyingStoreUtils",
    "AdsWhatsAppPlacementUtils",
    "MarketplaceAdsConfigStatic",
    "adsIGLoginPlacementUtils",
    "adsPlacementAPISpecReaderIsActiveFacebookPosition",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = r("immutable").Map(
      r("MarketplaceAdsConfigStatic").eligibleObjectivesCapabilityMap,
    );
    function c(e, t, n) {
      return n
        ? null
        : o("AdsClickToCallAdsUtils").getIsClickToCallAdsUnderLeadGenObjective(
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
            : o(
                  "AdsClickToCallAdsUtils",
                ).getIsCallAdsNewOptimizationUnderTrafficObjective(e)
              ? o(
                  "AdsPlacementIneligibilityReason",
                ).createPhoneCallTrafficReason()
              : t === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
                  e.optimizationGoal ===
                    r("AdsAPIOptimizationGoals").QUALITY_CALL
                ? o(
                    "AdsPlacementIneligibilityReason",
                  ).createPhoneCallConversionsOrSalesReason()
                : null;
    }
    function d(e) {
      return e.promotedObjectType === r("AdsPromotedObjectTypes").DONATION
        ? o("AdsPlacementIneligibilityReason").createDonationReason()
        : e.promotedObjectType === r("AdsPromotedObjectTypes").GROUP
          ? o("AdsPlacementIneligibilityReason").createGroupPromotionReason()
          : e.promotedObjectType === r("AdsPromotedObjectTypes").IMAGINATION
            ? o("AdsPlacementIneligibilityReason").createImaginationReason()
            : e.promotedObjectType === r("AdsPromotedObjectTypes").REMINDER
              ? o(
                  "AdsPlacementIneligibilityReason",
                ).createReminderPromotionReason()
              : e.destinationType === r("AdCampaignDestination").FACEBOOK_LIVE
                ? o(
                    "AdsPlacementIneligibilityReason",
                  ).createFacebookLiveReason()
                : null;
    }
    var m = {
        type: "placements/position",
        key: "facebook/marketplace",
        name: r("AdsPlacementPositionLabelConstant").marketplace,
        nameWithPlatform: s._(/*BTDS*/ ""),
        mediaRecommendation: {
          copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION
            .FB_MARKETPLACE,
          imageCrop: r("AdImageSpecCropKeys")["100x100"],
          videoCrop: "1:1",
        },
        apiPosition: "marketplace",
        placementImage: u("556713"),
        placementPreviewImage: u("901243"),
        platformKey: "facebook",
        isEnabled: function (t) {
          return r("AdsAccountUtils").hasCapabilityFromList(
            t,
            "ADS_PLACEMENT_MARKETPLACE",
          );
        },
        getIneligibilityReason: function (n) {
          var t = o(
            "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
          ).getSOOBundleParentIneligibilityReason(m, n);
          if (t != null) return t;
          if (
            o("ASAPlacementControlsStoreUtils").hasAccountPlacementExclusions(
              n,
              "facebook_marketplace",
            )
          ) {
            var a;
            return o(
              "AdsPlacementIneligibilityReason",
            ).createAccountControlPlacementExclusionReason(
              (a = n.account) == null ? void 0 : a.account_id,
              n.objective,
            );
          }
          if (n.isReelsTrendingAds === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createReelsTrendingAdsReason();
          var i = o("AdsBwIPlacementUtils").getIneligibilityReason(n);
          if (i) return i;
          var l = o("AdsODAXUtils").maybeTranslateObjective(
            n.objective,
            n.promotedObjectType,
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
          if (!e.has(l))
            return o("AdsPlacementIneligibilityReason").createObjectiveReason(
              n.objective,
            );
          var s = e.get(l);
          if (
            !s ||
            !r("AdsAccountUtils").hasCapabilityFromList(n.capabilities, s)
          )
            return o("AdsPlacementIneligibilityReason").createObjectiveReason(
              n.objective,
            );
          if (
            o(
              "AdsPlacementEligibilityInfoUtils",
            ).isIneligibleWithMobileOnlyObjectives(
              babelHelpers.extends({}, n, { objective: l }),
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(r("AdsAPIDevicePlatform").DESKTOP);
          if (
            o(
              "AdsPlacementEligibilityInfoUtils",
            ).isIneligibleWithDesktopOnlyObjectives(
              babelHelpers.extends({}, n, { objective: l }),
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(r("AdsAPIDevicePlatform").MOBILE);
          if (
            n.promotedObjectType === r("AdsPromotedObjectTypes").MESSENGER &&
            !o(
              "AdsMarketplacePlacementUtils",
            ).isEligibleForMessengerDestination(
              babelHelpers.extends({}, n, { objective: l }),
            )
          )
            return o("AdsPlacementIneligibilityReason").createMessengerReason(
              n.objective,
            );
          var u = o(
              "AdsPlacementAPISpecReaderUtils",
            ).isOnlyActiveDevicePlatform(
              n.spec,
              r("AdsAPIDevicePlatform").MOBILE,
            ),
            p = r("AdsAccountStore").getSelectedAccount().getValue();
          if (
            o("AdsWhatsAppPlacementUtils").isIneligibleForMarketplacePlacement(
              p,
              babelHelpers.extends({}, n, { objective: l }),
              u,
            )
          )
            return o("AdsPlacementIneligibilityReason").createWhatsAppReason(
              n.objective,
            );
          if (n.destinationType === r("AdCampaignDestination").INSTAGRAM_LIVE)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createInstagramLiveReason();
          var _ = c(n, l, u);
          if (_ != null) return _;
          if (
            o(
              "adsIGLoginPlacementUtils",
            ).getShouldDisableFBPlacementForIGLoginUsers(n.account)
          )
            return o("AdsPlacementIneligibilityReason").createIGLoginReason();
          if (
            o(
              "AdsUnifiedProfileVisitUtils",
            ).getIsPositionAlwaysDisabledForProfileVisits(
              l,
              n.promotedObjectType,
            ) &&
            !o(
              "AdsUPVPlacementExpansionUtils",
            ).getIsFbPlacementsExpansionEnabledForUPV()
          )
            return o(
              "AdsUnifiedProfileVisitUtils",
            ).getUnifiedProfileVisitsAdsPlacementIneligibilityReason(
              n.destinationType,
            );
          if (
            o(
              "AdsInstagramPlacementUtils",
            ).isInstagramDestinationEnabledAndSelected(
              babelHelpers.extends({}, n, { objective: l }),
            ) ||
            (n.promotedObjectType === r("AdsPromotedObjectTypes").INSTAGRAM &&
              (l === r("AdsAPIObjectives").CONVERSIONS ||
                n.objective === r("AdsAPIObjectives").LINK_CLICKS))
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createInstagramDirectReason(n.objective);
          if (
            o(
              "AdsInstagramLeadGenPlacementUtils",
            ).isInstagramLeadGenDestinationSelected(
              babelHelpers.extends({}, n, { objective: l }),
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createInstagramLeadGenReason(n.objective);
          if (
            (l === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
              (n.optimizationGoal === r("AdsAPIOptimizationGoals").REPLIES ||
                n.optimizationGoal ===
                  r("AdsAPIOptimizationGoals").CONVERSATIONS)) ||
            (n.optimizationGoal ===
              r("AdsAPIOptimizationGoals").INCREMENTAL_OFFSITE_CONVERSIONS &&
              l !== r("AdsAPIObjectives").CONVERSIONS)
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createOptimizationGoalReason();
          if (r("AdsAppUrlUtils").isInstantGameURL(n.objectStoreURL))
            return o(
              "AdsPlacementIneligibilityReason",
            ).createInstantGameReason();
          var f = d(n);
          if (f != null) return f;
          var g = r("AdsAccountUtils").hasCapabilityFromList(
            n.capabilities,
            "CAN_USE_MARKETPLACE_DESKTOP",
          );
          if (
            n.spec &&
            !o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
              n.spec,
              r("AdsAPIDevicePlatform").MOBILE,
            ) &&
            o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
              n.spec,
              r("AdsAPIDevicePlatform").DESKTOP,
            ) &&
            !g
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(r("AdsAPIDevicePlatform").DESKTOP);
          var h = o(
            "AdsReachFrequencyPlacementUtils",
          ).getReachFrequencyDisabledReason(
            "facebook/marketplace",
            babelHelpers.extends({}, n, { objective: l }),
          );
          return h !== null
            ? h
            : o(
                  "AdsVideoBuyingStoreUtils",
                ).checkIfPlacementPositionValidForBuyingOption(
                  babelHelpers.extends({}, n, { objective: l }),
                  "marketplace",
                )
              ? o(
                  "AdsVideoBuyingStoreUtils",
                ).checkIfDevicePlatformValidForBuyingOption(
                  babelHelpers.extends({}, n, { objective: l }),
                )
                ? n.objective === r("AdsAPIObjectives").APP_INSTALLS &&
                  n.promotedObjectType ===
                    r("AdsPromotedObjectTypes").CANVAS_APP
                  ? o("AdsPlacementIneligibilityReason").createCanvasAppReason()
                  : null
                : o(
                    "AdsPlacementIneligibilityReason",
                  ).createDevicePlatformReason(
                    r("AdsAPIDevicePlatform").DESKTOP,
                  )
              : o(
                  "AdsPlacementIneligibilityReason",
                ).createOptimizationGoalReason();
        },
        isActive: function (t) {
          return r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
            t,
            "marketplace",
          );
        },
        getPreviews: function (t) {
          var e = [],
            n = o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
              t.spec,
              r("AdsAPIDevicePlatform").MOBILE,
            ),
            a = o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
              t.spec,
              r("AdsAPIDevicePlatform").DESKTOP,
            ),
            i = r("AdsAccountUtils").hasCapabilityFromList(
              t.capabilities,
              "CAN_USE_MARKETPLACE_DESKTOP",
            );
          return (
            n && e.push("previews/marketplace_mobile"),
            t.optimizationGoal !== r("AdsAPIOptimizationGoals").QUALITY_CALL &&
              e.push("previews/marketplace_mobile_pdp"),
            a &&
              i &&
              (e.push("previews/marketplace_desktop"),
              e.push("previews/marketplace_desktop_pdp")),
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
            return "previews/marketplace_mobile";
          if (
            o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
              t.spec,
              r("AdsAPIDevicePlatform").DESKTOP,
            ) &&
            r("AdsAccountUtils").hasCapabilityFromList(
              t.capabilities,
              "CAN_USE_MARKETPLACE_DESKTOP",
            )
          )
            return "previews/marketplace_desktop";
        },
        adsetValidators: [r("AdsCampaignMarketplacePositionValidator")],
        adsetReducer: function (t, n) {
          var e = n.action;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removeGroups.includes("facebook/marketplace")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o(
                      "AdsPlacementAPISpecWriterUtils",
                    ).removeGroupAnyway(
                      t,
                      "facebook/marketplace",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                      "facebook",
                    );
                  })
                : e.addGroups.includes("facebook/marketplace")
                  ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        t,
                        "facebook/marketplace",
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
        parentPlacements: r("immutable").OrderedSet(["facebook/feed"]),
        childPlacements: r("immutable").OrderedSet([]),
      },
      p = m;
    l.default = p;
  },
  226,
);
