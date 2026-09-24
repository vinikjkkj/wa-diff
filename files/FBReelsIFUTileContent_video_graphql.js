__d(
  "FBReelsIFUTileContent_video.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        {
          kind: "RootArgument",
          name: "__relay_internal__pv__FBReelsIFUTileContent_reelsIFUPlayOnHoverrelayprovider",
        },
      ],
      kind: "Fragment",
      metadata: null,
      name: "FBReelsIFUTileContent_video",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "viewer_autoplay_setting",
          storageKey: null,
        },
        {
          alias: null,
          args: [
            { kind: "Literal", name: "framework", value: "WARNING_SCREENS" },
            {
              kind: "Literal",
              name: "location",
              value: "fb_shorts_video_deep_dive",
            },
          ],
          concreteType: "XFBVideoWarningScreenRenderer",
          kind: "LinkedField",
          name: "warning_screen_renderer",
          plural: !1,
          selections: [
            {
              args: null,
              documentName: "FBReelsIFUTileContent_video",
              fragmentName: "FBReelsMediaWarningScreenRenderer_renderer",
              fragmentPropName: "renderer",
              kind: "ModuleImport",
            },
          ],
          storageKey:
            'warning_screen_renderer(framework:"WARNING_SCREENS",location:"fb_shorts_video_deep_dive")',
        },
        {
          condition:
            "__relay_internal__pv__FBReelsIFUTileContent_reelsIFUPlayOnHoverrelayprovider",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              fragment: {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "FBReelsIFUVideoPlayer_video",
                  },
                ],
                type: "Video",
                abstractKey: null,
              },
              kind: "AliasedInlineFragmentSpread",
              name: "fbReelsIFUVideoPlayer",
            },
          ],
        },
      ],
      type: "Video",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
