__d(
  "CometAIHTSChatMessageBMJurisdictionConfirmMutation.graphql",
  ["CometAIHTSChatMessageBMJurisdictionConfirmMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "thread_id" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "thread_id",
                variableName: "thread_id",
              },
            ],
            concreteType:
              "BmSupportAxonConfirmJurisdictionAcknowledgmentResponsePayload",
            kind: "LinkedField",
            name: "bm_support_axon_confirm_jurisdiction_acknowledgment",
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
          name: "CometAIHTSChatMessageBMJurisdictionConfirmMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "CometAIHTSChatMessageBMJurisdictionConfirmMutation",
          selections: t,
        },
        params: {
          id: n(
            "CometAIHTSChatMessageBMJurisdictionConfirmMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "CometAIHTSChatMessageBMJurisdictionConfirmMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
