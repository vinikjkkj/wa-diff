__d(
  "CometFeedStoryMessageMatchRenderer_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryMessageMatchRenderer_story",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "location",
              variableName: "renderLocation",
            },
          ],
          concreteType: "CometStorySections",
          kind: "LinkedField",
          name: "comet_sections",
          plural: !1,
          selections: [
            {
              alias: null,
              args: [{ kind: "Literal", name: "supported", value: "35YkOF" }],
              concreteType: null,
              kind: "LinkedField",
              name: "message",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMessageMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryFormattedBackgroundMessageRenderingStrategy_message",
                      fragmentPropName: "message",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryFormattedBackgroundMessageRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMessageMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryLargeMessageRenderingStrategy_message",
                      fragmentPropName: "message",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryLargeMessageRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMessageMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryMessageWithQuoteRenderingStrategy_message",
                      fragmentPropName: "message",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryMessageWithQuoteRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMessageMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryMultilingualMessageRenderingStrategy_message",
                      fragmentPropName: "message",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryMultilingualMessageRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMessageMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryRichMessageRenderingStrategy_message",
                      fragmentPropName: "message",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryRichMessageRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMessageMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryCommunityQAMessageRenderingStrategy_message",
                      fragmentPropName: "message",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryCommunityQAMessageRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMessageMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryDefaultMessageRenderingStrategy_message",
                      fragmentPropName: "message",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryDefaultMessageRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMessageMatchRenderer_story",
                      fragmentName:
                        "GeminiFeedStoryKeyUpdateFeedUnitMessageRenderingStrategy_message",
                      fragmentPropName: "message",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiFeedStoryKeyUpdateFeedUnitMessageRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMessageMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryIGReelsXARMessageRenderingStrategy_message",
                      fragmentPropName: "message",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryIGReelsXARMessageRenderingStrategy",
                  abstractKey: null,
                },
              ],
              storageKey: 'message(supported:"35YkOF")',
            },
            {
              alias: null,
              args: [{ kind: "Literal", name: "supported", value: "3GsK71" }],
              concreteType: null,
              kind: "LinkedField",
              name: "message_suffix",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMessageMatchRenderer_story__message_suffix",
                      fragmentName:
                        "CometFeedStoryMessageSuffixRenderingStrategy_messageSuffix",
                      fragmentPropName: "messageSuffix",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryMessageSuffixRenderingStrategy",
                  abstractKey: null,
                },
              ],
              storageKey: 'message_suffix(supported:"3GsK71")',
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encrypted_tracking",
          storageKey: null,
        },
      ],
      type: "Story",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
