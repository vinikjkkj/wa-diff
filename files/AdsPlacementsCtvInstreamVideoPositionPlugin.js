__d(
  "AdsPlacementsCtvInstreamVideoPositionPlugin",
  [
    "fbt",
    "ix",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAPITargetFields",
    "AdsBuyingTypes",
    "AdsCampaignCtvInstreamVideoPositionValidator",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsMutators",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementCopy",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementPositionLabelConstant",
    "AdsPlacementPositionLabelWithPlatformConstant",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = r("immutable").Set([
        r("AdsAPIObjectives").OUTCOME_SALES,
        r("AdsAPIObjectives").OUTCOME_AWARENESS,
      ]),
      c = {
        type: "placements/position",
        key: "audience_network/ctv_instream_video",
        name: r("AdsPlacementPositionLabelConstant").ctv_instream_video,
        nameWithPlatform: r("AdsPlacementPositionLabelWithPlatformConstant")
          .audience_network.ctv_instream_video,
        platformKey: "audience_network",
        apiPosition: "ctv_instream_video",
        placementImage: u("1177090"),
        placementPreviewImage: u("1177090"),
        placementInfo: s._(
          /*BTDS*/ "Reach people streaming content on TV screens.",
        ),
        mediaRecommendation: {
          copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION
            .AN_CTV_INSTREAM_VIDEO,
          videoCrop: "16:9",
        },
        isEnabled: function (t) {
          return r("gkx")("23904");
        },
        getIneligibilityReason: function (n) {
          if (!r("gkx")("23904"))
            return o("AdsPlacementIneligibilityReason").createGenericReason();
          if (!e.includes(n.objective))
            return o("AdsPlacementIneligibilityReason").createObjectiveReason(
              n.objective,
            );
          if (n.buyingType !== r("AdsBuyingTypes").AUCTION)
            return o("AdsPlacementIneligibilityReason").createBuyingTypeReason(
              n.buyingType,
              c.key,
            );
          if (
            n.spec != null &&
            !o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
              n.spec,
              r("AdsAPIDevicePlatform").CONNECTED_TV,
            )
          ) {
            var t = o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
              n.spec,
              r("AdsAPIDevicePlatform").DESKTOP,
            )
              ? r("AdsAPIDevicePlatform").DESKTOP
              : r("AdsAPIDevicePlatform").MOBILE;
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(t);
          }
          return null;
        },
        isActive: function (t) {
          return r("AdsPlacementAPISpecReaderUtils").isActivePosition(
            t,
            "audience_network",
            "ctv_instream_video",
          );
        },
        isInactiveByDefault: function (t) {
          return (
            t.spec == null ||
            !o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
              t.spec,
              r("AdsAPIDevicePlatform").CONNECTED_TV,
            )
          );
        },
        adsetValidators: [r("AdsCampaignCtvInstreamVideoPositionValidator")],
        getPreviews: function (t) {
          return r("immutable").OrderedSet(["previews/ctv_instream_video"]);
        },
        getDefaultPreview: function () {
          return "previews/ctv_instream_video";
        },
        adsetReducer: function (t, n) {
          var e = n.action;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removeGroups.includes(
                "audience_network/ctv_instream_video",
              )
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      t,
                      "audience_network/ctv_instream_video",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").AUDIENCE_NETWORK_POSITIONS,
                      "audience_network",
                    );
                  })
                : e.addGroups.includes("audience_network/ctv_instream_video")
                  ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        t,
                        "audience_network/ctv_instream_video",
                        e.eligibilityInformation,
                        r("AdsAPITargetFields").AUDIENCE_NETWORK_POSITIONS,
                        "audience_network",
                      );
                    })
                  : t;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(t, e.ids, function (t) {
                return o("AdsPlacementAPISpecWriterUtils").addGroup(
                  t,
                  e.pluginKey,
                  e.eligibilityInformation,
                  r("AdsAPITargetFields").AUDIENCE_NETWORK_POSITIONS,
                  "audience_network",
                );
              });
            case o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType:
              return o("AdsMutators").mutateEach(
                t,
                e.campaignIDs,
                function (t) {
                  return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                    t,
                    e.pluginKey,
                    e.eligibilityInformation,
                    r("AdsAPITargetFields").AUDIENCE_NETWORK_POSITIONS,
                    "audience_network",
                  );
                },
              );
          }
          return t;
        },
      },
      d = c;
    l.default = d;
  },
  226,
);
