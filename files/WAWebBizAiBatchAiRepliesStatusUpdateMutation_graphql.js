__d(
  "WAWebBizAiBatchAiRepliesStatusUpdateMutation.graphql",
  ["WAWebBizAiBatchAiRepliesStatusUpdateMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "updates" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "updates", variableName: "updates" },
            ],
            concreteType: "XFBWhatsAppSMBBotSyncResponse",
            kind: "LinkedField",
            name: "xfb_whatsapp_smb_maiba_batch_thread_state_update",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "update_timestamp_ms",
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
          name: "WAWebBizAiBatchAiRepliesStatusUpdateMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAiBatchAiRepliesStatusUpdateMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizAiBatchAiRepliesStatusUpdateMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAiBatchAiRepliesStatusUpdateMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
