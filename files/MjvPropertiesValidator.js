__d(
  "MjvPropertiesValidator",
  ["MjvBuiltins"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a = !0;
      if (t == null || typeof t != "object" || typeof n != "object") return a;
      var i = t.properties;
      if (i != null && typeof i == "object") {
        var l = e.getSchemaMeta(t),
          c = l.propertyKeys,
          d = l.propertyDataPathKeys;
        (c == null || d == null) &&
          ((c = r("MjvBuiltins").objectKeys(i)),
          (d = c.map(function (e) {
            return e.includes("-") ? "['" + e + "']" : "." + e;
          })),
          (l.propertyKeys = c),
          (l.propertyDataPathKeys = d),
          (l.invalidPropertyKeys = u(i, c)));
        for (
          var m = l.invalidPropertyKeys,
            p =
              t.if != null || t.then != null || t.else != null || t.not != null,
            _ = 0;
          _ < c.length;
          _++
        ) {
          var f = c[_];
          m != null &&
            m.has(f) &&
            e.throwError("should be object,boolean", s(o, d[_], f));
          var g = n == null ? void 0 : n[f];
          if (
            !(
              g === void 0 ||
              (n != null && r("MjvBuiltins").isInheritedValue(n, f, g))
            )
          ) {
            var h = i[f],
              y = void 0;
            if (p || !e.isWorthCaching(h)) y = e.validate(h, g, s(o, d[_], f));
            else {
              var C = s(o, d[_], f),
                b = e.getPropertyCachePathKey(C.schemaPath, h),
                v = e.getPropertyCacheValueKey(g);
              ((y =
                v == null
                  ? void 0
                  : e.getCachedPropertyResult(b, v, o.rootSchema)),
                y === void 0 &&
                  ((y = e.validate(h, g, C)),
                  y &&
                    v != null &&
                    e.cachePropertyResult(b, v, y, o.rootSchema)));
            }
            if (!y && ((a = !1), e.exitOnError())) break;
          }
        }
      }
      return a;
    }
    function s(e, t, n) {
      return {
        required: e.required,
        dataPath: "" + e.dataPath + t,
        schemaPath: e.schemaPath + "/properties/" + n,
        skipErrors: e.skipErrors,
        isRootValidation: e.isRootValidation,
        validateUndefined: e.validateUndefined,
        rootSchema: e.rootSchema,
        seen$Refs: e.seen$Refs,
      };
    }
    function u(e, t) {
      var n = null;
      for (var o of t) {
        var a = e[o],
          i = typeof a,
          l =
            i === "boolean" || (i === "object" && !r("MjvBuiltins").isArray(a));
        l || (n == null && (n = new Set()), n.add(o));
      }
      return n;
    }
    l.validateProperties = e;
  },
  98,
);
