__d(
  "CometFeedStoryHeaderSection_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryHeaderSection_story",
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
              args: [{ kind: "Literal", name: "supported", value: "XP1YS" }],
              concreteType: null,
              kind: "LinkedField",
              name: "header",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryHeaderSection_story",
                      fragmentName:
                        "CometFeedStoryGroupConflictAlertHeaderStrategy_header",
                      fragmentPropName: "header",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryGroupConflictAlertHeaderStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryHeaderSection_story",
                      fragmentName:
                        "CometFeedStoryGroupsUnconnectedContentHeaderStrategy_header",
                      fragmentPropName: "header",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryGroupsUnconnectedContentHeaderStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryHeaderSection_story",
                      fragmentName:
                        "CometStoryGroupPendingQueueMemberPostApprovalHeaderStrategy_header",
                      fragmentPropName: "header",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryGroupPendingQueueMemberPostApprovalHeaderStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryHeaderSection_story",
                      fragmentName:
                        "CometStoryCrisisCloseListingHeaderStrategy_header",
                      fragmentPropName: "header",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryCrisisCloseListingHeaderStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryHeaderSection_story",
                      fragmentName: "CometFeedStoryAlbumHeaderStrategy_header",
                      fragmentPropName: "header",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryAlbumHeaderStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryHeaderSection_story",
                      fragmentName: "CometStoryPostUpsellHeaderStrategy_header",
                      fragmentPropName: "header",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryPostUpsellHeaderStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryHeaderSection_story",
                      fragmentName: "CometFeedStoryStoryHeaderStrategy_header",
                      fragmentPropName: "header",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryStoryHeaderStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryHeaderSection_story",
                      fragmentName:
                        "CometFeedStoryFallbackHeaderStrategy_header",
                      fragmentPropName: "header",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryFallbackHeaderStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryHeaderSection_story",
                      fragmentName:
                        "CometFeedStorySimpleStoryHeaderStrategy_header",
                      fragmentPropName: "header",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStorySimpleStoryHeaderStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryHeaderSection_story",
                      fragmentName:
                        "CometFeedStoryCommerceHeaderStrategy_header",
                      fragmentPropName: "header",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryCommerceHeaderStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryHeaderSection_story",
                      fragmentName:
                        "CometStorySocialLearningModuleHeaderStrategy_header",
                      fragmentPropName: "header",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStorySocialLearningModuleHeaderStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryHeaderSection_story",
                      fragmentName:
                        "GeminiFeedEmailLandingStoryStrategy_header",
                      fragmentPropName: "header",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiFeedEmailLandingStoryStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryHeaderSection_story",
                      fragmentName:
                        "CometFeedStoryGroupMemberWarningHeaderStrategy_header",
                      fragmentPropName: "header",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryGroupMemberWarningHeaderStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryHeaderSection_story",
                      fragmentName:
                        "CometFeedStoryAdsSocialContextHeaderStrategy_header",
                      fragmentPropName: "header",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryAdsSocialContextHeaderStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryHeaderSection_story",
                      fragmentName:
                        "CometFeedStoryAdsNonProfitSocialContextHeaderStrategy_header",
                      fragmentPropName: "header",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryAdsNonProfitSocialContextHeaderStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryHeaderSection_story",
                      fragmentName:
                        "CometFeedStoryGroupPostLLMTitleHeaderStrategy_header",
                      fragmentPropName: "header",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryGroupPostLLMTitleHeaderStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryHeaderSection_story",
                      fragmentName:
                        "CometFeedStoryFailedScheduledPostHeaderStrategy_header",
                      fragmentPropName: "header",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryFailedScheduledPostHeaderStrategy",
                  abstractKey: null,
                },
              ],
              storageKey: 'header(supported:"XP1YS")',
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
