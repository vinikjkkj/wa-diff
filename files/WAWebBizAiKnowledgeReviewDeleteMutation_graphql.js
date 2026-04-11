__d(
  "WAWebBizAiKnowledgeReviewDeleteMutation.graphql",
  ["WAWebBizAiKnowledgeReviewDeleteMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "id" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "id", variableName: "id" }],
            concreteType: "XFBMAIBAPotentialKnowledgeMutationResponse",
            kind: "LinkedField",
            name: "xfb_maiba_delete_potential_knowledge_mutation",
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
          name: "WAWebBizAiKnowledgeReviewDeleteMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAiKnowledgeReviewDeleteMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizAiKnowledgeReviewDeleteMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAiKnowledgeReviewDeleteMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
