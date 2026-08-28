__d(
  "AdsPlacementsMessengerPlatformPlugin",
  [
    "ix",
    "AdsAPITargetFields",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsMessengerPlacementUtils",
    "AdsMutators",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementPlatformLabelConstant",
    "AdsPlacementsMessengerInboxPositionPlugin",
    "AdsPlacementsMessengerMarketingMessagePositionPlugin",
    "AdsPlacementsMessengerStoryPositionPlugin",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "immutable",
    "meta-brand-messenger-filled-20",
    "meta-brand-messenger-outline-16",
    "meta-brand-messenger-outline-20",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        type: "placements/platform",
        key: "messenger",
        apiPublisherPlatform: "messenger",
        apiPositionsTargetField: function () {
          return r("AdsAPITargetFields").MESSENGER_POSITIONS;
        },
        name: r("AdsPlacementPlatformLabelConstant")[
          r("AdsAPITargetFields").MESSENGER_POSITIONS
        ],
        glyph: o("meta-brand-messenger-outline-20").metaBrandMessengerOutline20,
        glyphActive: o("meta-brand-messenger-filled-20")
          .metaBrandMessengerFilled20,
        fbicon: o("meta-brand-messenger-outline-16")
          .metaBrandMessengerOutline16,
        placementPreviewImage: s("556726"),
        getPlacementSpecificPreviewInfo: function (t) {
          return o(
            "AdsMessengerPlacementUtils",
          ).getPlacementSpecificPreviewInfo();
        },
        isEnabled: function (t) {
          return !0;
        },
        positions: r("immutable").OrderedSet([
          r("AdsPlacementsMessengerInboxPositionPlugin"),
          r("AdsPlacementsMessengerStoryPositionPlugin"),
          r("AdsPlacementsMessengerMarketingMessagePositionPlugin"),
        ]),
        adsetReducer: function (t, n) {
          var e = n.action;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removePlatforms.includes("messenger")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o(
                      "AdsPlacementAPISpecWriterUtils",
                    ).removePublisherPlatform(
                      t,
                      "messenger",
                      e.eligibilityInformation,
                    );
                  })
                : t;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(t, e.ids, function (t) {
                return o("AdsPlacementAPISpecWriterUtils").addPublisherPlatform(
                  t,
                  "messenger",
                  e.eligibilityInformation,
                );
              });
            case o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType:
              return o("AdsMutators").mutateEach(
                t,
                e.campaignIDs,
                function (t) {
                  return o(
                    "AdsPlacementAPISpecWriterUtils",
                  ).removePublisherPlatform(
                    t,
                    "messenger",
                    e.eligibilityInformation,
                  );
                },
              );
          }
          return t;
        },
      },
      u = e;
    l.default = u;
  },
  98,
);
