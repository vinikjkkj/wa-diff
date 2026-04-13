__d(
  "WAWebBloksEnvironment",
  [
    "WAWebBloksAppLoader",
    "WAWebBloksPrimitives",
    "WAWebUnifiedResponseLoaderTemplate",
    "WebBloksEnvironment",
    "WebBloksHasteEnvironment",
    "WebBloksUtils",
    "react-compiler-runtime",
    "waWebTraversalKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = function () {
              return o(
                "WebBloksHasteEnvironment",
              ).createWebBloksHasteEnvironment(
                {
                  appLoader: o("WAWebBloksAppLoader").getWAWebBloksAppLoader(),
                  actions: o("WAWebBloksPrimitives").ACTIONS,
                  components: o("WAWebBloksPrimitives").COMPONENTS,
                  containerConfigs: {},
                  extensionHandlers: o("WAWebBloksPrimitives")
                    .EXTENSION_HANDLERS,
                  traversalKeys: r("waWebTraversalKeys"),
                  screenQueryTemplate: o("WebBloksUtils").cast(
                    o("WAWebUnifiedResponseLoaderTemplate").LOADER_TEMPLATE,
                  ),
                },
                e,
              );
            }),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        o("WebBloksEnvironment").useWebBloksEnvironmentStore(n)
      );
    }
    l.useWAWebBloksEnvironment = e;
  },
  98,
);
