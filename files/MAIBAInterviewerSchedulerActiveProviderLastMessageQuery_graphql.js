__d(
  "MAIBAInterviewerSchedulerActiveProviderLastMessageQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "externalConversationId",
          },
        ],
        t = [
          {
            kind: "Variable",
            name: "id",
            variableName: "externalConversationId",
          },
        ],
        n = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "snippet",
              storageKey: null,
            },
          ],
          type: "XFBMAIBAMessageComposedTextContent",
          abstractKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "cursor",
          storageKey: null,
        },
        a = {
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
              name: "end_cursor",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "has_next_page",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        i = [{ kind: "Literal", name: "first", value: 10 }],
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MAIBAInterviewerSchedulerActiveProviderLastMessageQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "fetch__XFBMAIBAConversation",
              plural: !1,
              selections: [
                {
                  alias: "messages",
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "__MAIBAMessageListFragment__maiba_messages_connection",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "edges",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "XFBMAIBAMessage",
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "content",
                              plural: !1,
                              selections: [n],
                              storageKey: null,
                            },
                            r,
                          ],
                          storageKey: null,
                        },
                        o,
                      ],
                      storageKey: null,
                    },
                    a,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAInterviewerSchedulerActiveProviderLastMessageQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "fetch__XFBMAIBAConversation",
              plural: !1,
              selections: [
                r,
                {
                  alias: "messages",
                  args: i,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "maiba_message_list",
                  plural: !1,
                  selections: [
                    r,
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "edges",
                      plural: !0,
                      selections: [
                        r,
                        {
                          alias: null,
                          args: null,
                          concreteType: "XFBMAIBAMessage",
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "content",
                              plural: !1,
                              selections: [r, n],
                              storageKey: null,
                            },
                            l,
                            r,
                          ],
                          storageKey: null,
                        },
                        {
                          kind: "TypeDiscriminator",
                          abstractKey:
                            "__isXFBMAIBAConversationMaibaMessageListEdge",
                        },
                        o,
                      ],
                      storageKey: null,
                    },
                    a,
                  ],
                  storageKey: "maiba_message_list(first:10)",
                },
                {
                  alias: "messages",
                  args: i,
                  filters: null,
                  handle: "connection",
                  key: "MAIBAMessageListFragment__maiba_messages",
                  kind: "LinkedHandle",
                  name: "maiba_message_list",
                },
                l,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "27652171314404045",
          metadata: {
            connection: [
              {
                count: null,
                cursor: null,
                direction: "forward",
                path: ["fetch__XFBMAIBAConversation", "messages"],
              },
            ],
          },
          name: "MAIBAInterviewerSchedulerActiveProviderLastMessageQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
