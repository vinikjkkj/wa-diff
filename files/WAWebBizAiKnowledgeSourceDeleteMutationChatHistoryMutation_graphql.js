__d(
  "WAWebBizAiKnowledgeSourceDeleteMutationChatHistoryMutation.graphql",
  [
    "WAWebBizAiKnowledgeSourceDeleteMutationChatHistoryMutation_facebookRelayOperation",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "XFBMetaAIBizAgentWADeleteChatHistoryReturn",
          kind: "LinkedField",
          name: "xfb_maiba_delete_chat_history",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "success",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAiKnowledgeSourceDeleteMutationChatHistoryMutation",
          selections: e,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizAiKnowledgeSourceDeleteMutationChatHistoryMutation",
          selections: e,
        },
        params: {
          id: n(
            "WAWebBizAiKnowledgeSourceDeleteMutationChatHistoryMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAiKnowledgeSourceDeleteMutationChatHistoryMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
