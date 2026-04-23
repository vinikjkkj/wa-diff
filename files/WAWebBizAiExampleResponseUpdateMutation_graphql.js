__d(
  "WAWebBizAiExampleResponseUpdateMutation.graphql",
  ["WAWebBizAiExampleResponseUpdateMutation_facebookRelayOperation"],
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
            name: "xfb_meta_ai_biz_agent_wa_update_knowledge",
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
          name: "WAWebBizAiExampleResponseUpdateMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAiExampleResponseUpdateMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizAiExampleResponseUpdateMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAiExampleResponseUpdateMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
