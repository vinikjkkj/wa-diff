__d(
  "CometStoryAggregatedCollaboratorsDialog.entrypoint",
  [
    "CometStoryAggregatedCollaboratorsDialogQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.storyID;
        return {
          queries: {
            queryReference: {
              options: { fetchPolicy: "network-only" },
              parameters: n(
                "CometStoryAggregatedCollaboratorsDialogQuery$Parameters",
              ),
              variables: { id: e, scale: o("WebPixelRatio").get() },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "CometStoryAggregatedCollaboratorsDialog.react",
      ).__setRef("CometStoryAggregatedCollaboratorsDialog.entrypoint"),
    };
    l.default = e;
  },
  98,
);
