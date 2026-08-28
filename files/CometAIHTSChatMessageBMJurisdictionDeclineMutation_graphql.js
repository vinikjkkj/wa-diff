__d(
  "CometAIHTSChatMessageBMJurisdictionDeclineMutation.graphql",
  ["CometAIHTSChatMessageBMJurisdictionDeclineMutation_facebookRelayOperation"],
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
              "BmSupportAxonDeclineJurisdictionAcknowledgmentResponsePayload",
            kind: "LinkedField",
            name: "bm_support_axon_decline_jurisdiction_acknowledgment",
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
          name: "CometAIHTSChatMessageBMJurisdictionDeclineMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "CometAIHTSChatMessageBMJurisdictionDeclineMutation",
          selections: t,
        },
        params: {
          id: n(
            "CometAIHTSChatMessageBMJurisdictionDeclineMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "CometAIHTSChatMessageBMJurisdictionDeclineMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
