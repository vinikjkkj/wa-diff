__d(
  "WAWebQuickPromotionClientTtlRuleValidator",
  ["WATimeUtils", "WAWebCommonQPSurfacesTypes"],
  function (t, n, r, o, a, i, l) {
    var e = function (t, n) {
      var e = t.data.qpConfigTtlSeconds,
        r = o("WATimeUtils").castToUnixTime(e);
      return o("WATimeUtils").isInFuture(
        o("WATimeUtils").futureUnixTime(r, t.ts),
      )
        ? o("WAWebCommonQPSurfacesTypes").RESULT_TRUE
        : o("WAWebCommonQPSurfacesTypes")
            .RESULT_FALSE_CLIENT_TTL_PROMOTION_TOO_OLD;
    };
    l.clientTtlRuleValidator = e;
  },
  98,
);
