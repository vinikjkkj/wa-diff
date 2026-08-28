__d(
  "AdsPlacementsInstagramExplorePositionPlugin",
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
    "AdsBwIPlacementUtils",
    "AdsCampaignExplorePositionValidator",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementConfigObjectiveEligibilityUtils",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementInstagramPositionPluginUtils",
    "AdsPlacementPositionLabelConstant",
    "AdsPromotedObjectTypes",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "gkx",
    "immutable",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e() {
      return r("gkx")("19623") ? u("947340") : u("840096");
    }
    var c = {
      type: "placements/position",
      key: "instagram/explore",
      name: r("AdsPlacementPositionLabelConstant").explore,
      nameWithPlatform: s._(/*BTDS*/ "Instagram Explore"),
      mediaRecommendation: {
        imageCrop: r("AdImageSpecCropKeys")["100x100"],
        videoCrop: "1:1",
      },
      apiPosition: "explore",
      placementPreviewImage: e(),
      platformKey: "instagram",
      isEnabled: function (t) {
        return r("gkx")("6500")
          ? !1
          : r("AdsAccountUtils").hasCapabilityFromList(
              t,
              "CAN_CREATE_INSTAGRAM_EXPLORE_ADS",
            );
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
          ).createDevicePlatformReason(r("AdsAPIDevicePlatform").CONNECTED_TV);
        if (
          t.optimizationGoal ===
            r("AdsAPIOptimizationGoals").INCREMENTAL_OFFSITE_CONVERSIONS &&
          (a !== r("AdsAPIObjectives").CONVERSIONS || r("justknobx")._("80"))
        )
          return o(
            "AdsPlacementIneligibilityReason",
          ).createOptimizationGoalReason();
        if (t.promotedObjectType === r("AdsPromotedObjectTypes").REMINDER)
          return o(
            "AdsPlacementIneligibilityReason",
          ).createReminderPromotionReason();
        if (t.destinationType === r("AdCampaignDestination").INSTAGRAM_LIVE)
          return o(
            "AdsPlacementIneligibilityReason",
          ).createInstagramLiveReason();
        if (t.promotedObjectType === r("AdsPromotedObjectTypes").IMAGINATION)
          return o("AdsPlacementIneligibilityReason").createImaginationReason();
        var i = o(
          "AdsPlacementConfigObjectiveEligibilityUtils",
        ).getObjectiveIneligibilityReasonForPlacementType(
          "instagram",
          "explore",
          t,
        );
        return i != null
          ? i
          : o(
              "AdsPlacementInstagramPositionPluginUtils",
            ).getIneligibilityReasonForIgFeedAndExplorePosition(
              babelHelpers.extends({}, t, { objective: a }),
              "explore",
            );
      },
      isActive: function (t) {
        return o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(
          t,
          "explore",
        );
      },
      isInactiveByDefault: function (t) {
        var e = o("AdsODAXUtils").maybeTranslateObjective(
          t.objective,
          t.promotedObjectType,
          t.optimizationGoal,
        );
        return (
          e === r("AdsAPIObjectives").RESEARCH_POLL ||
          e === r("AdsAPIObjectives").STORE_VISITS
        );
      },
      adsetValidators: [r("AdsCampaignExplorePositionValidator")],
      getPreviews: function (t) {
        var e = [
          "previews/instagram_explore_contextual",
          "previews/instagram_explore_immersive",
        ];
        return r("immutable").OrderedSet(e);
      },
      getDefaultPreview: function () {
        return "previews/instagram_explore_contextual";
      },
      adsetReducer: function (t, n) {
        var e = n.action;
        switch (e.type) {
          case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
            return e.removeGroups.includes("instagram/explore")
              ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                  return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                    t,
                    "instagram/explore",
                    e.eligibilityInformation,
                    r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                    "instagram",
                  );
                })
              : e.addGroups.includes("instagram/explore")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o("AdsPlacementAPISpecWriterUtils").addGroup(
                      t,
                      "instagram/explore",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                      "instagram",
                    );
                  })
                : t;
          case o("AdsCampaignPlacementAddDataActionFlux").actionType:
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
      parentPlacements: d(),
      childPlacements: m(),
    };
    function d() {
      return r("gkx")("6500")
        ? o("immutable").OrderedSet([])
        : o("immutable").OrderedSet(["instagram/stream"]);
    }
    function m() {
      return r("gkx")("6500")
        ? o("immutable").OrderedSet([])
        : o("immutable").OrderedSet(["instagram/explore_home"]);
    }
    var p = c;
    l.default = p;
  },
  226,
);
