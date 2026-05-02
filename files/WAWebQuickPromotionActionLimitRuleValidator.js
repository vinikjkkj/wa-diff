__d(
  "WAWebQuickPromotionActionLimitRuleValidator",
  ["WAWebCommonQPSurfacesTypes", "WAWebQuickPromotionValidatorUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        r = (n = e.data.qpConfigPacing) == null ? void 0 : n.promotionConfig;
      if (r != null) {
        var a,
          i = r.maxDismisses;
        if (i > 0 && e.tracking.dismisses >= i)
          return o("WAWebCommonQPSurfacesTypes")
            .RESULT_FALSE_ACTION_LIMIT_DISMISS_LIMIT_REACHED;
        var l = r.maxPrimaryClicks;
        if (l > 0 && e.tracking.primaryClicks >= l)
          return o("WAWebCommonQPSurfacesTypes")
            .RESULT_FALSE_ACTION_LIMIT_PRIMARY_CLICK_LIMIT_REACHED;
        var s = (a = e.tracking.lastImpressionTs) != null ? a : e.ts,
          u = o(
            "WAWebQuickPromotionValidatorUtils",
          ).checkIsWithinEligibilityWindow(
            s,
            e.data.qpConfigEligibilityDurationMs,
          ),
          c = r.maxImpressions;
        if (c > 0 && e.tracking.impressions >= c && !u)
          return o("WAWebCommonQPSurfacesTypes")
            .RESULT_FALSE_ACTION_LIMIT_IMPRESSION_LIMIT_REACHED;
      }
      return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
    }
    l.actionLimitRuleValidator = e;
  },
  98,
);
