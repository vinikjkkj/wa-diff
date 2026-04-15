__d(
  "WAWebBizAiRuleCreateMutation.graphql",
  ["WAWebBizAiRuleCreateMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "request" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "request", variableName: "request" },
            ],
            concreteType: "XFBMetaAIBizAgentWARuleUpdateResponse",
            kind: "LinkedField",
            name: "xfb_meta_ai_biz_agent_wa_create_rule",
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
                name: "rule",
                plural: !1,
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
                    concreteType:
                      "XFBMetaAIBusinessAgentWhatsAppRulePriceConfig",
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
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAiRuleCreateMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAiRuleCreateMutation",
          selections: t,
        },
        params: {
          id: n("WAWebBizAiRuleCreateMutation_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAiRuleCreateMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
