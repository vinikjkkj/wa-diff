__d(
  "CometFeedStoryDefaultContextLayoutStrategy_contextLayout$normalization.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        n = [
          {
            kind: "Variable",
            name: "location",
            variableName: "renderLocation",
          },
        ];
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometFeedStoryDefaultContextLayoutStrategy_contextLayout$normalization",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "QuickPromotion",
            kind: "LinkedField",
            name: "local_alerts_story_menu_promotion",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "promotion_creatives",
                plural: !0,
                selections: [
                  e,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "title_text",
                    storageKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [t],
                    type: "Node",
                    abstractKey: "__isNode",
                  },
                ],
                storageKey: null,
              },
              t,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "encrypted_logging_data",
                storageKey: null,
              },
              {
                alias: "surface_id",
                args: null,
                kind: "ScalarField",
                name: "nux_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "trigger",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Story",
            kind: "LinkedField",
            name: "story",
            plural: !1,
            selections: [
              t,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "debug_info",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "serialized_frtp_identifiers",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "can_viewer_see_menu",
                storageKey: null,
              },
              {
                alias: null,
                args: n,
                concreteType: "CometStorySections",
                kind: "LinkedField",
                name: "comet_sections",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: [
                      { kind: "Literal", name: "supported", value: "31PGhD" },
                    ],
                    concreteType: null,
                    kind: "LinkedField",
                    name: "actor_photo",
                    plural: !1,
                    selections: [
                      e,
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
                  {
                    alias: null,
                    args: [
                      { kind: "Literal", name: "supported", value: "2wXrop" },
                    ],
                    concreteType: null,
                    kind: "LinkedField",
                    name: "metadata",
                    plural: !0,
                    selections: [
                      e,
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
                            fragmentName:
                              "CometFeedStoryPostTopicsStrategy_strategy",
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
                            fragmentName:
                              "CometFeedStoryTimestampStrategy_timestamp",
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
                            fragmentName:
                              "CometFeedStoryLocationStrategy_location",
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
                            fragmentName:
                              "CometFeedStoryAudienceStrategy_audience",
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
                            fragmentName:
                              "CometFeedStoryKeyUpdateStrategy_audience",
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
                  {
                    alias: null,
                    args: [
                      { kind: "Literal", name: "supported", value: "40erBm" },
                    ],
                    concreteType: null,
                    kind: "LinkedField",
                    name: "title",
                    plural: !1,
                    selections: [
                      e,
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
              {
                alias: null,
                args: n,
                concreteType: "Story",
                kind: "LinkedField",
                name: "easy_hide_button_story",
                plural: !1,
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometFeedStoryEasyHideButtonMatchRenderer_story",
                    fragmentName: "CometFeedStoryMenuXoutSection_story",
                    fragmentPropName: "story",
                    kind: "ModuleImport",
                  },
                  t,
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_regulation_enforced",
            storageKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              e,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_prod_eligible",
                storageKey: null,
              },
            ],
            type: "ICometStorySection",
            abstractKey: "__isICometStorySection",
          },
        ],
      };
    })();
    a.exports = e;
  },
  null,
);
