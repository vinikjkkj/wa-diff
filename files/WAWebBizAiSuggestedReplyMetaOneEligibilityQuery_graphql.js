__d(
  "WAWebBizAiSuggestedReplyMetaOneEligibilityQuery.graphql",
  ["WAWebBizAiSuggestedReplyMetaOneEligibilityQuery_facebookRelayOperation"],
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
                  kind: "ScalarField",
                  name: "subscription_status",
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
          name: "WAWebBizAiSuggestedReplyMetaOneEligibilityQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizAiSuggestedReplyMetaOneEligibilityQuery",
          selections: e,
        },
        params: {
          id: n(
            "WAWebBizAiSuggestedReplyMetaOneEligibilityQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAiSuggestedReplyMetaOneEligibilityQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
