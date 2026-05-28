__d(
  "WAWebBizAIKnowledgeDrawerProductsQuery.graphql",
  ["WAWebBizAIKnowledgeDrawerProductsQuery_facebookRelayOperation"],
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
              concreteType: "XFBMetaAIBizAgentWAProductInfoKnowledgeEntry",
              kind: "LinkedField",
              name: "product_info_knowledge",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "product_id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "description",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "price",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType:
                    "XFBMetaAIBizAgentWAProductInfoKnowledgeImageEntry",
                  kind: "LinkedField",
                  name: "images",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "image_id",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "original_url",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "thumbnail_url",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "XFBMAIBAProductInfoEligibilityResponse",
              kind: "LinkedField",
              name: "product_info_eligibility",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "eligible",
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
          name: "WAWebBizAIKnowledgeDrawerProductsQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizAIKnowledgeDrawerProductsQuery",
          selections: e,
        },
        params: {
          id: n(
            "WAWebBizAIKnowledgeDrawerProductsQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAIKnowledgeDrawerProductsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
