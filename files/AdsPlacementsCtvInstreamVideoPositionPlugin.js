__d(
  "AdsPlacementsCtvInstreamVideoPositionPlugin",
  [
    "fbt",
    "ix",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAPITargetFields",
    "AdsBuyingTypes",
    "AdsCTVUtils",
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
      c = o("AdsCTVUtils").isCTVBetaEnabled() ? s._(/*BTDS*/ "") : null,
      d = {
        type: "placements/position",
        key: "streaming_services/ctv_instream_video",
        name:
          c != null
            ? c
            : r("AdsPlacementPositionLabelConstant").ctv_instream_video,
        nameWithPlatform:
          c != null
            ? c
            : r("AdsPlacementPositionLabelWithPlatformConstant")
                .streaming_services.ctv_instream_video,
        platformKey: "streaming_services",
        apiPosition: "ctv_instream_video",
        placementImage: u("1177090"),
        placementPreviewImage: u("1177090"),
        placementInfo: o("AdsCTVUtils").isCTVBetaEnabled()
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ ""),
        isNewPlacement: o("AdsCTVUtils").isCTVBetaEnabled(),
        mediaRecommendation: {
          copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION
            .AN_CTV_INSTREAM_VIDEO,
          videoCrop: "16:9",
        },
        isEnabled: function (t) {
          return r("gkx")("23904");
        },
        shouldHideInPlacementUI: function (n) {
          return (
            !e.includes(n.objective) ||
            n.buyingType !== r("AdsBuyingTypes").AUCTION
          );
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
              d.key,
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
            "streaming_services",
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
                "streaming_services/ctv_instream_video",
              )
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      t,
                      "streaming_services/ctv_instream_video",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").STREAMING_SERVICES_POSITIONS,
                      "streaming_services",
                    );
                  })
                : e.addGroups.includes("streaming_services/ctv_instream_video")
                  ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        t,
                        "streaming_services/ctv_instream_video",
                        e.eligibilityInformation,
                        r("AdsAPITargetFields").STREAMING_SERVICES_POSITIONS,
                        "streaming_services",
                      );
                    })
                  : t;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(t, e.ids, function (t) {
                return o("AdsPlacementAPISpecWriterUtils").addGroup(
                  t,
                  e.pluginKey,
                  e.eligibilityInformation,
                  r("AdsAPITargetFields").STREAMING_SERVICES_POSITIONS,
                  "streaming_services",
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
                    r("AdsAPITargetFields").STREAMING_SERVICES_POSITIONS,
                    "streaming_services",
                  );
                },
              );
          }
          return t;
        },
      },
      m = d;
    l.default = m;
  },
  226,
);
