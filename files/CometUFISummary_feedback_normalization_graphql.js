__d(
  "CometUFISummary_feedback$normalization.graphql",
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
        t = {
          alias: "i18n_reaction_count",
          args: null,
          kind: "ScalarField",
          name: "reaction_count_reduced",
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "count",
          storageKey: null,
        },
        a = [
          o,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_empty",
            storageKey: null,
          },
        ],
        i = [{ kind: "Literal", name: "should_log_exposure", value: !0 }],
        l = [
          {
            kind: "Variable",
            name: "use_default_actor",
            variableName: "useDefaultActor",
          },
        ],
        s = [
          {
            kind: "Variable",
            name: "feed_location",
            variableName: "feedLocation",
          },
        ];
      return {
        argumentDefinitions: [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "CometUFISummary_feedback$canShowSeenState",
          },
          {
            defaultValue: !0,
            kind: "LocalArgument",
            name: "CometUFISummary_feedback$shouldShowComments",
          },
        ],
        kind: "SplitOperation",
        metadata: {},
        name: "CometUFISummary_feedback$normalization",
        selections: [
          e,
          t,
          {
            alias: null,
            args: [
              { kind: "Literal", name: "fetch_creators", value: !0 },
              { kind: "Literal", name: "first", value: 2 },
            ],
            concreteType: "ImportantReactorsConnection",
            kind: "LinkedField",
            name: "important_reactors",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "nodes",
                plural: !0,
                selections: [
                  n,
                  r,
                  {
                    condition:
                      "__relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider",
                    kind: "Condition",
                    passingValue: !0,
                    selections: [
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
                    ],
                  },
                  e,
                ],
                storageKey: null,
              },
            ],
            storageKey: "important_reactors(fetch_creators:true,first:2)",
          },
          {
            alias: "reaction_count",
            args: null,
            concreteType: "ReactorsOfContentConnection",
            kind: "LinkedField",
            name: "reactors",
            plural: !1,
            selections: a,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "CrossUniverseFeedbackInfo",
            kind: "LinkedField",
            name: "cross_universe_feedback_info",
            plural: !1,
            selections: [
              {
                alias: null,
                args: i,
                kind: "ScalarField",
                name: "ig_boosted_reaction_count",
                storageKey:
                  "ig_boosted_reaction_count(should_log_exposure:true)",
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "ig_reaction_count",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "aggregated_reaction_count",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: [
              {
                kind: "Literal",
                name: "orderby",
                value: ["COUNT_DESC", "REACTION_TYPE"],
              },
            ],
            concreteType: "TopReactionsConnection",
            kind: "LinkedField",
            name: "top_reactions",
            plural: !1,
            selections: [
              o,
              {
                alias: null,
                args: null,
                concreteType: "TopReactionsEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "visible_in_bling_bar",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "FeedbackReactionInfo",
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [
                      e,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "localized_name",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  t,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "reaction_count",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: 'top_reactions(orderby:["COUNT_DESC","REACTION_TYPE"])',
          },
          {
            alias: null,
            args: null,
            concreteType: "ReactionDisplayConfig",
            kind: "LinkedField",
            name: "reaction_display_config",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "reaction_display_strategy",
                storageKey: null,
              },
              {
                args: null,
                documentName: "CometUFIReactionsCount_feedback",
                fragmentName: "CometUFIReactionSentence_reactionDisplayConfig",
                fragmentPropName: "reactionDisplayConfig",
                kind: "ModuleImport",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: l,
            concreteType: null,
            kind: "LinkedField",
            name: "viewer_actor",
            plural: !1,
            selections: [n, e, r],
            storageKey: null,
          },
          {
            alias: null,
            args: l,
            concreteType: "FeedbackReactionInfo",
            kind: "LinkedField",
            name: "viewer_feedback_reaction_info",
            plural: !1,
            selections: [n, e],
            storageKey: null,
          },
          {
            condition: "CometUFISummary_feedback$canShowSeenState",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "can_show_seen_by",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "Feedback",
                kind: "LinkedField",
                name: "if_viewer_can_see_seen_by_member_list",
                plural: !1,
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometUFISeenByCount_feedback__if_viewer_can_see_seen_by_member_list",
                    fragmentName: "CometUFISeenByCountButton_feedback",
                    fragmentPropName: "feedback",
                    kind: "ModuleImport",
                  },
                  e,
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "Feedback",
                kind: "LinkedField",
                name: "if_viewer_cannot_see_seen_by_member_list",
                plural: !1,
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometUFISeenByCount_feedback__if_viewer_cannot_see_seen_by_member_list",
                    fragmentName: "CometUFISeenByCountText_feedback",
                    fragmentPropName: "feedback",
                    kind: "ModuleImport",
                  },
                  e,
                ],
                storageKey: null,
              },
              {
                kind: "ClientExtension",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_unseen",
                    storageKey: null,
                  },
                ],
              },
            ],
          },
          {
            alias: "i18n_share_count",
            args: null,
            kind: "ScalarField",
            name: "share_count_reduced",
            storageKey: null,
          },
          {
            alias: "share_count",
            args: null,
            concreteType: "ResharesOfContentConnection",
            kind: "LinkedField",
            name: "reshares",
            plural: !1,
            selections: a,
            storageKey: null,
          },
          {
            condition: "CometUFISummary_feedback$shouldShowComments",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                alias: null,
                args: s,
                concreteType: null,
                kind: "LinkedField",
                name: "comments_count_summary_renderer",
                plural: !1,
                selections: [
                  n,
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName: "CometUFISummaryBase_feedback",
                        fragmentName:
                          "GeminiWorkAMAQuestionsCountRenderer_data",
                        fragmentPropName: "data",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "WorkAMAQuestionsCountSummaryRenderer",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName: "CometUFISummaryBase_feedback",
                        fragmentName:
                          "GeminiUFIQAAnswersCommentsCountRenderer_data",
                        fragmentPropName: "data",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "QAAnswersCommentsCountSummaryRenderer",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName: "CometUFISummaryBase_feedback",
                        fragmentName: "CometUFICommentsCountRenderer_data",
                        fragmentPropName: "data",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "TotalCommentsCountSummaryRenderer",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName: "CometUFISummaryBase_feedback",
                        fragmentName: "CometUFIAMAAnswersCountRenderer_data",
                        fragmentPropName: "data",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "AMATotalAnswersCountSummaryRenderer",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName: "CometUFISummaryBase_feedback",
                        fragmentName:
                          "GeminiUFIQASocialAnswersCountRenderer_data",
                        fragmentPropName: "data",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "QASocialAnswersCountSummaryRenderer",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: [
                  {
                    kind: "Literal",
                    name: "scenario",
                    value: "WWW_FEED_TOTAL_COUNT_SCENARIO_V1",
                  },
                ],
                concreteType: "XFBCommentRenderingInstance",
                kind: "LinkedField",
                name: "comment_rendering_instance",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType:
                      "XFBCommentRenderingInstanceCommentsConnection",
                    kind: "LinkedField",
                    name: "comments",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "total_count",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey:
                  'comment_rendering_instance(scenario:"WWW_FEED_TOTAL_COUNT_SCENARIO_V1")',
              },
              {
                alias: null,
                args: null,
                concreteType: "CrossUniverseFeedbackInfo",
                kind: "LinkedField",
                name: "cross_universe_feedback_info",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "ig_comment_count",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: i,
                    kind: "ScalarField",
                    name: "ig_boosted_comment_count",
                    storageKey:
                      "ig_boosted_comment_count(should_log_exposure:true)",
                  },
                ],
                storageKey: null,
              },
            ],
          },
          {
            alias: null,
            args: null,
            concreteType: "Video",
            kind: "LinkedField",
            name: "associated_video",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "broadcast_is_ama_enabled",
                storageKey: null,
              },
              e,
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "PrivateReplyContext",
            kind: "LinkedField",
            name: "page_private_reply",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "status",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "video_view_count",
            storageKey: null,
          },
          {
            alias: null,
            args: s,
            concreteType: null,
            kind: "LinkedField",
            name: "video_view_count_renderer",
            plural: !1,
            selections: [
              n,
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometUFISummaryBase_feedback__video_view_count",
                    fragmentName: "UFI2ViewCountRenderer_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "UFI2ViewCountRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometUFISummaryBase_feedback__video_view_count",
                    fragmentName: "CometUFIViewerCountRenderer_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "CometUFIViewerCountRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometUFISummaryBase_feedback__video_view_count",
                    fragmentName: "CometUFIReelBluePlayCountRenderer_data",
                    fragmentPropName: "data",
                    kind: "ModuleImport",
                  },
                ],
                type: "CometUFIReelBluePlayCountRenderer",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
        ],
      };
    })();
    a.exports = e;
  },
  null,
);
