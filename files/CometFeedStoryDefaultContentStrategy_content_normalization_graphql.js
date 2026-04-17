__d(
  "CometFeedStoryDefaultContentStrategy_content$normalization.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        t = [e],
        n = {
          kind: "Variable",
          name: "location",
          variableName: "renderLocation",
        },
        r = [n],
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        a = {
          alias: null,
          args: [{ kind: "Literal", name: "supported", value: "JT5dm" }],
          concreteType: null,
          kind: "LinkedField",
          name: "above_message",
          plural: !1,
          selections: [
            o,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAboveMessageMatchRenderer_story",
                  fragmentName:
                    "CometFeedStoryAboveMessageFunFactsRenderingStrategy_aboveMessage",
                  fragmentPropName: "aboveMessage",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryAboveMessageFunFactsRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAboveMessageMatchRenderer_story",
                  fragmentName:
                    "WorkFeedStoryAboveMessageMajorEventRenderingStrategy_aboveMessage",
                  fragmentPropName: "aboveMessage",
                  kind: "ModuleImport",
                },
              ],
              type: "WorkFeedStoryAboveMessageMajorEventRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAboveMessageMatchRenderer_story",
                  fragmentName:
                    "CometFeedStoryAboveMessageCommunityQARenderingStrategy_aboveMessage",
                  fragmentPropName: "aboveMessage",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryAboveMessageCommunityQARenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAboveMessageMatchRenderer_story",
                  fragmentName:
                    "GeminiFeedStoryAboveMessageCoAuthorConfirmationRenderingStrategy_aboveMessage",
                  fragmentPropName: "aboveMessage",
                  kind: "ModuleImport",
                },
              ],
              type: "GeminiFeedStoryAboveMessageCoAuthorConfirmationRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAboveMessageMatchRenderer_story",
                  fragmentName:
                    "GeminiFeedStoryAboveMessageCoAuthorPendingPublishRenderingStrategy_aboveMessage",
                  fragmentPropName: "aboveMessage",
                  kind: "ModuleImport",
                },
              ],
              type: "GeminiFeedStoryAboveMessageCoAuthorPendingPublishRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAboveMessageMatchRenderer_story",
                  fragmentName:
                    "GeminiFeedStoryAboveMessageVideoReadyStateRenderingStrategy_aboveMessage",
                  fragmentPropName: "aboveMessage",
                  kind: "ModuleImport",
                },
              ],
              type: "GeminiFeedStoryAboveMessageVideoReadyStateRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAboveMessageMatchRenderer_story",
                  fragmentName:
                    "GeminiFeedStoryAboveMessageShareablePostRenderingStrategy_aboveMessage",
                  fragmentPropName: "aboveMessage",
                  kind: "ModuleImport",
                },
              ],
              type: "GeminiFeedStoryAboveMessageShareablePostRenderingStrategy",
              abstractKey: null,
            },
          ],
          storageKey: 'above_message(supported:"JT5dm")',
        },
        i = {
          alias: null,
          args: [{ kind: "Literal", name: "supported", value: "38fo2r" }],
          concreteType: null,
          kind: "LinkedField",
          name: "seo_llm_title",
          plural: !1,
          selections: [
            o,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStorySeoLLMTitleMatchRenderer_story",
                  fragmentName:
                    "GroupsCometSeoLLMTitleGroupPostStrategy_seoLLMTitle",
                  fragmentPropName: "seoLLMTitle",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStorySeoLLMTitleGroupPostStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStorySeoLLMTitleMatchRenderer_story",
                  fragmentName:
                    "GroupsCometSeoLLMTitleProfilePostStrategy_seoLLMTitle",
                  fragmentPropName: "seoLLMTitle",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStorySeoLLMTitleProfilePostStrategy",
              abstractKey: null,
            },
          ],
          storageKey: 'seo_llm_title(supported:"38fo2r")',
        },
        l = {
          alias: null,
          args: [{ kind: "Literal", name: "supported", value: "17xwNy" }],
          concreteType: null,
          kind: "LinkedField",
          name: "info_icon",
          plural: !1,
          selections: [
            o,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryInfoIconSection_story",
                  fragmentName:
                    "CometFeedStoryArticleContextIconStrategy_infoIcon",
                  fragmentPropName: "infoIcon",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryArticleContextIconStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryInfoIconSection_story",
                  fragmentName:
                    "CometFeedStoryBrandedContentIconStrategy_infoIcon",
                  fragmentPropName: "infoIcon",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryBrandedContentIconStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryInfoIconSection_story",
                  fragmentName:
                    "CometFeedStoryRightsManagerAttributionIconStrategy_infoIcon",
                  fragmentPropName: "infoIcon",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryRightsManagerAttributionIconStrategy",
              abstractKey: null,
            },
          ],
          storageKey: 'info_icon(supported:"17xwNy")',
        },
        s = {
          alias: null,
          args: [{ kind: "Literal", name: "supported", value: "2ZNIul" }],
          concreteType: null,
          kind: "LinkedField",
          name: "attachment_overlay",
          plural: !1,
          selections: [
            o,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentOverlaySection_story",
                  fragmentName:
                    "CometFeedStoryWarningScreenAttachmentStrategy_story",
                  fragmentPropName: "story",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryWarningScreenAttachmentStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentOverlaySection_story",
                  fragmentName:
                    "CometFeedStoryMusicPostLevelExperienceAttachmentOverlayStrategy_story",
                  fragmentPropName: "story",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryMusicPostLevelExperienceAttachmentOverlayStrategy",
              abstractKey: null,
            },
          ],
          storageKey: 'attachment_overlay(supported:"2ZNIul")',
        },
        u = {
          alias: null,
          args: [{ kind: "Literal", name: "supported", value: "39IRBp" }],
          concreteType: null,
          kind: "LinkedField",
          name: "attached_story",
          plural: !1,
          selections: [
            o,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachedStoryMatchRenderer_story",
                  fragmentName:
                    "CometFeedStoryAttachedStoryWithFilterStrategy_attachedStory",
                  fragmentPropName: "attachedStory",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryAttachedStoryWithFilterStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachedStoryMatchRenderer_story",
                  fragmentName:
                    "CometFeedStoryAttachedStoryStrategy_attachedStory",
                  fragmentPropName: "attachedStory",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryAttachedStoryStrategy",
              abstractKey: null,
            },
          ],
          storageKey: 'attached_story(supported:"39IRBp")',
        },
        c = {
          alias: null,
          args: [{ kind: "Literal", name: "supported", value: "35YkOF" }],
          concreteType: null,
          kind: "LinkedField",
          name: "message",
          plural: !1,
          selections: [
            o,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryMessageMatchRenderer_story",
                  fragmentName:
                    "CometFeedStoryFormattedBackgroundMessageRenderingStrategy_message",
                  fragmentPropName: "message",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryFormattedBackgroundMessageRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryMessageMatchRenderer_story",
                  fragmentName:
                    "CometFeedStoryLargeMessageRenderingStrategy_message",
                  fragmentPropName: "message",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryLargeMessageRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryMessageMatchRenderer_story",
                  fragmentName:
                    "CometFeedStoryMessageWithQuoteRenderingStrategy_message",
                  fragmentPropName: "message",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryMessageWithQuoteRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryMessageMatchRenderer_story",
                  fragmentName:
                    "CometFeedStoryMultilingualMessageRenderingStrategy_message",
                  fragmentPropName: "message",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryMultilingualMessageRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryMessageMatchRenderer_story",
                  fragmentName:
                    "CometFeedStoryRichMessageRenderingStrategy_message",
                  fragmentPropName: "message",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryRichMessageRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryMessageMatchRenderer_story",
                  fragmentName:
                    "CometFeedStoryCommunityQAMessageRenderingStrategy_message",
                  fragmentPropName: "message",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryCommunityQAMessageRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryMessageMatchRenderer_story",
                  fragmentName:
                    "CometFeedStoryDefaultMessageRenderingStrategy_message",
                  fragmentPropName: "message",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryDefaultMessageRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryMessageMatchRenderer_story",
                  fragmentName:
                    "GeminiFeedStoryKeyUpdateFeedUnitMessageRenderingStrategy_message",
                  fragmentPropName: "message",
                  kind: "ModuleImport",
                },
              ],
              type: "GeminiFeedStoryKeyUpdateFeedUnitMessageRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryMessageMatchRenderer_story",
                  fragmentName:
                    "CometFeedStoryIGReelsXARMessageRenderingStrategy_message",
                  fragmentPropName: "message",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryIGReelsXARMessageRenderingStrategy",
              abstractKey: null,
            },
          ],
          storageKey: 'message(supported:"35YkOF")',
        },
        d = {
          alias: null,
          args: [{ kind: "Literal", name: "supported", value: "3GsK71" }],
          concreteType: null,
          kind: "LinkedField",
          name: "message_suffix",
          plural: !1,
          selections: [
            o,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryMessageMatchRenderer_story__message_suffix",
                  fragmentName:
                    "CometFeedStoryMessageSuffixRenderingStrategy_messageSuffix",
                  fragmentPropName: "messageSuffix",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryMessageSuffixRenderingStrategy",
              abstractKey: null,
            },
          ],
          storageKey: 'message_suffix(supported:"3GsK71")',
        },
        m = {
          alias: null,
          args: [{ kind: "Literal", name: "supported", value: "2IOiQ2" }],
          concreteType: null,
          kind: "LinkedField",
          name: "message_container",
          plural: !1,
          selections: [
            o,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryMessageContainerMatchRenderer_story",
                  fragmentName:
                    "CometFeedStoryAutoTranslatedMessageContainerRenderingStrategy_messageContainer",
                  fragmentPropName: "messageContainer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryAutoTranslatedMessageContainerRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryMessageContainerMatchRenderer_story",
                  fragmentName:
                    "CometFeedStoryTranslatedMessageContainerRenderingStrategy_messageContainer",
                  fragmentPropName: "messageContainer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryTranslatedMessageContainerRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryMessageContainerMatchRenderer_story",
                  fragmentName:
                    "CometFeedStoryMessageContainerRenderingStrategy_messageContainer",
                  fragmentPropName: "messageContainer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryMessageContainerRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryMessageContainerMatchRenderer_story",
                  fragmentName:
                    "GeminiFeedStoryKeyUpdateFeedUnitMessageContainerSectionStrategy_messageContainer",
                  fragmentPropName: "messageContainer",
                  kind: "ModuleImport",
                },
              ],
              type: "GeminiFeedStoryKeyUpdateFeedUnitMessageContainerSectionStrategy",
              abstractKey: null,
            },
          ],
          storageKey: 'message_container(supported:"2IOiQ2")',
        },
        p = {
          alias: null,
          args: [{ kind: "Literal", name: "supported", value: "4jCzy2" }],
          concreteType: null,
          kind: "LinkedField",
          name: "message_sticker",
          plural: !1,
          selections: [
            o,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryMessageStickerMatchRenderer_story",
                  fragmentName:
                    "CometFeedStoryMessageStickerStrategy_messageSticker",
                  fragmentPropName: "messageSticker",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryMessageStickerRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryMessageStickerMatchRenderer_story",
                  fragmentName:
                    "CometFeedStoryAnimatedMessageStickerStrategy_messageSticker",
                  fragmentPropName: "messageSticker",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryAnimatedMessageStickerRenderingStrategy",
              abstractKey: null,
            },
          ],
          storageKey: 'message_sticker(supported:"4jCzy2")',
        },
        _ = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encrypted_tracking",
          storageKey: null,
        },
        f = {
          kind: "Variable",
          name: "render_location",
          variableName: "renderLocation",
        },
        g = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "media",
          plural: !1,
          selections: [
            o,
            {
              kind: "InlineFragment",
              selections: [
                {
                  alias: "allow_unencrypted_playback",
                  args: null,
                  kind: "ScalarField",
                  name: "is_drm_fallback_policy_allow_unencrypted_playback",
                  storageKey: null,
                },
              ],
              type: "Video",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: t,
              type: "Node",
              abstractKey: "__isNode",
            },
            {
              kind: "InlineFragment",
              selections: t,
              type: "CollectionSlideshowMedia",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: t,
              type: "DynamicFeedAdAttachmentMedia",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: t,
              type: "GenericAttachmentMedia",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: t,
              type: "MontageImage",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: t,
              type: "MontageVideo",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
        h = {
          alias: null,
          args: r,
          concreteType: "StoryAttachment",
          kind: "LinkedField",
          name: "attachments",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "deduplication_key",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "target",
              plural: !1,
              selections: [o, e],
              storageKey: null,
            },
            o,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "style_list",
              storageKey: null,
            },
            {
              alias: "styles",
              args: [
                f,
                { kind: "Literal", name: "supported", value: "4xEQPx" },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "style_type_renderer",
              plural: !1,
              selections: [
                o,
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
            {
              alias: "throwbackStyles",
              args: [
                f,
                { kind: "Literal", name: "supported", value: "3eKzDk" },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "style_type_renderer",
              plural: !1,
              selections: [
                o,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryAttachmentMatchRendererThrowback_attachment",
                      fragmentName:
                        "CometFeedStoryGoodwillSharedAttachmentStyle_styleTypeRenderer",
                      fragmentPropName: "styleTypeRenderer",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "StoryAttachmentGoodwillSharedStyleRenderer",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: [
                n,
                { kind: "Literal", name: "supported", value: "1oCS4f" },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "comet_footer_renderer",
              plural: !1,
              selections: [
                o,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryAttachmentFooterMatchRenderer_attachment",
                      fragmentName:
                        "CometStoryAttachmentFooterVideoPageLikeStrategy_attachmentFooter",
                      fragmentPropName: "attachmentFooter",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryAttachmentFooterVideoPageLikeStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryAttachmentFooterMatchRenderer_attachment",
                      fragmentName:
                        "CometStoryAttachmentFooterVideoProfileFollowStrategy_attachmentFooter",
                      fragmentPropName: "attachmentFooter",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryAttachmentFooterVideoProfileFollowStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryAttachmentFooterMatchRenderer_attachment",
                      fragmentName:
                        "CometStoryAttachmentFooterPlaceStrategy_attachmentFooter",
                      fragmentPropName: "attachmentFooter",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryAttachmentFooterPlaceStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryAttachmentFooterMatchRenderer_attachment",
                      fragmentName:
                        "CometStoryAttachmentFooterFundraiserStrategy_attachmentFooter",
                      fragmentPropName: "attachmentFooter",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryAttachmentFooterFundraiserStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryAttachmentFooterMatchRenderer_attachment",
                      fragmentName:
                        "CometStoryAttachmentFooterGenericVideoStrategy_attachmentFooter",
                      fragmentPropName: "attachmentFooter",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryAttachmentFooterGenericVideoStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryAttachmentFooterMatchRenderer_attachment",
                      fragmentName:
                        "CometStoryAttachmentFooterVisitProfileStrategy_attachmentFooter",
                      fragmentPropName: "attachmentFooter",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryAttachmentFooterVisitProfileStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryAttachmentFooterMatchRenderer_attachment",
                      fragmentName:
                        "CometStoryAttachmentFooterGenericShareStrategy_attachmentFooter",
                      fragmentPropName: "attachmentFooter",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryAttachmentFooterGenericShareStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryAttachmentFooterMatchRenderer_attachment",
                      fragmentName:
                        "CometStoryAttachmentFooterPhotoStrategy_attachmentFooter",
                      fragmentPropName: "attachmentFooter",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryAttachmentFooterPhotoStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryAttachmentFooterMatchRenderer_attachment",
                      fragmentName:
                        "CometStoryAttachmentFooterOwnershipLinkStrategy_attachmentFooter",
                      fragmentPropName: "attachmentFooter",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryAttachmentFooterOwnershipLinkStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryAttachmentFooterMatchRenderer_attachment",
                      fragmentName:
                        "CometStoryAttachmentFooterGHLMockedGenericShareStrategy_attachmentFooter",
                      fragmentPropName: "attachmentFooter",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryAttachmentFooterGHLMockedGenericShareStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryAttachmentFooterMatchRenderer_attachment",
                      fragmentName:
                        "CometStoryAttachmentFooterOffsiteFundraiserStrategy_attachmentFooter",
                      fragmentPropName: "attachmentFooter",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryAttachmentFooterOffsiteFundraiserStrategy",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: [
                n,
                { kind: "Literal", name: "supported", value: "47T0PR" },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "comet_footer_disclaimer_renderer",
              plural: !1,
              selections: [
                o,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryAttachmentDisclaimerFooterSection_attachment",
                      fragmentName:
                        "CometStoryAttachmentDisclaimerFooterDynamicAdContextStrategy_attachmentFooterDisclaimer",
                      fragmentPropName: "attachmentFooterDisclaimer",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryAttachmentDisclaimerFooterDynamicAdContextStrategy",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
            g,
            {
              alias: null,
              args: null,
              concreteType: "SubattachmentsConnection",
              kind: "LinkedField",
              name: "all_subattachments",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "StoryAttachment",
                  kind: "LinkedField",
                  name: "nodes",
                  plural: !0,
                  selections: [g],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        y = {
          alias: null,
          args: null,
          concreteType: "FutureOfFeedInfo",
          kind: "LinkedField",
          name: "future_of_feed_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "dominant_readable_color",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        C = {
          alias: null,
          args: null,
          concreteType: "TextFormatMetadata",
          kind: "LinkedField",
          name: "text_format_metadata",
          plural: !1,
          selections: [o],
          storageKey: null,
        },
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "post_id",
          storageKey: null,
        },
        v = {
          alias: null,
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "uri",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        S = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        R = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "url",
              storageKey: null,
            },
          ],
          type: "Entity",
          abstractKey: "__isEntity",
        },
        L = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
        E = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "message",
          plural: !1,
          selections: [o, L],
          storageKey: null,
        },
        k = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "ghl_mocked_encrypted_link",
          storageKey: null,
        },
        I = [
          S,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "val",
            storageKey: null,
          },
        ],
        T = {
          alias: null,
          args: null,
          concreteType: "GHLScramblingProperty",
          kind: "LinkedField",
          name: "attributes",
          plural: !0,
          selections: I,
          storageKey: null,
        },
        D = {
          alias: null,
          args: null,
          concreteType: "GHLScramblingProperty",
          kind: "LinkedField",
          name: "styles",
          plural: !0,
          selections: I,
          storageKey: null,
        },
        x = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "tag",
          storageKey: null,
        },
        $ = {
          alias: null,
          args: null,
          concreteType: "GHLScramblingNode",
          kind: "LinkedField",
          name: "ghl_label_mocked_cta_button",
          plural: !1,
          selections: [
            T,
            D,
            L,
            x,
            {
              alias: null,
              args: null,
              concreteType: "GHLScramblingNode",
              kind: "LinkedField",
              name: "children",
              plural: !0,
              selections: [
                T,
                D,
                L,
                x,
                {
                  alias: null,
                  args: null,
                  concreteType: "GHLScramblingNode",
                  kind: "LinkedField",
                  name: "children",
                  plural: !0,
                  selections: [T, D, L, x],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        P = {
          alias: "wwwURL",
          args: [{ kind: "Literal", name: "site", value: "www" }],
          kind: "ScalarField",
          name: "url",
          storageKey: 'url(site:"www")',
        },
        N = {
          alias: null,
          args: null,
          concreteType: "Group",
          kind: "LinkedField",
          name: "target_group",
          plural: !1,
          selections: t,
          storageKey: null,
        },
        M = {
          alias: null,
          args: null,
          concreteType: "OptimisticMediaAttachmentData",
          kind: "LinkedField",
          name: "optimistic_media_attachments",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "entID",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "height",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "objectURL",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "type",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "useCDNPreview",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "width",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        w = [
          {
            condition:
              "__relay_internal__pv__GHLShouldChangeAdIdFieldNamerelayprovider",
            kind: "Condition",
            passingValue: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "ad_id",
                storageKey: null,
              },
            ],
          },
          {
            condition:
              "__relay_internal__pv__GHLShouldChangeAdIdFieldNamerelayprovider",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                alias: "lbl_adv_iden",
                args: null,
                kind: "ScalarField",
                name: "ad_id",
                storageKey: null,
              },
            ],
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "ad_conversion_type",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "SensitiveVerticalDataFields",
            kind: "LinkedField",
            name: "ad_sensitive_vertical_info",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_sensitive_tier_1",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_sensitive_tier_2",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "client_token",
            storageKey: null,
          },
        ],
        A = {
          condition:
            "__relay_internal__pv__GHLShouldChangeSponsoredDataFieldNamerelayprovider",
          kind: "Condition",
          passingValue: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "SponsoredData",
              kind: "LinkedField",
              name: "sponsored_data",
              plural: !1,
              selections: w,
              storageKey: null,
            },
          ],
        },
        F = {
          condition:
            "__relay_internal__pv__GHLShouldChangeSponsoredDataFieldNamerelayprovider",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              alias: "th_dat_spo",
              args: null,
              concreteType: "SponsoredData",
              kind: "LinkedField",
              name: "sponsored_data",
              plural: !1,
              selections: w,
              storageKey: null,
            },
          ],
        };
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometFeedStoryDefaultContentStrategy_content$normalization",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "Story",
            kind: "LinkedField",
            name: "story",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Feedback",
                kind: "LinkedField",
                name: "feedback",
                plural: !1,
                selections: t,
                storageKey: null,
              },
              {
                alias: null,
                args: r,
                concreteType: "CometStorySections",
                kind: "LinkedField",
                name: "comet_sections",
                plural: !1,
                selections: [
                  a,
                  i,
                  l,
                  s,
                  u,
                  c,
                  d,
                  m,
                  p,
                  {
                    alias: null,
                    args: [
                      { kind: "Literal", name: "supported", value: "3AbuAz" },
                    ],
                    concreteType: null,
                    kind: "LinkedField",
                    name: "aggregated_stories",
                    plural: !1,
                    selections: [
                      o,
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName:
                              "CometFeedStoryAggregatedStoriesMatchRenderer_story",
                            fragmentName:
                              "CometFeedStoryAggregatedStoriesStrategy_aggregatedStories",
                            fragmentPropName: "aggregatedStories",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometStoryAggregatedStoriesStrategy",
                        abstractKey: null,
                      },
                    ],
                    storageKey: 'aggregated_stories(supported:"3AbuAz")',
                  },
                ],
                storageKey: null,
              },
              _,
              h,
              y,
              C,
              b,
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "actors",
                plural: !0,
                selections: [v, o, e, S, R],
                storageKey: null,
              },
              E,
              k,
              $,
              P,
              N,
              {
                alias: null,
                args: null,
                concreteType: "Story",
                kind: "LinkedField",
                name: "attached_story",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "actors",
                    plural: !0,
                    selections: [o, S, e, v, R],
                    storageKey: null,
                  },
                  e,
                  {
                    alias: null,
                    args: r,
                    concreteType: "CometStorySections",
                    kind: "LinkedField",
                    name: "comet_sections",
                    plural: !1,
                    selections: [a, i, l, s, u, c, d, m, p],
                    storageKey: null,
                  },
                  _,
                  h,
                  y,
                  C,
                  b,
                  E,
                  k,
                  $,
                  P,
                  N,
                  {
                    alias: null,
                    args: null,
                    concreteType: "Story",
                    kind: "LinkedField",
                    name: "attached_story",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "actors",
                        plural: !0,
                        selections: [o, S, e],
                        storageKey: null,
                      },
                      e,
                    ],
                    storageKey: null,
                  },
                  { kind: "ClientExtension", selections: [M] },
                  A,
                  F,
                ],
                storageKey: null,
              },
              e,
              {
                kind: "ClientExtension",
                selections: [
                  M,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "optimistic_loading_type",
                    storageKey: null,
                  },
                ],
              },
              A,
              F,
            ],
            storageKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              o,
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
