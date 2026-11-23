__d(
  "MjvAnyOfValidator",
  ["MjvBuiltins", "MjvKeywords"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a, i;
      if (typeof t != "object" || t == null) return !0;
      var l = t.anyOf,
        u = !0,
        c = 0,
        d = (a = (i = e.errors) == null ? void 0 : i.length) != null ? a : 0;
      if (r("MjvBuiltins").isArray(l)) {
        l.length ||
          e.throwError(
            "should NOT have fewer than 1 items",
            o,
            r("MjvKeywords").ANY_OF.ID,
          );
        for (var m = 0; m < l.length; m++) {
          var p = l[m];
          if (
            (typeof p == "object" && p != null) ||
            typeof p == "boolean" ||
            typeof p == "string"
          ) {
            var _ = e.getParamsWithSchemaPath(
              null,
              o,
              r("MjvKeywords").ANY_OF.ID + "/" + m,
            );
            if (e.validate(p, n, _)) {
              var f, g;
              s(
                e,
                Math.min(
                  c,
                  ((f = (g = e.errors) == null ? void 0 : g.length) != null
                    ? f
                    : 0) - d,
                ),
              );
              break;
            } else c++;
          }
        }
        ((u = c < l.length),
          u ||
            e.pushError(
              r("MjvKeywords").ANY_OF.ID,
              r("MjvKeywords").ANY_OF.message(),
              void 0,
              e.getParamsWithSchemaPath(null, o, r("MjvKeywords").ANY_OF.ID),
              { parentSchema: t, schema: t.anyOf, data: n },
            ));
      }
      return u;
    }
    function s(e, t) {
      t > 0 &&
        e.errors != null &&
        (e.errors.splice(-t),
        r("MjvBuiltins").isArray(e.errors) &&
          !e.errors.length &&
          (e.errors = null));
    }
    l.validateAnyOf = e;
  },
  98,
);
