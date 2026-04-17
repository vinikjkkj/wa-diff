__d(
  "CometTextDelightAnimation.entrypoint",
  ["CometTextDelightAnimationQuery$Parameters", "JSResourceForInteraction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.id;
        return {
          queries: {
            CometTextDelightAnimationQueryRef: {
              parameters: r("CometTextDelightAnimationQuery$Parameters"),
              variables: { id: e },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "CometTextDelightAnimation.react",
      ).__setRef("CometTextDelightAnimation.entrypoint"),
    };
    l.default = e;
  },
  98,
);
