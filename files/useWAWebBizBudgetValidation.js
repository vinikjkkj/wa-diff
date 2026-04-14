__d(
  "useWAWebBizBudgetValidation",
  [
    "WAWebBizAdCreationSpecContext",
    "WAWebBizAdCreationValidateSpecContext",
    "react",
    "validateWAWebBizBudget",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useEffect,
      d = s.useMemo,
      m = s.useRef;
    function p(e) {
      var t,
        n,
        o,
        a = u(r("WAWebBizAdCreationSpecContext")),
        i = a.currentValue,
        l = u(r("WAWebBizAdCreationValidateSpecContext")),
        s =
          (t = (n = i.budgetData) == null ? void 0 : n.budget) != null ? t : 0,
        p = (o = i.adAccountData) == null ? void 0 : o.currency,
        _ = e.maxDailyBudget,
        f = e.minDailyBudget,
        g = m([]),
        h = d(
          function () {
            return f == null || f === 0 || _ == null || _ === 0 || p == null
              ? []
              : r("validateWAWebBizBudget")({
                  budgetValue: s,
                  currency: p,
                  minDailyBudget: f,
                  maxDailyBudget: _,
                });
          },
          [s, p, f, _],
        );
      c(
        function () {
          if (l != null) {
            var e = g.current,
              t =
                h.length !== e.length ||
                h.some(function (t, n) {
                  var r, o;
                  return (
                    t.title !== ((r = e[n]) == null ? void 0 : r.title) ||
                    t.severity !== ((o = e[n]) == null ? void 0 : o.severity)
                  );
                });
            t &&
              ((g.current = h),
              l.setSpecElementInlineValidationNotices("BUDGET", h));
          }
        },
        [l, h],
      );
    }
    l.default = p;
  },
  98,
);
