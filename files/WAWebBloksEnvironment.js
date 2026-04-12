__d(
  "WAWebBloksEnvironment",
  [
    "WAWebBloksAppLoader",
    "WAWebBloksPrimitives",
    "WAWebUnifiedResponseLoaderTemplate",
    "WebBloksEnvironment",
    "WebBloksHasteEnvironment",
    "WebBloksUtils",
    "waWebTraversalKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("WebBloksEnvironment").useWebBloksEnvironmentStore(function () {
        return o("WebBloksHasteEnvironment").createWebBloksHasteEnvironment(
          {
            appLoader: o("WAWebBloksAppLoader").getWAWebBloksAppLoader(),
            actions: o("WAWebBloksPrimitives").ACTIONS,
            components: o("WAWebBloksPrimitives").COMPONENTS,
            containerConfigs: {},
            extensionHandlers: o("WAWebBloksPrimitives").EXTENSION_HANDLERS,
            traversalKeys: r("waWebTraversalKeys"),
            screenQueryTemplate: o("WebBloksUtils").cast(
              o("WAWebUnifiedResponseLoaderTemplate").LOADER_TEMPLATE,
            ),
          },
          e,
        );
      });
    }
    l.useWAWebBloksEnvironment = e;
  },
  98,
);
