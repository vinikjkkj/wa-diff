__d(
  "AdsPlacementExternalDisplayPositionGroupPlugin",
  [
    "ix",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementCopy",
    "AdsPlacementsAudienceNetworkClassicPositionPlugin",
    "AdsPlacementsAudienceNetworkInstreamVideoPositionPlugin",
    "AdsPlacementsAudienceNetworkRewardedVideoPositionPlugin",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return r("gkx")("7201") ? s("1115261") : s("939866");
    }
    var u = {
        type: "placements/position/group",
        key: "external",
        placementPreviewImage: e(),
        mediaRecommendation:
          r("AdsPlacementCopy").POSITION_GROUP_MEDIA_RECOMMENDATION.EXTERNAL,
        name: r("AdsPlacementCopy").PLACEMENT_POSITION_GROUPS.EXTERNAL_DISPLAY,
        isEnabled: function (t) {
          return !0;
        },
        subheader: r("AdsPlacementCopy").PLACEMENT_POSITION_SUBHEADERS.EXTERNAL,
        positions: r("immutable").OrderedSet([
          r("AdsPlacementsAudienceNetworkClassicPositionPlugin"),
          r("AdsPlacementsAudienceNetworkRewardedVideoPositionPlugin"),
          r("AdsPlacementsAudienceNetworkInstreamVideoPositionPlugin"),
        ]),
        adsetReducer: function (t, n) {
          var e = n.action,
            r = e != null ? e : {},
            a = r.eligibilityInformation,
            i = u.positions,
            l = o(
              "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
            ).getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut(
              i,
              a,
            );
          switch (e.type) {
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
            case o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType:
              return o(
                "AdsPlacementAPISpecWriterUtils",
              ).addOrRemovePositionGroup(t, e, l);
          }
          return t;
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
