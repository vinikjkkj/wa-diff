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
    "FacebookReelsBrandVideoUtils",
    "FacebookReelsOverlayStoreUtils",
    "WebPixelRatio",
    "adsIGLoginPlacementUtils",
    "adsPlacementAPISpecReaderIsActiveFacebookPosition",
    "bx",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
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
      return o("FacebookReelsBrandVideoUtils").isBrandVideoReelsOverlayDisabled(
        e.adgroup,
        e.optimizationGoal,
      );
    }
    function c(e) {
      switch (e) {
        case r("AdsPromotedObjectTypes").DONATION:
          return o("AdsPlacementIneligibilityReason").createDonationReason();
        case r("AdsPromotedObjectTypes").GROUP:
          return o(
            "AdsPlacementIneligibilityReason",
          ).createGroupPromotionReason();
        case r("AdsPromotedObjectTypes").IMAGINATION:
          return o("AdsPlacementIneligibilityReason").createImaginationReason();
        case r("AdsPromotedObjectTypes").REMINDER:
          return o(
            "AdsPlacementIneligibilityReason",
          ).createReminderPromotionReason();
        default:
          return null;
      }
    }
    function d(e, t) {
      return r("AdsAppUtils").isCanvasAppObjective(t, e.promotedObjectType)
        ? o("AdsPlacementIneligibilityReason").createCanvasAppReason()
        : e.promotedObjectType !== r("AdsPromotedObjectTypes").MESSENGER &&
            t === r("AdsAPIObjectives").MESSAGES
          ? o("AdsPlacementIneligibilityReason").createMessengerReason(
              e.objective,
            )
          : e.promotedObjectType === r("AdsPromotedObjectTypes").INSTAGRAM &&
              (t === r("AdsAPIObjectives").CONVERSIONS ||
                e.objective === r("AdsAPIObjectives").LINK_CLICKS)
            ? o("AdsPlacementIneligibilityReason").createInstagramDirectReason(
                e.objective,
              )
            : o(
                  "AdsInstagramLeadGenPlacementUtils",
                ).isInstagramLeadGenDestinationSelected(
                  babelHelpers.extends({}, e, { objective: t }),
                )
              ? o(
                  "AdsPlacementIneligibilityReason",
                ).createInstagramLeadGenReason(e.objective)
              : null;
    }
    function m() {
      return o("WebPixelRatio").get() >= 2
        ? r("bx").getURL(r("bx")("50881"))
        : r("bx").getURL(r("bx")("50880"));
    }
    var p = {
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
        placementImage: m(),
        placementPreviewImage: m(),
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
          ).getSOOBundleParentIneligibilityReason(p, t);
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
          if (!s.has(l))
            return o("AdsPlacementIneligibilityReason").createObjectiveReason(
              t.objective,
            );
          if (
            (l === r("AdsAPIObjectives").LINK_CLICKS ||
              l === r("AdsAPIObjectives").CONVERSIONS) &&
            t.promotedObjectType === r("AdsPromotedObjectTypes").MOBILE_APP
          )
            return o("AdsPlacementIneligibilityReason").createAppReason();
          if (
            !o(
              "AdsVideoBuyingStoreUtils",
            ).checkIfPlacementPositionValidForBuyingOption(
              babelHelpers.extends({}, t, { objective: l }),
              "facebook_reels_overlay",
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createOptimizationGoalReason();
          if (o("AdsAppUtilsShared").isFacebookDesktopURL(t.objectStoreURL))
            return o("AdsPlacementIneligibilityReason").createGenericReason();
          if (t.destinationType === r("AdCampaignDestination").INSTAGRAM_LIVE)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createInstagramLiveReason();
          if (
            o(
              "adsIGLoginPlacementUtils",
            ).getShouldDisableFBPlacementForIGLoginUsers(t.account)
          )
            return o("AdsPlacementIneligibilityReason").createIGLoginReason();
          if (
            o(
              "AdsUnifiedProfileVisitUtils",
            ).getIsPositionAlwaysDisabledForProfileVisits(
              l,
              t.promotedObjectType,
            )
          )
            return o(
              "AdsUnifiedProfileVisitUtils",
            ).getUnifiedProfileVisitsAdsPlacementIneligibilityReason(
              t.destinationType,
            );
          if (
            o(
              "AdsPlacementEligibilityInfoUtils",
            ).isIneligibleWithMobileOnlyObjectives(
              babelHelpers.extends({}, t, { objective: l }),
            ) ||
            (t.spec.device_platforms &&
              !(
                (e = t.spec.device_platforms) != null &&
                e.includes(r("AdsAPIDevicePlatform").MOBILE)
              ))
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(r("AdsAPIDevicePlatform").DESKTOP);
          if (
            o("AdsPlacementOmnichannelUtils").isIneligibleForOmnichannelAd(
              babelHelpers.extends({}, t, { objective: l }),
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createOmnichannelReason();
          var m = d(t, l);
          if (m != null) return m;
          if (t.containsOffer === !0)
            return o("AdsPlacementIneligibilityReason").createOfferOptionReason(
              t.objective,
            );
          if (
            o("AdsWhatsAppPlacementUtils").isIneligibleForFBReelsOverlay(
              u,
              babelHelpers.extends({}, t, { objective: l }),
            )
          )
            return o("AdsPlacementIneligibilityReason").createWhatsAppReason(
              t.objective,
            );
          if (t.directInstallDevices === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDirectInstallReason();
          if (r("AdsAppUrlUtils").isInstantGameURL(t.objectStoreURL))
            return o(
              "AdsPlacementIneligibilityReason",
            ).createInstantGameReason();
          var _ = c(t.promotedObjectType);
          return _ != null
            ? _
            : t.destinationType === r("AdCampaignDestination").FACEBOOK_LIVE
              ? o("AdsPlacementIneligibilityReason").createFacebookLiveReason()
              : (n = t.isClickToMPAds) != null && n
                ? o("AdsPlacementIneligibilityReason").createGenericReason()
                : null;
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
          return (
            n &&
              (o(
                "FacebookReelsOverlayStoreUtils",
              ).incontentCreativeGuideExperiment()
                ? (e.push("previews/facebook_reels_banner_fullscreen_mobile"),
                  o(
                    "FacebookReelsOverlayStoreUtils",
                  ).incontentPreviewsDemandV2() ||
                    e.push("previews/facebook_reels_banner"))
                : (o(
                    "FacebookReelsOverlayStoreUtils",
                  ).incontentPreviewsDemandV2() ||
                    e.push("previews/facebook_reels_banner"),
                  e.push("previews/facebook_reels_banner_fullscreen_mobile"))),
            r("immutable").OrderedSet(e)
          );
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
            ).incontentPreviewsDemandV2()
              ? "previews/facebook_reels_banner_fullscreen_mobile"
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
            !p.isEnabled(a.eligibilityInformation.capabilities)
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
      _ = p;
    l.default = _;
  },
  98,
);
