__d(
  "WAWebBizAiSmartComposerHandoffLimitCheckQuery.graphql",
  ["WAWebBizAiSmartComposerHandoffLimitCheckQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "MetaAIBizAgentWASubscriptionStateV2Response",
          kind: "LinkedField",
          name: "meta_ai_biz_agent_wa_subscription_state_v2",
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
              concreteType: "MetaAIBizAgentWASubscriptionStateV2",
              kind: "LinkedField",
              name: "subscription_state",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "MetaAIBizAgentWAUsage",
                  kind: "LinkedField",
                  name: "current_usage",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "usage_status",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "quota_refreshes_at",
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
          name: "WAWebBizAiSmartComposerHandoffLimitCheckQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizAiSmartComposerHandoffLimitCheckQuery",
          selections: e,
        },
        params: {
          id: n(
            "WAWebBizAiSmartComposerHandoffLimitCheckQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAiSmartComposerHandoffLimitCheckQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
