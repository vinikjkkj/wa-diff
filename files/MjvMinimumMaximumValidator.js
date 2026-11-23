__d(
  "MjvMinimumMaximumValidator",
  ["MjvKeywords"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      return d(
        e,
        t,
        typeof t.minimum == "number" ? t.minimum : void 0,
        n,
        r("MjvKeywords").MINIMUM,
        function (e, t) {
          return e < t;
        },
        o,
      );
    }
    function s(e, t, n, o) {
      return d(
        e,
        t,
        typeof t.maximum == "number" ? t.maximum : void 0,
        n,
        r("MjvKeywords").MAXIMUM,
        function (e, t) {
          return e > t;
        },
        o,
      );
    }
    function u(e, t, n, o) {
      return d(
        e,
        t,
        typeof t.exclusiveMinimum == "number" ? t.exclusiveMinimum : void 0,
        n,
        r("MjvKeywords").EXCLUSIVE_MINIMUM,
        function (e, t) {
          return e <= t;
        },
        o,
      );
    }
    function c(e, t, n, o) {
      return d(
        e,
        t,
        typeof t.exclusiveMaximum == "number" ? t.exclusiveMaximum : void 0,
        n,
        r("MjvKeywords").EXCLUSIVE_MAXIMUM,
        function (e, t) {
          return e >= t;
        },
        o,
      );
    }
    function d(e, t, n, o, a, i, l) {
      var s = !0;
      if (n != null && typeof o == "number" && i(o, n)) {
        var u = a.message(n),
          c = a === r("MjvKeywords").EXCLUSIVE_MAXIMUM;
        (e.pushError(
          a.ID,
          u,
          { comparison: a.COMPARISON, exclusive: c, limit: n },
          e.getParamsWithSchemaPath(t, l, a.ID),
          { parentSchema: t, schema: n, data: o },
        ),
          (s = !1));
      }
      return s;
    }
    ((l.validateMinimum = e),
      (l.validateMaximum = s),
      (l.validateExclusiveMinimum = u),
      (l.validateExclusiveMaximum = c));
  },
  98,
);
