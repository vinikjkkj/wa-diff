__d(
  "MjvOneOfValidator",
  ["MjvBuiltins", "MjvKeywords"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a;
      if (typeof t != "object" || t == null) return !0;
      var i = t.oneOf;
      if (!r("MjvBuiltins").isArray(i)) return !0;
      i.length === 0 &&
        e.throwError(
          "should NOT have fewer than 1 items",
          o,
          r("MjvKeywords").ONE_OF.ID,
        );
      for (
        var l = !0,
          u = [],
          c = ((a = e.errors) == null ? void 0 : a.length) || 0,
          d = o.schemaPath,
          m = 0;
        m < i.length;
        m++
      ) {
        var p = i[m];
        ((typeof p == "object" && p != null) ||
          typeof p == "boolean" ||
          typeof p == "string") &&
          e.validate(p, n, e.copyParams(o)) &&
          u.push(m);
      }
      if (((l = u.length === 1), l)) {
        var _;
        s(e, (((_ = e.errors) == null ? void 0 : _.length) || 0) - c);
      } else {
        var f = { passingSchemas: u.length ? u : null },
          g = d,
          h = /#\/\$defs\/\$components\/[^/]+\//;
        (h.test(g) && (g = g.replace(h, "#/")),
          e.pushError(
            r("MjvKeywords").ONE_OF.ID,
            r("MjvKeywords").ONE_OF.message(),
            f,
            e.getParamsWithSchemaPath(
              null,
              babelHelpers.extends({}, o, { schemaPath: g }),
              r("MjvKeywords").ONE_OF.ID,
            ),
            { parentSchema: t, schema: t.oneOf, data: n },
          ));
      }
      return l;
    }
    function s(e, t) {
      t &&
        e.errors != null &&
        (e.errors.splice(-t),
        r("MjvBuiltins").isArray(e.errors) &&
          !e.errors.length &&
          (e.errors = null));
    }
    l.validateOneOf = e;
  },
  98,
);
