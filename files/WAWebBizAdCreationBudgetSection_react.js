__d(
  "WAWebBizAdCreationBudgetSection.react",
  [
    "fbt",
    "CometRelay",
    "WAWebBizAdCard.react",
    "WAWebBizAdCreationBudgetInfoModal.react",
    "WAWebBizAdCreationBudgetInput.react",
    "WAWebBizAdCreationBudgetSectionData.graphql",
    "WAWebBizAdCreationBudgetSlider.react",
    "WAWebBizAdCreationInlineValidationNotices.react",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationSectionNotices.react",
    "WAWebBizAdLogger",
    "WAWebFlex.react",
    "react",
    "react-compiler-runtime",
    "useWAWebBizAdCreationInlineValidationNotices",
    "useWAWebBizBudgetValidation",
    "useWAWebInfoButtonUtil",
    "withWAWebBizAdCreationSpecContext",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useContext,
      p = d.useEffect,
      _ = d.useRef,
      f = d.useState,
      g = { valueContainer: { height: "xnnlda6", $$css: !0 } },
      h =
        e !== void 0
          ? e
          : (e = n("WAWebBizAdCreationBudgetSectionData.graphql"));
    function y(e) {
      var t,
        n,
        a,
        i,
        l = o("react-compiler-runtime").c(22),
        u = e.fragmentRef,
        d = e.adAccountID,
        y = e.currency,
        C = e.defaultBudget,
        b = e.selectedBudget,
        v = o("CometRelay").useFragment(h, u),
        S = m(r("WAWebBizAdCreationLoggerContext")),
        R = _(!1),
        L,
        E;
      (l[0] !== d || l[1] !== y || l[2] !== C || l[3] !== S || l[4] !== b
        ? ((L = function () {
            S != null &&
              !R.current &&
              ((R.current = !0),
              r("WAWebBizAdLogger").log({
                event: "budget_card_impression",
                loggerContext: S,
                adAccountID: d,
                budget: b,
                budgetType: "DAILY_BUDGET",
                currency: y,
                defaultBudget: C,
                extra: { recommended_value: b },
              }));
          }),
          (E = [d, y, C, S, b]),
          (l[0] = d),
          (l[1] = y),
          (l[2] = C),
          (l[3] = S),
          (l[4] = b),
          (l[5] = L),
          (l[6] = E))
        : ((L = l[5]), (E = l[6])),
        p(L, E));
      var k = f(b),
        I = k[0],
        T = k[1],
        D = f(b),
        x = D[0],
        $ = D[1],
        P = Number(
          (t =
            v == null ||
            (n = v.constraints) == null ||
            (n = n.minDailyBudget) == null
              ? void 0
              : n.offsetAmount) != null
            ? t
            : 0,
        ),
        N = Number(
          (a =
            v == null ||
            (i = v.constraints) == null ||
            (i = i.maxDailyBudget) == null
              ? void 0
              : i.offsetAmount) != null
            ? a
            : 0,
        ),
        M;
      (l[7] !== N || l[8] !== P
        ? ((M = { minDailyBudget: P, maxDailyBudget: N }),
          (l[7] = N),
          (l[8] = P),
          (l[9] = M))
        : (M = l[9]),
        r("useWAWebBizBudgetValidation")(M));
      var w = r("useWAWebBizAdCreationInlineValidationNotices")("BUDGET"),
        A = w.length > 0;
      b !== x && ($(b), T(b));
      var F = r("useWAWebInfoButtonUtil")(
          r("WAWebBizAdCreationBudgetInfoModal.react"),
        ),
        O;
      l[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = s._(/*BTDS*/ "Daily budget")), (l[10] = O))
        : (O = l[10]);
      var B;
      l[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = c.jsx(r("WAWebBizAdCreationSectionNotices.react"), {
            specElement: "BUDGET",
          })),
          (l[11] = B))
        : (B = l[11]);
      var W;
      l[12] !== A || l[13] !== I
        ? ((W = c.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: g.valueContainer,
            justify: "center",
            align: "center",
            children: c.jsx(r("WAWebBizAdCreationBudgetInput.react"), {
              displayBudget: I,
              hasError: A,
              setLocalBudget: T,
            }),
          })),
          (l[12] = A),
          (l[13] = I),
          (l[14] = W))
        : (W = l[14]);
      var q;
      l[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = c.jsx(o("WAWebFlex.react").FlexItem, {
            align: "stretch",
            children: c.jsx(r("WAWebBizAdCreationBudgetSlider.react"), {
              setLocalBudget: T,
            }),
          })),
          (l[15] = q))
        : (q = l[15]);
      var U;
      l[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = c.jsx(r("WAWebBizAdCreationInlineValidationNotices.react"), {
            specElement: "BUDGET",
          })),
          (l[16] = U))
        : (U = l[16]);
      var V;
      l[17] !== W
        ? ((V = c.jsxs(o("WAWebFlex.react").FlexColumn, {
            gap: 16,
            align: "stretch",
            children: [B, W, q, U],
          })),
          (l[17] = W),
          (l[18] = V))
        : (V = l[18]);
      var H;
      return (
        l[19] !== F || l[20] !== V
          ? ((H = c.jsx(r("WAWebBizAdCard.react"), {
              header: O,
              titleAccessory: F,
              children: V,
            })),
            (l[19] = F),
            (l[20] = V),
            (l[21] = H))
          : (H = l[21]),
        H
      );
    }
    var C = r("withWAWebBizAdCreationSpecContext")(y, function (e) {
      return {
        adAccountID: e.adAccountData.id,
        currency: e.adAccountData.currency,
        defaultBudget: e.budgetData.defaultBudget,
        selectedBudget: e.budgetData.budget,
      };
    });
    l.default = C;
  },
  226,
);
