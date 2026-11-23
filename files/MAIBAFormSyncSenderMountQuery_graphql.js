__d(
  "MAIBAFormSyncSenderMountQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "externalConversationId",
          },
        ],
        t = [
          {
            kind: "Variable",
            name: "id",
            variableName: "externalConversationId",
          },
        ],
        n = {
          kind: "InlineFragment",
          selections: [
            {
              kind: "ClientExtension",
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "exists_serverside",
                  storageKey: null,
                },
              ],
            },
          ],
          type: "XFBMAIBAGenAICharmanderConversation",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MAIBAFormSyncSenderMountQuery",
          selections: [
            {
              alias: "node",
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "fetch__XFBMAIBAConversation",
              plural: !1,
              selections: [n],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAFormSyncSenderMountQuery",
          selections: [
            {
              alias: "node",
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "fetch__XFBMAIBAConversation",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                n,
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
          id: "29475517872073863",
          metadata: {},
          name: "MAIBAFormSyncSenderMountQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
