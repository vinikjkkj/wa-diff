__d(
  "ConversationalSupportCometAIChatExperienceOnChatOpenedMutation.graphql",
  [
    "ConversationalSupportCometAIChatExperienceOnChatOpenedMutation_facebookRelayOperation",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "XFBConvCometAiChatOnOpenedResponsePayload",
            kind: "LinkedField",
            name: "xfb_conv_comet_ai_chat_on_opened",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "token",
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
          name: "ConversationalSupportCometAIChatExperienceOnChatOpenedMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "ConversationalSupportCometAIChatExperienceOnChatOpenedMutation",
          selections: t,
        },
        params: {
          id: n(
            "ConversationalSupportCometAIChatExperienceOnChatOpenedMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "ConversationalSupportCometAIChatExperienceOnChatOpenedMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
