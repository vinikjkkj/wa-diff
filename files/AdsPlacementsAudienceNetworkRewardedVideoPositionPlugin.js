__d(
  "AdsPlacementsAudienceNetworkRewardedVideoPositionPlugin",
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
    "AdsBwIPlacementUtils",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsClickToCallAdsUtils",
    "AdsInstagramLeadGenPlacementUtils",
    "AdsInstagramPlacementUtils",
    "AdsManagerIGLoginUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPlacementANEligibilityUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementCopy",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementOmnichannelUtils",
    "AdsPlacementPositionLabelConstant",
    "AdsPlacementPositionLabelWithPlatformConstant",
    "AdsPlacementUIUtils",
    "AdsPromotedObjectTypes",
    "AdsReachFrequencyPlacementUtils",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "AdsUEditorSelectAppProvider",
    "AdsUnifiedProfileVisitUtils",
    "AdsUniqueMetricsHelpID",
    "AdsVideoBuyingStoreUtils",
    "GeoLink.react",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "gkx",
    "immutable",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react"));
    function d() {
      return r("gkx")("7201") ? u("1115262") : u("939867");
    }
    var m = r("immutable").Set([
        r("AdsAPIObjectives").APP_INSTALLS,
        r("AdsAPIObjectives").CONVERSIONS,
        r("AdsAPIObjectives").LINK_CLICKS,
        r("AdsAPIObjectives").MOBILE_APP_INSTALLS,
        r("AdsAPIObjectives").MOBILE_APP_ENGAGEMENT,
        r("AdsAPIObjectives").VIDEO_VIEWS,
        r("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY,
        r("AdsAPIObjectives").MESSAGES,
        r("AdsAPIObjectives").REACH,
        r("AdsAPIObjectives").LEAD_GENERATION,
        r("AdsAPIObjectives").PRODUCT_CATALOG_SALES,
      ]),
      p = r("immutable").Set([r("AdsAPIDevicePlatform").MOBILE]);
    function _(e) {
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
              : null;
    }
    var f = {
        type: "placements/position",
        key: "audience_network/rewarded_video",
        apiPosition: "rewarded_video",
        name: r("AdsPlacementPositionLabelConstant").rewarded_video,
        nameWithPlatform: r("AdsPlacementPositionLabelWithPlatformConstant")
          .audience_network.rewarded_video,
        mediaRecommendation: {
          copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION
            .AN_REWARDED_VIDEO,
          imageCrop: r("AdImageSpecCropKeys")["90x160"],
          videoCrop: "9:16",
        },
        placementPreviewImage: d(),
        placementInfo: s._(
          /*BTDS*/ "Your ad may appear in apps where {=m2} choose to watch the entire ad in exchange for in-app rewards.",
          [
            s._implicitParam(
              "=m2",
              c.jsx(r("GeoLink.react"), {
                href: o("AdsUniqueMetricsHelpID").getUniqueMetricsHelpURL(),
                target: "_blank",
                children: s._(/*BTDS*/ "people"),
              }),
            ),
          ],
        ),
        platformKey: "audience_network",
        isEnabled: function (t) {
          return !0;
        },
        adsetReducer: function (t, n) {
          var e = n.action;
          if (!f.isEnabled(e.eligibilityInformation.capabilities)) return t;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removeGroups.includes("audience_network/rewarded_video")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      t,
                      "audience_network/rewarded_video",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").AUDIENCE_NETWORK_POSITIONS,
                      "audience_network",
                    );
                  })
                : e.addGroups.includes("audience_network/rewarded_video")
                  ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        t,
                        "audience_network/rewarded_video",
                        e.eligibilityInformation,
                        r("AdsAPITargetFields").AUDIENCE_NETWORK_POSITIONS,
                        "audience_network",
                      );
                    })
                  : t;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(t, e.ids, function (t) {
                var n = t;
                return (
                  (n = o(
                    "AdsPlacementAPISpecWriterUtils",
                  ).removeMessengerThreadPlacement(
                    n,
                    e.eligibilityInformation,
                  )),
                  (n = o("AdsPlacementAPISpecWriterUtils").addGroup(
                    n,
                    e.pluginKey,
                    e.eligibilityInformation,
                    r("AdsAPITargetFields").AUDIENCE_NETWORK_POSITIONS,
                    "audience_network",
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
                    r("AdsAPITargetFields").AUDIENCE_NETWORK_POSITIONS,
                    "audience_network",
                  );
                },
              );
          }
          return t;
        },
        isInactiveByDefault: function (t) {
          return t.isReelsTrendingAds === !0;
        },
        getIneligibilityReason: function (t) {
          var e;
          if (
            o("ASAPlacementControlsStoreUtils").hasAccountPlacementExclusions(
              t,
              "audience_network_rewarded_video",
            )
          ) {
            var n;
            return o(
              "AdsPlacementIneligibilityReason",
            ).createAccountControlPlacementExclusionReason(
              (n = t.account) == null ? void 0 : n.account_id,
              t.objective,
            );
          }
          if (t.isReelsTrendingAds === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createReelsTrendingAdsReason();
          var a = o("AdsBwIPlacementUtils").getIneligibilityReason(t);
          if (a) return a;
          var i = o(
            "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
          ).getSOOBundleParentIneligibilityReason(f, t);
          if (i != null) return i;
          var l = o("AdsODAXUtils").maybeTranslateObjective(
            t.objective,
            t.promotedObjectType,
            t.optimizationGoal,
          );
          if (t.directInstallDevices === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDirectInstallReason();
          var s = o(
            "AdsReachFrequencyPlacementUtils",
          ).getReachFrequencyDisabledReason(
            "audience_network/rewarded_video",
            babelHelpers.extends({}, t, { objective: l }),
          );
          if (s) return s;
          if (
            !o(
              "AdsVideoBuyingStoreUtils",
            ).checkIfPlacementPositionValidForBuyingOption(
              babelHelpers.extends({}, t, { objective: l }),
              "rewarded_video",
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createOptimizationGoalReason();
          if (
            o(
              "AdsInstagramPlacementUtils",
            ).isInstagramDestinationEnabledAndSelected(
              babelHelpers.extends({}, t, { objective: l }),
            ) ||
            (t.promotedObjectType === r("AdsPromotedObjectTypes").INSTAGRAM &&
              (l === r("AdsAPIObjectives").CONVERSIONS ||
                t.objective === r("AdsAPIObjectives").LINK_CLICKS))
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createInstagramDirectReason(t.objective);
          if (
            o(
              "AdsInstagramLeadGenPlacementUtils",
            ).isInstagramLeadGenDestinationSelected(
              babelHelpers.extends({}, t, { objective: l }),
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createInstagramLeadGenReason(t.objective);
          if (o("AdsManagerIGLoginUtils").getIsIGLogin(t.account))
            return o("AdsPlacementIneligibilityReason").createIGLoginReason();
          if (
            o(
              "AdsUnifiedProfileVisitUtils",
            ).getIsPositionAlwaysDisabledForProfileVisits(
              l,
              t.promotedObjectType,
            )
          )
            return o(
              "AdsUnifiedProfileVisitUtils",
            ).getUnifiedProfileVisitsAdsPlacementIneligibilityReason(
              t.destinationType,
            );
          var u = _(t);
          return u != null
            ? u
            : (e = t.isClickToMPAds) != null && e
              ? o("AdsPlacementIneligibilityReason").createGenericReason()
              : o(
                    "AdsClickToCallAdsUtils",
                  ).getIsCallAdsNewOptimizationUnderTrafficObjective(t)
                ? o(
                    "AdsPlacementIneligibilityReason",
                  ).createPhoneCallTrafficReason()
                : o(
                      "AdsClickToCallAdsUtils",
                    ).getIsClickToCallAdsUnderConversionsOrSalesObjective(
                      babelHelpers.extends({}, t, { objective: l }),
                    )
                  ? o(
                      "AdsPlacementIneligibilityReason",
                    ).createPhoneCallConversionsOrSalesReason()
                  : o(
                        "AdsPlacementOmnichannelUtils",
                      ).isIneligibleForOmnichannelAd(
                        babelHelpers.extends({}, t, { objective: l }),
                      ) &&
                      !(
                        t.promotedObjectType ===
                          r("AdsPromotedObjectTypes").WEB_AND_APP &&
                        r("gkx")("13447")
                      )
                    ? o(
                        "AdsPlacementIneligibilityReason",
                      ).createOmnichannelReason()
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
                        : r("gkx")("21348") &&
                            o("AdsPlacementUIUtils").isGrowthAppStoreValue(
                              r("AdsUEditorSelectAppProvider")
                                .toFluxStore()
                                .getState().selectedAppStore,
                            )
                          ? o(
                              "AdsPlacementIneligibilityReason",
                            ).createGrowthAppStoreReason()
                          : t.optimizationGoal ===
                                r("AdsAPIOptimizationGoals")
                                  .INCREMENTAL_OFFSITE_CONVERSIONS &&
                              l !== r("AdsAPIObjectives").CONVERSIONS
                            ? o(
                                "AdsPlacementIneligibilityReason",
                              ).createOptimizationGoalReason()
                            : l === r("AdsAPIObjectives").REACH
                              ? o(
                                  "AdsPlacementIneligibilityReason",
                                ).createObjectiveReason(t.objective)
                              : l ===
                                    r("AdsAPIObjectives")
                                      .PRODUCT_CATALOG_SALES &&
                                  t.optimizationGoal ===
                                    r("AdsAPIOptimizationGoals").QUALITY_CALL
                                ? o(
                                    "AdsPlacementIneligibilityReason",
                                  ).createOptimizationGoalReason()
                                : o(
                                    "AdsPlacementANEligibilityUtils",
                                  ).getANIneligibilityReason(
                                    babelHelpers.extends({}, t, {
                                      objective: l,
                                    }),
                                    m,
                                    p,
                                    !1,
                                    t.objective,
                                  );
        },
        isActive: function (t) {
          return o(
            "AdsPlacementAPISpecReaderUtils",
          ).isActiveAudienceNetworkPosition(t, "rewarded_video");
        },
        adsetValidators: [],
        getPreviews: function (t) {
          return r("immutable").OrderedSet(["previews/rewarded_video"]);
        },
        getDefaultPreview: function () {
          return "previews/rewarded_video";
        },
        parentPlacements: r("immutable").OrderedSet(["facebook/feed"]),
      },
      g = f;
    l.default = g;
  },
  226,
);
