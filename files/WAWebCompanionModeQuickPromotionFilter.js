__d(
  "WAWebCompanionModeQuickPromotionFilter",
  ["WAWebCommonQPSurfacesTypes", "WAWebQuickPromotionValidatorUtils"],
  function (t, n, r, o, a, i, l) {
    var e = {
        reason:
          "filtersRuleValidator:companionModeFilter: companion state does not match expected",
      },
      s = {
        name: "whatsapp_user_is_in_companion_mode",
        filter: function (n, r, a) {
          var t = o(
              "WAWebQuickPromotionValidatorUtils",
            ).convertFilterParametersIntoMap(r),
            i = t.get("param"),
            l = i != null && parseInt(i, 10) === 1,
            s = !0;
          return s !== l ? e : o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
        },
      };
    l.companionModeFilter = s;
  },
  98,
);
