__d(
  "MAIBAChatMessageRow_fragment.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "shouldFetchMessageDebugInfo" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "MAIBAChatMessageRow_fragment",
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
            name: "role",
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
            kind: "ScalarField",
            name: "sender_name",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "thought",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "loading_states",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "XFBMAIBAAdminTextAttachment",
            kind: "LinkedField",
            name: "admin_text",
            plural: !1,
            selections: e,
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
                    concreteType: "XFBMAIBAMessage",
                    kind: "LinkedField",
                    name: "message",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "snippet",
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
            alias: null,
            args: null,
            concreteType: "XFBToolCallObject",
            kind: "LinkedField",
            name: "tool_calls",
            plural: !0,
            selections: e,
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useMAIBAChatMessageRowQPLLogging_fragment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAChatUserMessageRow_fragment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAChatBotMessageRow_fragment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAChatAdminMessageRow_fragment",
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
                      name: "MAIBAAdminToolsWidget_fragment",
                    },
                  ],
                  type: "XFBMAIBAMessage",
                  abstractKey: null,
                },
                kind: "AliasedInlineFragmentSpread",
                name: "admin_tools_widget",
              },
            ],
          },
        ],
        type: "XFBMAIBAMessage",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
