__d(
  "AdsPlacementsFacebookNotificationPositionPlugin",
  [
    "fbt",
    "ix",
    "AdImageSpecCropKeys",
    "AdsAPIDevicePlatform",
    "AdsAPITargetFields",
    "AdsCampaignFacebookNotificationPositionValidator",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsFacebookNotificationsPlacementUtils",
    "AdsMutators",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementCopy",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementPositionLabelConstant",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = {
        type: "placements/position",
        key: "facebook/notification",
        name: r("AdsPlacementPositionLabelConstant").notification,
        nameWithPlatform: s._(/*BTDS*/ "Facebook Notifications"),
        mediaRecommendation: {
          imageCrop: r("AdImageSpecCropKeys")["100x100"],
          copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION
            .FACEBOOK_NOTIFICATION,
        },
        platformKey: "facebook",
        apiPosition: "notification",
        placementPreviewImage: u("838117"),
        adsetValidators: [
          r("AdsCampaignFacebookNotificationPositionValidator"),
        ],
        isEnabled: function (t) {
          return o(
            "AdsFacebookNotificationsPlacementUtils",
          ).isAdvertiserEligible();
        },
        getIneligibilityReason: function (t) {
          return t.spec &&
            o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
              t.spec,
              r("AdsAPIDevicePlatform").CONNECTED_TV,
            )
            ? o("AdsPlacementIneligibilityReason").createDevicePlatformReason(
                r("AdsAPIDevicePlatform").CONNECTED_TV,
              )
            : o(
                "AdsFacebookNotificationsPlacementUtils",
              ).getMaybeIneligibilityReason(t);
        },
        isActive: function (t) {
          return r("AdsPlacementAPISpecReaderUtils").isActivePosition(
            t,
            "facebook",
            "notification",
          );
        },
        isInactiveByDefault: function (t) {
          return !1;
        },
        getPreviews: function () {
          var e = ["previews/facebook_notification_mobile"];
          return r("immutable").OrderedSet(e);
        },
        getDefaultPreview: function () {
          return "previews/facebook_notification_mobile";
        },
        adsetReducer: function (t, n) {
          var e = n.action;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removeGroups.includes("facebook/notification")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      t,
                      "facebook/notification",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                      "facebook",
                    );
                  })
                : e.addGroups.includes("facebook/notification")
                  ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        t,
                        "facebook/notification",
                        e.eligibilityInformation,
                        r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                        "facebook",
                      );
                    })
                  : t;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(t, e.ids, function (t) {
                return o("AdsPlacementAPISpecWriterUtils").addGroup(
                  t,
                  e.pluginKey,
                  e.eligibilityInformation,
                  r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                  "facebook",
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
                    r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                    "facebook",
                  );
                },
              );
          }
          return t;
        },
        parentPlacements: r("immutable").OrderedSet(["facebook/feed"]),
        childPlacements: r("immutable").OrderedSet([]),
      },
      c = e;
    l.default = c;
  },
  226,
);
