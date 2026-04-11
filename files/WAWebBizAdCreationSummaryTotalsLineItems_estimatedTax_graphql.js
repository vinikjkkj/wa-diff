__d(
  "WAWebBizAdCreationSummaryTotalsLineItems_estimatedTax.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WAWebBizAdCreationSummaryTotalsLineItems_estimatedTax",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "XFBBillableAccountEstimatedTaxLineItem",
          kind: "LinkedField",
          name: "taxes",
          plural: !0,
          selections: [
            {
              alias: "taxName",
              args: null,
              kind: "ScalarField",
              name: "tax_name",
              storageKey: null,
            },
            {
              alias: "taxAmount",
              args: null,
              concreteType: "CurrencyAmount",
              kind: "LinkedField",
              name: "tax_amount",
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
