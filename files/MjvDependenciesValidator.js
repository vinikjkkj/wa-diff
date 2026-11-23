__d(
  "MjvDependenciesValidator",
  ["MjvBooleanSchemaValidator", "MjvBuiltins", "MjvKeywords"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a = !0;
      if (
        t.dependencies != null &&
        typeof t.dependencies == "object" &&
        typeof n == "object" &&
        n != null &&
        !Array.isArray(n)
      ) {
        var i = t.dependencies;
        for (var l of r("MjvBuiltins").objectKeys(i)) {
          var d = n[l];
          if (d !== void 0 && !r("MjvBuiltins").isInheritedValue(n, l, d)) {
            var m = i[l];
            if (
              (r("MjvBuiltins").isArray(m)
                ? (a = s(e, t, n, o, l, m))
                : typeof m == "object" && m != null
                  ? (a = u(e, m, n, o, l))
                  : typeof m == "boolean" && (a = c(e, t, n, m, o)),
              e.exitOnError())
            )
              break;
          }
        }
      }
      return a;
    }
    function s(e, t, n, o, a, i) {
      for (var l = !0, s = 0; s < i.length; s++) {
        var u = i[s];
        if (typeof u == "string") {
          var c = n[u];
          if (
            (c === void 0 || r("MjvBuiltins").isInheritedValue(n, u, c)) &&
            (e.pushError(
              r("MjvKeywords").DEPENDENCIES.ID,
              r("MjvKeywords").DEPENDENCIES.message(u, a),
              { property: a, missingProperty: u, deps: u },
              e.getParamsWithSchemaPath(t, o, r("MjvKeywords").DEPENDENCIES.ID),
              { parentSchema: t, schema: i, data: n },
            ),
            (l = !1),
            e.exitOnError())
          )
            break;
        }
      }
      return l;
    }
    function u(e, t, n, o, a) {
      var i = !0,
        l = e.validate(
          t,
          n,
          e.getParamsWithSchemaPath(
            t,
            o,
            r("MjvKeywords").DEPENDENCIES.ID + "/" + a,
          ),
        );
      return (l || (i = !1), i);
    }
    function c(e, t, n, a, i) {
      var l = !0;
      return (
        (l = o("MjvBooleanSchemaValidator").validateBooleanSchema(
          e,
          a,
          n,
          e.getParamsWithSchemaPath(t, i, r("MjvKeywords").DEPENDENCIES.ID),
        )),
        l
      );
    }
    l.validateDependencies = e;
  },
  98,
);
