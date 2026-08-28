__d(
  "AdsPlacementsInstagramSearchPositionPlugin",
  [
    "fbt",
    "AdCampaignDestination",
    "AdImageSpecCropKeys",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAPITargetFields",
    "AdsAccountUtils",
    "AdsBuyingTypes",
    "AdsBwIPlacementUtils",
    "AdsCampaignInstagramSearchPositionValidator",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsInstagramLeadGenPlacementUtils",
    "AdsInstagramSearchAdsUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementConfigObjectiveEligibilityUtils",
    "AdsPlacementConfigOptimizationGoalEligibilityUtils",
    "AdsPlacementCopy",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementPositionLabelConstant",
    "AdsPromotedObjectTypes",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "AdsUnifiedProfileVisitUtils",
    "AdsWhatsAppPlacementUtils",
    "GeoBaseText.react",
    "WebPixelRatio",
    "bx",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "gkx",
    "immutable",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      return (e === r("AdsPromotedObjectTypes").MESSENGER ||
        e === r("AdsPromotedObjectTypes").LEAD_FORM_MESSENGER) &&
        !r("gkx")("21852")
        ? o("AdsPlacementIneligibilityReason").createMessengerReason(t)
        : e === r("AdsPromotedObjectTypes").DONATION
          ? o("AdsPlacementIneligibilityReason").createDonationReason()
          : e === r("AdsPromotedObjectTypes").GROUP
            ? o("AdsPlacementIneligibilityReason").createGroupPromotionReason()
            : e === r("AdsPromotedObjectTypes").IMAGINATION
              ? o("AdsPlacementIneligibilityReason").createImaginationReason()
              : e === r("AdsPromotedObjectTypes").REMINDER
                ? o(
                    "AdsPlacementIneligibilityReason",
                  ).createReminderPromotionReason()
                : null;
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { className: "x1jstp8q x14vqqas x2b8uid" }), (t[0] = a))
        : (a = t[0]);
      var i;
      return (
        t[1] !== n
          ? ((i = u.jsx(
              "div",
              babelHelpers.extends({}, a, {
                children: u.jsx(r("GeoBaseText.react"), {
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
    var m = {
        type: "placements/position",
        key: "instagram/search",
        name: r("AdsPlacementPositionLabelConstant").ig_search,
        apiPosition: "ig_search",
        placementPreviewImage:
          o("WebPixelRatio").get() >= 2
            ? r("bx").getURL(r("bx")("50878"))
            : r("bx").getURL(r("bx")("50877")),
        platformKey: "instagram",
        adsetValidators: [r("AdsCampaignInstagramSearchPositionValidator")],
        nameWithPlatform: s._(/*BTDS*/ "Instagram search results"),
        mediaRecommendation: o(
          "AdsInstagramSearchAdsUtils",
        ).shouldShowSearchGridPreviewWithoutExposure()
          ? {
              copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION
                .IG_SEARCH_FEED,
              imageCrop: r("AdImageSpecCropKeys")["100x100"],
              videoCrop: "1:1",
            }
          : {
              copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION
                .IG_SEARCH_FEED_IN_REELS,
              imageCrop: r("AdImageSpecCropKeys")["90x160"],
              videoCrop: "9:16",
            },
        getPlacementSpecificPreviewInfo: function (t) {
          var e = u.jsx(d, {
              children: s._(
                /*BTDS*/ "This placement includes both search results grid and feed.",
              ),
            }),
            n = u.jsx(d, {
              children: s._(
                /*BTDS*/ "This placement includes the search results feed only.",
              ),
            });
          return {
            description: o(
              "AdsInstagramSearchAdsUtils",
            ).shouldShowSearchGridPreview()
              ? e
              : n,
          };
        },
        isEnabled: function (t) {
          return r("AdsAccountUtils").hasCapabilityFromList(
            t,
            "CAN_USE_IG_SEARCH_PLACEMENT",
          );
        },
        getIneligibilityReason: function (t) {
          var e,
            n = o("AdsBwIPlacementUtils").getIneligibilityReason(t);
          if (n) return n;
          if (t.isReelsTrendingAds === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createReelsTrendingAdsReason();
          var a = o(
            "AdsPlacementConfigObjectiveEligibilityUtils",
          ).getObjectiveIneligibilityReasonForPlacementType(
            "instagram",
            "ig_search",
            t,
            !0,
          );
          if (a !== null) return a;
          var i = o("AdsODAXUtils").maybeTranslateObjective(
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
          if (
            o(
              "AdsInstagramLeadGenPlacementUtils",
            ).isInstagramLeadGenDestinationSelected(
              babelHelpers.extends({}, t, { objective: i }),
            ) &&
            !r("gkx")("21852")
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createInstagramLeadGenReason(t.objective);
          var l = o(
            "AdsPlacementConfigOptimizationGoalEligibilityUtils",
          ).getOptimizationGoalIneligibilityReasonForPlacementType(
            "instagram",
            "ig_search",
            t,
            !0,
          );
          if (l != null) return l;
          var s = t.buyingType,
            u = t.spec;
          if (t.containsDCO === !0)
            return o("AdsPlacementIneligibilityReason").createDCOReason();
          if (t.containsOffer === !0)
            return o("AdsPlacementIneligibilityReason").createOfferOptionReason(
              t.objective,
            );
          if (
            u.device_platforms &&
            !(
              (e = u.device_platforms) != null &&
              e.includes(r("AdsAPIDevicePlatform").MOBILE)
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(r("AdsAPIDevicePlatform").DESKTOP);
          if (o("AdsWhatsAppPlacementUtils").isIneligibleForIGSearch(t))
            return o("AdsPlacementIneligibilityReason").createWhatsAppReason(
              t.objective,
            );
          var d = c(t.promotedObjectType, t.objective);
          if (d != null) return d;
          if (s !== r("AdsBuyingTypes").AUCTION)
            return o("AdsPlacementIneligibilityReason").createBuyingTypeReason(
              s,
              m.key,
            );
          if (
            t.objective === r("AdsAPIObjectives").APP_INSTALLS &&
            t.promotedObjectType === r("AdsPromotedObjectTypes").CANVAS_APP
          )
            return o("AdsPlacementIneligibilityReason").createCanvasAppReason();
          if (t.destinationType === r("AdCampaignDestination").FACEBOOK_LIVE)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createFacebookLiveReason();
          if (
            o(
              "AdsUnifiedProfileVisitUtils",
            ).getIsIGPositionCondtionallyDisabledForUnifiedProfileVisits(
              t.objective,
              t.promotedObjectType,
              t.destinationType,
              t.optimizationGoal,
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createIGProfileVisitTrafficReason();
          if (t.destinationType === r("AdCampaignDestination").INSTAGRAM_LIVE)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createInstagramLiveReason();
          var p = o(
            "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
          ).getSOOBundleParentIneligibilityReason(m, t);
          return p != null ? p : null;
        },
        isActive: function (t) {
          return o("AdsPlacementAPISpecReaderUtils").isActivePosition(
            t,
            "instagram",
            "ig_search",
          );
        },
        isInactiveByDefault: function (t) {
          var e = o(
            "AdsPlacementConfigObjectiveEligibilityUtils",
          ).getObjectiveIneligibilityReasonForPlacementType(
            "instagram",
            "ig_search",
            t,
            !0,
          );
          return e === null ? r("gkx")("6899") : !0;
        },
        getPreviews: function (t) {
          return o("AdsInstagramSearchAdsUtils").shouldShowSearchGridPreview()
            ? r("immutable").OrderedSet([
                "previews/instagram_search_grid",
                "previews/instagram_search_feed",
              ])
            : r("immutable").OrderedSet(["previews/instagram_search_feed"]);
        },
        getDefaultPreview: function (t) {
          return o("AdsInstagramSearchAdsUtils").shouldShowSearchGridPreview()
            ? "previews/instagram_search_grid"
            : "previews/instagram_search_feed";
        },
        adsetReducer: function (t, n) {
          var e = n.action;
          if (
            !m.isEnabled(
              e.eligibilityInformation.capabilities,
              e.eligibilityInformation.account,
            )
          )
            return t;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removeGroups.includes("instagram/search")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      t,
                      "instagram/search",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                      "instagram",
                    );
                  })
                : e.addGroups.includes("instagram/search")
                  ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        t,
                        "instagram/search",
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
        parentPlacements: r("immutable").OrderedSet(["instagram/stream"]),
      },
      p = m;
    l.default = p;
  },
  226,
);
