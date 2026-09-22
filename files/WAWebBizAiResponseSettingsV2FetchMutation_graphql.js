__d(
  "WAWebBizAiResponseSettingsV2FetchMutation.graphql",
  ["WAWebBizAiResponseSettingsV2FetchMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "XFBMetaAIBizAgentWAResponseSettingsV2",
          kind: "LinkedField",
          name: "xfb_meta_ai_biz_agent_wa_fetch_response_settings_v2",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XFBMetaAIBizAgentWAResponseAudienceRule",
              kind: "LinkedField",
              name: "audience_rules",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "mode",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "selector_type",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "status",
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
          name: "WAWebBizAiResponseSettingsV2FetchMutation",
          selections: e,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizAiResponseSettingsV2FetchMutation",
          selections: e,
        },
        params: {
          id: n(
            "WAWebBizAiResponseSettingsV2FetchMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAiResponseSettingsV2FetchMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
