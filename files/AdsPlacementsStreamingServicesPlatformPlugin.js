__d(
  "AdsPlacementsStreamingServicesPlatformPlugin",
  [
    "fbt",
    "AdsAPITargetFields",
    "AdsCTVUtils",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsMutators",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementPlatformLabelConstant",
    "AdsPlacementsCtvInstreamVideoPositionPlugin",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "gkx",
    "immutable",
    "meta-brand-tv-outline-16",
    "meta-brand-tv-outline-20",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        type: "placements/platform",
        key: "streaming_services",
        apiPublisherPlatform: "streaming_services",
        apiPositionsTargetField: function () {
          return r("AdsAPITargetFields").STREAMING_SERVICES_POSITIONS;
        },
        name: o("AdsCTVUtils").isCTVBetaEnabled()
          ? s._(/*BTDS*/ "")
          : r("AdsPlacementPlatformLabelConstant")[
              r("AdsAPITargetFields").STREAMING_SERVICES_POSITIONS
            ],
        glyph: o("meta-brand-tv-outline-20").metaBrandTvOutline20,
        fbicon: o("meta-brand-tv-outline-16").metaBrandTvOutline16,
        isEnabled: function (t) {
          return r("gkx")("23904");
        },
        positions: r("immutable").OrderedSet([
          r("AdsPlacementsCtvInstreamVideoPositionPlugin"),
        ]),
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
      u = e;
    l.default = u;
  },
  226,
);
