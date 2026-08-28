__d(
  "AdsPlacementInStreamPositionGroupPlugin",
  [
    "ix",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementCopy",
    "AdsPlacementsFacebookInstreamVideosPositionPlugin",
    "AdsPlacementsFacebookReelsOverlayPositionPlugin",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "FacebookReelsOverlayStoreUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return o(
        "FacebookReelsOverlayStoreUtils",
      ).incontentCreativeGuideExperiment()
        ? r("AdsPlacementCopy").POSITION_GROUP_MEDIA_RECOMMENDATION
            .STREAM_WITH_REELS_VERTICAL
        : r("AdsPlacementCopy").POSITION_GROUP_MEDIA_RECOMMENDATION
            .STREAM_WITH_REELS;
    }
    function u() {
      return r("AdsPlacementCopy").PLACEMENT_POSITION_SUBHEADERS
        .STREAM_AND_REELS_VU;
    }
    function c() {
      return r("immutable").OrderedSet([
        r("AdsPlacementsFacebookInstreamVideosPositionPlugin"),
        r("AdsPlacementsFacebookReelsOverlayPositionPlugin"),
      ]);
    }
    var d = {
        type: "placements/position/group",
        key: "stream",
        placementPreviewImage: o(
          "FacebookReelsOverlayStoreUtils",
        ).incontentCreativeGuideExperiment()
          ? s("1170718")
          : s("556716"),
        placementPreviewVideo: "10150013094781918",
        mediaRecommendation: e(),
        subheader: u(),
        name: o("FacebookReelsOverlayStoreUtils").getInstreamPositionGroupFbt(),
        isEnabled: function (t) {
          return !0;
        },
        positions: c(),
        adsetReducer: function (t, n) {
          var e = n.action;
          switch (e.type) {
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
            case o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType:
              return o(
                "AdsPlacementAPISpecWriterUtils",
              ).addOrRemovePositionGroup(t, e, d.positions);
          }
          return t;
        },
      },
      m = d;
    l.default = m;
  },
  98,
);
