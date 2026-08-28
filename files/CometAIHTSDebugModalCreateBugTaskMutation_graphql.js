__d(
  "CometAIHTSDebugModalCreateBugTaskMutation.graphql",
  ["CometAIHTSDebugModalCreateBugTaskMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "CometAiHtsCreateBugTaskResponsePayload",
            kind: "LinkedField",
            name: "comet_ai_hts_create_bug_task",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "task_number",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "task_url",
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
          name: "CometAIHTSDebugModalCreateBugTaskMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "CometAIHTSDebugModalCreateBugTaskMutation",
          selections: t,
        },
        params: {
          id: n(
            "CometAIHTSDebugModalCreateBugTaskMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "CometAIHTSDebugModalCreateBugTaskMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
