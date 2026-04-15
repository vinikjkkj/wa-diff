__d(
  "WAWebBizAdCreationBudgetSlider.react",
  [
    "WAWebBizAdCreationCurrencyUtils",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdLogger",
    "WDSSlider.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(35),
        n = e.setLocalBudget,
        a = e.adAccountID,
        i = e.currency,
        l = e.defaultBudget,
        u = e.selectedBudget,
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = [r("waWebBizAdCreationBudgetReducer")]), (t[0] = c))
        : (c = t[0]);
      var m = r("useWAWebBizAdCreationSpecDispatcherContext")(c),
        f = d(r("WAWebBizAdCreationLoggerContext")),
        g = p(null),
        h = r("useWAWebBizAdCreationBudgetOptions")(),
        y;
      if (t[1] !== h || t[2] !== u) {
        var C;
        (t[4] !== u
          ? ((C = function (t) {
              return t === u;
            }),
            (t[4] = u),
            (t[5] = C))
          : (C = t[5]),
          (y = h.findIndex(C)),
          (t[1] = h),
          (t[2] = u),
          (t[3] = y));
      } else y = t[3];
      var b = y,
        v = _(b),
        S = v[0],
        R = v[1],
        L = _(b),
        E = L[0],
        k = L[1];
      b !== E && (k(b), R(b));
      var I;
      t[6] !== m
        ? ((I = function (t) {
            m({
              budgetData: { budget: t },
              type: "budget_reducer.update_budget",
            });
          }),
          (t[6] = m),
          (t[7] = I))
        : (I = t[7]);
      var T = I,
        D;
      t[8] !== a ||
      t[9] !== h ||
      t[10] !== i ||
      t[11] !== l ||
      t[12] !== f ||
      t[13] !== T
        ? ((D = function (t) {
            var e,
              n = h[t],
              o = (e = g.current) != null ? e : l;
            (T(n),
              f != null &&
                r("WAWebBizAdLogger").log({
                  event: "change_budget",
                  loggerContext: f,
                  adAccountID: a,
                  budget: n,
                  budgetType: "DAILY_BUDGET",
                  currency: i,
                  defaultBudget: l,
                  extra: { old_budget: o, input_type: "slider" },
                }),
              (g.current = n));
          }),
          (t[8] = a),
          (t[9] = h),
          (t[10] = i),
          (t[11] = l),
          (t[12] = f),
          (t[13] = T),
          (t[14] = D))
        : (D = t[14]);
      var x = D,
        $;
      t[15] !== h || t[16] !== n
        ? (($ = function (t) {
            (R(t), n(h[t]));
          }),
          (t[15] = h),
          (t[16] = n),
          (t[17] = $))
        : ($ = t[17]);
      var P = $,
        N;
      t[18] !== S ? ((N = [S]), (t[18] = S), (t[19] = N)) : (N = t[19]);
      var M = h.length - 1,
        w;
      t[20] !== x
        ? ((w = function (t) {
            return x(t[0]);
          }),
          (t[20] = x),
          (t[21] = w))
        : (w = t[21]);
      var A;
      t[22] !== P
        ? ((A = function (t) {
            return P(t[0]);
          }),
          (t[22] = P),
          (t[23] = A))
        : (A = t[23]);
      var F, O;
      t[24] !== h || t[25] !== i
        ? ((F = function (t) {
            return r("WAWebBizAdCreationCurrencyUtils").formatCurrency(h[t], i);
          }),
          (O = function (t) {
            return r("WAWebBizAdCreationCurrencyUtils").formatCurrency(h[t], i);
          }),
          (t[24] = h),
          (t[25] = i),
          (t[26] = F),
          (t[27] = O))
        : ((F = t[26]), (O = t[27]));
      var B;
      return (
        t[28] !== F ||
        t[29] !== O ||
        t[30] !== N ||
        t[31] !== M ||
        t[32] !== w ||
        t[33] !== A
          ? ((B = s.jsx(r("WDSSlider.react"), {
              values: N,
              min: 0,
              max: M,
              step: 1,
              onChangeSettled: w,
              onChange: A,
              startEndLabels: "minMax",
              displayValueText: F,
              ariaValueText: O,
            })),
            (t[28] = F),
            (t[29] = O),
            (t[30] = N),
            (t[31] = M),
            (t[32] = w),
            (t[33] = A),
            (t[34] = B))
          : (B = t[34]),
        B
      );
    }
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
