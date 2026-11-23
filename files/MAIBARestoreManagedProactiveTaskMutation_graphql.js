__d(
  "MAIBARestoreManagedProactiveTaskMutation.graphql",
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
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          concreteType: "MAIBAProactiveTaskAllocation",
          kind: "LinkedField",
          name: "allocation",
          plural: !1,
          selections: [
            r,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "allocation_key",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "lifecycle_state",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "MAIBAProactiveTaskRun",
              kind: "LinkedField",
              name: "past_runs",
              plural: !0,
              selections: [
                r,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "conversation_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "executed_at",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "execution_status",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "external_conversation_id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "template_key",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "template_version",
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MAIBARestoreManagedProactiveTaskMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "MAIBAProactiveTaskRestoreResponse",
              kind: "LinkedField",
              name: "maiba_proactive_task_restore_managed",
              plural: !1,
              selections: [n, o],
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
          name: "MAIBARestoreManagedProactiveTaskMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "MAIBAProactiveTaskRestoreResponse",
              kind: "LinkedField",
              name: "maiba_proactive_task_restore_managed",
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
                o,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "28932143019743122",
          metadata: {},
          name: "MAIBARestoreManagedProactiveTaskMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
