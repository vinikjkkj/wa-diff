__d(
  "WAMOUnknownAgeUtils",
  [
    "AdsAdditionalOptionsConsts",
    "AdsAdditionalOptionsToggleF2Action",
    "AdsCampaignRawSpecUtils",
    "AdsDataAtom",
    "AdsPlacementsWhatsAppMarketingMessagePositionPlugin",
    "AdsPlacementsWhatsAppStatusPositionPlugin",
    "AdsTargetingAccountControlInfoProvider",
    "AdsUEditorCampaignSetUserAgeUnknownAction",
    "AdsUEditorSelectManualSavedAudienceInAdvantageAudienceUnknownAgeAction",
    "AdsValidationConsts",
    "WAMOHecCountryRelaxationUtils",
    "WAMOStatusAdsManagerUtils",
    "setUserAgeUnknownMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      if (t == null) return null;
      var n = t.length,
        r = t.filter(function (e) {
          return (
            o("WAMOStatusAdsManagerUtils").isWAMOStatusSelectedFromCampaign(
              e,
            ) ||
            o("WAMOStatusAdsManagerUtils").isWAMMUnknownAgeEligibleForCampaign(
              e,
            )
          );
        }).length,
        a = t.filter(function (e) {
          return (
            o(
              "WAMOStatusAdsManagerUtils",
            ).isMarketingMessagesSelectedFromCampaign(e) &&
            !o("WAMOStatusAdsManagerUtils").isWAMOStatusSelectedFromCampaign(
              e,
            ) &&
            !o("WAMOStatusAdsManagerUtils").isWAMMUnknownAgeEligibleForCampaign(
              e,
            )
          );
        }).length;
      return {
        accountID: e,
        numCampaigns: n,
        numCampaignsWithUnknownAgeSupport: r,
        numCampaignsWithMarketingMessagesButNoUASupport: a,
      };
    }
    function u(e) {
      var t,
        n,
        o = r("AdsTargetingAccountControlInfoProvider")
          .toFluxStore()
          .getState()
          .get(e);
      return (t =
        o == null ||
        (n = o.getValue()) == null ||
        (n = n.audience_controls) == null
          ? void 0
          : n.age_min) != null
        ? t
        : r("AdsValidationConsts").minWAMOStatusAge;
    }
    function c(t, n, a, l) {
      var s;
      if (
        (!o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForUnknownAge() &&
          !o(
            "WAMOStatusAdsManagerUtils",
          ).isAdAccountEligibleForWAMMUnknownAge()) ||
        (!o("WAMOStatusAdsManagerUtils").isWAMOStatusSelected(a) &&
          !(
            o("WAMOStatusAdsManagerUtils").isWAMMUnknownAgeEligiblePlacement(
              a,
            ) &&
            o(
              "WAMOStatusAdsManagerUtils",
            ).isWAMMUnknownAgeEligibleOptimizationGoal(t.optimization_goal)
          )) ||
        u(t.account_id.valueOf()) !==
          r("AdsValidationConsts").minWAMOStatusAge ||
        o("WAMOHecCountryRelaxationUtils").isUnknownAgeForceDisabledForUsCaHec(
          a.specialAdCategories,
          a.specialAdCategoryCountry,
        )
      )
        return (d(t, null, l), null);
      var c = (s = t.targeting.user_age_unknown) == null ? void 0 : s.valueOf(),
        m = n.targeting.user_age_unknown;
      return c === !0 && m == null
        ? ((e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
            r("AdsAdditionalOptionsToggleF2Action").dispatch(
              {
                sectionKey: o("AdsAdditionalOptionsConsts")
                  .AdditionalOptionsSections.targeting,
                visibility: "visible",
              },
              { line: "152", module: "WAMOUnknownAgeUtils.js", moduleID: i.id },
            );
          }),
          d(t, null, l),
          e.addPostDispatchCallback(function () {
            r(
              "AdsUEditorSelectManualSavedAudienceInAdvantageAudienceUnknownAgeAction",
            ).dispatch(
              { campaignIDs: [t.id.valueOf()], hostID: l },
              { line: "159", module: "WAMOUnknownAgeUtils.js", moduleID: i.id },
            );
          }),
          null)
        : (d(t, m, l), m);
    }
    function d(t, n, o) {
      (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
        r("AdsUEditorCampaignSetUserAgeUnknownAction").dispatch(
          { campaignIDs: [t.id.valueOf()], hostID: o, value: n },
          { line: "179", module: "WAMOUnknownAgeUtils.js", moduleID: i.id },
        );
      });
    }
    function m(e) {
      var t, n;
      if (
        !o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForUnknownAge() &&
        !o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForWAMMUnknownAge()
      )
        return !1;
      var a = r("AdsTargetingAccountControlInfoProvider")
          .toFluxStore()
          .getState()
          .get(e),
        i =
          (t =
            a == null ||
            (n = a.getValue()) == null ||
            (n = n.audience_controls) == null
              ? void 0
              : n.age_min) != null
            ? t
            : r("AdsValidationConsts").minWAMOStatusAge;
      return i === r("AdsValidationConsts").minWAMOStatusAge;
    }
    function p(e, t, n) {
      if (
        e == null ||
        (!o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForUnknownAge() &&
          !o(
            "WAMOStatusAdsManagerUtils",
          ).isAdAccountEligibleForWAMMUnknownAge())
      )
        return n;
      var a = n.targeting.user_age_unknown == null,
        i = o("AdsCampaignRawSpecUtils").isAutomaticPlacements(n);
      if (
        !i ||
        !a ||
        !m(e) ||
        o("WAMOHecCountryRelaxationUtils").isUnknownAgeForceDisabledForUsCaHec(
          t.specialAdCategories,
          t.specialAdCategoryCountry,
        )
      )
        return n;
      if (o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForUnknownAge()) {
        var l =
          r("AdsPlacementsWhatsAppStatusPositionPlugin").getIneligibilityReason(
            t,
          ) === null;
        if (l && o("WAMOStatusAdsManagerUtils").isWAMOStatusEligibleByDefault())
          return r("setUserAgeUnknownMutator")(n, !0);
      }
      if (
        o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForWAMMUnknownAge() &&
        o("WAMOStatusAdsManagerUtils").isWAMMUnknownAgeEligibleOptimizationGoal(
          n.optimization_goal,
        )
      ) {
        var s =
            r(
              "AdsPlacementsWhatsAppMarketingMessagePositionPlugin",
            ).getIneligibilityReason(t) === null,
          u =
            (r("AdsPlacementsWhatsAppMarketingMessagePositionPlugin")
              .isInactiveByDefault == null
              ? void 0
              : r(
                  "AdsPlacementsWhatsAppMarketingMessagePositionPlugin",
                ).isInactiveByDefault(t)) !== !0;
        if (s && u) return r("setUserAgeUnknownMutator")(n, !0);
      }
      return n;
    }
    ((l.getWAMOCampaignsStatusInfoForSavedAudience = s),
      (l.updateUnknownAgeForSetManualSavedAudienceInAdvantageAudienceTargetSpec =
        c),
      (l.isAccountAgeSettingEligibleForUnknownAge = m),
      (l.MaybeOptInUserAgeUnknownForCFOnly = p));
  },
  98,
);
