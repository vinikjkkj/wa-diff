__d(
  "CometAIHTSChat_threadMessages.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
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
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        n = [t];
      return {
        argumentDefinitions: [
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
              count: null,
              cursor: null,
              direction: "backward",
              path: ["thread", "messages"],
            },
          ],
        },
        name: "CometAIHTSChat_threadMessages",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "CometAIHTSMessageThread",
            kind: "LinkedField",
            name: "thread",
            plural: !1,
            selections: [
              {
                alias: "messages",
                args: e,
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
                      t,
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
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "attachments",
                            plural: !0,
                            selections: n,
                            storageKey: null,
                          },
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
                                selections: n,
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          t,
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
              {
                args: e,
                kind: "FragmentSpread",
                name: "CometAIHTSChatMessageList_messages",
              },
            ],
            storageKey: null,
          },
        ],
        type: "XFBCometAIHTSChatProduct",
        abstractKey: "__isXFBCometAIHTSChatProduct",
      };
    })();
    a.exports = e;
  },
  null,
);
