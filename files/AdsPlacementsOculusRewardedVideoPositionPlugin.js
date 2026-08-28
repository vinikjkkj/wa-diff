__d(
  "AdsPlacementsOculusRewardedVideoPositionPlugin",
  [
    "fbt",
    "ix",
    "AdsAPIDevicePlatform",
    "AdsAPITargetFields",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsMutators",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementCopy",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementPositionLabelConstant",
    "AdsPlacementsOculusPluginUtils",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "VultureJSDeadComponent.react",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "immutable",
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = {
        type: "placements/position",
        key: "oculus/rewarded_video",
        name: r("AdsPlacementPositionLabelConstant").vr_rewarded_video,
        nameWithPlatform: s._(/*BTDS*/ "Oculus in-app rewarded videos"),
        apiPosition: "vr_rewarded_video",
        mediaRecommendation: {
          copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION
            .OC_REWARDED_VIDEO,
        },
        placementPreviewImage: u("158127"),
        platformKey: "oculus",
        isEnabled: function (t) {
          return !1;
        },
        getPlacementSpecificPreviewInfo: function (t) {
          r("vulture")("qG9xpE2AV1n_8BnUd2Za1x8iA2o=");
          var e = c.jsx(r("VultureJSDeadComponent.react"), {
            name: "OculusPlacementInfoText",
          });
          return { description: e };
        },
        getIneligibilityReason: function (t) {
          var e = o(
            "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
          ).getSOOBundleParentIneligibilityReason(d, t);
          return e != null
            ? e
            : t.isReelsTrendingAds === !0
              ? o(
                  "AdsPlacementIneligibilityReason",
                ).createReelsTrendingAdsReason()
              : t.spec &&
                  o(
                    "AdsPlacementAPISpecReaderUtils",
                  ).isOnlyActiveDevicePlatform(
                    t.spec,
                    r("AdsAPIDevicePlatform").CONNECTED_TV,
                  )
                ? o(
                    "AdsPlacementIneligibilityReason",
                  ).createDevicePlatformReason(
                    r("AdsAPIDevicePlatform").CONNECTED_TV,
                  )
                : o(
                    "AdsPlacementsOculusPluginUtils",
                  ).getOculusVRAdIneligibilityReason(
                    t,
                    "oculus/rewarded_video",
                  );
        },
        isActive: function (t) {
          return o("AdsPlacementAPISpecReaderUtils").isActivePosition(
            t,
            "oculus",
            "vr_rewarded_video",
          );
        },
        isInactiveByDefault: function (t) {
          return (r("vulture")("JZIx9jmFHMYJjOBdTrnQwlWWWPE="), !0);
        },
        getPreviews: function (t) {
          var e = [],
            n = o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
              t.spec,
              r("AdsAPIDevicePlatform").MOBILE,
            );
          return (
            n && e.push("previews/oculus_rewarded_video"),
            r("immutable").OrderedSet(e)
          );
        },
        getDefaultPreview: function (t) {
          return o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
            t.spec,
            r("AdsAPIDevicePlatform").MOBILE,
          )
            ? "previews/oculus_rewarded_video"
            : null;
        },
        adsetReducer: function (t, n) {
          var e = n.action;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removeGroups.includes("oculus/rewarded_video")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      t,
                      "oculus/rewarded_video",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").OCULUS_POSITIONS,
                      "oculus",
                    );
                  })
                : e.addGroups.includes("oculus/rewarded_video")
                  ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        t,
                        "oculus/rewarded_video",
                        e.eligibilityInformation,
                        r("AdsAPITargetFields").OCULUS_POSITIONS,
                        "oculus",
                      );
                    })
                  : t;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(t, e.ids, function (t) {
                return o("AdsPlacementAPISpecWriterUtils").addGroup(
                  t,
                  e.pluginKey,
                  e.eligibilityInformation,
                  r("AdsAPITargetFields").OCULUS_POSITIONS,
                  "oculus",
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
                    r("AdsAPITargetFields").OCULUS_POSITIONS,
                    "oculus",
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
