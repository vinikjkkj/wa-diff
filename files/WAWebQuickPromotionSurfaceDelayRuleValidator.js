__d(
  "WAWebQuickPromotionSurfaceDelayRuleValidator",
  [
    "WATimeUtils",
    "WAWebCommonQPSurfacesTypes",
    "WAWebQuickPromotionCollection",
    "WAWebQuickPromotionValidatorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function (t, n) {
      var e,
        r = t.data.qpConfigSurfaceDelayTimeSeconds;
      if (r <= 0) return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
      var a = o(
        "WAWebQuickPromotionCollection",
      ).QuickPromotionCollection.getPromotionWithLastImpressionOnSurface(
        t.surfaceId,
      );
      if (
        a == null ||
        !o("WATimeUtils").isInFuture(
          o("WATimeUtils").futureUnixTime(r, a.lastImpressionTs),
        )
      )
        return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
      if (a.promotion.promotion.id !== t.id)
        return o("WAWebCommonQPSurfacesTypes")
          .RESULT_FALSE_SURFACE_DELAY_RECENTLY_USED;
      var i = (e = t.tracking.lastImpressionTs) != null ? e : t.ts,
        l = o(
          "WAWebQuickPromotionValidatorUtils",
        ).checkIsWithinEligibilityWindow(
          i,
          t.data.qpConfigEligibilityDurationMs,
        );
      return l
        ? o("WAWebCommonQPSurfacesTypes").RESULT_TRUE
        : o("WAWebCommonQPSurfacesTypes")
            .RESULT_FALSE_SURFACE_DELAY_OUTSIDE_ELIGIBILITY_DURATION;
    };
    l.surfaceDelayRuleValidator = e;
  },
  98,
);
