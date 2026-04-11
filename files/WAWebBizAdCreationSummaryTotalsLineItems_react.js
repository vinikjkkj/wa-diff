__d(
  "WAWebBizAdCreationSummaryTotalsLineItems.react",
  [
    "fbt",
    "CometRelay",
    "WAWebBizAdCreationCurrencyUtils",
    "WAWebBizAdCreationSummaryLineItem.react",
    "WAWebBizAdCreationSummaryTotalsLineItems_estimatedTax.graphql",
    "WAWebFlex.react",
    "react",
    "react-compiler-runtime",
    "withWAWebBizAdCreationSpecContext",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var a = o("react-compiler-runtime").c(24),
        i = t.currency,
        l = t.estimatedTaxRef,
        u = t.rowGap,
        d = t.selectedBudget,
        f = t.selectedDurationInDays,
        g = u === void 0 ? 8 : u,
        h = o("CometRelay").useFragment(
          e !== void 0
            ? e
            : (e = n(
                "WAWebBizAdCreationSummaryTotalsLineItems_estimatedTax.graphql",
              )),
          l,
        ),
        y;
      a[0] !== i
        ? ((y = function (t) {
            return r("WAWebBizAdCreationCurrencyUtils").formatCurrency(t, i);
          }),
          (a[0] = i),
          (a[1] = y))
        : (y = a[1]);
      var C = y,
        b;
      a[2] !== i
        ? ((b = function (t) {
            return r("WAWebBizAdCreationCurrencyUtils").formatCurrency(t, i, {
              withDecimals: !0,
            });
          }),
          (a[2] = i),
          (a[3] = b))
        : (b = a[3]);
      var v = b,
        S = d * f,
        R;
      if (
        a[4] !== (h == null ? void 0 : h.taxes) ||
        a[5] !== C ||
        a[6] !== v ||
        a[7] !== g ||
        a[8] !== d ||
        a[9] !== f ||
        a[10] !== S
      ) {
        var L,
          E,
          k =
            (L =
              h == null || (E = h.taxes) == null
                ? void 0
                : E.filter(_).map(p)) != null
              ? L
              : [],
          I;
        a[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = s._(/*BTDS*/ "Total budget")), (a[12] = I))
          : (I = a[12]);
        var T;
        a[13] !== v || a[14] !== S
          ? ((T = v(S)), (a[13] = v), (a[14] = S), (a[15] = T))
          : (T = a[15]);
        var D;
        a[16] !== T
          ? ((D = c.jsx(r("WAWebBizAdCreationSummaryLineItem.react"), {
              label: I,
              value: T,
            })),
            (a[16] = T),
            (a[17] = D))
          : (D = a[17]);
        var x;
        a[18] !== C || a[19] !== d || a[20] !== f
          ? ((x = s._(
              /*BTDS*/ '_j{"*":"{Pre-formatted daily budget} a day x {number} days","_1":"{Pre-formatted daily budget} a day x 1 day"}',
              [
                s._plural(f, "number"),
                s._param("Pre-formatted daily budget", C(d)),
              ],
            )),
            (a[18] = C),
            (a[19] = d),
            (a[20] = f),
            (a[21] = x))
          : (x = a[21]);
        var $;
        (a[22] !== x
          ? (($ = c.jsx(r("WAWebBizAdCreationSummaryLineItem.react"), {
              colorName: "contentDeemphasized",
              label: x,
            })),
            (a[22] = x),
            (a[23] = $))
          : ($ = a[23]),
          (R = c.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "stretch",
            rowGap: g,
            children: [D, $, k.map(m)],
          })),
          (a[4] = h == null ? void 0 : h.taxes),
          (a[5] = C),
          (a[6] = v),
          (a[7] = g),
          (a[8] = d),
          (a[9] = f),
          (a[10] = S),
          (a[11] = R));
      } else R = a[11];
      return R;
    }
    function m(e, t) {
      return c.jsx(
        r("WAWebBizAdCreationSummaryLineItem.react"),
        {
          colorName: "contentDeemphasized",
          label: e.taxName,
          value: e.formattedAmount,
        },
        t,
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t, n, r;
      return {
        formattedAmount:
          (t = (n = e.taxAmount) == null ? void 0 : n.formattedAmount) != null
            ? t
            : "",
        taxName: (r = e.taxName) != null ? r : "",
      };
    }
    function _(e) {
      return e.taxName != null && e.taxAmount != null;
    }
    var f = r("withWAWebBizAdCreationSpecContext")(d, function (e) {
      return {
        currency: e.adAccountData.currency,
        selectedBudget: e.budgetData.budget,
        selectedDurationInDays: e.durationData.durationInDays,
      };
    });
    l.default = f;
  },
  226,
);
