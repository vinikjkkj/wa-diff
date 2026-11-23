__d(
  "MAIBADeleteAsyncTaskMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "task_id" }],
        t = [{ kind: "Variable", name: "task_id", variableName: "task_id" }],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "deleted_task_id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MAIBADeleteAsyncTaskMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "MAIBAAsyncTaskDeleteResponse",
              kind: "LinkedField",
              name: "maiba_async_task_delete",
              plural: !1,
              selections: [n],
              storageKey: null,
            },
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBADeleteAsyncTaskMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "MAIBAAsyncTaskDeleteResponse",
              kind: "LinkedField",
              name: "maiba_async_task_delete",
              plural: !1,
              selections: [
                n,
                {
                  alias: null,
                  args: null,
                  filters: null,
                  handle: "deleteRecord",
                  key: "",
                  kind: "ScalarHandle",
                  name: "deleted_task_id",
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "26899868353045376",
          metadata: {},
          name: "MAIBADeleteAsyncTaskMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
