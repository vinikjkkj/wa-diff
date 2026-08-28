__d(
  "bs_array",
  [
    "bs_caml_array",
    "bs_caml_exceptions",
    "bs_caml_js_exceptions",
    "bs_caml_obj",
    "bs_curry",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("bs_caml_array").make_float,
      l = {};
    function s(e, t) {
      if (e === 0) return [];
      if (e < 0)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Array.init",
          Error: new Error(),
        };
      for (
        var r = n("bs_caml_array").make(e, n("bs_curry")._1(t, 0)), o = 1;
        o < e;
        ++o
      )
        r[o] = n("bs_curry")._1(t, o);
      return r;
    }
    function u(e, t, r) {
      for (var o = n("bs_caml_array").make(e, []), a = 0; a < e; ++a)
        o[a] = n("bs_caml_array").make(t, r);
      return o;
    }
    function c(e) {
      var t = e.length;
      return t === 0 ? [] : n("bs_caml_array").sub(e, 0, t);
    }
    function d(e, t) {
      var r = e.length;
      return r === 0
        ? c(t)
        : t.length === 0
          ? n("bs_caml_array").sub(e, 0, r)
          : e.concat(t);
    }
    function m(e, t, r) {
      if (t < 0 || r < 0 || t > ((e.length - r) | 0))
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Array.sub",
          Error: new Error(),
        };
      return n("bs_caml_array").sub(e, t, r);
    }
    function p(e, t, n, r) {
      if (t < 0 || n < 0 || t > ((e.length - n) | 0))
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Array.fill",
          Error: new Error(),
        };
      for (var o = t, a = (t + n) | 0; o < a; ++o) e[o] = r;
    }
    function _(e, t, r, o, a) {
      if (
        a < 0 ||
        t < 0 ||
        t > ((e.length - a) | 0) ||
        o < 0 ||
        o > ((r.length - a) | 0)
      )
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Array.blit",
          Error: new Error(),
        };
      return n("bs_caml_array").blit(e, t, r, o, a);
    }
    function f(e, t) {
      for (var r = 0, o = t.length; r < o; ++r) n("bs_curry")._1(e, t[r]);
    }
    function g(e, t, r) {
      if (t.length !== r.length)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Array.iter2: arrays must have the same length",
          Error: new Error(),
        };
      for (var o = 0, a = t.length; o < a; ++o) n("bs_curry")._2(e, t[o], r[o]);
    }
    function h(e, t) {
      var r = t.length;
      if (r === 0) return [];
      for (
        var o = n("bs_caml_array").make(r, n("bs_curry")._1(e, t[0])), a = 1;
        a < r;
        ++a
      )
        o[a] = n("bs_curry")._1(e, t[a]);
      return o;
    }
    function y(e, t, r) {
      var o = t.length,
        a = r.length;
      if (o !== a)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Array.map2: arrays must have the same length",
          Error: new Error(),
        };
      if (o === 0) return [];
      for (
        var i = n("bs_caml_array").make(o, n("bs_curry")._2(e, t[0], r[0])),
          l = 1;
        l < o;
        ++l
      )
        i[l] = n("bs_curry")._2(e, t[l], r[l]);
      return i;
    }
    function C(e, t) {
      for (var r = 0, o = t.length; r < o; ++r) n("bs_curry")._2(e, r, t[r]);
    }
    function b(e, t) {
      var r = t.length;
      if (r === 0) return [];
      for (
        var o = n("bs_caml_array").make(r, n("bs_curry")._2(e, 0, t[0])), a = 1;
        a < r;
        ++a
      )
        o[a] = n("bs_curry")._2(e, a, t[a]);
      return o;
    }
    function v(e) {
      for (var t = (e.length - 1) | 0, n = 0; ; ) {
        var r = n,
          o = t;
        if (o < 0) return r;
        ((n = { hd: e[o], tl: r }), (t = (o - 1) | 0));
      }
    }
    function S(e, t) {
      for (;;) {
        var n = t,
          r = e;
        if (!n) return r;
        ((t = n.tl), (e = (r + 1) | 0));
      }
    }
    function R(e) {
      if (!e) return [];
      for (
        var t = n("bs_caml_array").make(S(0, e), e.hd), r = 1, o = e.tl;
        ;
      ) {
        var a = o,
          i = r;
        if (!a) return t;
        ((t[i] = a.hd), (o = a.tl), (r = (i + 1) | 0));
      }
    }
    function L(e, t, r) {
      for (var o = t, a = 0, i = r.length; a < i; ++a)
        o = n("bs_curry")._2(e, o, r[a]);
      return o;
    }
    function E(e, t, r) {
      for (var o = r, a = (t.length - 1) | 0; a >= 0; --a)
        o = n("bs_curry")._2(e, t[a], o);
      return o;
    }
    function k(e, t) {
      for (var r = t.length, o = 0; ; ) {
        var a = o;
        if (a === r) return !1;
        if (n("bs_curry")._1(e, t[a])) return !0;
        o = (a + 1) | 0;
      }
    }
    function I(e, t) {
      for (var r = t.length, o = 0; ; ) {
        var a = o;
        if (a === r) return !0;
        if (!n("bs_curry")._1(e, t[a])) return !1;
        o = (a + 1) | 0;
      }
    }
    function T(e, t) {
      for (var r = t.length, o = 0; ; ) {
        var a = o;
        if (a === r) return !1;
        if (n("bs_caml_obj").caml_equal(t[a], e)) return !0;
        o = (a + 1) | 0;
      }
    }
    function D(e, t) {
      for (var n = t.length, r = 0; ; ) {
        var o = r;
        if (o === n) return !1;
        if (e === t[o]) return !0;
        r = (o + 1) | 0;
      }
    }
    var x = n("bs_caml_exceptions").create("Array.Bottom");
    function $(e, t) {
      for (
        var r = function (o, a) {
            var r = (((((a + a) | 0) + a) | 0) + 1) | 0,
              i = r;
            if (((r + 2) | 0) < o)
              return (
                n("bs_curry")._2(
                  e,
                  n("bs_caml_array").get(t, r),
                  n("bs_caml_array").get(t, (r + 1) | 0),
                ) < 0 && (i = (r + 1) | 0),
                n("bs_curry")._2(
                  e,
                  n("bs_caml_array").get(t, i),
                  n("bs_caml_array").get(t, (r + 2) | 0),
                ) < 0 && (i = (r + 2) | 0),
                i
              );
            if (
              ((r + 1) | 0) < o &&
              n("bs_curry")._2(
                e,
                n("bs_caml_array").get(t, r),
                n("bs_caml_array").get(t, (r + 1) | 0),
              ) < 0
            )
              return (r + 1) | 0;
            if (r < o) return r;
            throw { RE_EXN_ID: x, _1: a, Error: new Error() };
          },
          o = function (a, i, l) {
            try {
              for (var o = i; ; ) {
                var s = o,
                  u = r(a, s);
                if (n("bs_curry")._2(e, n("bs_caml_array").get(t, u), l) <= 0)
                  return n("bs_caml_array").set(t, s, l);
                (n("bs_caml_array").set(t, s, n("bs_caml_array").get(t, u)),
                  (o = u));
              }
            } catch (e) {
              var c = n("bs_caml_js_exceptions").internalToOCamlException(e);
              if (c.RE_EXN_ID === x) return n("bs_caml_array").set(t, c._1, l);
              throw c;
            }
          },
          a = function (o, a) {
            try {
              for (var e = a; ; ) {
                var i = e,
                  l = r(o, i);
                (n("bs_caml_array").set(t, i, n("bs_caml_array").get(t, l)),
                  (e = l));
              }
            } catch (e) {
              var s = n("bs_caml_js_exceptions").internalToOCamlException(e);
              if (s.RE_EXN_ID === x) return s._1;
              throw s;
            }
          },
          i = function (o, a) {
            for (;;) {
              var r = o,
                i = (((r - 1) | 0) / 3) | 0;
              if (r === i)
                throw {
                  RE_EXN_ID: "Assert_failure",
                  _1: ["array.ml", 238, 4],
                  Error: new Error(),
                };
              if (n("bs_curry")._2(e, n("bs_caml_array").get(t, i), a) >= 0)
                return n("bs_caml_array").set(t, r, a);
              if (
                (n("bs_caml_array").set(t, r, n("bs_caml_array").get(t, i)),
                i <= 0)
              )
                return n("bs_caml_array").set(t, 0, a);
              o = i;
            }
          },
          l = t.length,
          s = (((((l + 1) | 0) / 3) | 0) - 1) | 0;
        s >= 0;
        --s
      )
        o(l, s, n("bs_caml_array").get(t, s));
      for (var u = (l - 1) | 0; u >= 2; --u) {
        var c = n("bs_caml_array").get(t, u);
        (n("bs_caml_array").set(t, u, n("bs_caml_array").get(t, 0)),
          i(a(u, 0), c));
      }
      if (!(l <= 1)) {
        var d = n("bs_caml_array").get(t, 1);
        return (
          n("bs_caml_array").set(t, 1, n("bs_caml_array").get(t, 0)),
          n("bs_caml_array").set(t, 0, d)
        );
      }
    }
    function P(e, t) {
      var r = function (o, a, i, l, s, u, c) {
          for (
            var r = (o + a) | 0,
              d = (l + s) | 0,
              m = o,
              p = n("bs_caml_array").get(t, o),
              f = l,
              g = n("bs_caml_array").get(i, l),
              h = c;
            ;
          ) {
            var y = h,
              C = g,
              b = f,
              v = p,
              S = m;
            if (n("bs_curry")._2(e, v, C) <= 0) {
              n("bs_caml_array").set(u, y, v);
              var R = (S + 1) | 0;
              if (R >= r) return _(i, b, u, (y + 1) | 0, (d - b) | 0);
              ((h = (y + 1) | 0), (p = n("bs_caml_array").get(t, R)), (m = R));
              continue;
            }
            n("bs_caml_array").set(u, y, C);
            var L = (b + 1) | 0;
            if (L >= d) return _(t, S, u, (y + 1) | 0, (r - S) | 0);
            ((h = (y + 1) | 0), (g = n("bs_caml_array").get(i, L)), (f = L));
          }
        },
        o = function (o, a, i, l) {
          for (var r = 0; r < l; ++r) {
            for (
              var s = n("bs_caml_array").get(t, (o + r) | 0),
                u = (((i + r) | 0) - 1) | 0;
              u >= i &&
              n("bs_curry")._2(e, n("bs_caml_array").get(a, u), s) > 0;
            )
              (n("bs_caml_array").set(
                a,
                (u + 1) | 0,
                n("bs_caml_array").get(a, u),
              ),
                (u = (u - 1) | 0));
            n("bs_caml_array").set(a, (u + 1) | 0, s);
          }
        },
        a = function (n, i, l, s) {
          if (s <= 5) return o(n, i, l, s);
          var e = (s / 2) | 0,
            u = (s - e) | 0;
          return (
            a((n + e) | 0, i, (l + e) | 0, u),
            a(n, t, (n + u) | 0, e),
            r((n + u) | 0, e, i, (l + e) | 0, u, i, l)
          );
        },
        i = t.length;
      if (i <= 5) return o(0, t, 0, i);
      var l = (i / 2) | 0,
        s = (i - l) | 0,
        u = n("bs_caml_array").make(s, n("bs_caml_array").get(t, 0));
      return (a(l, u, 0, s), a(0, t, s, l), r(s, l, u, 0, s, t, 0));
    }
    var N = u,
      M = n("bs_caml_array").concat,
      w = P;
    ((i.make_float = e),
      (i.init = s),
      (i.make_matrix = u),
      (i.create_matrix = N),
      (i.append = d),
      (i.concat = M),
      (i.sub = m),
      (i.copy = c),
      (i.fill = p),
      (i.blit = _),
      (i.to_list = v),
      (i.of_list = R),
      (i.iter = f),
      (i.iteri = C),
      (i.map = h),
      (i.mapi = b),
      (i.fold_left = L),
      (i.fold_right = E),
      (i.iter2 = g),
      (i.map2 = y),
      (i.for_all = I),
      (i.exists = k),
      (i.mem = T),
      (i.memq = D),
      (i.sort = $),
      (i.stable_sort = P),
      (i.fast_sort = w),
      (i.Floatarray = l));
  },
  null,
);
