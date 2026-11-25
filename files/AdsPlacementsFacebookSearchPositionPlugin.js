__d(
  "AdsPlacementsFacebookSearchPositionPlugin",
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
    "AdsAppUtils",
    "AdsBwIPlacementUtils",
    "AdsCampaignFacebookSearchPositionValidator",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsClickToCallAdsUtils",
    "AdsInstagramLeadGenPlacementUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementCopy",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementPositionLabelConstant",
    "AdsPromotedObjectTypes",
    "AdsReachFrequencyPlacementUtils",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "AdsUPVPlacementExpansionUtils",
    "AdsUnifiedProfileVisitUtils",
    "AdsWhatsAppPlacementUtils",
    "adsIGLoginPlacementUtils",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "gkx",
    "immutable",
    "isConsiderationPlacementLocked",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = [
        (e = r("AdsAPIObjectives")).CONVERSIONS,
        e.LINK_CLICKS,
        e.PRODUCT_CATALOG_SALES,
        e.WILDCARD_INTERNAL_ONLY,
        e.REACH,
        e.VIDEO_VIEWS,
        e.BRAND_AWARENESS,
        e.OUTCOME_AWARENESS,
        e.LEAD_GENERATION,
        e.MESSAGES,
        e.POST_ENGAGEMENT,
        e.MOBILE_APP_INSTALLS,
        e.APP_INSTALLS,
        e.PAGE_LIKES,
        e.EVENT_RESPONSES,
      ],
      d = [
        e.CONVERSIONS,
        e.LINK_CLICKS,
        e.PRODUCT_CATALOG_SALES,
        e.WILDCARD_INTERNAL_ONLY,
        e.REACH,
        e.VIDEO_VIEWS,
        e.BRAND_AWARENESS,
        e.OUTCOME_AWARENESS,
        e.LEAD_GENERATION,
        e.MESSAGES,
        e.POST_ENGAGEMENT,
        e.PAGE_LIKES,
      ],
      m = {
        type: "placements/position",
        key: "facebook/search",
        name: r("AdsPlacementPositionLabelConstant").search,
        nameWithPlatform: s._(/*BTDS*/ ""),
        mediaRecommendation: {
          copy: r("gkx")("15469")
            ? r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION.FB_SEARCH_GRID
            : r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION.FB_SEARCH,
          imageCrop: r("AdImageSpecCropKeys")["191x100"],
          videoCrop: "16:9",
        },
        apiPosition: "search",
        placementImage: r("gkx")("15469") ? u("903715") : u("1000183"),
        placementPreviewImage: r("gkx")("15469") ? u("903715") : u("1000183"),
        platformKey: "facebook",
        isEnabled: function (t) {
          return !0;
        },
        getIneligibilityReason: function (t) {
          var e = o("AdsBwIPlacementUtils").getIneligibilityReason(t);
          if (e) return e;
          var n = o(
            "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
          ).getSOOBundleParentIneligibilityReason(m, t);
          if (n != null) return n;
          if (t.isReelsTrendingAds === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createReelsTrendingAdsReason();
          var a = o("AdsODAXUtils").maybeTranslateObjective(
            t.objective,
            t.promotedObjectType,
            t.optimizationGoal,
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
          var i = o(
            "AdsReachFrequencyPlacementUtils",
          ).getReachFrequencyDisabledReason("facebook/search", t);
          if (i !== null) return i;
          var l =
              t.spec != null &&
              o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
                t.spec,
                r("AdsAPIDevicePlatform").MOBILE,
              ),
            s = r("AdsAppUtils").isAppEngagementObjective(
              a,
              t.promotedObjectType,
            );
          if (s)
            return o("AdsPlacementIneligibilityReason").createMobileAppReason();
          var u = r("AdsAccountStore").getSelectedAccount().getValue();
          if (
            o("AdsWhatsAppPlacementUtils").isIneligibleForSearchPlacement(
              u,
              babelHelpers.extends({}, t, { objective: a }),
              l,
            )
          )
            return o("AdsPlacementIneligibilityReason").createWhatsAppReason(
              t.objective,
            );
          if (t.promotedObjectType === r("AdsPromotedObjectTypes").DONATION)
            return o("AdsPlacementIneligibilityReason").createDonationReason();
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
            ) &&
            !o(
              "AdsUPVPlacementExpansionUtils",
            ).getIsFbPlacementsExpansionEnabledForUPV()
          )
            return o(
              "AdsUnifiedProfileVisitUtils",
            ).getUnifiedProfileVisitsAdsPlacementIneligibilityReason(
              t.destinationType,
            );
          var d = p(t);
          if (d != null) return d;
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
            (t.spec != null &&
              o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
                t.spec,
                r("AdsAPIDevicePlatform").DESKTOP,
              ) &&
              a === r("AdsAPIObjectives").APP_INSTALLS) ||
            !c.includes(a)
          )
            return o("AdsPlacementIneligibilityReason").createObjectiveReason(
              t.objective,
            );
          if (
            o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
              t.spec,
              r("AdsAPIDevicePlatform").DESKTOP,
            ) &&
            !f(a)
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(r("AdsAPIDevicePlatform").DESKTOP);
          var g = _(t, a, l);
          return g != null
            ? g
            : (a === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
                  (t.optimizationGoal ===
                    r("AdsAPIOptimizationGoals").REPLIES ||
                    t.optimizationGoal ===
                      r("AdsAPIOptimizationGoals").CONVERSATIONS)) ||
                t.optimizationGoal ===
                  r("AdsAPIOptimizationGoals")
                    .INCREMENTAL_OFFSITE_CONVERSIONS ||
                r("isConsiderationPlacementLocked")(t.optimizationGoal)
              ? o(
                  "AdsPlacementIneligibilityReason",
                ).createOptimizationGoalReason()
              : r("AdsAppUrlUtils").isInstantGameURL(t.objectStoreURL)
                ? o("AdsPlacementIneligibilityReason").createInstantGameReason()
                : t.objective === r("AdsAPIObjectives").APP_INSTALLS &&
                    t.promotedObjectType ===
                      r("AdsPromotedObjectTypes").CANVAS_APP
                  ? o("AdsPlacementIneligibilityReason").createCanvasAppReason()
                  : null;
        },
        isActive: function (t) {
          return o("AdsPlacementAPISpecReaderUtils").isActivePosition(
            t,
            "facebook",
            "search",
          );
        },
        isInactiveByDefault: function (t) {
          return !1;
        },
        adsetValidators: [r("AdsCampaignFacebookSearchPositionValidator")],
        getPlacementSpecificPreviewInfo: function (t) {
          return r("gkx")("15469")
            ? {
                placement: "search",
                squareAdsPreviewImage: u("903715"),
                verticalAdsPreviewImage: u("903716"),
              }
            : null;
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
            n &&
              (e.push("previews/search_serp_ads_mobile"),
              e.push("previews/marketplace_search_ads_mobile")),
            a &&
              f(t.objective) &&
              (e.push("previews/search_serp_ads_desktop"),
              e.push("previews/marketplace_search_ads_desktop")),
            r("immutable").OrderedSet(e)
          );
        },
        getDefaultPreview: function (t) {
          var e = o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
            t.spec,
            r("AdsAPIDevicePlatform").MOBILE,
          );
          return e
            ? "previews/marketplace_search_ads_mobile"
            : o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
                  t.spec,
                  r("AdsAPIDevicePlatform").DESKTOP,
                ) && f(t.objective)
              ? "previews/search_serp_ads_desktop"
              : "previews/search_serp_ads_mobile";
        },
        adsetReducer: function (t, n) {
          var e = n.action;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removeGroups.includes("facebook/search")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      t,
                      "facebook/search",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                      "facebook",
                    );
                  })
                : e.addGroups.includes("facebook/search")
                  ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        t,
                        "facebook/search",
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
        parentPlacements: r("immutable").OrderedSet(["facebook/feed"]),
        childPlacements: r("immutable").OrderedSet([]),
      };
    function p(e) {
      return e.promotedObjectType === r("AdsPromotedObjectTypes").GROUP
        ? o("AdsPlacementIneligibilityReason").createGroupPromotionReason()
        : e.promotedObjectType === r("AdsPromotedObjectTypes").IMAGINATION
          ? o("AdsPlacementIneligibilityReason").createImaginationReason()
          : e.destinationType === r("AdCampaignDestination").INSTAGRAM_LIVE
            ? o("AdsPlacementIneligibilityReason").createInstagramLiveReason()
            : e.promotedObjectType === r("AdsPromotedObjectTypes").REMINDER
              ? o(
                  "AdsPlacementIneligibilityReason",
                ).createReminderPromotionReason()
              : e.promotedObjectType === r("AdsPromotedObjectTypes").INSTAGRAM
                ? o(
                    "AdsPlacementIneligibilityReason",
                  ).createInstagramDirectReason(e.objective)
                : e.destinationType === r("AdCampaignDestination").FACEBOOK_LIVE
                  ? o(
                      "AdsPlacementIneligibilityReason",
                    ).createFacebookLiveReason()
                  : null;
    }
    function _(e, t, n) {
      return o(
        "AdsClickToCallAdsUtils",
      ).getIsClickToCallAdsUnderLeadGenObjective(
        babelHelpers.extends({}, e, { objective: t }),
      ) && !n
        ? o("AdsPlacementIneligibilityReason").createPhoneCallLeadReason()
        : o(
              "AdsClickToCallAdsUtils",
            ).getIsCallAdsNewOptimizationUnderTrafficObjective(
              babelHelpers.extends({}, e, { objective: t }),
            ) && !n
          ? o("AdsPlacementIneligibilityReason").createPhoneCallTrafficReason()
          : (o(
                "AdsClickToCallAdsUtils",
              ).getIsClickToCallAdsUnderConversionsOrSalesObjective(
                babelHelpers.extends({}, e, { objective: t }),
              ) &&
                !n) ||
              (t === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
                e.optimizationGoal ===
                  r("AdsAPIOptimizationGoals").QUALITY_CALL &&
                !n)
            ? o(
                "AdsPlacementIneligibilityReason",
              ).createPhoneCallConversionsOrSalesReason()
            : null;
    }
    function f(e) {
      return d.includes(e);
    }
    var g = m;
    l.default = g;
  },
  226,
);
