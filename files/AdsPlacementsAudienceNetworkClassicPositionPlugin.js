__d(
  "AdsPlacementsAudienceNetworkClassicPositionPlugin",
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
    "AdsAccountUtils",
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
    "AdsVideoBuyingStoreUtils",
    "adsIGLoginPlacementUtils",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "gkx",
    "igAccessAdsManagerUtils",
    "immutable",
    "isConsiderationPlacementLocked",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e;
    function c() {
      return r("gkx")("7201") ? u("1115261") : u("939866");
    }
    var d = r("immutable").Set([
        (e = r("AdsAPIObjectives")).APP_INSTALLS,
        e.CONVERSIONS,
        e.LINK_CLICKS,
        e.MOBILE_APP_ENGAGEMENT,
        e.MOBILE_APP_INSTALLS,
        e.PRODUCT_CATALOG_SALES,
        e.VIDEO_VIEWS,
        e.REACH,
        e.WILDCARD_INTERNAL_ONLY,
        e.MESSAGES,
        e.LEAD_GENERATION,
      ]),
      m = r("immutable").Set([r("AdsAPIDevicePlatform").MOBILE]);
    function p(e, t) {
      var n;
      switch (e.promotedObjectType) {
        case r("AdsPromotedObjectTypes").DONATION:
          return o("AdsPlacementIneligibilityReason").createDonationReason();
        case r("AdsPromotedObjectTypes").GROUP:
          return o(
            "AdsPlacementIneligibilityReason",
          ).createGroupPromotionReason();
        case r("AdsPromotedObjectTypes").IMAGINATION:
          return o("AdsPlacementIneligibilityReason").createImaginationReason();
        case r("AdsPromotedObjectTypes").REMINDER:
          return o(
            "AdsPlacementIneligibilityReason",
          ).createReminderPromotionReason();
      }
      return (n = e.isClickToMPAds) != null && n
        ? o("AdsPlacementIneligibilityReason").createGenericReason()
        : o(
              "AdsClickToCallAdsUtils",
            ).getIsCallAdsNewOptimizationUnderTrafficObjective(e)
          ? o("AdsPlacementIneligibilityReason").createPhoneCallTrafficReason()
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
    function _(e, t) {
      return (e === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
        (t === r("AdsAPIOptimizationGoals").REPLIES ||
          t === r("AdsAPIOptimizationGoals").CONVERSATIONS ||
          t === r("AdsAPIOptimizationGoals").QUALITY_CALL)) ||
        (t === r("AdsAPIOptimizationGoals").INCREMENTAL_OFFSITE_CONVERSIONS &&
          e !== r("AdsAPIObjectives").CONVERSIONS)
        ? o("AdsPlacementIneligibilityReason").createOptimizationGoalReason()
        : null;
    }
    function f(e) {
      return e === r("AdCampaignDestination").INSTAGRAM_LIVE
        ? o("AdsPlacementIneligibilityReason").createInstagramLiveReason()
        : e === r("AdCampaignDestination").FACEBOOK_LIVE
          ? o("AdsPlacementIneligibilityReason").createFacebookLiveReason()
          : null;
    }
    var g = {
        type: "placements/position",
        key: "audience_network/classic",
        apiPosition: "classic",
        name: r("AdsPlacementPositionLabelConstant").classic,
        nameWithPlatform: r("AdsPlacementPositionLabelWithPlatformConstant")
          .audience_network.classic,
        mediaRecommendation: {
          copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION.AN_CLASSIC,
          imageCrop: r("AdImageSpecCropKeys")["90x160"],
          videoCrop: "9:16",
        },
        platformKey: "audience_network",
        isEnabled: function () {
          return !0;
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
              "audience_network_classic",
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
            "audience_network/classic",
            babelHelpers.extends({}, t, { objective: i }),
          );
          if (l) return l;
          if (
            o("AdsPlacementOmnichannelUtils").isIneligibleForOmnichannelAd(
              babelHelpers.extends({}, t, { objective: i }),
            ) &&
            !(
              t.promotedObjectType ===
                r("AdsPromotedObjectTypes").WEB_AND_APP && r("gkx")("13447")
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createOmnichannelReason();
          if (
            r("gkx")("21348") &&
            o("AdsPlacementUIUtils").isGrowthAppStoreValue(
              r("AdsUEditorSelectAppProvider").toFluxStore().getState()
                .selectedAppStore,
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createGrowthAppStoreReason();
          if (
            !o(
              "AdsVideoBuyingStoreUtils",
            ).checkIfPlacementPositionValidForBuyingOption(
              babelHelpers.extends({}, t, { objective: i }),
              "classic",
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createOptimizationGoalReason();
          if (
            (o("AdsManagerIGLoginUtils").getIsIGLogin(t.account) &&
              !o("igAccessAdsManagerUtils").isIGAccessParityEnabled()) ||
            o(
              "adsIGLoginPlacementUtils",
            ).getShouldDisableFBPlacementForIGLoginUsers(t.account)
          )
            return o("AdsPlacementIneligibilityReason").createIGLoginReason();
          if (
            o(
              "AdsUnifiedProfileVisitUtils",
            ).getIsPositionAlwaysDisabledForProfileVisits(
              i,
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
              "AdsInstagramPlacementUtils",
            ).isInstagramDestinationEnabledAndSelected(
              babelHelpers.extends({}, t, { objective: i }),
            ) ||
            (t.promotedObjectType === r("AdsPromotedObjectTypes").INSTAGRAM &&
              (i === r("AdsAPIObjectives").CONVERSIONS ||
                t.objective === r("AdsAPIObjectives").LINK_CLICKS))
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createInstagramDirectReason(t.objective);
          var s = f(t.destinationType);
          if (s != null) return s;
          if (
            o(
              "AdsInstagramLeadGenPlacementUtils",
            ).isInstagramLeadGenDestinationSelected(
              babelHelpers.extends({}, t, { objective: i }),
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createInstagramLeadGenReason(t.objective);
          var u = _(i, t.optimizationGoal);
          if (u != null) return u;
          var c = p(t, i);
          return c != null
            ? c
            : o("AdsPlacementANEligibilityUtils").getANIneligibilityReason(
                babelHelpers.extends({}, t, { objective: i }),
                d,
                m,
                !1,
                t.objective,
              );
        },
        isActive: function (t) {
          return o(
            "AdsPlacementAPISpecReaderUtils",
          ).isActiveAudienceNetworkPosition(t, "classic");
        },
        adsetValidators: [],
        getPreviews: function (t) {
          var e = ["previews/mobile_interstitial", "previews/mobile_native"],
            n = r("AdsAccountUtils").hasCapabilityFromList(
              t.capabilities,
              "ADNW_DISABLE_INSTREAM_AND_WEB_PLACEMENT",
            );
          return (
            n || e.push("previews/mobile_medium_rectangle"),
            t.objective !== r("AdsAPIObjectives").VIDEO_VIEWS &&
              t.objective !== r("AdsAPIObjectives").BRAND_AWARENESS &&
              e.push("previews/mobile_banner"),
            r("immutable").OrderedSet(e)
          );
        },
        getDefaultPreview: function () {
          return "previews/mobile_interstitial";
        },
        placementPreviewImage: c(),
        placementInfo: s._(/*BTDS*/ ""),
        adsetReducer: function (t, n) {
          var e = n.action;
          if (!g.isEnabled(e.eligibilityInformation.capabilities)) return t;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removeGroups.includes("audience_network/classic")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      t,
                      "audience_network/classic",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").AUDIENCE_NETWORK_POSITIONS,
                      "audience_network",
                    );
                  })
                : e.addGroups.includes("audience_network/classic")
                  ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        t,
                        "audience_network/classic",
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
        parentPlacements: r("immutable").OrderedSet(["facebook/feed"]),
      },
      h = g;
    l.default = h;
  },
  226,
);
