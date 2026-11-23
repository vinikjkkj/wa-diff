__d(
  "WAFlowsGet",
  ["WAFlowsObjectPathSafety"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (!(t.length === 0 || e == null)) {
        var r = Array.isArray(t)
          ? [].concat(t)
          : t.replaceAll("[", ".").replaceAll("]", "").split(".");
        if (!o("WAFlowsObjectPathSafety").isSafeObjectPath(r)) return n;
        var a = e,
          i = n;
        for (var l of r) {
          if (a == null || typeof a != "object") return n;
          var s = Object.getOwnPropertyDescriptor(a, String(l));
          if (s == null || ((i = s.value), i == null)) return n;
          a = i;
        }
        return i;
      }
    }
    l.default = e;
  },
  98,
);
