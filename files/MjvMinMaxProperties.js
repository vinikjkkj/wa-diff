__d(
  "MjvMinMaxProperties",
  ["MjvBuiltins", "MjvKeywords"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a = !0;
      if (
        typeof t == "object" &&
        t != null &&
        t.minProperties != null &&
        typeof n == "object" &&
        n !== null &&
        !r("MjvBuiltins").isArray(n)
      ) {
        var i = r("MjvBuiltins").objectKeys(n).length,
          l = t.minProperties;
        typeof l == "number" &&
          l != null &&
          i < l &&
          (e.pushError(
            r("MjvKeywords").MIN_PROPERTIES.ID,
            r("MjvKeywords").MIN_PROPERTIES.message(l),
            { limit: l },
            e.getParamsWithSchemaPath(t, o, r("MjvKeywords").MIN_PROPERTIES.ID),
            { parentSchema: t, schema: l, data: n },
          ),
          (a = !1));
      }
      return a;
    }
    function s(e, t, n, o) {
      var a = !0;
      if (
        typeof t == "object" &&
        t != null &&
        t.maxProperties != null &&
        typeof n == "object" &&
        n !== null &&
        !r("MjvBuiltins").isArray(n)
      ) {
        var i = r("MjvBuiltins").objectKeys(n).length,
          l = t.maxProperties;
        typeof l == "number" &&
          l != null &&
          i > l &&
          (e.pushError(
            r("MjvKeywords").MAX_PROPERTIES.ID,
            r("MjvKeywords").MAX_PROPERTIES.message(l),
            { limit: l },
            e.getParamsWithSchemaPath(t, o, r("MjvKeywords").MAX_PROPERTIES.ID),
            { parentSchema: t, schema: l, data: n },
          ),
          (a = !1));
      }
      return a;
    }
    ((l.validateMinProperties = e), (l.validateMaxProperties = s));
  },
  98,
);
