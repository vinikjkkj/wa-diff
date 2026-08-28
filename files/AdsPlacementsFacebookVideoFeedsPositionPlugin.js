__d(
  "AdsPlacementsFacebookVideoFeedsPositionPlugin",
  [
    "fbt",
    "ix",
    "AdCampaignDestination",
    "AdImageSpecCropKeys",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAPITargetFields",
    "AdsAppUrlUtils",
    "AdsBuyingTypes",
    "AdsBwIPlacementUtils",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsClickToCallAdsUtils",
    "AdsInstagramLeadGenPlacementUtils",
    "AdsInstagramPlacementUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementPositionLabelConstant",
    "AdsPreviewVideoUnificationUtils",
    "AdsPromotedObjectTypes",
    "AdsReachFrequencyPlacementUtils",
    "AdsSuggestedVideoConfig",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "AdsUnifiedProfileVisitUtils",
    "AdsVideoBuyingStoreUtils",
    "AdsWhatsAppPlacementUtils",
    "GeoBaseText.react",
    "GeoLink.react",
    "URI",
    "adsIGLoginPlacementUtils",
    "adsPlacementAPISpecReaderIsActiveFacebookPosition",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "immutable",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c,
      d = c || (c = o("react")),
      m = r("immutable").Set([r("AdsBuyingTypes").AUCTION]);
    function p(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { className: "x1jstp8q x14vqqas x2b8uid" }), (t[0] = a))
        : (a = t[0]);
      var i;
      return (
        t[1] !== n
          ? ((i = d.jsx(
              "div",
              babelHelpers.extends({}, a, {
                children: d.jsx(r("GeoBaseText.react"), {
                  color: "placeholder",
                  size: "value",
                  children: n,
                }),
              }),
            )),
            (t[1] = n),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    var _ = {
        type: "placements/position",
        key: "facebook/video_feeds",
        name: r("AdsPlacementPositionLabelConstant").video_feeds,
        nameWithPlatform: s._(/*BTDS*/ "Facebook video feeds"),
        mediaRecommendation: {
          imageCrop: r("AdImageSpecCropKeys")["100x100"],
          videoCrop: "1:1",
        },
        apiPosition: "video_feeds",
        placementImage: u("556712"),
        placementPreviewImage: u("901245"),
        placementPreviewVideo: "10150008661171993",
        platformKey: "facebook",
        getPlacementSpecificPreviewInfo: function (n) {
          var t = d.jsx(p, {
            children: s._(
              /*BTDS*/ "Ads can appear in feeds of video-only content across Facebook, including Facebook Watch. {=m1}",
              [
                s._implicitParam(
                  "=m1",
                  d.jsx(r("GeoLink.react"), {
                    href: new (e || (e = r("URI")))(
                      "/business/help/1559984974021610",
                    ),
                    target: "_blank",
                    children: s._(/*BTDS*/ "Learn more."),
                  }),
                ),
              ],
            ),
          });
          return { description: t };
        },
        isEnabled: function () {
          var e = !o(
            "AdsPreviewVideoUnificationUtils",
          ).deprecateWatchPlacementsInAdsManager();
          return e;
        },
        isInactiveByDefault: function (t) {
          if (t.isReelsTrendingAds === !0) return !0;
          var e = o("AdsODAXUtils").maybeTranslateObjective(
            t.objective,
            t.promotedObjectType,
            t.optimizationGoal,
          );
          return !o(
            "AdsSuggestedVideoConfig",
          ).ELIGIBLE_DEFAULT_IN_OBJECTIVES.has(e);
        },
        getIneligibilityReason: function (t) {
          var e = o("AdsBwIPlacementUtils").getIneligibilityReason(t);
          if (e) return e;
          var n = o(
            "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
          ).getSOOBundleParentIneligibilityReason(_, t);
          if (n != null) return n;
          if (t.isReelsTrendingAds === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createReelsTrendingAdsReason();
          var a = o("AdsODAXUtils").maybeTranslateObjective(
              t.objective,
              t.promotedObjectType,
              t.optimizationGoal,
            ),
            i =
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
          if (o("AdsSuggestedVideoConfig").ELIGIBLE_OBJECTIVES.has(a)) {
            if (
              a === r("AdsAPIObjectives").APP_INSTALLS &&
              t.promotedObjectType === r("AdsPromotedObjectTypes").CANVAS_APP
            )
              return o(
                "AdsPlacementIneligibilityReason",
              ).createCanvasAppReason();
            if (
              o(
                "AdsClickToCallAdsUtils",
              ).getIsClickToCallAdsUnderLeadGenObjective(
                babelHelpers.extends({}, t, { objective: a }),
              ) &&
              !i
            )
              return o(
                "AdsPlacementIneligibilityReason",
              ).createPhoneCallLeadReason();
            if (
              o(
                "AdsClickToCallAdsUtils",
              ).getIsCallAdsNewOptimizationUnderTrafficObjective(
                babelHelpers.extends({}, t, { objective: a }),
              ) &&
              !i
            )
              return o(
                "AdsPlacementIneligibilityReason",
              ).createPhoneCallTrafficReason();
            if (
              o(
                "AdsClickToCallAdsUtils",
              ).getIsClickToCallAdsUnderConversionsOrSalesObjective(
                babelHelpers.extends({}, t, { objective: a }),
              ) &&
              !i
            )
              return o(
                "AdsPlacementIneligibilityReason",
              ).createPhoneCallConversionsOrSalesReason();
            if (
              a === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
              t.optimizationGoal ===
                r("AdsAPIOptimizationGoals").QUALITY_CALL &&
              !i
            )
              return o(
                "AdsPlacementIneligibilityReason",
              ).createPhoneCallConversionsOrSalesReason();
            if (
              o(
                "AdsInstagramPlacementUtils",
              ).isInstagramDestinationEnabledAndSelected(
                babelHelpers.extends({}, t, { objective: a }),
              ) ||
              (t.promotedObjectType === r("AdsPromotedObjectTypes").INSTAGRAM &&
                (a === r("AdsAPIObjectives").CONVERSIONS ||
                  t.objective === r("AdsAPIObjectives").LINK_CLICKS))
            )
              return o(
                "AdsPlacementIneligibilityReason",
              ).createInstagramDirectReason(t.objective);
            if (
              o(
                "AdsInstagramLeadGenPlacementUtils",
              ).isInstagramLeadGenDestinationSelected(
                babelHelpers.extends({}, t, { objective: a }),
              )
            )
              return o(
                "AdsPlacementIneligibilityReason",
              ).createInstagramLeadGenReason(t.objective);
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
                a,
                t.promotedObjectType,
              )
            )
              return o(
                "AdsUnifiedProfileVisitUtils",
              ).getUnifiedProfileVisitsAdsPlacementIneligibilityReason(
                t.destinationType,
              );
          } else
            return o("AdsPlacementIneligibilityReason").createObjectiveReason(
              t.objective,
            );
          var l = o(
            "AdsReachFrequencyPlacementUtils",
          ).getReachFrequencyDisabledReason(
            "facebook/video_feeds",
            babelHelpers.extends({}, t, { objective: a }),
          );
          if (l !== null) return l;
          if (t.directInstallDevices === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDirectInstallReason();
          if (
            !o(
              "AdsVideoBuyingStoreUtils",
            ).checkIfPlacementPositionValidForBuyingOption(
              babelHelpers.extends({}, t, { objective: a }),
              "video_feeds",
            ) ||
            (t.optimizationGoal ===
              r("AdsAPIOptimizationGoals").INCREMENTAL_OFFSITE_CONVERSIONS &&
              a !== r("AdsAPIObjectives").CONVERSIONS)
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createOptimizationGoalReason();
          if (
            !o(
              "AdsVideoBuyingStoreUtils",
            ).checkIfDevicePlatformValidForBuyingOption(
              babelHelpers.extends({}, t, { objective: a }),
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(r("AdsAPIDevicePlatform").DESKTOP);
          if (r("AdsAppUrlUtils").isInstantGameURL(t.objectStoreURL))
            return o(
              "AdsPlacementIneligibilityReason",
            ).createInstantGameReason();
          if (
            o("AdsWhatsAppPlacementUtils").isIneligibleForFBVideoFeedsNonMobile(
              babelHelpers.extends({}, t, { objective: a }),
              i,
            )
          )
            return o("AdsPlacementIneligibilityReason").createWhatsAppReason(
              t.objective,
            );
          if (t.promotedObjectType === r("AdsPromotedObjectTypes").DONATION)
            return o("AdsPlacementIneligibilityReason").createDonationReason();
          if (t.promotedObjectType === r("AdsPromotedObjectTypes").GROUP)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createGroupPromotionReason();
          if (t.promotedObjectType === r("AdsPromotedObjectTypes").IMAGINATION)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createImaginationReason();
          if (t.promotedObjectType === r("AdsPromotedObjectTypes").REMINDER)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createReminderPromotionReason();
          if (t.destinationType === r("AdCampaignDestination").INSTAGRAM_LIVE)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createInstagramLiveReason();
          if (
            o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
              t.spec,
              r("AdsAPIDevicePlatform").DESKTOP,
            )
          ) {
            if (
              !o("AdsSuggestedVideoConfig").WATCH_HOME_ELIGIBLE_OBJECTIVES.has(
                a,
              )
            )
              return o("AdsPlacementIneligibilityReason").createObjectiveReason(
                t.objective,
              );
            if (t.containsDCO === !0)
              return o("AdsPlacementIneligibilityReason").createDCOReason();
            if (!m.includes(t.buyingType))
              return o(
                "AdsPlacementIneligibilityReason",
              ).createBuyingTypeReason(t.buyingType, _.key);
          }
          return null;
        },
        isActive: function (t) {
          return (
            r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
              t,
              "suggested_video",
            ) ||
            r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
              t,
              "video_feeds",
            )
          );
        },
        getPreviews: function (t) {
          var e = o("AdsODAXUtils").maybeTranslateObjective(
              t.objective,
              t.promotedObjectType,
              t.optimizationGoal,
            ),
            n = [],
            a = o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
              t.spec,
              r("AdsAPIDevicePlatform").MOBILE,
            ),
            i = o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
              t.spec,
              r("AdsAPIDevicePlatform").DESKTOP,
            );
          return (
            a &&
              (n.push("previews/watch_feed_mobile"),
              n.push("previews/suggested_video_mobile"),
              n.push("previews/suggested_video_fullscreen_mobile")),
            i &&
              (n.push("previews/watch_feed_home"),
              (t.containsDCO === !0 ||
                !m.includes(t.buyingType) ||
                !o(
                  "AdsSuggestedVideoConfig",
                ).WATCH_HOME_ELIGIBLE_OBJECTIVES.has(e)) &&
                n.pop()),
            r("immutable").OrderedSet(n)
          );
        },
        getDefaultPreview: function (t) {
          return o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
            t.spec,
            r("AdsAPIDevicePlatform").MOBILE,
          )
            ? "previews/watch_feed_mobile"
            : "previews/watch_feed_home";
        },
        adsetReducer: function (t, n) {
          var e = n.action;
          if (!_.isEnabled(e.eligibilityInformation.capabilities)) return t;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removeGroups.includes("facebook/video_feeds")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      t,
                      "facebook/video_feeds",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                      "facebook",
                    );
                  })
                : e.addGroups.includes("facebook/video_feeds")
                  ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        t,
                        "facebook/video_feeds",
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
      },
      f = _;
    l.default = f;
  },
  226,
);
