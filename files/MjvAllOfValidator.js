__d(
  "MjvAllOfValidator",
  ["MjvBuiltins", "MjvKeywords"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      if (typeof t != "object" || t == null) return !0;
      var a = t.allOf;
      if (!r("MjvBuiltins").isArray(a)) return !0;
      a.length === 0 &&
        e.throwError(
          "should NOT have fewer than 1 items",
          o,
          r("MjvKeywords").ALL_OF.ID,
        );
      var i = !0,
        l = 0;
      for (var s of a)
        (((typeof s == "object" && s != null) ||
          typeof s == "string" ||
          typeof s == "boolean") &&
          (e.validate(
            s,
            n,
            e.getParamsWithSchemaPath(
              s,
              o,
              r("MjvKeywords").ALL_OF.ID + "/" + l,
            ),
          ) ||
            (i = !1)),
          l++);
      return i;
    }
    l.validateAllOf = e;
  },
  98,
);
