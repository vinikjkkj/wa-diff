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
    function d(e, t) {
      var n = s(e, t);
      return typeof n == "boolean" ? n : null;
    }
    function m(e, t) {
      var n;
      return (n = u(e, t)) != null ? n : "";
    }
    function p(t, n) {
      var r = s(t, n);
      return e(r) ? r : null;
    }
    function _(e) {
      return e.trim() === "";
    }
    function f(e) {
      var t = e.trim();
      return t === "" ? null : t;
    }
    function g(e, t) {
      var n = s(e, t);
      return Array.isArray(n) ? n : null;
    }
    ((l.isObject = e),
      (l.readField = s),
      (l.readString = u),
      (l.readNumber = c),
      (l.readBool = d),
      (l.readStringOrEmpty = m),
      (l.readObject = p),
      (l.isBlankText = _),
      (l.trimToNull = f),
      (l.readArray = g));
  },
  98,
);
