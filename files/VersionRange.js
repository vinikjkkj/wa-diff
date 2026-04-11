__d(
  "VersionRange",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = /\./,
      u = /\|\|/,
      c = /\s+\-\s+/,
      d = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
      m = /^(\d*)(.*)/;
    function p(e, t) {
      var n = e.split(u);
      return n.length > 1
        ? n.some(function (e) {
            return x.contains(e, t);
          })
        : _(n[0].trim(), t);
    }
    function _(e, t) {
      var n = e.split(c);
      if (((n.length > 0 && n.length <= 2) || s(0, 11800), n.length === 1))
        return f(n[0], t);
      var r = n[0],
        o = n[1];
      return ((L(r) && L(o)) || s(0, 11801), f(">=" + r, t) && f("<=" + o, t));
    }
    function f(t, n) {
      var r = t.trim();
      if (r === "") return !0;
      var o = n.split(e),
        a = S(r),
        i = a.modifier,
        l = a.rangeComponents;
      switch (i) {
        case "<":
          return g(o, l);
        case "<=":
          return h(o, l);
        case ">=":
          return C(o, l);
        case ">":
          return b(o, l);
        case "~":
        case "~>":
          return v(o, l);
        default:
          return y(o, l);
      }
    }
    function g(e, t) {
      return D(e, t) === -1;
    }
    function h(e, t) {
      var n = D(e, t);
      return n === -1 || n === 0;
    }
    function y(e, t) {
      return D(e, t) === 0;
    }
    function C(e, t) {
      var n = D(e, t);
      return n === 1 || n === 0;
    }
    function b(e, t) {
      return D(e, t) === 1;
    }
    function v(e, t) {
      var n = t.slice(),
        r = t.slice();
      r.length > 1 && r.pop();
      var o = r.length - 1,
        a = parseInt(r[o], 10);
      return (R(a) && (r[o] = a + 1 + ""), C(e, n) && g(e, r));
    }
    function S(t) {
      var n = t.split(e),
        r = n[0].match(d);
      return (
        r || s(0, 3074),
        { modifier: r[1], rangeComponents: [r[2]].concat(n.slice(1)) }
      );
    }
    function R(e) {
      return !isNaN(e) && isFinite(e);
    }
    function L(e) {
      return !S(e).modifier;
    }
    function E(e, t) {
      for (var n = e.length; n < t; n++) e[n] = "0";
    }
    function k(e, t) {
      var n = e.slice(),
        r = t.slice();
      E(n, r.length);
      for (var o = 0; o < r.length; o++) {
        var a = r[o].match(/^[x*]$/i);
        if (a && ((r[o] = n[o] = "0"), a[0] === "*" && o === r.length - 1))
          for (var i = o; i < n.length; i++) n[i] = "0";
      }
      return (E(r, n.length), [n, r]);
    }
    function I(e, t) {
      var n = e.match(m),
        r = t.match(m),
        o = n && n[1],
        a = r && r[1],
        i = parseInt(o, 10),
        l = parseInt(a, 10);
      return R(i) && R(l) && i !== l ? T(i, l) : T(e, t);
    }
    function T(e, t) {
      return (
        typeof e == typeof t || s(0, 11802),
        (typeof e == "string" && typeof t == "string") ||
        (typeof e == "number" && typeof t == "number")
          ? e > t
            ? 1
            : e < t
              ? -1
              : 0
          : (typeof e == typeof t || s(0, 11802), 0)
      );
    }
    function D(e, t) {
      for (var n = k(e, t), r = n[0], o = n[1], a = 0; a < o.length; a++) {
        var i = I(r[a], o[a]);
        if (i) return i;
      }
      return 0;
    }
    var x = {
        contains: function (t, n) {
          return p(t.trim(), n.trim());
        },
      },
      $ = x;
    l.default = $;
  },
  98,
);
