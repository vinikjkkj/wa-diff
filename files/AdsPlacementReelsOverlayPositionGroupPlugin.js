__d(
  "AdsPlacementReelsOverlayPositionGroupPlugin",
  [
    "ix",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementCopy",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return r("immutable").OrderedSet([]);
    }
    var u = {
        type: "placements/position/group",
        key: "reels_overlay",
        placementPreviewImage: s("266883"),
        mediaRecommendation:
          r("AdsPlacementCopy").POSITION_GROUP_MEDIA_RECOMMENDATION
            .REELS_OVERLAY,
        subheader:
          r("AdsPlacementCopy").PLACEMENT_POSITION_SUBHEADERS.REELS_OVERLAY,
        name: r("AdsPlacementCopy").PLACEMENT_POSITION_GROUPS.REELS_OVERLAY,
        isEnabled: function (t) {
          return !1;
        },
        positions: e(),
        adsetReducer: function (t, n) {
          var e = n.action,
            r = e != null ? e : {},
            a = r.eligibilityInformation,
            i = o(
              "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
            ).getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut(
              u.positions,
              a,
            );
          switch (e.type) {
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
            case o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType:
              return o(
                "AdsPlacementAPISpecWriterUtils",
              ).addOrRemovePositionGroup(t, e, i);
          }
          return t;
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
