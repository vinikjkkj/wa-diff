__d(
  "RelayFBEnvironmentFactory",
  ["RelayFBEnvironmentDefinitions"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("RelayFBEnvironmentDefinitions").createEnvironmentFactory(
      function (e) {
        return { configName: "RelayFBEnvironment", actorID: e };
      },
    );
    l.default = e;
  },
  98,
);
