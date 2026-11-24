__d(
  "MAIBAChatResponseFooter_fragment.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "shouldFetchMessageDebugInfo" },
      ],
      kind: "Fragment",
      metadata: { plural: !0 },
      name: "MAIBAChatResponseFooter_fragment",
      selections: [
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
          kind: "ScalarField",
          name: "bot_response_id",
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
          name: "user_type",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "XFBMAIBAAdminTextAttachment",
          kind: "LinkedField",
          name: "admin_text",
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
              name: "entrypoint_qe_universes",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_axon_routed",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "MAIBAChatMessageCopyContentAction_fragment",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "MAIBAChatMessageFeedbackActions_fragment",
        },
        {
          condition: "shouldFetchMessageDebugInfo",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              fragment: {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBAChatMessageDebugActions_fragment",
                  },
                ],
                type: "XFBMAIBAMessage",
                abstractKey: null,
              },
              kind: "AliasedInlineFragmentSpread",
              name: "assistant_chat_message_debug_actions",
            },
          ],
        },
      ],
      type: "XFBMAIBAMessage",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
