__d(
  "CometFeedUFIContainer_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
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
        argumentDefinitions: [
          { kind: "RootArgument", name: "feedLocation" },
          { kind: "RootArgument", name: "focusCommentID" },
          { kind: "RootArgument", name: "useDefaultActor" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometFeedUFIContainer_story",
        selections: [
          {
            alias: null,
            args: [e],
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
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
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
          {
            alias: null,
            args: [e, { kind: "Literal", name: "supported", value: "1Xp8gG" }],
            concreteType: null,
            kind: "LinkedField",
            name: "story_ufi_container",
            plural: !1,
            selections: [
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
                    fragmentName: "CometSimplifiedUFIContainer_renderer",
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
                    fragmentName: "CometInlineLiveUFIContainer_renderer",
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
      };
    })();
    a.exports = e;
  },
  null,
);
