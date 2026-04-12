__d(
  "WAWebBizAdCreationBudgetSlider.react",
  [
    "WAWebBizAdCreationCurrencyUtils",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdLogger",
    "WDSSlider.react",
    "react",
    "useWAWebBizAdCreationBudgetOptions",
    "useWAWebBizAdCreationSpecDispatcherContext",
    "waWebBizAdCreationBudgetReducer",
    "withWAWebBizAdCreationSpecContext",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useContext,
      m = u.useMemo,
      p = u.useRef,
      _ = u.useState;
    function f(e) {
      var t = e.setLocalBudget,
        n = e.adAccountID,
        o = e.currency,
        a = e.defaultBudget,
        i = e.selectedBudget,
        l = r("useWAWebBizAdCreationSpecDispatcherContext")([
          r("waWebBizAdCreationBudgetReducer"),
        ]),
        u = d(r("WAWebBizAdCreationLoggerContext")),
        f = p(null),
        g = r("useWAWebBizAdCreationBudgetOptions")(),
        h = m(
          function () {
            return g.findIndex(function (e) {
              return e === i;
            });
          },
          [g, i],
        ),
        y = _(h),
        C = y[0],
        b = y[1],
        v = _(h),
        S = v[0],
        R = v[1];
      h !== S && (R(h), b(h));
      var L = c(
          function (e) {
            l({
              budgetData: { budget: e },
              type: "budget_reducer.update_budget",
            });
          },
          [l],
        ),
        E = c(
          function (e) {
            var t,
              i = g[e],
              l = (t = f.current) != null ? t : a;
            (L(i),
              u != null &&
                r("WAWebBizAdLogger").log({
                  event: "change_budget",
                  loggerContext: u,
                  adAccountID: n,
                  budget: i,
                  budgetType: "DAILY_BUDGET",
                  currency: o,
                  defaultBudget: a,
                  extra: { old_budget: l, input_type: "slider" },
                }),
              (f.current = i));
          },
          [g, a, L, u, n, o],
        ),
        k = function (n) {
          (b(n), t(g[n]));
        };
      return s.jsx(r("WDSSlider.react"), {
        values: [C],
        min: 0,
        max: g.length - 1,
        step: 1,
        onChangeSettled: function (t) {
          return E(t[0]);
        },
        onChange: function (t) {
          return k(t[0]);
        },
        startEndLabels: "minMax",
        displayValueText: function (t) {
          return r("WAWebBizAdCreationCurrencyUtils").formatCurrency(g[t], o);
        },
        ariaValueText: function (t) {
          return r("WAWebBizAdCreationCurrencyUtils").formatCurrency(g[t], o);
        },
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    var g = r("withWAWebBizAdCreationSpecContext")(f, function (e) {
      var t;
      return {
        adAccountID: (t = e.adAccountData) == null ? void 0 : t.legacyAccountID,
        currency: e.adAccountData.currency,
        defaultBudget: e.budgetData.defaultBudget,
        selectedBudget: e.budgetData.budget,
      };
    });
    l.default = g;
  },
  98,
);
