__d(
  "WAWebBizAiKnowledgeSourceDeleteMutation.graphql",
  ["WAWebBizAiKnowledgeSourceDeleteMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "XFBMetaAIBizAgentWATriggerFileDeletionReturn",
            kind: "LinkedField",
            name: "xfb_maiba_trigger_file_deletion",
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
          name: "WAWebBizAiKnowledgeSourceDeleteMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAiKnowledgeSourceDeleteMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizAiKnowledgeSourceDeleteMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAiKnowledgeSourceDeleteMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
