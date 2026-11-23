__d(
  "UpdateMAIBATitleMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "display_title",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "external_conversation_id",
        },
        n = [
          {
            fields: [
              {
                kind: "Variable",
                name: "display_title",
                variableName: "display_title",
              },
              {
                kind: "Variable",
                name: "external_conversation_id",
                variableName: "external_conversation_id",
              },
            ],
            kind: "ObjectValue",
            name: "input",
          },
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "external_conversation_id",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "display_title",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "UpdateMAIBATitleMutation",
          selections: [
            {
              alias: null,
              args: n,
              concreteType: null,
              kind: "LinkedField",
              name: "xfb_maiba_update_thread_title",
              plural: !1,
              selections: [r, o, a],
              storageKey: null,
            },
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "UpdateMAIBATitleMutation",
          selections: [
            {
              alias: null,
              args: n,
              concreteType: null,
              kind: "LinkedField",
              name: "xfb_maiba_update_thread_title",
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
                o,
                a,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "36090126683918978",
          metadata: {},
          name: "UpdateMAIBATitleMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
