__d(
  "CometFeedStoryOuterFooterSection_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryOuterFooterSection_story",
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
              args: [{ kind: "Literal", name: "supported", value: "1u8Znq" }],
              concreteType: null,
              kind: "LinkedField",
              name: "outer_footer",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryOuterFooterSection_story",
                      fragmentName:
                        "CometFeedStoryMisinformationRelatedArticleStrategy_misinfoRelatedArticles",
                      fragmentPropName: "misinfoRelatedArticles",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryMisinformationRelatedArticleStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryOuterFooterSection_story",
                      fragmentName:
                        "CometFeedStoryPendingPostOuterFooterStrategy_story",
                      fragmentPropName: "story",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryPendingPostOuterFooterStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryOuterFooterSection_story",
                      fragmentName:
                        "GeminiFeedStoryPendingPostOuterFooterStrategy_story",
                      fragmentPropName: "story",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiFeedStoryPendingPostOuterFooterStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryOuterFooterSection_story",
                      fragmentName:
                        "CometFeedStoryGroupConflictAlertOuterFooterStrategy_story",
                      fragmentPropName: "story",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryGroupConflictAlertOuterFooterStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryOuterFooterSection_story",
                      fragmentName:
                        "CometFeedStoryGroupCommentRateLimitedOuterFooterStrategy_story",
                      fragmentPropName: "story",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryGroupCommentRateLimitedOuterFooterStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryOuterFooterSection_story",
                      fragmentName:
                        "CometFeedStoryPendingParticipationPostOuterFooterStrategy_story",
                      fragmentPropName: "story",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryPendingParticipationPostOuterFooterStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryOuterFooterSection_story",
                      fragmentName:
                        "CometFeedStoryJoinInVrOuterFooterStrategy_story",
                      fragmentPropName: "story",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryJoinInVrOuterFooterStrategy",
                  abstractKey: null,
                },
              ],
              storageKey: 'outer_footer(supported:"1u8Znq")',
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
