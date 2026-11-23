__d(
  "MAIBAChatMessageListPaginationFragment.graphql",
  ["MAIBAMessageListQuery.graphql"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = ["messages"],
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          { defaultValue: null, kind: "LocalArgument", name: "before" },
          { defaultValue: null, kind: "LocalArgument", name: "cursor" },
          { defaultValue: null, kind: "LocalArgument", name: "first" },
          { defaultValue: null, kind: "LocalArgument", name: "last" },
          { kind: "RootArgument", name: "shouldFetchMessageDebugInfo" },
        ],
        kind: "Fragment",
        metadata: {
          connection: [
            { count: null, cursor: null, direction: "bidirectional", path: e },
          ],
          refetch: {
            connection: {
              forward: { count: "first", cursor: "cursor" },
              backward: { count: "last", cursor: "before" },
              path: e,
            },
            fragmentPathInResult: ["fetch__XFBMAIBAConversation"],
            operation: n("MAIBAMessageListQuery.graphql"),
            identifierInfo: {
              identifierField: "fetch_id",
              identifierQueryVariableName: "id",
            },
          },
        },
        name: "MAIBAChatMessageListPaginationFragment",
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
                        kind: "InlineDataFragmentSpread",
                        name: "MAIBAChatMessageList_Message",
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "offline_threading_id",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "created_timestamp",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "role",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "bot_request_id",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: "XFBMAIBAMessageMetadata",
                            kind: "LinkedField",
                            name: "metadata",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "is_out_of_turn_notice",
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: "XFBToolCallObject",
                            kind: "LinkedField",
                            name: "tool_calls",
                            plural: !0,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "tool_name",
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "is_completed",
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "tool_status",
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "content",
                            plural: !1,
                            selections: [
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "snippet",
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType:
                                      "XFBMAIBAComposedBlockWithEntities",
                                    kind: "LinkedField",
                                    name: "composed_text",
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "content",
                                        plural: !0,
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType:
                                              "ComposedEntityAtRange",
                                            kind: "LinkedField",
                                            name: "entity_ranges",
                                            plural: !0,
                                            selections: [
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "entity",
                                                plural: !1,
                                                selections: [
                                                  t,
                                                  {
                                                    kind: "InlineFragment",
                                                    selections: [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "surface_id",
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    type: "XFBMAIBAA2UIObject",
                                                    abstractKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                type: "XFBMAIBAMessageComposedTextContent",
                                abstractKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          {
                            args: null,
                            kind: "FragmentSpread",
                            name: "MAIBAChatResponse_fragment",
                          },
                          {
                            args: null,
                            kind: "FragmentSpread",
                            name: "MAIBAComparisonView_primaryPrompts",
                          },
                          {
                            args: null,
                            kind: "FragmentSpread",
                            name: "MAIBAComparisonView_comparisonStreaming",
                          },
                          {
                            kind: "ClientExtension",
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "__id",
                                storageKey: null,
                              },
                            ],
                          },
                        ],
                        args: null,
                        argumentDefinitions: [],
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
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "fetch_id",
            storageKey: null,
          },
        ],
        type: "XFBMAIBAConversation",
        abstractKey: "__isXFBMAIBAConversation",
      };
    })();
    a.exports = e;
  },
  null,
);
