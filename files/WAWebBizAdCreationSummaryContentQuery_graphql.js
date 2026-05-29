__d(
  "WAWebBizAdCreationSummaryContentQuery.graphql",
  ["WAWebBizAdCreationSummaryContentQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "asset_id" },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "boost_duration_in_days",
        },
        r = { defaultValue: null, kind: "LocalArgument", name: "budget" },
        o = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "daily_budget_payment_amount",
        },
        a = [{ kind: "Variable", name: "asset_id", variableName: "asset_id" }],
        i = [
          {
            kind: "Variable",
            name: "boost_duration_in_days",
            variableName: "boost_duration_in_days",
          },
          { kind: "Variable", name: "budget", variableName: "budget" },
          {
            kind: "Variable",
            name: "daily_budget_payment_amount",
            variableName: "daily_budget_payment_amount",
          },
        ],
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        s = [
          {
            alias: "formattedAmount",
            args: null,
            kind: "ScalarField",
            name: "formatted_amount",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, r, o],
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAdCreationSummaryContentQuery",
          selections: [
            {
              alias: null,
              args: a,
              concreteType: null,
              kind: "LinkedField",
              name: "billable_account_by_asset_id",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: i,
                  concreteType: "XFBBillableAccountBillingInfo",
                  kind: "LinkedField",
                  name: "billing_info",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "XFBBillableAccountEstimatedTaxes",
                      kind: "LinkedField",
                      name: "estimated_tax",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType:
                            "XFBBillableAccountEstimatedTaxLineItem",
                          kind: "LinkedField",
                          name: "taxes",
                          plural: !0,
                          selections: [l],
                          storageKey: null,
                        },
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "WAWebBizAdCreationSummaryTotalsLineItems_estimatedTax",
                        },
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "WAWebBizAdCreationSummaryTotalAmountRow_estimatedTax",
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, r, t, o],
          kind: "Operation",
          name: "WAWebBizAdCreationSummaryContentQuery",
          selections: [
            {
              alias: null,
              args: a,
              concreteType: null,
              kind: "LinkedField",
              name: "billable_account_by_asset_id",
              plural: !1,
              selections: [
                l,
                {
                  alias: null,
                  args: i,
                  concreteType: "XFBBillableAccountBillingInfo",
                  kind: "LinkedField",
                  name: "billing_info",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "XFBBillableAccountEstimatedTaxes",
                      kind: "LinkedField",
                      name: "estimated_tax",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType:
                            "XFBBillableAccountEstimatedTaxLineItem",
                          kind: "LinkedField",
                          name: "taxes",
                          plural: !0,
                          selections: [
                            l,
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
                              selections: s,
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "CurrencyAmount",
                          kind: "LinkedField",
                          name: "total",
                          plural: !1,
                          selections: s,
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n("WAWebBizAdCreationSummaryContentQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAdCreationSummaryContentQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
