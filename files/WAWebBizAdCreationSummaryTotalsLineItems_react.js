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
    "withWAWebBizAdCreationSpecContext",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var a,
        i,
        l = t.currency,
        u = t.estimatedTaxRef,
        d = t.rowGap,
        m = d === void 0 ? 8 : d,
        p = t.selectedBudget,
        _ = t.selectedDurationInDays,
        f = o("CometRelay").useFragment(
          e !== void 0
            ? e
            : (e = n(
                "WAWebBizAdCreationSummaryTotalsLineItems_estimatedTax.graphql",
              )),
          u,
        ),
        g = function (t) {
          return r("WAWebBizAdCreationCurrencyUtils").formatCurrency(t, l);
        },
        h = function (t) {
          return r("WAWebBizAdCreationCurrencyUtils").formatCurrency(t, l, {
            withDecimals: !0,
          });
        },
        y = p * _,
        C =
          (a =
            f == null || (i = f.taxes) == null
              ? void 0
              : i
                  .filter(function (e) {
                    return e.taxName != null && e.taxAmount != null;
                  })
                  .map(function (e) {
                    var t, n, r;
                    return {
                      formattedAmount:
                        (t =
                          (n = e.taxAmount) == null
                            ? void 0
                            : n.formattedAmount) != null
                          ? t
                          : "",
                      taxName: (r = e.taxName) != null ? r : "",
                    };
                  })) != null
            ? a
            : [];
      return c.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "stretch",
        rowGap: m,
        children: [
          c.jsx(r("WAWebBizAdCreationSummaryLineItem.react"), {
            label: s._(/*BTDS*/ "Total budget"),
            value: h(y),
          }),
          c.jsx(r("WAWebBizAdCreationSummaryLineItem.react"), {
            colorName: "contentDeemphasized",
            label: s._(
              /*BTDS*/ '_j{"*":"{Pre-formatted daily budget} a day x {number} days","_1":"{Pre-formatted daily budget} a day x 1 day"}',
              [
                s._plural(_, "number"),
                s._param("Pre-formatted daily budget", g(p)),
              ],
            ),
          }),
          C.map(function (e, t) {
            return c.jsx(
              r("WAWebBizAdCreationSummaryLineItem.react"),
              {
                colorName: "contentDeemphasized",
                label: e.taxName,
                value: e.formattedAmount,
              },
              t,
            );
          }),
        ],
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    var m = r("withWAWebBizAdCreationSpecContext")(d, function (e) {
      return {
        currency: e.adAccountData.currency,
        selectedBudget: e.budgetData.budget,
        selectedDurationInDays: e.durationData.durationInDays,
      };
    });
    l.default = m;
  },
  226,
);
