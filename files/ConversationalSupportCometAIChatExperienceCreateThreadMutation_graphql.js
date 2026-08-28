__d(
  "ConversationalSupportCometAIChatExperienceCreateThreadMutation.graphql",
  [
    "ConversationalSupportCometAIChatExperienceCreateThreadMutation_facebookRelayOperation",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "XFBCometAiChatCreateThreadWithTokenResponsePayload",
            kind: "LinkedField",
            name: "xfb_comet_ai_chat_create_thread_with_token",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "token",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "thread_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "messaging_user_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "messaging_user_token",
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
          name: "ConversationalSupportCometAIChatExperienceCreateThreadMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "ConversationalSupportCometAIChatExperienceCreateThreadMutation",
          selections: t,
        },
        params: {
          id: n(
            "ConversationalSupportCometAIChatExperienceCreateThreadMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "ConversationalSupportCometAIChatExperienceCreateThreadMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
