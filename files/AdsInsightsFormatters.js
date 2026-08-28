__d(
  "AdsInsightsFormatters",
  [
    "invariant",
    "AdsCurrencyFormatter",
    "AdsDurationFormatter",
    "AdsInsightsCurrencyUtils",
    "AdsInsightsFormatType",
    "AdsInsightsValueTypes",
    "AdsReportRelevanceScorePositiveFeedbackLevel",
    "UnicodeBidiWrapper",
    "ads-lib-formatters",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        formatAPICurrency: o("AdsCurrencyFormatter")
          .formatCurrencyAtLeastOneSigFig,
        formatDuration: o("AdsDurationFormatter").formatDuration,
        formatFloat: o("ads-lib-formatters").createIntlNumberFormatter(2),
        formatInteger: o("ads-lib-formatters").createIntlNumberFormatter(0),
        formatLongInteger:
          o("ads-lib-formatters").createIntlLongNumberFormatter(0),
        formatPercentage: o("ads-lib-formatters").createIntlPercentFormatter(2),
      },
      d = function (t, n) {
        return o("UnicodeBidiWrapper").inline(
          c.formatAPICurrency(t, o("AdsInsightsCurrencyUtils").toAPI(t, n)),
        );
      },
      m = function (t, n) {
        return o("UnicodeBidiWrapper").inline(c.formatAPICurrency(t, n));
      },
      p = function (t) {
        return typeof t == "number"
          ? o("ads-lib-formatters").createIntlNumberFormatter(t)
          : c.formatFloat;
      },
      _ = function (t) {
        return typeof t == "number"
          ? o("ads-lib-formatters").createIntlPercentFormatter(t)
          : c.formatPercentage;
      },
      f = function (t) {
        var e = t.currencyCode,
          n = t.floatPrecision,
          o = t.formatType,
          a = t.percentagePrecison;
        switch (o) {
          case "CURRENCY":
            return (e || s(0, 5689), d.bind(null, e));
          case "CURRENCY_MINOR_UNITS":
            return (
              e || s(0, 5689),
              function (t) {
                return m(e, t);
              }
            );
          case "FLOAT":
            return p(n);
          case "INTEGER":
          case r("AdsInsightsFormatType").LONG_INTEGER:
            return c.formatInteger;
          case "PERCENT":
            return _(a);
          case "STRING":
          case "DATE":
            return function (e) {
              return e;
            };
          case "FEEDBACK":
            return function (e) {
              return r("AdsReportRelevanceScorePositiveFeedbackLevel")[e];
            };
          case "CUSTOM_DWELL":
            return (
              e || s(0, 5689),
              function (t) {
                return d(e, t * 1e3);
              }
            );
          case "DURATION":
            return c.formatDuration;
          default:
            s(0, 42869, o);
        }
      },
      g = function (t) {
        var e = t.valueType,
          n = f(t);
        return function (t) {
          return typeof t === o("AdsInsightsValueTypes").getJavaScriptType(e) &&
            t
            ? n(t)
            : null;
        };
      },
      h = function (t) {
        var e = t.valueType,
          n = f(t);
        return function (t) {
          return typeof t === o("AdsInsightsValueTypes").getJavaScriptType(e)
            ? n(t)
            : null;
        };
      },
      y = babelHelpers.extends({}, c, {
        formatCurrency: d,
        getFormatter: f,
        getNonZeroFormatter: g,
        getNullableFormatter: h,
      }),
      C = y;
    l.default = C;
  },
  98,
);
