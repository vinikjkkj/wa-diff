__d(
  "AdsPlacementConnectedTVPositionGroupPlugin",
  [
    "ix",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementCopy",
    "AdsPlacementsCtvInstreamVideoPositionPlugin",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = r("immutable").OrderedSet([
        r("AdsPlacementsCtvInstreamVideoPositionPlugin"),
      ]),
      u = {
        type: "placements/position/group",
        key: "connected_tv",
        placementPreviewImage: s("1177090"),
        mediaRecommendation:
          r("AdsPlacementCopy").POSITION_GROUP_MEDIA_RECOMMENDATION
            .CONNECTED_TV,
        name: r("AdsPlacementCopy").PLACEMENT_POSITION_GROUPS.CONNECTED_TV,
        subheader:
          r("AdsPlacementCopy").PLACEMENT_POSITION_SUBHEADERS.CONNECTED_TV,
        isEnabled: function (t) {
          return r("gkx")("23904");
        },
        positions: e,
        adsetReducer: function (t, n) {
          var e = n.action;
          switch (e.type) {
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
            case o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType:
              return o(
                "AdsPlacementAPISpecWriterUtils",
              ).addOrRemovePositionGroup(t, e, u.positions);
          }
          return t;
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
