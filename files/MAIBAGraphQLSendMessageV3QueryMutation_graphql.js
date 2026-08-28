__d(
  "MAIBAGraphQLSendMessageV3QueryMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "adminText" },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "clientContext",
        },
        n = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayMessage",
        },
        r = { defaultValue: null, kind: "LocalArgument", name: "entrypoint" },
        o = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "externalConversationId",
        },
        a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "hideUserMessage",
        },
        i = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "isInsituPregeneration",
        },
        l = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "isNewConversation",
        },
        s = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "isSentFromOutOfChat",
        },
        u = { defaultValue: null, kind: "LocalArgument", name: "message" },
        c = { defaultValue: null, kind: "LocalArgument", name: "messageType" },
        d = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "offlineThreadingId",
        },
        m = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "postbackPayload",
        },
        p = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "selectedAssets",
        },
        _ = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "selectedSuggestedPrompt",
        },
        f = { defaultValue: null, kind: "LocalArgument", name: "selectedText" },
        g = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "userMediaAttachments",
        },
        h = [
          {
            fields: [
              {
                kind: "Variable",
                name: "admin_text",
                variableName: "adminText",
              },
              {
                kind: "Variable",
                name: "client_context",
                variableName: "clientContext",
              },
              {
                kind: "Variable",
                name: "display_message",
                variableName: "displayMessage",
              },
              {
                kind: "Variable",
                name: "entrypoint",
                variableName: "entrypoint",
              },
              {
                kind: "Variable",
                name: "external_conversation_id",
                variableName: "externalConversationId",
              },
              {
                kind: "Variable",
                name: "hide_user_message",
                variableName: "hideUserMessage",
              },
              {
                kind: "Variable",
                name: "is_insitu_pregeneration",
                variableName: "isInsituPregeneration",
              },
              {
                kind: "Variable",
                name: "is_new_conversation",
                variableName: "isNewConversation",
              },
              {
                kind: "Variable",
                name: "is_sent_from_out_of_chat",
                variableName: "isSentFromOutOfChat",
              },
              {
                kind: "Variable",
                name: "message_type",
                variableName: "messageType",
              },
              {
                kind: "Variable",
                name: "offline_threading_id",
                variableName: "offlineThreadingId",
              },
              {
                kind: "Variable",
                name: "postback_payload",
                variableName: "postbackPayload",
              },
              {
                fields: [
                  {
                    kind: "Variable",
                    name: "content",
                    variableName: "message",
                  },
                ],
                kind: "ObjectValue",
                name: "prompt",
              },
              {
                kind: "Variable",
                name: "selected_assets",
                variableName: "selectedAssets",
              },
              {
                kind: "Variable",
                name: "selected_suggested_prompt",
                variableName: "selectedSuggestedPrompt",
              },
              {
                kind: "Variable",
                name: "selected_text",
                variableName: "selectedText",
              },
              {
                kind: "Variable",
                name: "user_media_attachments",
                variableName: "userMediaAttachments",
              },
            ],
            kind: "ObjectValue",
            name: "input",
          },
        ],
        y = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        C = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "display_title",
          storageKey: null,
        },
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_conversation_eligible_for_csat",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [
            e,
            t,
            n,
            r,
            o,
            a,
            i,
            l,
            s,
            u,
            c,
            d,
            m,
            p,
            _,
            f,
            g,
          ],
          kind: "Fragment",
          metadata: null,
          name: "MAIBAGraphQLSendMessageV3QueryMutation",
          selections: [
            {
              alias: null,
              args: h,
              concreteType: "XFBMAIBASendMessageV3MutationResponse",
              kind: "LinkedField",
              name: "xfb_maiba_send_message_v3",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "conversation",
                  plural: !1,
                  selections: [y, C, b],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [
            u,
            l,
            o,
            d,
            t,
            p,
            e,
            _,
            m,
            c,
            g,
            f,
            r,
            a,
            i,
            s,
            n,
          ],
          kind: "Operation",
          name: "MAIBAGraphQLSendMessageV3QueryMutation",
          selections: [
            {
              alias: null,
              args: h,
              concreteType: "XFBMAIBASendMessageV3MutationResponse",
              kind: "LinkedField",
              name: "xfb_maiba_send_message_v3",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "conversation",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
                      storageKey: null,
                    },
                    y,
                    C,
                    b,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "27039324015719519",
          metadata: {},
          name: "MAIBAGraphQLSendMessageV3QueryMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
