__d(
  "shallowEqualI64",
  ["I64"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return (
        Array.isArray(e) &&
        e.length === 2 &&
        Number.isInteger(e[0]) &&
        Number.isInteger(e[1])
      );
    }
    function u(t, n) {
      return t === n
        ? !0
        : s(t) && s(n)
          ? (e || (e = o("I64"))).equal(t, n)
          : !1;
    }
    function c(e, t) {
      return d(e, t, u);
    }
    function d(e, t, n) {
      if (
        (n === void 0 &&
          (n = function (t, n) {
            return t === n;
          }),
        n(e, t))
      )
        return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      var r = Object.keys(e),
        o = Object.keys(t);
      if (r.length !== o.length) return !1;
      for (var a = 0; a < r.length; a++)
        if (!n(e[r[a]], t[r[a]], r[a])) return !1;
      return !0;
    }
    ((l.shallowEqualI64 = c), (l.shallowEqual = d));
  },
  98,
);
