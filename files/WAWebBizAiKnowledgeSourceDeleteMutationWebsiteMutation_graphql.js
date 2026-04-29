__d(
  "WAWebBizAiKnowledgeSourceDeleteMutationWebsiteMutation.graphql",
  [
    "WAWebBizAiKnowledgeSourceDeleteMutationWebsiteMutation_facebookRelayOperation",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "MetaAIBizAgentWATriggerWebsiteDeletionReturn",
            kind: "LinkedField",
            name: "maiba_trigger_website_deletion",
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
          name: "WAWebBizAiKnowledgeSourceDeleteMutationWebsiteMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAiKnowledgeSourceDeleteMutationWebsiteMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizAiKnowledgeSourceDeleteMutationWebsiteMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAiKnowledgeSourceDeleteMutationWebsiteMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
