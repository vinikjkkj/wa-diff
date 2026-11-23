__d(
  "MAIBAA2UIWidgetStateProviderMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [{ kind: "Variable", name: "input", variableName: "input" }],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        r = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "widget_states",
              storageKey: null,
            },
          ],
          type: "XFBMAIBAMessageComposedTextContent",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MAIBAA2UIWidgetStateProviderMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "MAIBAPersistWidgetStateMutationResponse",
              kind: "LinkedField",
              name: "maiba_persist_widget_state",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBMAIBAMessage",
                  kind: "LinkedField",
                  name: "message",
                  plural: !1,
                  selections: [
                    n,
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "content",
                      plural: !1,
                      selections: [r],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
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
          name: "MAIBAA2UIWidgetStateProviderMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "MAIBAPersistWidgetStateMutationResponse",
              kind: "LinkedField",
              name: "maiba_persist_widget_state",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBMAIBAMessage",
                  kind: "LinkedField",
                  name: "message",
                  plural: !1,
                  selections: [
                    n,
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "content",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "__typename",
                          storageKey: null,
                        },
                        r,
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "27016247811372834",
          metadata: {},
          name: "MAIBAA2UIWidgetStateProviderMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
