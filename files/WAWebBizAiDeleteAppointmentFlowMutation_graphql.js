__d(
  "WAWebBizAiDeleteAppointmentFlowMutation.graphql",
  ["WAWebBizAiDeleteAppointmentFlowMutation_facebookRelayOperation"],
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
            concreteType: "MetaAIBizAgentWAAppointmentFlowResponse",
            kind: "LinkedField",
            name: "meta_ai_biz_agent_wa_delete_appointment_flow",
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
          name: "WAWebBizAiDeleteAppointmentFlowMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAiDeleteAppointmentFlowMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizAiDeleteAppointmentFlowMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAiDeleteAppointmentFlowMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
