__d(
  "WAFlowJSONValidationUtils",
  ["WAFlowJSONSchemaUtils", "isObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      var a = t;
      for (var i of n) {
        if (!Object.prototype.hasOwnProperty.call(a, i)) return null;
        a = a[i];
      }
      if (!Array.isArray(a)) return null;
      var l = new Map();
      for (var u of a) {
        var c, d;
        ((c = u) == null ? void 0 : c.$ref) != null &&
          (u = o("WAFlowJSONSchemaUtils").getComponentSchemaByReference(e, u));
        var m =
          (d = u.properties) == null || (d = d.type) == null ? void 0 : d.const;
        if (m == null || typeof m != "string") return;
        var p = s(u, r);
        l.set(m, p);
      }
      return l;
    }
    function s(e, t) {
      var n = new Map();
      if (!r("isObject")(e.properties)) return n;
      var a = e.properties,
        i = o("WAFlowJSONSchemaUtils").getDynamicPatternByVersion(t);
      for (var l of Object.entries(a)) {
        var s = l[0],
          u = l[1];
        if (Array.isArray(u.oneOf)) {
          var c = u.oneOf.filter(function (e) {
            return (
              (e == null ? void 0 : e.type) !== "string" ||
              (e == null ? void 0 : e.pattern) !== i
            );
          });
          n.set(s, c);
        } else if (u.if != null) {
          var d = [u.else, u.then].filter(function (e) {
            return (
              (e == null ? void 0 : e.type) !== "string" ||
              (e == null ? void 0 : e.pattern) !== i
            );
          });
          n.set(s, d);
        } else n.set(s, [u]);
      }
      return n;
    }
    ((l.findSchemaByPath = e), (l.getPropertySchemaMap = s));
  },
  98,
);
