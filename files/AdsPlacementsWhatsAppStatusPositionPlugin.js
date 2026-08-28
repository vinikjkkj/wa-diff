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
    "AdsAccountStore",
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
    "AdsTargetingAccountControlInfoProvider",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "AdsValidationConsts",
    "AdsWAMOSensitiveAdvertisersUtils",
    "WAMOStatusAdsManagerUtils",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "getWAMOStatusSACIneligibilityReason",
    "gkx",
    "immutable",
    "setUserAgeUnknownMutator",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e;
    function c(e) {
      return o(
        "WAMOStatusAdsManagerUtils",
      ).isAdAccountEligibleForWAMMUnknownAge() &&
        o(
          "WAMOStatusAdsManagerUtils",
        ).isOnlyMarketingMessagesSelectedFromCampaign(e)
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
      var t;
      return o(
        "WAMOStatusAdsManagerUtils",
      ).isAdAccountEligibleForCTWEBExpansion()
        ? p(
            e.objective,
            e.conversionLocations,
            e.promotedObjectType,
            e.destinationType,
          )
        : m(
            (t = e.destinationType) != null
              ? t
              : r("AdCampaignDestination").UNDEFINED,
            e.objective,
          );
    }
    function f(e) {
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
    function g(e, t) {
      var n,
        a = e.getIn(["targeting", "user_age_unknown"]),
        i =
          e.saved_audience_id != null ||
          ((n = e.saved_audience) == null ? void 0 : n.id) != null;
      return (
        o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForUnknownAge() &&
        t === r("AdsValidationConsts").minWAMOStatusAge &&
        a == null &&
        !i
      );
    }
    function h() {
      return r("gkx")("19623") ? u("947347") : u("838299");
    }
    var y = {
        type: "placements/position",
        key: "whatsapp/status",
        name: r("AdsPlacementPositionLabelConstant").status,
        nameWithPlatform: s._(/*BTDS*/ "WhatsApp Status"),
        mediaRecommendation: {
          copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION.WAMO_STATUS,
          imageCrop: r("AdImageSpecCropKeys")["90x160"],
          videoCrop: "9:16",
        },
        apiPosition: "status",
        placementPreviewImage: h(),
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
          ).getSOOBundleParentIneligibilityReason(y, t);
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
          var i = f(t);
          if (i != null) return i;
          if (t.productSetID != null) {
            var l = o(
              "WAMOStatusAdsManagerUtils",
            ).isAdAccountEligibleForDPACreation();
            if (!l)
              return o(
                "AdsPlacementIneligibilityReason",
              ).createWAMOStatusProductCatalogReason();
            var s = t.catalogVertical,
              u =
                s == null ||
                o(
                  "WAMOStatusAdsManagerUtils",
                ).isCatalogVerticalSupportedForDPACreation(s);
            if (s != null && !u)
              return o(
                "AdsPlacementIneligibilityReason",
              ).createWAMOStatusProductCatalogReason();
          }
          var c = _(t);
          if (c != null) return c;
          var d = o(
            "WAMOStatusAdsManagerUtils",
          ).getWAMOStatusEligibleOptimizationGoal(t.objective);
          if (
            t.destinationType === r("AdCampaignDestination").ON_POST ||
            (t.optimizationGoal != null && !d.includes(t.optimizationGoal))
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
            );
          var m = r("getWAMOStatusSACIneligibilityReason")(
            t.specialAdCategories,
          );
          return m != null
            ? m
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
          var e,
            a,
            i,
            l = n.action,
            s = r("AdsAccountStore").getSelectedAccount().getValue(),
            u = r("AdsTargetingAccountControlInfoProvider")
              .toFluxStore()
              .getState()
              .get((e = s == null ? void 0 : s.account_id) != null ? e : ""),
            d =
              (a =
                u == null ||
                (i = u.getValue()) == null ||
                (i = i.audience_controls) == null
                  ? void 0
                  : i.age_min) != null
                ? a
                : r("AdsValidationConsts").minWAMOStatusAge;
          switch (l.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return l.removeGroups.includes("whatsapp/status")
                ? o("AdsMutators").mutateEach(t, l.campaignIDs, function (e) {
                    var t = o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      e,
                      "whatsapp/status",
                      l.eligibilityInformation,
                      r("AdsAPITargetFields").WHATSAPP_POSITIONS,
                      "whatsapp",
                    );
                    return c(t);
                  })
                : l.addGroups.includes("whatsapp/status")
                  ? o("AdsMutators").mutateEach(t, l.campaignIDs, function (e) {
                      var t = o("AdsPlacementAPISpecWriterUtils").addGroup(
                        e,
                        "whatsapp/status",
                        l.eligibilityInformation,
                        r("AdsAPITargetFields").WHATSAPP_POSITIONS,
                        "whatsapp",
                      );
                      return g(t, d) ? r("setUserAgeUnknownMutator")(t, !0) : t;
                    })
                  : t;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(t, l.ids, function (e) {
                var t = o("AdsPlacementAPISpecWriterUtils").addGroup(
                  e,
                  l.pluginKey,
                  l.eligibilityInformation,
                  r("AdsAPITargetFields").WHATSAPP_POSITIONS,
                  "whatsapp",
                );
                return g(t, d) ? r("setUserAgeUnknownMutator")(t, !0) : t;
              });
            case o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType:
              return o("AdsMutators").mutateEach(
                t,
                l.campaignIDs,
                function (e) {
                  var t = o("AdsPlacementAPISpecWriterUtils").removeGroup(
                    e,
                    l.pluginKey,
                    l.eligibilityInformation,
                    r("AdsAPITargetFields").WHATSAPP_POSITIONS,
                    "whatsapp",
                  );
                  return c(t);
                },
              );
          }
          return t;
        },
      },
      C = y;
    l.default = C;
  },
  226,
);
