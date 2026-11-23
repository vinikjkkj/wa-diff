__d(
  "MAIBAThreadsListNew_fragment.graphql",
  ["MAIBAThreadListNew_refetch_Query.graphql"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = ["maiba_viewer", "maiba_thread_list"];
      return {
        argumentDefinitions: [
          { defaultValue: null, kind: "LocalArgument", name: "count" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "currentAdAccountID",
          },
          { defaultValue: null, kind: "LocalArgument", name: "cursor" },
          { defaultValue: null, kind: "LocalArgument", name: "entryPoint" },
        ],
        kind: "Fragment",
        metadata: {
          connection: [
            { count: "count", cursor: "cursor", direction: "forward", path: e },
          ],
          refetch: {
            connection: {
              forward: { count: "count", cursor: "cursor" },
              backward: null,
              path: e,
            },
            fragmentPathInResult: [],
            operation: n("MAIBAThreadListNew_refetch_Query.graphql"),
          },
        },
        name: "MAIBAThreadsListNew_fragment",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "XFBMAIBAViewerFields",
            kind: "LinkedField",
            name: "maiba_viewer",
            plural: !1,
            selections: [
              {
                alias: "maiba_thread_list",
                args: [
                  {
                    kind: "Variable",
                    name: "current_ad_account_id",
                    variableName: "currentAdAccountID",
                  },
                ],
                concreteType: "XFBMAIBAViewerFieldsMaibaThreadListConnection",
                kind: "LinkedField",
                name: "__MAIBAThreadListNewFragment__maiba_thread_list_connection",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBMAIBAViewerFieldsMaibaThreadListEdge",
                    kind: "LinkedField",
                    name: "edges",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "XFBMAIBAGenAICharmanderConversation",
                        kind: "LinkedField",
                        name: "node",
                        plural: !1,
                        selections: [
                          {
                            kind: "RequiredField",
                            field: {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "external_conversation_id",
                              storageKey: null,
                            },
                            action: "LOG",
                          },
                          {
                            kind: "RequiredField",
                            field: {
                              alias: "thread_ts",
                              args: null,
                              kind: "ScalarField",
                              name: "last_send_timestamp_ms",
                              storageKey: null,
                            },
                            action: "LOG",
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "thread_status",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "linked_ad_account",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_unread",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "entry_point",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_handover_active",
                            storageKey: null,
                          },
                          {
                            args: null,
                            kind: "FragmentSpread",
                            name: "MAIBAThreadListItemNew_fragment",
                          },
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
                      {
                        alias: null,
                        args: null,
                        concreteType: "XFBMAIBAGenAICharmanderConversation",
                        kind: "LinkedField",
                        name: "node",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "__typename",
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
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "Query",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
