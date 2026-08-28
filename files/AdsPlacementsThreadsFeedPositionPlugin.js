__d(
  "AdsPlacementsThreadsFeedPositionPlugin",
  [
    "fbt",
    "ix",
    "AdImageSpecCropKeys",
    "AdsAPIDevicePlatform",
    "AdsAPITargetFields",
    "AdsBwIPlacementUtils",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsCampaignThreadsFeedPositionValidator",
    "AdsInterfacesLogger",
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
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
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
        key: "threads/stream",
        name: r("AdsPlacementPositionLabelConstant").threads_stream,
        nameWithPlatform: s._(/*BTDS*/ "Threads feed"),
        mediaRecommendation: {
          copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION
            .THREADS_FEED,
          imageCrop: r("AdImageSpecCropKeys")["100x100"],
        },
        apiPosition: "threads_stream",
        placementPreviewImage: e(),
        platformKey: "threads",
        adsetValidators: [r("AdsCampaignThreadsFeedPositionValidator")],
        isEnabled: function () {
          return r("gkx")("5403");
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
            ).createDevicePlatformReason(
              r("AdsAPIDevicePlatform").CONNECTED_TV,
            );
          if (
            o(
              "AdsUnifiedProfileVisitUtils",
            ).getIsPositionAlwaysDisabledForProfileVisits(
              a,
              t.promotedObjectType,
            )
          )
            return o(
              "AdsUnifiedProfileVisitUtils",
            ).getUnifiedProfileVisitsAdsPlacementIneligibilityReason(
              t.destinationType,
            );
          var i = r(
              "AdsThreadsFeedPlacementEligibilityUtils",
            ).getIneligibilityReason(t),
            l = i[0],
            s = i[1];
          if (l != null) {
            var u;
            return (
              r("AdsInterfacesLogger").logOnce({
                eventName: "threads_feed_ineligibility_reason",
                data: {
                  type: l.type,
                  message: s,
                  ad_account_id:
                    (u = t.account) == null ? void 0 : u.account_id,
                },
              }),
              l
            );
          }
          return null;
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
            : !r("gkx")("10617");
        },
        isActive: function (t) {
          return r("AdsPlacementAPISpecReaderUtils").isActivePosition(
            t,
            "threads",
            "threads_stream",
          );
        },
        getPreviews: function (t) {
          var e = ["previews/threads_stream"];
          return r("immutable").OrderedSet(e);
        },
        getDefaultPreview: function () {
          return "previews/threads_stream";
        },
        parentPlacements: r("immutable").OrderedSet(["instagram/stream"]),
        childPlacements: r("immutable").OrderedSet([]),
        adsetReducer: function (t, n) {
          var e = n.action;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removeGroups.includes("threads/stream")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      t,
                      "threads/stream",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").THREADS_POSITIONS,
                      "threads",
                    );
                  })
                : e.addGroups.includes("threads/stream")
                  ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        t,
                        "threads/stream",
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
