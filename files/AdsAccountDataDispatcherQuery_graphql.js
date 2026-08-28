__d(
  "AdsAccountDataDispatcherQuery.graphql",
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
            concreteType: "AdAccount",
            kind: "LinkedField",
            name: "ad_account",
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
                name: "legacy_account_id",
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
          name: "AdsAccountDataDispatcherQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsAccountDataDispatcherQuery",
          selections: t,
        },
        params: {
          id: "29511561718459046",
          metadata: {},
          name: "AdsAccountDataDispatcherQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
