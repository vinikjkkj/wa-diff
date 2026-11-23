__d(
  "MAIBARiskRecoveryPromptQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "adAccountID" },
          { defaultValue: null, kind: "LocalArgument", name: "generation" },
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
              {
                kind: "Variable",
                name: "resolution_generation",
                variableName: "generation",
              },
            ],
            concreteType: "MAIBAAdAccountNode",
            kind: "LinkedField",
            name: "maiba_risk_recovery_prompt_account",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "failed_payment_prompt_text",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "legacy_account_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "risk_recovery_prompt_status",
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
          name: "MAIBARiskRecoveryPromptQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBARiskRecoveryPromptQuery",
          selections: t,
        },
        params: {
          id: "28500700926218055",
          metadata: {},
          name: "MAIBARiskRecoveryPromptQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
