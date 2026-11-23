__d(
  "MAIBAA2UIv09DataBinding",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = e.split("/").filter(function (e) {
          return e !== "";
        }),
        r = t;
      for (var o of n) {
        if (r == null || typeof r != "object" || Array.isArray(r)) return;
        r = r[o];
      }
      return r;
    }
    function l(t, n) {
      if (t != null) {
        if (
          typeof t == "string" ||
          typeof t == "number" ||
          typeof t == "boolean"
        )
          return t;
        var r = t;
        if (typeof r.call != "string" && typeof r.path == "string")
          return e(r.path, n);
      }
    }
    function s(e, t) {
      var n = l(e, t);
      return n == null
        ? ""
        : typeof n == "string" || typeof n == "number" || typeof n == "boolean"
          ? String(n)
          : "";
    }
    function u(e, t) {
      var n = l(e, t);
      return typeof n == "boolean" ? n : !1;
    }
    ((i.resolveDynamicBoolean = u),
      (i.resolveDynamicString = s),
      (i.resolveDynamicValue = l));
  },
  66,
);
