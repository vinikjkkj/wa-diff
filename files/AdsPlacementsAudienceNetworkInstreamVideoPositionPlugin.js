__d(
  "AdsPlacementsAudienceNetworkInstreamVideoPositionPlugin",
  [
    "fbt",
    "ix",
    "ASAPlacementControlsStoreUtils",
    "AdCampaignDestination",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAPITargetFields",
    "AdsAccountUtils",
    "AdsAppUrlUtils",
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
    "AdsPlacementEligibilityInfoUtils",
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
    "AdsVideoBuyingStoreUtils",
    "AdsWhatsAppPlacementUtils",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "gkx",
    "immutable",
    "isConsiderationPlacementLocked",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = r("immutable").Set([
        (e = r("AdsAPIObjectives")).VIDEO_VIEWS,
        e.BRAND_AWARENESS,
        e.POST_ENGAGEMENT,
        e.CONVERSIONS,
        e.REACH,
        e.OUTCOME_AWARENESS,
        e.WILDCARD_INTERNAL_ONLY,
      ]),
      d = r("immutable").Set([
        r("AdsAPIDevicePlatform").DESKTOP,
        r("AdsAPIDevicePlatform").MOBILE,
      ]);
    function m(e, t) {
      var n;
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
                      ).getIsClickToCallAdsUnderConversionsOrSalesObjective(
                        babelHelpers.extends({}, e, { objective: t }),
                      )
                    ? o(
                        "AdsPlacementIneligibilityReason",
                      ).createPhoneCallConversionsOrSalesReason()
                    : null;
    }
    function p(e) {
      return e === r("AdCampaignDestination").INSTAGRAM_LIVE
        ? o("AdsPlacementIneligibilityReason").createInstagramLiveReason()
        : e === r("AdCampaignDestination").FACEBOOK_LIVE
          ? o("AdsPlacementIneligibilityReason").createFacebookLiveReason()
          : null;
    }
    function _(e, t) {
      return t ===
        r("AdsAPIOptimizationGoals").INCREMENTAL_OFFSITE_CONVERSIONS ||
        (e === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
          t === r("AdsAPIOptimizationGoals").QUALITY_CALL)
        ? o("AdsPlacementIneligibilityReason").createOptimizationGoalReason()
        : null;
    }
    function f(e, t) {
      return o(
        "AdsInstagramPlacementUtils",
      ).isInstagramDestinationEnabledAndSelected(
        babelHelpers.extends({}, e, { objective: t }),
      ) ||
        (e.promotedObjectType === r("AdsPromotedObjectTypes").INSTAGRAM &&
          (t === r("AdsAPIObjectives").CONVERSIONS ||
            e.objective === r("AdsAPIObjectives").LINK_CLICKS))
        ? o("AdsPlacementIneligibilityReason").createInstagramDirectReason(
            e.objective,
          )
        : null;
    }
    var g = {
        type: "placements/position",
        key: "audience_network/instream_video",
        apiPosition: "instream_video",
        name: r("AdsPlacementPositionLabelConstant").instream_video,
        nameWithPlatform: r("AdsPlacementPositionLabelWithPlatformConstant")
          .audience_network.instream_video,
        mediaRecommendation: {
          copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION
            .AN_INSTREAM_VIDEO,
          videoCrop: "16:9",
        },
        placementPreviewImage: u("556707"),
        placementPreviewVideo: "10150008661714135",
        placementInfo: s._(/*BTDS*/ ""),
        platformKey: "audience_network",
        adsetValidators: [],
        isEnabled: function (t) {
          return !r("AdsAccountUtils").hasCapabilityFromList(
            t,
            "ADNW_DISABLE_INSTREAM_AND_WEB_PLACEMENT",
          );
        },
        adsetReducer: function (t, n) {
          var e = n.action;
          if (!g.isEnabled(e.eligibilityInformation.capabilities)) return t;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removeGroups.includes("audience_network/instream_video")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      t,
                      "audience_network/instream_video",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").AUDIENCE_NETWORK_POSITIONS,
                      "audience_network",
                    );
                  })
                : e.addGroups.includes("audience_network/instream_video")
                  ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        t,
                        "audience_network/instream_video",
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
          return !1;
        },
        getIneligibilityReason: function (t) {
          var e, n;
          if (
            o("ASAPlacementControlsStoreUtils").hasAccountPlacementExclusions(
              t,
              "audience_network_instream_video",
            )
          ) {
            var a;
            return o(
              "AdsPlacementIneligibilityReason",
            ).createAccountControlPlacementExclusionReason(
              (a = t.account) == null ? void 0 : a.account_id,
              t.objective,
            );
          }
          if (t.isReelsTrendingAds === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createReelsTrendingAdsReason();
          var i = o("AdsBwIPlacementUtils").getIneligibilityReason(t);
          if (i) return i;
          var l = o(
            "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
          ).getSOOBundleParentIneligibilityReason(g, t);
          if (l != null) return l;
          var s = o("AdsODAXUtils").maybeTranslateObjective(
            t.objective,
            t.promotedObjectType,
            t.optimizationGoal,
          );
          if (t.directInstallDevices === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDirectInstallReason();
          if (
            !o(
              "AdsVideoBuyingStoreUtils",
            ).checkIfPlacementPositionValidForBuyingOption(
              babelHelpers.extends({}, t, { objective: s }),
              "AN_instream_video",
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createOptimizationGoalReason();
          var u = f(t, s);
          if (u != null) return u;
          if (o("AdsManagerIGLoginUtils").getIsIGLogin(t.account))
            return o("AdsPlacementIneligibilityReason").createIGLoginReason();
          if (
            o(
              "AdsUnifiedProfileVisitUtils",
            ).getIsPositionAlwaysDisabledForProfileVisits(
              s,
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
              "AdsInstagramLeadGenPlacementUtils",
            ).isInstagramLeadGenDestinationSelected(
              babelHelpers.extends({}, t, { objective: s }),
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createInstagramLeadGenReason(t.objective);
          var h = o(
            "AdsReachFrequencyPlacementUtils",
          ).getReachFrequencyDisabledReason(
            "audience_network/instream_video",
            babelHelpers.extends({}, t, { objective: s }),
          );
          if (h) return h;
          if (
            o(
              "AdsPlacementEligibilityInfoUtils",
            ).isIneligibleWithMobileOnlyObjectives(
              babelHelpers.extends({}, t, { objective: s }),
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(r("AdsAPIDevicePlatform").DESKTOP);
          if (r("AdsAppUrlUtils").isInstantGameURL(t.objectStoreURL))
            return o(
              "AdsPlacementIneligibilityReason",
            ).createInstantGameReason();
          if (
            o("AdsWhatsAppPlacementUtils").isIneligibleForANInstreamVideo(
              babelHelpers.extends({}, t, { objective: s }),
            )
          )
            return o("AdsPlacementIneligibilityReason").createWhatsAppReason(
              t.objective,
            );
          var y = m(t, s);
          return y != null
            ? y
            : o("AdsPlacementOmnichannelUtils").isIneligibleForOmnichannelAd(
                  babelHelpers.extends({}, t, { objective: s }),
                ) &&
                !(
                  t.promotedObjectType ===
                    r("AdsPromotedObjectTypes").WEB_AND_APP && r("gkx")("13447")
                )
              ? o("AdsPlacementIneligibilityReason").createOmnichannelReason()
              : r("gkx")("21348") &&
                  o("AdsPlacementUIUtils").isGrowthAppStoreValue(
                    r("AdsUEditorSelectAppProvider").toFluxStore().getState()
                      .selectedAppStore,
                  )
                ? o(
                    "AdsPlacementIneligibilityReason",
                  ).createGrowthAppStoreReason()
                : (e =
                      (n = _(s, t.optimizationGoal)) != null
                        ? n
                        : p(t.destinationType)) != null
                  ? e
                  : o(
                      "AdsPlacementANEligibilityUtils",
                    ).getANIneligibilityReason(
                      babelHelpers.extends({}, t, { objective: s }),
                      c,
                      d,
                      !0,
                      t.objective,
                    );
        },
        isActive: function (t) {
          return o(
            "AdsPlacementAPISpecReaderUtils",
          ).isActiveAudienceNetworkPosition(t, "instream_video");
        },
        getPreviews: function (t) {
          var e = ["previews/audience_network_instream_video"];
          return r("immutable").OrderedSet(e);
        },
        getDefaultPreview: function () {
          return "previews/audience_network_instream_video";
        },
      },
      h = g;
    l.default = h;
  },
  226,
);
