__d(
  "WAWebBizAIPaymentRequestsQuery.graphql",
  ["WAWebBizAIPaymentRequestsQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      fragment: {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "WAWebBizAIPaymentRequestsQuery",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "XFBMetaAIBizAgentWAAIHome",
            kind: "LinkedField",
            name: "xfb_meta_ai_biz_agent_wa_ai_home",
            plural: !1,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "WAWebBizAIPaymentSettingsUtils_home",
              },
            ],
            storageKey: null,
          },
        ],
        type: "Query",
        abstractKey: null,
      },
      kind: "Request",
      operation: {
        argumentDefinitions: [],
        kind: "Operation",
        name: "WAWebBizAIPaymentRequestsQuery",
        selections: [
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
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
      },
      params: {
        id: n("WAWebBizAIPaymentRequestsQuery_facebookRelayOperation"),
        metadata: {},
        name: "WAWebBizAIPaymentRequestsQuery",
        operationKind: "query",
        text: null,
      },
    };
    a.exports = e;
  },
  null,
);
