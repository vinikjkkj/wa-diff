__d(
  "WAWebBizAiKnowledgeReviewCommitMutation.graphql",
  ["WAWebBizAiKnowledgeReviewCommitMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "ids" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "ids", variableName: "ids" }],
            concreteType: "XFBMAIBAPotentialKnowledgeMutationResponse",
            kind: "LinkedField",
            name: "xfb_maiba_approve_potential_knowledge",
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
          name: "WAWebBizAiKnowledgeReviewCommitMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAiKnowledgeReviewCommitMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizAiKnowledgeReviewCommitMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAiKnowledgeReviewCommitMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
