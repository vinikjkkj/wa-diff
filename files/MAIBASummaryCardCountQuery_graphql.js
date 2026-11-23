__d(
  "MAIBASummaryCardCountQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "adAccountId" },
        ],
        t = { vultureHash: "QRbOUhxtZ9nFnOjt9HJqDABy3ik=" },
        n = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "ad_account_id",
                variableName: "adAccountId",
              },
            ],
            kind: "ScalarField",
            name: "maiba_has_proactive_summary_count",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: t,
          name: "MAIBASummaryCardCountQuery",
          selections: n,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBASummaryCardCountQuery",
          selections: n,
        },
        params: {
          id: "26753961037595055",
          metadata: t,
          name: "MAIBASummaryCardCountQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
