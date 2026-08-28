__d(
  "AdsPlacementSearchPositionGroupPlugin",
  [
    "ix",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementCopy",
    "AdsPlacementsFacebookSearchPositionPlugin",
    "AdsPlacementsInstagramSearchPositionPlugin",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        type: "placements/position/group",
        key: "search",
        placementPreviewImage: s("1000183"),
        mediaRecommendation:
          r("AdsPlacementCopy").POSITION_GROUP_MEDIA_RECOMMENDATION.SEARCH,
        subheader: r("AdsPlacementCopy").PLACEMENT_POSITION_SUBHEADERS.SEARCH,
        name: r("AdsPlacementCopy").PLACEMENT_POSITION_GROUPS.SEARCH,
        isEnabled: function (t) {
          return !0;
        },
        positions: r("immutable").OrderedSet([
          r("AdsPlacementsFacebookSearchPositionPlugin"),
          r("AdsPlacementsInstagramSearchPositionPlugin"),
        ]),
        adsetReducer: function (n, r) {
          var t = r.action,
            a = t != null ? t : {},
            i = a.eligibilityInformation,
            l = o(
              "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
            ).getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut(
              e.positions,
              i,
            );
          switch (t.type) {
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
            case o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType:
              return o(
                "AdsPlacementAPISpecWriterUtils",
              ).addOrRemovePositionGroup(n, t, l);
          }
          return n;
        },
      },
      u = e;
    l.default = u;
  },
  98,
);
