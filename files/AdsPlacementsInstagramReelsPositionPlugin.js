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
    "AdsUnifiedProfileVisitUtils",
    "AdsWhatsAppPlacementUtils",
    "ClickToMessageAdDestinationUtils",
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
    function c(e) {
      var t;
      return e.directInstallDevices === !0
        ? o("AdsPlacementIneligibilityReason").createDirectInstallReason()
        : r("AdsAppUrlUtils").isWindowsURL(e.objectStoreURL)
          ? o("AdsPlacementIneligibilityReason").createWindowsAppReason()
          : r("AdsAppUrlUtils").isInstantGameURL(e.objectStoreURL)
            ? o("AdsPlacementIneligibilityReason").createInstantGameReason()
            : (t = e.isClickToMPAds) != null && t
              ? o("AdsPlacementIneligibilityReason").createGenericReason()
              : null;
    }
    function d() {
      return r("gkx")("19623") ? u("947344") : u("1944946");
    }
    var m = {
        type: "placements/position",
        key: "instagram/reels",
        name: r("AdsPlacementPositionLabelConstant").reels,
        nameWithPlatform: s._(/*BTDS*/ ""),
        mediaRecommendation: {
          copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION.IG_REELS,
          imageCrop: r("AdImageSpecCropKeys")["90x160"],
          videoCrop: "9:16",
        },
        apiPosition: "reels",
        placementPreviewImage: d(),
        platformKey: "instagram",
        adsetValidators: [r("AdsCampaignReelsPositionValidator")],
        isEnabled: function () {
          return !0;
        },
        getIneligibilityReason: function (n) {
          var t,
            a = o(
              "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
            ).getSOOBundleParentIneligibilityReason(m, n);
          if (a != null) return a;
          var i = n.buyingType,
            l = n.promotedObjectType,
            s = n.spec;
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
          if (n.isReelsTrendingAds === !0) return null;
          var u = r("AdsAccountStore").getSelectedAccount().getValue(),
            d = o("AdsODAXUtils").maybeTranslateObjective(
              n.objective,
              l,
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
            i !== r("AdsBuyingTypes").RESERVED &&
            i !== r("AdsBuyingTypes").AUCTION
          )
            return o("AdsPlacementIneligibilityReason").createBuyingTypeReason(
              i,
              m.key,
            );
          if (i === r("AdsBuyingTypes").RESERVED) {
            var _ = o(
              "AdsReachFrequencyPlacementUtils",
            ).getReachFrequencyDisabledReason(
              "instagram/reels",
              babelHelpers.extends({}, n, { objective: d }),
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
              "ClickToMessageAdDestinationUtils",
            ).isClickToMessageAdDestination(n.destinationType) &&
              f != null &&
              (f = null),
            f != null)
          )
            return f;
          if (
            s.device_platforms &&
            !(
              (t = s.device_platforms) != null &&
              t.includes(r("AdsAPIDevicePlatform").MOBILE)
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(r("AdsAPIDevicePlatform").DESKTOP);
          var g = e(l);
          if (g != null) return g;
          if (n.destinationType === r("AdCampaignDestination").FACEBOOK_LIVE)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createFacebookLiveReason();
          if (
            d === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
            n.optimizationGoal === r("AdsAPIOptimizationGoals").QUALITY_CALL
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createOptimizationGoalReason();
          if (
            o("AdsWhatsAppPlacementUtils").isIneligibleForIGReels(
              u,
              babelHelpers.extends({}, n, { objective: d }),
            )
          )
            return o("AdsPlacementIneligibilityReason").createWhatsAppReason(
              n.objective,
            );
          if (n.containsOffer === !0)
            return o("AdsPlacementIneligibilityReason").createOfferOptionReason(
              n.objective,
            );
          var h = c(n);
          return h != null
            ? h
            : o(
                  "AdsUnifiedProfileVisitUtils",
                ).getIsIGPositionCondtionallyDisabledForUnifiedProfileVisits(
                  d,
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
          if (t.isReelsTrendingAds === !0) {
            var n,
              r = (n = t.spec) == null ? void 0 : n.instagram_positions;
            return r != null && r.length > 0 ? !r.includes("reels") : !1;
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
      p = m;
    l.default = p;
  },
  226,
);
