__d(
  "BillingAltPayAddFundsView_account.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "XFBAddFundsPillDescription",
          kind: "LinkedField",
          name: "description",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "content",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "boostDurationInDays" },
          { kind: "RootArgument", name: "dailyBudgetPaymentAmount" },
          { kind: "RootArgument", name: "fullBudgetPaymentAmount" },
          { kind: "RootArgument", name: "isMissingPills" },
          { kind: "RootArgument", name: "preferMlPrediction" },
          { kind: "RootArgument", name: "surface" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "BillingAltPayAddFundsView_account",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "billable_account",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "currency",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "billable_account_tax_info",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "entity",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "payment_modes",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: [
                      {
                        kind: "Variable",
                        name: "boost_budget",
                        variableName: "fullBudgetPaymentAmount",
                      },
                      {
                        kind: "Variable",
                        name: "boost_daily_budget",
                        variableName: "dailyBudgetPaymentAmount",
                      },
                      {
                        kind: "Variable",
                        name: "boost_duration_in_days",
                        variableName: "boostDurationInDays",
                      },
                      {
                        kind: "Variable",
                        name: "is_missing_pills",
                        variableName: "isMissingPills",
                      },
                      {
                        kind: "Variable",
                        name: "prefer_ml_prediction",
                        variableName: "preferMlPrediction",
                      },
                      {
                        kind: "Variable",
                        name: "surface",
                        variableName: "surface",
                      },
                    ],
                    concreteType: "XFBAddFundsSuggestedAmounts",
                    kind: "LinkedField",
                    name: "add_funds_suggested_amount",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "XFBAddFundsPillData",
                        kind: "LinkedField",
                        name: "pill_one",
                        plural: !1,
                        selections: e,
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: "XFBAddFundsPillData",
                        kind: "LinkedField",
                        name: "pill_two",
                        plural: !1,
                        selections: e,
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                type: "AdAccount",
                abstractKey: null,
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "BillingSelectAmountRow_account",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "BillingSelectPresetAmountRow_account",
              },
            ],
            storageKey: null,
          },
        ],
        type: "PaymentAccount",
        abstractKey: "__isPaymentAccount",
      };
    })();
    a.exports = e;
  },
  null,
);
