__d(
  "AdsPlacementsOculusPlatformPlugin",
  [
    "AdsAPITargetFields",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsMutators",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementPlatformLabelConstant",
    "AdsPlacementsOculusRewardedVideoPositionPlugin",
    "AdsPlacementsOculusVRAppsPositionPlugin",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "immutable",
    "meta-brand-oculus-filled-20",
    "meta-brand-oculus-outline-16",
    "meta-brand-oculus-outline-20",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "placements/platform",
        key: "oculus",
        apiPublisherPlatform: "oculus",
        apiPositionsTargetField: function (t) {
          return r("AdsAPITargetFields").OCULUS_POSITIONS;
        },
        name: r("AdsPlacementPlatformLabelConstant")[
          r("AdsAPITargetFields").OCULUS_POSITIONS
        ],
        isEnabled: function (t) {
          return !1;
        },
        glyph: o("meta-brand-oculus-outline-20").metaBrandOculusOutline20,
        glyphActive: o("meta-brand-oculus-filled-20").metaBrandOculusFilled20,
        fbicon: o("meta-brand-oculus-outline-16").metaBrandOculusOutline16,
        positions: r("immutable").OrderedSet([
          r("AdsPlacementsOculusVRAppsPositionPlugin"),
          r("AdsPlacementsOculusRewardedVideoPositionPlugin"),
        ]),
        adsetReducer: function (t, n) {
          var e,
            r = n.action;
          switch (r.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return (e = r.removePlatforms) != null && e.includes("oculus")
                ? o("AdsMutators").mutateEach(t, r.campaignIDs, function (e) {
                    return o(
                      "AdsPlacementAPISpecWriterUtils",
                    ).removePublisherPlatform(
                      e,
                      "oculus",
                      r.eligibilityInformation,
                    );
                  })
                : t;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(t, r.ids, function (e) {
                return o("AdsPlacementAPISpecWriterUtils").addPublisherPlatform(
                  e,
                  "oculus",
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
                    "oculus",
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
