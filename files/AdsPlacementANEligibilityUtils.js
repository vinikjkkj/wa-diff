__d(
  "AdsPlacementANEligibilityUtils",
  [
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAppUrlUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementIneligibilityReason",
    "AdsPromotedObjectTypes",
    "AudienceNetworkUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i) {
      return r("AdsAppUrlUtils").isWindowsURL(e.objectStoreURL)
        ? o("AdsPlacementIneligibilityReason").createWindowsAppReason()
        : e.spec &&
            o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
              e.spec,
              r("AdsAPIDevicePlatform").CONNECTED_TV,
            )
          ? o("AdsPlacementIneligibilityReason").createDevicePlatformReason(
              r("AdsAPIDevicePlatform").CONNECTED_TV,
            )
          : t.includes(e.objective)
            ? e.objective === r("AdsAPIObjectives").APP_INSTALLS &&
              e.promotedObjectType === r("AdsPromotedObjectTypes").CANVAS_APP
              ? o("AdsPlacementIneligibilityReason").createCanvasAppReason()
              : e.objective == r("AdsAPIObjectives").LEAD_GENERATION
                ? e.promotedObjectType ===
                  r("AdsPromotedObjectTypes").PHONE_CALL
                  ? o(
                      "AdsPlacementIneligibilityReason",
                    ).createPhoneCallLeadReason()
                  : e.promotedObjectType ===
                      r("AdsPromotedObjectTypes").MESSENGER
                    ? o(
                        "AdsPlacementIneligibilityReason",
                      ).createMessengerReason(e.objective)
                    : null
                : r("AdsAppUrlUtils").isFacebookDesktopURL(e.objectStoreURL)
                  ? o("AdsPlacementIneligibilityReason").createGenericReason()
                  : (e.spec.device_platforms &&
                        o(
                          "AdsPlacementAPISpecReaderUtils",
                        ).isOnlyActiveDevicePlatform(
                          e.spec,
                          r("AdsAPIDevicePlatform").DESKTOP,
                        ) &&
                        !n.contains(r("AdsAPIDevicePlatform").DESKTOP)) ||
                      (e.spec.device_platforms &&
                        o(
                          "AdsPlacementAPISpecReaderUtils",
                        ).isOnlyActiveDevicePlatform(
                          e.spec,
                          r("AdsAPIDevicePlatform").DESKTOP,
                        ) &&
                        !o("AudienceNetworkUtils").supportsANVideoButNoANStatic(
                          e.objective,
                        ) &&
                        e.objective !== r("AdsAPIObjectives").CONVERSIONS)
                    ? o(
                        "AdsPlacementIneligibilityReason",
                      ).createDevicePlatformReason(
                        r("AdsAPIDevicePlatform").DESKTOP,
                      )
                    : e.objective ===
                          r("AdsAPIObjectives").MOBILE_APP_INSTALLS &&
                        e.optimizationGoal ===
                          r("AdsAPIOptimizationGoals").APP_DOWNLOADS
                      ? o(
                          "AdsPlacementIneligibilityReason",
                        ).createOptimizationGoalReason()
                      : e.containsOffer === !0
                        ? o(
                            "AdsPlacementIneligibilityReason",
                          ).createOfferOptionReason(e.objective)
                        : e.objective === r("AdsAPIObjectives").CONVERSIONS &&
                            e.promotedObjectType ===
                              r("AdsPromotedObjectTypes").OFFLINE_EVENT_SET
                          ? o(
                              "AdsPlacementIneligibilityReason",
                            ).createOptimizationGoalReason()
                          : e.isTargetFrequencyInAuctionEnabled === !0
                            ? o(
                                "AdsPlacementIneligibilityReason",
                              ).createTargetFrequencyAuctionReason()
                            : null
            : o("AdsPlacementIneligibilityReason").createObjectiveReason(i);
    }
    l.getANIneligibilityReason = e;
  },
  98,
);
