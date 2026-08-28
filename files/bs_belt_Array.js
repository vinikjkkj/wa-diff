__d(
  "bs_belt_Array",
  ["bs_caml", "bs_caml_option", "bs_curry", "bs_js_math"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e;
    function l(e, t) {
      if (t >= 0 && t < e.length) return n("bs_caml_option").some(e[t]);
    }
    function s(e, t) {
      if (!(t >= 0 && t < e.length))
        throw {
          RE_EXN_ID: "Assert_failure",
          _1: ["belt_Array.ml", 27, 4],
          Error: new Error(),
        };
      return e[t];
    }
    function u(e, t, n) {
      return t >= 0 && t < e.length ? ((e[t] = n), !0) : !1;
    }
    function c(e, t, n) {
      if (!(t >= 0 && t < e.length))
        throw {
          RE_EXN_ID: "Assert_failure",
          _1: ["belt_Array.ml", 33, 2],
          Error: new Error(),
        };
      e[t] = n;
    }
    function d(e, t, n) {
      var r = e[t];
      ((e[t] = e[n]), (e[n] = r));
    }
    function m(e) {
      for (var t = e.length, r = 0; r < t; ++r)
        d(e, r, n("bs_js_math").random_int(r, t));
    }
    function p(e) {
      var t = e.slice(0);
      return (m(t), t);
    }
    function _(e) {
      for (var t = e.length, n = 0, r = 0, o = (t / 2) | 0; r < o; ++r)
        d(e, (n + r) | 0, (((((n + t) | 0) - r) | 0) - 1) | 0);
    }
    function f(e) {
      for (var t = e.length, n = new Array(t), r = 0; r < t; ++r)
        n[r] = e[(((t - 1) | 0) - r) | 0];
      return n;
    }
    function g(e, t) {
      if (e <= 0) return [];
      for (var n = new Array(e), r = 0; r < e; ++r) n[r] = t;
      return n;
    }
    function h(e, t) {
      if (e <= 0) return [];
      for (var n = new Array(e), r = 0; r < e; ++r) n[r] = t(r);
      return n;
    }
    function y(e, t) {
      return h(e, n("bs_curry").__1(t));
    }
    function C(e, t) {
      var n = h(e, t);
      return (m(n), n);
    }
    function b(e, t) {
      return C(e, n("bs_curry").__1(t));
    }
    function v(e, t) {
      var n = (t - e) | 0;
      if (n < 0) return [];
      for (var r = new Array((n + 1) | 0), o = 0; o <= n; ++o)
        r[o] = (e + o) | 0;
      return r;
    }
    function S(e, t, n) {
      var r = (t - e) | 0;
      if (r < 0 || n <= 0) return [];
      for (
        var o = (((r / n) | 0) + 1) | 0, a = new Array(o), i = e, l = 0;
        l < o;
        ++l
      )
        ((a[l] = i), (i = (i + n) | 0));
      return a;
    }
    function R(e, t) {
      for (
        var n = e.length,
          r = t.length,
          o = n < r ? n : r,
          a = new Array(o),
          i = 0;
        i < o;
        ++i
      )
        a[i] = [e[i], t[i]];
      return a;
    }
    function L(e, t, n) {
      for (
        var r = e.length,
          o = t.length,
          a = r < o ? r : o,
          i = new Array(a),
          l = 0;
        l < a;
        ++l
      )
        i[l] = n(e[l], t[l]);
      return i;
    }
    function E(e, t, r) {
      return L(e, t, n("bs_curry").__2(r));
    }
    function k(e, t) {
      for (
        var n = e.length, r = t.length, o = new Array((n + r) | 0), a = 0;
        a < n;
        ++a
      )
        o[a] = e[a];
      for (var i = 0; i < r; ++i) o[(n + i) | 0] = t[i];
      return o;
    }
    function I(e) {
      for (var t = e.length, n = 0, r = 0; r < t; ++r)
        n = (n + e[r].length) | 0;
      var o = new Array(n);
      n = 0;
      for (var a = 0; a < t; ++a)
        for (var i = e[a], l = 0, s = i.length; l < s; ++l)
          ((o[n] = i[l]), (n = (n + 1) | 0));
      return o;
    }
    function T(t, r, o) {
      if (o <= 0) return [];
      var a = t.length,
        i = r < 0 ? (e || (e = n("bs_caml"))).caml_int_max((a + r) | 0, 0) : r,
        l = (a - i) | 0,
        s = l < o ? l : o;
      if (s <= 0) return [];
      for (var u = new Array(s), c = 0; c < s; ++c) u[c] = t[(i + c) | 0];
      return u;
    }
    function D(t, r) {
      for (
        var o = t.length,
          a =
            r < 0 ? (e || (e = n("bs_caml"))).caml_int_max((o + r) | 0, 0) : r,
          i = (o - a) | 0,
          l = new Array(i),
          s = 0;
        s < i;
        ++s
      )
        l[s] = t[(a + s) | 0];
      return l;
    }
    function x(t, r, o, a) {
      if (!(o <= 0)) {
        var i = t.length,
          l =
            r < 0 ? (e || (e = n("bs_caml"))).caml_int_max((i + r) | 0, 0) : r,
          s = (i - l) | 0,
          u = s < o ? s : o;
        if (!(u <= 0)) for (var c = l, d = (l + u) | 0; c < d; ++c) t[c] = a;
      }
    }
    function $(e, t, n, r, o) {
      if (r <= t) {
        for (var a = 0; a < o; ++a) n[(a + r) | 0] = e[(a + t) | 0];
        return;
      }
      for (var i = (o - 1) | 0; i >= 0; --i) n[(i + r) | 0] = e[(i + t) | 0];
    }
    function P(t, r, o, a, i) {
      var l = t.length,
        s = o.length,
        u = r < 0 ? (e || (e = n("bs_caml"))).caml_int_max((l + r) | 0, 0) : r,
        c = a < 0 ? (e || (e = n("bs_caml"))).caml_int_max((s + a) | 0, 0) : a,
        d = (e || (e = n("bs_caml"))).caml_int_min(
          i,
          e.caml_int_min((l - u) | 0, (s - c) | 0),
        );
      if (c <= u) {
        for (var m = 0; m < d; ++m) o[(m + c) | 0] = t[(m + u) | 0];
        return;
      }
      for (var p = (d - 1) | 0; p >= 0; --p) o[(p + c) | 0] = t[(p + u) | 0];
    }
    function N(e, t) {
      for (var n = 0, r = e.length; n < r; ++n) t(e[n]);
    }
    function M(e, t) {
      return N(e, n("bs_curry").__1(t));
    }
    function w(e, t) {
      for (var n = e.length, r = new Array(n), o = 0; o < n; ++o)
        r[o] = t(e[o]);
      return r;
    }
    function A(e, t) {
      return w(e, n("bs_curry").__1(t));
    }
    function F(e, t) {
      for (var r = e.length, o = 0, a; a === void 0 && o < r; ) {
        var i = e[o];
        (t(i) && (a = n("bs_caml_option").some(i)), (o = (o + 1) | 0));
      }
      return a;
    }
    function O(e, t) {
      return F(e, n("bs_curry").__1(t));
    }
    function B(e, t) {
      for (var n = e.length, r = 0, o; o === void 0 && r < n; ) {
        var a = e[r];
        (t(a) && (o = r), (r = (r + 1) | 0));
      }
      return o;
    }
    function W(e, t) {
      return B(e, n("bs_curry").__1(t));
    }
    function q(e, t) {
      for (var n = e.length, r = new Array(n), o = 0, a = 0; a < n; ++a) {
        var i = e[a];
        t(i) && ((r[o] = i), (o = (o + 1) | 0));
      }
      return ((r.length = o), r);
    }
    function U(e, t) {
      return q(e, n("bs_curry").__1(t));
    }
    function V(e, t) {
      for (var n = e.length, r = new Array(n), o = 0, a = 0; a < n; ++a) {
        var i = e[a];
        t(i, a) && ((r[o] = i), (o = (o + 1) | 0));
      }
      return ((r.length = o), r);
    }
    function H(e, t) {
      return V(e, n("bs_curry").__2(t));
    }
    function G(e, t) {
      for (var r = e.length, o = new Array(r), a = 0, i = 0; i < r; ++i) {
        var l = e[i],
          s = t(l);
        s !== void 0 &&
          ((o[a] = n("bs_caml_option").valFromOption(s)), (a = (a + 1) | 0));
      }
      return ((o.length = a), o);
    }
    function z(e, t) {
      return G(e, n("bs_curry").__1(t));
    }
    function j(e, t) {
      for (var n = 0, r = e.length; n < r; ++n) t(n, e[n]);
    }
    function K(e, t) {
      return j(e, n("bs_curry").__2(t));
    }
    function Q(e, t) {
      for (var n = e.length, r = new Array(n), o = 0; o < n; ++o)
        r[o] = t(o, e[o]);
      return r;
    }
    function X(e, t) {
      return Q(e, n("bs_curry").__2(t));
    }
    function Y(e, t, n) {
      for (var r = t, o = 0, a = e.length; o < a; ++o) r = n(r, e[o]);
      return r;
    }
    function J(e, t, r) {
      return Y(e, t, n("bs_curry").__2(r));
    }
    function Z(e, t, n) {
      for (var r = t, o = (e.length - 1) | 0; o >= 0; --o) r = n(r, e[o]);
      return r;
    }
    function ee(e, t, r) {
      return Z(e, t, n("bs_curry").__2(r));
    }
    function te(t, r, o, a) {
      for (
        var i = o,
          l = (e || (e = n("bs_caml"))).caml_int_min(t.length, r.length),
          s = (l - 1) | 0;
        s >= 0;
        --s
      )
        i = a(i, t[s], r[s]);
      return i;
    }
    function ne(e, t, r, o) {
      return te(e, t, r, n("bs_curry").__3(o));
    }
    function re(e, t, n) {
      for (var r = t, o = 0, a = e.length; o < a; ++o) r = n(r, e[o], o);
      return r;
    }
    function oe(e, t, r) {
      return re(e, t, n("bs_curry").__3(r));
    }
    function ae(e, t) {
      for (var n = e.length, r = 0; ; ) {
        var o = r;
        if (o === n) return !0;
        if (!t(e[o])) return !1;
        r = (o + 1) | 0;
      }
    }
    function ie(e, t) {
      return ae(e, n("bs_curry").__1(t));
    }
    function le(e, t) {
      for (var n = e.length, r = 0; ; ) {
        var o = r;
        if (o === n) return !1;
        if (t(e[o])) return !0;
        r = (o + 1) | 0;
      }
    }
    function se(e, t) {
      return le(e, n("bs_curry").__1(t));
    }
    function ue(e, t, n, r, o) {
      for (;;) {
        var a = n;
        if (a === o) return !0;
        if (!r(e[a], t[a])) return !1;
        n = (a + 1) | 0;
      }
    }
    function ce(t, r, o) {
      return ue(
        t,
        r,
        0,
        o,
        (e || (e = n("bs_caml"))).caml_int_min(t.length, r.length),
      );
    }
    function de(e, t, r) {
      return ce(e, t, n("bs_curry").__2(r));
    }
    function me(t, r, o) {
      for (
        var a = 0,
          i = (e || (e = n("bs_caml"))).caml_int_min(t.length, r.length);
        ;
      ) {
        var l = a;
        if (l === i) return !1;
        if (o(t[l], r[l])) return !0;
        a = (l + 1) | 0;
      }
    }
    function pe(e, t, r) {
      return me(e, t, n("bs_curry").__2(r));
    }
    function _e(e, t, n) {
      var r = e.length,
        o = t.length;
      return r === o ? ue(e, t, 0, n, r) : !1;
    }
    function fe(e, t, r) {
      return _e(e, t, n("bs_curry").__2(r));
    }
    function ge(e, t, n) {
      var r = e.length,
        o = t.length;
      if (r > o) return 1;
      if (r < o) return -1;
      for (var a = 0; ; ) {
        var i = a;
        if (i === r) return 0;
        var l = n(e[i], t[i]);
        if (l !== 0) return l;
        a = (i + 1) | 0;
      }
    }
    function he(e, t, r) {
      return ge(e, t, n("bs_curry").__2(r));
    }
    function ye(e, t) {
      for (
        var n = e.length,
          r = 0,
          o = 0,
          a = new Array(n),
          i = new Array(n),
          l = 0;
        l < n;
        ++l
      ) {
        var s = e[l];
        t(s)
          ? ((a[r] = s), (r = (r + 1) | 0))
          : ((i[o] = s), (o = (o + 1) | 0));
      }
      return ((a.length = r), (i.length = o), [a, i]);
    }
    function Ce(e, t) {
      return ye(e, n("bs_curry").__1(t));
    }
    function be(e) {
      for (
        var t = e.length, n = new Array(t), r = new Array(t), o = 0;
        o < t;
        ++o
      ) {
        var a = e[o];
        ((n[o] = a[0]), (r[o] = a[1]));
      }
      return [n, r];
    }
    function ve(e, t, n) {
      var r = e.length;
      if (r === 0) return "";
      for (var o = (r - 1) | 0, a = 0, i = ""; ; ) {
        var l = i,
          s = a;
        if (s === o) return l + n(e[s]);
        ((i = l + (n(e[s]) + t)), (a = (s + 1) | 0));
      }
    }
    function Se(e, t, r) {
      return ve(e, t, n("bs_curry").__1(r));
    }
    ((i.get = l),
      (i.getExn = s),
      (i.set = u),
      (i.setExn = c),
      (i.shuffleInPlace = m),
      (i.shuffle = p),
      (i.reverseInPlace = _),
      (i.reverse = f),
      (i.make = g),
      (i.range = v),
      (i.rangeBy = S),
      (i.makeByU = h),
      (i.makeBy = y),
      (i.makeByAndShuffleU = C),
      (i.makeByAndShuffle = b),
      (i.zip = R),
      (i.zipByU = L),
      (i.zipBy = E),
      (i.unzip = be),
      (i.concat = k),
      (i.concatMany = I),
      (i.slice = T),
      (i.sliceToEnd = D),
      (i.fill = x),
      (i.blit = P),
      (i.blitUnsafe = $),
      (i.forEachU = N),
      (i.forEach = M),
      (i.mapU = w),
      (i.map = A),
      (i.getByU = F),
      (i.getBy = O),
      (i.getIndexByU = B),
      (i.getIndexBy = W),
      (i.keepU = q),
      (i.keep = U),
      (i.keepWithIndexU = V),
      (i.keepWithIndex = H),
      (i.keepMapU = G),
      (i.keepMap = z),
      (i.forEachWithIndexU = j),
      (i.forEachWithIndex = K),
      (i.mapWithIndexU = Q),
      (i.mapWithIndex = X),
      (i.partitionU = ye),
      (i.partition = Ce),
      (i.reduceU = Y),
      (i.reduce = J),
      (i.reduceReverseU = Z),
      (i.reduceReverse = ee),
      (i.reduceReverse2U = te),
      (i.reduceReverse2 = ne),
      (i.reduceWithIndexU = re),
      (i.reduceWithIndex = oe),
      (i.joinWithU = ve),
      (i.joinWith = Se),
      (i.someU = le),
      (i.some = se),
      (i.everyU = ae),
      (i.every = ie),
      (i.every2U = ce),
      (i.every2 = de),
      (i.some2U = me),
      (i.some2 = pe),
      (i.cmpU = ge),
      (i.cmp = he),
      (i.eqU = _e),
      (i.eq = fe));
  },
  null,
);
