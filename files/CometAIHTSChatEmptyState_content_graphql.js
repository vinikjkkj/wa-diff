__d(
  "CometAIHTSChatEmptyState_content.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "title",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "image_uri",
          storageKey: null,
        };
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: null,
        name: "CometAIHTSChatEmptyState_content",
        selections: [
          {
            alias: null,
            args: [{ kind: "Variable", name: "scale", variableName: "scale" }],
            concreteType: "XFBCometAIHTSChatEmptyStateContent",
            kind: "LinkedField",
            name: "empty_state_content",
            plural: !1,
            selections: [
              e,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "summary",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "TextWithEntities",
                kind: "LinkedField",
                name: "subtitle",
                plural: !1,
                selections: [
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "CometTextWithEntitiesRelay_textWithEntities",
                  },
                ],
                storageKey: null,
              },
              t,
              {
                alias: null,
                args: null,
                concreteType: "XFBCometAIHTSChatConversationStarterPrompt",
                kind: "LinkedField",
                name: "conversation_starter_prompts",
                plural: !0,
                selections: [
                  e,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "subtitle",
                    storageKey: null,
                  },
                  t,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "action_url",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "action_type",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "echo_override",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "topic_id",
                    storageKey: null,
                  },
                ],
                storageKey: null,
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
