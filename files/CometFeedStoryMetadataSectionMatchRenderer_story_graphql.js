__d(
  "CometFeedStoryMetadataSectionMatchRenderer_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryMetadataSectionMatchRenderer_story",
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
              args: [{ kind: "Literal", name: "supported", value: "2wXrop" }],
              concreteType: null,
              kind: "LinkedField",
              name: "metadata",
              plural: !0,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryCommunityAttributionGroupPostByStrategy_strategy",
                      fragmentPropName: "strategy",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryCommunityAttributionGroupPostByStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName: "CometFeedStoryPostTopicsStrategy_strategy",
                      fragmentPropName: "strategy",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryPostTopicsStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryUserSignalsStrategy_strategy",
                      fragmentPropName: "strategy",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryUserSignalsStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryIdentityBadgeStrategy_identityBadge",
                      fragmentPropName: "identityBadge",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryIdentityBadgeStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStorySponsoredLabelStrategy_sponsoredLabel",
                      fragmentPropName: "sponsoredLabel",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStorySponsoredLabelStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStorySponsoredPoliticalLabelStrategy_sponsoredLabel",
                      fragmentPropName: "sponsoredLabel",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStorySponsoredPoliticalLabelStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryGenAITransparencyStrategy_genAITransparency",
                      fragmentPropName: "genAITransparency",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryGenAITransparencyStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryGenAIContentTransparencyStrategy_genAIContentTransparency",
                      fragmentPropName: "genAIContentTransparency",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryGenAIContentTransparencyStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryLocationTransparencyStrategy_locationTransparency",
                      fragmentPropName: "locationTransparency",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryLocationTransparencyStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryPostLevelAuthenticityStrategy_postLevelAuthenticity",
                      fragmentPropName: "postLevelAuthenticity",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryPostLevelAuthenticityStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryPageAdminAttributionStrategy_adminAttribution",
                      fragmentPropName: "adminAttribution",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryPageAdminAttributionStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryPaidPartnershipLabelStrategy_paidPartnershipLabel",
                      fragmentPropName: "paidPartnershipLabel",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryPaidPartnershipLabelStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometStoriesSingleBucketFeedUnitLabelStrategy_storiesFeedUnitLabel",
                      fragmentPropName: "storiesFeedUnitLabel",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoriesSingleBucketFeedUnitLabelStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryBackdatedTimestampStrategy_timestamp",
                      fragmentPropName: "timestamp",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryBackdatedTimestampStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryScheduledTimestampStrategy_timestamp",
                      fragmentPropName: "timestamp",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryScheduledTimestampStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryLongerTimestampStrategy_timestamp",
                      fragmentPropName: "timestamp",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryLongerTimestampStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryMinimizedTimestampStrategy_timestamp",
                      fragmentPropName: "timestamp",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryMinimizedTimestampStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName: "CometFeedStoryTimestampStrategy_timestamp",
                      fragmentPropName: "timestamp",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryTimestampStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "GeminiFeedStoryInternLiveEventStrategy_internLiveEvent",
                      fragmentPropName: "internLiveEvent",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiStoryInternLiveEventStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "GeminiFeedStoryInternTaskStrategy_internTask",
                      fragmentPropName: "internTask",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiStoryInternTaskStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "GeminiFeedStoryInternIESCaseStrategy_internIESCase",
                      fragmentPropName: "internIESCase",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiStoryInternIESCaseStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "GeminiFeedStoryInternESHCaseStrategy_internESHCase",
                      fragmentPropName: "internESHCase",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiStoryInternESHCaseStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName: "CometFeedStoryLocationStrategy_location",
                      fragmentPropName: "location",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryLocationStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryApplicationLinkStrategy_location",
                      fragmentPropName: "location",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryApplicationLinkStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryPrivacySelectorStrategy_audience",
                      fragmentPropName: "audience",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryPrivacySelectorStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName: "CometFeedStoryAudienceStrategy_audience",
                      fragmentPropName: "audience",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryAudienceStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoriesSingleBucketAudienceStrategy_audience",
                      fragmentPropName: "audience",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoriesSingleBucketAudienceStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryConfidentialityStrategy_confidentiality",
                      fragmentPropName: "confidentiality",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryConfidentialityStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryFTEOnlyPostLabelStrategy_fteOnlyPost",
                      fragmentPropName: "fteOnlyPost",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryFTEOnlyPostStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName: "CometFeedStoryKeyUpdateStrategy_audience",
                      fragmentPropName: "audience",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryKeyUpdateStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryPollEndtimeStrategy_timestamp",
                      fragmentPropName: "timestamp",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryPollEndtimeStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryRecommendationLabelStrategy_recommendationLabel",
                      fragmentPropName: "recommendationLabel",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryRecommendationLabelStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryRecentlyViewedLabelStrategy_recentlyViewedLabel",
                      fragmentPropName: "recentlyViewedLabel",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryRecentlyViewedLabelStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryMusicPostLevelAttributionStrategy_musicPostLevelAttribution",
                      fragmentPropName: "musicPostLevelAttribution",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryMusicPostLevelAttributionStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryMetaAiPostLevelAttributionStrategy_metaAiPostLevelAttribution",
                      fragmentPropName: "metaAiPostLevelAttribution",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryMetaAiPostLevelAttributionStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryWearableAttributionStrategy_wearableAttribution",
                      fragmentPropName: "wearableAttribution",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryWearableAttributionStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryAgentIdentityAttributionStrategy_agentIdentityAttribution",
                      fragmentPropName: "agentIdentityAttribution",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryAgentIdentityAttributionStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryIGReelsXARAudienceStrategy_label",
                      fragmentPropName: "label",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryIGReelsXARAudienceStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryUGCMetadataStrategy_UGCMetadata",
                      fragmentPropName: "UGCMetadata",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryUGCMetadataStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMetadataSectionMatchRenderer_story",
                      fragmentName:
                        "CometFeedStoryFailedScheduledPostMetadataStrategy_failedScheduledPost",
                      fragmentPropName: "failedScheduledPost",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryFailedScheduledPostMetadataStrategy",
                  abstractKey: null,
                },
              ],
              storageKey: 'metadata(supported:"2wXrop")',
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
