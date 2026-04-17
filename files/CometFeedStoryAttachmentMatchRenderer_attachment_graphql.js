__d(
  "CometFeedStoryAttachmentMatchRenderer_attachment.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryAttachmentMatchRenderer_attachment",
      selections: [
        {
          alias: "styles",
          args: [
            {
              kind: "Variable",
              name: "render_location",
              variableName: "renderLocation",
            },
            { kind: "Literal", name: "supported", value: "4xEQPx" },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "style_type_renderer",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryNullAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentNullStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryEmptyAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentEmptyStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "GeminiFeedStoryLiveEventAnnouncementAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "WorkStoryAttachmentLiveEventAnnouncementStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryBirthdayAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentBirthdayStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryCommentAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "XFBStoryAttachmentCommentStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryPageRecommendationAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentPageRecommendationStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryPageRecommendationAlbumAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentPageRecommendationAlbumStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryPageRecommendationTagsAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentPageRecommendationTagsStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryFunFactsPromptAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentFunFactsStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryFunFactsStackAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentFunFactsStackStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryPageShareAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentPageShareStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryGoodwillProductSystemCampaignAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentGoodwillProductSystemCampaignStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryAlbumAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentAlbumStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryAlbumColumnAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentAlbumColumnStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryAlbumBannerAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentAlbumBannerStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryAlbumFrameAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentAlbumFrameStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryAlbumSaleItemAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentAlbumSaleItemStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryVolunteeringEventAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentVolunteeringEventStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryVolunteeringEventActivityShiftAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentVolunteeringEventActivityShiftStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryCrisisListingAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentCrisisListingStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryCrisisMarkSafeAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentCrisisMarkSafeStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryCrisisDonationAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentCrisisDonationStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryFundraiserDonateButtonAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentFundraiserDonateButtonStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryFundraiserFBSeedingGiftAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentFundraiserFBSeedingGiftStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryOffsiteFundraiserAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentOffsiteFundraiserStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryOffsiteFundraiserWithoutMediaAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentOffsiteFundraiserWithoutMediaStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryOffsiteFundraiserCompressedAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentOffsiteFundraiserCompressedStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryLookingForPlayersAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentLookingForPlayersStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryMapAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentMapStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryAsset3DAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentAsset3dStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryEventAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentEventStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryEventFooterOnlyAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentEventFooterOnlyStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryShopAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentShopStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryGroupAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentGroupStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryGroupSellProductItemAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentGroupSellProductItemStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryNoteAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentNoteStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryAIWidgetsAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentAIWidgetsStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "GeminiFeedStoryKnowledgeNoteAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentKnowledgeNoteStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "GeminiFeedStoryKnowledgeCollectionAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentKnowledgeCollectionStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryPhotoAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentPhotoStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryCoverPhotoAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentCoverPhotoStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryPhotoSaleItemAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentPhotoSaleItemStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryFileUploadAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentFileUploadStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryProfileIntroCardBioAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentProfileIntroCardBioStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryProfileMediaAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentProfileMediaStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryAnimatedImageAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentAnimatedImageShareStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryImageShareAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentImageShareStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryAnonymousAuthorInfoAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentAnonymousAuthorInfoStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryGroupAnonymousPendingPostDisclaimerAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentGroupAnonymousPendingPostDisclaimerStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryC4GThreadCreationAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentC4GThreadCreationStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryCMBThreadAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentCMBThreadStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryCommunityChatSuggestionAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentCMThreadSuggestionStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryC4GMessageAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentC4GMessageStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryAnonymousPostContentAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentAnonymousPostContentStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryShareMediumAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentShareMediumStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStorySharePortraitAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentSharePortraitStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryShareSevereAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentShareSevereStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryShareAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentShareStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryShareAdAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentShareAdStyleRender",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryVideoAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentVideoStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryFallbackAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentFallbackStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryLinkToVideoAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentLinkToVideoStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryLifeEventAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentLifeEventStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryLiveVideoRehearsalAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentLiveVideoRehearsalStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryMultiShareAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentMultiShareStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryTextPollAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentTextPollStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryTextPollNonInteractiveAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentTextPollNonInteractiveStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryVisualPollAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentVisualPollStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryGamesInstantPlayAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentGamesInstantPlayStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryInstantGamesTournamentAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentInstantGamesTournamentStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryAvatarAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentAvatarStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryElectionDayReminderAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentElectionDayReminderStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryElectionInfoAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentElectionInfoStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "GeminiFeedStoryWorkWatchCollectionsAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentWorkWatchCollectionsRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStory3DPhotoAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachment3DPhotoStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStory360PhotoAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachment360PhotoStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryUnavailableAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentUnavailableStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "GeminiFeedStoryWorkLinkPreviewAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentWorkLinkPreviewStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "GeminiFeedStoryWorkContentAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentWorkContentStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryPhotoLinkShareAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentPhotoLinkShareStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryPhotoLinkShareWithInstagramContextAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentPhotoLinkShareWithInstagramContextStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryPlayWithFriendsAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentPlayWithFriendsStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStorySimpleMusicAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentSimpleMusicStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "WorkFeedStoryWorkMajorEventAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "WorkStoryAttachmentMajorEventStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "WorkFeedStoryChecklistAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "WorkStoryAttachmentChecklistStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStorySocialLearningUnitCreatedAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentSocialLearningUnitCreatedStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStorySocialLearningUnitCompletedAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentSocialLearningUnitCompletedStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStorySocialLearningQuizAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentGroupQuizStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryCommerceAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentCommerceAttachmentStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryMarketplaceJobAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentMarketplaceJobStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryCovidVaccineFinderAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentCovidVaccineFinderStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryCovidVaccineFinderProviderAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentCovidVaccineFinderProviderStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryReportedGroupEventAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentReportedGroupEventStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "GeminiFeedStoryQAApprovedAnswerAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentQAApprovedAnswerStylerRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "GeminiFeedStoryESHLLMSuggestionAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentESHLLMSuggestionStylerRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "GeminiFeedStoryRecruitingMetricsTopContributorRecognitionShareAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentRecruitingMetricsTopContributorRecognitionShareStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryGroupWelcomePostAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentGroupWelcomePostStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryDiscussionPostAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentDiscussionPostAttachmentStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryCustomUnavailableAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentCustomUnavailableStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryFBReelsAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentFBReelsStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryDataSnapshotAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentDataSnapshotStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryUSElectionDataAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentUSElectionDataStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryCommunityTaskSetJobPostingAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentCommunityTaskSetJobPostingStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryDeprecatedAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentDeprecatedStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryPublicChatLinkAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentPublicChatLinkStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryIGReelsXARAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentIGReelsXARStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryPhotoWithEventMinutiaeAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentPhotoWithEventMinutiaeStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryAlbumWithEventMinutiaeAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentAlbumWithEventMinutiaeStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryVideoWithEventMinutiaeAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentVideoWithEventMinutiaeStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryGroupOpenQuestionsUpsellAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentGroupOpenQuestionsUpsellStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryGroupPostsHscrollAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentGroupPostsHscrollStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryUnifiedLightweightVideoAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentUnifiedLightweightVideoStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryProfileDirectoryUpdateAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentProfileDirectoryUpdateStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentMatchRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryAiInteractiveEmbodimentAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentAiInteractiveEmbodimentStyleRenderer",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "StoryAttachment",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
