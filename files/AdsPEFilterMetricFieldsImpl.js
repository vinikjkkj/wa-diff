__d(
  "AdsPEFilterMetricFieldsImpl",
  [
    "AdsGenericFilterFieldType",
    "AdsMgmtFlowSearchAndFilterMR2026H1GatingUtils",
    "AdsPECurrencyFilterMetrics",
    "AdsPEFilterTypes",
    "memoize",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "adgroup",
      s = "campaign",
      u = "campaignGroup";
    function c(t) {
      var n = t.split(".")[0];
      return n === "campaign" ? u : n === "adset" ? s : n === "ad" ? e : null;
    }
    var d = r("memoize")(function () {
        var e = o(
            "AdsMgmtFlowSearchAndFilterMR2026H1GatingUtils",
          ).getIsAccountInCurrencyHybridInputWithoutExposure(),
          t = new Set(
            e
              ? [].concat(
                  o("AdsPECurrencyFilterMetrics").currencyFieldTypeMetricsBase,
                  o("AdsPECurrencyFilterMetrics")
                    .currencyFieldTypeMetricsExtended,
                )
              : o("AdsPECurrencyFilterMetrics").currencyFieldTypeMetricsBase,
          ),
          n = {};
        return (
          Object.keys(r("AdsPEFilterTypes"))
            .filter(function (e) {
              return e.endsWith("_METRIC");
            })
            .forEach(function (e) {
              var o = r("AdsPEFilterTypes")[e],
                a = c(o);
              a != null &&
                (n[o] = {
                  fieldType: t.has(o)
                    ? r("AdsGenericFilterFieldType").CURRENCY
                    : r("AdsGenericFilterFieldType").NUMBER,
                  level: a,
                });
            }),
          n
        );
      }),
      m = d;
    l.default = m;
  },
  98,
);
