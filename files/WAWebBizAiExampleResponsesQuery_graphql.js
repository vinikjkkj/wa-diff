__d(
  "WAWebBizAiExampleResponsesQuery.graphql",
  ["WAWebBizAiExampleResponsesQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        t = [
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
                    name: "data_type",
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
                      e,
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
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "faq_type",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "last_update_ts",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XFBMetaAIBizAgentWAAbilityKnowledgeData",
                kind: "LinkedField",
                name: "knowledge",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "website",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBMetaAIBizAgentWAWebsiteInfoOutput",
                    kind: "LinkedField",
                    name: "websites",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "website_type",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "website_url",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "ProductItem",
                    kind: "LinkedField",
                    name: "bestsellers",
                    plural: !0,
                    selections: [e],
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
          name: "WAWebBizAiExampleResponsesQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizAiExampleResponsesQuery",
          selections: t,
        },
        params: {
          id: n("WAWebBizAiExampleResponsesQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAiExampleResponsesQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
