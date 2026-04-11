__d(
  "WAWebBizAdCreationSummaryTotalAmountRow_estimatedTax.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WAWebBizAdCreationSummaryTotalAmountRow_estimatedTax",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "CurrencyAmount",
          kind: "LinkedField",
          name: "total",
          plural: !1,
          selections: [
            {
              alias: "formattedAmount",
              args: null,
              kind: "ScalarField",
              name: "formatted_amount",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "XFBBillableAccountEstimatedTaxes",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
