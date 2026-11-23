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
    "isConsiderationPlacementLocked",
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
    function f(e, t) {
      var n,
        a = t.objective;
      if (
        o(
          "AdsInstagramPlacementUtils",
        ).isInstagramDestinationEnabledAndSelected(t) ||
        (e.promotedObjectType === r("AdsPromotedObjectTypes").INSTAGRAM &&
          (a === r("AdsAPIObjectives").CONVERSIONS ||
            e.objective === r("AdsAPIObjectives").LINK_CLICKS))
      )
        return o("AdsPlacementIneligibilityReason").createInstagramDirectReason(
          e.objective,
        );
      if (
        o(
          "AdsInstagramLeadGenPlacementUtils",
        ).isInstagramLeadGenDestinationSelected(t)
      )
        return o(
          "AdsPlacementIneligibilityReason",
        ).createInstagramLeadGenReason(e.objective);
      if (o("AdsManagerIGLoginUtils").getIsIGLogin(e.account))
        return o("AdsPlacementIneligibilityReason").createIGLoginReason();
      if (
        o(
          "AdsUnifiedProfileVisitUtils",
        ).getIsPositionAlwaysDisabledForProfileVisits(a, e.promotedObjectType)
      )
        return o(
          "AdsUnifiedProfileVisitUtils",
        ).getUnifiedProfileVisitsAdsPlacementIneligibilityReason(
          e.destinationType,
        );
      var i = _(e);
      return i != null
        ? i
        : (n = e.isClickToMPAds) != null && n
          ? o("AdsPlacementIneligibilityReason").createGenericReason()
          : o(
                "AdsClickToCallAdsUtils",
              ).getIsCallAdsNewOptimizationUnderTrafficObjective(e)
            ? o(
                "AdsPlacementIneligibilityReason",
              ).createPhoneCallTrafficReason()
            : o(
                  "AdsClickToCallAdsUtils",
                ).getIsClickToCallAdsUnderConversionsOrSalesObjective(t)
              ? o(
                  "AdsPlacementIneligibilityReason",
                ).createPhoneCallConversionsOrSalesReason()
              : null;
    }
    var g = {
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
        placementInfo: s._(/*BTDS*/ "", [
          s._implicitParam(
            "=m2",
            c.jsx(r("GeoLink.react"), {
              href: o("AdsUniqueMetricsHelpID").getUniqueMetricsHelpURL(),
              target: "_blank",
              children: s._(/*BTDS*/ ""),
            }),
          ),
        ]),
        platformKey: "audience_network",
        isEnabled: function (t) {
          return !0;
        },
        adsetReducer: function (t, n) {
          var e = n.action;
          if (!g.isEnabled(e.eligibilityInformation.capabilities)) return t;
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
        shouldHideInPlacementUI: function (t) {
          return r("isConsiderationPlacementLocked")(t.optimizationGoal);
        },
        isInactiveByDefault: function (t) {
          return t.isReelsTrendingAds === !0;
        },
        getIneligibilityReason: function (t) {
          if (
            o("ASAPlacementControlsStoreUtils").hasAccountPlacementExclusions(
              t,
              "audience_network_rewarded_video",
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
          ).getSOOBundleParentIneligibilityReason(g, t);
          if (a != null) return a;
          var i = o("AdsODAXUtils").maybeTranslateObjective(
            t.objective,
            t.promotedObjectType,
            t.optimizationGoal,
          );
          if (t.directInstallDevices === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDirectInstallReason();
          var l = o(
            "AdsReachFrequencyPlacementUtils",
          ).getReachFrequencyDisabledReason(
            "audience_network/rewarded_video",
            babelHelpers.extends({}, t, { objective: i }),
          );
          if (l) return l;
          if (
            !o(
              "AdsVideoBuyingStoreUtils",
            ).checkIfPlacementPositionValidForBuyingOption(
              babelHelpers.extends({}, t, { objective: i }),
              "rewarded_video",
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createOptimizationGoalReason();
          var s = f(t, babelHelpers.extends({}, t, { objective: i }));
          return s != null
            ? s
            : o("AdsPlacementOmnichannelUtils").isIneligibleForOmnichannelAd(
                  babelHelpers.extends({}, t, { objective: i }),
                ) &&
                !(
                  t.promotedObjectType ===
                    r("AdsPromotedObjectTypes").WEB_AND_APP && r("gkx")("13447")
                )
              ? o("AdsPlacementIneligibilityReason").createOmnichannelReason()
              : t.destinationType === r("AdCampaignDestination").INSTAGRAM_LIVE
                ? o(
                    "AdsPlacementIneligibilityReason",
                  ).createInstagramLiveReason()
                : t.destinationType === r("AdCampaignDestination").FACEBOOK_LIVE
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
                        i !== r("AdsAPIObjectives").CONVERSIONS
                      ? o(
                          "AdsPlacementIneligibilityReason",
                        ).createOptimizationGoalReason()
                      : i === r("AdsAPIObjectives").REACH
                        ? o(
                            "AdsPlacementIneligibilityReason",
                          ).createObjectiveReason(t.objective)
                        : i === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
                            t.optimizationGoal ===
                              r("AdsAPIOptimizationGoals").QUALITY_CALL
                          ? o(
                              "AdsPlacementIneligibilityReason",
                            ).createOptimizationGoalReason()
                          : o(
                              "AdsPlacementANEligibilityUtils",
                            ).getANIneligibilityReason(
                              babelHelpers.extends({}, t, { objective: i }),
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
      h = g;
    l.default = h;
  },
  226,
);
