__d(
  "MAIBABotMessageDebugFooter_fragment.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "shouldFetchMessageDebugInfo" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "MAIBABotMessageDebugFooter_fragment",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "bot_response_id",
          storageKey: null,
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
