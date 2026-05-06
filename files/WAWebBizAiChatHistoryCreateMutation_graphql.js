__d(
  "WAWebBizAiChatHistoryCreateMutation.graphql",
  ["WAWebBizAiChatHistoryCreateMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "request", variableName: "input" },
            ],
            concreteType: "XFBMetaAIBizAgentWACreateChatHistoryReturn",
            kind: "LinkedField",
            name: "xfb_maiba_create_chat_history",
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
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAiChatHistoryCreateMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAiChatHistoryCreateMutation",
          selections: t,
        },
        params: {
          id: n("WAWebBizAiChatHistoryCreateMutation_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAiChatHistoryCreateMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
