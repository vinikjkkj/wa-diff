__d(
  "WAWebBizAIBestsellersDrawerQuery.graphql",
  ["WAWebBizAIBestsellersDrawerQuery_facebookRelayOperation"],
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
              concreteType: "XFBMetaAIBizAgentWAAbilityKnowledgeData",
              kind: "LinkedField",
              name: "knowledge",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "ProductItem",
                  kind: "LinkedField",
                  name: "bestsellers",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "id",
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
          name: "WAWebBizAIBestsellersDrawerQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizAIBestsellersDrawerQuery",
          selections: e,
        },
        params: {
          id: n("WAWebBizAIBestsellersDrawerQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAIBestsellersDrawerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
