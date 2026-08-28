__d(
  "SkipStoppedMessagesMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "external_conversation_id",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "linked_ad_account_id",
        },
        n = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "offline_threading_id",
        },
        r = [
          {
            fields: [
              {
                kind: "Variable",
                name: "external_conversation_id",
                variableName: "external_conversation_id",
              },
              {
                kind: "Variable",
                name: "linked_ad_account_id",
                variableName: "linked_ad_account_id",
              },
              {
                kind: "Variable",
                name: "offline_threading_id",
                variableName: "offline_threading_id",
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
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "stopped_response_ids",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, n],
          kind: "Fragment",
          metadata: null,
          name: "SkipStoppedMessagesMutation",
          selections: [
            {
              alias: null,
              args: r,
              concreteType: null,
              kind: "LinkedField",
              name: "xfb_maiba_exclude_stopped_messages",
              plural: !1,
              selections: [o, a],
              storageKey: null,
            },
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, n, t],
          kind: "Operation",
          name: "SkipStoppedMessagesMutation",
          selections: [
            {
              alias: null,
              args: r,
              concreteType: null,
              kind: "LinkedField",
              name: "xfb_maiba_exclude_stopped_messages",
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
                a,
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
          id: "26694603500221207",
          metadata: {},
          name: "SkipStoppedMessagesMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
