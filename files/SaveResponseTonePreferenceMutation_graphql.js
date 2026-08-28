__d(
  "SaveResponseTonePreferenceMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "comparison_conversation_id",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "external_conversation_id",
        },
        n = { defaultValue: null, kind: "LocalArgument", name: "preference" },
        r = [
          {
            fields: [
              {
                kind: "Variable",
                name: "comparison_conversation_id",
                variableName: "comparison_conversation_id",
              },
              {
                kind: "Variable",
                name: "external_conversation_id",
                variableName: "external_conversation_id",
              },
              {
                kind: "Variable",
                name: "preference",
                variableName: "preference",
              },
            ],
            kind: "ObjectValue",
            name: "input",
          },
        ],
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "external_conversation_id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, n],
          kind: "Fragment",
          metadata: null,
          name: "SaveResponseTonePreferenceMutation",
          selections: [
            {
              alias: null,
              args: r,
              concreteType: null,
              kind: "LinkedField",
              name: "xfb_maiba_save_response_tone_preference",
              plural: !1,
              selections: [o],
              storageKey: null,
            },
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, n, e],
          kind: "Operation",
          name: "SaveResponseTonePreferenceMutation",
          selections: [
            {
              alias: null,
              args: r,
              concreteType: null,
              kind: "LinkedField",
              name: "xfb_maiba_save_response_tone_preference",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                o,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "26990211817311085",
          metadata: {},
          name: "SaveResponseTonePreferenceMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
