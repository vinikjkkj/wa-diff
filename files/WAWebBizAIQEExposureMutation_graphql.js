__d(
  "WAWebBizAIQEExposureMutation.graphql",
  ["WAWebBizAIQEExposureMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "XFBMetaAIBizAgentWAWebExperimentExposurePayload",
            kind: "LinkedField",
            name: "xfb_meta_ai_biz_agent_wa_web_experiment_log_exposure",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "value",
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
          name: "WAWebBizAIQEExposureMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAIQEExposureMutation",
          selections: t,
        },
        params: {
          id: n("WAWebBizAIQEExposureMutation_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAIQEExposureMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
