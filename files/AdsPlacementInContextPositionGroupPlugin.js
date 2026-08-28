__d(
  "AdsPlacementInContextPositionGroupPlugin",
  [
    "ix",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementCopy",
    "AdsPlacementsFacebookInstantArticlePositionPlugin",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        type: "placements/position/group",
        key: "context",
        placementPreviewImage: s("556715"),
        placementPreviewVideo: "10150008660890365",
        mediaRecommendation:
          r("AdsPlacementCopy").POSITION_GROUP_MEDIA_RECOMMENDATION.CONTEXT,
        name: r("AdsPlacementCopy").PLACEMENT_POSITION_GROUPS.CONTEXT,
        isEnabled: function (t) {
          return !0;
        },
        subheader: r("AdsPlacementCopy").PLACEMENT_POSITION_SUBHEADERS.CONTEXT,
        positions: r("immutable").OrderedSet([
          r("AdsPlacementsFacebookInstantArticlePositionPlugin"),
        ]),
        adsetReducer: function (n, r) {
          var t = r.action,
            a = t != null ? t : {},
            i = a.eligibilityInformation,
            l = e.positions,
            s = o(
              "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
            ).getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut(
              l,
              i,
            );
          switch (t.type) {
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
            case o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType:
              return o(
                "AdsPlacementAPISpecWriterUtils",
              ).addOrRemovePositionGroup(n, t, s);
          }
          return n;
        },
      },
      u = e;
    l.default = u;
  },
  98,
);
