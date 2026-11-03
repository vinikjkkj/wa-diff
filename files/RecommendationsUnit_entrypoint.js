__d(
  "RecommendationsUnit.entrypoint",
  [
    "JSResourceForInteraction",
    "RecommendationsUnitContainerQuery$Parameters",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getPreloadProps: function (t) {
          var e = t.parentID,
            n = t.renderLocation;
          return {
            queries: {
              queryReference: {
                parameters: r("RecommendationsUnitContainerQuery$Parameters"),
                variables: {
                  parentID: e,
                  renderLocation: n,
                  scale: o("WebPixelRatio").get(),
                },
              },
            },
          };
        },
        root: r("JSResourceForInteraction")(
          "RecommendationsUnitContainer.react",
        ).__setRef("RecommendationsUnit.entrypoint"),
      },
      s = e;
    l.default = s;
  },
  98,
);
