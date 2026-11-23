__d(
  "MAIBAResumeAsyncTaskMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "task_id" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "task_id", variableName: "task_id" },
            ],
            concreteType: "XFBMAIBAAsyncTask",
            kind: "LinkedField",
            name: "maiba_async_task_resume",
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
                name: "status",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "next_execution_time",
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
          name: "MAIBAResumeAsyncTaskMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAResumeAsyncTaskMutation",
          selections: t,
        },
        params: {
          id: "36481311314848747",
          metadata: {},
          name: "MAIBAResumeAsyncTaskMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
