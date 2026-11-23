__d(
  "MAIBAThreadListItemNew_fragment.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "MAIBAThreadListItemNew_fragment",
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
          kind: "Defer",
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "MAIBAThreadListItemAsyncTaskClock_fragment",
            },
          ],
        },
        {
          kind: "RequiredField",
          field: {
            alias: "thread_name",
            args: null,
            kind: "ScalarField",
            name: "display_title",
            storageKey: null,
          },
          action: "LOG",
        },
        {
          alias: null,
          args: null,
          concreteType: "MAIBAProactiveTaskOrigin",
          kind: "LinkedField",
          name: "proactive_task_origin",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "notification_category",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "template_key",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "use_case",
              storageKey: null,
            },
          ],
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
          name: "human_handover_lobby_state",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "human_handover_lobby_agent_name",
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
          kind: "ClientExtension",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "exists_serverside",
              storageKey: null,
            },
          ],
        },
      ],
      type: "XFBMAIBAGenAICharmanderConversation",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
