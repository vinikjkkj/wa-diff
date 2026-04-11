__d(
  "FBCometRelayEnvironmentFactory",
  [
    "cometCreateMultiActorEnvironmentConfig",
    "createCometRelayEnvironmentConfig",
    "createCometRelayEnvironmentFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("createCometRelayEnvironmentFactory")({
      createEnvironmentConfig: o("createCometRelayEnvironmentConfig")
        .createCometRelayEnvironmentConfig,
      createMultiActorEnvironmentConfig: r(
        "cometCreateMultiActorEnvironmentConfig",
      ),
    });
    l.default = e;
  },
  98,
);
