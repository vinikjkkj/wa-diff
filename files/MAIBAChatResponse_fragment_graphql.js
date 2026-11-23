__d(
  "MAIBAChatResponse_fragment.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { plural: !0 },
      name: "MAIBAChatResponse_fragment",
      selections: [
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
          kind: "ScalarField",
          name: "bot_invocation_message_otid",
          storageKey: null,
        },
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
          name: "offline_threading_id",
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
          concreteType: "XFBToolCallObject",
          kind: "LinkedField",
          name: "tool_calls",
          plural: !0,
          selections: [
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
              name: "tool_call_id",
              storageKey: null,
            },
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
              name: "tool_result",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "XFBMAIBAFollowUpPrompt",
          kind: "LinkedField",
          name: "follow_up_prompts",
          plural: !0,
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
        {
          args: null,
          kind: "FragmentSpread",
          name: "MAIBAChatMessageRow_fragment",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "MAIBAChatResponseFooter_fragment",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "MAIBAMidChatPrompts_fragment",
        },
      ],
      type: "XFBMAIBAMessage",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
