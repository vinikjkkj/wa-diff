__d(
  "WAWebBizAdCreationSummaryTotalAmountRow.react",
  [
    "fbt",
    "CometRelay",
    "WAWebBizAdCreationSummaryLineItem.react",
    "WAWebBizAdCreationSummaryTotalAmountRow_estimatedTax.graphql",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var a,
        i,
        l = t.estimatedTaxRef,
        u = o("CometRelay").useFragment(
          e !== void 0
            ? e
            : (e = n(
                "WAWebBizAdCreationSummaryTotalAmountRow_estimatedTax.graphql",
              )),
          l,
        ),
        d =
          (a =
            u == null || (i = u.total) == null ? void 0 : i.formattedAmount) !=
          null
            ? a
            : "";
      return c.jsx(r("WAWebBizAdCreationSummaryLineItem.react"), {
        label: s._(/*BTDS*/ "Total amount"),
        value: d,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
