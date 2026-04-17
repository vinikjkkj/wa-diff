__d(
  "CometFeedStoryContextSectionMatchRenderer_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryContextSectionMatchRenderer_story",
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
              args: [{ kind: "Literal", name: "supported", value: "3GYyzk" }],
              concreteType: null,
              kind: "LinkedField",
              name: "context_layout",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryContextSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryGroupConflictAlertContextLayoutStrategy_contextLayout",
                      fragmentPropName: "contextLayout",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryGroupConflictAlertContextLayoutStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryContextSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryGroupPendingPostContextLayoutStrategy_contextLayout",
                      fragmentPropName: "contextLayout",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryGroupPendingPostContextLayoutStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryContextSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryThreadedStoryContextLayoutStrategy_contextLayout",
                      fragmentPropName: "contextLayout",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryThreadedStoryContextLayoutStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryContextSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryAggregatedContextLayoutStrategy_contextLayout",
                      fragmentPropName: "contextLayout",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryAggregatedContextLayoutStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryContextSectionMatchRenderer_story",
                      fragmentName:
                        "GeminiFeedStoryDefaultContextLayoutStrategy_contextLayout",
                      fragmentPropName: "contextLayout",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiFeedStoryDefaultContextLayoutStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryContextSectionMatchRenderer_story",
                      fragmentName:
                        "GeminiFeedStoryPluginContextLayoutStrategy_contextLayout",
                      fragmentPropName: "contextLayout",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiFeedStoryPluginContextLayoutStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryContextSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryDefaultContextLayoutStrategy_contextLayout",
                      fragmentPropName: "contextLayout",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryDefaultContextLayoutStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryContextSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStorySocialLearningModuleContextLayoutStrategy_contextLayout",
                      fragmentPropName: "contextLayout",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStorySocialLearningModuleContextLayoutStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryContextSectionMatchRenderer_story",
                      fragmentName:
                        "GeminiFeedStoryKeyUpdateFeedUnitContextLayoutStrategy_contextLayout",
                      fragmentPropName: "contextLayout",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiFeedStoryKeyUpdateFeedUnitContextLayoutStrategy",
                  abstractKey: null,
                },
              ],
              storageKey: 'context_layout(supported:"3GYyzk")',
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
