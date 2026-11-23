__d(
  "WAWebCometLite.entrypoint",
  [
    "JSResourceForInteraction",
    "NestedRelayEntryPointBuilderUtils",
    "WAWebCometLiteContent.entrypoint",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        return {
          entryPoints: {
            fullScreenEntryPoint: o(
              "NestedRelayEntryPointBuilderUtils",
            ).NestedRelayEntryPoint({
              entryPoint: r("WAWebCometLiteContent.entrypoint"),
              entryPointParams: { routeParams: {}, routeProps: {} },
            }),
          },
          queries: {},
        };
      },
      root: r("JSResourceForInteraction")("WAWebCometMain.react").__setRef(
        "WAWebCometLite.entrypoint",
      ),
    };
    l.default = e;
  },
  98,
);
