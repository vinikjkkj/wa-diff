__d(
  "MjvMinMaxLengthValidator",
  ["MjvKeywords"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a = typeof t.minLength == "number" ? t.minLength : void 0;
      return u(
        e,
        t,
        a,
        n,
        r("MjvKeywords").MIN_LENGTH.ID,
        r("MjvKeywords").MIN_LENGTH.message(a),
        function (e, t) {
          return e < t;
        },
        o,
      );
    }
    function s(e, t, n, o) {
      var a = typeof t.maxLength == "number" ? t.maxLength : void 0;
      return u(
        e,
        t,
        a,
        n,
        r("MjvKeywords").MAX_LENGTH.ID,
        r("MjvKeywords").MAX_LENGTH.message(a),
        function (e, t) {
          return e > t;
        },
        o,
      );
    }
    function u(e, t, n, r, o, a, i, l) {
      var s = !0;
      return (
        n != null &&
          typeof r == "string" &&
          i(e.getStringDataLength(r), n) &&
          (e.pushError(o, a, { limit: n }, e.getParamsWithSchemaPath(t, l, o), {
            parentSchema: t,
            schema: n,
            data: r,
          }),
          (s = !1)),
        s
      );
    }
    ((l.validateMinLength = e), (l.validateMaxLength = s));
  },
  98,
);
