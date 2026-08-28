__d(
  "CometAIHTSChatMessage_message.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "__typename",
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometAIHTSChatMessage_message",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_hidden",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "user",
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
            kind: "ScalarField",
            name: "sreaming_state_display_text",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "attachments",
            plural: !0,
            selections: [
              e,
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "file_url",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "file_name",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "mime_type",
                    storageKey: null,
                  },
                ],
                type: "XFBCometAIHTSUserFileAttachment",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometAIHTSChatMessage_message",
                    fragmentName: "CometAIHTSQRCodeImageMessage_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBCometAIHTSQRCodeImageAttachment",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometAIHTSChatMessage_message",
                    fragmentName: "CometAIHTSOptionsMessage_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBCometAIHTSOptionsAttachment",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometAIHTSChatMessage_message",
                    fragmentName: "CometAIHTSMarkdownAttachment_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "ComposedTextInstance",
                    kind: "LinkedField",
                    name: "composed_text_v2",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "nodes_js",
                        plural: !0,
                        selections: [e],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                type: "XFBCometAIHTSMarkdownAttachment",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometAIHTSChatMessage_message",
                    fragmentName: "CometAIHTSUnifiedResponseAttachment_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBCometAIHTSUnifiedResponseAttachment",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometAIHTSChatMessage_message",
                    fragmentName: "CometAIHTSSurveyCardAttachment_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBCometAIHTSSurveyCardAttachment",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "CometAIHTSThinkingHeadingSection",
                kind: "LinkedField",
                name: "thinking_headings",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "heading",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "content",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: "XFBCometAIHTSChatMessage",
            abstractKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometAIHTSChatMessageContentV2_message",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometAIHTSChatBubble_message",
          },
        ],
        type: "CometAIChatMessage",
        abstractKey: "__isCometAIChatMessage",
      };
    })();
    a.exports = e;
  },
  null,
);
