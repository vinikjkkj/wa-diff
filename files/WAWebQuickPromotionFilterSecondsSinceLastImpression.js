__d(
  "WAWebQuickPromotionFilterSecondsSinceLastImpression",
  [
    "WALogger",
    "WAWebCommonQPSurfacesTypes",
    "WAWebQuickPromotionValidatorUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, n) {
      var a = t.tracking.lastImpressionTs,
        i = a != null ? a : t.ts,
        l = o(
          "WAWebQuickPromotionValidatorUtils",
        ).checkIsWithinEligibilityWindow(
          i,
          t.data.qpConfigEligibilityDurationMs,
        );
      if (l || a == null) return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
      var u = o(
          "WAWebQuickPromotionValidatorUtils",
        ).convertFilterParametersIntoMap(n),
        d = u.get("param");
      if (d == null)
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  'secondsSinceLastImpressionFilter: missing "param"',
                ])),
            )
            .sendLogs("quick-promotion-filter-missing-parameter"),
          r("err")('secondsSinceLastImpressionFilter: missing "param"')
        );
      var m = parseInt(d, 10);
      if (Number.isNaN(m))
        throw (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  'secondsSinceLastImpressionFilter: "param" is not an integer',
                ])),
            )
            .sendLogs("quick-promotion-filter-parameter-incorrect"),
          r("err")(
            'secondsSinceLastImpressionFilter: "param" is not an integer',
          )
        );
      return c(
        !o("WAWebQuickPromotionValidatorUtils").checkIsWithinEligibilityWindow(
          a,
          m * 1e3,
        ),
      );
    }
    function c(e) {
      return e
        ? o("WAWebCommonQPSurfacesTypes").RESULT_TRUE
        : o("WAWebCommonQPSurfacesTypes")
            .RESULT_FALSE_FILTERS_SECONDS_SINCE_LAST_IMPRESSION;
    }
    var d = { name: "seconds_since_last_impression", filter: u };
    l.secondsSinceLastImpressionFilter = d;
  },
  98,
);
