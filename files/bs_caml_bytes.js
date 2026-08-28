__d(
  "bs_caml_bytes",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      if (t < 0 || t >= e.length)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error(),
        };
      e[t] = n;
    }
    function l(e, t) {
      if (t < 0 || t >= e.length)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error(),
        };
      return e[t];
    }
    function s(e, t, n, r) {
      if (!(n <= 0)) for (var o = t, a = (n + t) | 0; o < a; ++o) e[o] = r;
    }
    function u(e) {
      if (e < 0)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.create",
          Error: new Error(),
        };
      for (var t = new Array(e), n = 0; n < e; ++n) t[n] = 0;
      return t;
    }
    function c(e, t, n, r, o) {
      if (!(o <= 0)) {
        if (e === n) {
          if (t < r) {
            for (
              var a = (((e.length - r) | 0) - 1) | 0,
                i = (o - 1) | 0,
                l = a > i ? i : a,
                s = l;
              s >= 0;
              --s
            )
              e[(r + s) | 0] = e[(t + s) | 0];
            return;
          }
          if (t <= r) return;
          for (
            var u = (((e.length - t) | 0) - 1) | 0,
              c = (o - 1) | 0,
              d = u > c ? c : u,
              m = 0;
            m <= d;
            ++m
          )
            e[(r + m) | 0] = e[(t + m) | 0];
          return;
        }
        var p = (e.length - t) | 0;
        if (o <= p) {
          for (var _ = 0; _ < o; ++_) n[(r + _) | 0] = e[(t + _) | 0];
          return;
        }
        for (var f = 0; f < p; ++f) n[(r + f) | 0] = e[(t + f) | 0];
        for (var g = p; g < o; ++g) n[(r + g) | 0] = 0;
      }
    }
    function d(e) {
      var t = 0,
        n = e.length,
        r = "",
        o = n;
      if (t === 0 && n <= 4096 && n === e.length)
        return String.fromCharCode.apply(null, e);
      for (var a = 0; o > 0; ) {
        for (var i = o < 1024 ? o : 1024, l = new Array(i), s = 0; s < i; ++s)
          l[s] = e[(s + a) | 0];
        ((r = r + String.fromCharCode.apply(null, l)),
          (o = (o - i) | 0),
          (a = (a + i) | 0));
      }
      return r;
    }
    function m(e, t, n, r, o) {
      if (!(o <= 0)) {
        var a = (e.length - t) | 0;
        if (o <= a) {
          for (var i = 0; i < o; ++i)
            n[(r + i) | 0] = e.charCodeAt((t + i) | 0);
          return;
        }
        for (var l = 0; l < a; ++l) n[(r + l) | 0] = e.charCodeAt((t + l) | 0);
        for (var s = a; s < o; ++s) n[(r + s) | 0] = 0;
      }
    }
    function p(e) {
      for (var t = e.length, n = new Array(t), r = 0; r < t; ++r)
        n[r] = e.charCodeAt(r);
      return n;
    }
    function _(e, t, n, r, o) {
      for (;;) {
        var a = n;
        if (a >= r) return o;
        var i = e[a],
          l = t[a];
        if (i > l) return 1;
        if (i < l) return -1;
        n = (a + 1) | 0;
      }
    }
    function f(e, t) {
      var n = e.length,
        r = t.length;
      return n === r
        ? _(e, t, 0, n, 0)
        : n < r
          ? _(e, t, 0, n, -1)
          : _(e, t, 0, r, 1);
    }
    function g(e, t) {
      var n = e.length,
        r = t.length;
      if (n === r)
        for (var o = 0; ; ) {
          var a = o;
          if (a === n) return !0;
          var i = e[a],
            l = t[a];
          if (i !== l) return !1;
          o = (a + 1) | 0;
        }
      else return !1;
    }
    function h(e, t) {
      return f(e, t) > 0;
    }
    function y(e, t) {
      return f(e, t) >= 0;
    }
    function C(e, t) {
      return f(e, t) < 0;
    }
    function b(e, t) {
      return f(e, t) <= 0;
    }
    ((i.caml_create_bytes = u),
      (i.caml_fill_bytes = s),
      (i.get = l),
      (i.set = e),
      (i.bytes_to_string = d),
      (i.caml_blit_bytes = c),
      (i.caml_blit_string = m),
      (i.bytes_of_string = p),
      (i.caml_bytes_compare = f),
      (i.caml_bytes_greaterthan = h),
      (i.caml_bytes_greaterequal = y),
      (i.caml_bytes_lessthan = C),
      (i.caml_bytes_lessequal = b),
      (i.caml_bytes_equal = g));
  },
  null,
);
