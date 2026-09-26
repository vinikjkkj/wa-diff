__d(
  "GroupsCometStoryEditDialog.entrypoint",
  [
    "GroupCometComposerEditDialogQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.actorID,
          r = t.feedLocation,
          a = t.renderLocation,
          i = t.storyID;
        return {
          queries: {
            root: {
              environmentProviderOptions: { actorID: e },
              options: { fetchPolicy: "network-only" },
              parameters: n("GroupCometComposerEditDialogQuery$Parameters"),
              variables: {
                actorID: e,
                feedLocation: r != null ? r : "GROUP_COMPOSER",
                privacySelectorRenderLocation: "COMET_COMPOSER",
                renderLocation: a != null ? a : "group",
                scale: o("WebPixelRatio").get(),
                storyID: i,
                useLexical: !0,
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "GroupCometComposerEditDialog.react",
      ).__setRef("GroupsCometStoryEditDialog.entrypoint"),
    };
    l.default = e;
  },
  98,
);
