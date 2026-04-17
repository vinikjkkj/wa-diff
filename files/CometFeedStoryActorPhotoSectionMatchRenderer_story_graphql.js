__d(
  "CometFeedStoryActorPhotoSectionMatchRenderer_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryActorPhotoSectionMatchRenderer_story",
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
              args: [{ kind: "Literal", name: "supported", value: "31PGhD" }],
              concreteType: null,
              kind: "LinkedField",
              name: "actor_photo",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryActorPhotoSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryActorCommunityAttributionStrategy_actorPhoto",
                      fragmentPropName: "actorPhoto",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryActorCommunityAttributionStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryActorPhotoSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryDualActorPhotoStrategy_actorPhoto",
                      fragmentPropName: "actorPhoto",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryDualActorPhotoStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryActorPhotoSectionMatchRenderer_story",
                      fragmentName:
                        "GeminiFeedDraftForStoryActorPhotoStrategy_actorPhoto",
                      fragmentPropName: "actorPhoto",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiFeedDraftForStoryActorPhotoStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryActorPhotoSectionMatchRenderer_story",
                      fragmentName:
                        "GeminiFeedStoryCoAuthorPhotoStrategy_actorPhoto",
                      fragmentPropName: "actorPhoto",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiFeedStoryCoAuthorPhotoStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryActorPhotoSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryActorPhotoStrategy_actorPhoto",
                      fragmentPropName: "actorPhoto",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryActorPhotoStrategy",
                  abstractKey: null,
                },
              ],
              storageKey: 'actor_photo(supported:"31PGhD")',
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
