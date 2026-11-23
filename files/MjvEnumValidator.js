__d(
  "MjvEnumValidator",
  ["MjvKeywords"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a = !0;
      if (
        typeof t == "object" &&
        typeof t.enum == "object" &&
        Array.isArray(t.enum) &&
        t.enum.length > 0
      ) {
        var i = n == null || typeof n != "object";
        (i
          ? (a = t.enum.includes(n))
          : (a = t.enum.some(function (t) {
              return e.isEqual(t, n);
            })),
          a ||
            e.pushError(
              r("MjvKeywords").ENUM.ID,
              r("MjvKeywords").ENUM.message(),
              { allowedValues: t.enum },
              e.getParamsWithSchemaPath(t, o, r("MjvKeywords").ENUM.ID),
              { parentSchema: t, schema: t.enum, data: n },
            ));
      }
      return a;
    }
    l.validateEnum = e;
  },
  98,
);
