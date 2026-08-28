__d(
  "AdsPlacementsStreamingServicesPlatformPlugin",
  [
    "AdsAPITargetFields",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsMutators",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementPlatformLabelConstant",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "placements/platform",
        key: "streaming_services",
        apiPublisherPlatform: "streaming_services",
        apiPositionsTargetField: function () {
          return null;
        },
        name: r("AdsPlacementPlatformLabelConstant")[
          r("AdsAPITargetFields").STREAMING_SERVICES_POSITIONS
        ],
        isEnabled: function (t) {
          return r("gkx")("10128");
        },
        positions: r("immutable").OrderedSet(),
        adsetReducer: function (t, n) {
          var e,
            r = n.action;
          switch (r.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return (e = r.removePlatforms) != null &&
                e.includes("streaming_services")
                ? o("AdsMutators").mutateEach(t, r.campaignIDs, function (e) {
                    return o(
                      "AdsPlacementAPISpecWriterUtils",
                    ).removePublisherPlatform(
                      e,
                      "streaming_services",
                      r.eligibilityInformation,
                    );
                  })
                : t;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(t, r.ids, function (e) {
                return o("AdsPlacementAPISpecWriterUtils").addPublisherPlatform(
                  e,
                  "streaming_services",
                  r.eligibilityInformation,
                );
              });
            case o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType:
              return o("AdsMutators").mutateEach(
                t,
                r.campaignIDs,
                function (e) {
                  return o(
                    "AdsPlacementAPISpecWriterUtils",
                  ).removePublisherPlatform(
                    e,
                    "streaming_services",
                    r.eligibilityInformation,
                  );
                },
              );
          }
          return t;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
