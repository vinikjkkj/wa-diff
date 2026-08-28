__d(
  "navigateToProductInsightsWithDefaultTabQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "ad_account_id" },
        ],
        t = [
          {
            alias: "default_tab",
            args: [
              {
                kind: "Variable",
                name: "ad_account_id",
                variableName: "ad_account_id",
              },
            ],
            kind: "ScalarField",
            name: "product_insights_default_tab",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "navigateToProductInsightsWithDefaultTabQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "navigateToProductInsightsWithDefaultTabQuery",
          selections: t,
        },
        params: {
          id: "34304901339157810",
          metadata: {},
          name: "navigateToProductInsightsWithDefaultTabQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
