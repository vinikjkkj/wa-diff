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
    "AdsUnifiedProfileVisitUtils",
    "adsIGLoginPlacementUtils",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = {
        type: "placements/position",
        key: "facebook/biz_disco_feed",
        name: r("AdsPlacementPositionLabelConstant").biz_disco_feed,
        nameWithPlatform: s._(/*BTDS*/ "Facebook Business Explore"),
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
          ).getSOOBundleParentIneligibilityReason(e, n);
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
              s._(
                /*BTDS*/ "This placement isn't available for one or more of the countries you selected.",
              ),
            );
          if (n.promotedObjectType === r("AdsPromotedObjectTypes").DONATION)
            return o("AdsPlacementIneligibilityReason").createDonationReason();
          if (n.promotedObjectType === r("AdsPromotedObjectTypes").GROUP)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createGroupPromotionReason();
          if (n.promotedObjectType === r("AdsPromotedObjectTypes").IMAGINATION)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createImaginationReason();
          if (n.promotedObjectType === r("AdsPromotedObjectTypes").REMINDER)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createReminderPromotionReason();
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
          var u = o(
            "AdsReachFrequencyPlacementUtils",
          ).getReachFrequencyDisabledReason(
            "facebook/biz_disco_feed",
            babelHelpers.extends({}, n, { objective: i }),
          );
          return u !== null
            ? u
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
                          )
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
        adsetReducer: function (n, a) {
          var t = a.action;
          if (!e.isEnabled(t.eligibilityInformation.capabilities)) return n;
          switch (t.type) {
            case r("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return t.removeGroups.includes("facebook/biz_disco_feed")
                ? o("AdsMutators").mutateEach(n, t.campaignIDs, function (e) {
                    return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      e,
                      "facebook/biz_disco_feed",
                      t.eligibilityInformation,
                      r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                      "facebook",
                    );
                  })
                : t.addGroups.includes("facebook/biz_disco_feed")
                  ? o("AdsMutators").mutateEach(n, t.campaignIDs, function (e) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        e,
                        "facebook/biz_disco_feed",
                        t.eligibilityInformation,
                        r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                        "facebook",
                      );
                    })
                  : n;
            case r("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(n, t.ids, function (e) {
                return o("AdsPlacementAPISpecWriterUtils").addGroup(
                  e,
                  t.pluginKey,
                  t.eligibilityInformation,
                  r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                  "facebook",
                );
              });
            case r("AdsUEditorCampaignPlacementRemoveActionFlux").actionType:
              return o("AdsMutators").mutateEach(
                n,
                t.campaignIDs,
                function (e) {
                  return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                    e,
                    t.pluginKey,
                    t.eligibilityInformation,
                    r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                    "facebook",
                  );
                },
              );
          }
          return n;
        },
        parentPlacements: r("immutable").OrderedSet(["facebook/feed"]),
        childPlacements: r("immutable").OrderedSet([]),
      },
      c = e;
    l.default = c;
  },
  226,
);
