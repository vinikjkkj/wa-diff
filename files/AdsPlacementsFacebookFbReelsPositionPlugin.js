__d(
  "AdsPlacementsFacebookFbReelsPositionPlugin",
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
    "AdsAccountUtils",
    "AdsAppUrlUtils",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsClickToCallAdsUtils",
    "AdsFacebookReelsUtils",
    "AdsInstagramLeadGenPlacementUtils",
    "AdsInstagramPlacementUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementCopy",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementPositionLabelConstant",
    "AdsPromotedObjectTypes",
    "AdsReachFrequencyPlacementUtils",
    "AdsReelsTrendingAdsPlacementUtils",
    "AdsSensitiveVerticalUtils",
    "AdsSimilarProductsPlacementUtils",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "AdsUnifiedProfileVisitUtils",
    "AdsWhatsAppPlacementUtils",
    "ClickToMessageCTDFeatureGating",
    "IGAdsSensitiveVerticalsUtils",
    "adsIGLoginPlacementUtils",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e(e) {
      return e.isReelsTrendingAds === !0
        ? babelHelpers.extends({}, e, {
            capabilities: o(
              "AdsReelsTrendingAdsPlacementUtils",
            ).getCapabilitiesWithRTAFBReelsDefault(e.capabilities),
          })
        : e;
    }
    function c(e, t) {
      var n,
        o =
          (n = e.targeting) == null
            ? void 0
            : n.get(r("AdsAPITargetFields").FACEBOOK_POSITIONS);
      return t && o == null
        ? e.updateIn(
            ["targeting", r("AdsAPITargetFields").FACEBOOK_POSITIONS],
            function () {
              return r("immutable").Set();
            },
          )
        : e;
    }
    function d(e, t) {
      return t
        ? null
        : o("AdsClickToCallAdsUtils").getIsClickToCallAdsUnderLeadGenObjective(
              e,
            )
          ? o("AdsPlacementIneligibilityReason").createPhoneCallLeadReason()
          : o(
                "AdsClickToCallAdsUtils",
              ).getIsCallAdsNewOptimizationUnderTrafficObjective(e)
            ? o(
                "AdsPlacementIneligibilityReason",
              ).createPhoneCallTrafficReason()
            : o(
                  "AdsClickToCallAdsUtils",
                ).getIsClickToCallAdsUnderConversionsOrSalesObjective(e) ||
                (e.objective === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
                  e.optimizationGoal ===
                    r("AdsAPIOptimizationGoals").QUALITY_CALL)
              ? o(
                  "AdsPlacementIneligibilityReason",
                ).createPhoneCallConversionsOrSalesReason()
              : null;
    }
    var m = {
        type: "placements/position",
        key: "facebook/fb_reels",
        name: r("AdsPlacementPositionLabelConstant").facebook_reels,
        nameWithPlatform: s._(/*BTDS*/ ""),
        mediaRecommendation: {
          copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION.FB_REELS,
          imageCrop: r("AdImageSpecCropKeys")["90x160"],
          videoCrop: "9:16",
        },
        apiPosition: "facebook_reels",
        placementPreviewImage: u("150880"),
        platformKey: "facebook",
        isEnabled: function (t) {
          return r("AdsAccountUtils").hasCapabilityFromList(
            t,
            "CAN_USE_FB_REELS_POSITION",
          );
        },
        getIneligibilityReason: function (t) {
          var e,
            n,
            a,
            i = o(
              "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
            ).getSOOBundleParentIneligibilityReason(m, t);
          if (i != null) return i;
          var l = t.promotedObjectType,
            s = t.spec,
            u = o("AdsODAXUtils").maybeTranslateObjective(
              t.objective,
              t.promotedObjectType,
              t.optimizationGoal,
            ),
            c = r("AdsAccountStore").getSelectedAccount().getValue(),
            p =
              t.spec != null &&
              o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
                t.spec,
                r("AdsAPIDevicePlatform").MOBILE,
              );
          if (
            t.spec &&
            o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
              t.spec,
              r("AdsAPIDevicePlatform").CONNECTED_TV,
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(
              r("AdsAPIDevicePlatform").CONNECTED_TV,
            );
          if (
            !o("AdsFacebookReelsUtils").isEligibleObjectiveForFBReelsPlacement(
              babelHelpers.extends({}, t, {
                account: (e = t.account) != null ? e : c,
              }),
              u,
            )
          )
            return o("AdsPlacementIneligibilityReason").createObjectiveReason(
              t.objective,
            );
          var _ = d(babelHelpers.extends({}, t, { objective: u }), p);
          if (_ != null) return _;
          if (
            o(
              "adsIGLoginPlacementUtils",
            ).getShouldDisableFBPlacementForIGLoginUsers(t.account)
          )
            return o("AdsPlacementIneligibilityReason").createIGLoginReason();
          if (
            o(
              "AdsUnifiedProfileVisitUtils",
            ).getIsFBPositionConditionallyDisabledForProfileVisits(
              u,
              t.promotedObjectType,
              t.destinationType,
              "facebook_reels",
            )
          )
            return o(
              "AdsUnifiedProfileVisitUtils",
            ).getUnifiedProfileVisitsAdsPlacementIneligibilityReason(
              t.destinationType,
            );
          if (t.destinationType === r("AdCampaignDestination").INSTAGRAM_LIVE)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createInstagramLiveReason();
          var f = o(
            "AdsReachFrequencyPlacementUtils",
          ).getReachFrequencyDisabledReason(
            m.key,
            babelHelpers.extends({}, t, {
              capabilities:
                t.isReelsTrendingAds === !0
                  ? o(
                      "AdsReelsTrendingAdsPlacementUtils",
                    ).getCapabilitiesWithRTAFBReelsDefault(t.capabilities)
                  : t.capabilities,
              objective: u,
            }),
          );
          return f !== null
            ? f
            : s.device_platforms &&
                !(
                  (n = s.device_platforms) != null &&
                  n.includes(r("AdsAPIDevicePlatform").MOBILE)
                ) &&
                !r("gkx")("92")
              ? o("AdsPlacementIneligibilityReason").createDevicePlatformReason(
                  r("AdsAPIDevicePlatform").DESKTOP,
                )
              : l === r("AdsPromotedObjectTypes").DONATION
                ? o("AdsPlacementIneligibilityReason").createDonationReason()
                : t.promotedObjectType === r("AdsPromotedObjectTypes").GROUP
                  ? o(
                      "AdsPlacementIneligibilityReason",
                    ).createGroupPromotionReason()
                  : t.promotedObjectType ===
                      r("AdsPromotedObjectTypes").IMAGINATION
                    ? o(
                        "AdsPlacementIneligibilityReason",
                      ).createImaginationReason()
                    : t.promotedObjectType ===
                        r("AdsPromotedObjectTypes").REMINDER
                      ? o(
                          "AdsPlacementIneligibilityReason",
                        ).createReminderPromotionReason()
                      : t.promotedObjectType ===
                          r("AdsPromotedObjectTypes").CANVAS_APP
                        ? o(
                            "AdsPlacementIneligibilityReason",
                          ).createCanvasAppReason()
                        : o(
                              "AdsInstagramPlacementUtils",
                            ).isInstagramDestinationEnabledAndSelected(
                              babelHelpers.extends({}, t, { objective: u }),
                            ) &&
                            !o(
                              "ClickToMessageCTDFeatureGating",
                            ).isFBPlacementsEnabledForCTD()
                          ? o(
                              "AdsPlacementIneligibilityReason",
                            ).createInstagramDirectReason(t.objective)
                          : o(
                                "AdsInstagramLeadGenPlacementUtils",
                              ).isInstagramLeadGenDestinationSelected(
                                babelHelpers.extends({}, t, { objective: u }),
                              )
                            ? o(
                                "AdsPlacementIneligibilityReason",
                              ).createInstagramLeadGenReason(t.objective)
                            : o(
                                  "AdsWhatsAppPlacementUtils",
                                ).isIneligibleForFBReels(
                                  c,
                                  babelHelpers.extends({}, t, { objective: u }),
                                  p,
                                )
                              ? o(
                                  "AdsPlacementIneligibilityReason",
                                ).createWhatsAppReason(t.objective)
                              : t.containsOffer === !0
                                ? o(
                                    "AdsPlacementIneligibilityReason",
                                  ).createOfferOptionReason(t.objective)
                                : t.directInstallDevices === !0
                                  ? o(
                                      "AdsPlacementIneligibilityReason",
                                    ).createDirectInstallReason()
                                  : r("AdsAppUrlUtils").isWindowsURL(
                                        t.objectStoreURL,
                                      )
                                    ? o(
                                        "AdsPlacementIneligibilityReason",
                                      ).createWindowsAppReason()
                                    : (a = t.isClickToMPAds) != null && a
                                      ? o(
                                          "AdsPlacementIneligibilityReason",
                                        ).createGenericReason()
                                      : t.destinationType ===
                                          r("AdCampaignDestination")
                                            .FACEBOOK_LIVE
                                        ? o(
                                            "AdsPlacementIneligibilityReason",
                                          ).createFacebookLiveReason()
                                        : null;
        },
        isActive: function (t) {
          return o("AdsPlacementAPISpecReaderUtils").isActivePosition(
            t,
            "facebook",
            "facebook_reels",
          );
        },
        isInactiveByDefault: function (t) {
          var e;
          if (t.isReelsTrendingAds === !0) {
            var n,
              a = (n = t.spec) == null ? void 0 : n.facebook_positions;
            return a != null && !a.includes("facebook_reels");
          }
          var i = o("AdsODAXUtils").maybeTranslateObjective(
            t.objective,
            t.promotedObjectType,
            t.optimizationGoal,
          );
          return !(
            o("AdsFacebookReelsUtils").isEligibleObjectiveForFBReelsPlacement(
              babelHelpers.extends({}, t, {
                account:
                  (e = t.account) != null
                    ? e
                    : r("AdsAccountStore").getSelectedAccount().getValue(),
              }),
              i,
            ) &&
            !o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
              t.spec,
              r("AdsAPIDevicePlatform").DESKTOP,
            )
          );
        },
        getPreviews: function (t) {
          var e = ["previews/facebook_reels_mobile"];
          return (
            !o(
              "AdsSensitiveVerticalUtils",
            ).isAdAccountInPharmaOrSensitiveVertical() &&
              o(
                "AdsSimilarProductsPlacementUtils",
              ).isSimilarProductsTargetingSupported(t) &&
              e.push("previews/facebook_reels_similar_products_mobile"),
            r("gkx")("10607") &&
              !r("IGAdsSensitiveVerticalsUtils")
                .is_pharma_or_sensitive_vertical &&
              !r("IGAdsSensitiveVerticalsUtils")
                .is_pharma_or_sensitive_vertical_by_campaign_group &&
              !r("IGAdsSensitiveVerticalsUtils")
                .is_pharma_or_sensitive_vertical_by_ad &&
              !r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical &&
              e.push("previews/facebook_reels_in_ifu_mobile"),
            r("immutable").OrderedSet(e)
          );
        },
        getDefaultPreview: function () {
          return "previews/facebook_reels_mobile";
        },
        adsetReducer: function (n, a) {
          var t = a.action,
            i = e(t.eligibilityInformation);
          if (!m.isEnabled(i.capabilities)) return n;
          switch (t.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              if (t.removeGroups.includes("facebook/fb_reels")) {
                var l = i.isReelsTrendingAds === !0;
                return o("AdsMutators").mutateEach(
                  n,
                  t.campaignIDs,
                  function (e) {
                    var t = o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      e,
                      "facebook/fb_reels",
                      i,
                      r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                      "facebook",
                    );
                    return c(t, l);
                  },
                );
              } else if (t.addGroups.includes("facebook/fb_reels"))
                return o("AdsMutators").mutateEach(
                  n,
                  t.campaignIDs,
                  function (e) {
                    return o("AdsPlacementAPISpecWriterUtils").addGroup(
                      e,
                      "facebook/fb_reels",
                      i,
                      r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                      "facebook",
                    );
                  },
                );
              return n;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(n, t.ids, function (e) {
                return o("AdsPlacementAPISpecWriterUtils").addGroup(
                  e,
                  t.pluginKey,
                  i,
                  r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                  "facebook",
                );
              });
            case o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType:
              return o("AdsMutators").mutateEach(
                n,
                t.campaignIDs,
                function (e) {
                  var n =
                      t.pluginKey === "facebook/fb_reels" &&
                      i.isReelsTrendingAds === !0,
                    a = o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      e,
                      t.pluginKey,
                      i,
                      r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                      "facebook",
                    );
                  return c(a, n);
                },
              );
          }
          return n;
        },
        parentPlacements: r("immutable").OrderedSet([]),
        childPlacements: r("immutable").OrderedSet([]),
      },
      p = m;
    l.default = p;
  },
  226,
);
