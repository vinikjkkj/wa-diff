__d(
  "AdsPlacementsFacebookInstantArticlePositionPlugin",
  [
    "ix",
    "AdCampaignDestination",
    "AdImageSpecCropKeys",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAPITargetFields",
    "AdsAppUrlUtils",
    "AdsBwIPlacementUtils",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsClickToCallAdsUtils",
    "AdsInstagramLeadGenPlacementUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementEligibilityInfoUtils",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementOmnichannelUtils",
    "AdsPlacementPositionLabelConstant",
    "AdsPlacementPositionLabelWithPlatformConstant",
    "AdsPromotedObjectTypes",
    "AdsReachFrequencyPlacementUtils",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "AdsUnifiedProfileVisitUtils",
    "AdsVideoBuyingStoreUtils",
    "adsIGLoginPlacementUtils",
    "adsPlacementAPISpecReaderIsActiveFacebookPosition",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = r("immutable").Set([
        (e = r("AdsAPIObjectives")).APP_INSTALLS,
        e.CONVERSIONS,
        e.LINK_CLICKS,
        e.MOBILE_APP_INSTALLS,
        e.VIDEO_VIEWS,
        e.BRAND_AWARENESS,
        e.REACH,
        e.OUTCOME_AWARENESS,
        e.POST_ENGAGEMENT,
        e.PRODUCT_CATALOG_SALES,
        e.WILDCARD_INTERNAL_ONLY,
        e.LEAD_GENERATION,
        e.MESSAGES,
        e.PAGE_LIKES,
      ]),
      c = {
        type: "placements/position",
        key: "facebook/instant_article",
        name: r("AdsPlacementPositionLabelConstant").instant_article,
        nameWithPlatform: r("AdsPlacementPositionLabelWithPlatformConstant")
          .facebook.instant_article,
        mediaRecommendation: {
          imageCrop: r("AdImageSpecCropKeys")["191x100"],
          videoCrop: "16:9",
        },
        apiPosition: "instant_article",
        placementImage: s("556715"),
        placementPreviewVideo: "10150008660890365",
        platformKey: "facebook",
        isEnabled: function (t) {
          return !1;
        },
        isInactiveByDefault: function (t) {
          var e = o("AdsODAXUtils").maybeTranslateObjective(
            t.objective,
            t.promotedObjectType,
            t.optimizationGoal,
          );
          return e === r("AdsAPIObjectives").PAGE_LIKES;
        },
        getIneligibilityReason: function (t) {
          var e = o("AdsBwIPlacementUtils").getIneligibilityReason(t);
          if (e) return e;
          var n = o(
            "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
          ).getSOOBundleParentIneligibilityReason(c, t);
          if (n != null) return n;
          if (t.isReelsTrendingAds === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createReelsTrendingAdsReason();
          var a = o("AdsODAXUtils").maybeTranslateObjective(
              t.objective,
              t.promotedObjectType,
              t.optimizationGoal,
            ),
            i = o(
              "AdsReachFrequencyPlacementUtils",
            ).getReachFrequencyDisabledReason(
              "facebook/instant_article",
              babelHelpers.extends({}, t, { objective: a }),
            );
          if (i !== null) return i;
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
          if (u.includes(a)) {
            if (a === r("AdsAPIObjectives").PAGE_LIKES)
              return o("AdsPlacementIneligibilityReason").createObjectiveReason(
                t.objective,
              );
            if (
              a === r("AdsAPIObjectives").APP_INSTALLS &&
              t.promotedObjectType === r("AdsPromotedObjectTypes").CANVAS_APP
            )
              return o(
                "AdsPlacementIneligibilityReason",
              ).createCanvasAppReason();
            if (r("AdsAppUrlUtils").isFacebookDesktopURL(t.objectStoreURL))
              return o("AdsPlacementIneligibilityReason").createGenericReason();
            if (
              t.spec.device_platforms &&
              !t.spec.device_platforms.includes(
                r("AdsAPIDevicePlatform").MOBILE,
              )
            )
              return o(
                "AdsPlacementIneligibilityReason",
              ).createDevicePlatformReason(r("AdsAPIDevicePlatform").DESKTOP);
            if (
              o(
                "AdsPlacementEligibilityInfoUtils",
              ).isIneligibleWithDesktopOnlyObjectives(
                babelHelpers.extends({}, t, { objective: a }),
              )
            )
              return o(
                "AdsPlacementIneligibilityReason",
              ).createDevicePlatformReason(r("AdsAPIDevicePlatform").MOBILE);
            if (t.containsOffer === !0)
              return o(
                "AdsPlacementIneligibilityReason",
              ).createOfferOptionReason(a);
            if (
              o(
                "AdsClickToCallAdsUtils",
              ).getIsClickToCallAdsUnderLeadGenObjective(
                babelHelpers.extends({}, t, { objective: a }),
              )
            )
              return o(
                "AdsPlacementIneligibilityReason",
              ).createPhoneCallLeadReason();
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
                "AdsClickToCallAdsUtils",
              ).getIsCallAdsNewOptimizationUnderTrafficObjective(
                babelHelpers.extends({}, t, { objective: a }),
              )
            )
              return o(
                "AdsPlacementIneligibilityReason",
              ).createPhoneCallTrafficReason();
            if (
              o(
                "AdsClickToCallAdsUtils",
              ).getIsClickToCallAdsUnderConversionsOrSalesObjective(
                babelHelpers.extends({}, t, { objective: a }),
              )
            )
              return o(
                "AdsPlacementIneligibilityReason",
              ).createPhoneCallConversionsOrSalesReason();
          } else
            return o("AdsPlacementIneligibilityReason").createObjectiveReason(
              t.objective,
            );
          return t.directInstallDevices == !0
            ? o("AdsPlacementIneligibilityReason").createDirectInstallReason()
            : t.promotedObjectType === r("AdsPromotedObjectTypes").INSTAGRAM
              ? o(
                  "AdsPlacementIneligibilityReason",
                ).createInstagramDirectReason(t.objective)
              : o(
                    "AdsInstagramLeadGenPlacementUtils",
                  ).isInstagramLeadGenDestinationSelected(
                    babelHelpers.extends({}, t, { objective: a }),
                  )
                ? o(
                    "AdsPlacementIneligibilityReason",
                  ).createInstagramLeadGenReason(t.objective)
                : o(
                      "AdsPlacementOmnichannelUtils",
                    ).isIneligibleForOmnichannelAd(
                      babelHelpers.extends({}, t, { objective: a }),
                    )
                  ? o(
                      "AdsPlacementIneligibilityReason",
                    ).createOmnichannelReason()
                  : o(
                        "AdsVideoBuyingStoreUtils",
                      ).checkIfPlacementPositionValidForBuyingOption(
                        babelHelpers.extends({}, t, { objective: a }),
                        "instant_article",
                      )
                    ? o(
                        "AdsVideoBuyingStoreUtils",
                      ).checkIfDevicePlatformValidForBuyingOption(
                        babelHelpers.extends({}, t, { objective: a }),
                      )
                      ? r("AdsAppUrlUtils").isInstantGameURL(t.objectStoreURL)
                        ? o(
                            "AdsPlacementIneligibilityReason",
                          ).createInstantGameReason()
                        : t.optimizationGoal ===
                              r("AdsAPIOptimizationGoals")
                                .INCREMENTAL_OFFSITE_CONVERSIONS ||
                            (a ===
                              r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
                              (t.optimizationGoal ===
                                r("AdsAPIOptimizationGoals").REPLIES ||
                                t.optimizationGoal ===
                                  r("AdsAPIOptimizationGoals").CONVERSATIONS))
                          ? o(
                              "AdsPlacementIneligibilityReason",
                            ).createOptimizationGoalReason()
                          : t.destinationType ===
                              r("AdCampaignDestination").INSTAGRAM_LIVE
                            ? o(
                                "AdsPlacementIneligibilityReason",
                              ).createInstagramLiveReason()
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
            "instant_article",
          );
        },
        getPreviews: function (t) {
          var e = [];
          return (
            e.push("previews/instant_article_standard"),
            r("immutable").OrderedSet(e)
          );
        },
        getDefaultPreview: function () {
          return "previews/instant_article_standard";
        },
        adsetReducer: function (t, n) {
          var e = n.action;
          if (!c.isEnabled(e.eligibilityInformation.capabilities)) return t;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removeGroups.includes("facebook/instant_article")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      t,
                      "facebook/instant_article",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                      "facebook",
                    );
                  })
                : e.addGroups.includes("facebook/instant_article")
                  ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        t,
                        "facebook/instant_article",
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
      d = c;
    l.default = d;
  },
  98,
);
