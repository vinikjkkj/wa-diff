__d(
  "cometCreateMultiActorEnvironmentConfig",
  [
    "CometMissingFieldHandlers",
    "CometRootInitServerFlag",
    "LSRelayEnvironmentConfig",
    "RelayFBOperationLoader",
    "RelayFieldLogger",
    "cometHandlerProvider",
    "cr:1467370",
    "createCometRelayEnvironmentConfig",
    "createCometStore",
    "relayFBGetDataID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.actorEnvironmentKey,
        a = e.graphURI,
        i = o(
          "createCometRelayEnvironmentConfig",
        ).createCometEnvironmentLogFn();
      return {
        createConfigNameForActor: function (n) {
          return (
            o(
              "createCometRelayEnvironmentConfig",
            ).createCometEnvironmentConfigName(String(n), t) + " (Multi Actor)"
          );
        },
        createNetworkForActor: function (t) {
          return o("createCometRelayEnvironmentConfig").createCometNetwork(
            String(t),
            a,
          );
        },
        createStoreForActor: function () {
          return r("createCometStore")(i);
        },
        getDataID: r("relayFBGetDataID"),
        handlerProvider: r("cometHandlerProvider"),
        isServer: o("CometRootInitServerFlag").isServerEnvironment(),
        logFn: i,
        missingFieldHandlers: r("CometMissingFieldHandlers"),
        normalizeResponse: o("LSRelayEnvironmentConfig").normalizeResponse,
        operationLoader: r("RelayFBOperationLoader"),
        relayFieldLogger: o("RelayFieldLogger").create(),
        scheduler: n("cr:1467370"),
      };
    }
    l.default = e;
  },
  98,
);
