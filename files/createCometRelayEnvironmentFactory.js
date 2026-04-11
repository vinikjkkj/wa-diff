__d(
  "createCometRelayEnvironmentFactory",
  [
    "CometRelayMultiActorEnvironment",
    "RelayAPIConfig",
    "cometCreateLocalEnvironment",
    "cometHandlerProvider",
    "configureRelayForWWW",
    "relay-runtime/multi-actor-environment",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    r("configureRelayForWWW")();
    function e(e) {
      var t = e.createEnvironmentConfig,
        n = e.createMultiActorEnvironmentConfig,
        a = function (t, r) {
          return o("CometRelayMultiActorEnvironment").forActor({
            actorEnvironmentKey: r,
            actorID: t,
            createMultiActorEnvironmentConfig: n,
          });
        },
        i = function (t, n) {
          return a(
            o("relay-runtime/multi-actor-environment").getActorIdentifier(t),
            n,
          );
        },
        l = i(r("RelayAPIConfig").actorID);
      return {
        commitLocalUpdateForEachEnvironment: o(
          "CometRelayMultiActorEnvironment",
        ).commitMultiActorUpdate,
        configEnvironment: t,
        createLocalEnvironment: r("cometCreateLocalEnvironment"),
        defaultEnvironment: l,
        getForActorID: i,
        handlerProvider: r("cometHandlerProvider"),
      };
    }
    l.default = e;
  },
  98,
);
