__d(
  "AdsPlacementsThreadsPlatformPlugin",
  [
    "ix",
    "AdsAPITargetFields",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsMutators",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementPlatformLabelConstant",
    "AdsPlacementsThreadsFeedPositionPlugin",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "gkx",
    "immutable",
    "meta-brand-instagram-threads-filled-20",
    "meta-brand-instagram-threads-outline-16",
    "meta-brand-instagram-threads-outline-20",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return r("gkx")("19623") ? s("947346") : s("841197");
    }
    var u = {
        type: "placements/platform",
        key: "threads",
        apiPublisherPlatform: "threads",
        apiPositionsTargetField: function () {
          return r("AdsAPITargetFields").THREADS_POSITIONS;
        },
        name: r("AdsPlacementPlatformLabelConstant")[
          r("AdsAPITargetFields").THREADS_POSITIONS
        ],
        isEnabled: function (t) {
          return r("gkx")("5403");
        },
        glyph: o("meta-brand-instagram-threads-outline-20")
          .metaBrandInstagramThreadsOutline20,
        glyphActive: o("meta-brand-instagram-threads-filled-20")
          .metaBrandInstagramThreadsFilled20,
        fbicon: o("meta-brand-instagram-threads-outline-16")
          .metaBrandInstagramThreadsOutline16,
        placementPreviewImage: e(),
        positions: r("immutable").OrderedSet([
          r("AdsPlacementsThreadsFeedPositionPlugin"),
        ]),
        adsetReducer: function (t, n) {
          var e,
            r = n.action;
          switch (r.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return (e = r.removePlatforms) != null && e.includes("threads")
                ? o("AdsMutators").mutateEach(t, r.campaignIDs, function (e) {
                    return o(
                      "AdsPlacementAPISpecWriterUtils",
                    ).removePublisherPlatform(
                      e,
                      "threads",
                      r.eligibilityInformation,
                    );
                  })
                : t;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(t, r.ids, function (e) {
                return o("AdsPlacementAPISpecWriterUtils").addPublisherPlatform(
                  e,
                  "threads",
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
                    "threads",
                    r.eligibilityInformation,
                  );
                },
              );
          }
          return t;
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
