__d(
  "AdsPlacementsInstagramReelsPositionPlugin",
  [
    "fbt",
    "ix",
    "AdCampaignDestination",
    "AdImageSpecCropKeys",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAPITargetFields",
    "AdsAccountStore",
    "AdsAppUrlUtils",
    "AdsBuyingTypes",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsCampaignReelsPositionValidator",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementConfigObjectiveEligibilityUtils",
    "AdsPlacementConfigOptimizationGoalEligibilityUtils",
    "AdsPlacementCopy",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementInstagramPositionPluginUtils",
    "AdsPlacementPositionLabelConstant",
    "AdsPromotedObjectTypes",
    "AdsReachFrequencyPlacementUtils",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUnifiedProfileVisitUtils",
    "AdsWhatsAppPlacementUtils",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e(e) {
      switch (e) {
        case r("AdsPromotedObjectTypes").DONATION:
          return o("AdsPlacementIneligibilityReason").createDonationReason();
        case r("AdsPromotedObjectTypes").GROUP:
          return o(
            "AdsPlacementIneligibilityReason",
          ).createGroupPromotionReason();
        case r("AdsPromotedObjectTypes").IMAGINATION:
          return o("AdsPlacementIneligibilityReason").createImaginationReason();
        case r("AdsPromotedObjectTypes").CANVAS_APP:
          return o("AdsPlacementIneligibilityReason").createCanvasAppReason();
        default:
          return null;
      }
    }
    function c() {
      return r("gkx")("19623") ? u("947344") : u("1944946");
    }
    var d = {
        type: "placements/position",
        key: "instagram/reels",
        name: r("AdsPlacementPositionLabelConstant").reels,
        nameWithPlatform: s._(/*BTDS*/ "Instagram Reels"),
        mediaRecommendation: {
          copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION.IG_REELS,
          imageCrop: r("AdImageSpecCropKeys")["90x160"],
          videoCrop: "9:16",
        },
        apiPosition: "reels",
        placementPreviewImage: c(),
        platformKey: "instagram",
        adsetValidators: [r("AdsCampaignReelsPositionValidator")],
        isEnabled: function () {
          return !0;
        },
        getIneligibilityReason: function (n) {
          var t,
            a,
            i = o(
              "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
            ).getSOOBundleParentIneligibilityReason(d, n);
          if (i != null) return i;
          var l = n.buyingType,
            s = n.promotedObjectType,
            u = n.spec;
          if (
            n.spec &&
            o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
              n.spec,
              r("AdsAPIDevicePlatform").CONNECTED_TV,
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(
              r("AdsAPIDevicePlatform").CONNECTED_TV,
            );
          if (
            n.isReelsTrendingAds === !0 &&
            (r("gkx")("11580") || n.isCountryEnabledForFBReels === !0)
          )
            return null;
          var c = r("AdsAccountStore").getSelectedAccount().getValue(),
            m = o("AdsODAXUtils").maybeTranslateObjective(
              n.objective,
              s,
              n.optimizationGoal,
            ),
            p = o(
              "AdsPlacementConfigObjectiveEligibilityUtils",
            ).getObjectiveIneligibilityReasonForPlacementType(
              "instagram",
              "reels",
              n,
            );
          if (p != null) return p;
          if (
            l !== r("AdsBuyingTypes").RESERVED &&
            l !== r("AdsBuyingTypes").AUCTION
          )
            return o("AdsPlacementIneligibilityReason").createBuyingTypeReason(
              l,
              d.key,
            );
          if (l === r("AdsBuyingTypes").RESERVED) {
            var _ = o(
              "AdsReachFrequencyPlacementUtils",
            ).getReachFrequencyDisabledReason(
              "instagram/reels",
              babelHelpers.extends({}, n, { objective: m }),
            );
            if (_ !== null) return _;
          }
          var f = o(
            "AdsPlacementConfigOptimizationGoalEligibilityUtils",
          ).getOptimizationGoalIneligibilityReasonForPlacementType(
            "instagram",
            "reels",
            n,
          );
          if (
            (o(
              "AdsUEditorMessagingDestinationUtils",
            ).isClickToMessageAdDestination(n.destinationType) &&
              f != null &&
              (f = null),
            f != null)
          )
            return f;
          if (
            u.device_platforms &&
            !(
              (t = u.device_platforms) != null &&
              t.includes(r("AdsAPIDevicePlatform").MOBILE)
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(r("AdsAPIDevicePlatform").DESKTOP);
          var g = e(s);
          return g != null
            ? g
            : n.destinationType === r("AdCampaignDestination").FACEBOOK_LIVE
              ? o("AdsPlacementIneligibilityReason").createFacebookLiveReason()
              : m === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
                  n.optimizationGoal ===
                    r("AdsAPIOptimizationGoals").QUALITY_CALL
                ? o(
                    "AdsPlacementIneligibilityReason",
                  ).createOptimizationGoalReason()
                : o("AdsWhatsAppPlacementUtils").isIneligibleForIGReels(
                      c,
                      babelHelpers.extends({}, n, { objective: m }),
                    )
                  ? o("AdsPlacementIneligibilityReason").createWhatsAppReason(
                      n.objective,
                    )
                  : n.containsOffer === !0
                    ? o(
                        "AdsPlacementIneligibilityReason",
                      ).createOfferOptionReason(n.objective)
                    : n.directInstallDevices === !0
                      ? o(
                          "AdsPlacementIneligibilityReason",
                        ).createDirectInstallReason()
                      : r("AdsAppUrlUtils").isWindowsURL(n.objectStoreURL)
                        ? o(
                            "AdsPlacementIneligibilityReason",
                          ).createWindowsAppReason()
                        : r("AdsAppUrlUtils").isInstantGameURL(n.objectStoreURL)
                          ? o(
                              "AdsPlacementIneligibilityReason",
                            ).createInstantGameReason()
                          : (a = n.isClickToMPAds) != null && a
                            ? o(
                                "AdsPlacementIneligibilityReason",
                              ).createGenericReason()
                            : o(
                                  "AdsUnifiedProfileVisitUtils",
                                ).getIsIGPositionCondtionallyDisabledForUnifiedProfileVisits(
                                  m,
                                  n.promotedObjectType,
                                  n.destinationType,
                                  n.optimizationGoal,
                                )
                              ? o(
                                  "AdsUnifiedProfileVisitUtils",
                                ).getUnifiedProfileVisitsAdsPlacementIneligibilityReason(
                                  n.destinationType,
                                )
                              : null;
        },
        isActive: function (t) {
          return o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(
            t,
            "reels",
          );
        },
        isInactiveByDefault: function (t) {
          var e = o("AdsODAXUtils").maybeTranslateObjective(
            t.objective,
            t.promotedObjectType,
            t.optimizationGoal,
          );
          if (
            t.isReelsTrendingAds === !0 &&
            (r("gkx")("11580") || t.isCountryEnabledForFBReels === !0)
          ) {
            var n,
              a = (n = t.spec) == null ? void 0 : n.instagram_positions;
            return a != null && a.length > 0 ? !a.includes("reels") : !1;
          }
          return !o(
            "AdsPlacementInstagramPositionPluginUtils",
          ).isEligibleObjectiveForReels(t, e);
        },
        getPreviews: function (t) {
          var e = ["previews/instagram_reels"];
          return r("immutable").OrderedSet(e);
        },
        getDefaultPreview: function () {
          return "previews/instagram_reels";
        },
        adsetReducer: function (t, n) {
          var e = n.action;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removeGroups.includes("instagram/reels")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      t,
                      "instagram/reels",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                      "instagram",
                    );
                  })
                : e.addGroups.includes("instagram/reels")
                  ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        t,
                        "instagram/reels",
                        e.eligibilityInformation,
                        r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                        "instagram",
                      );
                    })
                  : t;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(t, e.ids, function (t) {
                return o("AdsPlacementAPISpecWriterUtils").addGroup(
                  t,
                  e.pluginKey,
                  e.eligibilityInformation,
                  r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                  "instagram",
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
                    r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                    "instagram",
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
