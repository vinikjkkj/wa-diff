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
      return (
        e.isReelsTrendingAds === !0 &&
        (r("gkx")("11580") ||
          e.isTopicEnabledForFBReels === !0 ||
          e.isCountryEnabledForFBReels === !0)
      );
    }
    function c(t) {
      return e(t)
        ? babelHelpers.extends({}, t, {
            capabilities: o(
              "AdsReelsTrendingAdsPlacementUtils",
            ).getCapabilitiesWithRTAFBReelsDefault(t.capabilities),
          })
        : t;
    }
    function d(e, t) {
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
    var m = {
        type: "placements/position",
        key: "facebook/fb_reels",
        name: r("AdsPlacementPositionLabelConstant").facebook_reels,
        nameWithPlatform: s._(/*BTDS*/ "Facebook Reels"),
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
        getIneligibilityReason: function (n) {
          var t,
            a,
            i,
            l = o(
              "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
            ).getSOOBundleParentIneligibilityReason(m, n);
          if (l != null) return l;
          var s = n.promotedObjectType,
            u = n.spec,
            c = e(n);
          if (n.isReelsTrendingAds === !0 && !c)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createReelsTrendingAdsReason();
          var d = o("AdsODAXUtils").maybeTranslateObjective(
              n.objective,
              n.promotedObjectType,
              n.optimizationGoal,
            ),
            p = r("AdsAccountStore").getSelectedAccount().getValue(),
            _ =
              n.spec != null &&
              o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
                n.spec,
                r("AdsAPIDevicePlatform").MOBILE,
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
            !o("AdsFacebookReelsUtils").isEligibleObjectiveForFBReelsPlacement(
              babelHelpers.extends({}, n, {
                account: (t = n.account) != null ? t : p,
              }),
              d,
            )
          )
            return o("AdsPlacementIneligibilityReason").createObjectiveReason(
              n.objective,
            );
          if (
            o(
              "AdsClickToCallAdsUtils",
            ).getIsClickToCallAdsUnderLeadGenObjective(
              babelHelpers.extends({}, n, { objective: d }),
            ) &&
            !_
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createPhoneCallLeadReason();
          if (
            o(
              "AdsClickToCallAdsUtils",
            ).getIsCallAdsNewOptimizationUnderTrafficObjective(
              babelHelpers.extends({}, n, { objective: d }),
            ) &&
            !_
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createPhoneCallTrafficReason();
          if (
            (o(
              "AdsClickToCallAdsUtils",
            ).getIsClickToCallAdsUnderConversionsOrSalesObjective(
              babelHelpers.extends({}, n, { objective: d }),
            ) &&
              !_) ||
            (d === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
              n.optimizationGoal ===
                r("AdsAPIOptimizationGoals").QUALITY_CALL &&
              !_)
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createPhoneCallConversionsOrSalesReason();
          if (
            o(
              "adsIGLoginPlacementUtils",
            ).getShouldDisableFBPlacementForIGLoginUsers(n.account)
          )
            return o("AdsPlacementIneligibilityReason").createIGLoginReason();
          if (
            o(
              "AdsUnifiedProfileVisitUtils",
            ).getIsFBPositionConditionallyDisabledForProfileVisits(
              d,
              n.promotedObjectType,
              n.destinationType,
              "facebook_reels",
            )
          )
            return o(
              "AdsUnifiedProfileVisitUtils",
            ).getUnifiedProfileVisitsAdsPlacementIneligibilityReason(
              n.destinationType,
            );
          if (n.destinationType === r("AdCampaignDestination").INSTAGRAM_LIVE)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createInstagramLiveReason();
          var f = o(
            "AdsReachFrequencyPlacementUtils",
          ).getReachFrequencyDisabledReason(
            m.key,
            babelHelpers.extends({}, n, {
              capabilities: c
                ? o(
                    "AdsReelsTrendingAdsPlacementUtils",
                  ).getCapabilitiesWithRTAFBReelsDefault(n.capabilities)
                : n.capabilities,
              objective: d,
            }),
          );
          return f !== null
            ? f
            : u.device_platforms &&
                !(
                  (a = u.device_platforms) != null &&
                  a.includes(r("AdsAPIDevicePlatform").MOBILE)
                ) &&
                !r("gkx")("92")
              ? o("AdsPlacementIneligibilityReason").createDevicePlatformReason(
                  r("AdsAPIDevicePlatform").DESKTOP,
                )
              : s === r("AdsPromotedObjectTypes").DONATION
                ? o("AdsPlacementIneligibilityReason").createDonationReason()
                : n.promotedObjectType === r("AdsPromotedObjectTypes").GROUP
                  ? o(
                      "AdsPlacementIneligibilityReason",
                    ).createGroupPromotionReason()
                  : n.promotedObjectType ===
                      r("AdsPromotedObjectTypes").IMAGINATION
                    ? o(
                        "AdsPlacementIneligibilityReason",
                      ).createImaginationReason()
                    : n.promotedObjectType ===
                        r("AdsPromotedObjectTypes").REMINDER
                      ? o(
                          "AdsPlacementIneligibilityReason",
                        ).createReminderPromotionReason()
                      : n.promotedObjectType ===
                          r("AdsPromotedObjectTypes").CANVAS_APP
                        ? o(
                            "AdsPlacementIneligibilityReason",
                          ).createCanvasAppReason()
                        : o(
                              "AdsInstagramPlacementUtils",
                            ).isInstagramDestinationEnabledAndSelected(
                              babelHelpers.extends({}, n, { objective: d }),
                            ) &&
                            !o(
                              "ClickToMessageCTDFeatureGating",
                            ).isFBPlacementsEnabledForCTD()
                          ? o(
                              "AdsPlacementIneligibilityReason",
                            ).createInstagramDirectReason(n.objective)
                          : o(
                                "AdsInstagramLeadGenPlacementUtils",
                              ).isInstagramLeadGenDestinationSelected(
                                babelHelpers.extends({}, n, { objective: d }),
                              )
                            ? o(
                                "AdsPlacementIneligibilityReason",
                              ).createInstagramLeadGenReason(n.objective)
                            : o(
                                  "AdsWhatsAppPlacementUtils",
                                ).isIneligibleForFBReels(
                                  p,
                                  babelHelpers.extends({}, n, { objective: d }),
                                  _,
                                )
                              ? o(
                                  "AdsPlacementIneligibilityReason",
                                ).createWhatsAppReason(n.objective)
                              : n.containsOffer === !0
                                ? o(
                                    "AdsPlacementIneligibilityReason",
                                  ).createOfferOptionReason(n.objective)
                                : n.directInstallDevices === !0
                                  ? o(
                                      "AdsPlacementIneligibilityReason",
                                    ).createDirectInstallReason()
                                  : r("AdsAppUrlUtils").isWindowsURL(
                                        n.objectStoreURL,
                                      )
                                    ? o(
                                        "AdsPlacementIneligibilityReason",
                                      ).createWindowsAppReason()
                                    : (i = n.isClickToMPAds) != null && i
                                      ? o(
                                          "AdsPlacementIneligibilityReason",
                                        ).createGenericReason()
                                      : n.destinationType ===
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
          var e,
            n =
              t.isTopicEnabledForFBReels === !0 ||
              t.isCountryEnabledForFBReels === !0,
            a = r("gkx")("11580");
          if (t.isReelsTrendingAds === !0 && n && !a) return !1;
          if (t.isReelsTrendingAds === !0 && (n || a)) {
            var i,
              l = (i = t.spec) == null ? void 0 : i.facebook_positions;
            return l != null ? !l.includes("facebook_reels") : !1;
          }
          var s = o("AdsODAXUtils").maybeTranslateObjective(
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
              s,
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
              !r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical &&
              e.push("previews/facebook_reels_in_ifu_mobile"),
            r("immutable").OrderedSet(e)
          );
        },
        getDefaultPreview: function () {
          return "previews/facebook_reels_mobile";
        },
        adsetReducer: function (t, n) {
          var e = n.action,
            a = c(e.eligibilityInformation);
          if (!m.isEnabled(a.capabilities)) return t;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              if (e.removeGroups.includes("facebook/fb_reels")) {
                var i = a.isReelsTrendingAds === !0 && r("gkx")("11580");
                return o("AdsMutators").mutateEach(
                  t,
                  e.campaignIDs,
                  function (e) {
                    var t = o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      e,
                      "facebook/fb_reels",
                      a,
                      r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                      "facebook",
                    );
                    return d(t, i);
                  },
                );
              } else if (e.addGroups.includes("facebook/fb_reels"))
                return o("AdsMutators").mutateEach(
                  t,
                  e.campaignIDs,
                  function (e) {
                    return o("AdsPlacementAPISpecWriterUtils").addGroup(
                      e,
                      "facebook/fb_reels",
                      a,
                      r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                      "facebook",
                    );
                  },
                );
              return t;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(t, e.ids, function (t) {
                return o("AdsPlacementAPISpecWriterUtils").addGroup(
                  t,
                  e.pluginKey,
                  a,
                  r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                  "facebook",
                );
              });
            case o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType:
              return o("AdsMutators").mutateEach(
                t,
                e.campaignIDs,
                function (t) {
                  var n =
                      e.pluginKey === "facebook/fb_reels" &&
                      a.isReelsTrendingAds === !0 &&
                      r("gkx")("11580"),
                    i = o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      t,
                      e.pluginKey,
                      a,
                      r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                      "facebook",
                    );
                  return d(i, n);
                },
              );
          }
          return t;
        },
        parentPlacements: r("immutable").OrderedSet([]),
        childPlacements: r("immutable").OrderedSet([]),
      },
      p = m;
    l.default = p;
  },
  226,
);
