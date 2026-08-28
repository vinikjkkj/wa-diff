__d(
  "CometAIHTSDebugModalSendDebugInfoMutation.graphql",
  ["CometAIHTSDebugModalSendDebugInfoMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "CometAiHtsSendDebugInfoResponsePayload",
            kind: "LinkedField",
            name: "comet_ai_hts_send_debug_info",
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
          name: "CometAIHTSDebugModalSendDebugInfoMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "CometAIHTSDebugModalSendDebugInfoMutation",
          selections: t,
        },
        params: {
          id: n(
            "CometAIHTSDebugModalSendDebugInfoMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "CometAIHTSDebugModalSendDebugInfoMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
