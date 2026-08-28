__d(
  "A2UITreeDataBinding",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 64,
      l = new Set([
        "__proto__",
        "__defineGetter__",
        "__defineSetter__",
        "__lookupGetter__",
        "constructor",
        "prototype",
      ]);
    function s(e) {
      return e.split("/").filter(function (e) {
        return e !== "";
      });
    }
    function u(e, t) {
      var n = e;
      for (var r of s(t)) {
        if (n == null || typeof n != "object" || Array.isArray(n)) return;
        n = n[r];
      }
      return n;
    }
    function c(t, n, r) {
      if (n === "/" || n === "") {
        if (typeof r == "object" && r != null && !Array.isArray(r)) {
          var o = babelHelpers.extends({}, t),
            a = r;
          for (var i of Object.keys(a)) l.has(i) || (o[i] = a[i]);
          return o;
        }
        return t;
      }
      var u = s(n);
      if (
        u.length === 0 ||
        u.length > e ||
        u.some(function (e) {
          return l.has(e);
        })
      )
        return t;
      for (
        var c = babelHelpers.extends({}, t), d = c, m = 0;
        m < u.length - 1;
        m++
      ) {
        var p = u[m],
          _ = d[p];
        if (typeof _ == "object" && _ != null && !Array.isArray(_)) {
          var f = babelHelpers.extends({}, _);
          ((d[p] = f), (d = f));
        } else {
          var g = {};
          ((d[p] = g), (d = g));
        }
      }
      return ((d[u[u.length - 1]] = r), c);
    }
    function d(e, t) {
      if (e != null) {
        if (
          typeof e == "string" ||
          typeof e == "number" ||
          typeof e == "boolean"
        )
          return e;
        var n = e;
        if (typeof n.path == "string") return u(t, n.path);
      }
    }
    function m(e, t) {
      var n = d(e, t);
      return typeof n == "string"
        ? n
        : typeof n == "number" || typeof n == "boolean"
          ? String(n)
          : null;
    }
    function p(e, t) {
      var n = d(e, t);
      return typeof n == "boolean"
        ? n
        : typeof n == "string"
          ? n === "true"
          : !1;
    }
    ((i.readAtPath = u),
      (i.mergeAtPath = c),
      (i.resolveDynamicValue = d),
      (i.resolveDynamicString = m),
      (i.resolveDynamicBoolean = p));
  },
  66,
);
