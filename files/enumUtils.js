__d(
  "enumUtils",
  ["nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return Object.values(t).find(function (t) {
        return t === e;
      });
    }
    function s(t, n) {
      return t == null ? null : e(t, n);
    }
    function u(e, t) {
      if (e != null) {
        for (var n of Object.keys(t)) if (n === e) return n;
      }
      return null;
    }
    function c(t, n) {
      return r("nullthrows")(e(t, n));
    }
    function d(e, t) {
      return r("nullthrows")(u(e, t));
    }
    function m(e, t) {
      var n = [];
      for (var r of e) n.push(c(r, t));
      return n;
    }
    function p(e, t) {
      var n;
      return (n = t[e]) != null ? n : null;
    }
    function _(e, t) {
      return r("nullthrows")(p(e, t));
    }
    function f(e, t) {
      var n = [];
      for (var r of e) n.push(_(r, t));
      return n;
    }
    function g(e, t) {
      var n;
      return (
        Object.keys(t).forEach(function (r) {
          t[r] === e && (n = r);
        }),
        n
      );
    }
    function h(e, t) {
      return r("nullthrows")(g(e, t));
    }
    ((l.coerce = e),
      (l.coerceNullable = s),
      (l.coerceKey = u),
      (l.assert = c),
      (l.assertKey = d),
      (l.assertIterable = m),
      (l.coerceFromKey = p),
      (l.assertFromKey = _),
      (l.assertIterableFromKey = f),
      (l.enumValueToKey = g),
      (l.enumValueToKeyEnforcing = h));
  },
  98,
);
