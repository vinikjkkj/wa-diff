__d(
  "DirectSupportConsentCardDismissMutation.graphql",
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
            kind: "ScalarField",
            name: "bm_support_dismiss_consent",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "DirectSupportConsentCardDismissMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "DirectSupportConsentCardDismissMutation",
          selections: t,
        },
        params: {
          id: "28913094651624412",
          metadata: {},
          name: "DirectSupportConsentCardDismissMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
