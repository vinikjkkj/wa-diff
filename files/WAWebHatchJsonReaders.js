__d(
  "WAWebHatchJsonReaders",
  ["WATypeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e != null && typeof e == "object" && !Array.isArray(e);
    }
    function s(e, t) {
      return e == null || typeof e != "object" || Array.isArray(e)
        ? null
        : e[t];
    }
    function u(e, t) {
      var n = s(e, t);
      return o("WATypeUtils").isString(n) ? n : null;
    }
    function c(e, t) {
      var n = s(e, t);
      return o("WATypeUtils").isNumber(n) ? n : null;
    }
    ((l.isObject = e),
      (l.readField = s),
      (l.readString = u),
      (l.readNumber = c));
  },
  98,
);
