__d(
  "CometFeedStoryFeedbackUFIStrategyEnvironmentSwitchQuery.graphql",
  [
    "CometFeedStoryFeedbackUFIStrategyEnvironmentSwitchQuery_facebookRelayOperation",
    "CometUFICommentAutoTranslationType.relayprovider",
    "CometUFICommentAvatarStickerAnimatedImage.relayprovider",
    "CometUFICommentActionLinksRewriteEnabled.relayprovider",
    "IsWorkUser.relayprovider",
    "CometUFIReactionsEnableShortName.relayprovider",
    "CometUFISingleLineUFI.relayprovider",
    "CometUFIShareActionMigration.relayprovider",
    "GHLShouldChangeSponsoredDataFieldName.relayprovider",
    "GHLShouldChangeAdIdFieldName.relayprovider",
    "CometUFI_dedicated_comment_routable_dialog_gk.relayprovider",
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
        o = { defaultValue: null, kind: "LocalArgument", name: "id" },
        a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "renderLocation",
        },
        i = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        l = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "useDefaultActor",
        },
        s = [{ kind: "Variable", name: "id", variableName: "id" }],
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        d = {
          fields: [
            {
              kind: "Variable",
              name: "fb_feed_location",
              variableName: "feedLocation",
            },
            {
              kind: "Variable",
              name: "focused_comment_id",
              variableName: "focusCommentID",
            },
          ],
          kind: "ObjectValue",
          name: "feed_rendering_context",
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, r, o, a, i, l],
          kind: "Fragment",
          metadata: null,
          name: "CometFeedStoryFeedbackUFIStrategyEnvironmentSwitchQuery",
          selections: [
            {
              alias: null,
              args: s,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometFeedStoryFeedbackUFIStrategySwitchEnvironmentFragment",
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
            e,
            t,
            r,
            a,
            i,
            l,
            o,
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__CometUFICommentAutoTranslationTyperelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__CometUFICommentAvatarStickerAnimatedImagerelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__CometUFICommentActionLinksRewriteEnabledrelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__IsWorkUserrelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__CometUFISingleLineUFIrelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__CometUFIShareActionMigrationrelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__GHLShouldChangeSponsoredDataFieldNamerelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__GHLShouldChangeAdIdFieldNamerelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__CometUFI_dedicated_comment_routable_dialog_gkrelayprovider",
            },
          ],
          kind: "Operation",
          name: "CometFeedStoryFeedbackUFIStrategyEnvironmentSwitchQuery",
          selections: [
            {
              alias: null,
              args: s,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                u,
                c,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: [d],
                      concreteType: "FeedbackContext",
                      kind: "LinkedField",
                      name: "feedback_context",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "Feedback",
                          kind: "LinkedField",
                          name: "feedback_target_with_context",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: [
                                {
                                  kind: "Variable",
                                  name: "use_default_actor",
                                  variableName: "useDefaultActor",
                                },
                              ],
                              concreteType: null,
                              kind: "LinkedField",
                              name: "viewer_actor",
                              plural: !1,
                              selections: [u, c],
                              storageKey: null,
                            },
                            c,
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: [
                        d,
                        { kind: "Literal", name: "supported", value: "1Xp8gG" },
                      ],
                      concreteType: null,
                      kind: "LinkedField",
                      name: "story_ufi_container",
                      plural: !1,
                      selections: [
                        u,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometFeedUFIContainer_story",
                              fragmentName: "CometFullUFIContainer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "XFBFullUFIContainer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometFeedUFIContainer_story",
                              fragmentName:
                                "CometSimplifiedUFIContainer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "XFBSimplifiedUFIContainer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometFeedUFIContainer_story",
                              fragmentName:
                                "CometInlineLiveUFIContainer_renderer",
                              fragmentPropName: "renderer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "XFBInlineLiveUFIContainer",
                          abstractKey: null,
                        },
                      ],
                      storageKey: null,
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
            "CometFeedStoryFeedbackUFIStrategyEnvironmentSwitchQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "CometFeedStoryFeedbackUFIStrategyEnvironmentSwitchQuery",
          operationKind: "query",
          text: null,
          providedVariables: {
            __relay_internal__pv__CometUFICommentAutoTranslationTyperelayprovider:
              n("CometUFICommentAutoTranslationType.relayprovider"),
            __relay_internal__pv__CometUFICommentAvatarStickerAnimatedImagerelayprovider:
              n("CometUFICommentAvatarStickerAnimatedImage.relayprovider"),
            __relay_internal__pv__CometUFICommentActionLinksRewriteEnabledrelayprovider:
              n("CometUFICommentActionLinksRewriteEnabled.relayprovider"),
            __relay_internal__pv__IsWorkUserrelayprovider: n(
              "IsWorkUser.relayprovider",
            ),
            __relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider:
              n("CometUFIReactionsEnableShortName.relayprovider"),
            __relay_internal__pv__CometUFISingleLineUFIrelayprovider: n(
              "CometUFISingleLineUFI.relayprovider",
            ),
            __relay_internal__pv__CometUFIShareActionMigrationrelayprovider: n(
              "CometUFIShareActionMigration.relayprovider",
            ),
            __relay_internal__pv__GHLShouldChangeSponsoredDataFieldNamerelayprovider:
              n("GHLShouldChangeSponsoredDataFieldName.relayprovider"),
            __relay_internal__pv__GHLShouldChangeAdIdFieldNamerelayprovider: n(
              "GHLShouldChangeAdIdFieldName.relayprovider",
            ),
            __relay_internal__pv__CometUFI_dedicated_comment_routable_dialog_gkrelayprovider:
              n("CometUFI_dedicated_comment_routable_dialog_gk.relayprovider"),
          },
        },
      };
    })();
    a.exports = e;
  },
  null,
);
