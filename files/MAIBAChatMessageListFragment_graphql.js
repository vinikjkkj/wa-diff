__d(
  "MAIBAChatMessageListFragment.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "first" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "MAIBAChatMessageListFragment",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "external_conversation_id",
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
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "thread_status",
          storageKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "human_handover_lobby_state",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "human_handover_lobby_wait_time",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "human_handover_lobby_case_created_timestamp",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "human_handover_lobby_case_closed_timestamp",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "async_support_lobby_state",
              storageKey: null,
            },
            {
              fragment: {
                kind: "InlineFragment",
                selections: [
                  {
                    kind: "Defer",
                    selections: [
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "MAIBATaskOriginBanner_conversation",
                      },
                    ],
                  },
                ],
                type: "XFBMAIBAGenAICharmanderConversation",
                abstractKey: null,
              },
              kind: "AliasedInlineFragmentSpread",
              name: "taskOrigin",
            },
            {
              kind: "ClientExtension",
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "exists_serverside",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "typing_indicator_state",
                  storageKey: null,
                },
              ],
            },
          ],
          type: "XFBMAIBAGenAICharmanderConversation",
          abstractKey: null,
        },
        {
          args: [{ kind: "Variable", name: "first", variableName: "first" }],
          kind: "FragmentSpread",
          name: "MAIBAChatMessageListPaginationFragment",
        },
      ],
      type: "XFBMAIBAConversation",
      abstractKey: "__isXFBMAIBAConversation",
    };
    a.exports = e;
  },
  null,
);
