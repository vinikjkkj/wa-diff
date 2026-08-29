__d(
  "CoreWebBloksEnvironmentConfigDynamic",
  [
    "CoreWebBloksActions",
    "WebBloksExtensionHandlers",
    "coreMinificationMap",
    "coreTraversalKeys",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      actions: o("CoreWebBloksActions").ACTIONS,
      extensionHandlers: o("WebBloksExtensionHandlers").EXTENSION_HANDLERS,
      minificationMap: r("coreMinificationMap"),
      traversalKeys: r("coreTraversalKeys"),
    };
    l.CORE_ENVIRONMENT_CONFIG = e;
  },
  98,
);
