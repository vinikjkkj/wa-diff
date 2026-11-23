__d(
  "MjvMultipleOfValidator",
  ["MjvBuiltins", "MjvKeywords"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a = !0;
      if (
        t.multipleOf != null &&
        typeof n == "number" &&
        typeof t.multipleOf == "number"
      ) {
        var i = Number(t.multipleOf),
          l = r("MjvBuiltins").mathAbs(n % i),
          s = 1e-10;
        l > s &&
          r("MjvBuiltins").mathAbs(l - i) > s &&
          (e.pushError(
            r("MjvKeywords").MULTIPLE_OF.ID,
            r("MjvKeywords").MULTIPLE_OF.message(i),
            { multipleOf: i },
            e.getParamsWithSchemaPath(t, o, r("MjvKeywords").MULTIPLE_OF.ID),
            { parentSchema: t, schema: i, data: n },
          ),
          (a = !1));
      }
      return a;
    }
    l.validateMultipleOf = e;
  },
  98,
);
