__d(
  "WAWebBizAiLeadGenMarkSeenMutation.graphql",
  ["WAWebBizAiLeadGenMarkSeenMutation_facebookRelayOperation"],
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
            concreteType: "XFBMetaAIBizAgentWALeadGenDataMutationResponse",
            kind: "LinkedField",
            name: "xfb_meta_ai_biz_agent_wa_mark_lead_gen_data_as_seen",
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
          name: "WAWebBizAiLeadGenMarkSeenMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAiLeadGenMarkSeenMutation",
          selections: t,
        },
        params: {
          id: n("WAWebBizAiLeadGenMarkSeenMutation_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAiLeadGenMarkSeenMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
