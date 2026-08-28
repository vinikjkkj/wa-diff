__d(
  "AdsPlacementsInstagramExploreHomePositionPlugin",
  [
    "fbt",
    "ix",
    "AdCampaignDestination",
    "AdImageSpecCropKeys",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAPITargetFields",
    "AdsAccountStore",
    "AdsAccountUtils",
    "AdsBuyingTypes",
    "AdsBwIPlacementUtils",
    "AdsCampaignInstagramExploreHomePositionValidator",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsInstagramLeadGenPlacementUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementConfigObjectiveEligibilityUtils",
    "AdsPlacementConfigOptimizationGoalEligibilityUtils",
    "AdsPlacementCopy",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementInstagramPositionPluginUtils",
    "AdsPlacementPositionLabelConstant",
    "AdsPromotedObjectTypes",
    "AdsReachFrequencyPlacementUtils",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "AdsUnifiedProfileVisitUtils",
    "AdsWhatsAppPlacementUtils",
    "WebPixelRatio",
    "bx",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e(e) {
      switch (e) {
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
        default:
          return null;
      }
    }
    var c = {
      type: "placements/position",
      key: "instagram/explore_home",
      name: r("AdsPlacementPositionLabelConstant").explore_home,
      apiPosition: "explore_home",
      placementPreviewImage: p(),
      platformKey: "instagram",
      adsetValidators: [r("AdsCampaignInstagramExploreHomePositionValidator")],
      nameWithPlatform: s._(/*BTDS*/ "Instagram Explore home"),
      mediaRecommendation: {
        copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION
          .IG_EXPLORE_HOME,
        imageCrop: r("AdImageSpecCropKeys")["100x100"],
        videoCrop: "1:1",
      },
      isEnabled: function (t, n) {
        return r("AdsAccountUtils").hasCapabilityFromList(
          t,
          "CAN_USE_IG_EXPLORE_GRID_HOME_PLACEMENT",
        );
      },
      getIneligibilityReason: function (n) {
        var t,
          a = o("AdsBwIPlacementUtils").getIneligibilityReason(n);
        if (a) return a;
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
          ).createDevicePlatformReason(r("AdsAPIDevicePlatform").CONNECTED_TV);
        var l = o(
          "AdsPlacementConfigObjectiveEligibilityUtils",
        ).getObjectiveIneligibilityReasonForPlacementType(
          "instagram",
          "explore_home",
          n,
        );
        if (l !== null) return l;
        if (
          o(
            "AdsInstagramLeadGenPlacementUtils",
          ).isInstagramLeadGenDestinationSelected(
            babelHelpers.extends({}, n, { objective: i }),
          )
        )
          return o(
            "AdsPlacementIneligibilityReason",
          ).createInstagramLeadGenReason(n.objective);
        var s = o(
          "AdsPlacementConfigOptimizationGoalEligibilityUtils",
        ).getOptimizationGoalIneligibilityReasonForPlacementType(
          "instagram",
          "explore_home",
          n,
        );
        if (s != null) return s;
        var u = n.buyingType,
          m = n.spec;
        if (n.containsDCO === !0)
          return o("AdsPlacementIneligibilityReason").createDCOReason();
        if (n.containsOffer === !0)
          return o("AdsPlacementIneligibilityReason").createOfferOptionReason(
            n.objective,
          );
        if (
          m.device_platforms &&
          !(
            (t = m.device_platforms) != null &&
            t.includes(r("AdsAPIDevicePlatform").MOBILE)
          )
        )
          return o(
            "AdsPlacementIneligibilityReason",
          ).createDevicePlatformReason(r("AdsAPIDevicePlatform").DESKTOP);
        if (o("AdsWhatsAppPlacementUtils").isIneligibleForIGExploreGrid(n))
          return o("AdsPlacementIneligibilityReason").createWhatsAppReason(
            n.objective,
          );
        var p = e(n.promotedObjectType);
        if (p != null) return p;
        if (
          u !== r("AdsBuyingTypes").AUCTION &&
          u !== r("AdsBuyingTypes").RESERVED
        )
          return o("AdsPlacementIneligibilityReason").createBuyingTypeReason(
            u,
            c.key,
          );
        if (u === r("AdsBuyingTypes").RESERVED) {
          var _ = o(
            "AdsReachFrequencyPlacementUtils",
          ).getReachFrequencyDisabledReason(
            "instagram/explore_home",
            babelHelpers.extends({}, n, { objective: i }),
          );
          if (_ !== null) return _;
        }
        if (
          n.objective === r("AdsAPIObjectives").APP_INSTALLS &&
          n.promotedObjectType === r("AdsPromotedObjectTypes").CANVAS_APP
        )
          return o("AdsPlacementIneligibilityReason").createCanvasAppReason();
        if (
          i === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
          (n.optimizationGoal === r("AdsAPIOptimizationGoals").REPLIES ||
            n.optimizationGoal === r("AdsAPIOptimizationGoals").CONVERSATIONS ||
            n.optimizationGoal === r("AdsAPIOptimizationGoals").QUALITY_CALL)
        )
          return o(
            "AdsPlacementIneligibilityReason",
          ).createOptimizationGoalReason();
        var f = d(c, n, i);
        return f != null ? f : null;
      },
      isActive: function (t) {
        return o("AdsPlacementAPISpecReaderUtils").isActivePosition(
          t,
          "instagram",
          "explore_home",
        );
      },
      isInactiveByDefault: function (t) {
        var e = o("AdsODAXUtils").maybeTranslateObjective(
            t.objective,
            t.promotedObjectType,
            t.optimizationGoal,
          ),
          n = r("AdsAccountStore").getSelectedAccount().getValue();
        return o(
          "AdsPlacementInstagramPositionPluginUtils",
        ).isEligibleObjectiveForInstagramExploreHome(e, n)
          ? r("gkx")("21156")
          : !0;
      },
      getPreviews: function (t) {
        var e = ["previews/instagram_explore_grid_home"];
        return r("immutable").OrderedSet(e);
      },
      getDefaultPreview: function () {
        return "previews/instagram_explore_grid_home";
      },
      adsetReducer: function (t, n) {
        var e = n.action;
        if (
          !c.isEnabled(
            e.eligibilityInformation.capabilities,
            e.eligibilityInformation.account,
          )
        )
          return t;
        switch (e.type) {
          case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
            return e.removeGroups.includes("instagram/explore_home")
              ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                  return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                    t,
                    "instagram/explore_home",
                    e.eligibilityInformation,
                    r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                    "instagram",
                  );
                })
              : e.addGroups.includes("instagram/explore_home")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o("AdsPlacementAPISpecWriterUtils").addGroup(
                      t,
                      "instagram/explore_home",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                      "instagram",
                    );
                  })
                : t;
          case r("AdsCampaignPlacementAddDataActionFlux").actionType:
            return o("AdsMutators").mutateEach(t, e.ids, function (t) {
              return o("AdsPlacementAPISpecWriterUtils").addGroup(
                t,
                e.pluginKey,
                e.eligibilityInformation,
                r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                "instagram",
              );
            });
          case o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType:
            return o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
              return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                t,
                e.pluginKey,
                e.eligibilityInformation,
                r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                "instagram",
              );
            });
        }
        return t;
      },
      parentPlacements: m(),
      childPlacements: r("immutable").OrderedSet([]),
    };
    function d(e, t, n) {
      if (
        o(
          "AdsUnifiedProfileVisitUtils",
        ).getIsIGPositionCondtionallyDisabledForUnifiedProfileVisits(
          n,
          t.promotedObjectType,
          t.destinationType,
          t.optimizationGoal,
        )
      )
        return o(
          "AdsUnifiedProfileVisitUtils",
        ).getUnifiedProfileVisitsAdsPlacementIneligibilityReason(
          t.destinationType,
        );
      if (t.destinationType === r("AdCampaignDestination").INSTAGRAM_LIVE)
        return o("AdsPlacementIneligibilityReason").createInstagramLiveReason();
      if (t.destinationType === r("AdCampaignDestination").FACEBOOK_LIVE)
        return o("AdsPlacementIneligibilityReason").createFacebookLiveReason();
      var a = o(
        "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
      ).getSOOBundleParentIneligibilityReason(e, t);
      return a != null ? a : null;
    }
    function m() {
      return r("gkx")("6500")
        ? r("immutable").OrderedSet(["instagram/stream"])
        : r("immutable").OrderedSet(["instagram/explore"]);
    }
    function p() {
      return r("gkx")("5365")
        ? u("951647")
        : r("gkx")("21469")
          ? r("gkx")("19623")
            ? u("947341")
            : o("WebPixelRatio").get() >= 2
              ? r("bx").getURL(r("bx")("50876"))
              : r("bx").getURL(r("bx")("50875"))
          : o("WebPixelRatio").get() >= 2
            ? r("bx").getURL(r("bx")("50874"))
            : r("bx").getURL(r("bx")("50873"));
    }
    var _ = c;
    l.default = _;
  },
  226,
);
