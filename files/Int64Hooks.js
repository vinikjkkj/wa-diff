__d(
  "Int64Hooks",
  ["I64", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = e || (e = o("react")),
      c = u.useCallback,
      d = u.useEffect,
      m = u.useMemo;
    function p(e) {
      var t = [];
      for (var n of e)
        Array.isArray(n) &&
        n.length === 2 &&
        Number.isInteger(n[0]) &&
        Number.isInteger(n[1])
          ? t.push(n[0], n[1])
          : t.push(n, void 0);
      return t;
    }
    function _(e, t) {
      return d(e, t == null ? null : p(t));
    }
    function f(e, t) {
      return c(e, t == null ? null : p(t));
    }
    function g(e, t) {
      return m(e, t == null ? null : p(t));
    }
    function h(e, t) {
      return g(
        function () {
          return e;
        },
        [e == null].concat(
          t.map(function (t) {
            return e == null ? void 0 : e[t];
          }),
        ),
      );
    }
    function y(e, t) {
      if (e === t) return e !== 0 || t !== 0 || 1 / e === 1 / t;
      var n = (s || (s = o("I64"))).cast(e);
      if (n != null) {
        var r = (s || (s = o("I64"))).cast(t);
        if (r != null) return (s || (s = o("I64"))).equal(n, r);
      }
      return e !== e && t !== t;
    }
    var C = Object.prototype.hasOwnProperty;
    function b(e, t) {
      if (y(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (var o = 0; o < n.length; o++)
        if (!C.call(t, n[o]) || !y(e[n[o]], t[n[o]])) return !1;
      return !0;
    }
    ((l.flattenI64s = p),
      (l.useEffectInt64 = _),
      (l.useCallbackInt64 = f),
      (l.useMemoInt64 = g),
      (l.usePickInt64 = h),
      (l.mostlyShallowEqual = b));
  },
  98,
);
