__d(
  "ACQWebBloksEnvironmentConfigDynamic",
  [
    "ACQWebBloksDataModules",
    "AcqWebBloksActions",
    "acqMinificationMap",
    "acqTraversalKeys",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      actions: o("AcqWebBloksActions").ACTIONS,
      dataModulesStore: o("ACQWebBloksDataModules").DATA_MODULES,
      minificationMap: r("acqMinificationMap"),
      traversalKeys: r("acqTraversalKeys"),
    };
    l.ACQ_ENVIRONMENT_CONFIG = e;
  },
  98,
);
