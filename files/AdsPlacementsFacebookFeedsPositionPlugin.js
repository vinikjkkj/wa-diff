__d(
  "AdsPlacementsFacebookFeedsPositionPlugin",
  [
    "fbt",
    "ix",
    "AdCampaignDestination",
    "AdImageSpecCropKeys",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAPITargetFields",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsClickToCallAdsUtils",
    "AdsInstagramLeadGenPlacementUtils",
    "AdsInstagramPlacementUtils",
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
    "ClickToMessageCTDFeatureGating",
    "FacebookReelsOverlayStoreUtils",
    "adsIGLoginPlacementUtils",
    "adsPlacementAPISpecReaderIsActiveFacebookPosition",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = r("immutable").Set([
        (e = r("AdsAPIObjectives")).APP_INSTALLS,
        e.BRAND_AWARENESS,
        e.CANVAS_APP_ENGAGEMENT,
        e.CANVAS_APP_INSTALLS,
        e.CONVERSIONS,
        e.EVENT_RESPONSES,
        e.LEAD_GENERATION,
        e.LINK_CLICKS,
        e.MESSAGES,
        e.MOBILE_APP_ENGAGEMENT,
        e.MOBILE_APP_INSTALLS,
        e.OFFER_CLAIMS,
        e.PAGE_LIKES,
        e.POST_ENGAGEMENT,
        e.PRODUCT_CATALOG_SALES,
        e.REACH,
        e.STORE_VISITS,
        e.VIDEO_VIEWS,
        e.WILDCARD_INTERNAL_ONLY,
      ]),
      d = {
        type: "placements/position",
        key: "facebook/feed",
        name: s._(/*BTDS*/ "Feeds"),
        nameWithPlatform: s._(/*BTDS*/ "Facebook Feed"),
        mediaRecommendation: {
          copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION.FB_FEED,
          imageCrop: r("AdImageSpecCropKeys")["100x100"],
          videoCrop: "1:1",
        },
        apiPosition: "feed",
        placementImage: u("556711"),
        placementPreviewImage: u("901242"),
        platformKey: "facebook",
        isEnabled: function (t) {
          return !0;
        },
        isInactiveByDefault: function (t) {
          return t.isReelsTrendingAds === !0;
        },
        getIneligibilityReason: function (t) {
          var e = o(
            "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
          ).getSOOBundleParentIneligibilityReason(d, t);
          if (e != null) return e;
          var n = o("AdsODAXUtils").maybeTranslateObjective(
            t.objective,
            t.promotedObjectType,
            t.optimizationGoal,
          );
          if (t.isReelsTrendingAds === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createReelsTrendingAdsReason();
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
          if (!c.includes(n))
            return o("AdsPlacementIneligibilityReason").createObjectiveReason(
              t.objective,
            );
          if (
            o(
              "AdsPlacementEligibilityInfoUtils",
            ).isIneligibleWithMobileOnlyObjectives(
              babelHelpers.extends({}, t, { objective: n }),
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(r("AdsAPIDevicePlatform").DESKTOP);
          if (
            o(
              "AdsPlacementEligibilityInfoUtils",
            ).isIneligibleWithDesktopOnlyObjectives(
              babelHelpers.extends({}, t, { objective: n }),
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(r("AdsAPIDevicePlatform").MOBILE);
          var a = o(
            "AdsReachFrequencyPlacementUtils",
          ).getReachFrequencyDisabledReason(
            "facebook/feed",
            babelHelpers.extends({}, t, { objective: n }),
          );
          if (a !== null) return a;
          if (
            !o(
              "AdsVideoBuyingStoreUtils",
            ).checkIfPlacementPositionValidForBuyingOption(
              babelHelpers.extends({}, t, { objective: n }),
              "feed",
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createOptimizationGoalReason();
          if (
            !o(
              "AdsVideoBuyingStoreUtils",
            ).checkIfDevicePlatformValidForBuyingOption(
              babelHelpers.extends({}, t, { objective: n }),
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(r("AdsAPIDevicePlatform").DESKTOP);
          var i = o(
            "AdsPlacementAPISpecReaderUtils",
          ).isOnlyActiveDevicePlatform(
            t.spec,
            r("AdsAPIDevicePlatform").MOBILE,
          );
          return o("AdsWhatsAppPlacementUtils").isIneligibleForFBFeeds(
            babelHelpers.extends({}, t, { objective: n }),
            i,
          )
            ? o("AdsPlacementIneligibilityReason").createWhatsAppReason(
                t.objective,
              )
            : o(
                  "AdsClickToCallAdsUtils",
                ).getIsClickToCallAdsUnderLeadGenObjective(
                  babelHelpers.extends({}, t, { objective: n }),
                ) && !i
              ? o("AdsPlacementIneligibilityReason").createPhoneCallLeadReason()
              : o(
                    "adsIGLoginPlacementUtils",
                  ).getShouldDisableFBPlacementForIGLoginUsers(t.account)
                ? o("AdsPlacementIneligibilityReason").createIGLoginReason()
                : o(
                      "AdsUnifiedProfileVisitUtils",
                    ).getIsFBPositionConditionallyDisabledForProfileVisits(
                      n,
                      t.promotedObjectType,
                      t.destinationType,
                      "feed",
                      t.spec.device_platforms,
                    )
                  ? o(
                      "AdsUnifiedProfileVisitUtils",
                    ).getUnifiedProfileVisitsAdsPlacementIneligibilityReason(
                      t.destinationType,
                    )
                  : t.promotedObjectType ===
                        r("AdsPromotedObjectTypes").GROUP && !i
                    ? o(
                        "AdsPlacementIneligibilityReason",
                      ).createGroupPromotionReason()
                    : t.promotedObjectType ===
                          r("AdsPromotedObjectTypes").IMAGINATION && !i
                      ? o(
                          "AdsPlacementIneligibilityReason",
                        ).createImaginationReason()
                      : t.destinationType ===
                          r("AdCampaignDestination").INSTAGRAM_LIVE
                        ? o(
                            "AdsPlacementIneligibilityReason",
                          ).createInstagramLiveReason()
                        : o(
                              "AdsClickToCallAdsUtils",
                            ).getIsClickToCallAdsUnderConversionsOrSalesObjective(
                              babelHelpers.extends({}, t, { objective: n }),
                            ) && !i
                          ? o(
                              "AdsPlacementIneligibilityReason",
                            ).createPhoneCallConversionsOrSalesReason()
                          : t.promotedObjectType ===
                              r("AdsPromotedObjectTypes").REMINDER
                            ? o(
                                "AdsPlacementIneligibilityReason",
                              ).createReminderPromotionReason()
                            : o(
                                  "AdsClickToCallAdsUtils",
                                ).getIsCallAdsNewOptimizationUnderTrafficObjective(
                                  t,
                                ) && !i
                              ? o(
                                  "AdsPlacementIneligibilityReason",
                                ).createPhoneCallTrafficReason()
                              : n ===
                                    r("AdsAPIObjectives")
                                      .PRODUCT_CATALOG_SALES &&
                                  t.optimizationGoal ===
                                    r("AdsAPIOptimizationGoals").QUALITY_CALL &&
                                  !i
                                ? o(
                                    "AdsPlacementIneligibilityReason",
                                  ).createPhoneCallConversionsOrSalesReason()
                                : o(
                                      "AdsInstagramPlacementUtils",
                                    ).isInstagramDestinationEnabledAndSelected(
                                      babelHelpers.extends({}, t, {
                                        objective: n,
                                      }),
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
                                        babelHelpers.extends({}, t, {
                                          objective: n,
                                        }),
                                      )
                                    ? o(
                                        "AdsPlacementIneligibilityReason",
                                      ).createInstagramLeadGenReason(
                                        t.objective,
                                      )
                                    : null;
        },
        isActive: function (t) {
          return r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
            t,
            "feed",
          );
        },
        getPreviews: function (t) {
          var e = [],
            n = o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
              t.spec,
              r("AdsAPIDevicePlatform").MOBILE,
            ),
            a = o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
              t.spec,
              r("AdsAPIDevicePlatform").DESKTOP,
            );
          return (
            n && e.push("previews/mobile_feed_standard"),
            a && e.push("previews/desktop_feed"),
            r("immutable").OrderedSet(e)
          );
        },
        getDefaultPreview: function (t) {
          if (
            o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
              t.spec,
              r("AdsAPIDevicePlatform").MOBILE,
            )
          )
            return "previews/mobile_feed_standard";
          if (
            o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
              t.spec,
              r("AdsAPIDevicePlatform").DESKTOP,
            )
          )
            return "previews/desktop_feed";
        },
        adsetReducer: function (t, n) {
          var e = n.action;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removeGroups.includes("facebook/feed")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      t,
                      "facebook/feed",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                      "facebook",
                    );
                  })
                : e.addGroups.includes("facebook/feed")
                  ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        t,
                        "facebook/feed",
                        e.eligibilityInformation,
                        r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                        "facebook",
                      );
                    })
                  : t;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(t, e.ids, function (t) {
                var n = o("AdsPlacementAPISpecWriterUtils").addGroup(
                  t,
                  e.pluginKey,
                  e.eligibilityInformation,
                  r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                  "facebook",
                );
                return (
                  (n = o(
                    "AdsPlacementAPISpecWriterUtils",
                  ).removeMessengerThreadPlacement(
                    n,
                    e.eligibilityInformation,
                  )),
                  n
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
        parentPlacements: r("immutable").OrderedSet([]),
        childPlacements: r("immutable").OrderedSet(
          [].concat(
            o("FacebookReelsOverlayStoreUtils").instreamSkipBundleCheckGK()
              ? []
              : ["facebook/instream_video"],
            [
              "facebook/group_tab",
              "facebook/marketplace",
              "facebook/search",
              "facebook/notification",
              "facebook/reels_overlay",
              "facebook/biz_disco_feed",
              "messenger/inbox",
              "facebook/profile_feed",
              "audience_network/classic",
              "audience_network/rewarded_video",
            ],
          ),
        ),
      },
      m = d;
    l.default = m;
  },
  226,
);
