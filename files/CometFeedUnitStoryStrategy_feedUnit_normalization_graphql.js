__d(
  "CometFeedUnitStoryStrategy_feedUnit$normalization.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
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
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "cache_id",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "matched_terms",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "post_id",
          storageKey: null,
        },
        i = [t],
        l = {
          kind: "InlineFragment",
          selections: i,
          type: "Node",
          abstractKey: "__isNode",
        },
        s = {
          alias: null,
          args: [
            { kind: "Literal", name: "framework", value: "WARNING_SCREENS" },
            { kind: "Literal", name: "location", value: "unknown" },
          ],
          concreteType: "CIXScreen",
          kind: "LinkedField",
          name: "cix_screen",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "view_model",
              plural: !1,
              selections: [
                e,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "render_type",
                      storageKey: null,
                    },
                  ],
                  type: "OverlayWarningScreenViewModel",
                  abstractKey: null,
                },
                l,
              ],
              storageKey: null,
            },
          ],
          storageKey:
            'cix_screen(framework:"WARNING_SCREENS",location:"unknown")',
        },
        u = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "media",
          plural: !1,
          selections: [
            e,
            {
              kind: "InlineFragment",
              selections: i,
              type: "Video",
              abstractKey: null,
            },
            l,
            {
              kind: "InlineFragment",
              selections: i,
              type: "CollectionSlideshowMedia",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: i,
              type: "DynamicFeedAdAttachmentMedia",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: i,
              type: "GenericAttachmentMedia",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: i,
              type: "MontageImage",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: i,
              type: "MontageVideo",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
        c = {
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
              name: "should_reverse_message_and_attachment_position",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "should_overlay_header",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "aspect_ratio_update",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "web_reshare_variant",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        d = [
          {
            kind: "Variable",
            name: "location",
            variableName: "renderLocation",
          },
        ],
        m = {
          alias: null,
          args: d,
          kind: "ScalarField",
          name: "should_host_actor_link_in_watch",
          storageKey: null,
        },
        p = {
          alias: null,
          args: [{ kind: "Literal", name: "supported", value: "3GYyzk" }],
          concreteType: null,
          kind: "LinkedField",
          name: "context_layout",
          plural: !1,
          selections: [
            e,
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
        _ = {
          alias: null,
          args: [{ kind: "Literal", name: "supported", value: "3ggdKM" }],
          concreteType: null,
          kind: "LinkedField",
          name: "footer",
          plural: !1,
          selections: [
            e,
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
                  fragmentName: "CometFeedStoryInsightsFooterStrategy_insights",
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
                  fragmentName: "CometFeedStoryEventAlbumFooterStrategy_story",
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
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encrypted_tracking",
          storageKey: null,
        },
        g = {
          alias: "permalink_url",
          args: [{ kind: "Literal", name: "site", value: "comet" }],
          kind: "ScalarField",
          name: "url",
          storageKey: 'url(site:"comet")',
        },
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        y = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "owning_profile",
          plural: !1,
          selections: [
            e,
            h,
            {
              kind: "InlineFragment",
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "short_name",
                  storageKey: null,
                },
              ],
              type: "User",
              abstractKey: null,
            },
            t,
          ],
          storageKey: null,
        },
        C = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "type",
          storageKey: null,
        },
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "height",
          storageKey: null,
        },
        v = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "width",
          storageKey: null,
        },
        S = [
          b,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "scale",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
          v,
        ],
        R = {
          alias: null,
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "icon",
          plural: !1,
          selections: S,
          storageKey: null,
        },
        L = { kind: "TypeDiscriminator", abstractKey: "__isNFXAction" },
        E = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "context",
          storageKey: null,
        },
        k = [{ kind: "Literal", name: "site", value: "www" }],
        I = {
          args: null,
          fragment: n(
            "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql",
          ),
          kind: "FragmentSpread",
        },
        T = [I],
        D = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null,
          },
          I,
        ],
        x = {
          alias: null,
          args: null,
          concreteType: "TombstoneFeedUnit",
          kind: "LinkedField",
          name: "tombstone_feedunit",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_hidden_from_client",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "Tombstone",
              kind: "LinkedField",
              name: "tombstone",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "action",
                  storageKey: null,
                },
                t,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "group_id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "author_id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "feedback_id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "canUndo",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_loading",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "negativeFeedbackActionID",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "subTitle",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "DeletedPostTombstoneContent",
                  kind: "LinkedField",
                  name: "deleted_post_tombstone",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "member_stats_text",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "tombstone_actions",
                      plural: !0,
                      selections: [
                        e,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "action_type",
                          storageKey: null,
                        },
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
                  name: "message_id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "executed_action",
                  plural: !1,
                  selections: [e, C, R, L, E, t],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "followup_actions",
                  plural: !0,
                  selections: [
                    e,
                    C,
                    L,
                    t,
                    E,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "can_display_completed_state",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "already_completed",
                      storageKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: k,
                          kind: "ScalarField",
                          name: "redirect_uri",
                          storageKey: 'redirect_uri(site:"www")',
                        },
                        {
                          alias: null,
                          args: k,
                          kind: "ScalarField",
                          name: "redirect_style",
                          storageKey: 'redirect_style(site:"www")',
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "is_disabled",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "tooltip",
                          storageKey: null,
                        },
                      ],
                      type: "NFXActionWhichRedirects",
                      abstractKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "TextWithEntities",
                      kind: "LinkedField",
                      name: "title",
                      plural: !1,
                      selections: T,
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "TextWithEntities",
                      kind: "LinkedField",
                      name: "subtitle",
                      plural: !1,
                      selections: T,
                      storageKey: null,
                    },
                    R,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "confirmation_required",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "confirmation_type",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "target_actor_name",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "TextWithEntities",
                      kind: "LinkedField",
                      name: "loading_text",
                      plural: !1,
                      selections: T,
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "TextWithEntities",
                      kind: "LinkedField",
                      name: "confirmation_message",
                      plural: !1,
                      selections: T,
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "TextWithEntities",
                      kind: "LinkedField",
                      name: "confirmation_button_label",
                      plural: !1,
                      selections: D,
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "target_user_id",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "Image",
                      kind: "LinkedField",
                      name: "confirmed_icon",
                      plural: !1,
                      selections: S,
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "TextWithEntities",
                      kind: "LinkedField",
                      name: "confirmed_title",
                      plural: !1,
                      selections: T,
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "TextWithEntities",
                      kind: "LinkedField",
                      name: "confirmed_subtitle",
                      plural: !1,
                      selections: T,
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "can_undo",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "TextWithEntities",
                      kind: "LinkedField",
                      name: "undo_button_label",
                      plural: !1,
                      selections: D,
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        $ = {
          alias: null,
          args: null,
          concreteType: "Story",
          kind: "LinkedField",
          name: "attached_story",
          plural: !1,
          selections: [
            t,
            m,
            {
              alias: null,
              args: d,
              concreteType: "CometStorySections",
              kind: "LinkedField",
              name: "comet_sections",
              plural: !1,
              selections: [p, _],
              storageKey: null,
            },
            f,
            g,
            {
              alias: null,
              args: null,
              concreteType: "Feedback",
              kind: "LinkedField",
              name: "feedback",
              plural: !1,
              selections: [t, y],
              storageKey: null,
            },
            { kind: "ClientExtension", selections: [x] },
          ],
          storageKey: null,
        },
        P = {
          alias: null,
          args: null,
          concreteType: "StoryBumperData",
          kind: "LinkedField",
          name: "bumpers",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "triggered_bumpers",
              plural: !0,
              selections: [
                e,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "triggers",
                  plural: !0,
                  selections: [
                    e,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "trigger_event",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        N = {
          alias: null,
          args: [{ kind: "Literal", name: "supported", value: "20GvtT" }],
          concreteType: null,
          kind: "LinkedField",
          name: "content",
          plural: !1,
          selections: [
            e,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryContentMatchRenderer_story",
                  fragmentName:
                    "CometFeedStoryInitiallyCollapsedContentStrategy_content",
                  fragmentPropName: "content",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryInitiallyCollapsedContentStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryContentMatchRenderer_story",
                  fragmentName:
                    "CometFeedStoryAttachmentOnlyContentStrategy_content",
                  fragmentPropName: "content",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryAttachmentOnlyContentStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryContentMatchRenderer_story",
                  fragmentName: "CometFeedStoryDefaultContentStrategy_content",
                  fragmentPropName: "content",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryDefaultContentStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryContentMatchRenderer_story",
                  fragmentName:
                    "GeminiFeedStoryKeyUpdateFeedUnitContentStrategy_content",
                  fragmentPropName: "content",
                  kind: "ModuleImport",
                },
              ],
              type: "GeminiFeedStoryKeyUpdateFeedUnitContentStrategy",
              abstractKey: null,
            },
          ],
          storageKey: 'content(supported:"20GvtT")',
        },
        M = {
          alias: null,
          args: [{ kind: "Literal", name: "supported", value: "67WoN" }],
          concreteType: null,
          kind: "LinkedField",
          name: "layout",
          plural: !1,
          selections: [
            e,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryLayoutMatchRenderer_story",
                  fragmentName:
                    "GeminiFeedStoryLongReadPostContentLayoutStrategy_layout",
                  fragmentPropName: "layout",
                  kind: "ModuleImport",
                },
              ],
              type: "GeminiFeedStoryLongReadPostContentLayoutStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryLayoutMatchRenderer_story",
                  fragmentName: "CometFeedStoryDefaultLayoutStrategy_layout",
                  fragmentPropName: "layout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryDefaultLayoutStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryLayoutMatchRenderer_story",
                  fragmentName:
                    "CometFeedStoryPendingParticipationPostLayoutStrategy_layout",
                  fragmentPropName: "layout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryPendingParticipationPostLayoutStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryLayoutMatchRenderer_story",
                  fragmentName:
                    "CometFeedStoryFullbleedContentLayoutStrategy_layout",
                  fragmentPropName: "layout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryFullbleedContentLayoutStrategy",
              abstractKey: null,
            },
          ],
          storageKey: 'layout(supported:"67WoN")',
        },
        w = {
          alias: null,
          args: [{ kind: "Literal", name: "supported", value: "2lQ7jN" }],
          concreteType: null,
          kind: "LinkedField",
          name: "copyright_violation_header",
          plural: !1,
          selections: [
            e,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryCopyrightViolationHeaderSection_story",
                  fragmentName:
                    "CometFeedStoryCopyrightViolationHeaderStrategy_header",
                  fragmentPropName: "header",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryCopyrightViolationHeaderStrategy",
              abstractKey: null,
            },
          ],
          storageKey: 'copyright_violation_header(supported:"2lQ7jN")',
        },
        A = {
          alias: null,
          args: [{ kind: "Literal", name: "supported", value: "XP1YS" }],
          concreteType: null,
          kind: "LinkedField",
          name: "header",
          plural: !1,
          selections: [
            e,
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
                  fragmentName: "CometFeedStoryFallbackHeaderStrategy_header",
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
                  fragmentName: "CometFeedStoryCommerceHeaderStrategy_header",
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
                  fragmentName: "GeminiFeedEmailLandingStoryStrategy_header",
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
        F = {
          alias: null,
          args: [{ kind: "Literal", name: "supported", value: "4f12sh" }],
          concreteType: null,
          kind: "LinkedField",
          name: "aymt_footer",
          plural: !1,
          selections: [
            e,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAYMTFooterSection_story",
                  fragmentName:
                    "CometFeedStoryAYMTProfessionalProfilePostFooterChannelStrategy_strategy",
                  fragmentPropName: "strategy",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryAYMTProfessionalProfilePostFooterChannelStrategy",
              abstractKey: null,
            },
          ],
          storageKey: 'aymt_footer(supported:"4f12sh")',
        },
        O = {
          alias: null,
          args: [{ kind: "Literal", name: "supported", value: "3a0SQa" }],
          concreteType: null,
          kind: "LinkedField",
          name: "feedback",
          plural: !1,
          selections: [
            e,
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
                  fragmentName: "GeminiStoryFeedbackPluginStrategy_feedback",
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
                  fragmentName: "CometFeedStoryFeedbackUFIStrategy_feedback",
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
        B = {
          alias: null,
          args: [{ kind: "Literal", name: "supported", value: "1u8Znq" }],
          concreteType: null,
          kind: "LinkedField",
          name: "outer_footer",
          plural: !1,
          selections: [
            e,
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
        W = {
          alias: null,
          args: [{ kind: "Literal", name: "supported", value: "4pc70y" }],
          concreteType: null,
          kind: "LinkedField",
          name: "call_to_action",
          plural: !1,
          selections: [
            e,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryCallToActionSection_story",
                  fragmentName: "CometFeedStoryDefaultCallToActionStrategy_cta",
                  fragmentPropName: "cta",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryDefaultCallToActionStrategy",
              abstractKey: null,
            },
          ],
          storageKey: 'call_to_action(supported:"4pc70y")',
        },
        q = {
          alias: null,
          args: [{ kind: "Literal", name: "supported", value: "3t3kTK" }],
          concreteType: null,
          kind: "LinkedField",
          name: "post_inform_treatment",
          plural: !1,
          selections: [
            e,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryPostInformTreatmentSection_story",
                  fragmentName:
                    "CometFeedStoryPostCoverInformTreatmentStrategy_story",
                  fragmentPropName: "story",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryInformTreatmentPostCoverStrategy",
              abstractKey: null,
            },
          ],
          storageKey: 'post_inform_treatment(supported:"3t3kTK")',
        },
        U = {
          alias: null,
          args: null,
          concreteType: "Feedback",
          kind: "LinkedField",
          name: "feedback",
          plural: !1,
          selections: [
            t,
            y,
            {
              alias: null,
              args: null,
              concreteType: "Group",
              kind: "LinkedField",
              name: "associated_group",
              plural: !1,
              selections: i,
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        V = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "debug_info",
          storageKey: null,
        },
        H = {
          alias: null,
          args: null,
          concreteType: "WhatsAppStoryAdContext",
          kind: "LinkedField",
          name: "whatsapp_ad_context",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "action_link",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        G = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "schema_context",
          storageKey: null,
        },
        z = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "click_tracking_linkshim_cb",
          storageKey: null,
        },
        j = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encrypted_click_tracking",
          storageKey: null,
        },
        K = {
          alias: null,
          args: null,
          concreteType: "WorkForeignEntityInfo",
          kind: "LinkedField",
          name: "work_foreign_entity_info",
          plural: !1,
          selections: [C],
          storageKey: null,
        },
        Q = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "url",
              storageKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "category_type",
                  storageKey: null,
                },
              ],
              type: "Page",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                K,
                {
                  alias: null,
                  args: null,
                  concreteType: "WorkUserInfo",
                  kind: "LinkedField",
                  name: "work_info",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_active_account",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: [{ kind: "Literal", name: "surface", value: "FEED" }],
                  kind: "ScalarField",
                  name: "show_promode_badge",
                  storageKey: 'show_promode_badge(surface:"FEED")',
                },
              ],
              type: "User",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                K,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_multi_company_group",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "work_official_status",
                  storageKey: null,
                },
              ],
              type: "Group",
              abstractKey: null,
            },
          ],
          type: "Entity",
          abstractKey: "__isEntity",
        },
        X = {
          kind: "ClientExtension",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "tombstone_is_loading",
              storageKey: null,
            },
            x,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "optimistic_loading_type",
              storageKey: null,
            },
            {
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
                b,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "objectURL",
                  storageKey: null,
                },
                C,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "useCDNPreview",
                  storageKey: null,
                },
                v,
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "creation_session_id",
              storageKey: null,
            },
          ],
        };
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometFeedUnitStoryStrategy_feedUnit$normalization",
        selections: [
          e,
          t,
          r,
          o,
          a,
          s,
          {
            alias: null,
            args: null,
            concreteType: "StoryAttachment",
            kind: "LinkedField",
            name: "attachments",
            plural: !0,
            selections: [
              u,
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
                  e,
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
            storageKey: null,
          },
          c,
          $,
          P,
          {
            alias: null,
            args: d,
            concreteType: "CometStorySections",
            kind: "LinkedField",
            name: "comet_sections",
            plural: !1,
            selections: [
              e,
              N,
              M,
              w,
              A,
              p,
              F,
              _,
              O,
              B,
              W,
              q,
              {
                alias: null,
                args: [{ kind: "Literal", name: "supported", value: "2rhVpW" }],
                concreteType: null,
                kind: "LinkedField",
                name: "action_link",
                plural: !1,
                selections: [
                  e,
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName: "CometFeedStoryActorLink_story",
                        fragmentName:
                          "CometFeedStoryTitleGroupSellerActor_actionLink",
                        fragmentPropName: "actionLink",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "GroupSellerProfileActionLink",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName: "CometFeedStoryActorLink_story",
                        fragmentName:
                          "CometFeedStoryTitleGroupMemberActor_groupMemberProfileActionLink",
                        fragmentPropName: "groupMemberProfileActionLink",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "GroupMemberProfileActionLink",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName: "CometFeedStoryActorLink_story",
                        fragmentName:
                          "CometFeedStoryTitleGroupAnonProfileActor_actionLink",
                        fragmentPropName: "actionLink",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "GroupMemberAnonProfileActionLink",
                    abstractKey: null,
                  },
                ],
                storageKey: 'action_link(supported:"2rhVpW")',
              },
              {
                alias: null,
                args: [{ kind: "Literal", name: "supported", value: "3zfBNR" }],
                concreteType: null,
                kind: "LinkedField",
                name: "timestamp",
                plural: !1,
                selections: [
                  e,
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName: "CometFeedStoryTimestampSection_story",
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
                        documentName: "CometFeedStoryTimestampSection_story",
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
                        documentName: "CometFeedStoryTimestampSection_story",
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
                        documentName: "CometFeedStoryTimestampSection_story",
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
                        documentName: "CometFeedStoryTimestampSection_story",
                        fragmentName:
                          "CometFeedStoryTimestampStrategy_timestamp",
                        fragmentPropName: "timestamp",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "CometFeedStoryTimestampStrategy",
                    abstractKey: null,
                  },
                ],
                storageKey: 'timestamp(supported:"3zfBNR")',
              },
            ],
            storageKey: null,
          },
          f,
          m,
          g,
          U,
          V,
          H,
          G,
          z,
          j,
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
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "actors",
            plural: !0,
            selections: [
              e,
              h,
              t,
              { kind: "TypeDiscriminator", abstractKey: "__isActor" },
              Q,
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "to",
            plural: !1,
            selections: [
              e,
              h,
              t,
              {
                kind: "InlineFragment",
                selections: [Q],
                type: "Actor",
                abstractKey: "__isActor",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "work_is_repost",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Story",
            kind: "LinkedField",
            name: "work_reposted_story",
            plural: !1,
            selections: [
              e,
              t,
              r,
              o,
              a,
              s,
              {
                alias: null,
                args: null,
                concreteType: "StoryAttachment",
                kind: "LinkedField",
                name: "attachments",
                plural: !0,
                selections: [u],
                storageKey: null,
              },
              c,
              $,
              P,
              {
                alias: null,
                args: d,
                concreteType: "CometStorySections",
                kind: "LinkedField",
                name: "comet_sections",
                plural: !1,
                selections: [e, N, M, w, A, p, F, _, O, B, W, q],
                storageKey: null,
              },
              f,
              m,
              g,
              U,
              V,
              H,
              G,
              z,
              j,
              X,
            ],
            storageKey: null,
          },
          X,
        ],
      };
    })();
    a.exports = e;
  },
  null,
);
