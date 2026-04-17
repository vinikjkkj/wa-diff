__d(
  "CometFeedStoryMessageStickerMatchRenderer_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryMessageStickerMatchRenderer_story",
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
              args: [{ kind: "Literal", name: "supported", value: "4jCzy2" }],
              concreteType: null,
              kind: "LinkedField",
              name: "message_sticker",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMessageStickerMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryMessageStickerStrategy_messageSticker",
                      fragmentPropName: "messageSticker",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryMessageStickerRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMessageStickerMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryAnimatedMessageStickerStrategy_messageSticker",
                      fragmentPropName: "messageSticker",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryAnimatedMessageStickerRenderingStrategy",
                  abstractKey: null,
                },
              ],
              storageKey: 'message_sticker(supported:"4jCzy2")',
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
