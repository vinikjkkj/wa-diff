__d(
  "WAWebBizAiQuotaApproachingEligibleQuickPromotionFilter",
  [
    "WAWebCommonQPSurfacesTypes",
    "WAWebMetaOneGating",
    "WAWebMetaOneSubscriptionActions",
    "WAWebQuickPromotionValidatorUtils",
    "WAWebUserPrefsSubscription",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
        reason:
          "filtersRuleValidator:bizAiQuotaApproachingEligibleFilter: eligibility does not match expected",
      },
      s = {
        name: "whatsapp_biz_ai_quota_approaching_eligible",
        filter: function (n, r, a) {
          var t = o(
              "WAWebQuickPromotionValidatorUtils",
            ).convertFilterParametersIntoMap(r),
            i = t.get("param"),
            l = i != null && parseInt(i, 10) === 1,
            s =
              o(
                "WAWebUserPrefsSubscription",
              ).getSubscriptionsEntryPointEligibility().metaOne === !0 &&
              !o(
                "WAWebMetaOneSubscriptionActions",
              ).hasActiveMetaOneSubscription() &&
              o(
                "WAWebMetaOneGating",
              ).isMetaOneBizAiAdditionalEntryPointsEnabled();
          return s !== l ? e : o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
        },
      };
    l.bizAiQuotaApproachingEligibleFilter = s;
  },
  98,
);
