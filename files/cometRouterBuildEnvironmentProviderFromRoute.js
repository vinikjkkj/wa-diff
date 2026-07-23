__d(
  "cometRouterBuildEnvironmentProviderFromRoute",
  ["createCometRelayBaseEntryPointEnvironmentProvider", "getCometRouteActor"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = r("getCometRouteActor")(e, t),
        a = r("createCometRelayBaseEntryPointEnvironmentProvider")(n, o);
      return a;
    }
    l.default = e;
  },
  98,
);
