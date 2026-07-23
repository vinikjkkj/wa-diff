__d(
  "getCometRouterNestedRouteRootsToRender",
  ["getCometRouterRouteRootKey"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = {},
        o = r("getCometRouterRouteRootKey")(e.route);
      return (
        Object.keys(t).forEach(function (e) {
          var a = t[e];
          if (a != null) {
            var i = r("getCometRouterRouteRootKey")(a.route);
            i !== o && n[i] == null && (n[i] = a);
          }
        }),
        (n[o] = e),
        n
      );
    }
    l.default = e;
  },
  98,
);
