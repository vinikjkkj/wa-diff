__d(
  "validateWAWebBizBudget",
  ["fbt", "WAWebBizAdCreationCurrencyUtils"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t = e.budgetValue,
        n = e.currency,
        o = e.minDailyBudget,
        a = e.maxDailyBudget,
        i = e.budgetType,
        l = i === void 0 ? "DAILY_BUDGET" : i,
        u = e.durationInDays,
        c = e.minTotalBudget,
        d = e.runContinuously,
        m = d === void 0 ? !1 : d,
        p = [],
        _ = r("WAWebBizAdCreationCurrencyUtils").formatCurrency(o, n, {
          withDecimals: !0,
          withSymbol: !0,
          withNumberDelimiters: !0,
        }),
        f = r("WAWebBizAdCreationCurrencyUtils").formatCurrency(a, n, {
          withDecimals: !0,
          withSymbol: !0,
          withNumberDelimiters: !0,
        });
      if (m)
        return (
          t < o &&
            p.push({
              severity: "ERROR",
              title: s._(
                /*BTDS*/ "The minimum budget is {min_budget} per day.",
                [s._param("min_budget", _)],
              ),
            }),
          t > a &&
            p.push({
              severity: "ERROR",
              title: s._(
                /*BTDS*/ "Your budget needs to be less than {max_budget}.",
                [s._param("max_budget", f)],
              ),
            }),
          p
        );
      if (
        (l === "DAILY_BUDGET" &&
          (t < o &&
            p.push({
              severity: "ERROR",
              title: s._(
                /*BTDS*/ "The minimum budget is {min_budget} per day.",
                [s._param("min_budget", _)],
              ),
            }),
          t > a &&
            p.push({
              severity: "ERROR",
              title: s._(
                /*BTDS*/ "Your budget needs to be less than {max_budget}.",
                [s._param("max_budget", f)],
              ),
            })),
        l === "LIFETIME_BUDGET")
      ) {
        if (c != null && c > 0 && t < c) {
          var g = r("WAWebBizAdCreationCurrencyUtils").formatCurrency(c, n, {
            withDecimals: !0,
            withSymbol: !0,
            withNumberDelimiters: !0,
          });
          p.push({
            severity: "ERROR",
            title: s._(
              /*BTDS*/ "The minimum budget for this ad is {min_budget}.",
              [s._param("min_budget", g)],
            ),
          });
        } else if (u != null && u > 0) {
          var h = o * u,
            y = a * u;
          if (t < h) {
            var C = r("WAWebBizAdCreationCurrencyUtils").formatCurrency(h, n, {
              withDecimals: !0,
              withSymbol: !0,
              withNumberDelimiters: !0,
            });
            p.push({
              severity: "ERROR",
              title: s._(
                /*BTDS*/ "The minimum budget for this ad is {min_budget}.",
                [s._param("min_budget", C)],
              ),
            });
          }
          t > y &&
            p.push({
              severity: "ERROR",
              title: s._(
                /*BTDS*/ "Your budget needs to be less than {max_budget}.",
                [s._param("max_budget", f)],
              ),
            });
        }
      }
      return p;
    }
    l.default = e;
  },
  226,
);
