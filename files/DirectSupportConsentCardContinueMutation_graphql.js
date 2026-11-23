__d(
  "DirectSupportConsentCardContinueMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "external_conversation_id",
          },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "external_conversation_id",
                variableName: "external_conversation_id",
              },
            ],
            concreteType: "MAIBAConsentStatusResponse",
            kind: "LinkedField",
            name: "bm_support_continue_after_acknowledgment",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_ads_ai_consented",
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
          name: "DirectSupportConsentCardContinueMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "DirectSupportConsentCardContinueMutation",
          selections: t,
        },
        params: {
          id: "38903993935866625",
          metadata: {},
          name: "DirectSupportConsentCardContinueMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
