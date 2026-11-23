__d(
  "AdsPlacementsThreadsPermalinkPositionPlugin",
  [
    "fbt",
    "ix",
    "AdImageSpecCropKeys",
    "AdsAPIDevicePlatform",
    "AdsAPITargetFields",
    "AdsBwIPlacementUtils",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementCopy",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementPositionLabelConstant",
    "AdsThreadsFeedPlacementEligibilityUtils",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "AdsUnifiedProfileVisitUtils",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e() {
      return r("gkx")("19623") ? u("947346") : u("841197");
    }
    var c = {
        type: "placements/position",
        key: "threads/permalink",
        name: r("AdsPlacementPositionLabelConstant").threads_permalink,
        nameWithPlatform: s._(/*BTDS*/ ""),
        mediaRecommendation: {
          copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION
            .THREADS_FEED,
          imageCrop: r("AdImageSpecCropKeys")["100x100"],
        },
        apiPosition: "threads_permalink",
        placementPreviewImage: e(),
        platformKey: "threads",
        adsetValidators: [],
        isEnabled: function () {
          return r("gkx")("5403") && r("gkx")("13616");
        },
        getIneligibilityReason: function (t) {
          var e = o("AdsBwIPlacementUtils").getIneligibilityReason(t);
          if (e) return e;
          if (t.isReelsTrendingAds === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createReelsTrendingAdsReason();
          var n = o("AdsODAXUtils").maybeTranslateObjective(
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
          if (
            o(
              "AdsUnifiedProfileVisitUtils",
            ).getIsPositionAlwaysDisabledForProfileVisits(
              n,
              t.promotedObjectType,
            )
          )
            return o(
              "AdsUnifiedProfileVisitUtils",
            ).getUnifiedProfileVisitsAdsPlacementIneligibilityReason(
              t.destinationType,
            );
          var a = r(
              "AdsThreadsFeedPlacementEligibilityUtils",
            ).getIneligibilityReason(t),
            i = a[0];
          return i != null ? i : null;
        },
        isInactiveByDefault: function (t) {
          if (r("gkx")("9627")) return !0;
          var e = o("AdsODAXUtils").maybeTranslateObjective(
            t.objective,
            t.promotedObjectType,
            t.optimizationGoal,
          );
          return o(
            "AdsUnifiedProfileVisitUtils",
          ).getIsPositionAlwaysDisabledForProfileVisits(e, t.promotedObjectType)
            ? !0
            : !(r("gkx")("10617") && r("gkx")("13616"));
        },
        isActive: function (t) {
          return r("AdsPlacementAPISpecReaderUtils").isActivePosition(
            t,
            "threads",
            "threads_permalink",
          );
        },
        getPreviews: function (t) {
          var e = ["previews/threads_stream"];
          return r("immutable").OrderedSet(e);
        },
        getDefaultPreview: function () {
          return "previews/threads_stream";
        },
        parentPlacements: r("immutable").OrderedSet([]),
        childPlacements: r("immutable").OrderedSet([]),
        adsetReducer: function (t, n) {
          var e = n.action;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removeGroups.includes("threads/permalink")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      t,
                      "threads/permalink",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").THREADS_POSITIONS,
                      "threads",
                    );
                  })
                : e.addGroups.includes("threads/permalink")
                  ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        t,
                        "threads/permalink",
                        e.eligibilityInformation,
                        r("AdsAPITargetFields").THREADS_POSITIONS,
                        "threads",
                      );
                    })
                  : t;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(t, e.ids, function (t) {
                return o("AdsPlacementAPISpecWriterUtils").addGroup(
                  t,
                  e.pluginKey,
                  e.eligibilityInformation,
                  r("AdsAPITargetFields").THREADS_POSITIONS,
                  "threads",
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
                    r("AdsAPITargetFields").THREADS_POSITIONS,
                    "threads",
                  );
                },
              );
          }
          return t;
        },
      },
      d = c;
    l.default = d;
  },
  226,
);
