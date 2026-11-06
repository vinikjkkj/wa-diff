__d(
  "cometCreateMultiActorEnvironmentConfig",
  [
    "CometFeedCacheOperationLogging",
    "CometMissingFieldHandlers",
    "CometRootInitServerFlag",
    "LSRelayEnvironmentConfig",
    "RelayAPIConfig",
    "RelayFBOperationLoader",
    "RelayFieldLogger",
    "cometHandlerProvider",
    "cr:1467370",
    "createCometRelayEnvironmentConfig",
    "createCometStore",
    "gkx",
    "relayFBGetDataID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.actorEnvironmentKey,
        a = e.graphURI,
        i = o(
          "createCometRelayEnvironmentConfig",
        ).createCometEnvironmentLogFn(),
        l =
          t == null &&
          r("CometFeedCacheOperationLogging") != null &&
          !o("CometRootInitServerFlag").isServerEnvironment() &&
          !r("gkx")("20836"),
        s = null;
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
        createStoreForActor: function (t) {
          var e = r("createCometStore")(i);
          return (
            l &&
              s == null &&
              String(t) === r("RelayAPIConfig").actorID &&
              (s =
                r("CometFeedCacheOperationLogging") == null
                  ? void 0
                  : r("CometFeedCacheOperationLogging").wrapHandlerProvider(
                      e,
                      r("cometHandlerProvider"),
                    )),
            e
          );
        },
        getDataID: r("relayFBGetDataID"),
        handlerProvider: l
          ? function (e) {
              return (s != null ? s : r("cometHandlerProvider"))(e);
            }
          : r("cometHandlerProvider"),
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
