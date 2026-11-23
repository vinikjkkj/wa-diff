__d(
  "MAIBANullStateShadowSummaryLoggerMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "MAIBALogNullStateShadowSummaryResponse",
            kind: "LinkedField",
            name: "maiba_log_null_state_shadow_summary",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "accepted",
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
          name: "MAIBANullStateShadowSummaryLoggerMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBANullStateShadowSummaryLoggerMutation",
          selections: t,
        },
        params: {
          id: "29032679106425362",
          metadata: {},
          name: "MAIBANullStateShadowSummaryLoggerMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
