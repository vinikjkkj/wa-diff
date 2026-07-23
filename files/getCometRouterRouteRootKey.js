__d(
  "getCometRouterRouteRootKey",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.rootView,
        n = t.entryPoint,
        r = t.resource,
        o = n == null ? void 0 : n.getModuleIfRequireable();
      return o != null ? o.root.getModuleId() : r.getModuleId();
    }
    i.default = e;
  },
  66,
);
