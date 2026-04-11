__d(
  "WAWebAiAgentAutoReplyControlMutation.graphql",
  ["WAWebAiAgentAutoReplyControlMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "consumer_lid" },
          { defaultValue: null, kind: "LocalArgument", name: "phone_number" },
          { defaultValue: null, kind: "LocalArgument", name: "thread_status" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "consumer_lid",
                variableName: "consumer_lid",
              },
              {
                kind: "Variable",
                name: "phone_number",
                variableName: "phone_number",
              },
              {
                kind: "Variable",
                name: "thread_status",
                variableName: "thread_status",
              },
            ],
            concreteType: "XFBWhatsAppSMBBotSyncResponse",
            kind: "LinkedField",
            name: "xfb_whatsapp_smb_maiba_status_update",
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
          name: "WAWebAiAgentAutoReplyControlMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebAiAgentAutoReplyControlMutation",
          selections: t,
        },
        params: {
          id: n("WAWebAiAgentAutoReplyControlMutation_facebookRelayOperation"),
          metadata: {},
          name: "WAWebAiAgentAutoReplyControlMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
