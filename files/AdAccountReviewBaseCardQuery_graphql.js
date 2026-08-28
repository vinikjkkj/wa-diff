__d(
  "AdAccountReviewBaseCardQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "adAccountID" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "legacy_account_id",
                variableName: "adAccountID",
              },
            ],
            concreteType: "MAIBAAdAccountNode",
            kind: "LinkedField",
            name: "maiba_ad_account",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "MAIBAAdAccountDSL",
                kind: "LinkedField",
                name: "account_dsl",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: [
                      {
                        kind: "Literal",
                        name: "strip_currency_decimals",
                        value: !0,
                      },
                    ],
                    kind: "ScalarField",
                    name: "formatted_amount",
                    storageKey:
                      "formatted_amount(strip_currency_decimals:true)",
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "account_status",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "dsl_eligibility_status",
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
          name: "AdAccountReviewBaseCardQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdAccountReviewBaseCardQuery",
          selections: t,
        },
        params: {
          id: "27435010199439786",
          metadata: {},
          name: "AdAccountReviewBaseCardQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
