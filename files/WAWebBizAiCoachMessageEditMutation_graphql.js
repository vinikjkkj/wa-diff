__d(
  "WAWebBizAiCoachMessageEditMutation.graphql",
  ["WAWebBizAiCoachMessageEditMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "params", variableName: "input" }],
            concreteType: "XFBMetaAiBizAgentWaCoachAiResponseResponsePayload",
            kind: "LinkedField",
            name: "xfb_meta_ai_biz_agent_wa_coach_ai_response",
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
          name: "WAWebBizAiCoachMessageEditMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAiCoachMessageEditMutation",
          selections: t,
        },
        params: {
          id: n("WAWebBizAiCoachMessageEditMutation_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAiCoachMessageEditMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
