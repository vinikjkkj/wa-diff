__d(
  "MAIBADeleteProactiveTaskMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "ad_account_id" },
          { defaultValue: null, kind: "LocalArgument", name: "template_key" },
        ],
        t = [
          {
            kind: "Variable",
            name: "ad_account_id",
            variableName: "ad_account_id",
          },
          {
            kind: "Variable",
            name: "template_key",
            variableName: "template_key",
          },
        ],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "deleted_allocation_id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MAIBADeleteProactiveTaskMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "MAIBAProactiveTaskDeleteResponse",
              kind: "LinkedField",
              name: "maiba_proactive_task_delete",
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
          name: "MAIBADeleteProactiveTaskMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "MAIBAProactiveTaskDeleteResponse",
              kind: "LinkedField",
              name: "maiba_proactive_task_delete",
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
                  name: "deleted_allocation_id",
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "28182930291386970",
          metadata: {},
          name: "MAIBADeleteProactiveTaskMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
