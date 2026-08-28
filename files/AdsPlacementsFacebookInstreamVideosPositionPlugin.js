__d(
  "AdsPlacementsFacebookInstreamVideosPositionPlugin",
  [
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
    "AdsBuyingTypes",
    "AdsBwIPlacementUtils",
    "AdsCampaignInstreamVideoPositionValidator",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsClickToCallAdsUtils",
    "AdsInstagramLeadGenPlacementUtils",
    "AdsInstreamVideoValidationUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementCopy",
    "AdsPlacementEligibilityInfoUtils",
    "AdsPlacementIneligibilityReason",
    "AdsPromotedObjectTypes",
    "AdsReachFrequencyPlacementUtils",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "AdsUnifiedProfileVisitUtils",
    "AdsVideoBuyingStoreUtils",
    "AdsWhatsAppPlacementUtils",
    "FacebookReelsOverlayStoreUtils",
    "adsIGLoginPlacementUtils",
    "adsPlacementAPISpecReaderIsActiveFacebookPosition",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "gkx",
    "immutable",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
      type: "placements/position",
      key: "facebook/instream_video",
      name: u(),
      nameWithPlatform: c(),
      apiPosition: "instream_video",
      mediaRecommendation: {
        copy: o(
          "FacebookReelsOverlayStoreUtils",
        ).incontentCreativeGuideExperiment()
          ? r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION
              .INSTREAM_VERTICAL_VIDEO
          : r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION
              .INSTREAM_VIDEO_WITH_DURATION,
        imageCrop: o(
          "FacebookReelsOverlayStoreUtils",
        ).incontentCreativeGuideExperiment()
          ? r("AdImageSpecCropKeys")["90x160"]
          : r("AdImageSpecCropKeys")["100x100"],
        videoCrop: o(
          "FacebookReelsOverlayStoreUtils",
        ).incontentCreativeGuideExperiment()
          ? "9:16"
          : "1:1",
      },
      platformKey: "facebook",
      isEnabled: function () {
        return !0;
      },
      isInactiveByDefault: function (t) {
        return !1;
      },
      getIneligibilityReason: function (n) {
        var t,
          a = o("AdsBwIPlacementUtils").getIneligibilityReason(n);
        if (a) return a;
        if (n.isReelsTrendingAds === !0)
          return o(
            "AdsPlacementIneligibilityReason",
          ).createReelsTrendingAdsReason();
        var i = o("AdsODAXUtils").maybeTranslateObjective(
            n.objective,
            n.promotedObjectType,
            n.optimizationGoal,
          ),
          l = r("immutable").Set([
            r("AdsAPIObjectives").BRAND_AWARENESS,
            r("AdsAPIObjectives").POST_ENGAGEMENT,
            r("AdsAPIObjectives").VIDEO_VIEWS,
            r("AdsAPIObjectives").REACH,
            r("AdsAPIObjectives").OUTCOME_AWARENESS,
            r("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY,
            r("AdsAPIObjectives").APP_INSTALLS,
            r("AdsAPIObjectives").LEAD_GENERATION,
            r("AdsAPIObjectives").LINK_CLICKS,
            r("AdsAPIObjectives").MESSAGES,
            r("AdsAPIObjectives").PRODUCT_CATALOG_SALES,
            r("AdsAPIObjectives").CONVERSIONS,
          ]),
          s = r("immutable").Set([
            r("AdsAPIObjectives").BRAND_AWARENESS,
            r("AdsAPIObjectives").POST_ENGAGEMENT,
            r("AdsAPIObjectives").VIDEO_VIEWS,
            r("AdsAPIObjectives").REACH,
            r("AdsAPIObjectives").LINK_CLICKS,
            r("AdsAPIObjectives").CONVERSIONS,
            r("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY,
          ]),
          u = r("AdsAccountStore").getSelectedAccount().getValue();
        if (
          n.spec &&
          o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
            n.spec,
            r("AdsAPIDevicePlatform").CONNECTED_TV,
          )
        )
          return o(
            "AdsPlacementIneligibilityReason",
          ).createDevicePlatformReason(r("AdsAPIDevicePlatform").CONNECTED_TV);
        if (
          !l.includes(i) ||
          (n.spec.device_platforms &&
            !n.spec.device_platforms.includes(
              r("AdsAPIDevicePlatform").MOBILE,
            ) &&
            !s.includes(i))
        )
          return o("AdsPlacementIneligibilityReason").createObjectiveReason(
            n.objective,
          );
        if (r("AdsAppUrlUtils").isFacebookDesktopURL(n.objectStoreURL))
          return o("AdsPlacementIneligibilityReason").createGenericReason();
        var c = o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
          n.spec,
          r("AdsAPIDevicePlatform").MOBILE,
        );
        if (
          o("AdsClickToCallAdsUtils").getIsClickToCallAdsUnderLeadGenObjective(
            babelHelpers.extends({}, n, { objective: i }),
          ) &&
          !c
        )
          return o(
            "AdsPlacementIneligibilityReason",
          ).createPhoneCallLeadReason();
        if (
          o(
            "AdsClickToCallAdsUtils",
          ).getIsCallAdsNewOptimizationUnderTrafficObjective(n) &&
          !c
        )
          return o(
            "AdsPlacementIneligibilityReason",
          ).createPhoneCallTrafficReason();
        if (
          (o(
            "AdsClickToCallAdsUtils",
          ).getIsClickToCallAdsUnderConversionsOrSalesObjective(
            babelHelpers.extends({}, n, { objective: i }),
          ) &&
            !c) ||
          (i === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
            n.optimizationGoal === r("AdsAPIOptimizationGoals").QUALITY_CALL &&
            !c)
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
          ).getIsPositionAlwaysDisabledForProfileVisits(i, n.promotedObjectType)
        )
          return o(
            "AdsUnifiedProfileVisitUtils",
          ).getUnifiedProfileVisitsAdsPlacementIneligibilityReason(
            n.destinationType,
          );
        var d = n.objectStoreURL;
        if (
          i === r("AdsAPIObjectives").APP_INSTALLS &&
          r("isTruthy")(d) &&
          typeof d == "string" &&
          !(
            r("AdsAppUrlUtils").isItunesURL(d) ||
            r("AdsAppUrlUtils").isGooglePlayURL(d)
          )
        )
          return o("AdsPlacementIneligibilityReason").createGenericReason();
        if (
          o(
            "AdsPlacementEligibilityInfoUtils",
          ).isIneligibleWithMobileOnlyObjectives(
            babelHelpers.extends({}, n, { objective: i }),
          )
        )
          return o(
            "AdsPlacementIneligibilityReason",
          ).createDevicePlatformReason(r("AdsAPIDevicePlatform").DESKTOP);
        var m = o(
          "AdsReachFrequencyPlacementUtils",
        ).getReachFrequencyDisabledReason(
          e.key,
          babelHelpers.extends({}, n, { objective: i }),
        );
        if (m !== null) return m;
        if (n.promotedObjectType === r("AdsPromotedObjectTypes").INSTAGRAM)
          return o(
            "AdsPlacementIneligibilityReason",
          ).createInstagramDirectReason(n.objective);
        if (n.destinationType === r("AdCampaignDestination").INSTAGRAM_LIVE)
          return o(
            "AdsPlacementIneligibilityReason",
          ).createInstagramLiveReason();
        if (
          o(
            "AdsInstagramLeadGenPlacementUtils",
          ).isInstagramLeadGenDestinationSelected(
            babelHelpers.extends({}, n, { objective: i }),
          )
        )
          return o(
            "AdsPlacementIneligibilityReason",
          ).createInstagramLeadGenReason(n.objective);
        if (
          !o(
            "AdsVideoBuyingStoreUtils",
          ).checkIfPlacementPositionValidForBuyingOption(
            babelHelpers.extends({}, n, { objective: i }),
            "instream_video",
          ) ||
          (i === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
            (n.optimizationGoal === r("AdsAPIOptimizationGoals").REPLIES ||
              n.optimizationGoal ===
                r("AdsAPIOptimizationGoals").CONVERSATIONS)) ||
          (n.optimizationGoal ===
            r("AdsAPIOptimizationGoals").INCREMENTAL_OFFSITE_CONVERSIONS &&
            i !== r("AdsAPIObjectives").CONVERSIONS)
        )
          return o(
            "AdsPlacementIneligibilityReason",
          ).createOptimizationGoalReason();
        if (
          !o(
            "AdsVideoBuyingStoreUtils",
          ).checkIfDevicePlatformValidForBuyingOption(
            babelHelpers.extends({}, n, { objective: i }),
          )
        )
          return o(
            "AdsPlacementIneligibilityReason",
          ).createDevicePlatformReason(r("AdsAPIDevicePlatform").DESKTOP);
        if (
          o("AdsWhatsAppPlacementUtils").isIneligibleForFBInstreamVideos(
            u,
            babelHelpers.extends({}, n, { objective: i }),
            c,
          )
        )
          return o("AdsPlacementIneligibilityReason").createWhatsAppReason(
            n.objective,
          );
        if (n.directInstallDevices === !0)
          return o(
            "AdsPlacementIneligibilityReason",
          ).createDirectInstallReason();
        if (r("AdsAppUrlUtils").isInstantGameURL(n.objectStoreURL))
          return o("AdsPlacementIneligibilityReason").createInstantGameReason();
        if (n.promotedObjectType === r("AdsPromotedObjectTypes").DONATION)
          return o("AdsPlacementIneligibilityReason").createDonationReason();
        if (n.promotedObjectType === r("AdsPromotedObjectTypes").GROUP)
          return o(
            "AdsPlacementIneligibilityReason",
          ).createGroupPromotionReason();
        if (n.promotedObjectType === r("AdsPromotedObjectTypes").IMAGINATION)
          return o("AdsPlacementIneligibilityReason").createImaginationReason();
        if (n.promotedObjectType === r("AdsPromotedObjectTypes").REMINDER)
          return o(
            "AdsPlacementIneligibilityReason",
          ).createReminderPromotionReason();
        if (n.destinationType === r("AdCampaignDestination").FACEBOOK_LIVE)
          return o(
            "AdsPlacementIneligibilityReason",
          ).createFacebookLiveReason();
        if ((t = n.isClickToMPAds) != null && t)
          return o("AdsPlacementIneligibilityReason").createGenericReason();
        var p = o("AdsInstreamVideoValidationUtils").getIsInstreamOnlyAllowed(
            n,
          ),
          _ = o(
            "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
          ).getSOOBundleParentIneligibilityReason(e, n);
        return !p && _ != null ? _ : null;
      },
      isActive: function (t) {
        return r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
          t,
          "instream_video",
        );
      },
      adsetValidators: [r("AdsCampaignInstreamVideoPositionValidator")],
      getPreviews: function (t) {
        var e,
          n = o("AdsODAXUtils").maybeTranslateObjective(
            t.objective,
            t.promotedObjectType,
            t.optimizationGoal,
          ),
          a = r("immutable").Set([
            (e = r("AdsAPIObjectives")).APP_INSTALLS,
            e.EVENT_RESPONSES,
            e.LEAD_GENERATION,
            e.LINK_CLICKS,
            e.MESSAGES,
            e.MOBILE_APP_INSTALLS,
            e.PRODUCT_CATALOG_SALES,
            e.STORE_VISITS,
            e.CONVERSIONS,
            e.WEBSITE_CONVERSIONS,
          ]);
        r("gkx")("22311") &&
          (a = a.union(
            r("immutable").Set([r("AdsAPIObjectives").POST_ENGAGEMENT]),
          ));
        var i = r("immutable").Set([r("AdsAPIObjectives").REACH]),
          l = r("immutable").Set([
            r("AdsAPIObjectives").VIDEO_VIEWS,
            r("AdsAPIObjectives").POST_ENGAGEMENT,
            r("AdsAPIObjectives").LINK_CLICKS,
            r("AdsAPIObjectives").CONVERSIONS,
            r("AdsAPIObjectives").WEBSITE_CONVERSIONS,
            r("AdsAPIObjectives").BRAND_AWARENESS,
            r("AdsAPIObjectives").REACH,
            r("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY,
          ]),
          s = [],
          u = o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
            t.spec,
            r("AdsAPIDevicePlatform").MOBILE,
          ),
          c = o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
            t.spec,
            r("AdsAPIDevicePlatform").DESKTOP,
          ),
          d =
            !o("FacebookReelsOverlayStoreUtils").incontentPreviewsDemandV2() &&
            (((a.contains(n) || i.contains(n)) &&
              t.buyingType !== r("AdsBuyingTypes").RESERVED) ||
              n === r("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY);
        return (
          u &&
            (o(
              "FacebookReelsOverlayStoreUtils",
            ).incontentCreativeGuideExperiment() ||
              (s.push("previews/instream_video_mobile"),
              d && s.push("previews/instream_banner_mobile")),
            s.push("previews/instream_video_fullscreen_mobile"),
            d &&
              (s.push("previews/instream_banner_fullscreen_mobile"),
              r("gkx")("2702") ||
                s.push("previews/instream_banner_fullscreen_ios")),
            o(
              "FacebookReelsOverlayStoreUtils",
            ).incontentCreativeGuideExperiment() &&
              (s.push("previews/instream_video_mobile"),
              d && s.push("previews/instream_banner_mobile"))),
          c &&
            l.contains(n) &&
            (s.push("previews/instream_video_desktop"),
            d && s.push("previews/instream_banner_desktop")),
          r("immutable").OrderedSet(s)
        );
      },
      getDefaultPreview: function (t) {
        if (
          o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
            t.spec,
            r("AdsAPIDevicePlatform").MOBILE,
          )
        )
          return o(
            "FacebookReelsOverlayStoreUtils",
          ).incontentCreativeGuideExperiment()
            ? "previews/instream_video_fullscreen_mobile"
            : "previews/instream_video_mobile";
        if (
          o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
            t.spec,
            r("AdsAPIDevicePlatform").DESKTOP,
          )
        )
          return "previews/instream_video_desktop";
      },
      placementImage: s("556712"),
      placementPreviewImage: s("556716"),
      placementPreviewVideo: "10150013094781918",
      getPlacementSpecificPreviewInfo: function (t, n, a, i) {
        if (
          o("FacebookReelsOverlayStoreUtils").incontentCreativeGuideExperiment()
        )
          return {
            defaultPreviewFormat: "Image",
            videoAdsPreviewImage: s("1170718"),
            placement: "instream_video",
          };
        var e = o("AdsODAXUtils").maybeTranslateObjective(n, a, i),
          l = r("immutable").Set([
            r("AdsAPIObjectives").CONVERSIONS,
            r("AdsAPIObjectives").APP_INSTALLS,
            r("AdsAPIObjectives").EVENT_RESPONSES,
            r("AdsAPIObjectives").LEAD_GENERATION,
            r("AdsAPIObjectives").LINK_CLICKS,
            r("AdsAPIObjectives").PRODUCT_CATALOG_SALES,
          ]),
          u = r("AdsAccountUtils").hasCapabilityFromList(
            t,
            "ADS_INSTREAM_INTERFACE_INTEGRITY",
          ),
          c = u && l.includes(e) ? "10150070703438280" : "10150013094781918";
        return {
          imageAdsPreviewVideo: "1302280796541250",
          videoAdsPreviewVideo: c,
          placement: "instream_video",
        };
      },
      adsetReducer: function (n, a) {
        var t = a.action;
        if (!e.isEnabled(t.eligibilityInformation.capabilities)) return n;
        switch (t.type) {
          case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
            return t.removeGroups.includes("facebook/instream_video")
              ? o("AdsMutators").mutateEach(n, t.campaignIDs, function (e) {
                  return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                    e,
                    "facebook/instream_video",
                    t.eligibilityInformation,
                    r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                    "facebook",
                  );
                })
              : t.addGroups.includes("facebook/instream_video")
                ? o("AdsMutators").mutateEach(n, t.campaignIDs, function (e) {
                    return o("AdsPlacementAPISpecWriterUtils").addGroup(
                      e,
                      "facebook/instream_video",
                      t.eligibilityInformation,
                      r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                      "facebook",
                    );
                  })
                : n;
          case o("AdsCampaignPlacementAddDataActionFlux").actionType:
            return o("AdsMutators").mutateEach(n, t.ids, function (e) {
              return o("AdsPlacementAPISpecWriterUtils").addGroup(
                e,
                t.pluginKey,
                t.eligibilityInformation,
                r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                "facebook",
              );
            });
          case o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType:
            return o("AdsMutators").mutateEach(n, t.campaignIDs, function (e) {
              return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                e,
                t.pluginKey,
                t.eligibilityInformation,
                r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                "facebook",
              );
            });
        }
        return n;
      },
      parentPlacements: o(
        "FacebookReelsOverlayStoreUtils",
      ).instreamSkipBundleCheckGK()
        ? r("immutable").OrderedSet([])
        : r("immutable").OrderedSet(["facebook/feed"]),
      childPlacements: r("immutable").OrderedSet([]),
    };
    function u() {
      return o("FacebookReelsOverlayStoreUtils").getReelInstreamPositionFbt();
    }
    function c() {
      return o(
        "FacebookReelsOverlayStoreUtils",
      ).getReelInstreamPlatformPositionFbt();
    }
    var d = e;
    l.default = d;
  },
  98,
);
