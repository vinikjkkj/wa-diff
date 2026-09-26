__d(
  "GroupsCometAAV5ContentCreationPostFeedUnitQuery.graphql",
  [
    "GroupsCometAAV5ContentCreationPostFeedUnitQuery_facebookRelayOperation",
    "GHLShouldChangeAdIdFieldName.relayprovider",
    "GHLShouldChangeSponsoredDataFieldName.relayprovider",
    "CometFeedStory_enable_reactor_facepile.relayprovider",
    "CometFeedStory_enable_social_bubbles.relayprovider",
    "CometFeedStory_enable_post_permalink_white_space_click.relayprovider",
    "CometUFICommentActionLinksRewriteEnabled.relayprovider",
    "CometUFICommentAvatarStickerAnimatedImage.relayprovider",
    "IsWorkUser.relayprovider",
    "TestPilotShouldIncludeDemoAdUseCase.relayprovider",
    "FBReels_deprecate_short_form_video_context_gk.relayprovider",
    "CometUFI_dedicated_comment_routable_dialog_gk.relayprovider",
    "FBReels_enable_view_dubbed_audio_type_gk.relayprovider",
    "CometFeedShareMedia_shouldPrefetchShareImage.relayprovider",
    "CometImmersivePhotoCanUserDisable3DMotion.relayprovider",
    "WorkCometIsEmployeeGKProvider.relayprovider",
    "IsMergQAPolls.relayprovider",
    "FBReelsMediaFooter_comet_enable_reels_ads_gk.relayprovider",
    "CometUFIReactionsEnableShortName.relayprovider",
    "CometUFICommentAutoTranslationType.relayprovider",
    "CometUFIShareActionMigration.relayprovider",
    "CometUFISingleLineUFI.relayprovider",
    "relay_provider_comet_ufi_ssr_seo_defer.relayprovider",
    "FBReelsIFUTileContent_reelsIFUPlayOnHover.relayprovider",
    "GroupsCometGYSJFeedItemHeight.relayprovider",
    "StoriesShouldEnablePhotosensitiveContentWarning.relayprovider",
    "ShouldEnableBakedInTextStories.relayprovider",
    "StoriesShouldIncludeFbNotes.relayprovider",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "feedLocation",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "feedbackSource",
        },
        r = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "focusCommentID",
        },
        o = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "privacySelectorRenderLocation",
        },
        a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "referringStoryRenderLocation",
        },
        i = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "renderLocation",
        },
        l = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        s = { defaultValue: null, kind: "LocalArgument", name: "storyID" },
        u = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "useDefaultActor",
        },
        c = [{ kind: "Variable", name: "id", variableName: "storyID" }],
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        m = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        p = [
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
            name: "brs_filter_setting",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "client_token",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "post_rendering_loggers",
            storageKey: null,
          },
          d,
        ],
        _ = [m],
        f = {
          alias: null,
          args: null,
          concreteType: "QuickPromotionFeedUnitItem",
          kind: "LinkedField",
          name: "quick_promotion_items",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "QuickPromotion",
              kind: "LinkedField",
              name: "quick_promotion",
              plural: !1,
              selections: _,
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, r, o, a, i, l, s, u],
          kind: "Fragment",
          metadata: null,
          name: "GroupsCometAAV5ContentCreationPostFeedUnitQuery",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "CometFeedUnit_feedUnit",
                    },
                  ],
                  type: "Story",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [
            s,
            e,
            t,
            r,
            o,
            a,
            l,
            u,
            i,
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__GHLShouldChangeAdIdFieldNamerelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__GHLShouldChangeSponsoredDataFieldNamerelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__CometFeedStory_enable_reactor_facepilerelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__CometFeedStory_enable_social_bubblesrelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__CometFeedStory_enable_post_permalink_white_space_clickrelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__CometUFICommentActionLinksRewriteEnabledrelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__CometUFICommentAvatarStickerAnimatedImagerelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__IsWorkUserrelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__TestPilotShouldIncludeDemoAdUseCaserelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__FBReels_deprecate_short_form_video_context_gkrelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__CometUFI_dedicated_comment_routable_dialog_gkrelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__FBReels_enable_view_dubbed_audio_type_gkrelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__CometFeedShareMedia_shouldPrefetchShareImagerelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__CometImmersivePhotoCanUserDisable3DMotionrelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__WorkCometIsEmployeeGKProviderrelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__IsMergQAPollsrelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__FBReelsMediaFooter_comet_enable_reels_ads_gkrelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__CometUFICommentAutoTranslationTyperelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__CometUFIShareActionMigrationrelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__CometUFISingleLineUFIrelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__relay_provider_comet_ufi_ssr_seo_deferrelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__FBReelsIFUTileContent_reelsIFUPlayOnHoverrelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__GroupsCometGYSJFeedItemHeightrelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__StoriesShouldEnablePhotosensitiveContentWarningrelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__ShouldEnableBakedInTextStoriesrelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__StoriesShouldIncludeFbNotesrelayprovider",
            },
          ],
          kind: "Operation",
          name: "GroupsCometAAV5ContentCreationPostFeedUnitQuery",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                d,
                m,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineFragment",
                          selections: [
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
                              concreteType: "Feedback",
                              kind: "LinkedField",
                              name: "feedback",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "Group",
                                  kind: "LinkedField",
                                  name: "associated_group",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "context_actor_hovercard",
                                      storageKey: null,
                                    },
                                    m,
                                  ],
                                  storageKey: null,
                                },
                                m,
                              ],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "is_story_civic",
                              storageKey: null,
                            },
                            {
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
                                  selections: p,
                                  storageKey: null,
                                },
                              ],
                            },
                            {
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
                                  selections: p,
                                  storageKey: null,
                                },
                              ],
                            },
                            {
                              args: null,
                              documentName:
                                "CometFeedUnitContainerSection_feedUnit",
                              fragmentName:
                                "CometFeedUnitStoryStrategy_feedUnit",
                              fragmentPropName: "feedUnit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "Story",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedUnitContainerSection_feedUnit",
                              fragmentName:
                                "CometFeedUnitGoodwillMemoryStrategy_feedUnit",
                              fragmentPropName: "feedUnit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "GoodwillCometStory",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedUnitContainerSection_feedUnit",
                              fragmentName:
                                "CometPYMKQPFeedUnitStrategy_feedUnit",
                              fragmentPropName: "feedUnit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "PaginatedPeopleYouMayKnowFeedUnit",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedUnitContainerSection_feedUnit",
                              fragmentName:
                                "CometReelsFeedUnitStrategy_feedUnit",
                              fragmentPropName: "feedUnit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "ShowcaseFeedUnit",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedUnitContainerSection_feedUnit",
                              fragmentName:
                                "CometFriendRequestsFeedUnitStrategy_feedUnit",
                              fragmentPropName: "feedUnit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "FriendRequestsFeedUnit",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            f,
                            {
                              args: null,
                              documentName:
                                "CometFeedUnitContainerSection_feedUnit",
                              fragmentName:
                                "CometFeedUnitQuickPromotionStrategy_feedUnit",
                              fragmentPropName: "feedUnit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "QuickPromotionNativeTemplateFeedUnit",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedUnitContainerSection_feedUnit",
                              fragmentName:
                                "GroupsCometGYSJFeedUnitStrategy_feedUnit",
                              fragmentPropName: "feedUnit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "GroupsYouShouldJoinFeedUnit",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedUnitContainerSection_feedUnit",
                              fragmentName:
                                "CometEndOfFeedUpsellStrategy_feedUnit",
                              fragmentPropName: "feedUnit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "EndOfFeedUpsellFeedUnit",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedUnitContainerSection_feedUnit",
                              fragmentName:
                                "CometGroupRelatedGroupsFeedUnitStrategy_feedUnit",
                              fragmentPropName: "feedUnit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "GroupRelatedGroupsFeedUnit",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedUnitContainerSection_feedUnit",
                              fragmentName:
                                "CometStoriesSingleBucketFeedUnitStrategy_feedUnit",
                              fragmentPropName: "feedUnit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "StoriesSingleBucketInlineViewerFeedUnit",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedUnitContainerSection_feedUnit",
                              fragmentName:
                                "CometStoriesMultiBucketFeedUnitStrategy_feedUnit",
                              fragmentPropName: "feedUnit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "DiscoverFeedUnit",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedUnitContainerSection_feedUnit",
                              fragmentName:
                                "CometFeedCustomizedStoryStrategy_feedUnit",
                              fragmentPropName: "feedUnit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CustomizedStory",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [f],
                          type: "QuickPromotionFeedUnit",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "TrackingData",
                              kind: "LinkedField",
                              name: "trackingdata",
                              plural: !1,
                              selections: _,
                              storageKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "viewability_config",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "CometClientViewConfig",
                                  kind: "LinkedField",
                                  name: "client_view_config",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "can_delay_log_impression",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "use_banzai_signal_imp",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "use_banzai_vital_imp",
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              type: "Story",
                              abstractKey: null,
                            },
                          ],
                          type: "TrackableFeedUnit",
                          abstractKey: "__isTrackableFeedUnit",
                        },
                      ],
                      type: "FeedUnit",
                      abstractKey: "__isFeedUnit",
                    },
                  ],
                  type: "Story",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "GroupsCometAAV5ContentCreationPostFeedUnitQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "GroupsCometAAV5ContentCreationPostFeedUnitQuery",
          operationKind: "query",
          text: null,
          providedVariables: {
            __relay_internal__pv__GHLShouldChangeAdIdFieldNamerelayprovider: n(
              "GHLShouldChangeAdIdFieldName.relayprovider",
            ),
            __relay_internal__pv__GHLShouldChangeSponsoredDataFieldNamerelayprovider:
              n("GHLShouldChangeSponsoredDataFieldName.relayprovider"),
            __relay_internal__pv__CometFeedStory_enable_reactor_facepilerelayprovider:
              n("CometFeedStory_enable_reactor_facepile.relayprovider"),
            __relay_internal__pv__CometFeedStory_enable_social_bubblesrelayprovider:
              n("CometFeedStory_enable_social_bubbles.relayprovider"),
            __relay_internal__pv__CometFeedStory_enable_post_permalink_white_space_clickrelayprovider:
              n(
                "CometFeedStory_enable_post_permalink_white_space_click.relayprovider",
              ),
            __relay_internal__pv__CometUFICommentActionLinksRewriteEnabledrelayprovider:
              n("CometUFICommentActionLinksRewriteEnabled.relayprovider"),
            __relay_internal__pv__CometUFICommentAvatarStickerAnimatedImagerelayprovider:
              n("CometUFICommentAvatarStickerAnimatedImage.relayprovider"),
            __relay_internal__pv__IsWorkUserrelayprovider: n(
              "IsWorkUser.relayprovider",
            ),
            __relay_internal__pv__TestPilotShouldIncludeDemoAdUseCaserelayprovider:
              n("TestPilotShouldIncludeDemoAdUseCase.relayprovider"),
            __relay_internal__pv__FBReels_deprecate_short_form_video_context_gkrelayprovider:
              n("FBReels_deprecate_short_form_video_context_gk.relayprovider"),
            __relay_internal__pv__CometUFI_dedicated_comment_routable_dialog_gkrelayprovider:
              n("CometUFI_dedicated_comment_routable_dialog_gk.relayprovider"),
            __relay_internal__pv__FBReels_enable_view_dubbed_audio_type_gkrelayprovider:
              n("FBReels_enable_view_dubbed_audio_type_gk.relayprovider"),
            __relay_internal__pv__CometFeedShareMedia_shouldPrefetchShareImagerelayprovider:
              n("CometFeedShareMedia_shouldPrefetchShareImage.relayprovider"),
            __relay_internal__pv__CometImmersivePhotoCanUserDisable3DMotionrelayprovider:
              n("CometImmersivePhotoCanUserDisable3DMotion.relayprovider"),
            __relay_internal__pv__WorkCometIsEmployeeGKProviderrelayprovider: n(
              "WorkCometIsEmployeeGKProvider.relayprovider",
            ),
            __relay_internal__pv__IsMergQAPollsrelayprovider: n(
              "IsMergQAPolls.relayprovider",
            ),
            __relay_internal__pv__FBReelsMediaFooter_comet_enable_reels_ads_gkrelayprovider:
              n("FBReelsMediaFooter_comet_enable_reels_ads_gk.relayprovider"),
            __relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider:
              n("CometUFIReactionsEnableShortName.relayprovider"),
            __relay_internal__pv__CometUFICommentAutoTranslationTyperelayprovider:
              n("CometUFICommentAutoTranslationType.relayprovider"),
            __relay_internal__pv__CometUFIShareActionMigrationrelayprovider: n(
              "CometUFIShareActionMigration.relayprovider",
            ),
            __relay_internal__pv__CometUFISingleLineUFIrelayprovider: n(
              "CometUFISingleLineUFI.relayprovider",
            ),
            __relay_internal__pv__relay_provider_comet_ufi_ssr_seo_deferrelayprovider:
              n("relay_provider_comet_ufi_ssr_seo_defer.relayprovider"),
            __relay_internal__pv__FBReelsIFUTileContent_reelsIFUPlayOnHoverrelayprovider:
              n("FBReelsIFUTileContent_reelsIFUPlayOnHover.relayprovider"),
            __relay_internal__pv__GroupsCometGYSJFeedItemHeightrelayprovider: n(
              "GroupsCometGYSJFeedItemHeight.relayprovider",
            ),
            __relay_internal__pv__StoriesShouldEnablePhotosensitiveContentWarningrelayprovider:
              n(
                "StoriesShouldEnablePhotosensitiveContentWarning.relayprovider",
              ),
            __relay_internal__pv__ShouldEnableBakedInTextStoriesrelayprovider:
              n("ShouldEnableBakedInTextStories.relayprovider"),
            __relay_internal__pv__StoriesShouldIncludeFbNotesrelayprovider: n(
              "StoriesShouldIncludeFbNotes.relayprovider",
            ),
          },
        },
      };
    })();
    a.exports = e;
  },
  null,
);
