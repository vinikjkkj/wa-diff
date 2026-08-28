__d(
  "BillingAssignAdCreditsScreenQuery.graphql",
  ["BillingAssignAdCreditsScreenQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "paymentAccountID",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "paymentMethodID",
          },
        ],
        t = [{ kind: "Variable", name: "id", variableName: "paymentMethodID" }],
        r = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "amount_with_offset",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "currency",
            storageKey: null,
          },
        ],
        o = [
          {
            kind: "Variable",
            name: "payment_legacy_account_id",
            variableName: "paymentAccountID",
          },
        ],
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "BillingAssignAdCreditsScreenQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "CurrencyAmount",
                      kind: "LinkedField",
                      name: "current_balance_currency_amount",
                      plural: !1,
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "BillingCurrencyAmount_amount",
                          selections: r,
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  type: "AdsToken",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: o,
              concreteType: null,
              kind: "LinkedField",
              name: "billable_account_by_payment_account",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "AdAccountAdCampaignGroupsConnection",
                      kind: "LinkedField",
                      name: "ad_campaign_groups",
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "BillingAssignAdCreditsView_account",
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  type: "AdAccount",
                  abstractKey: null,
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
          argumentDefinitions: e,
          kind: "Operation",
          name: "BillingAssignAdCreditsScreenQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                a,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "CurrencyAmount",
                      kind: "LinkedField",
                      name: "current_balance_currency_amount",
                      plural: !1,
                      selections: r,
                      storageKey: null,
                    },
                  ],
                  type: "AdsToken",
                  abstractKey: null,
                },
                i,
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: o,
              concreteType: null,
              kind: "LinkedField",
              name: "billable_account_by_payment_account",
              plural: !1,
              selections: [
                a,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "AdAccountAdCampaignGroupsConnection",
                      kind: "LinkedField",
                      name: "ad_campaign_groups",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "AdCampaignGroup",
                          kind: "LinkedField",
                          name: "nodes",
                          plural: !0,
                          selections: [
                            i,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "name",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  type: "AdAccount",
                  abstractKey: null,
                },
                i,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n("BillingAssignAdCreditsScreenQuery_facebookRelayOperation"),
          metadata: {},
          name: "BillingAssignAdCreditsScreenQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
