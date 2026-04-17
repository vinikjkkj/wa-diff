__d(
  "CometHovercardQueryRenderer.entrypoint",
  [
    "CometHovercardQueryRendererQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.actionBarRenderLocation,
          r = t.context,
          a = t.entityID,
          i = t.groupID;
        return {
          queries: {
            hovercardQueryReference: {
              parameters: n("CometHovercardQueryRendererQuery$Parameters"),
              variables: {
                actionBarRenderLocation: e,
                context: r,
                entityID: a,
                groupID: i,
                scale: o("WebPixelRatio").get(),
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "CometHovercardQueryRenderer.react",
      ).__setRef("CometHovercardQueryRenderer.entrypoint"),
    };
    l.default = e;
  },
  98,
);
