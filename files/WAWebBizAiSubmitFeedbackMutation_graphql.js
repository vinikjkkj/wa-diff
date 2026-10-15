__d(
  "WAWebBizAiSubmitFeedbackMutation.graphql",
  ["WAWebBizAiSubmitFeedbackMutation_facebookRelayOperation"],
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
            concreteType: "WhatsAppSMBBusinessFeedbackResponse",
            kind: "LinkedField",
            name: "meta_ai_biz_agent_wa_submit_feedback",
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
          name: "WAWebBizAiSubmitFeedbackMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAiSubmitFeedbackMutation",
          selections: t,
        },
        params: {
          id: n("WAWebBizAiSubmitFeedbackMutation_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAiSubmitFeedbackMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
