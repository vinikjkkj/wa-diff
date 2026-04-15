__d(
  "WAWebBizAiReplyBotEnabledTimeUpdateMutation.graphql",
  ["WAWebBizAiReplyBotEnabledTimeUpdateMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType:
              "XFBMetaAIBizAgentWAReplyBotEnabledTimeUpdateResponse",
            kind: "LinkedField",
            name: "xfb_meta_ai_biz_agent_wa_update_bot_enabled_time",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
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
          name: "WAWebBizAiReplyBotEnabledTimeUpdateMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAiReplyBotEnabledTimeUpdateMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizAiReplyBotEnabledTimeUpdateMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAiReplyBotEnabledTimeUpdateMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
