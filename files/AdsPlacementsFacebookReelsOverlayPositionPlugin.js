__d(
  "AdsPlacementsFacebookReelsOverlayPositionPlugin",
  [
    "AdCampaignDestination",
    "AdImageSpecCropKeys",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAPITargetFields",
    "AdsAccountStore",
    "AdsAccountUtils",
    "AdsAppUrlUtils",
    "AdsAppUtils",
    "AdsAppUtilsShared",
    "AdsBwIPlacementUtils",
    "AdsCampaignFacebookReelsOverlayPositionValidator",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsFacebookReelsOverlayConfig",
    "AdsInstagramLeadGenPlacementUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementCopy",
    "AdsPlacementEligibilityInfoUtils",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementOmnichannelUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "AdsUnifiedProfileVisitUtils",
    "AdsVideoBuyingStoreUtils",
    "AdsWhatsAppPlacementUtils",
    "FacebookReelsOverlayStoreUtils",
    "WebPixelRatio",
    "adsIGLoginPlacementUtils",
    "adsPlacementAPISpecReaderIsActiveFacebookPosition",
    "bx",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("FacebookReelsOverlayStoreUtils").getReelOverlayPositionFbt();
    }
    function s() {
      return o(
        "FacebookReelsOverlayStoreUtils",
      ).getReelOverlayPlatformPositionFbt();
    }
    function u(e) {
      return o(
        "FacebookReelsOverlayStoreUtils",
      ).isBrandVideoReelsOverlayDisabled(e.adgroup, e.optimizationGoal);
    }
    function c() {
      return o("WebPixelRatio").get() >= 2
        ? r("bx").getURL(r("bx")("50881"))
        : r("bx").getURL(r("bx")("50880"));
    }
    var d = {
        type: "placements/position",
        key: "facebook/reels_overlay",
        name: e(),
        nameWithPlatform: s(),
        mediaRecommendation: {
          copy: o(
            "FacebookReelsOverlayStoreUtils",
          ).incontentCreativeGuideExperiment()
            ? r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION
                .ADS_ON_FACEBOOK_REELS_IMAGE
            : r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION
                .ADS_ON_FACEBOOK_REELS,
          imageCrop: r("AdImageSpecCropKeys")["100x100"],
          videoCrop: "9:16",
        },
        apiPosition: "facebook_reels_overlay",
        placementImage: c(),
        placementPreviewImage: c(),
        platformKey: "facebook",
        getPlacementSpecificPreviewInfo: function () {
          return o(
            "FacebookReelsOverlayStoreUtils",
          ).incontentCreativeGuideExperiment()
            ? {
                defaultPreviewFormat: "Image",
                imageAdsPreviewImage:
                  "/images/ads/components/placements/reels-banner-l2-image-preview.png",
                placement: "facebook_reels_overlay",
              }
            : {
                defaultPreviewFormat: "Image",
                imageAdsPreviewImage:
                  "/images/ads/components/placements/reels-banner-l2-image-preview.png",
                videoAdsPreviewImage:
                  "/images/ads/components/placements/reels-banner-l2-video-preview.png",
                placement: "facebook_reels_overlay",
              };
        },
        isEnabled: function (t) {
          return r("AdsAccountUtils").hasCapabilityFromList(
            t,
            "CAN_USE_ADS_ON_FB_REELS_POSITION",
          );
        },
        getIneligibilityReason: function (t) {
          var e,
            n,
            a = o("AdsBwIPlacementUtils").getIneligibilityReason(t);
          if (a) return a;
          var i = o(
            "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
          ).getSOOBundleParentIneligibilityReason(d, t);
          if (i != null) return i;
          if (t.isReelsTrendingAds === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createReelsTrendingAdsReason();
          if (t.isMetaMomentMaker === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createMetaMomentMakerReason();
          var l = o("AdsODAXUtils").maybeTranslateObjective(
              t.objective,
              t.promotedObjectType,
              t.optimizationGoal,
            ),
            s = o("AdsFacebookReelsOverlayConfig").ELIGIBLE_OBJECTIVES,
            u = r("AdsAccountStore").getSelectedAccount().getValue();
          return t.spec &&
            o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
              t.spec,
              r("AdsAPIDevicePlatform").CONNECTED_TV,
            )
            ? o("AdsPlacementIneligibilityReason").createDevicePlatformReason(
                r("AdsAPIDevicePlatform").CONNECTED_TV,
              )
            : s.has(l)
              ? (l === r("AdsAPIObjectives").LINK_CLICKS ||
                  l === r("AdsAPIObjectives").CONVERSIONS) &&
                t.promotedObjectType === r("AdsPromotedObjectTypes").MOBILE_APP
                ? o("AdsPlacementIneligibilityReason").createAppReason()
                : o(
                      "AdsVideoBuyingStoreUtils",
                    ).checkIfPlacementPositionValidForBuyingOption(
                      babelHelpers.extends({}, t, { objective: l }),
                      "facebook_reels_overlay",
                    )
                  ? o("AdsAppUtilsShared").isFacebookDesktopURL(
                      t.objectStoreURL,
                    )
                    ? o("AdsPlacementIneligibilityReason").createGenericReason()
                    : t.destinationType ===
                        r("AdCampaignDestination").INSTAGRAM_LIVE
                      ? o(
                          "AdsPlacementIneligibilityReason",
                        ).createInstagramLiveReason()
                      : o(
                            "adsIGLoginPlacementUtils",
                          ).getShouldDisableFBPlacementForIGLoginUsers(
                            t.account,
                          )
                        ? o(
                            "AdsPlacementIneligibilityReason",
                          ).createIGLoginReason()
                        : o(
                              "AdsUnifiedProfileVisitUtils",
                            ).getIsPositionAlwaysDisabledForProfileVisits(
                              l,
                              t.promotedObjectType,
                            )
                          ? o(
                              "AdsUnifiedProfileVisitUtils",
                            ).getUnifiedProfileVisitsAdsPlacementIneligibilityReason(
                              t.destinationType,
                            )
                          : o(
                                "AdsPlacementEligibilityInfoUtils",
                              ).isIneligibleWithMobileOnlyObjectives(
                                babelHelpers.extends({}, t, { objective: l }),
                              ) ||
                              (t.spec.device_platforms &&
                                !(
                                  (e = t.spec.device_platforms) != null &&
                                  e.includes(r("AdsAPIDevicePlatform").MOBILE)
                                ))
                            ? o(
                                "AdsPlacementIneligibilityReason",
                              ).createDevicePlatformReason(
                                r("AdsAPIDevicePlatform").DESKTOP,
                              )
                            : o(
                                  "AdsPlacementOmnichannelUtils",
                                ).isIneligibleForOmnichannelAd(
                                  babelHelpers.extends({}, t, { objective: l }),
                                )
                              ? o(
                                  "AdsPlacementIneligibilityReason",
                                ).createOmnichannelReason()
                              : r("AdsAppUtils").isCanvasAppObjective(
                                    l,
                                    t.promotedObjectType,
                                  )
                                ? o(
                                    "AdsPlacementIneligibilityReason",
                                  ).createCanvasAppReason()
                                : t.promotedObjectType !==
                                      r("AdsPromotedObjectTypes").MESSENGER &&
                                    l === r("AdsAPIObjectives").MESSAGES
                                  ? o(
                                      "AdsPlacementIneligibilityReason",
                                    ).createMessengerReason(t.objective)
                                  : t.promotedObjectType ===
                                        r("AdsPromotedObjectTypes").INSTAGRAM &&
                                      (l ===
                                        r("AdsAPIObjectives").CONVERSIONS ||
                                        t.objective ===
                                          r("AdsAPIObjectives").LINK_CLICKS)
                                    ? o(
                                        "AdsPlacementIneligibilityReason",
                                      ).createInstagramDirectReason(t.objective)
                                    : o(
                                          "AdsInstagramLeadGenPlacementUtils",
                                        ).isInstagramLeadGenDestinationSelected(
                                          babelHelpers.extends({}, t, {
                                            objective: l,
                                          }),
                                        )
                                      ? o(
                                          "AdsPlacementIneligibilityReason",
                                        ).createInstagramLeadGenReason(
                                          t.objective,
                                        )
                                      : t.containsOffer === !0
                                        ? o(
                                            "AdsPlacementIneligibilityReason",
                                          ).createOfferOptionReason(t.objective)
                                        : o(
                                              "AdsWhatsAppPlacementUtils",
                                            ).isIneligibleForFBReelsOverlay(
                                              u,
                                              babelHelpers.extends({}, t, {
                                                objective: l,
                                              }),
                                            )
                                          ? o(
                                              "AdsPlacementIneligibilityReason",
                                            ).createWhatsAppReason(t.objective)
                                          : t.directInstallDevices === !0
                                            ? o(
                                                "AdsPlacementIneligibilityReason",
                                              ).createDirectInstallReason()
                                            : r(
                                                  "AdsAppUrlUtils",
                                                ).isInstantGameURL(
                                                  t.objectStoreURL,
                                                )
                                              ? o(
                                                  "AdsPlacementIneligibilityReason",
                                                ).createInstantGameReason()
                                              : t.promotedObjectType ===
                                                  r("AdsPromotedObjectTypes")
                                                    .DONATION
                                                ? o(
                                                    "AdsPlacementIneligibilityReason",
                                                  ).createDonationReason()
                                                : t.promotedObjectType ===
                                                    r("AdsPromotedObjectTypes")
                                                      .GROUP
                                                  ? o(
                                                      "AdsPlacementIneligibilityReason",
                                                    ).createGroupPromotionReason()
                                                  : t.promotedObjectType ===
                                                      r(
                                                        "AdsPromotedObjectTypes",
                                                      ).IMAGINATION
                                                    ? o(
                                                        "AdsPlacementIneligibilityReason",
                                                      ).createImaginationReason()
                                                    : t.promotedObjectType ===
                                                        r(
                                                          "AdsPromotedObjectTypes",
                                                        ).REMINDER
                                                      ? o(
                                                          "AdsPlacementIneligibilityReason",
                                                        ).createReminderPromotionReason()
                                                      : t.destinationType ===
                                                          r(
                                                            "AdCampaignDestination",
                                                          ).FACEBOOK_LIVE
                                                        ? o(
                                                            "AdsPlacementIneligibilityReason",
                                                          ).createFacebookLiveReason()
                                                        : (n =
                                                              t.isClickToMPAds) !=
                                                              null && n
                                                          ? o(
                                                              "AdsPlacementIneligibilityReason",
                                                            ).createGenericReason()
                                                          : null
                  : o(
                      "AdsPlacementIneligibilityReason",
                    ).createOptimizationGoalReason()
              : o("AdsPlacementIneligibilityReason").createObjectiveReason(
                  t.objective,
                );
        },
        isInactiveByDefault: function () {
          return !1;
        },
        isActive: function (t) {
          return r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
            t,
            "facebook_reels_overlay",
          );
        },
        getPreviews: function (t) {
          var e = [];
          if (u(t)) return r("immutable").OrderedSet(e);
          var n = o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
            t.spec,
            r("AdsAPIDevicePlatform").MOBILE,
          );
          if (n) {
            var a = r("gkx")("2702");
            o(
              "FacebookReelsOverlayStoreUtils",
            ).incontentCreativeGuideExperiment()
              ? (a || e.push("previews/facebook_reels_banner_fullscreen_ios"),
                e.push("previews/facebook_reels_banner_fullscreen_mobile"),
                o(
                  "FacebookReelsOverlayStoreUtils",
                ).incontentPreviewsDemandV2() ||
                  e.push("previews/facebook_reels_banner"))
              : (o(
                  "FacebookReelsOverlayStoreUtils",
                ).incontentPreviewsDemandV2() ||
                  e.push("previews/facebook_reels_banner"),
                e.push("previews/facebook_reels_banner_fullscreen_mobile"),
                a || e.push("previews/facebook_reels_banner_fullscreen_ios"));
          }
          return r("immutable").OrderedSet(e);
        },
        getDefaultPreview: function (t) {
          if (u(t)) return null;
          var e = o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
            t.spec,
            r("AdsAPIDevicePlatform").MOBILE,
          );
          if (e)
            return o(
              "FacebookReelsOverlayStoreUtils",
            ).incontentCreativeGuideExperiment()
              ? r("gkx")("2702")
                ? "previews/facebook_reels_banner_fullscreen_mobile"
                : "previews/facebook_reels_banner_fullscreen_ios"
              : "previews/facebook_reels_banner";
        },
        adsetValidators: [
          r("AdsCampaignFacebookReelsOverlayPositionValidator"),
        ],
        adsetReducer: function (t, n) {
          var e,
            a = n.action;
          if (
            a != null &&
            (e = a.eligibilityInformation) != null &&
            e.capabilities &&
            !d.isEnabled(a.eligibilityInformation.capabilities)
          )
            return t;
          switch (a.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return a.removeGroups.includes("facebook/reels_overlay")
                ? o("AdsMutators").mutateEach(t, a.campaignIDs, function (e) {
                    return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      e,
                      "facebook/reels_overlay",
                      a.eligibilityInformation,
                      r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                      "facebook",
                    );
                  })
                : a.addGroups.includes("facebook/reels_overlay")
                  ? o("AdsMutators").mutateEach(t, a.campaignIDs, function (e) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        e,
                        "facebook/reels_overlay",
                        a.eligibilityInformation,
                        r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                        "facebook",
                      );
                    })
                  : t;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(t, a.ids, function (e) {
                return o("AdsPlacementAPISpecWriterUtils").addGroup(
                  e,
                  a.pluginKey,
                  a.eligibilityInformation,
                  r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                  "facebook",
                );
              });
            case o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType:
              return o("AdsMutators").mutateEach(
                t,
                a.campaignIDs,
                function (e) {
                  return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                    e,
                    a.pluginKey,
                    a.eligibilityInformation,
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
      m = d;
    l.default = m;
  },
  98,
);
