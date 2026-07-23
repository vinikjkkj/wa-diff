__d(
  "cometRouterBuildErrorRouteState",
  ["CometProductAttribution", "buildCometErrorRoute"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l) {
      var s = r("buildCometErrorRoute")(n, l),
        u = o("CometProductAttribution").getRouteInfoForDispatch(e, i);
      return {
        main: babelHelpers.extends(
          {
            mutableState: {},
            productAttribution: u.productAttribution,
            route: s,
          },
          a,
        ),
        routeKey: t,
      };
    }
    l.default = e;
  },
  98,
);
