__d(
  "WAWebQuickPromotionEnabledTimeRuleValidator",
  ["WATimeUtils", "WAWebCommonQPSurfacesTypes"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = e.data,
        r = n.qpConfigEndTimeSeconds,
        a = n.qpConfigStartTimeSeconds,
        i = o("WATimeUtils").unixTime(),
        l = o("WATimeUtils").castToUnixTime(a);
      if (l > i)
        return o("WAWebCommonQPSurfacesTypes")
          .RESULT_FALSE_ENABLED_TIME_START_TIME_IN_FUTURE;
      var s = o("WATimeUtils").castToUnixTime(r);
      return s < i
        ? o("WAWebCommonQPSurfacesTypes")
            .RESULT_FALSE_ENABLED_TIME_END_TIME_IN_PAST
        : o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
    }
    l.enabledTimeRuleValidator = e;
  },
  98,
);
