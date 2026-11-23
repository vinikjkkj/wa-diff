__d(
  "MjvPatternValidator",
  ["MjvKeywords"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a = !0;
      if (
        typeof n == "string" &&
        typeof t.pattern == "string" &&
        !e.isValidPattern(n, t.pattern) &&
        t.pattern != null
      ) {
        a = !1;
        var i = String(t.pattern);
        e.pushError(
          r("MjvKeywords").PATTERN.ID,
          r("MjvKeywords").PATTERN.message(i),
          { pattern: i },
          e.getParamsWithSchemaPath(t, o, r("MjvKeywords").PATTERN.ID),
          { parentSchema: t, schema: i, data: n },
        );
      }
      return a;
    }
    l.validatePattern = e;
  },
  98,
);
