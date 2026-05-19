__d(
  "CometUFISummaryBase_feedback.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            kind: "Variable",
            name: "feed_location",
            variableName: "feedLocation",
          },
        ],
        t = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_empty",
            storageKey: null,
          },
        ];
      return {
        argumentDefinitions: [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "canShowSeenState",
          },
          { kind: "RootArgument", name: "feedLocation" },
          {
            defaultValue: !0,
            kind: "LocalArgument",
            name: "shouldShowComments",
          },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometUFISummaryBase_feedback",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometUFIReactionsCount_feedback",
          },
          {
            condition: "canShowSeenState",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometUFISeenByCount_feedback",
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "can_show_seen_by",
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
            args: null,
            kind: "FragmentSpread",
            name: "CometUFISharesCount_feedback",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometUFIClassicTopReactions_feedback",
          },
          {
            condition: "shouldShowComments",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                alias: null,
                args: e,
                concreteType: null,
                kind: "LinkedField",
                name: "comments_count_summary_renderer",
                plural: !1,
                selections: [
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
                    args: [
                      {
                        kind: "Literal",
                        name: "should_log_exposure",
                        value: !0,
                      },
                    ],
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
            alias: "reaction_count",
            args: null,
            concreteType: "ReactorsOfContentConnection",
            kind: "LinkedField",
            name: "reactors",
            plural: !1,
            selections: t,
            storageKey: null,
          },
          {
            alias: "share_count",
            args: null,
            concreteType: "ResharesOfContentConnection",
            kind: "LinkedField",
            name: "reshares",
            plural: !1,
            selections: t,
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
            args: e,
            concreteType: null,
            kind: "LinkedField",
            name: "video_view_count_renderer",
            plural: !1,
            selections: [
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
        type: "Feedback",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
