__d(
  "WAWebQuickPromotionActionLimitRuleValidator",
  ["WAWebCommonQPSurfacesTypes", "WAWebQuickPromotionValidatorUtils"],
  function (t, n, r, o, a, i, l) {
    var e = function (t, n) {
      var e,
        r = (e = t.data.qpConfigPacing) == null ? void 0 : e.promotionConfig;
      if (r != null) {
        var a,
          i = r.maxDismisses;
        if (i > 0 && t.tracking.dismisses >= i)
          return o("WAWebCommonQPSurfacesTypes")
            .RESULT_FALSE_ACTION_LIMIT_DISMISS_LIMIT_REACHED;
        var l = r.maxPrimaryClicks;
        if (l > 0 && t.tracking.primaryClicks >= l)
          return o("WAWebCommonQPSurfacesTypes")
            .RESULT_FALSE_ACTION_LIMIT_PRIMARY_CLICK_LIMIT_REACHED;
        var s = (a = t.tracking.lastImpressionTs) != null ? a : t.ts,
          u = o(
            "WAWebQuickPromotionValidatorUtils",
          ).checkIsWithinEligibilityWindow(
            s,
            t.data.qpConfigEligibilityDurationMs,
          ),
          c = r.maxImpressions;
        if (c > 0 && t.tracking.impressions >= c && !u)
          return o("WAWebCommonQPSurfacesTypes")
            .RESULT_FALSE_ACTION_LIMIT_IMPRESSION_LIMIT_REACHED;
      }
      return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
    };
    l.actionLimitRuleValidator = e;
  },
  98,
);
