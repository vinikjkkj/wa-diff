__d(
  "AdsPlacementsAudienceNetworkPlatformPlugin",
  [
    "fbt",
    "ix",
    "AdsAPITargetFields",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsMutators",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementPlatformLabelConstant",
    "AdsPlacementsAudienceNetworkClassicPositionPlugin",
    "AdsPlacementsAudienceNetworkInstreamVideoPositionPlugin",
    "AdsPlacementsAudienceNetworkRewardedVideoPositionPlugin",
    "AdsPlacementsCtvInstreamVideoPositionPlugin",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "VultureJSDeadComponent.react",
    "gkx",
    "immutable",
    "meta-brand-audience-network-filled-20",
    "meta-brand-audience-network-outline-16",
    "meta-brand-audience-network-outline-20",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = {
        type: "placements/platform",
        key: "audience_network",
        apiPublisherPlatform: "audience_network",
        name: r("AdsPlacementPlatformLabelConstant")[
          r("AdsAPITargetFields").AUDIENCE_NETWORK_POSITIONS
        ],
        glyph: o("meta-brand-audience-network-outline-20")
          .metaBrandAudienceNetworkOutline20,
        glyphActive: o("meta-brand-audience-network-filled-20")
          .metaBrandAudienceNetworkFilled20,
        fbicon: o("meta-brand-audience-network-outline-16")
          .metaBrandAudienceNetworkOutline16,
        placementPreviewImage: r("gkx")("7201") ? u("1115261") : u("939866"),
        placementPreviewReactComponent: function () {
          return c.jsx(r("VultureJSDeadComponent.react"), {
            name: "AdsPlacementAudienceNetworkInfoSection",
          });
        },
        isEnabled: function () {
          return !0;
        },
        positions: r("immutable").OrderedSet([
          r("AdsPlacementsAudienceNetworkClassicPositionPlugin"),
          r("AdsPlacementsCtvInstreamVideoPositionPlugin"),
          r("AdsPlacementsAudienceNetworkInstreamVideoPositionPlugin"),
          r("AdsPlacementsAudienceNetworkRewardedVideoPositionPlugin"),
        ]),
        placementInfo: s._(
          /*BTDS*/ "Extend your reach by showing ads to the same target audience on other mobile apps and websites.",
        ),
        adsetReducer: function (t, n) {
          var e = n.action;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removePlatforms.includes("audience_network")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o(
                      "AdsPlacementAPISpecWriterUtils",
                    ).removePublisherPlatform(
                      t,
                      "audience_network",
                      e.eligibilityInformation,
                    );
                  })
                : t;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(t, e.ids, function (t) {
                var n = o(
                  "AdsPlacementAPISpecWriterUtils",
                ).addPublisherPlatform(
                  t,
                  "audience_network",
                  e.eligibilityInformation,
                );
                return (
                  (n = o(
                    "AdsPlacementAPISpecWriterUtils",
                  ).removeMessengerThreadPlacement(
                    n,
                    e.eligibilityInformation,
                  )),
                  n
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
                    "audience_network",
                    e.eligibilityInformation,
                  );
                },
              );
          }
          return t;
        },
        apiPositionsTargetField: function () {
          return r("AdsAPITargetFields").AUDIENCE_NETWORK_POSITIONS;
        },
      },
      m = d;
    l.default = m;
  },
  226,
);
