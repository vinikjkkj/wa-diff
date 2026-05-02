__d(
  "WAWebQuickPromotionSurfaceDelayRuleValidator",
  [
    "WATimeUtils",
    "WAWebCommonQPSurfacesTypes",
    "WAWebQuickPromotionCollection",
    "WAWebQuickPromotionValidatorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        r = e.data.qpConfigSurfaceDelayTimeSeconds;
      if (r <= 0) return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
      var a = o(
        "WAWebQuickPromotionCollection",
      ).QuickPromotionCollection.getPromotionWithLastImpressionOnSurface(
        e.surfaceId,
      );
      if (
        a == null ||
        !o("WATimeUtils").isInFuture(
          o("WATimeUtils").futureUnixTime(r, a.lastImpressionTs),
        )
      )
        return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
      if (a.promotion.promotion.id !== e.id)
        return o("WAWebCommonQPSurfacesTypes")
          .RESULT_FALSE_SURFACE_DELAY_RECENTLY_USED;
      var i = (n = e.tracking.lastImpressionTs) != null ? n : e.ts,
        l = o(
          "WAWebQuickPromotionValidatorUtils",
        ).checkIsWithinEligibilityWindow(
          i,
          e.data.qpConfigEligibilityDurationMs,
        );
      return l
        ? o("WAWebCommonQPSurfacesTypes").RESULT_TRUE
        : o("WAWebCommonQPSurfacesTypes")
            .RESULT_FALSE_SURFACE_DELAY_OUTSIDE_ELIGIBILITY_DURATION;
    }
    l.surfaceDelayRuleValidator = e;
  },
  98,
);
