__d(
  "WAWebQuickPromotionClientTtlRuleValidator",
  ["WATimeUtils", "WAWebCommonQPSurfacesTypes"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = e.data.qpConfigTtlSeconds,
        r = o("WATimeUtils").castToUnixTime(n);
      return o("WATimeUtils").isInFuture(
        o("WATimeUtils").futureUnixTime(r, e.ts),
      )
        ? o("WAWebCommonQPSurfacesTypes").RESULT_TRUE
        : o("WAWebCommonQPSurfacesTypes")
            .RESULT_FALSE_CLIENT_TTL_PROMOTION_TOO_OLD;
    }
    l.clientTtlRuleValidator = e;
  },
  98,
);
