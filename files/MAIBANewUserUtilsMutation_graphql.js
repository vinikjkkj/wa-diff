__d(
  "MAIBANewUserUtilsMutation.graphql",
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
            name: "maiba_increment_welcome_page_impression_count",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MAIBANewUserUtilsMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBANewUserUtilsMutation",
          selections: t,
        },
        params: {
          id: "27298425733088580",
          metadata: {},
          name: "MAIBANewUserUtilsMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
