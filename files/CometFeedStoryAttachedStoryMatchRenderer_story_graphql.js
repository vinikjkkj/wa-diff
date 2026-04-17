__d(
  "CometFeedStoryAttachedStoryMatchRenderer_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryAttachedStoryMatchRenderer_story",
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
              args: [{ kind: "Literal", name: "supported", value: "39IRBp" }],
              concreteType: null,
              kind: "LinkedField",
              name: "attached_story",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryAttachedStoryMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryAttachedStoryWithFilterStrategy_attachedStory",
                      fragmentPropName: "attachedStory",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryAttachedStoryWithFilterStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryAttachedStoryMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryAttachedStoryStrategy_attachedStory",
                      fragmentPropName: "attachedStory",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryAttachedStoryStrategy",
                  abstractKey: null,
                },
              ],
              storageKey: 'attached_story(supported:"39IRBp")',
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
