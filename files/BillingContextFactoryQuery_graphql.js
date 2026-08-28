__d(
  "BillingContextFactoryQuery.graphql",
  ["BillingContextFactoryQuery_facebookRelayOperation", "relay-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "hasInitCheckBusinessIds",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "hasPaymentAccount",
        },
        r = {
          defaultValue: [],
          kind: "LocalArgument",
          name: "initCheckBusinessIds",
        },
        o = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "paymentAccountID",
        },
        a = [
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
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "payment_account_id",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "business_id",
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "value",
          storageKey: null,
        },
        u = [
          {
            alias: null,
            args: null,
            concreteType: "BillingQEInitCheckResult",
            kind: "LinkedField",
            name: "results",
            plural: !0,
            selections: [
              i,
              l,
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
                      s,
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
          argumentDefinitions: [e, t, r, o],
          kind: "Fragment",
          metadata: null,
          name: "BillingContextFactoryQuery",
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
          argumentDefinitions: [o, t, r, e],
          kind: "Operation",
          name: "BillingContextFactoryQuery",
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
                  args: a,
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
                        i,
                        l,
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
                            s,
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
                  args: a,
                  concreteType: "BillingQEInitCheckResponse",
                  kind: "LinkedField",
                  name: "billing_qe_fetch_all",
                  plural: !1,
                  selections: u,
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
                  selections: u,
                  storageKey: null,
                },
              ],
            },
          ],
        },
        params: {
          id: n("BillingContextFactoryQuery_facebookRelayOperation"),
          metadata: {},
          name: "BillingContextFactoryQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    (n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e),
      (a.exports = e));
  },
  null,
);
