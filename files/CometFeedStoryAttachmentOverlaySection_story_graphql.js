__d(
  "CometFeedStoryAttachmentOverlaySection_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryAttachmentOverlaySection_story",
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
              args: [{ kind: "Literal", name: "supported", value: "2ZNIul" }],
              concreteType: null,
              kind: "LinkedField",
              name: "attachment_overlay",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryAttachmentOverlaySection_story",
                      fragmentName:
                        "CometFeedStoryWarningScreenAttachmentStrategy_story",
                      fragmentPropName: "story",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryWarningScreenAttachmentStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryAttachmentOverlaySection_story",
                      fragmentName:
                        "CometFeedStoryMusicPostLevelExperienceAttachmentOverlayStrategy_story",
                      fragmentPropName: "story",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryMusicPostLevelExperienceAttachmentOverlayStrategy",
                  abstractKey: null,
                },
              ],
              storageKey: 'attachment_overlay(supported:"2ZNIul")',
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
