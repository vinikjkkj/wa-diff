__d(
  "AdsPlacementsFacebookGroupTabPositionPlugin",
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
    "AdsAppUtils",
    "AdsBwIPlacementUtils",
    "AdsCampaignGroupTabPositionValidator",
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
    "AdsPromotedObjectTypes",
    "AdsReachFrequencyPlacementUtils",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "AdsUnifiedProfileVisitUtils",
    "adsIGLoginPlacementUtils",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "immutable",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c,
      d = [(c = r("AdsAPIObjectives")).CONVERSIONS, c.LINK_CLICKS, c.REACH],
      m =
        ((e = {}),
        (e[c.CONVERSIONS] = "ENABLE_CONVERSIONS_FOR_FB_GROUP_TAB_ADS"),
        (e[c.LINK_CLICKS] = "ENABLE_LINK_CLICK_FOR_FB_GROUP_TAB_ADS"),
        (e[c.REACH] = "ENABLE_REACH_FOR_FB_GROUP_TAB_ADS"),
        e),
      p = {
        type: "placements/position",
        key: "facebook/group_tab",
        name: r("AdsPlacementPositionLabelConstant").groups_feed,
        nameWithPlatform: s._(/*BTDS*/ "Facebook Groups feed"),
        mediaRecommendation: {
          copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION
            .FB_GROUPS_FEED,
          imageCrop: r("AdImageSpecCropKeys")["100x100"],
          videoCrop: "1:1",
        },
        apiPosition: "groups_feed",
        placementImage: u("556714"),
        placementPreviewImage: u("556714"),
        platformKey: "facebook",
        isEnabled: function (t) {
          return r("AdsAccountUtils").hasCapabilityFromList(
            t,
            "ENABLE_FB_GROUP_ADS",
          );
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
          var i = o(
            "AdsReachFrequencyPlacementUtils",
          ).getReachFrequencyDisabledReason(
            "facebook/group_tab",
            babelHelpers.extends({}, t, { objective: a }),
          );
          if (i !== null) return i;
          var l = r("AdsAppUtils").isAppEngagementObjective(
            a,
            t.promotedObjectType,
          );
          if (l)
            return o("AdsPlacementIneligibilityReason").createMobileAppReason();
          if (t.promotedObjectType === r("AdsPromotedObjectTypes").MESSENGER)
            return o("AdsPlacementIneligibilityReason").createMessengerReason(
              t.objective,
            );
          if (t.promotedObjectType === r("AdsPromotedObjectTypes").WHATSAPP)
            return o("AdsPlacementIneligibilityReason").createWhatsAppReason(
              t.objective,
            );
          if (
            t.promotedObjectType === r("AdsPromotedObjectTypes").INSTAGRAM &&
            (a === r("AdsAPIObjectives").CONVERSIONS ||
              t.objective === r("AdsAPIObjectives").LINK_CLICKS)
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
          if (t.containsDCO === !0)
            return o("AdsPlacementIneligibilityReason").createDCOReason();
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
          var s = d.filter(function (e) {
            var n = m[e];
            return n != null
              ? r("AdsAccountUtils").hasCapabilityFromList(t.capabilities, n)
              : !1;
          });
          return s.includes(a)
            ? t.optimizationGoal ===
              r("AdsAPIOptimizationGoals").INCREMENTAL_OFFSITE_CONVERSIONS
              ? o(
                  "AdsPlacementIneligibilityReason",
                ).createOptimizationGoalReason()
              : o(
                    "AdsClickToCallAdsUtils",
                  ).getIsClickToCallAdsUnderLeadGenObjective(
                    babelHelpers.extends({}, t, { objective: a }),
                  )
                ? o(
                    "AdsPlacementIneligibilityReason",
                  ).createPhoneCallLeadReason()
                : o(
                      "AdsClickToCallAdsUtils",
                    ).getIsClickToCallAdsUnderConversionsOrSalesObjective(
                      babelHelpers.extends({}, t, { objective: a }),
                    )
                  ? o(
                      "AdsPlacementIneligibilityReason",
                    ).createPhoneCallConversionsOrSalesReason()
                  : o(
                        "AdsClickToCallAdsUtils",
                      ).getIsCallAdsNewOptimizationUnderTrafficObjective(t)
                    ? o(
                        "AdsPlacementIneligibilityReason",
                      ).createPhoneCallTrafficReason()
                    : t.destinationType ===
                        r("AdCampaignDestination").INSTAGRAM_LIVE
                      ? o(
                          "AdsPlacementIneligibilityReason",
                        ).createInstagramLiveReason()
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
                              a,
                              t.promotedObjectType,
                            )
                          ? o(
                              "AdsUnifiedProfileVisitUtils",
                            ).getUnifiedProfileVisitsAdsPlacementIneligibilityReason(
                              t.destinationType,
                            )
                          : t.spec &&
                              !o(
                                "AdsPlacementAPISpecReaderUtils",
                              ).isActiveDevicePlatform(
                                t.spec,
                                r("AdsAPIDevicePlatform").MOBILE,
                              ) &&
                              o(
                                "AdsPlacementAPISpecReaderUtils",
                              ).isActiveDevicePlatform(
                                t.spec,
                                r("AdsAPIDevicePlatform").DESKTOP,
                              )
                            ? o(
                                "AdsPlacementIneligibilityReason",
                              ).createDevicePlatformReason(
                                r("AdsAPIDevicePlatform").DESKTOP,
                              )
                            : null
            : o("AdsPlacementIneligibilityReason").createObjectiveReason(
                t.objective,
              );
        },
        isActive: function (t) {
          return o("AdsPlacementAPISpecReaderUtils").isActivePosition(
            t,
            "facebook",
            "groups_feed",
          );
        },
        isInactiveByDefault: function (t) {
          return (r("vulture")("RS9JIkrjFE7Tly-g6ZqJAhAIfI8="), !1);
        },
        adsetValidators: [r("AdsCampaignGroupTabPositionValidator")],
        getPreviews: function (t) {
          var e = ["previews/facebook_group_tab"];
          return r("immutable").OrderedSet(e);
        },
        getDefaultPreview: function () {
          return "previews/facebook_group_tab";
        },
        adsetReducer: function (t, n) {
          var e = n.action;
          if (!p.isEnabled(e.eligibilityInformation.capabilities)) return t;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removeGroups.includes("facebook/group_tab")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      t,
                      "facebook/group_tab",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                      "facebook",
                    );
                  })
                : e.addGroups.includes("facebook/group_tab")
                  ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        t,
                        "facebook/group_tab",
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
      _ = p;
    l.default = _;
  },
  226,
);
