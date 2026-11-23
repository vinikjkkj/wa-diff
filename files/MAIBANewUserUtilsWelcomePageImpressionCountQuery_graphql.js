__d(
  "MAIBANewUserUtilsWelcomePageImpressionCountQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "user_id" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "user_id", variableName: "user_id" },
            ],
            kind: "ScalarField",
            name: "maiba_welcome_page_impression_count",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MAIBANewUserUtilsWelcomePageImpressionCountQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBANewUserUtilsWelcomePageImpressionCountQuery",
          selections: t,
        },
        params: {
          id: "26946445371696919",
          metadata: {},
          name: "MAIBANewUserUtilsWelcomePageImpressionCountQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
