__d(
  "AdsPlacementsFacebookBizDiscoFeedPositionPlugin",
  [
    "fbt",
    "ix",
    "AdCampaignDestination",
    "AdImageSpecCropKeys",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAPITargetFields",
    "AdsBizDiscoFeedPlacementUtils",
    "AdsBwIPlacementUtils",
    "AdsCampaignBizDiscoFeedPositionValidator",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsClickToCallAdsUtils",
    "AdsInstagramLeadGenPlacementUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementCopy",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementPositionLabelConstant",
    "AdsPreviewsBizDiscoFeedMobilePlugin",
    "AdsPromotedObjectTypes",
    "AdsReachFrequencyPlacementUtils",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "AdsUPVPlacementExpansionUtils",
    "AdsUnifiedProfileVisitUtils",
    "adsIGLoginPlacementUtils",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e(e) {
      return e === r("AdsPromotedObjectTypes").DONATION
        ? o("AdsPlacementIneligibilityReason").createDonationReason()
        : e === r("AdsPromotedObjectTypes").GROUP
          ? o("AdsPlacementIneligibilityReason").createGroupPromotionReason()
          : e === r("AdsPromotedObjectTypes").IMAGINATION
            ? o("AdsPlacementIneligibilityReason").createImaginationReason()
            : e === r("AdsPromotedObjectTypes").REMINDER
              ? o(
                  "AdsPlacementIneligibilityReason",
                ).createReminderPromotionReason()
              : null;
    }
    var c = {
        type: "placements/position",
        key: "facebook/biz_disco_feed",
        name: r("AdsPlacementPositionLabelConstant").biz_disco_feed,
        nameWithPlatform: s._(/*BTDS*/ ""),
        mediaRecommendation: {
          copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION
            .BIZ_DISCO_FEED,
          imageCrop: r("AdImageSpecCropKeys")["100x100"],
          videoCrop: "1:1",
        },
        apiPosition: "biz_disco_feed",
        placementImage: u("165585"),
        placementPreviewImage: u("165585"),
        platformKey: "facebook",
        isEnabled: function (t) {
          return !0;
        },
        getIneligibilityReason: function (n) {
          var t = o("AdsBwIPlacementUtils").getIneligibilityReason(n);
          if (t) return t;
          var a = o(
            "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
          ).getSOOBundleParentIneligibilityReason(c, n);
          if (a != null) return a;
          if (n.isReelsTrendingAds === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createReelsTrendingAdsReason();
          var i = o("AdsODAXUtils").maybeTranslateObjective(
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
          var l = r("AdsBizDiscoFeedPlacementUtils").getEligibleObjectives();
          if (!l.includes(i))
            return o("AdsPlacementIneligibilityReason").createObjectiveReason(
              n.objective,
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
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(r("AdsAPIDevicePlatform").DESKTOP);
          if (
            !r(
              "AdsBizDiscoFeedPlacementUtils",
            ).isEnglishSpeakingCountryIncluded(n)
          )
            return o("AdsPlacementIneligibilityReason").createCustomReason(
              s._(/*BTDS*/ ""),
            );
          var u = e(n.promotedObjectType);
          if (u) return u;
          if (n.destinationType === r("AdCampaignDestination").INSTAGRAM_LIVE)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createInstagramLiveReason();
          if (
            o(
              "AdsClickToCallAdsUtils",
            ).getIsCallAdsNewOptimizationUnderTrafficObjective(
              babelHelpers.extends({}, n, { objective: i }),
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createPhoneCallTrafficReason();
          var d = o(
            "AdsReachFrequencyPlacementUtils",
          ).getReachFrequencyDisabledReason(
            "facebook/biz_disco_feed",
            babelHelpers.extends({}, n, { objective: i }),
          );
          return d !== null
            ? d
            : o(
                  "AdsClickToCallAdsUtils",
                ).getIsClickToCallAdsUnderLeadGenObjective(
                  babelHelpers.extends({}, n, { objective: i }),
                )
              ? o("AdsPlacementIneligibilityReason").createPhoneCallLeadReason()
              : o(
                    "AdsClickToCallAdsUtils",
                  ).getIsClickToCallAdsUnderConversionsOrSalesObjective(
                    babelHelpers.extends({}, n, { objective: i }),
                  )
                ? o(
                    "AdsPlacementIneligibilityReason",
                  ).createPhoneCallConversionsOrSalesReason()
                : n.promotedObjectType ===
                      r("AdsPromotedObjectTypes").INSTAGRAM &&
                    (i === r("AdsAPIObjectives").CONVERSIONS ||
                      n.objective === r("AdsAPIObjectives").LINK_CLICKS)
                  ? o(
                      "AdsPlacementIneligibilityReason",
                    ).createInstagramDirectReason(n.objective)
                  : o(
                        "AdsInstagramLeadGenPlacementUtils",
                      ).isInstagramLeadGenDestinationSelected(
                        babelHelpers.extends({}, n, { objective: i }),
                      )
                    ? o(
                        "AdsPlacementIneligibilityReason",
                      ).createInstagramLeadGenReason(n.objective)
                    : o(
                          "adsIGLoginPlacementUtils",
                        ).getShouldDisableFBPlacementForIGLoginUsers(n.account)
                      ? o(
                          "AdsPlacementIneligibilityReason",
                        ).createIGLoginReason()
                      : o(
                            "AdsUnifiedProfileVisitUtils",
                          ).getIsPositionAlwaysDisabledForProfileVisits(
                            i,
                            n.promotedObjectType,
                          ) &&
                          !o(
                            "AdsUPVPlacementExpansionUtils",
                          ).getIsFbPlacementsExpansionEnabledForUPV()
                        ? o(
                            "AdsUnifiedProfileVisitUtils",
                          ).getUnifiedProfileVisitsAdsPlacementIneligibilityReason(
                            n.destinationType,
                          )
                        : n.objective === r("AdsAPIObjectives").APP_INSTALLS &&
                            n.promotedObjectType ===
                              r("AdsPromotedObjectTypes").CANVAS_APP
                          ? o(
                              "AdsPlacementIneligibilityReason",
                            ).createCanvasAppReason()
                          : i === r("AdsAPIObjectives").LEAD_GENERATION &&
                              n.destinationType ===
                                r("AdCampaignDestination").LEAD_FORM_MESSENGER
                            ? o(
                                "AdsPlacementIneligibilityReason",
                              ).createLeadFormMessengerReason()
                            : n.destinationType ===
                                r("AdCampaignDestination").FACEBOOK_LIVE
                              ? o(
                                  "AdsPlacementIneligibilityReason",
                                ).createFacebookLiveReason()
                              : null;
        },
        isActive: function (t) {
          return o("AdsPlacementAPISpecReaderUtils").isActivePosition(
            t,
            "facebook",
            "biz_disco_feed",
          );
        },
        isInactiveByDefault: function (t) {
          return !1;
        },
        getPreviews: function (t) {
          var e = [r("AdsPreviewsBizDiscoFeedMobilePlugin").key];
          return r("immutable").OrderedSet(e);
        },
        getDefaultPreview: function () {
          return r("AdsPreviewsBizDiscoFeedMobilePlugin").key;
        },
        adsetValidators: [r("AdsCampaignBizDiscoFeedPositionValidator")],
        adsetReducer: function (t, n) {
          var e = n.action;
          if (!c.isEnabled(e.eligibilityInformation.capabilities)) return t;
          switch (e.type) {
            case r("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removeGroups.includes("facebook/biz_disco_feed")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      t,
                      "facebook/biz_disco_feed",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                      "facebook",
                    );
                  })
                : e.addGroups.includes("facebook/biz_disco_feed")
                  ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        t,
                        "facebook/biz_disco_feed",
                        e.eligibilityInformation,
                        r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                        "facebook",
                      );
                    })
                  : t;
            case r("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(t, e.ids, function (t) {
                return o("AdsPlacementAPISpecWriterUtils").addGroup(
                  t,
                  e.pluginKey,
                  e.eligibilityInformation,
                  r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                  "facebook",
                );
              });
            case r("AdsUEditorCampaignPlacementRemoveActionFlux").actionType:
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
      d = c;
    l.default = d;
  },
  226,
);
