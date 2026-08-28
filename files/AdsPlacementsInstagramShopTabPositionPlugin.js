__d(
  "AdsPlacementsInstagramShopTabPositionPlugin",
  [
    "fbt",
    "ix",
    "AdCampaignDestination",
    "AdImageSpecCropKeys",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAPITargetFields",
    "AdsAppUtils",
    "AdsBwIPlacementUtils",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsCampaignShopTabPositionValidator",
    "AdsClickToCallAdsUtils",
    "AdsInstagramLeadGenPlacementUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementCopy",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementInstagramPositionPluginUtils",
    "AdsPlacementOmnichannelUtils",
    "AdsPlacementPositionLabelConstant",
    "AdsPromotedObjectTypes",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "AdsWhatsAppPlacementUtils",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e(e) {
      switch (e.promotedObjectType) {
        case r("AdsPromotedObjectTypes").DONATION:
          return o("AdsPlacementIneligibilityReason").createDonationReason();
        case r("AdsPromotedObjectTypes").GROUP:
          return o(
            "AdsPlacementIneligibilityReason",
          ).createGroupPromotionReason();
        case r("AdsPromotedObjectTypes").IMAGINATION:
          return o("AdsPlacementIneligibilityReason").createImaginationReason();
        case r("AdsPromotedObjectTypes").MESSENGER:
          return o("AdsPlacementIneligibilityReason").createMessengerReason(
            e.objective,
          );
        default:
          return null;
      }
    }
    var c = {
        type: "placements/position",
        key: "instagram/shop_tab",
        name: r("AdsPlacementPositionLabelConstant").shop,
        nameWithPlatform: s._(/*BTDS*/ "Instagram Shop"),
        mediaRecommendation: {
          copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION.IG_SHOP_TAB,
          imageCrop: r("AdImageSpecCropKeys")["100x100"],
        },
        apiPosition: "shop",
        placementPreviewImage: u("26391"),
        platformKey: "instagram",
        adsetValidators: [r("AdsCampaignShopTabPositionValidator")],
        isEnabled: function () {
          return !1;
        },
        getIneligibilityReason: function (n) {
          var t,
            a = o("AdsBwIPlacementUtils").getIneligibilityReason(n);
          if (a) return a;
          var i = o(
            "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
          ).getSOOBundleParentIneligibilityReason(c, n);
          if (i != null) return i;
          if (n.isReelsTrendingAds === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createReelsTrendingAdsReason();
          var l = n.buyingType,
            s = n.optimizationGoal,
            u = n.spec,
            d = o("AdsODAXUtils").maybeTranslateObjective(
              n.objective,
              n.promotedObjectType,
              n.optimizationGoal,
            );
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
            !o(
              "AdsPlacementInstagramPositionPluginUtils",
            ).isEligibleBuyingTypeForInstagramShop(l)
          )
            return o("AdsPlacementIneligibilityReason").createBuyingTypeReason(
              l,
              c.key,
            );
          if (
            !o(
              "AdsPlacementInstagramPositionPluginUtils",
            ).isEligibleObjectiveForInstagramShop(d)
          )
            return o("AdsPlacementIneligibilityReason").createObjectiveReason(
              n.objective,
            );
          if (
            o(
              "AdsPlacementInstagramPositionPluginUtils",
            ).isUnsupportedOptimizationGoalForInstagramShop(s)
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createOptimizationGoalReason();
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
          if (n.containsDCO === !0)
            return o("AdsPlacementIneligibilityReason").createDCOReason();
          if (n.containsOffer === !0)
            return o("AdsPlacementIneligibilityReason").createOfferOptionReason(
              n.objective,
            );
          var m = e(n);
          return m != null
            ? m
            : n.promotedObjectType === r("AdsPromotedObjectTypes").INSTAGRAM &&
                (d === r("AdsAPIObjectives").CONVERSIONS ||
                  n.objective === r("AdsAPIObjectives").LINK_CLICKS)
              ? o(
                  "AdsPlacementIneligibilityReason",
                ).createInstagramDirectReason(n.objective)
              : n.destinationType === r("AdCampaignDestination").INSTAGRAM_LIVE
                ? o(
                    "AdsPlacementIneligibilityReason",
                  ).createInstagramLiveReason()
                : o(
                      "AdsInstagramLeadGenPlacementUtils",
                    ).isInstagramLeadGenDestinationSelected(
                      babelHelpers.extends({}, n, { objective: d }),
                    )
                  ? o(
                      "AdsPlacementIneligibilityReason",
                    ).createInstagramLeadGenReason(n.objective)
                  : r("AdsAppUtils").isAppEngagementObjective(
                        d,
                        n.promotedObjectType,
                      )
                    ? o(
                        "AdsPlacementIneligibilityReason",
                      ).createMobileAppReason()
                    : o("AdsWhatsAppPlacementUtils").isIneligibleForIGShopTab(
                          babelHelpers.extends({}, n, { objective: d }),
                        )
                      ? o(
                          "AdsPlacementIneligibilityReason",
                        ).createWhatsAppReason(n.objective)
                      : o(
                            "AdsPlacementOmnichannelUtils",
                          ).isIneligibleForOmnichannelAd(
                            babelHelpers.extends({}, n, { objective: d }),
                          )
                        ? o(
                            "AdsPlacementIneligibilityReason",
                          ).createOmnichannelReason()
                        : o(
                              "AdsClickToCallAdsUtils",
                            ).getIsCallAdsNewOptimizationUnderTrafficObjective(
                              n,
                            )
                          ? o(
                              "AdsPlacementIneligibilityReason",
                            ).createPhoneCallTrafficReason()
                          : o(
                                "AdsClickToCallAdsUtils",
                              ).getIsClickToCallAdsUnderConversionsOrSalesObjective(
                                babelHelpers.extends({}, n, { objective: d }),
                              )
                            ? o(
                                "AdsPlacementIneligibilityReason",
                              ).createPhoneCallConversionsOrSalesReason()
                            : null;
        },
        isActive: function (t) {
          return o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(
            t,
            "shop",
          );
        },
        isInactiveByDefault: function (t) {
          var e = o("AdsODAXUtils").maybeTranslateObjective(
            t.objective,
            t.promotedObjectType,
            t.optimizationGoal,
          );
          return !o(
            "AdsPlacementInstagramPositionPluginUtils",
          ).isEligibleObjectiveForInstagramShop(e);
        },
        getPreviews: function (t) {
          var e = ["previews/instagram_shop_tab"];
          return r("immutable").OrderedSet(e);
        },
        getDefaultPreview: function () {
          return "previews/instagram_shop_tab";
        },
        adsetReducer: function (t, n) {
          var e,
            a,
            i = n.action;
          if (
            !c.isEnabled(
              (e = i.eligibilityInformation) == null ? void 0 : e.capabilities,
              (a = i.eligibilityInformation) == null ? void 0 : a.account,
            )
          )
            return t;
          switch (i.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return i.removeGroups.includes("instagram/shop_tab")
                ? o("AdsMutators").mutateEach(t, i.campaignIDs, function (e) {
                    return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      e,
                      "instagram/shop_tab",
                      i.eligibilityInformation,
                      r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                      "instagram",
                    );
                  })
                : i.addGroups.includes("instagram/shop_tab")
                  ? o("AdsMutators").mutateEach(t, i.campaignIDs, function (e) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        e,
                        "instagram/shop_tab",
                        i.eligibilityInformation,
                        r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                        "instagram",
                      );
                    })
                  : t;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(t, i.ids, function (e) {
                return o("AdsPlacementAPISpecWriterUtils").addGroup(
                  e,
                  i.pluginKey,
                  i.eligibilityInformation,
                  r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                  "instagram",
                );
              });
            case o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType:
              return o("AdsMutators").mutateEach(
                t,
                i.campaignIDs,
                function (e) {
                  return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                    e,
                    i.pluginKey,
                    i.eligibilityInformation,
                    r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                    "instagram",
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
