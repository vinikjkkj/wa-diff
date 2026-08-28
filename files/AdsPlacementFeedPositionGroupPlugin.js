__d(
  "AdsPlacementFeedPositionGroupPlugin",
  [
    "ix",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementCopy",
    "AdsPlacementsFacebookBizDiscoFeedPositionPlugin",
    "AdsPlacementsFacebookFeedsPositionPlugin",
    "AdsPlacementsFacebookGroupTabPositionPlugin",
    "AdsPlacementsFacebookMarketplacePositionPlugin",
    "AdsPlacementsFacebookNotificationPositionPlugin",
    "AdsPlacementsFacebookProfileFeedPositionPlugin",
    "AdsPlacementsFacebookRightColumnPositionPlugin",
    "AdsPlacementsFacebookVideoFeedsPositionPlugin",
    "AdsPlacementsInstagramExploreHomePositionPlugin",
    "AdsPlacementsInstagramExplorePositionPlugin",
    "AdsPlacementsInstagramFeedPositionPlugin",
    "AdsPlacementsInstagramProfileFeedPositionPlugin",
    "AdsPlacementsInstagramShopTabPositionPlugin",
    "AdsPlacementsMessengerInboxPositionPlugin",
    "AdsPlacementsThreadsFeedPositionPlugin",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = r("immutable").OrderedSet([
        r("AdsPlacementsFacebookFeedsPositionPlugin"),
        r("AdsPlacementsFacebookProfileFeedPositionPlugin"),
        r("AdsPlacementsInstagramFeedPositionPlugin"),
        r("AdsPlacementsInstagramProfileFeedPositionPlugin"),
        r("AdsPlacementsFacebookMarketplacePositionPlugin"),
        r("AdsPlacementsFacebookVideoFeedsPositionPlugin"),
        r("AdsPlacementsFacebookRightColumnPositionPlugin"),
        r("AdsPlacementsInstagramExplorePositionPlugin"),
        r("AdsPlacementsInstagramExploreHomePositionPlugin"),
        r("AdsPlacementsInstagramShopTabPositionPlugin"),
        r("AdsPlacementsMessengerInboxPositionPlugin"),
        r("AdsPlacementsFacebookGroupTabPositionPlugin"),
        r("AdsPlacementsFacebookBizDiscoFeedPositionPlugin"),
        r("AdsPlacementsThreadsFeedPositionPlugin"),
        r("AdsPlacementsFacebookNotificationPositionPlugin"),
      ]),
      u = {
        type: "placements/position/group",
        key: "feed",
        placementPreviewImage: s("901242"),
        mediaRecommendation:
          r("AdsPlacementCopy").POSITION_GROUP_MEDIA_RECOMMENDATION.FEED,
        name: r("AdsPlacementCopy").PLACEMENT_POSITION_GROUPS.FEED,
        subheader: r("AdsPlacementCopy").PLACEMENT_POSITION_SUBHEADERS.FEED,
        isEnabled: function (t) {
          return !0;
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
