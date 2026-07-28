__d(
  "WAWebBizAiHandoffRemovalTimingUpdateMutation.graphql",
  ["WAWebBizAiHandoffRemovalTimingUpdateMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType:
              "XFBMetaAIBizAgentWAHandoffRemovalTimingUpdateResponse",
            kind: "LinkedField",
            name: "xfb_meta_ai_biz_agent_wa_update_handoff_removal_timing",
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
          name: "WAWebBizAiHandoffRemovalTimingUpdateMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAiHandoffRemovalTimingUpdateMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizAiHandoffRemovalTimingUpdateMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAiHandoffRemovalTimingUpdateMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
