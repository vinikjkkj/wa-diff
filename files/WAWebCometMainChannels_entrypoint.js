__d(
  "WAWebCometMainChannels.entrypoint",
  [
    "JSResourceForInteraction",
    "NestedRelayEntryPointBuilderUtils",
    "WAWebCometChannelsContent.entrypoint",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        return {
          entryPoints: {
            contentEntryPoint: o(
              "NestedRelayEntryPointBuilderUtils",
            ).NestedRelayEntryPoint({
              entryPoint: r("WAWebCometChannelsContent.entrypoint"),
              entryPointParams: { routeParams: {}, routeProps: {} },
            }),
          },
          queries: {},
        };
      },
      root: r("JSResourceForInteraction")("WAWebCometMain.react").__setRef(
        "WAWebCometMainChannels.entrypoint",
      ),
    };
    l.default = e;
  },
  98,
);
