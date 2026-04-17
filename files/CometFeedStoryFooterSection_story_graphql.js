__d(
  "CometFeedStoryFooterSection_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryFooterSection_story",
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
              args: [{ kind: "Literal", name: "supported", value: "3ggdKM" }],
              concreteType: null,
              kind: "LinkedField",
              name: "footer",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFooterSection_story",
                      fragmentName:
                        "CometFeedStoryInformTreatmentFooterStrategy_story",
                      fragmentPropName: "story",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryInformTreatmentFooterStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFooterSection_story",
                      fragmentName:
                        "CometFeedStoryInsightsFooterStrategy_insights",
                      fragmentPropName: "insights",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryInsightsFooterStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFooterSection_story",
                      fragmentName:
                        "CometFeedStoryInsightsDistributionScoreFooterStrategy_insights",
                      fragmentPropName: "insights",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryInsightsWithDistributionScoreFooterStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFooterSection_story",
                      fragmentName:
                        "GeminiFeedStoryVideoChaptersV2FooterStrategy_story",
                      fragmentPropName: "story",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiFeedStoryVideoChaptersV2FooterStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFooterSection_story",
                      fragmentName:
                        "GeminiFeedStoryVideoChaptersFooterUpsellStrategy_story",
                      fragmentPropName: "story",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiFeedStoryVideoChaptersFooterUpsellStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFooterSection_story",
                      fragmentName:
                        "CometFeedStoryTopicsFooterStrategy_storySection",
                      fragmentPropName: "storySection",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryTopicsFooterStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFooterSection_story",
                      fragmentName:
                        "CometFeedStoryGroupTopicsFooterStrategy_topics",
                      fragmentPropName: "topics",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryGroupTopicsFooterStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFooterSection_story",
                      fragmentName:
                        "CometFeedStoryProfilePlusPostFooterStrategy_story",
                      fragmentPropName: "story",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometProfilePlusStoryFooterStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFooterSection_story",
                      fragmentName:
                        "CometFeedStorySocialLearningModuleFooterStrategy_story",
                      fragmentPropName: "story",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStorySocialLearningModuleFooterStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFooterSection_story",
                      fragmentName:
                        "CometFeedStorySocialLearningMallCTAFooterStrategy_story",
                      fragmentPropName: "story",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStorySocialLearningMallCTAFooterStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFooterSection_story",
                      fragmentName:
                        "CometFeedStoryGroupInsightsFooterStrategy_story",
                      fragmentPropName: "story",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryGroupInsightsFooterStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFooterSection_story",
                      fragmentName:
                        "GeminiFeedStoryContentManagerFooterUpsellStrategy_story",
                      fragmentPropName: "story",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiFeedStoryContentManagerFooterUpsellStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFooterSection_story",
                      fragmentName:
                        "CometFeedStoryEventAlbumFooterStrategy_story",
                      fragmentPropName: "story",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryEventAlbumFooterStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFooterSection_story",
                      fragmentName:
                        "GeminiFeedStoryImportantPostFooterUpsellStrategy_story",
                      fragmentPropName: "story",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiFeedStoryImportantPostFooterUpsellStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFooterSection_story",
                      fragmentName:
                        "GeminiStoryPromotedPostMarkAsReadFooterStrategy_markAsRead",
                      fragmentPropName: "markAsRead",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiStoryPromotedPostMarkAsReadFooterStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFooterSection_story",
                      fragmentName:
                        "CometFeedStoryEventConversationFooterStrategy_story",
                      fragmentPropName: "story",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryEventConversationFooterStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFooterSection_story",
                      fragmentName:
                        "CometFeedStoryDeepDivePillsFooterStrategy_story",
                      fragmentPropName: "story",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryDeepDivePillsFooterStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFooterSection_story",
                      fragmentName:
                        "CometFeedStoryProductExtensionsFooterStrategy_story",
                      fragmentPropName: "story",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryProductExtensionsFooterStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFooterSection_story",
                      fragmentName:
                        "CometFeedStoryAffiliateLinkFocusedStoryFooterStrategy_story",
                      fragmentPropName: "story",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryAffiliateLinkFocusedStoryFooterStrategy",
                  abstractKey: null,
                },
              ],
              storageKey: 'footer(supported:"3ggdKM")',
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
