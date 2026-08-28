__d(
  "AdsPlacementsInstagramFeedPositionPlugin",
  [
    "fbt",
    "ix",
    "AdImageSpecCropKeys",
    "AdsAPIDevicePlatform",
    "AdsAPITargetFields",
    "AdsBuyingTypes",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsInstagramAvailabilityUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementConfigObjectiveEligibilityUtils",
    "AdsPlacementCopy",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementInstagramPositionPluginUtils",
    "AdsPlacementPositionLabelConstant",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e() {
      var e = r("gkx")("19623");
      return u(e ? "1095854" : "1095853");
    }
    var c = {
      type: "placements/position",
      key: "instagram/stream",
      name: r("AdsPlacementPositionLabelConstant").stream,
      nameWithPlatform: s._(/*BTDS*/ "Instagram feed"),
      mediaRecommendation: {
        copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION.IG_FEED,
        imageCrop: r("AdImageSpecCropKeys")["100x100"],
        videoCrop: "1:1",
      },
      apiPosition: "stream",
      placementPreviewImage: e(),
      platformKey: "instagram",
      isEnabled: function (t) {
        return !0;
      },
      getIneligibilityReason: function (t) {
        var e = o("AdsODAXUtils").maybeTranslateObjective(
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
        if (t.isReelsTrendingAds === !0)
          return o(
            "AdsPlacementIneligibilityReason",
          ).createReelsTrendingAdsReason();
        var n = o(
          "AdsPlacementConfigObjectiveEligibilityUtils",
        ).getObjectiveIneligibilityReasonForPlacementType(
          "instagram",
          "stream",
          t,
        );
        if (n != null) return n;
        var a = o(
          "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
        ).getSOOBundleParentIneligibilityReason(c, t);
        return a != null
          ? a
          : o(
              "AdsPlacementInstagramPositionPluginUtils",
            ).getIneligibilityReasonForIgFeedAndExplorePosition(
              babelHelpers.extends({}, t, { objective: e }),
              "stream",
            );
      },
      isInactiveByDefault: function (t) {
        if (t.isReelsTrendingAds === !0) return !0;
        var e = o("AdsODAXUtils").maybeTranslateObjective(
          t.objective,
          t.promotedObjectType,
          t.optimizationGoal,
        );
        return (
          t.buyingType === r("AdsBuyingTypes").AUCTION &&
          !o("AdsInstagramAvailabilityUtils").supportsObjective(
            e,
            t.capabilities,
          )
        );
      },
      isActive: function (t) {
        return o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(
          t,
          "stream",
        );
      },
      getPreviews: function (t) {
        var e = ["previews/instagram_stream"],
          n = o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
            t.spec,
            r("AdsAPIDevicePlatform").DESKTOP,
          );
        return (
          n && e.push("previews/instagram_web_feed"),
          r("immutable").OrderedSet(e)
        );
      },
      getDefaultPreview: function (t) {
        var e = o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
            t.spec,
            r("AdsAPIDevicePlatform").MOBILE,
          ),
          n = o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
            t.spec,
            r("AdsAPIDevicePlatform").DESKTOP,
          );
        return n && !e
          ? "previews/instagram_web_feed"
          : "previews/instagram_stream";
      },
      parentPlacements: r("immutable").OrderedSet([]),
      childPlacements: d(),
      adsetReducer: function (t, n) {
        var e = n.action;
        switch (e.type) {
          case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
            return e.removeGroups.includes("instagram/stream")
              ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                  return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                    t,
                    "instagram/stream",
                    e.eligibilityInformation,
                    r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                    "instagram",
                  );
                })
              : e.addGroups.includes("instagram/stream")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o("AdsPlacementAPISpecWriterUtils").addGroup(
                      t,
                      "instagram/stream",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                      "instagram",
                    );
                  })
                : t;
          case o("AdsCampaignPlacementAddDataActionFlux").actionType:
            return o("AdsMutators").mutateEach(t, e.ids, function (t) {
              var n = o("AdsPlacementAPISpecWriterUtils").addGroup(
                t,
                e.pluginKey,
                e.eligibilityInformation,
                r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                "instagram",
              );
              return (
                (n = o(
                  "AdsPlacementAPISpecWriterUtils",
                ).removeMessengerThreadPlacement(n, e.eligibilityInformation)),
                n
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
    };
    function d() {
      return r("gkx")("6500")
        ? r("immutable").OrderedSet([
            "instagram/shop_tab",
            "instagram/explore_home",
            "instagram/profile_feed",
            "instagram/search",
            "threads/stream",
          ])
        : r("immutable").OrderedSet([
            "instagram/shop_tab",
            "instagram/explore",
            "instagram/profile_feed",
            "instagram/search",
            "threads/stream",
          ]);
    }
    var m = c;
    l.default = m;
  },
  226,
);
