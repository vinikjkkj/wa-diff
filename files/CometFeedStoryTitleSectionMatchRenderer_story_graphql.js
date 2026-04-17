__d(
  "CometFeedStoryTitleSectionMatchRenderer_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryTitleSectionMatchRenderer_story",
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
              args: [{ kind: "Literal", name: "supported", value: "40erBm" }],
              concreteType: null,
              kind: "LinkedField",
              name: "title",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryTitleSectionMatchRenderer_story",
                      fragmentName:
                        "GeminiFeedDraftForStoryDirectedTitleStrategy_contextTitle",
                      fragmentPropName: "contextTitle",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiFeedDraftForStoryDirectedTitleStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryTitleSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryCommunityAttributionTitleStrategy_contextTitle",
                      fragmentPropName: "contextTitle",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryCommunityAttributionTitleStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryTitleSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryGroupsTabDirectedTitleStrategy_contextTitle",
                      fragmentPropName: "contextTitle",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryGroupsTabDirectedTitleStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryTitleSectionMatchRenderer_story",
                      fragmentName:
                        "GeminiFeedStoryDirectedTitleWithCoAuthorsStrategy_contextTitle",
                      fragmentPropName: "contextTitle",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiFeedStoryDirectedTitleWithCoAuthorsStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryTitleSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryDirectedTitleStrategy_contextTitle",
                      fragmentPropName: "contextTitle",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryDirectedTitleStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryTitleSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryViaTitleStrategy_contextTitle",
                      fragmentPropName: "contextTitle",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryViaTitleStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryTitleSectionMatchRenderer_story",
                      fragmentName:
                        "GeminiFeedStoryTitleWithCoAuthorsStrategy_contextTitle",
                      fragmentPropName: "contextTitle",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiFeedStoryTitleWithCoAuthorsStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryTitleSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryTitleWithActorStrategy_contextTitle",
                      fragmentPropName: "contextTitle",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryTitleWithActorStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryTitleSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryDefaultTitleStrategy_contextTitle",
                      fragmentPropName: "contextTitle",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryDefaultTitleStrategy",
                  abstractKey: null,
                },
              ],
              storageKey: 'title(supported:"40erBm")',
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
