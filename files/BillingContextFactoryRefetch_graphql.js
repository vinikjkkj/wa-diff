__d(
  "BillingContextFactoryRefetch.graphql",
  ["BillingContextFactoryRefetch_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: !1,
            kind: "LocalArgument",
            name: "hasInitCheckBusinessIds",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "hasPaymentAccount",
          },
          {
            defaultValue: [],
            kind: "LocalArgument",
            name: "initCheckBusinessIds",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "paymentAccountID",
          },
        ],
        t = [
          {
            fields: [
              {
                items: [
                  {
                    kind: "Variable",
                    name: "payment_account_ids.0",
                    variableName: "paymentAccountID",
                  },
                ],
                kind: "ListValue",
                name: "payment_account_ids",
              },
            ],
            kind: "ObjectValue",
            name: "input",
          },
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "payment_account_id",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "business_id",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "value",
          storageKey: null,
        },
        i = [
          {
            alias: null,
            args: null,
            concreteType: "BillingQEInitCheckResult",
            kind: "LinkedField",
            name: "results",
            plural: !0,
            selections: [
              r,
              o,
              {
                alias: null,
                args: null,
                concreteType: "BillingQEInitCheckQEResponse",
                kind: "LinkedField",
                name: "qe_results",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "universe_name",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "holdout",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "BillingQEInitCheckParamResponse",
                    kind: "LinkedField",
                    name: "params",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "param_name",
                        storageKey: null,
                      },
                      a,
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "BillingContextFactoryRefetch",
          selections: [
            {
              args: [
                {
                  kind: "Variable",
                  name: "hasInitCheckBusinessIds",
                  variableName: "hasInitCheckBusinessIds",
                },
                {
                  kind: "Variable",
                  name: "hasPaymentAccount",
                  variableName: "hasPaymentAccount",
                },
                {
                  kind: "Variable",
                  name: "initCheckBusinessIds",
                  variableName: "initCheckBusinessIds",
                },
                {
                  kind: "Variable",
                  name: "paymentAccountID",
                  variableName: "paymentAccountID",
                },
              ],
              kind: "FragmentSpread",
              name: "BillingContextFactoryFragment_fragment",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "BillingContextFactoryRefetch",
          selections: [
            {
              condition: "hasPaymentAccount",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  alias: null,
                  args: [
                    {
                      kind: "Variable",
                      name: "asset_id",
                      variableName: "paymentAccountID",
                    },
                  ],
                  concreteType: null,
                  kind: "LinkedField",
                  name: "billable_account_by_asset_id",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
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
                {
                  alias: null,
                  args: t,
                  concreteType: "BillingGKInitCheckResponse",
                  kind: "LinkedField",
                  name: "billing_gk_fetch_all",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "BillingGKInitCheckResult",
                      kind: "LinkedField",
                      name: "results",
                      plural: !0,
                      selections: [
                        r,
                        o,
                        {
                          alias: null,
                          args: null,
                          concreteType: "BillingGKCheckResponse",
                          kind: "LinkedField",
                          name: "gk_results",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "name",
                              storageKey: null,
                            },
                            a,
                          ],
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
                  args: t,
                  concreteType: "BillingQEInitCheckResponse",
                  kind: "LinkedField",
                  name: "billing_qe_fetch_all",
                  plural: !1,
                  selections: i,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: [
                    {
                      kind: "Variable",
                      name: "ad_account_id",
                      variableName: "paymentAccountID",
                    },
                  ],
                  concreteType:
                    "XFBEligibilityForAdsManagerAppPaymentHubUpsell",
                  kind: "LinkedField",
                  name: "xfb_is_eligible_for_ads_manager_app_payment_hub_upsell",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "enabled",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
            {
              condition: "hasInitCheckBusinessIds",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  alias: "qeInitCheckByBusiness",
                  args: [
                    {
                      fields: [
                        {
                          kind: "Variable",
                          name: "business_ids",
                          variableName: "initCheckBusinessIds",
                        },
                      ],
                      kind: "ObjectValue",
                      name: "input",
                    },
                  ],
                  concreteType: "BillingQEInitCheckResponse",
                  kind: "LinkedField",
                  name: "billing_qe_fetch_all",
                  plural: !1,
                  selections: i,
                  storageKey: null,
                },
              ],
            },
          ],
        },
        params: {
          id: n("BillingContextFactoryRefetch_facebookRelayOperation"),
          metadata: {},
          name: "BillingContextFactoryRefetch",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
