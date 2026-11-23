__d(
  "MjvMinMaxItemsValidator",
  ["MjvBuiltins", "MjvKeywords"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a = typeof t.minItems == "number" ? t.minItems : void 0;
      return u(
        e,
        t,
        a,
        n,
        function (e, t) {
          return e < t;
        },
        r("MjvKeywords").MIN_ITEMS.ID,
        r("MjvKeywords").MIN_ITEMS.message(a),
        o,
      );
    }
    function s(e, t, n, o) {
      var a = typeof t.maxItems == "number" ? t.maxItems : void 0;
      return u(
        e,
        t,
        a,
        n,
        function (e, t) {
          return e > t;
        },
        r("MjvKeywords").MAX_ITEMS.ID,
        r("MjvKeywords").MAX_ITEMS.message(a),
        o,
      );
    }
    function u(e, t, n, o, a, i, l, s) {
      var u = !0;
      return (
        r("MjvBuiltins").isArray(o) &&
          n != null &&
          a(o.length, n) &&
          (e.pushError(i, l, { limit: n }, e.getParamsWithSchemaPath(t, s, i), {
            parentSchema: t,
            schema: n,
            data: o,
          }),
          (u = !1)),
        u
      );
    }
    ((l.validateMinItems = e), (l.validateMaxItems = s));
  },
  98,
);
