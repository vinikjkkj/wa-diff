__d(
  "MaintainedRouteConfig",
  ["MaintainedRouteConfigInternal"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["cleanupHandlers"];
    function s(t) {
      if (t == null || r("MaintainedRouteConfigInternal")[t] == null)
        return null;
      var n = babelHelpers.extends({}, r("MaintainedRouteConfigInternal")[t]),
        o = n.cleanupHandlers,
        a = babelHelpers.objectWithoutPropertiesLoose(n, e);
      return babelHelpers.extends({}, a, {
        cleanup: function () {
          o != null &&
            o.forEach(function (e) {
              return e();
            });
        },
      });
    }
    function u(e, t) {
      var n,
        o,
        a =
          (n = r("MaintainedRouteConfigInternal")[e]) != null
            ? n
            : { maintained: !1 },
        i = (o = a.cleanupHandlers) != null ? o : new Set();
      r("MaintainedRouteConfigInternal")[e] = babelHelpers.extends({}, a, {
        cleanupHandlers: i.add(t),
      });
    }
    function c(e, t) {
      var n,
        o =
          (n = r("MaintainedRouteConfigInternal")[e]) == null
            ? void 0
            : n.cleanupHandlers;
      o != null && o.delete(t);
    }
    ((l.getMaintainedRouteConfig = s),
      (l.addCleanupHandler = u),
      (l.removeCleanupHandler = c));
  },
  98,
);
