__d(
  "WAWebBizAiSmartComposerAiRepliesStatusMutation.graphql",
  ["WAWebBizAiSmartComposerAiRepliesStatusMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "consumer_lid",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "phone_number" },
        r = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "suggested_replies_enabled",
        },
        o = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "thread_status",
        },
        a = [
          {
            alias: null,
            args: [
              {
                fields: [
                  {
                    kind: "Variable",
                    name: "ai_replies_status",
                    variableName: "thread_status",
                  },
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
                    name: "suggested_replies_enabled",
                    variableName: "suggested_replies_enabled",
                  },
                ],
                kind: "ObjectValue",
                name: "params",
              },
            ],
            concreteType: "XFBWhatsAppSMBBotSyncResponse",
            kind: "LinkedField",
            name: "xfb_whatsapp_smb_maiba_ai_replies_status_update",
            plural: !1,
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
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "suggested_replies_enabled",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, r, o],
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAiSmartComposerAiRepliesStatusMutation",
          selections: a,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, t, o, r],
          kind: "Operation",
          name: "WAWebBizAiSmartComposerAiRepliesStatusMutation",
          selections: a,
        },
        params: {
          id: n(
            "WAWebBizAiSmartComposerAiRepliesStatusMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAiSmartComposerAiRepliesStatusMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
