__d(
  "AdsPlacementsFacebookProfileFeedPositionPlugin",
  [
    "fbt",
    "ix",
    "AdCampaignDestination",
    "AdImageSpecCropKeys",
    "AdsAPIDevicePlatform",
    "AdsAPITargetFields",
    "AdsAccountUtils",
    "AdsBwIPlacementUtils",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsCampaignProfileFeedPositionValidator",
    "AdsFacebookProfileFeedUtils",
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
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "AdsUnifiedProfileVisitUtils",
    "IGAdsSensitiveVerticalsUtils",
    "adsIGLoginPlacementUtils",
    "adsPlacementAPISpecReaderIsActiveFacebookPosition",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = {
        type: "placements/position",
        key: "facebook/profile_feed",
        name: r("AdsPlacementPositionLabelConstant").profile_feed,
        nameWithPlatform: s._(/*BTDS*/ "Facebook profile feed"),
        mediaRecommendation: {
          copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION
            .FB_PROFILE_FEED,
          imageCrop: r("AdImageSpecCropKeys")["100x100"],
          videoCrop: "1:1",
        },
        apiPosition: "profile_feed",
        placementImage: u("386460"),
        placementPreviewImage: u("386460"),
        platformKey: "facebook",
        adsetValidators: [r("AdsCampaignProfileFeedPositionValidator")],
        isEnabled: function (t) {
          return r("AdsAccountUtils").hasCapabilityFromList(
            t,
            "IS_IN_SENSITIVE_ADVERTISER_VERTICAL_FOR_PROFILE_FEED",
          )
            ? !1
            : r("gkx")("21841");
        },
        getIneligibilityReason: function (n) {
          var t,
            a = o("AdsBwIPlacementUtils").getIneligibilityReason(n);
          if (a) return a;
          var i = o(
            "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
          ).getSOOBundleParentIneligibilityReason(e, n);
          if (i != null) return i;
          if (n.isMetaMomentMaker === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createMetaMomentMakerReason();
          if (n.isReelsTrendingAds === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createReelsTrendingAdsReason();
          var l = r("AdsAccountUtils").hasCapabilityFromList(
            n.capabilities,
            "ADS_TRUST_TIER_0_FULL",
          );
          if (l && !r("gkx")("21842"))
            return o(
              "AdsPlacementIneligibilityReason",
            ).createAdAccountTrustTierReason();
          var s = n.buyingType,
            u = n.optimizationGoal,
            c = n.spec;
          if (
            c.device_platforms &&
            !(
              (t = c.device_platforms) != null &&
              t.includes(r("AdsAPIDevicePlatform").MOBILE)
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(r("AdsAPIDevicePlatform").DESKTOP);
          if (
            !o(
              "AdsFacebookProfileFeedUtils",
            ).isEligibleBuyingTypeForFacebookProfileFeedPlacement(s)
          )
            return o("AdsPlacementIneligibilityReason").createBuyingTypeReason(
              s,
            );
          var d = o("AdsODAXUtils").maybeTranslateObjective(
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
          var m = o(
            "AdsFacebookProfileFeedUtils",
          ).isEligibleObjectiveForFacebookProfileFeedPlacement(d);
          if (!m)
            return o("AdsPlacementIneligibilityReason").createObjectiveReason(
              n.objective,
            );
          var p = o(
            "AdsFacebookProfileFeedUtils",
          ).isEligibleOptimizationGoalForFacebookProfileFeedPlacement(u);
          return p
            ? n.promotedObjectType === r("AdsPromotedObjectTypes").DONATION
              ? o("AdsPlacementIneligibilityReason").createDonationReason()
              : n.promotedObjectType === r("AdsPromotedObjectTypes").GROUP
                ? o(
                    "AdsPlacementIneligibilityReason",
                  ).createGroupPromotionReason()
                : n.promotedObjectType ===
                    r("AdsPromotedObjectTypes").IMAGINATION
                  ? o(
                      "AdsPlacementIneligibilityReason",
                    ).createImaginationReason()
                  : n.promotedObjectType ===
                      r("AdsPromotedObjectTypes").REMINDER
                    ? o(
                        "AdsPlacementIneligibilityReason",
                      ).createReminderPromotionReason()
                    : o(
                          "adsIGLoginPlacementUtils",
                        ).getShouldDisableFBPlacementForIGLoginUsers(n.account)
                      ? o(
                          "AdsPlacementIneligibilityReason",
                        ).createIGLoginReason()
                      : o(
                            "AdsUnifiedProfileVisitUtils",
                          ).getIsPositionAlwaysDisabledForProfileVisits(
                            d,
                            n.promotedObjectType,
                          )
                        ? o(
                            "AdsUnifiedProfileVisitUtils",
                          ).getUnifiedProfileVisitsAdsPlacementIneligibilityReason(
                            n.destinationType,
                          )
                        : n.destinationType ===
                            r("AdCampaignDestination").INSTAGRAM_LIVE
                          ? o(
                              "AdsPlacementIneligibilityReason",
                            ).createInstagramLiveReason()
                          : o(
                                "AdsInstagramPlacementUtils",
                              ).isInstagramDestinationEnabledAndSelected(
                                babelHelpers.extends({}, n, { objective: d }),
                              )
                            ? o(
                                "AdsPlacementIneligibilityReason",
                              ).createInstagramDirectReason(n.objective)
                            : o(
                                  "AdsInstagramLeadGenPlacementUtils",
                                ).isInstagramLeadGenDestinationSelected(
                                  babelHelpers.extends({}, n, { objective: d }),
                                )
                              ? o(
                                  "AdsPlacementIneligibilityReason",
                                ).createInstagramLeadGenReason(n.objective)
                              : null
            : o(
                "AdsPlacementIneligibilityReason",
              ).createOptimizationGoalReason();
        },
        isActive: function (t) {
          return r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
            t,
            "profile_feed",
          );
        },
        isInactiveByDefault: function (t) {
          return t.isReelsTrendingAds === !0 ||
            r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
            ? !0
            : !r("gkx")("21843");
        },
        getPreviews: function (t) {
          var e = ["previews/facebook_profile_feed_mobile"];
          return r("immutable").OrderedSet(e);
        },
        getDefaultPreview: function () {
          return "previews/facebook_profile_feed_mobile";
        },
        adsetReducer: function (t, n) {
          var e = n.action;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removeGroups.includes("facebook/profile_feed")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      t,
                      "facebook/profile_feed",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                      "facebook",
                    );
                  })
                : e.addGroups.includes("facebook/profile_feed")
                  ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        t,
                        "facebook/profile_feed",
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
      c = e;
    l.default = c;
  },
  226,
);
