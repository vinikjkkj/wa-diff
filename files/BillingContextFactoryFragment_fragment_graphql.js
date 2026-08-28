__d(
  "BillingContextFactoryFragment_fragment.graphql",
  ["BillingContextFactoryRefetch.graphql"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
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
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "payment_account_id",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "business_id",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "value",
          storageKey: null,
        },
        a = [
          {
            alias: null,
            args: null,
            concreteType: "BillingQEInitCheckResult",
            kind: "LinkedField",
            name: "results",
            plural: !0,
            selections: [
              t,
              r,
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
                      o,
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
        argumentDefinitions: [
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
        kind: "Fragment",
        metadata: {
          refetch: {
            connection: null,
            fragmentPathInResult: [],
            operation: n("BillingContextFactoryRefetch.graphql"),
          },
        },
        name: "BillingContextFactoryFragment_fragment",
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
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: e,
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
                      t,
                      r,
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
                          o,
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
                args: e,
                concreteType: "BillingQEInitCheckResponse",
                kind: "LinkedField",
                name: "billing_qe_fetch_all",
                plural: !1,
                selections: a,
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
                concreteType: "XFBEligibilityForAdsManagerAppPaymentHubUpsell",
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
                selections: a,
                storageKey: null,
              },
            ],
          },
        ],
        type: "Query",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
