__d(
  "MAIBAChatThread_useMAIBAChatThreadQueryFetchPolicyQuery.graphql",
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
                  name: "relay_record_initially_created_locally",
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
          name: "MAIBAChatThread_useMAIBAChatThreadQueryFetchPolicyQuery",
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
          name: "MAIBAChatThread_useMAIBAChatThreadQueryFetchPolicyQuery",
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
          id: "27263190626608634",
          metadata: {},
          name: "MAIBAChatThread_useMAIBAChatThreadQueryFetchPolicyQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
