__d(
  "WAWebBizAiReengagementUpdateMutation.graphql",
  ["WAWebBizAiReengagementUpdateMutation_facebookRelayOperation"],
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
            concreteType: "XFBMetaAIBizAgentWAReengagementResponse",
            kind: "LinkedField",
            name: "xfb_meta_ai_biz_agent_wa_update_reengagement",
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
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAiReengagementUpdateMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAiReengagementUpdateMutation",
          selections: t,
        },
        params: {
          id: n("WAWebBizAiReengagementUpdateMutation_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAiReengagementUpdateMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
