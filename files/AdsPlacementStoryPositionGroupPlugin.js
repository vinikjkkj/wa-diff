__d(
  "AdsPlacementStoryPositionGroupPlugin",
  [
    "ix",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsMutators",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementCopy",
    "AdsPlacementsFacebookFbReelsPositionPlugin",
    "AdsPlacementsFacebookStoryPositionPlugin",
    "AdsPlacementsInstagramProfileReelsPositionPlugin",
    "AdsPlacementsInstagramReelsPositionPlugin",
    "AdsPlacementsInstagramStoryPositionPlugin",
    "AdsPlacementsMessengerStoryPositionPlugin",
    "AdsPlacementsWhatsAppStatusPositionPlugin",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "WAMOStatusAdsManagerUtils",
    "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        type: "placements/position/group",
        key: "story",
        placementPreviewImage: s("659042"),
        mediaRecommendation: o(
          "WAMOStatusAdsManagerUtils",
        ).isAdAccountEligibleForWAMOStatus()
          ? r("AdsPlacementCopy").POSITION_GROUP_MEDIA_RECOMMENDATION
              .STORY_STATUS_AND_REELS
          : r("AdsPlacementCopy").POSITION_GROUP_MEDIA_RECOMMENDATION
              .STORY_AND_REELS,
        subheader: r("AdsPlacementCopy").PLACEMENT_POSITION_SUBHEADERS.STORY,
        name: o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForWAMOStatus()
          ? r("AdsPlacementCopy").PLACEMENT_POSITION_GROUPS
              .STORY_STATUS_AND_REELS
          : r("AdsPlacementCopy").PLACEMENT_POSITION_GROUPS.STORY_AND_REELS,
        isEnabled: function (t) {
          return !0;
        },
        positions: r("immutable").OrderedSet([
          r("AdsPlacementsInstagramStoryPositionPlugin"),
          r("AdsPlacementsFacebookStoryPositionPlugin"),
          r("AdsPlacementsMessengerStoryPositionPlugin"),
          r("AdsPlacementsInstagramReelsPositionPlugin"),
          r("AdsPlacementsInstagramProfileReelsPositionPlugin"),
          r("AdsPlacementsFacebookFbReelsPositionPlugin"),
          r("AdsPlacementsWhatsAppStatusPositionPlugin"),
        ]),
        adsetReducer: function (n, r) {
          var t = r.action;
          switch (t.type) {
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(n, t.ids, function (n) {
                var r = t != null ? t : {},
                  a = r.eligibilityInformation,
                  i = o(
                    "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
                  ).convertCampaignRecordToPlacementSpec(n),
                  l = e.positions,
                  s = o(
                    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
                  ).getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut(
                    l,
                    a,
                  ),
                  u = s.map(function (e) {
                    return {
                      position: e,
                      positionField: o(
                        "AdsPlacementAPISpecReaderUtils",
                      ).getPositionFieldFromPositionPlugin(e),
                      platform: o(
                        "AdsPlacementAPISpecReaderUtils",
                      ).getPublisherPlatformFromPositionPlugin(e),
                    };
                  }),
                  c = u.every(function (e) {
                    var t = e.platform,
                      n = e.position;
                    return o(
                      "AdsPlacementAPISpecReaderUtils",
                    ).isActiveOrIneligiblePosition(i, a, n, t);
                  }),
                  d = c
                    ? o("AdsPlacementAPISpecWriterUtils").removeGroup
                    : o("AdsPlacementAPISpecWriterUtils").addGroup;
                return u.reduce(function (e, t) {
                  var n = t.platform,
                    r = t.position,
                    i = t.positionField;
                  return o("AdsPlacementAPISpecReaderUtils").isEligiblePosition(
                    a,
                    r,
                  )
                    ? d(e, r.key, a, i, n)
                    : e;
                }, n);
              });
            case o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType:
              return o(
                "AdsPlacementAPISpecWriterUtils",
              ).addOrRemovePositionGroup(n, t, e.positions);
          }
          return n;
        },
      },
      u = e;
    l.default = u;
  },
  98,
);
