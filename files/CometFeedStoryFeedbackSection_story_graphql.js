__d(
  "CometFeedStoryFeedbackSection_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryFeedbackSection_story",
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
              args: [{ kind: "Literal", name: "supported", value: "3a0SQa" }],
              concreteType: null,
              kind: "LinkedField",
              name: "feedback",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFeedbackSection_story",
                      fragmentName:
                        "CometFeedStoryFeedbackGroupConflictAlertUFIStrategy_feedback",
                      fragmentPropName: "feedback",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryFeedbackGroupConflictAlertUFIStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFeedbackSection_story",
                      fragmentName:
                        "CometFeedStoryFeedbackMemoriesStrategy_feedback",
                      fragmentPropName: "feedback",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryFeedbackMemoriesStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFeedbackSection_story",
                      fragmentName:
                        "CometFeedStoryFeedbackGroupContentModerationQueueStrategy_feedback",
                      fragmentPropName: "feedback",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryFeedbackGroupContentModerationQueueStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFeedbackSection_story",
                      fragmentName:
                        "CometFeedStoryFeedbackGroupViewerContentDeletedPostStrategy_feedback",
                      fragmentPropName: "feedback",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryFeedbackGroupViewerContentDeletedPostStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFeedbackSection_story",
                      fragmentName:
                        "CometFeedStoryFeedbackGroupDraftPostStrategy_feedback",
                      fragmentPropName: "feedback",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryFeedbackGroupDraftPostStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFeedbackSection_story",
                      fragmentName:
                        "GeminiFeedStoryFeedbackGroupDelegationPostStrategy_feedback",
                      fragmentPropName: "feedback",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiStoryFeedbackGroupDelegationPostStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFeedbackSection_story",
                      fragmentName:
                        "GeminiStoryFeedbackPluginStrategy_feedback",
                      fragmentPropName: "feedback",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiStoryFeedbackPluginStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFeedbackSection_story",
                      fragmentName:
                        "GeminiStoryFeedbackIntegrationStrategy_feedback",
                      fragmentPropName: "feedback",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiStoryFeedbackIntegrationStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFeedbackSection_story",
                      fragmentName:
                        "GeminiFeedStoryFeedbackGroupDraftedForOthersStrategy_feedback",
                      fragmentPropName: "feedback",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiStoryFeedbackGroupDraftedForOthersStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFeedbackSection_story",
                      fragmentName:
                        "CometFeedStoryFeedbackGroupViewerContentPublishedPostStrategy_feedback",
                      fragmentPropName: "feedback",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryFeedbackGroupViewerContentPublishedPostStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFeedbackSection_story",
                      fragmentName:
                        "CometFeedStoryFeedbackGroupScheduledPostStrategy_feedback",
                      fragmentPropName: "feedback",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryFeedbackGroupScheduledPostStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFeedbackSection_story",
                      fragmentName:
                        "CometFeedStoryFeedbackGroupViewerContentScheduledPostStrategy_feedback",
                      fragmentPropName: "feedback",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryFeedbackGroupViewerContentScheduledPostStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFeedbackSection_story",
                      fragmentName:
                        "CometFeedStoryFeedbackPendingPostStrategy_feedback",
                      fragmentPropName: "feedback",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryFeedbackPendingPostStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFeedbackSection_story",
                      fragmentName:
                        "CometFeedStoryFeedbackGroupPendingPostStrategy_feedback",
                      fragmentPropName: "feedback",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryFeedbackGroupPendingPostStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFeedbackSection_story",
                      fragmentName:
                        "CometFeedStoryFeedbackGroupViewerContentPendingPostStrategy_feedback",
                      fragmentPropName: "feedback",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryFeedbackGroupViewerContentPendingPostStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFeedbackSection_story",
                      fragmentName:
                        "CometFeedStoryFeedbackGroupContextualProfileUFIStrategy_feedback",
                      fragmentPropName: "feedback",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryFeedbackGroupContextualProfileUFIStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFeedbackSection_story",
                      fragmentName:
                        "CometFeedStoryFeedbackUFIStrategy_feedback",
                      fragmentPropName: "feedback",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryFeedbackUFIStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFeedbackSection_story",
                      fragmentName:
                        "CometStoriesSingleBucketFeedUnitFeedbackStrategy_feedback",
                      fragmentPropName: "feedback",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoriesSingleBucketFeedUnitUFIStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFeedbackSection_story",
                      fragmentName:
                        "CometFeedStoryFeedbackGroupAdminAssistPreviewStrategy_feedback",
                      fragmentPropName: "feedback",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryFeedbackGroupAdminAssistPreviewStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFeedbackSection_story",
                      fragmentName:
                        "CometFeedStoryFeedbackWorkLiveAMAStrategy_feedback",
                      fragmentPropName: "feedback",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryWorkLiveAMAStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFeedbackSection_story",
                      fragmentName:
                        "CometFeedStoryFeedbackGroupModminReviewFolderPostStrategy_feedback",
                      fragmentPropName: "feedback",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryFeedbackGroupModminReviewFolderPostStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFeedbackSection_story",
                      fragmentName:
                        "GeminiStoryFeedbackKeyUpdateFeedUnitPostStrategy_feedback",
                      fragmentPropName: "feedback",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiStoryFeedbackKeyUpdateFeedUnitPostStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFeedbackSection_story",
                      fragmentName:
                        "GeminiStoryFeedbackKeyUpdateFeedUnitPreviewStrategy_feedback",
                      fragmentPropName: "feedback",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiStoryFeedbackKeyUpdateFeedUnitPreviewStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFeedbackSection_story",
                      fragmentName:
                        "CometFeedStoryFeedbackEventModminReviewFolderPostStrategy_feedback",
                      fragmentPropName: "feedback",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryFeedbackEventModminReviewFolderPostStrategy",
                  abstractKey: null,
                },
              ],
              storageKey: 'feedback(supported:"3a0SQa")',
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
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
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
