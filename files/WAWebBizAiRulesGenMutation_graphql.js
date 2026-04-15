__d(
  "WAWebBizAiRulesGenMutation.graphql",
  ["WAWebBizAiRulesGenMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "XFBMetaAIBizAgentWARuleResponse",
          kind: "LinkedField",
          name: "xfb_meta_ai_biz_agent_wa_gen_rules",
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
              concreteType: "XFBMetaAIBusinessAgentWhatsAppRule",
              kind: "LinkedField",
              name: "rules",
              plural: !0,
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
                  name: "rule_type",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "custom_rule",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType:
                    "XFBMetaAIBusinessAgentWhatsAppRuleEmojisConfig",
                  kind: "LinkedField",
                  name: "emojis_config",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "emojis_freq",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBMetaAIBusinessAgentWhatsAppRulePriceConfig",
                  kind: "LinkedField",
                  name: "price_config",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "price_sharing",
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
              concreteType: "XFBMetaAIBizAgentWAReengagementResponse",
              kind: "LinkedField",
              name: "reengagement",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "enabled",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "amount",
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
          name: "WAWebBizAiRulesGenMutation",
          selections: e,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizAiRulesGenMutation",
          selections: e,
        },
        params: {
          id: n("WAWebBizAiRulesGenMutation_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAiRulesGenMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
