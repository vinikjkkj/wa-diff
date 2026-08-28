__d(
  "AdsPlacementChannelPositionGroupPlugin",
  [
    "ix",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementCopy",
    "AdsPlacementsWhatsAppChannelPositionPlugin",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "PromoChannelAdsManagerUtils",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = r("immutable").OrderedSet([
        r("AdsPlacementsWhatsAppChannelPositionPlugin"),
      ]),
      u = {
        type: "placements/position/group",
        key: "channel",
        placementPreviewImage: s("836512"),
        mediaRecommendation:
          r("AdsPlacementCopy").POSITION_GROUP_MEDIA_RECOMMENDATION.CHANNEL,
        subheader: r("AdsPlacementCopy").PLACEMENT_POSITION_SUBHEADERS.CHANNEL,
        name: r("AdsPlacementCopy").PLACEMENT_POSITION_GROUPS.CHANNEL,
        isEnabled: function (t) {
          return o(
            "PromoChannelAdsManagerUtils",
          ).isAdAccountEligibleForPromoChannel();
        },
        positions: e,
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
