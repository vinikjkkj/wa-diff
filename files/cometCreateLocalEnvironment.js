__d(
  "cometCreateLocalEnvironment",
  [
    "CometMissingFieldHandlers",
    "cometHandlerProvider",
    "createCometStore",
    "createRelayFBLocalEnvironment",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("createRelayFBLocalEnvironment")({
        configName: "CometRelayLocalEnvironment",
        handlerProvider: r("cometHandlerProvider"),
        missingFieldHandlers: r("CometMissingFieldHandlers"),
        scheduler: null,
        store: r("createCometStore")(),
      });
    }
    l.default = e;
  },
  98,
);
