__d(
  "bs_caml_array",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      for (var r = new Array(n), o = 0, a = t; o < n; )
        ((r[o] = e[a]), (o = (o + 1) | 0), (a = (a + 1) | 0));
      return r;
    }
    function l(e, t) {
      for (;;) {
        var n = t,
          r = e;
        if (!n) return r;
        ((t = n.tl), (e = (n.hd.length + r) | 0));
      }
    }
    function s(e, t, n) {
      for (;;) {
        var r = n,
          o = t;
        if (!r) return;
        for (var a = r.hd, i = a.length, l = o, s = 0; s < i; )
          ((e[l] = a[s]), (l = (l + 1) | 0), (s = (s + 1) | 0));
        ((n = r.tl), (t = l));
      }
    }
    function u(e) {
      var t = l(0, e),
        n = new Array(t);
      return (s(n, 0, e), n);
    }
    function c(e, t, n) {
      if (t < 0 || t >= e.length)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error(),
        };
      e[t] = n;
    }
    function d(e, t) {
      if (t < 0 || t >= e.length)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error(),
        };
      return e[t];
    }
    function m(e, t) {
      for (var n = new Array(e), r = 0; r < e; ++r) n[r] = t;
      return n;
    }
    function p(e) {
      for (var t = new Array(e), n = 0; n < e; ++n) t[n] = 0;
      return t;
    }
    function _(e, t, n, r, o) {
      if (r <= t) {
        for (var a = 0; a < o; ++a) n[(a + r) | 0] = e[(a + t) | 0];
        return;
      }
      for (var i = (o - 1) | 0; i >= 0; --i) n[(i + r) | 0] = e[(i + t) | 0];
    }
    function f(e) {
      return e.slice(0);
    }
    ((i.dup = f),
      (i.sub = e),
      (i.concat = u),
      (i.make = m),
      (i.make_float = p),
      (i.blit = _),
      (i.get = d),
      (i.set = c));
  },
  null,
);
