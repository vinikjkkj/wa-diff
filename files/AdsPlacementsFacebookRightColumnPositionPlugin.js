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
      ]),
      d = {
        type: "placements/position",
        key: "facebook/right_column",
        name: r("AdsPlacementPositionLabelConstant").right_hand_column,
        nameWithPlatform: s._(/*BTDS*/ "Facebook right column"),
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
          ).getSOOBundleParentIneligibilityReason(d, t);
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
          return s !== null
            ? s
            : i === r("AdsAPIObjectives").APP_INSTALLS &&
                t.promotedObjectType === r("AdsPromotedObjectTypes").MOBILE_APP
              ? o("AdsPlacementIneligibilityReason").createMobileAppReason()
              : o("AdsPromotedObjectAppUtils").isAppType(
                    t.promotedObjectType,
                  ) && i === r("AdsAPIObjectives").CONVERSIONS
                ? o("AdsPlacementIneligibilityReason").createAppReason()
                : t.promotedObjectType === r("AdsPromotedObjectTypes").MESSENGER
                  ? o("AdsPlacementIneligibilityReason").createMessengerReason(
                      t.objective,
                    )
                  : t.promotedObjectType ===
                        r("AdsPromotedObjectTypes").INSTAGRAM &&
                      (i === r("AdsAPIObjectives").CONVERSIONS ||
                        t.objective === r("AdsAPIObjectives").LINK_CLICKS)
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
                      : o(
                            "adsIGLoginPlacementUtils",
                          ).getShouldDisableFBPlacementForIGLoginUsers(
                            t.account,
                          )
                        ? o(
                            "AdsPlacementIneligibilityReason",
                          ).createIGLoginReason()
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
                                "AdsPlacementEligibilityInfoUtils",
                              ).isIneligibleWithDesktopOnlyObjectives(
                                babelHelpers.extends({}, t, { objective: i }),
                              )
                            ? o(
                                "AdsPlacementIneligibilityReason",
                              ).createDevicePlatformReason(
                                r("AdsAPIDevicePlatform").MOBILE,
                              )
                            : o(
                                  "AdsPlacementEligibilityInfoUtils",
                                ).isIneligibleWithMobileOnlyObjectives(
                                  babelHelpers.extends({}, t, { objective: i }),
                                )
                              ? o(
                                  "AdsPlacementIneligibilityReason",
                                ).createDevicePlatformReason(
                                  r("AdsAPIDevicePlatform").DESKTOP,
                                )
                              : t.spec.device_platforms &&
                                  !t.spec.device_platforms.includes(
                                    r("AdsAPIDevicePlatform").DESKTOP,
                                  )
                                ? o(
                                    "AdsPlacementIneligibilityReason",
                                  ).createDevicePlatformReason(
                                    r("AdsAPIDevicePlatform").MOBILE,
                                  )
                                : r("AdsAppUrlUtils").isWindowsURL(
                                      t.objectStoreURL,
                                    )
                                  ? o(
                                      "AdsPlacementIneligibilityReason",
                                    ).createWindowsAppReason()
                                  : t.containsOffer === !0
                                    ? o(
                                        "AdsPlacementIneligibilityReason",
                                      ).createOfferOptionReason(t.objective)
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
                                            r("AdsPromotedObjectTypes")
                                              .IMAGINATION
                                          ? o(
                                              "AdsPlacementIneligibilityReason",
                                            ).createImaginationReason()
                                          : t.promotedObjectType ===
                                              r("AdsPromotedObjectTypes")
                                                .REMINDER
                                            ? o(
                                                "AdsPlacementIneligibilityReason",
                                              ).createReminderPromotionReason()
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
                                                    babelHelpers.extends(
                                                      {},
                                                      t,
                                                      { objective: i },
                                                    ),
                                                  )
                                                ? o(
                                                    "AdsPlacementIneligibilityReason",
                                                  ).createPhoneCallLeadReason()
                                                : o(
                                                      "AdsClickToCallAdsUtils",
                                                    ).getIsClickToCallAdsUnderConversionsOrSalesObjective(
                                                      babelHelpers.extends(
                                                        {},
                                                        t,
                                                        { objective: i },
                                                      ),
                                                    )
                                                  ? o(
                                                      "AdsPlacementIneligibilityReason",
                                                    ).createPhoneCallConversionsOrSalesReason()
                                                  : (i ===
                                                        r("AdsAPIObjectives")
                                                          .CONVERSIONS &&
                                                        t.promotedObjectType ===
                                                          r(
                                                            "AdsPromotedObjectTypes",
                                                          )
                                                            .OFFLINE_EVENT_SET) ||
                                                      (i ===
                                                        r("AdsAPIObjectives")
                                                          .PRODUCT_CATALOG_SALES &&
                                                        (t.optimizationGoal ===
                                                          r(
                                                            "AdsAPIOptimizationGoals",
                                                          ).REPLIES ||
                                                          t.optimizationGoal ===
                                                            r(
                                                              "AdsAPIOptimizationGoals",
                                                            ).CONVERSATIONS ||
                                                          t.optimizationGoal ===
                                                            r(
                                                              "AdsAPIOptimizationGoals",
                                                            ).QUALITY_CALL)) ||
                                                      (t.optimizationGoal ===
                                                        r(
                                                          "AdsAPIOptimizationGoals",
                                                        )
                                                          .INCREMENTAL_OFFSITE_CONVERSIONS &&
                                                        i !==
                                                          r("AdsAPIObjectives")
                                                            .CONVERSIONS) ||
                                                      !o(
                                                        "AdsVideoBuyingStoreUtils",
                                                      ).checkIfPlacementPositionValidForBuyingOption(
                                                        babelHelpers.extends(
                                                          {},
                                                          t,
                                                          { objective: i },
                                                        ),
                                                        "right_hand_column",
                                                      )
                                                    ? o(
                                                        "AdsPlacementIneligibilityReason",
                                                      ).createOptimizationGoalReason()
                                                    : o(
                                                          "AdsVideoBuyingStoreUtils",
                                                        ).checkIfDevicePlatformValidForBuyingOption(
                                                          babelHelpers.extends(
                                                            {},
                                                            t,
                                                            { objective: i },
                                                          ),
                                                        )
                                                      ? t.destinationType ===
                                                        r(
                                                          "AdCampaignDestination",
                                                        ).INSTAGRAM_LIVE
                                                        ? o(
                                                            "AdsPlacementIneligibilityReason",
                                                          ).createInstagramLiveReason()
                                                        : o(
                                                              "AdsWhatsAppPlacementUtils",
                                                            ).isIneligibleForFBRightColumn(
                                                              babelHelpers.extends(
                                                                {},
                                                                t,
                                                                {
                                                                  objective: i,
                                                                },
                                                              ),
                                                            )
                                                          ? o(
                                                              "AdsPlacementIneligibilityReason",
                                                            ).createWhatsAppReason(
                                                              t.objective,
                                                            )
                                                          : null
                                                      : o(
                                                          "AdsPlacementIneligibilityReason",
                                                        ).createDevicePlatformReason(
                                                          r(
                                                            "AdsAPIDevicePlatform",
                                                          ).DESKTOP,
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
      m = d;
    l.default = m;
  },
  226,
);
