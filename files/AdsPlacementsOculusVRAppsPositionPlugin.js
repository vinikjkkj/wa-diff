__d(
  "AdsPlacementsOculusVRAppsPositionPlugin",
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
        key: "oculus/vr_apps",
        name: r("AdsPlacementPositionLabelConstant").vr_apps,
        nameWithPlatform: s._(/*BTDS*/ "Oculus in-app panels"),
        apiPosition: "vr_apps",
        mediaRecommendation: {
          copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION.OC_VR_APPS,
        },
        placementPreviewImage: u("146103"),
        platformKey: "oculus",
        isEnabled: function () {
          return !1;
        },
        getPlacementSpecificPreviewInfo: function (t) {
          r("vulture")("agZ5oKXOj2fZUKm8wRxtU9CJhMA=");
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
                  ).getOculusVRAdIneligibilityReason(t, "oculus/vr_apps");
        },
        isActive: function (t) {
          return o("AdsPlacementAPISpecReaderUtils").isActivePosition(
            t,
            "oculus",
            "vr_apps",
          );
        },
        isInactiveByDefault: function (t) {
          return (r("vulture")("Z5hNwsaO8ev5DdNEaV1eaUvmhVE="), !0);
        },
        getPreviews: function (t) {
          var e = [],
            n = o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
              t.spec,
              r("AdsAPIDevicePlatform").MOBILE,
            );
          return (
            n && e.push("previews/oculus_vr_apps"),
            r("immutable").OrderedSet(e)
          );
        },
        getDefaultPreview: function (t) {
          return o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
            t.spec,
            r("AdsAPIDevicePlatform").MOBILE,
          )
            ? "previews/oculus_vr_apps"
            : null;
        },
        adsetReducer: function (t, n) {
          var e = n.action;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removeGroups.includes("oculus/vr_apps")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      t,
                      "oculus/vr_apps",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").OCULUS_POSITIONS,
                      "oculus",
                    );
                  })
                : e.addGroups.includes("oculus/vr_apps")
                  ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        t,
                        "oculus/vr_apps",
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
