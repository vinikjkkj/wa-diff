__d(
  "WAWebMaibaOnboardedQuickPromotionFilter",
  [
    "WAWebBizAiAgentStatusUtils",
    "WAWebCommonQPSurfacesTypes",
    "WAWebQuickPromotionValidatorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
        reason:
          "filtersRuleValidator:maibaOnboardedFilter: onboarding state does not match expected",
      },
      s = {
        name: "whatsapp_biz_ai_has_onboarded_client",
        filter: function (n, r, a) {
          var t = o(
              "WAWebQuickPromotionValidatorUtils",
            ).convertFilterParametersIntoMap(r),
            i = t.get("param"),
            l = i != null && parseInt(i, 10) === 1;
          return o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent() !== l
            ? e
            : o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
        },
      };
    l.maibaOnboardedFilter = s;
  },
  98,
);
