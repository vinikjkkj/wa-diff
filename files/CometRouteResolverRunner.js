__d(
  "CometRouteResolverRunner",
  ["CometRelayEnvironmentFactory", "ConstUriUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e.asyncResolve(
        o("CometRelayEnvironmentFactory").defaultEnvironment,
        o("ConstUriUtils").getUriOrThrow(t),
      );
    }
    l.routeResolverRunner = e;
  },
  98,
);
