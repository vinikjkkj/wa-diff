__d(
  "WAWebBizAILeadGenResponseDetailDrawerMarkSeenMutation.graphql",
  [
    "WAWebBizAILeadGenResponseDetailDrawerMarkSeenMutation_facebookRelayOperation",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "request", variableName: "input" },
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
          name: "WAWebBizAILeadGenResponseDetailDrawerMarkSeenMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAILeadGenResponseDetailDrawerMarkSeenMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizAILeadGenResponseDetailDrawerMarkSeenMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAILeadGenResponseDetailDrawerMarkSeenMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
