__d(
  "MjvRequiredValidator",
  ["MjvBuiltins", "MjvKeywords"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a,
        i = !0;
      if (
        typeof t == "object" &&
        Array.isArray(t.required) &&
        (a = t.required) != null &&
        a.length &&
        typeof n == "object" &&
        n != null &&
        !(Array.isArray(n) && !n.length)
      )
        for (var l of t.required) {
          var s = typeof l == "string" ? l : String(l),
            u = n[s];
          (u === void 0 || r("MjvBuiltins").isInheritedValue(n, s, u)) &&
            (e.pushError(
              r("MjvKeywords").REQUIRED.ID,
              r("MjvKeywords").REQUIRED.message(s),
              { missingProperty: s },
              e.getParamsWithSchemaPath(t, o, r("MjvKeywords").REQUIRED.ID),
              { parentSchema: t, schema: t.required, data: n },
            ),
            (i = !1));
        }
      return i;
    }
    l.validateRequired = e;
  },
  98,
);
