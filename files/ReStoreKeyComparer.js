__d(
  "ReStoreKeyComparer",
  ["I64"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      return (e || (e = o("I64"))).isI64(t)
        ? "I64"
        : Array.isArray(t)
          ? "Array"
          : typeof t == "string"
            ? "String"
            : typeof t == "number"
              ? "Number"
              : typeof t == "boolean"
                ? "Boolean"
                : t instanceof Date
                  ? "Date"
                  : typeof t == "object" && t != null
                    ? "Object"
                    : t === "undefined"
                      ? "Undefined"
                      : t === null
                        ? "Null"
                        : "Unknown";
    }
    var u = (function (e) {
        function t(t, n) {
          var r =
            "Expected types to be the same but got " + s(t) + " and " + s(n);
          return e.call(this, r) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      c = (function (e) {
        function t(t) {
          var n = "Unexpected type " + s(t);
          return e.call(this, n) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      d = [[]],
      m = null;
    function p(e, t) {
      return e < t;
    }
    function _(e, t) {
      return e > t;
    }
    function f(e, t) {
      var n = e === d,
        r = t === d;
      if (n && r) return 0;
      if (n) return 1;
      if (r) return -1;
      if (e === null) return t === null ? 0 : -1;
      if (t === null) return 1;
      if (e === void 0) return t === void 0 ? 0 : -1;
      if (t === void 0) return 1;
      if (Array.isArray(e)) {
        if (!Array.isArray(t)) {
          if (typeof t == "string") return 1;
          throw new u(e, t);
        }
        var o = e[0],
          a = t[0];
        if (p(o, a)) return -1;
        if (_(o, a)) return 1;
        var i = e[1],
          l = t[1];
        if (p(i, l)) return -1;
        if (_(i, l)) return 1;
      } else if (typeof e == "string") {
        if (typeof t != "string") {
          if (typeof t == "number" || t instanceof Date) return 1;
          if (Array.isArray(t)) return -1;
          throw new u(e, t);
        }
        if (e < t) return -1;
        if (e > t) return 1;
      } else if (typeof e == "number") {
        if (typeof t != "number") {
          if (typeof t == "string") return -1;
          throw new u(e, t);
        }
        if (e < t) return -1;
        if (e > t) return 1;
      } else if (e instanceof Date) {
        if (!(t instanceof Date)) {
          if (typeof t == "string") return -1;
          throw new u(e, t);
        }
        if (e < t) return -1;
        if (e > t) return 1;
      } else if (typeof e == "boolean") {
        if (typeof t != "boolean") throw new u(e, t);
        if (!e && t) return -1;
        if (e && !t) return 1;
      } else throw new c(e);
      return 0;
    }
    function g(e, t) {
      if (!Array.isArray(e) || !Array.isArray(t)) return f(e, t);
      var n;
      for (n = 0; n < e.length && n < t.length; n++) {
        var r = f(e[n], t[n]);
        if (r !== 0) return r;
      }
      return n < e.length ? 1 : n < t.length ? -1 : 0;
    }
    var h = function (t, n) {
      return g(n, t);
    };
    ((l.MAX_KEY = d),
      (l.MIN_KEY = m),
      (l.compareValue = f),
      (l.compareKey = g),
      (l.compareKeyDesc = h));
  },
  98,
);
