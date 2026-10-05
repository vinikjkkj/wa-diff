__d(
  "WAWebFetchBizAiWebSmartComposerAiListsGateQuery.graphql",
  ["WAWebFetchBizAiWebSmartComposerAiListsGateQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "value",
            storageKey: null,
          },
        ],
        t = [
          {
            alias: null,
            args: null,
            concreteType: "XFBMetaAIBizAgentWAQEBoolResult",
            kind: "LinkedField",
            name: "xfb_meta_ai_biz_agent_wa_web_smart_composer_ai_lists_gate",
            plural: !1,
            selections: e,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "XFBMetaAIBizAgentWAQEBoolResult",
            kind: "LinkedField",
            name: "xfb_meta_ai_biz_agent_wa_web_ai_editing_coaching_gate",
            plural: !1,
            selections: e,
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "WAWebFetchBizAiWebSmartComposerAiListsGateQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebFetchBizAiWebSmartComposerAiListsGateQuery",
          selections: t,
        },
        params: {
          id: n(
            "WAWebFetchBizAiWebSmartComposerAiListsGateQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebFetchBizAiWebSmartComposerAiListsGateQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
