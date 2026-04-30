__d(
  "WAWebBizAiKnowledgeSourceUploadMutation.graphql",
  ["WAWebBizAiKnowledgeSourceUploadMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType:
              "XFBMetaAIBizAgentWATriggerFileKnowledgeExtractionReturn",
            kind: "LinkedField",
            name: "xfb_maiba_trigger_file_knowledge_extraction",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "uploaded_file_data_source_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "error",
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
          name: "WAWebBizAiKnowledgeSourceUploadMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAiKnowledgeSourceUploadMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizAiKnowledgeSourceUploadMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAiKnowledgeSourceUploadMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
