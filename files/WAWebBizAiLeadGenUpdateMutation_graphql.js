__d(
  "WAWebBizAiLeadGenUpdateMutation.graphql",
  ["WAWebBizAiLeadGenUpdateMutation_facebookRelayOperation"],
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
            concreteType: "XFBMetaAIBizAgentWALeadGenFlowUpdateResponse",
            kind: "LinkedField",
            name: "xfb_meta_ai_biz_agent_wa_update_lead_gen_flow",
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
          name: "WAWebBizAiLeadGenUpdateMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAiLeadGenUpdateMutation",
          selections: t,
        },
        params: {
          id: n("WAWebBizAiLeadGenUpdateMutation_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAiLeadGenUpdateMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
