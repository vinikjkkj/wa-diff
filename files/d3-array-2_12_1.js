__d(
  "d3-array-2.12.1",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e },
      s;
    function u() {
      (function (t, n) {
        typeof e == "object" && typeof l != "undefined"
          ? n(e)
          : typeof s == "function" && s.amd
            ? s(["exports"], n)
            : ((t = typeof globalThis != "undefined" ? globalThis : t || self),
              n((t.d3 = t.d3 || {})));
      })(this, function (e) {
        function t(e, t) {
          return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
        }
        function n(e) {
          var t = e,
            n = e;
          e.length === 1 &&
            ((t = function (n, r) {
              return e(n) - r;
            }),
            (n = r(e)));
          function o(e, t, r, o) {
            for (r == null && (r = 0), o == null && (o = e.length); r < o; ) {
              var a = (r + o) >>> 1;
              n(e[a], t) < 0 ? (r = a + 1) : (o = a);
            }
            return r;
          }
          function a(e, t, r, o) {
            for (r == null && (r = 0), o == null && (o = e.length); r < o; ) {
              var a = (r + o) >>> 1;
              n(e[a], t) > 0 ? (o = a) : (r = a + 1);
            }
            return r;
          }
          function i(e, n, r, a) {
            (r == null && (r = 0), a == null && (a = e.length));
            var i = o(e, n, r, a - 1);
            return i > r && t(e[i - 1], n) > -t(e[i], n) ? i - 1 : i;
          }
          return { left: o, center: i, right: a };
        }
        function r(e) {
          return function (n, r) {
            return t(e(n), r);
          };
        }
        function o(e) {
          return e === null ? NaN : +e;
        }
        function* a(e, t) {
          if (t === void 0)
            for (var n of e) n != null && (n = +n) >= n && (yield n);
          else {
            var r = -1;
            for (var o of e)
              (o = t(o, ++r, e)) != null && (o = +o) >= o && (yield o);
          }
        }
        var i = n(t),
          l = i.right,
          s = i.left,
          u = n(o).center;
        function c(e, t) {
          var n = 0;
          if (t === void 0) for (var r of e) r != null && (r = +r) >= r && ++n;
          else {
            var o = -1;
            for (var a of e) (a = t(a, ++o, e)) != null && (a = +a) >= a && ++n;
          }
          return n;
        }
        function d(e) {
          return e.length | 0;
        }
        function m(e) {
          return !(e > 0);
        }
        function p(e) {
          return typeof e != "object" || "length" in e ? e : Array.from(e);
        }
        function _(e) {
          return function (t) {
            return e.apply(void 0, t);
          };
        }
        function f() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = typeof t[t.length - 1] == "function" && _(t.pop());
          t = t.map(p);
          var o = t.map(d),
            a = t.length - 1,
            i = new Array(a + 1).fill(0),
            l = [];
          if (a < 0 || o.some(m)) return l;
          for (;;) {
            l.push(
              i.map(function (e, n) {
                return t[n][e];
              }),
            );
            for (var s = a; ++i[s] === o[s]; ) {
              if (s === 0) return r ? l.map(r) : l;
              i[s--] = 0;
            }
          }
        }
        function g(e, t) {
          var n = 0,
            r = 0;
          return Float64Array.from(
            e,
            t === void 0
              ? function (e) {
                  return (n += +e || 0);
                }
              : function (o) {
                  return (n += +t(o, r++, e) || 0);
                },
          );
        }
        function h(e, t) {
          return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
        }
        function y(e, t) {
          var n = 0,
            r,
            o = 0,
            a = 0;
          if (t === void 0)
            for (var i of e)
              i != null &&
                (i = +i) >= i &&
                ((r = i - o), (o += r / ++n), (a += r * (i - o)));
          else {
            var l = -1;
            for (var s of e)
              (s = t(s, ++l, e)) != null &&
                (s = +s) >= s &&
                ((r = s - o), (o += r / ++n), (a += r * (s - o)));
          }
          if (n > 1) return a / (n - 1);
        }
        function C(e, t) {
          var n = y(e, t);
          return n && Math.sqrt(n);
        }
        function b(e, t) {
          var n, r;
          if (t === void 0)
            for (var o of e)
              o != null &&
                (n === void 0
                  ? o >= o && (n = r = o)
                  : (n > o && (n = o), r < o && (r = o)));
          else {
            var a = -1;
            for (var i of e)
              (i = t(i, ++a, e)) != null &&
                (n === void 0
                  ? i >= i && (n = r = i)
                  : (n > i && (n = i), r < i && (r = i)));
          }
          return [n, r];
        }
        var v = (function () {
          function e() {
            ((this.$1 = new Float64Array(32)), (this.$2 = 0));
          }
          var t = e.prototype;
          return (
            (t.add = function (t) {
              for (var e = this.$1, n = 0, r = 0; r < this.$2 && r < 32; r++) {
                var o = e[r],
                  a = t + o,
                  i = Math.abs(t) < Math.abs(o) ? t - (a - o) : o - (a - t);
                (i && (e[n++] = i), (t = a));
              }
              return ((e[n] = t), (this.$2 = n + 1), this);
            }),
            (t.valueOf = function () {
              var e = this.$1,
                t = this.$2,
                n,
                r,
                o,
                a = 0;
              if (t > 0) {
                for (
                  a = e[--t];
                  t > 0 &&
                  ((n = a), (r = e[--t]), (a = n + r), (o = r - (a - n)), !o);
                );
                t > 0 &&
                  ((o < 0 && e[t - 1] < 0) || (o > 0 && e[t - 1] > 0)) &&
                  ((r = o * 2), (n = a + r), r == n - a && (a = n));
              }
              return a;
            }),
            e
          );
        })();
        function S(e, t) {
          var n = new v();
          if (t === void 0) for (var r of e) (r = +r) && n.add(r);
          else {
            var o = -1;
            for (var a of e) (a = +t(a, ++o, e)) && n.add(a);
          }
          return +n;
        }
        function R(e, t) {
          var n = new v(),
            r = -1;
          return Float64Array.from(
            e,
            t === void 0
              ? function (e) {
                  return n.add(+e || 0);
                }
              : function (o) {
                  return n.add(+t(o, ++r, e) || 0);
                },
          );
        }
        var L = (function (e) {
            function t(t, n) {
              var r;
              if (
                (n === void 0 && (n = D),
                (r = e.call(this) || this),
                Object.defineProperties(r, {
                  $InternMap1: { value: new Map() },
                  $InternMap2: { value: n },
                }),
                t != null)
              )
                for (var o of t) {
                  var a = o[0],
                    i = o[1];
                  r.set(a, i);
                }
              return r;
            }
            babelHelpers.inheritsLoose(t, e);
            var n = t.prototype;
            return (
              (n.get = function (n) {
                return e.prototype.get.call(this, k(this, n));
              }),
              (n.has = function (n) {
                return e.prototype.has.call(this, k(this, n));
              }),
              (n.set = function (n, r) {
                return e.prototype.set.call(this, I(this, n), r);
              }),
              (n.delete = function (n) {
                return e.prototype.delete.call(this, T(this, n));
              }),
              t
            );
          })(babelHelpers.wrapNativeSuper(Map)),
          E = (function (e) {
            function t(t, n) {
              var r;
              if (
                (n === void 0 && (n = D),
                (r = e.call(this) || this),
                Object.defineProperties(r, {
                  $InternSet1: { value: new Map() },
                  $InternSet2: { value: n },
                }),
                t != null)
              )
                for (var o of t) r.add(o);
              return r;
            }
            babelHelpers.inheritsLoose(t, e);
            var n = t.prototype;
            return (
              (n.has = function (n) {
                return e.prototype.has.call(this, k(this, n));
              }),
              (n.add = function (n) {
                return e.prototype.add.call(this, I(this, n));
              }),
              (n.delete = function (n) {
                return e.prototype.delete.call(this, T(this, n));
              }),
              t
            );
          })(babelHelpers.wrapNativeSuper(Set));
        function k(e, t) {
          var n = e._intern,
            r = e._key,
            o = r(t);
          return n.has(o) ? n.get(o) : t;
        }
        function I(e, t) {
          var n = e._intern,
            r = e._key,
            o = r(t);
          return n.has(o) ? n.get(o) : (n.set(o, t), t);
        }
        function T(e, t) {
          var n = e._intern,
            r = e._key,
            o = r(t);
          return (n.has(o) && ((t = n.get(t)), n.delete(o)), t);
        }
        function D(e) {
          return e !== null && typeof e == "object" ? e.valueOf() : e;
        }
        function x(e) {
          return e;
        }
        function $(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          return O(e, x, x, n);
        }
        function P(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          return O(e, Array.from, x, n);
        }
        function N(e, t) {
          for (
            var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
            o < n;
            o++
          )
            r[o - 2] = arguments[o];
          return O(e, x, t, r);
        }
        function M(e, t) {
          for (
            var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
            o < n;
            o++
          )
            r[o - 2] = arguments[o];
          return O(e, Array.from, t, r);
        }
        function w(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          return O(e, x, F, n);
        }
        function A(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          return O(e, Array.from, F, n);
        }
        function F(e) {
          if (e.length !== 1) throw new Error("duplicate key");
          return e[0];
        }
        function O(e, t, n, r) {
          return (function e(o, a) {
            if (a >= r.length) return n(o);
            var i = new L(),
              l = r[a++],
              s = -1;
            for (var u of o) {
              var c = l(u, ++s, o),
                d = i.get(c);
              d ? d.push(u) : i.set(c, [u]);
            }
            for (var m of i) {
              var p = m[0],
                _ = m[1];
              i.set(p, e(_, a));
            }
            return t(i);
          })(e, 0);
        }
        function B(e, t) {
          return Array.from(t, function (t) {
            return e[t];
          });
        }
        function W(e) {
          for (
            var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
            o < n;
            o++
          )
            r[o - 1] = arguments[o];
          if (
            typeof e[
              typeof Symbol == "function" ? Symbol.iterator : "@@iterator"
            ] != "function"
          )
            throw new TypeError("values is not iterable");
          e = Array.from(e);
          var a = r,
            i = a[0],
            l = i === void 0 ? t : i;
          if (l.length === 1 || r.length > 1) {
            var s = Uint32Array.from(e, function (e, t) {
              return t;
            });
            return (
              r.length > 1
                ? ((r = r.map(function (t) {
                    return e.map(t);
                  })),
                  s.sort(function (e, n) {
                    for (var o of r) {
                      var a = t(o[e], o[n]);
                      if (a) return a;
                    }
                  }))
                : ((l = e.map(l)),
                  s.sort(function (e, n) {
                    return t(l[e], l[n]);
                  })),
              B(e, s)
            );
          }
          return e.sort(l);
        }
        function q(e, n, r) {
          return (
            n.length === 1
              ? W(N(e, n, r), function (e, n) {
                  var r = e[0],
                    o = e[1],
                    a = n[0],
                    i = n[1];
                  return t(o, i) || t(r, a);
                })
              : W($(e, r), function (e, r) {
                  var o = e[0],
                    a = e[1],
                    i = r[0],
                    l = r[1];
                  return n(a, l) || t(o, i);
                })
          ).map(function (e) {
            var t = e[0];
            return t;
          });
        }
        var U = Array.prototype,
          V = U.slice;
        function H(e) {
          return function () {
            return e;
          };
        }
        var G = Math.sqrt(50),
          z = Math.sqrt(10),
          j = Math.sqrt(2);
        function K(e, t, n) {
          var r,
            o = -1,
            a,
            i,
            l;
          if (((t = +t), (e = +e), (n = +n), e === t && n > 0)) return [e];
          if (
            ((r = t < e) && ((a = e), (e = t), (t = a)),
            (l = Q(e, t, n)) === 0 || !isFinite(l))
          )
            return [];
          if (l > 0) {
            var s = Math.round(e / l),
              u = Math.round(t / l);
            for (
              s * l < e && ++s,
                u * l > t && --u,
                i = new Array((a = u - s + 1));
              ++o < a;
            )
              i[o] = (s + o) * l;
          } else {
            l = -l;
            var c = Math.round(e * l),
              d = Math.round(t * l);
            for (
              c / l < e && ++c,
                d / l > t && --d,
                i = new Array((a = d - c + 1));
              ++o < a;
            )
              i[o] = (c + o) / l;
          }
          return (r && i.reverse(), i);
        }
        function Q(e, t, n) {
          var r = (t - e) / Math.max(0, n),
            o = Math.floor(Math.log(r) / Math.LN10),
            a = r / Math.pow(10, o);
          return o >= 0
            ? (a >= G ? 10 : a >= z ? 5 : a >= j ? 2 : 1) * Math.pow(10, o)
            : -Math.pow(10, -o) / (a >= G ? 10 : a >= z ? 5 : a >= j ? 2 : 1);
        }
        function X(e, t, n) {
          var r = Math.abs(t - e) / Math.max(0, n),
            o = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
            a = r / o;
          return (
            a >= G ? (o *= 10) : a >= z ? (o *= 5) : a >= j && (o *= 2),
            t < e ? -o : o
          );
        }
        function Y(e, t, n) {
          for (var r; ; ) {
            var o = Q(e, t, n);
            if (o === r || o === 0 || !isFinite(o)) return [e, t];
            (o > 0
              ? ((e = Math.floor(e / o) * o), (t = Math.ceil(t / o) * o))
              : o < 0 &&
                ((e = Math.ceil(e * o) / o), (t = Math.floor(t * o) / o)),
              (r = o));
          }
        }
        function J(e) {
          return Math.ceil(Math.log(c(e)) / Math.LN2) + 1;
        }
        function Z() {
          var e = x,
            t = b,
            n = J;
          function r(r) {
            Array.isArray(r) || (r = Array.from(r));
            var o,
              a = r.length,
              i,
              s = new Array(a);
            for (o = 0; o < a; ++o) s[o] = e(r[o], o, r);
            var u = t(s),
              c = u[0],
              d = u[1],
              m = n(s, c, d);
            if (!Array.isArray(m)) {
              var p = d,
                _ = +m;
              if (t === b) {
                var f = Y(c, d, _);
                ((c = f[0]), (d = f[1]));
              }
              if (((m = K(c, d, _)), m[m.length - 1] >= d))
                if (p >= d && t === b) {
                  var g = Q(c, d, _);
                  isFinite(g) &&
                    (g > 0
                      ? (d = (Math.floor(d / g) + 1) * g)
                      : g < 0 && (d = (Math.ceil(d * -g) + 1) / -g));
                } else m.pop();
            }
            for (var h = m.length; m[0] <= c; ) (m.shift(), --h);
            for (; m[h - 1] > d; ) (m.pop(), --h);
            var y = new Array(h + 1),
              C;
            for (o = 0; o <= h; ++o)
              ((C = y[o] = []),
                (C.x0 = o > 0 ? m[o - 1] : c),
                (C.x1 = o < h ? m[o] : d));
            for (o = 0; o < a; ++o)
              ((i = s[o]), c <= i && i <= d && y[l(m, i, 0, h)].push(r[o]));
            return y;
          }
          return (
            (r.value = function (t) {
              return arguments.length
                ? ((e = typeof t == "function" ? t : H(t)), r)
                : e;
            }),
            (r.domain = function (e) {
              return arguments.length
                ? ((t = typeof e == "function" ? e : H([e[0], e[1]])), r)
                : t;
            }),
            (r.thresholds = function (e) {
              return arguments.length
                ? ((n =
                    typeof e == "function"
                      ? e
                      : Array.isArray(e)
                        ? H(V.call(e))
                        : H(e)),
                  r)
                : n;
            }),
            r
          );
        }
        function ee(e, t) {
          var n;
          if (t === void 0)
            for (var r of e)
              r != null && (n < r || (n === void 0 && r >= r)) && (n = r);
          else {
            var o = -1;
            for (var a of e)
              (a = t(a, ++o, e)) != null &&
                (n < a || (n === void 0 && a >= a)) &&
                (n = a);
          }
          return n;
        }
        function te(e, t) {
          var n;
          if (t === void 0)
            for (var r of e)
              r != null && (n > r || (n === void 0 && r >= r)) && (n = r);
          else {
            var o = -1;
            for (var a of e)
              (a = t(a, ++o, e)) != null &&
                (n > a || (n === void 0 && a >= a)) &&
                (n = a);
          }
          return n;
        }
        function ne(e, n, r, o, a) {
          for (
            r === void 0 && (r = 0),
              o === void 0 && (o = e.length - 1),
              a === void 0 && (a = t);
            o > r;
          ) {
            if (o - r > 600) {
              var i = o - r + 1,
                l = n - r + 1,
                s = Math.log(i),
                u = 0.5 * Math.exp((2 * s) / 3),
                c =
                  0.5 *
                  Math.sqrt((s * u * (i - u)) / i) *
                  (l - i / 2 < 0 ? -1 : 1),
                d = Math.max(r, Math.floor(n - (l * u) / i + c)),
                m = Math.min(o, Math.floor(n + ((i - l) * u) / i + c));
              ne(e, n, d, m, a);
            }
            var p = e[n],
              _ = r,
              f = o;
            for (re(e, r, n), a(e[o], p) > 0 && re(e, r, o); _ < f; ) {
              for (re(e, _, f), ++_, --f; a(e[_], p) < 0; ) ++_;
              for (; a(e[f], p) > 0; ) --f;
            }
            (a(e[r], p) === 0 ? re(e, r, f) : (++f, re(e, f, o)),
              f <= n && (r = f + 1),
              n <= f && (o = f - 1));
          }
          return e;
        }
        function re(e, t, n) {
          var r = e[t];
          ((e[t] = e[n]), (e[n] = r));
        }
        function oe(e, t, n) {
          if (((e = Float64Array.from(a(e, n))), !!(r = e.length))) {
            if ((t = +t) <= 0 || r < 2) return te(e);
            if (t >= 1) return ee(e);
            var r,
              o = (r - 1) * t,
              i = Math.floor(o),
              l = ee(ne(e, i).subarray(0, i + 1)),
              s = te(e.subarray(i + 1));
            return l + (s - l) * (o - i);
          }
        }
        function ae(e, t, n) {
          if ((n === void 0 && (n = o), !!(r = e.length))) {
            if ((t = +t) <= 0 || r < 2) return +n(e[0], 0, e);
            if (t >= 1) return +n(e[r - 1], r - 1, e);
            var r,
              a = (r - 1) * t,
              i = Math.floor(a),
              l = +n(e[i], i, e),
              s = +n(e[i + 1], i + 1, e);
            return l + (s - l) * (a - i);
          }
        }
        function ie(e, t, n) {
          return Math.ceil(
            (n - t) /
              (2 * (oe(e, 0.75) - oe(e, 0.25)) * Math.pow(c(e), -1 / 3)),
          );
        }
        function le(e, t, n) {
          return Math.ceil((n - t) / (3.5 * C(e) * Math.pow(c(e), -1 / 3)));
        }
        function se(e, t) {
          var n,
            r = -1,
            o = -1;
          if (t === void 0)
            for (var a of e)
              (++o,
                a != null &&
                  (n < a || (n === void 0 && a >= a)) &&
                  ((n = a), (r = o)));
          else
            for (var i of e)
              (i = t(i, ++o, e)) != null &&
                (n < i || (n === void 0 && i >= i)) &&
                ((n = i), (r = o));
          return r;
        }
        function ue(e, t) {
          var n = 0,
            r = 0;
          if (t === void 0)
            for (var o of e) o != null && (o = +o) >= o && (++n, (r += o));
          else {
            var a = -1;
            for (var i of e)
              (i = t(i, ++a, e)) != null && (i = +i) >= i && (++n, (r += i));
          }
          if (n) return r / n;
        }
        function ce(e, t) {
          return oe(e, 0.5, t);
        }
        function* de(e) {
          for (var t of e) yield* t;
        }
        function me(e) {
          return Array.from(de(e));
        }
        function pe(e, t) {
          var n,
            r = -1,
            o = -1;
          if (t === void 0)
            for (var a of e)
              (++o,
                a != null &&
                  (n > a || (n === void 0 && a >= a)) &&
                  ((n = a), (r = o)));
          else
            for (var i of e)
              (i = t(i, ++o, e)) != null &&
                (n > i || (n === void 0 && i >= i)) &&
                ((n = i), (r = o));
          return r;
        }
        function _e(e, t) {
          t === void 0 && (t = fe);
          var n = [],
            r,
            o = !1;
          for (var a of e) (o && n.push(t(r, a)), (r = a), (o = !0));
          return n;
        }
        function fe(e, t) {
          return [e, t];
        }
        function ge(e, t, n) {
          ((e = +e),
            (t = +t),
            (n =
              (o = arguments.length) < 2
                ? ((t = e), (e = 0), 1)
                : o < 3
                  ? 1
                  : +n));
          for (
            var r = -1,
              o = Math.max(0, Math.ceil((t - e) / n)) | 0,
              a = new Array(o);
            ++r < o;
          )
            a[r] = e + r * n;
          return a;
        }
        function he(e, n) {
          n === void 0 && (n = t);
          var r,
            o = !1;
          if (n.length === 1) {
            var a;
            for (var i of e) {
              var l = n(i);
              (o ? t(l, a) < 0 : t(l, l) === 0) && ((r = i), (a = l), (o = !0));
            }
          } else
            for (var s of e)
              (o ? n(s, r) < 0 : n(s, s) === 0) && ((r = s), (o = !0));
          return r;
        }
        function ye(e, n) {
          if ((n === void 0 && (n = t), n.length === 1)) return pe(e, n);
          var r,
            o = -1,
            a = -1;
          for (var i of e)
            (++a, (o < 0 ? n(i, i) === 0 : n(i, r) < 0) && ((r = i), (o = a)));
          return o;
        }
        function Ce(e, n) {
          n === void 0 && (n = t);
          var r,
            o = !1;
          if (n.length === 1) {
            var a;
            for (var i of e) {
              var l = n(i);
              (o ? t(l, a) > 0 : t(l, l) === 0) && ((r = i), (a = l), (o = !0));
            }
          } else
            for (var s of e)
              (o ? n(s, r) > 0 : n(s, s) === 0) && ((r = s), (o = !0));
          return r;
        }
        function be(e, n) {
          if ((n === void 0 && (n = t), n.length === 1)) return se(e, n);
          var r,
            o = -1,
            a = -1;
          for (var i of e)
            (++a, (o < 0 ? n(i, i) === 0 : n(i, r) > 0) && ((r = i), (o = a)));
          return o;
        }
        function ve(e, t) {
          var n = ye(e, t);
          return n < 0 ? void 0 : n;
        }
        var Se = Re(Math.random);
        function Re(e) {
          return function (n, r, o) {
            (r === void 0 && (r = 0), o === void 0 && (o = n.length));
            for (var t = o - (r = +r); t; ) {
              var a = (e() * t--) | 0,
                i = n[t + r];
              ((n[t + r] = n[a + r]), (n[a + r] = i));
            }
            return n;
          };
        }
        function Le(e, t) {
          var n = 0;
          if (t === void 0) for (var r of e) (r = +r) && (n += r);
          else {
            var o = -1;
            for (var a of e) (a = +t(a, ++o, e)) && (n += a);
          }
          return n;
        }
        function Ee(e) {
          if (!(a = e.length)) return [];
          for (var t = -1, n = te(e, ke), r = new Array(n); ++t < n; )
            for (var o = -1, a, i = (r[t] = new Array(a)); ++o < a; )
              i[o] = e[o][t];
          return r;
        }
        function ke(e) {
          return e.length;
        }
        function Ie() {
          return Ee(arguments);
        }
        function Te(e, t) {
          if (typeof t != "function")
            throw new TypeError("test is not a function");
          var n = -1;
          for (var r of e) if (!t(r, ++n, e)) return !1;
          return !0;
        }
        function De(e, t) {
          if (typeof t != "function")
            throw new TypeError("test is not a function");
          var n = -1;
          for (var r of e) if (t(r, ++n, e)) return !0;
          return !1;
        }
        function xe(e, t) {
          if (typeof t != "function")
            throw new TypeError("test is not a function");
          var n = [],
            r = -1;
          for (var o of e) t(o, ++r, e) && n.push(o);
          return n;
        }
        function $e(e, t) {
          if (
            typeof e[
              typeof Symbol == "function" ? Symbol.iterator : "@@iterator"
            ] != "function"
          )
            throw new TypeError("values is not iterable");
          if (typeof t != "function")
            throw new TypeError("mapper is not a function");
          return Array.from(e, function (n, r) {
            return t(n, r, e);
          });
        }
        function Pe(e, t, n) {
          if (typeof t != "function")
            throw new TypeError("reducer is not a function");
          var r =
              e[typeof Symbol == "function" ? Symbol.iterator : "@@iterator"](),
            o,
            a,
            i = -1;
          if (arguments.length < 3) {
            var l = r.next();
            if (((o = l.done), (n = l.value), o)) return;
            ++i;
          }
          for (; (s = r.next()), (o = s.done), (a = s.value), !o; ) {
            var s;
            n = t(n, a, ++i, e);
          }
          return n;
        }
        function Ne(e) {
          if (
            typeof e[
              typeof Symbol == "function" ? Symbol.iterator : "@@iterator"
            ] != "function"
          )
            throw new TypeError("values is not iterable");
          return Array.from(e).reverse();
        }
        function Me(e) {
          e = new Set(e);
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          for (var o of n) for (var a of o) e.delete(a);
          return e;
        }
        function we(e, t) {
          var n =
              t[typeof Symbol == "function" ? Symbol.iterator : "@@iterator"](),
            r = new Set();
          for (var o of e) {
            if (r.has(o)) return !1;
            for (
              var a = void 0, i = void 0;
              (l = n.next()), (a = l.value), (i = l.done), l;
            ) {
              var l;
              if (i) break;
              if (Object.is(o, a)) return !1;
              r.add(a);
            }
          }
          return !0;
        }
        function Ae(e) {
          return e instanceof Set ? e : new Set(e);
        }
        function Fe(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          ((e = new Set(e)), (n = n.map(Ae)));
          e: for (var o of e)
            for (var a of n)
              if (!a.has(o)) {
                e.delete(o);
                continue e;
              }
          return e;
        }
        function Oe(e, t) {
          var n =
              e[typeof Symbol == "function" ? Symbol.iterator : "@@iterator"](),
            r = new Set();
          for (var o of t)
            if (!r.has(o))
              for (
                var a = void 0, i = void 0;
                (l = n.next()), (a = l.value), (i = l.done), l;
              ) {
                var l;
                if (i) return !1;
                if ((r.add(a), Object.is(o, a))) break;
              }
          return !0;
        }
        function Be(e, t) {
          return Oe(t, e);
        }
        function We() {
          for (
            var e = new Set(), t = arguments.length, n = new Array(t), r = 0;
            r < t;
            r++
          )
            n[r] = arguments[r];
          for (var o of n) for (var a of o) e.add(a);
          return e;
        }
        ((e.Adder = v),
          (e.InternMap = L),
          (e.InternSet = E),
          (e.ascending = t),
          (e.bin = Z),
          (e.bisect = l),
          (e.bisectCenter = u),
          (e.bisectLeft = s),
          (e.bisectRight = l),
          (e.bisector = n),
          (e.count = c),
          (e.cross = f),
          (e.cumsum = g),
          (e.descending = h),
          (e.deviation = C),
          (e.difference = Me),
          (e.disjoint = we),
          (e.every = Te),
          (e.extent = b),
          (e.fcumsum = R),
          (e.filter = xe),
          (e.fsum = S),
          (e.greatest = Ce),
          (e.greatestIndex = be),
          (e.group = $),
          (e.groupSort = q),
          (e.groups = P),
          (e.histogram = Z),
          (e.index = w),
          (e.indexes = A),
          (e.intersection = Fe),
          (e.least = he),
          (e.leastIndex = ye),
          (e.map = $e),
          (e.max = ee),
          (e.maxIndex = se),
          (e.mean = ue),
          (e.median = ce),
          (e.merge = me),
          (e.min = te),
          (e.minIndex = pe),
          (e.nice = Y),
          (e.pairs = _e),
          (e.permute = B),
          (e.quantile = oe),
          (e.quantileSorted = ae),
          (e.quickselect = ne),
          (e.range = ge),
          (e.reduce = Pe),
          (e.reverse = Ne),
          (e.rollup = N),
          (e.rollups = M),
          (e.scan = ve),
          (e.shuffle = Se),
          (e.shuffler = Re),
          (e.some = De),
          (e.sort = W),
          (e.subset = Be),
          (e.sum = Le),
          (e.superset = Oe),
          (e.thresholdFreedmanDiaconis = ie),
          (e.thresholdScott = le),
          (e.thresholdSturges = J),
          (e.tickIncrement = Q),
          (e.tickStep = X),
          (e.ticks = K),
          (e.transpose = Ee),
          (e.union = We),
          (e.variance = y),
          (e.zip = Ie),
          Object.defineProperty(e, "__esModule", { value: !0 }));
      });
    }
    var c = !1;
    function d() {
      return (c || ((c = !0), u()), l.exports);
    }
    function m(e) {
      switch (e) {
        case void 0:
          return d();
      }
    }
    a.exports = m;
  },
  null,
);
