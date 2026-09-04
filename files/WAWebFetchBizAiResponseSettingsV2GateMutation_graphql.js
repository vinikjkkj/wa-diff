__d(
  "WAWebFetchBizAiResponseSettingsV2GateMutation.graphql",
  ["WAWebFetchBizAiResponseSettingsV2GateMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: [
            { kind: "Literal", name: "default", value: !1 },
            { kind: "Literal", name: "log_exposures", value: !0 },
            {
              kind: "Literal",
              name: "param",
              value: "wa_biz_ai_audience_control_v2_enabled",
            },
            {
              kind: "Literal",
              name: "universe",
              value: "wa_biz_ai_agents_general10",
            },
          ],
          concreteType: "XFBMetaAIBizAgentWAQEBoolResult",
          kind: "LinkedField",
          name: "xfb_meta_ai_biz_agent_wa_fetch_qe_bool",
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
              kind: "ScalarField",
              name: "value",
              storageKey: null,
            },
          ],
          storageKey:
            'xfb_meta_ai_biz_agent_wa_fetch_qe_bool(default:false,log_exposures:true,param:"wa_biz_ai_audience_control_v2_enabled",universe:"wa_biz_ai_agents_general10")',
        },
      ];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "WAWebFetchBizAiResponseSettingsV2GateMutation",
          selections: e,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebFetchBizAiResponseSettingsV2GateMutation",
          selections: e,
        },
        params: {
          id: n(
            "WAWebFetchBizAiResponseSettingsV2GateMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebFetchBizAiResponseSettingsV2GateMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
