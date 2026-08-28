__d(
  "AdsPlacementOculusPositionGroupPlugin",
  [
    "ix",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementCopy",
    "AdsPlacementsOculusRewardedVideoPositionPlugin",
    "AdsPlacementsOculusVRAppsPositionPlugin",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = r("immutable").OrderedSet([
        r("AdsPlacementsOculusVRAppsPositionPlugin"),
        r("AdsPlacementsOculusRewardedVideoPositionPlugin"),
      ]),
      u = {
        type: "placements/position/group",
        key: "oculus-position-group",
        placementPreviewImage: s("1997398"),
        mediaRecommendation:
          r("AdsPlacementCopy").POSITION_GROUP_MEDIA_RECOMMENDATION.OCULUS,
        name: r("AdsPlacementCopy").PLACEMENT_POSITION_GROUPS.OCULUS,
        subheader: r("AdsPlacementCopy").PLACEMENT_POSITION_SUBHEADERS.OCULUS,
        isEnabled: function (t) {
          return !1;
        },
        positions: e,
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
