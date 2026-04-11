__d(
  "RelayFBModuleLoader",
  ["invariant", "replaceTransportMarkers"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = new Map();
    function u(e) {
      var t = p(e);
      return t.getModuleIfRequired();
    }
    function c(e) {
      var t = p(e);
      return m(t);
    }
    function d(e) {
      var t = typeof e == "function" ? e() : e,
        n = p(t),
        r = n.getModuleIfRequired();
      if (r == null) throw m(n);
      return r;
    }
    function m(t) {
      var n = t.getModuleId(),
        r = e.get(n);
      return (
        r == null &&
          ((r = t.load().finally(function () {
            e.delete(n);
          })),
          e.set(n, r)),
        (r.displayName = "3DModule(" + n + ")"),
        r
      );
    }
    function p(e) {
      if (
        ((e == null || typeof e != "object") && s(0, 17188, e),
        typeof e.getModuleId == "function" &&
          typeof e.getModuleIfRequired == "function" &&
          typeof e.load == "function")
      )
        return e;
      var t = { module: babelHelpers.extends({}, e) };
      r("replaceTransportMarkers")({ relativeTo: null }, t, "module");
      var n = t.module;
      return (
        (n != null &&
          typeof n == "object" &&
          typeof n.getModuleId == "function" &&
          typeof n.getModuleIfRequired == "function" &&
          typeof n.preload == "function" &&
          typeof n.load == "function") ||
          s(0, 17189, JSON.stringify(e)),
        n
      );
    }
    ((l.get = u), (l.load = c), (l.read = d), (l.getModuleReference = p));
  },
  98,
);
