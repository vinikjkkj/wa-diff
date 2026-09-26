__d(
  "GroupCometComposerCreateDialog.entrypoint",
  [
    "GroupCometComposerCreateDialogQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.displayActorID,
          n = t.feedLocation,
          a = t.groupID,
          i = t.viewerContextActorID;
        return {
          queries: {
            queryReference: {
              environmentProviderOptions: { actorID: i },
              parameters: r("GroupCometComposerCreateDialogQuery$Parameters"),
              variables: {
                displayActorID: e,
                enable_admin_assist_warnings: !1,
                feedLocation: n != null ? n : "GROUP",
                groupID: a,
                privacySelectorRenderLocation: "COMET_COMPOSER",
                scale: o("WebPixelRatio").get(),
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "GroupCometComposerCreateDialog.react",
      ).__setRef("GroupCometComposerCreateDialog.entrypoint"),
    };
    l.default = e;
  },
  98,
);
