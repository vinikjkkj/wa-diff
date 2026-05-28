__d(
  "WAWebBizAIKnowledgeDrawerFaqsQuery.graphql",
  ["WAWebBizAIKnowledgeDrawerFaqsQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "XFBMetaAIBizAgentWAAIHome",
          kind: "LinkedField",
          name: "xfb_meta_ai_biz_agent_wa_ai_home",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XFBMetaAIBizAgentWAKnowlegeEntry",
              kind: "LinkedField",
              name: "ordered_knowledge",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "knowledge_type",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "string_data",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBMetaAIBizAgentWAAbilityKnowledgeFAQ",
                  kind: "LinkedField",
                  name: "faq_data",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "id",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "question",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "answer",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAIKnowledgeDrawerFaqsQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizAIKnowledgeDrawerFaqsQuery",
          selections: e,
        },
        params: {
          id: n("WAWebBizAIKnowledgeDrawerFaqsQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAIKnowledgeDrawerFaqsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
