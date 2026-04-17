__d(
  "UnicodeUtils",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 55296,
      u = 56319,
      c = 56320,
      d = 57343,
      m = /[\uD800-\uDFFF]/;
    function p(t) {
      return e <= t && t <= d;
    }
    function _(t, n) {
      if (
        ((0 <= n && n < t.length) || s(0, 1346, n, t.length),
        n + 1 === t.length)
      )
        return !1;
      var r = t.charCodeAt(n),
        o = t.charCodeAt(n + 1);
      return e <= r && r <= u && c <= o && o <= d;
    }
    function f(e) {
      return m.test(e);
    }
    function g(e, t) {
      var n = p(e.charCodeAt(t));
      return n ? 2 : 1;
    }
    function h(e) {
      if (!f(e)) return e.length;
      for (var t = 0, n = 0; n < e.length; n += g(e, n)) t++;
      return t;
    }
    function y(e, t) {
      return b(e, t, t + 1);
    }
    function C(e, t, n) {
      var r = t || 0,
        o = n === void 0 ? 1 / 0 : n || 0;
      if (!f(e)) return e.substr(r, o);
      var a = e.length;
      if (a <= 0 || r > a || o <= 0) return "";
      var i = 0;
      if (r > 0) {
        for (; r > 0 && i < a; r--) i += g(e, i);
        if (i >= a) return "";
      } else if (t < 0) {
        for (i = a; r < 0 && 0 < i; r++) i -= g(e, i - 1);
        i < 0 && (i = 0);
      }
      var l = a;
      if (o < a) for (l = i; o > 0 && l < a; o--) l += g(e, l);
      return e.substring(i, l);
    }
    function b(e, t, n) {
      var r = t || 0,
        o = n === void 0 ? 1 / 0 : n || 0;
      (r < 0 && (r = 0), o < 0 && (o = 0));
      var a = Math.abs(o - r);
      return ((r = r < o ? r : o), C(e, r, a));
    }
    function v(e) {
      for (var t = [], n = 0; n < e.length; n += g(e, n))
        t.push(e.codePointAt(n));
      return t;
    }
    ((l.isCodeUnitInSurrogateRange = p),
      (l.isSurrogatePair = _),
      (l.hasSurrogateUnit = f),
      (l.getUTF16Length = g),
      (l.strlen = h),
      (l.charAt = y),
      (l.substr = C),
      (l.substring = b),
      (l.getCodePoints = v));
  },
  98,
);
