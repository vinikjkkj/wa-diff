__d(
  "WAWebBizAiCreateAppointmentFlowMutation.graphql",
  ["WAWebBizAiCreateAppointmentFlowMutation_facebookRelayOperation"],
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
            name: "meta_ai_biz_agent_wa_create_appointment_flow",
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
          name: "WAWebBizAiCreateAppointmentFlowMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAiCreateAppointmentFlowMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizAiCreateAppointmentFlowMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAiCreateAppointmentFlowMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
