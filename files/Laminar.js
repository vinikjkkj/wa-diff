__d(
  "Laminar",
  [
    "LaminarAction",
    "LaminarExperimentalSelector",
    "LaminarLogger",
    "LaminarProvider",
    "LaminarReactHooks",
    "LaminarReducer",
    "LaminarReducerWithFluxSelectors",
    "LaminarRefetchProvider",
    "LaminarTriggerReducer",
    "ServerJsRuntimeEnvironment",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("ServerJsRuntimeEnvironment").isRunningServerJsRuntime()
        ? function (e, t, n) {
            return { dispatch: function () {}, actionType: n };
          }
        : o("LaminarAction").create,
      s = e;
    ((l.__createAction = s),
      (l.__createExperimentalSelector = o(
        "LaminarExperimentalSelector",
      ).create),
      (l.__createLogger = o("LaminarLogger").create),
      (l.__createProvider = o("LaminarProvider").create),
      (l.__createReducer = o("LaminarReducer").create),
      (l.__createLegacyReducer = o("LaminarReducer").createLegacy),
      (l.__createRefetchProvider = o("LaminarRefetchProvider").create),
      (l.__createTriggerReducer = o("LaminarTriggerReducer").create),
      (l.useProvider = o("LaminarReactHooks").useProvider),
      (l.laminarContainer = o("LaminarReactHooks").laminarContainer),
      (l.useServerProvider = o("LaminarReactHooks").useServerProvider),
      (l.withFluxSelectors = r("LaminarReducerWithFluxSelectors")));
  },
  98,
);
