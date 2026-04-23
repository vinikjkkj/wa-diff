__d(
  "WAWebBizAiExampleResponseDeleteMutation.graphql",
  ["WAWebBizAiExampleResponseDeleteMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "XFBMetaAIBizAgentWAKnowledgeUpdateResponse",
            kind: "LinkedField",
            name: "xfb_meta_ai_biz_agent_wa_delete_knowledge",
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
          name: "WAWebBizAiExampleResponseDeleteMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAiExampleResponseDeleteMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizAiExampleResponseDeleteMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAiExampleResponseDeleteMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
