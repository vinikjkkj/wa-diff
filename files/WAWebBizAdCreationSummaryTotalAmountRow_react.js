__d(
  "WAWebBizAdCreationSummaryTotalAmountRow.react",
  [
    "fbt",
    "CometRelay",
    "WAWebBizAdCreationSummaryLineItem.react",
    "WAWebBizAdCreationSummaryTotalAmountRow_estimatedTax.graphql",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var a,
        i,
        l = o("react-compiler-runtime").c(3),
        u = t.estimatedTaxRef,
        d = o("CometRelay").useFragment(
          e !== void 0
            ? e
            : (e = n(
                "WAWebBizAdCreationSummaryTotalAmountRow_estimatedTax.graphql",
              )),
          u,
        ),
        m =
          (a =
            d == null || (i = d.total) == null ? void 0 : i.formattedAmount) !=
          null
            ? a
            : "",
        p;
      l[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = s._(/*BTDS*/ "Total amount")), (l[0] = p))
        : (p = l[0]);
      var _;
      return (
        l[1] !== m
          ? ((_ = c.jsx(r("WAWebBizAdCreationSummaryLineItem.react"), {
              label: p,
              value: m,
            })),
            (l[1] = m),
            (l[2] = _))
          : (_ = l[2]),
        _
      );
    }
    l.default = d;
  },
  226,
);
