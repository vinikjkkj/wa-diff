__d(
  "CometAIHTSChatMessageList_messages.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "__typename",
        storageKey: null,
      };
      return {
        argumentDefinitions: [
          { defaultValue: 10, kind: "LocalArgument", name: "count" },
          { defaultValue: null, kind: "LocalArgument", name: "cursor" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "messaging_user_id",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "messaging_user_token",
          },
        ],
        kind: "Fragment",
        metadata: {
          connection: [
            {
              count: "count",
              cursor: "cursor",
              direction: "backward",
              path: ["messages"],
            },
          ],
        },
        name: "CometAIHTSChatMessageList_messages",
        selections: [
          {
            alias: "messages",
            args: [
              {
                kind: "Variable",
                name: "messaging_user_id",
                variableName: "messaging_user_id",
              },
              {
                kind: "Variable",
                name: "messaging_user_token",
                variableName: "messaging_user_token",
              },
            ],
            concreteType: "CometAIHTSMessageThreadMessagesConnection",
            kind: "LinkedField",
            name: "__CometAIHTSChat_product_messageThread_messages_connection",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "CometAIHTSMessageThreadMessagesEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_hidden",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "text",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "user",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "streaming_state",
                        storageKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "completed_setting_updates",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "failed_setting_updates",
                            storageKey: null,
                          },
                        ],
                        type: "XFBCometAIHTSChatMessage",
                        abstractKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "attachments",
                        plural: !0,
                        selections: [
                          e,
                          {
                            kind: "InlineFragment",
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: "ComposedTextInstance",
                                kind: "LinkedField",
                                name: "composed_text_v2",
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "nodes_js",
                                    plural: !0,
                                    selections: [e],
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            type: "XFBCometAIHTSMarkdownAttachment",
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "CometAIChatMessagePlaceholder_message",
                      },
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "CometAIHTSChatMessage_message",
                      },
                      e,
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "cursor",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "PageInfo",
                kind: "LinkedField",
                name: "page_info",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "has_previous_page",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "start_cursor",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "CometAIHTSMessageThread",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
