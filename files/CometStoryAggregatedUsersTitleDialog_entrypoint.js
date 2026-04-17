__d(
  "CometStoryAggregatedUsersTitleDialog.entrypoint",
  [
    "CometStoryAggregatedUsersTitleDialogQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.storyID,
          r = t.storyRenderLocation;
        return {
          queries: {
            queryReference: {
              options: { fetchPolicy: "network-only" },
              parameters: n(
                "CometStoryAggregatedUsersTitleDialogQuery$Parameters",
              ),
              variables: {
                id: e,
                renderLocation: r,
                scale: o("WebPixelRatio").get(),
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "CometStoryAggregatedUsersTitleDialog.react",
      ).__setRef("CometStoryAggregatedUsersTitleDialog.entrypoint"),
    };
    l.default = e;
  },
  98,
);
