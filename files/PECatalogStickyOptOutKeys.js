__d(
  "PECatalogStickyOptOutKeys",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set(["homepage", "collection"]),
      l = "__pe_overflow__",
      s = "__pe_no_objective__";
    function u(e, t) {
      return (t === void 0 && (t = ""), "" + t + String(e));
    }
    function c(e) {
      return e != null && e !== "" ? e : s;
    }
    function d(e, t, n, r) {
      return (
        r === void 0 && (r = ""),
        "" + r + String(e) + ":" + c(t) + ":" + n
      );
    }
    function m(e, t, n, r, o) {
      return (
        o === void 0 && (o = ""),
        "" + o + String(e) + ":" + c(t) + ":" + n + ":" + r
      );
    }
    function p(t) {
      return t != null && e.has(t);
    }
    function _(e, t, n, r, o) {
      o === void 0 && (o = "");
      var a = u(e, o);
      return n == null || n === ""
        ? [a]
        : p(r)
          ? [a, d(e, t, n, o), m(e, t, n, r, o)]
          : [a, d(e, t, n, o)];
    }
    function f(e, t, n, r, o, a) {
      return (
        a === void 0 && (a = ""),
        !o || n == null || n === ""
          ? u(e, a)
          : p(r)
            ? m(e, t, n, r, a)
            : d(e, t, n, a)
      );
    }
    ((i.VALID_URL_TYPES = e),
      (i.OVERFLOW_SENTINEL = l),
      (i.DEFAULT_KEY_OBJECTIVE = s),
      (i.accountKey = u),
      (i.pageKey = d),
      (i.typeKey = m),
      (i.isValidUrlType = p),
      (i.writeKeys = _),
      (i.readKey = f));
  },
  66,
);
