__d(
  "ReelsIFUCard_reel.graphql",
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
        t = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ];
      return {
        argumentDefinitions: [
          {
            kind: "RootArgument",
            name: "__relay_internal__pv__ReelsIFUCard_reelsIFULikeCountrelayprovider",
          },
        ],
        kind: "Fragment",
        metadata: null,
        name: "ReelsIFUCard_reel",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "Story",
            kind: "LinkedField",
            name: "story",
            plural: !1,
            selections: [
              e,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "tracking",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "post_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "encrypted_tracking",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "encrypted_click_tracking",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "click_tracking_linkshim_cb",
                storageKey: null,
              },
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
              {
                alias: null,
                args: null,
                concreteType: "StoryAttachment",
                kind: "LinkedField",
                name: "attachments",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "media",
                    plural: !1,
                    selections: [
                      {
                        kind: "InlineFragment",
                        selections: [
                          e,
                          {
                            fragment: {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  kind: "FragmentSpread",
                                  name: "FBReelsIFUTileContent_video",
                                },
                              ],
                              type: "Video",
                              abstractKey: null,
                            },
                            kind: "AliasedInlineFragmentSpread",
                            name: "fbReelsIFUTileContentVideo",
                          },
                          {
                            fragment: {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  kind: "FragmentSpread",
                                  name: "useCometPhotosensitiveContentWarningVisibility_video",
                                },
                              ],
                              type: "Video",
                              abstractKey: null,
                            },
                            kind: "AliasedInlineFragmentSpread",
                            name: "photosensitiveWarningVideo",
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: "Image",
                            kind: "LinkedField",
                            name: "image",
                            plural: !1,
                            selections: t,
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: "XXPAnimatedVideoPreview",
                            kind: "LinkedField",
                            name: "animated_preview_thumbnail",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: "Image",
                                kind: "LinkedField",
                                name: "animated_image",
                                plural: !1,
                                selections: t,
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                        ],
                        type: "Video",
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                condition:
                  "__relay_internal__pv__ReelsIFUCard_reelsIFULikeCountrelayprovider",
                kind: "Condition",
                passingValue: !0,
                selections: [
                  {
                    alias: "ifu_metadata_feedback",
                    args: null,
                    concreteType: "Feedback",
                    kind: "LinkedField",
                    name: "feedback",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "ReactorsOfContentConnection",
                        kind: "LinkedField",
                        name: "reactors",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "count",
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
              },
              {
                alias: null,
                args: null,
                concreteType: "ShortFormVideoContext",
                kind: "LinkedField",
                name: "short_form_video_context",
                plural: !1,
                selections: [
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "FBReelsIFUName_owner",
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "video_owner",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "name",
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
        ],
        type: "ShowcaseShortVideoAttachment",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
