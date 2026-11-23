__d(
  "AdsPlacementsWhatsAppStatusPositionPlugin",
  [
    "fbt",
    "ix",
    "AdCampaignDestination",
    "AdImageSpecCropKeys",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAPITargetFields",
    "AdsBwIPlacementUtils",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsCampaignWhatsAppStatusPositionValidator",
    "AdsManagerIGLoginUtils",
    "AdsMutators",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementCopy",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementPositionLabelConstant",
    "AdsPromotedObjectTypes",
    "AdsReachFrequencyPlacementUtils",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "AdsWAMOSensitiveAdvertisersUtils",
    "WAMOStatusAdsManagerUtils",
    "canDefaultUnknownAgeToOn",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "getWAMOStatusGoalLimitIneligibilityReason",
    "getWAMOStatusSACIneligibilityReason",
    "gkx",
    "immutable",
    "setUserAgeUnknownMutator",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e;
    function c(e) {
      return o("WAMOStatusAdsManagerUtils").isWAMMUnknownAgeEligibleForCampaign(
        e,
      )
        ? e
        : r("setUserAgeUnknownMutator")(e, null);
    }
    var d = [
      (e = r("AdCampaignDestination")).ON_POST,
      e.ON_EVENT,
      e.ON_VIDEO,
      e.ON_REMINDER,
    ];
    function m(e, t) {
      var n = o(
        "WAMOStatusAdsManagerUtils",
      ).getWAMOStatusEligibleDestinationTypes(t);
      return n.includes(e != null ? e : r("AdCampaignDestination").UNDEFINED)
        ? null
        : t === r("AdsAPIObjectives").OUTCOME_LEADS
          ? o(
              "AdsPlacementIneligibilityReason",
            ).createWAMOStatusDestinationInLeadObjectiveReason()
          : o(
              "AdsPlacementIneligibilityReason",
            ).createWAMOStatusDestinationReason();
    }
    function p(e, t, n, a) {
      var i = o(
          "WAMOStatusAdsManagerUtils",
        ).getWAMOStatusEligibleDestinationTypes(e),
        l = o(
          "WAMOStatusAdsManagerUtils",
        ).getWAMOStatusEligiblePromotedObjectTypes(e),
        s = !1;
      return (
        t != null
          ? (s =
              l.includes(t) &&
              i.includes(a != null ? a : r("AdCampaignDestination").UNDEFINED))
          : (s =
              l.includes(n != null ? n : r("AdsPromotedObjectTypes").NONE) &&
              i.includes(a != null ? a : r("AdCampaignDestination").UNDEFINED)),
        d.includes(a != null ? a : r("AdCampaignDestination").UNDEFINED) || s
          ? null
          : o(
              "AdsPlacementIneligibilityReason",
            ).createWAMOStatusConversionLocationReason(e)
      );
    }
    function _(e) {
      var t,
        n,
        o =
          ((t = e.destinationType) != null
            ? t
            : r("AdCampaignDestination").UNDEFINED) ===
          r("AdCampaignDestination").UNDEFINED;
      return o &&
        ((n = e.conversionLocations) != null ? n : e.promotedObjectType) ===
          r("AdsPromotedObjectTypes").MESSENGER
        ? r("AdCampaignDestination").MESSENGER
        : e.destinationType;
    }
    function f(e) {
      var t = _(e);
      return o(
        "WAMOStatusAdsManagerUtils",
      ).isAdAccountEligibleForCTWEBExpansion()
        ? p(e.objective, e.conversionLocations, e.promotedObjectType, t)
        : m(t != null ? t : r("AdCampaignDestination").UNDEFINED, e.objective);
    }
    function g(e) {
      var t,
        n = o("WAMOStatusAdsManagerUtils").getWAMOStatusEligibleObjectives();
      return n.includes(e.objective)
        ? null
        : o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForEUExpansion()
          ? o(
              "AdsPlacementIneligibilityReason",
            ).createWAMOStatusEUObjectiveReason()
          : o("AdsPlacementIneligibilityReason").createObjectiveReason(
              e.objective,
              e.capabilities,
              (t = e.isODAXCampaignGroup) != null ? t : !1,
            );
    }
    function h(e, t) {
      return (
        o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForUnknownAge() &&
        !o("WAMOStatusAdsManagerUtils").isUnsupportedAppStoreForWAMOStatus(t) &&
        r("canDefaultUnknownAgeToOn")(e, t)
      );
    }
    function y() {
      return r("gkx")("19623") ? u("947347") : u("838299");
    }
    var C = {
        type: "placements/position",
        key: "whatsapp/status",
        name: r("AdsPlacementPositionLabelConstant").status,
        nameWithPlatform: s._(/*BTDS*/ ""),
        mediaRecommendation: {
          copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION.WAMO_STATUS,
          imageCrop: r("AdImageSpecCropKeys")["90x160"],
          videoCrop: "9:16",
        },
        apiPosition: "status",
        placementPreviewImage: y(),
        platformKey: "whatsapp",
        isEnabled: function (t) {
          return o(
            "WAMOStatusAdsManagerUtils",
          ).isAdAccountEligibleForWAMOStatus();
        },
        getIneligibilityReason: function (t) {
          var e = o("AdsBwIPlacementUtils").getIneligibilityReason(t);
          if (e) return e;
          var n = o(
            "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
          ).getSOOBundleParentIneligibilityReason(C, t);
          if (n != null) return n;
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
          if (t.isReelsTrendingAds === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createReelsTrendingAdsReason();
          var a = o(
            "AdsReachFrequencyPlacementUtils",
          ).getReachFrequencyDisabledReason("whatsapp/status", t);
          if (a != null) return a;
          if (t.containsDCO === !0)
            return o("AdsPlacementIneligibilityReason").createDCOReason();
          if (t.containsOffer === !0)
            return o("AdsPlacementIneligibilityReason").createOfferOptionReason(
              t.objective,
            );
          if (o("AdsManagerIGLoginUtils").getIsIGLogin(t.account))
            return o("AdsPlacementIneligibilityReason").createIGLoginReason();
          var i = g(t);
          if (i != null) return i;
          if (
            o("WAMOStatusAdsManagerUtils").isUnsupportedAppStoreForWAMOStatus(t)
          )
            return o("AdsPlacementIneligibilityReason").createCustomReason(
              s._(/*BTDS*/ ""),
            );
          if (t.productSetID != null) {
            var l = o(
              "WAMOStatusAdsManagerUtils",
            ).isAdAccountEligibleForDPACreation();
            if (!l)
              return o(
                "AdsPlacementIneligibilityReason",
              ).createWAMOStatusProductCatalogReason();
            var u = t.catalogVertical,
              c =
                u == null ||
                o(
                  "WAMOStatusAdsManagerUtils",
                ).isCatalogVerticalSupportedForDPACreation(u);
            if (u != null && !c)
              return o(
                "AdsPlacementIneligibilityReason",
              ).createWAMOStatusProductCatalogReason();
          }
          var d = f(t);
          if (d != null) return d;
          var m = o(
            "WAMOStatusAdsManagerUtils",
          ).getWAMOStatusEligibleOptimizationGoal(t.objective);
          if (
            t.destinationType === r("AdCampaignDestination").ON_POST ||
            (t.optimizationGoal != null && !m.includes(t.optimizationGoal))
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createWAMOIneligibilityOptimizationGoalReason(
              t.objective,
              t.promotedObjectType,
              !o(
                "WAMOStatusAdsManagerUtils",
              ).isAdAccountEligibleForCTWEBExpansion(),
              o(
                "WAMOStatusAdsManagerUtils",
              ).isAdAccountEligibleForEUExpansion(),
              o(
                "WAMOStatusAdsManagerUtils",
              ).isAdAccountEligibleForLPVExpansion(),
              o(
                "WAMOStatusAdsManagerUtils",
              ).isAdAccountEligibleForOCExpansion() &&
                t.optimizationGoal === r("AdsAPIOptimizationGoals").VALUE,
              o(
                "WAMOStatusAdsManagerUtils",
              ).isAdAccountEligibleForLeadGenExpansion() &&
                t.optimizationGoal ===
                  r("AdsAPIOptimizationGoals").QUALITY_LEAD &&
                !m.includes(t.optimizationGoal),
              t.optimizationGoal === r("AdsAPIOptimizationGoals").LINK_CLICKS &&
                o("WAMOStatusAdsManagerUtils").isWAMOStatusAppPromotion(
                  t.objective,
                ),
            );
          var p = r("getWAMOStatusGoalLimitIneligibilityReason")(t);
          if (p != null) return p;
          var _ = r("getWAMOStatusSACIneligibilityReason")(
            t.specialAdCategories,
            t.specialAdCategoryCountry,
          );
          return _ != null
            ? _
            : t.spec.device_platforms &&
                !t.spec.device_platforms.includes(
                  r("AdsAPIDevicePlatform").MOBILE,
                )
              ? o("AdsPlacementIneligibilityReason").createDevicePlatformReason(
                  r("AdsAPIDevicePlatform").DESKTOP,
                )
              : t.usingAdSequencing === !0
                ? o(
                    "AdsPlacementIneligibilityReason",
                  ).createAdSequencingReason()
                : null;
        },
        isActive: function (t) {
          return o("AdsPlacementAPISpecReaderUtils").isActivePosition(
            t,
            "whatsapp",
            "status",
          );
        },
        isInactiveByDefault: function (t) {
          var e = o(
              "WAMOStatusAdsManagerUtils",
            ).isAdAccountEligibleForWAMOStatus(),
            n = r("AdsWAMOSensitiveAdvertisersUtils").is_default_off_accounts;
          return (
            !e ||
            n ||
            o("WAMOStatusAdsManagerUtils").isAPlusPBlockedForOCHoldout(
              t.optimizationGoal,
            )
          );
        },
        adsetValidators: [r("AdsCampaignWhatsAppStatusPositionValidator")],
        getPreviews: function (t) {
          return r("immutable").OrderedSet(["previews/whatsapp_status"]);
        },
        getDefaultPreview: function () {
          return "previews/whatsapp_status";
        },
        adsetReducer: function (t, n) {
          var e = n.action;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removeGroups.includes("whatsapp/status")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    var n = o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      t,
                      "whatsapp/status",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").WHATSAPP_POSITIONS,
                      "whatsapp",
                    );
                    return c(n);
                  })
                : e.addGroups.includes("whatsapp/status")
                  ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                      var n = o("AdsPlacementAPISpecWriterUtils").addGroup(
                        t,
                        "whatsapp/status",
                        e.eligibilityInformation,
                        r("AdsAPITargetFields").WHATSAPP_POSITIONS,
                        "whatsapp",
                      );
                      return h(n, e.eligibilityInformation)
                        ? r("setUserAgeUnknownMutator")(n, !0)
                        : n;
                    })
                  : t;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(t, e.ids, function (t) {
                var n = o("AdsPlacementAPISpecWriterUtils").addGroup(
                  t,
                  e.pluginKey,
                  e.eligibilityInformation,
                  r("AdsAPITargetFields").WHATSAPP_POSITIONS,
                  "whatsapp",
                );
                return h(n, e.eligibilityInformation)
                  ? r("setUserAgeUnknownMutator")(n, !0)
                  : n;
              });
            case o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType:
              return o("AdsMutators").mutateEach(
                t,
                e.campaignIDs,
                function (t) {
                  var n = o("AdsPlacementAPISpecWriterUtils").removeGroup(
                    t,
                    e.pluginKey,
                    e.eligibilityInformation,
                    r("AdsAPITargetFields").WHATSAPP_POSITIONS,
                    "whatsapp",
                  );
                  return c(n);
                },
              );
          }
          return t;
        },
      },
      b = C;
    l.default = b;
  },
  226,
);
