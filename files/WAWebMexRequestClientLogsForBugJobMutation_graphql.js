__d(
  "WAWebMexRequestClientLogsForBugJobMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            kind: "ScalarField",
            name: "xwa2_request_client_logs_for_bug",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebMexRequestClientLogsForBugJobMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebMexRequestClientLogsForBugJobMutation",
          selections: t,
        },
        params: {
          id: "27135500612803533",
          metadata: {},
          name: "WAWebMexRequestClientLogsForBugJobMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
