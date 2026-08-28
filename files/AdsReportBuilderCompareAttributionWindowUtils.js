__d(
  "AdsReportBuilderCompareAttributionWindowUtils",
  ["AdsInsightsAttributionWindows", "AdsInsightsConversionCountTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.filter(function (e) {
        return e !== "default";
      });
    }
    function s(t) {
      return t == null ? !1 : e(t).length > 0;
    }
    function u(e) {
      return e.filter(function (e) {
        return e !== "inline";
      });
    }
    function c(e) {
      return s(e);
    }
    function d(e, t, n) {
      return e && t != null ? t : n;
    }
    function m(e, t) {
      return d(c(e), e, t);
    }
    function p(e) {
      switch (e) {
        case "1d_click":
        case "1d_click_all_conversions":
          return "1d_click_first_conversion";
        case "7d_click":
        case "7d_click_all_conversions":
          return "7d_click_first_conversion";
        case "28d_click":
        case "28d_click_all_conversions":
          return "28d_click_first_conversion";
        case "1d_view":
        case "1d_view_all_conversions":
          return "1d_view_first_conversion";
        case "1d_ev":
        case "1d_ev_all_conversions":
          return "1d_ev_first_conversion";
        case "incrementality":
        case "incrementality_all_conversions":
          return "incrementality_first_conversion";
        default:
          return e;
      }
    }
    function _(t, n) {
      var r = ["default"],
        a = [];
      n.length === 1 &&
      n[0] ===
        o("AdsInsightsConversionCountTypes").AdsInsightsConversionCount
          .ALL_AND_FIRST
        ? (a = [
            o("AdsInsightsConversionCountTypes").AdsInsightsConversionCount.ALL,
            o("AdsInsightsConversionCountTypes").AdsInsightsConversionCount
              .FIRST,
          ])
        : (a = n);
      var i = e(t);
      return (
        i.forEach(function (e) {
          (o("AdsInsightsAttributionWindows").isSKAN(e) ||
            o("AdsInsightsAttributionWindows").isPassback(e)) &&
            r.push(e);
        }),
        (i = i.filter(function (e) {
          return (
            !o("AdsInsightsAttributionWindows").isSKAN(e) &&
            !o("AdsInsightsAttributionWindows").isPassback(e)
          );
        })),
        i.forEach(function (e) {
          a.forEach(function (t) {
            t ===
            o("AdsInsightsConversionCountTypes").AdsInsightsConversionCount.ALL
              ? r.push(y(e))
              : t ===
                  o("AdsInsightsConversionCountTypes")
                    .AdsInsightsConversionCount.FIRST && r.push(p(e));
          });
        }),
        r
      );
    }
    function f(e) {
      var t = [];
      return (
        e.forEach(function (e) {
          o("AdsInsightsAttributionWindows").isAllConversion(e)
            ? t.includes(
                o("AdsInsightsConversionCountTypes").AdsInsightsConversionCount
                  .ALL,
              ) ||
              t.push(
                o("AdsInsightsConversionCountTypes").AdsInsightsConversionCount
                  .ALL,
              )
            : o("AdsInsightsAttributionWindows").isFirstConversion(e) &&
              (t.includes(
                o("AdsInsightsConversionCountTypes").AdsInsightsConversionCount
                  .FIRST,
              ) ||
                t.push(
                  o("AdsInsightsConversionCountTypes")
                    .AdsInsightsConversionCount.FIRST,
                ));
        }),
        t
      );
    }
    function g(e) {
      switch (e) {
        case "1d_click_first_conversion":
          return "1d_click";
        case "7d_click_first_conversion":
          return "7d_click";
        case "28d_click_first_conversion":
          return "28d_click";
        case "1d_view_first_conversion":
          return "1d_view";
        case "1d_ev_first_conversion":
          return "1d_ev";
        case "incrementality_first_conversion":
          return "incrementality";
        default:
          return e;
      }
    }
    function h(e) {
      switch (e) {
        case "1d_click_all_conversions":
          return "1d_click";
        case "7d_click_all_conversions":
          return "7d_click";
        case "28d_click_all_conversions":
          return "28d_click";
        case "1d_view_all_conversions":
          return "1d_view";
        case "1d_ev_all_conversions":
          return "1d_ev";
        case "incrementality_all_conversions":
          return "incrementality";
        default:
          return e;
      }
    }
    function y(e) {
      switch (e) {
        case "1d_click":
          return "1d_click_all_conversions";
        case "7d_click":
          return "7d_click_all_conversions";
        case "28d_click":
          return "28d_click_all_conversions";
        case "1d_view":
          return "1d_view_all_conversions";
        case "1d_ev":
          return "1d_ev_all_conversions";
        case "incrementality":
          return "incrementality_all_conversions";
        default:
          return e;
      }
    }
    function C(e) {
      return h(g(e));
    }
    function b(e) {
      var t = [];
      return (
        e.forEach(function (e) {
          var n = C(e);
          t.includes(n) || t.push(n);
        }),
        t
      );
    }
    var v = [
      "1d_click",
      "7d_click",
      "28d_click",
      "1d_view",
      "1d_ev",
      "incrementality",
    ];
    ((l.getAttributionWindowsWithoutDefault = e),
      (l.hasNonDefaultAttributionWindows = s),
      (l.getAttributionWindowsWithoutInline = u),
      (l.getIsCompareAttributionFeatureOn = c),
      (l.getAttributionWindowsWithCAW = d),
      (l.getAttributionWindowsIfCAWIsOn = m),
      (l.convertAllConversionToFirstConversion = p),
      (l.matchAllAndFirstConversionAttributionWindows = _),
      (l.fetchConversionCounts = f),
      (l.convertPlainAttributionWindowToAllConversion = y),
      (l.convertFirstAndAllConversionToPlainConversion = C),
      (l.convertFirstAndAllAttributionToUniquePlainWindows = b),
      (l.metaAttributionWindows = v));
  },
  98,
);
