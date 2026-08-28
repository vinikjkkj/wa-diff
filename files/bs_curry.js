__d(
  "bs_curry",
  ["bs_caml_array"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(t, r) {
      for (;;) {
        var o = r,
          a = t,
          i = a.length,
          l = i === 0 ? 1 : i,
          s = o.length,
          u = (l - s) | 0;
        if (u === 0) return a.apply(null, o);
        if (u >= 0)
          return (function (t, n) {
            return function (r) {
              return e(t, n.concat([r]));
            };
          })(a, o);
        ((r = n("bs_caml_array").sub(o, l, -u | 0)),
          (t = a.apply(null, n("bs_caml_array").sub(o, 0, l))));
      }
    }
    function l(t, n) {
      var r = t.length;
      if (r === 1) return t(n);
      switch (r) {
        case 1:
          return t(n);
        case 2:
          return function (e) {
            return t(n, e);
          };
        case 3:
          return function (e, r) {
            return t(n, e, r);
          };
        case 4:
          return function (e, r, o) {
            return t(n, e, r, o);
          };
        case 5:
          return function (e, r, o, a) {
            return t(n, e, r, o, a);
          };
        case 6:
          return function (e, r, o, a, i) {
            return t(n, e, r, o, a, i);
          };
        case 7:
          return function (e, r, o, a, i, l) {
            return t(n, e, r, o, a, i, l);
          };
        default:
          return e(t, [n]);
      }
    }
    function s(e) {
      var t = e.length;
      return t === 1
        ? e
        : function (t) {
            return l(e, t);
          };
    }
    function u(t, n, r) {
      var o = t.length;
      if (o === 2) return t(n, r);
      switch (o) {
        case 1:
          return e(t(n), [r]);
        case 2:
          return t(n, r);
        case 3:
          return function (e) {
            return t(n, r, e);
          };
        case 4:
          return function (e, o) {
            return t(n, r, e, o);
          };
        case 5:
          return function (e, o, a) {
            return t(n, r, e, o, a);
          };
        case 6:
          return function (e, o, a, i) {
            return t(n, r, e, o, a, i);
          };
        case 7:
          return function (e, o, a, i, l) {
            return t(n, r, e, o, a, i, l);
          };
        default:
          return e(t, [n, r]);
      }
    }
    function c(e) {
      var t = e.length;
      return t === 2
        ? e
        : function (t, n) {
            return u(e, t, n);
          };
    }
    function d(t, n, r, o) {
      var a = t.length;
      if (a === 3) return t(n, r, o);
      switch (a) {
        case 1:
          return e(t(n), [r, o]);
        case 2:
          return e(t(n, r), [o]);
        case 3:
          return t(n, r, o);
        case 4:
          return function (e) {
            return t(n, r, o, e);
          };
        case 5:
          return function (e, a) {
            return t(n, r, o, e, a);
          };
        case 6:
          return function (e, a, i) {
            return t(n, r, o, e, a, i);
          };
        case 7:
          return function (e, a, i, l) {
            return t(n, r, o, e, a, i, l);
          };
        default:
          return e(t, [n, r, o]);
      }
    }
    function m(e) {
      var t = e.length;
      return t === 3
        ? e
        : function (t, n, r) {
            return d(e, t, n, r);
          };
    }
    function p(t, n, r, o, a) {
      var i = t.length;
      if (i === 4) return t(n, r, o, a);
      switch (i) {
        case 1:
          return e(t(n), [r, o, a]);
        case 2:
          return e(t(n, r), [o, a]);
        case 3:
          return e(t(n, r, o), [a]);
        case 4:
          return t(n, r, o, a);
        case 5:
          return function (e) {
            return t(n, r, o, a, e);
          };
        case 6:
          return function (e, i) {
            return t(n, r, o, a, e, i);
          };
        case 7:
          return function (e, i, l) {
            return t(n, r, o, a, e, i, l);
          };
        default:
          return e(t, [n, r, o, a]);
      }
    }
    function _(e) {
      var t = e.length;
      return t === 4
        ? e
        : function (t, n, r, o) {
            return p(e, t, n, r, o);
          };
    }
    function f(t, n, r, o, a, i) {
      var l = t.length;
      if (l === 5) return t(n, r, o, a, i);
      switch (l) {
        case 1:
          return e(t(n), [r, o, a, i]);
        case 2:
          return e(t(n, r), [o, a, i]);
        case 3:
          return e(t(n, r, o), [a, i]);
        case 4:
          return e(t(n, r, o, a), [i]);
        case 5:
          return t(n, r, o, a, i);
        case 6:
          return function (e) {
            return t(n, r, o, a, i, e);
          };
        case 7:
          return function (e, l) {
            return t(n, r, o, a, i, e, l);
          };
        default:
          return e(t, [n, r, o, a, i]);
      }
    }
    function g(e) {
      var t = e.length;
      return t === 5
        ? e
        : function (t, n, r, o, a) {
            return f(e, t, n, r, o, a);
          };
    }
    function h(t, n, r, o, a, i, l) {
      var s = t.length;
      if (s === 6) return t(n, r, o, a, i, l);
      switch (s) {
        case 1:
          return e(t(n), [r, o, a, i, l]);
        case 2:
          return e(t(n, r), [o, a, i, l]);
        case 3:
          return e(t(n, r, o), [a, i, l]);
        case 4:
          return e(t(n, r, o, a), [i, l]);
        case 5:
          return e(t(n, r, o, a, i), [l]);
        case 6:
          return t(n, r, o, a, i, l);
        case 7:
          return function (e) {
            return t(n, r, o, a, i, l, e);
          };
        default:
          return e(t, [n, r, o, a, i, l]);
      }
    }
    function y(e) {
      var t = e.length;
      return t === 6
        ? e
        : function (t, n, r, o, a, i) {
            return h(e, t, n, r, o, a, i);
          };
    }
    function C(t, n, r, o, a, i, l, s) {
      var u = t.length;
      if (u === 7) return t(n, r, o, a, i, l, s);
      switch (u) {
        case 1:
          return e(t(n), [r, o, a, i, l, s]);
        case 2:
          return e(t(n, r), [o, a, i, l, s]);
        case 3:
          return e(t(n, r, o), [a, i, l, s]);
        case 4:
          return e(t(n, r, o, a), [i, l, s]);
        case 5:
          return e(t(n, r, o, a, i), [l, s]);
        case 6:
          return e(t(n, r, o, a, i, l), [s]);
        case 7:
          return t(n, r, o, a, i, l, s);
        default:
          return e(t, [n, r, o, a, i, l, s]);
      }
    }
    function b(e) {
      var t = e.length;
      return t === 7
        ? e
        : function (t, n, r, o, a, i, l) {
            return C(e, t, n, r, o, a, i, l);
          };
    }
    function v(t, n, r, o, a, i, l, s, u) {
      var c = t.length;
      if (c === 8) return t(n, r, o, a, i, l, s, u);
      switch (c) {
        case 1:
          return e(t(n), [r, o, a, i, l, s, u]);
        case 2:
          return e(t(n, r), [o, a, i, l, s, u]);
        case 3:
          return e(t(n, r, o), [a, i, l, s, u]);
        case 4:
          return e(t(n, r, o, a), [i, l, s, u]);
        case 5:
          return e(t(n, r, o, a, i), [l, s, u]);
        case 6:
          return e(t(n, r, o, a, i, l), [s, u]);
        case 7:
          return e(t(n, r, o, a, i, l, s), [u]);
        default:
          return e(t, [n, r, o, a, i, l, s, u]);
      }
    }
    function S(e) {
      var t = e.length;
      return t === 8
        ? e
        : function (t, n, r, o, a, i, l, s) {
            return v(e, t, n, r, o, a, i, l, s);
          };
    }
    ((i.app = e),
      (i._1 = l),
      (i.__1 = s),
      (i._2 = u),
      (i.__2 = c),
      (i._3 = d),
      (i.__3 = m),
      (i._4 = p),
      (i.__4 = _),
      (i._5 = f),
      (i.__5 = g),
      (i._6 = h),
      (i.__6 = y),
      (i._7 = C),
      (i.__7 = b),
      (i._8 = v),
      (i.__8 = S));
  },
  null,
);
