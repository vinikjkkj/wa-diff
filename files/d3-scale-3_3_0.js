__d(
  "d3-scale-3.3.0",
  [
    "d3-array-2.12.1",
    "d3-format-2.0.0",
    "d3-interpolate-2.0.1",
    "d3-time-2.1.1",
    "d3-time-format-3.0.0",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e && typeof e == "object" && "default" in e ? e.default : e;
    }
    var l = e(n("d3-array-2.12.1")),
      s = e(n("d3-interpolate-2.0.1")),
      u = e(n("d3-format-2.0.0")),
      c = e(n("d3-time-2.1.1")),
      d = e(n("d3-time-format-3.0.0")),
      m = {},
      p = { exports: m },
      _;
    function f() {
      (function (e, t) {
        typeof m == "object" && typeof p != "undefined"
          ? t(m, l(), s(), u(), c(), d())
          : typeof _ == "function" && _.amd
            ? _(
                [
                  "exports",
                  "d3-array",
                  "d3-interpolate",
                  "d3-format",
                  "d3-time",
                  "d3-time-format",
                ],
                t,
              )
            : ((e = typeof globalThis != "undefined" ? globalThis : e || self),
              t((e.d3 = e.d3 || {}), e.d3, e.d3, e.d3, e.d3, e.d3));
      })(this, function (e, t, n, r, o, a) {
        function i(e, t) {
          switch (arguments.length) {
            case 0:
              break;
            case 1:
              this.range(e);
              break;
            default:
              this.range(t).domain(e);
              break;
          }
          return this;
        }
        function l(e, t) {
          switch (arguments.length) {
            case 0:
              break;
            case 1: {
              typeof e == "function" ? this.interpolator(e) : this.range(e);
              break;
            }
            default: {
              (this.domain(e),
                typeof t == "function" ? this.interpolator(t) : this.range(t));
              break;
            }
          }
          return this;
        }
        var s = Symbol("implicit");
        function u() {
          var e = new Map(),
            t = [],
            n = [],
            r = s;
          function o(o) {
            var a = o + "",
              i = e.get(a);
            if (!i) {
              if (r !== s) return r;
              e.set(a, (i = t.push(o)));
            }
            return n[(i - 1) % n.length];
          }
          return (
            (o.domain = function (n) {
              if (!arguments.length) return t.slice();
              ((t = []), (e = new Map()));
              for (var r of n) {
                var a = r + "";
                e.has(a) || e.set(a, t.push(r));
              }
              return o;
            }),
            (o.range = function (e) {
              return arguments.length ? ((n = Array.from(e)), o) : n.slice();
            }),
            (o.unknown = function (e) {
              return arguments.length ? ((r = e), o) : r;
            }),
            (o.copy = function () {
              return u(t, n).unknown(r);
            }),
            i.apply(o, arguments),
            o
          );
        }
        function c() {
          var e = u().unknown(void 0),
            n = e.domain,
            r = e.range,
            o = 0,
            a = 1,
            l,
            s,
            d = !1,
            m = 0,
            p = 0,
            _ = 0.5;
          delete e.unknown;
          function f() {
            var e = n().length,
              i = a < o,
              u = i ? a : o,
              c = i ? o : a;
            ((l = (c - u) / Math.max(1, e - m + p * 2)),
              d && (l = Math.floor(l)),
              (u += (c - u - l * (e - m)) * _),
              (s = l * (1 - m)),
              d && ((u = Math.round(u)), (s = Math.round(s))));
            var f = t.range(e).map(function (e) {
              return u + l * e;
            });
            return r(i ? f.reverse() : f);
          }
          return (
            (e.domain = function (e) {
              return arguments.length ? (n(e), f()) : n();
            }),
            (e.range = function (e) {
              return arguments.length
                ? ((o = e[0]), (a = e[1]), (o = +o), (a = +a), f())
                : [o, a];
            }),
            (e.rangeRound = function (e) {
              return (
                (o = e[0]),
                (a = e[1]),
                (o = +o),
                (a = +a),
                (d = !0),
                f()
              );
            }),
            (e.bandwidth = function () {
              return s;
            }),
            (e.step = function () {
              return l;
            }),
            (e.round = function (e) {
              return arguments.length ? ((d = !!e), f()) : d;
            }),
            (e.padding = function (e) {
              return arguments.length ? ((m = Math.min(1, (p = +e))), f()) : m;
            }),
            (e.paddingInner = function (e) {
              return arguments.length ? ((m = Math.min(1, e)), f()) : m;
            }),
            (e.paddingOuter = function (e) {
              return arguments.length ? ((p = +e), f()) : p;
            }),
            (e.align = function (e) {
              return arguments.length
                ? ((_ = Math.max(0, Math.min(1, e))), f())
                : _;
            }),
            (e.copy = function () {
              return c(n(), [o, a])
                .round(d)
                .paddingInner(m)
                .paddingOuter(p)
                .align(_);
            }),
            i.apply(f(), arguments)
          );
        }
        function d(e) {
          var t = e.copy;
          return (
            (e.padding = e.paddingOuter),
            delete e.paddingInner,
            delete e.paddingOuter,
            (e.copy = function () {
              return d(t());
            }),
            e
          );
        }
        function m() {
          return d(c.apply(null, arguments).paddingInner(1));
        }
        function p(e) {
          return function () {
            return e;
          };
        }
        function _(e) {
          return +e;
        }
        var f = [0, 1];
        function g(e) {
          return e;
        }
        function h(e, t) {
          return (t -= e = +e)
            ? function (n) {
                return (n - e) / t;
              }
            : p(isNaN(t) ? NaN : 0.5);
        }
        function y(e, t) {
          var n;
          return (
            e > t && ((n = e), (e = t), (t = n)),
            function (n) {
              return Math.max(e, Math.min(t, n));
            }
          );
        }
        function C(e, t, n) {
          var r = e[0],
            o = e[1],
            a = t[0],
            i = t[1];
          return (
            o < r
              ? ((r = h(o, r)), (a = n(i, a)))
              : ((r = h(r, o)), (a = n(a, i))),
            function (e) {
              return a(r(e));
            }
          );
        }
        function b(e, n, r) {
          var o = Math.min(e.length, n.length) - 1,
            a = new Array(o),
            i = new Array(o),
            l = -1;
          for (
            e[o] < e[0] &&
            ((e = e.slice().reverse()), (n = n.slice().reverse()));
            ++l < o;
          )
            ((a[l] = h(e[l], e[l + 1])), (i[l] = r(n[l], n[l + 1])));
          return function (n) {
            var r = t.bisect(e, n, 1, o) - 1;
            return i[r](a[r](n));
          };
        }
        function v(e, t) {
          return t
            .domain(e.domain())
            .range(e.range())
            .interpolate(e.interpolate())
            .clamp(e.clamp())
            .unknown(e.unknown());
        }
        function S() {
          var e = f,
            t = f,
            r = n.interpolate,
            o,
            a,
            i,
            l = g,
            s,
            u,
            c;
          function d() {
            var n = Math.min(e.length, t.length);
            return (
              l !== g && (l = y(e[0], e[n - 1])),
              (s = n > 2 ? b : C),
              (u = c = null),
              m
            );
          }
          function m(n) {
            return n == null || isNaN((n = +n))
              ? i
              : (u || (u = s(e.map(o), t, r)))(o(l(n)));
          }
          return (
            (m.invert = function (r) {
              return l(a((c || (c = s(t, e.map(o), n.interpolateNumber)))(r)));
            }),
            (m.domain = function (t) {
              return arguments.length
                ? ((e = Array.from(t, _)), d())
                : e.slice();
            }),
            (m.range = function (e) {
              return arguments.length ? ((t = Array.from(e)), d()) : t.slice();
            }),
            (m.rangeRound = function (e) {
              return ((t = Array.from(e)), (r = n.interpolateRound), d());
            }),
            (m.clamp = function (e) {
              return arguments.length ? ((l = e ? !0 : g), d()) : l !== g;
            }),
            (m.interpolate = function (e) {
              return arguments.length ? ((r = e), d()) : r;
            }),
            (m.unknown = function (e) {
              return arguments.length ? ((i = e), m) : i;
            }),
            function (e, t) {
              return ((o = e), (a = t), d());
            }
          );
        }
        function R() {
          return S()(g, g);
        }
        function L(e, n, o, a) {
          var i = t.tickStep(e, n, o),
            l;
          switch (((a = r.formatSpecifier(a == null ? ",f" : a)), a.type)) {
            case "s": {
              var s = Math.max(Math.abs(e), Math.abs(n));
              return (
                a.precision == null &&
                  !isNaN((l = r.precisionPrefix(i, s))) &&
                  (a.precision = l),
                r.formatPrefix(a, s)
              );
            }
            case "":
            case "e":
            case "g":
            case "p":
            case "r": {
              a.precision == null &&
                !isNaN(
                  (l = r.precisionRound(i, Math.max(Math.abs(e), Math.abs(n)))),
                ) &&
                (a.precision = l - (a.type === "e"));
              break;
            }
            case "f":
            case "%": {
              a.precision == null &&
                !isNaN((l = r.precisionFixed(i))) &&
                (a.precision = l - (a.type === "%") * 2);
              break;
            }
          }
          return r.format(a);
        }
        function E(e) {
          var n = e.domain;
          return (
            (e.ticks = function (e) {
              var r = n();
              return t.ticks(r[0], r[r.length - 1], e == null ? 10 : e);
            }),
            (e.tickFormat = function (e, t) {
              var r = n();
              return L(r[0], r[r.length - 1], e == null ? 10 : e, t);
            }),
            (e.nice = function (r) {
              r == null && (r = 10);
              var o = n(),
                a = 0,
                i = o.length - 1,
                l = o[a],
                s = o[i],
                u,
                c,
                d = 10;
              for (
                s < l && ((c = l), (l = s), (s = c), (c = a), (a = i), (i = c));
                d-- > 0;
              ) {
                if (((c = t.tickIncrement(l, s, r)), c === u))
                  return ((o[a] = l), (o[i] = s), n(o));
                if (c > 0)
                  ((l = Math.floor(l / c) * c), (s = Math.ceil(s / c) * c));
                else if (c < 0)
                  ((l = Math.ceil(l * c) / c), (s = Math.floor(s * c) / c));
                else break;
                u = c;
              }
              return e;
            }),
            e
          );
        }
        function k() {
          var e = R();
          return (
            (e.copy = function () {
              return v(e, k());
            }),
            i.apply(e, arguments),
            E(e)
          );
        }
        function I(e) {
          var t;
          function n(e) {
            return e == null || isNaN((e = +e)) ? t : e;
          }
          return (
            (n.invert = n),
            (n.domain = n.range =
              function (t) {
                return arguments.length
                  ? ((e = Array.from(t, _)), n)
                  : e.slice();
              }),
            (n.unknown = function (e) {
              return arguments.length ? ((t = e), n) : t;
            }),
            (n.copy = function () {
              return I(e).unknown(t);
            }),
            (e = arguments.length ? Array.from(e, _) : [0, 1]),
            E(n)
          );
        }
        function T(e, t) {
          e = e.slice();
          var n = 0,
            r = e.length - 1,
            o = e[n],
            a = e[r],
            i;
          return (
            a < o && ((i = n), (n = r), (r = i), (i = o), (o = a), (a = i)),
            (e[n] = t.floor(o)),
            (e[r] = t.ceil(a)),
            e
          );
        }
        function D(e) {
          return Math.log(e);
        }
        function x(e) {
          return Math.exp(e);
        }
        function $(e) {
          return -Math.log(-e);
        }
        function P(e) {
          return -Math.exp(-e);
        }
        function N(e) {
          return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
        }
        function M(e) {
          return e === 10
            ? N
            : e === Math.E
              ? Math.exp
              : function (t) {
                  return Math.pow(e, t);
                };
        }
        function w(e) {
          return e === Math.E
            ? Math.log
            : (e === 10 && Math.log10) ||
                (e === 2 && Math.log2) ||
                ((e = Math.log(e)),
                function (t) {
                  return Math.log(t) / e;
                });
        }
        function A(e) {
          return function (t) {
            return -e(-t);
          };
        }
        function F(e) {
          var n = e(D, x),
            o = n.domain,
            a = 10,
            i,
            l;
          function s() {
            return (
              (i = w(a)),
              (l = M(a)),
              o()[0] < 0 ? ((i = A(i)), (l = A(l)), e($, P)) : e(D, x),
              n
            );
          }
          return (
            (n.base = function (e) {
              return arguments.length ? ((a = +e), s()) : a;
            }),
            (n.domain = function (e) {
              return arguments.length ? (o(e), s()) : o();
            }),
            (n.ticks = function (e) {
              var n = o(),
                r = n[0],
                s = n[n.length - 1],
                u;
              (u = s < r) && ((c = r), (r = s), (s = c));
              var c = i(r),
                d = i(s),
                m,
                p,
                _,
                f = e == null ? 10 : +e,
                g = [];
              if (!(a % 1) && d - c < f) {
                if (((c = Math.floor(c)), (d = Math.ceil(d)), r > 0)) {
                  for (; c <= d; ++c)
                    for (p = 1, m = l(c); p < a; ++p)
                      if (((_ = m * p), !(_ < r))) {
                        if (_ > s) break;
                        g.push(_);
                      }
                } else
                  for (; c <= d; ++c)
                    for (p = a - 1, m = l(c); p >= 1; --p)
                      if (((_ = m * p), !(_ < r))) {
                        if (_ > s) break;
                        g.push(_);
                      }
                g.length * 2 < f && (g = t.ticks(r, s, f));
              } else g = t.ticks(c, d, Math.min(d - c, f)).map(l);
              return u ? g.reverse() : g;
            }),
            (n.tickFormat = function (e, t) {
              if (
                (t == null && (t = a === 10 ? ".0e" : ","),
                typeof t != "function" && (t = r.format(t)),
                e === 1 / 0)
              )
                return t;
              e == null && (e = 10);
              var o = Math.max(1, (a * e) / n.ticks().length);
              return function (e) {
                var n = e / l(Math.round(i(e)));
                return (n * a < a - 0.5 && (n *= a), n <= o ? t(e) : "");
              };
            }),
            (n.nice = function () {
              return o(
                T(o(), {
                  floor: function (t) {
                    return l(Math.floor(i(t)));
                  },
                  ceil: function (t) {
                    return l(Math.ceil(i(t)));
                  },
                }),
              );
            }),
            n
          );
        }
        function O() {
          var e = F(S()).domain([1, 10]);
          return (
            (e.copy = function () {
              return v(e, O()).base(e.base());
            }),
            i.apply(e, arguments),
            e
          );
        }
        function B(e) {
          return function (t) {
            return Math.sign(t) * Math.log1p(Math.abs(t / e));
          };
        }
        function W(e) {
          return function (t) {
            return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
          };
        }
        function q(e) {
          var t = 1,
            n = e(B(t), W(t));
          return (
            (n.constant = function (n) {
              return arguments.length ? e(B((t = +n)), W(t)) : t;
            }),
            E(n)
          );
        }
        function U() {
          var e = q(S());
          return (
            (e.copy = function () {
              return v(e, U()).constant(e.constant());
            }),
            i.apply(e, arguments)
          );
        }
        function V(e) {
          return function (t) {
            return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
          };
        }
        function H(e) {
          return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
        }
        function G(e) {
          return e < 0 ? -e * e : e * e;
        }
        function z(e) {
          var t = e(g, g),
            n = 1;
          function r() {
            return n === 1 ? e(g, g) : n === 0.5 ? e(H, G) : e(V(n), V(1 / n));
          }
          return (
            (t.exponent = function (e) {
              return arguments.length ? ((n = +e), r()) : n;
            }),
            E(t)
          );
        }
        function j() {
          var e = z(S());
          return (
            (e.copy = function () {
              return v(e, j()).exponent(e.exponent());
            }),
            i.apply(e, arguments),
            e
          );
        }
        function K() {
          return j.apply(null, arguments).exponent(0.5);
        }
        function Q(e) {
          return Math.sign(e) * e * e;
        }
        function X(e) {
          return Math.sign(e) * Math.sqrt(Math.abs(e));
        }
        function Y() {
          var e = R(),
            t = [0, 1],
            n = !1,
            r;
          function o(t) {
            var o = X(e(t));
            return isNaN(o) ? r : n ? Math.round(o) : o;
          }
          return (
            (o.invert = function (t) {
              return e.invert(Q(t));
            }),
            (o.domain = function (t) {
              return arguments.length ? (e.domain(t), o) : e.domain();
            }),
            (o.range = function (n) {
              return arguments.length
                ? (e.range((t = Array.from(n, _)).map(Q)), o)
                : t.slice();
            }),
            (o.rangeRound = function (e) {
              return o.range(e).round(!0);
            }),
            (o.round = function (e) {
              return arguments.length ? ((n = !!e), o) : n;
            }),
            (o.clamp = function (t) {
              return arguments.length ? (e.clamp(t), o) : e.clamp();
            }),
            (o.unknown = function (e) {
              return arguments.length ? ((r = e), o) : r;
            }),
            (o.copy = function () {
              return Y(e.domain(), t).round(n).clamp(e.clamp()).unknown(r);
            }),
            i.apply(o, arguments),
            E(o)
          );
        }
        function J() {
          var e = [],
            n = [],
            r = [],
            o;
          function a() {
            var o = 0,
              a = Math.max(1, n.length);
            for (r = new Array(a - 1); ++o < a; )
              r[o - 1] = t.quantileSorted(e, o / a);
            return l;
          }
          function l(e) {
            return e == null || isNaN((e = +e)) ? o : n[t.bisect(r, e)];
          }
          return (
            (l.invertExtent = function (t) {
              var o = n.indexOf(t);
              return o < 0
                ? [NaN, NaN]
                : [
                    o > 0 ? r[o - 1] : e[0],
                    o < r.length ? r[o] : e[e.length - 1],
                  ];
            }),
            (l.domain = function (n) {
              if (!arguments.length) return e.slice();
              e = [];
              for (var r of n) r != null && !isNaN((r = +r)) && e.push(r);
              return (e.sort(t.ascending), a());
            }),
            (l.range = function (e) {
              return arguments.length ? ((n = Array.from(e)), a()) : n.slice();
            }),
            (l.unknown = function (e) {
              return arguments.length ? ((o = e), l) : o;
            }),
            (l.quantiles = function () {
              return r.slice();
            }),
            (l.copy = function () {
              return J().domain(e).range(n).unknown(o);
            }),
            i.apply(l, arguments)
          );
        }
        function Z() {
          var e = 0,
            n = 1,
            r = 1,
            o = [0.5],
            a = [0, 1],
            l;
          function s(e) {
            return e != null && e <= e ? a[t.bisect(o, e, 0, r)] : l;
          }
          function u() {
            var t = -1;
            for (o = new Array(r); ++t < r; )
              o[t] = ((t + 1) * n - (t - r) * e) / (r + 1);
            return s;
          }
          return (
            (s.domain = function (t) {
              return arguments.length
                ? ((e = t[0]), (n = t[1]), (e = +e), (n = +n), u())
                : [e, n];
            }),
            (s.range = function (e) {
              return arguments.length
                ? ((r = (a = Array.from(e)).length - 1), u())
                : a.slice();
            }),
            (s.invertExtent = function (t) {
              var i = a.indexOf(t);
              return i < 0
                ? [NaN, NaN]
                : i < 1
                  ? [e, o[0]]
                  : i >= r
                    ? [o[r - 1], n]
                    : [o[i - 1], o[i]];
            }),
            (s.unknown = function (e) {
              return (arguments.length && (l = e), s);
            }),
            (s.thresholds = function () {
              return o.slice();
            }),
            (s.copy = function () {
              return Z().domain([e, n]).range(a).unknown(l);
            }),
            i.apply(E(s), arguments)
          );
        }
        function ee() {
          var e = [0.5],
            n = [0, 1],
            r,
            o = 1;
          function a(a) {
            return a != null && a <= a ? n[t.bisect(e, a, 0, o)] : r;
          }
          return (
            (a.domain = function (t) {
              return arguments.length
                ? ((e = Array.from(t)),
                  (o = Math.min(e.length, n.length - 1)),
                  a)
                : e.slice();
            }),
            (a.range = function (t) {
              return arguments.length
                ? ((n = Array.from(t)),
                  (o = Math.min(e.length, n.length - 1)),
                  a)
                : n.slice();
            }),
            (a.invertExtent = function (t) {
              var r = n.indexOf(t);
              return [e[r - 1], e[r]];
            }),
            (a.unknown = function (e) {
              return arguments.length ? ((r = e), a) : r;
            }),
            (a.copy = function () {
              return ee().domain(e).range(n).unknown(r);
            }),
            i.apply(a, arguments)
          );
        }
        function te(e) {
          return new Date(e);
        }
        function ne(e) {
          return e instanceof Date ? +e : +new Date(+e);
        }
        function re(e, t, n, r, o, a, i, l, s, u) {
          var c = R(),
            d = c.invert,
            m = c.domain,
            p = u(".%L"),
            _ = u(":%S"),
            f = u("%I:%M"),
            g = u("%I %p"),
            h = u("%a %d"),
            y = u("%b %d"),
            C = u("%B"),
            b = u("%Y");
          function S(e) {
            return (
              s(e) < e
                ? p
                : l(e) < e
                  ? _
                  : i(e) < e
                    ? f
                    : a(e) < e
                      ? g
                      : r(e) < e
                        ? o(e) < e
                          ? h
                          : y
                        : n(e) < e
                          ? C
                          : b
            )(e);
          }
          return (
            (c.invert = function (e) {
              return new Date(d(e));
            }),
            (c.domain = function (e) {
              return arguments.length ? m(Array.from(e, ne)) : m().map(te);
            }),
            (c.ticks = function (t) {
              var n = m();
              return e(n[0], n[n.length - 1], t == null ? 10 : t);
            }),
            (c.tickFormat = function (e, t) {
              return t == null ? S : u(t);
            }),
            (c.nice = function (e) {
              var n = m();
              return (
                (!e || typeof e.range != "function") &&
                  (e = t(n[0], n[n.length - 1], e == null ? 10 : e)),
                e ? m(T(n, e)) : c
              );
            }),
            (c.copy = function () {
              return v(c, re(e, t, n, r, o, a, i, l, s, u));
            }),
            c
          );
        }
        function oe() {
          return i.apply(
            re(
              o.timeTicks,
              o.timeTickInterval,
              o.timeYear,
              o.timeMonth,
              o.timeWeek,
              o.timeDay,
              o.timeHour,
              o.timeMinute,
              o.timeSecond,
              a.timeFormat,
            ).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]),
            arguments,
          );
        }
        function ae() {
          return i.apply(
            re(
              o.utcTicks,
              o.utcTickInterval,
              o.utcYear,
              o.utcMonth,
              o.utcWeek,
              o.utcDay,
              o.utcHour,
              o.utcMinute,
              o.utcSecond,
              a.utcFormat,
            ).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]),
            arguments,
          );
        }
        function ie() {
          var e = 0,
            t = 1,
            r,
            o,
            a,
            i,
            l = g,
            s = !1,
            u;
          function c(e) {
            return e == null || isNaN((e = +e))
              ? u
              : l(
                  a === 0
                    ? 0.5
                    : ((e = (i(e) - r) * a),
                      s ? Math.max(0, Math.min(1, e)) : e),
                );
          }
          ((c.domain = function (n) {
            return arguments.length
              ? ((e = n[0]),
                (t = n[1]),
                (r = i((e = +e))),
                (o = i((t = +t))),
                (a = r === o ? 0 : 1 / (o - r)),
                c)
              : [e, t];
          }),
            (c.clamp = function (e) {
              return arguments.length ? ((s = !!e), c) : s;
            }),
            (c.interpolator = function (e) {
              return arguments.length ? ((l = e), c) : l;
            }));
          function d(e) {
            return function (t) {
              var n, r;
              return arguments.length
                ? ((n = t[0]), (r = t[1]), (l = e(n, r)), c)
                : [l(0), l(1)];
            };
          }
          return (
            (c.range = d(n.interpolate)),
            (c.rangeRound = d(n.interpolateRound)),
            (c.unknown = function (e) {
              return arguments.length ? ((u = e), c) : u;
            }),
            function (n) {
              return (
                (i = n),
                (r = n(e)),
                (o = n(t)),
                (a = r === o ? 0 : 1 / (o - r)),
                c
              );
            }
          );
        }
        function le(e, t) {
          return t
            .domain(e.domain())
            .interpolator(e.interpolator())
            .clamp(e.clamp())
            .unknown(e.unknown());
        }
        function se() {
          var e = E(ie()(g));
          return (
            (e.copy = function () {
              return le(e, se());
            }),
            l.apply(e, arguments)
          );
        }
        function ue() {
          var e = F(ie()).domain([1, 10]);
          return (
            (e.copy = function () {
              return le(e, ue()).base(e.base());
            }),
            l.apply(e, arguments)
          );
        }
        function ce() {
          var e = q(ie());
          return (
            (e.copy = function () {
              return le(e, ce()).constant(e.constant());
            }),
            l.apply(e, arguments)
          );
        }
        function de() {
          var e = z(ie());
          return (
            (e.copy = function () {
              return le(e, de()).exponent(e.exponent());
            }),
            l.apply(e, arguments)
          );
        }
        function me() {
          return de.apply(null, arguments).exponent(0.5);
        }
        function pe() {
          var e = [],
            n = g;
          function r(r) {
            if (r != null && !isNaN((r = +r)))
              return n((t.bisect(e, r, 1) - 1) / (e.length - 1));
          }
          return (
            (r.domain = function (n) {
              if (!arguments.length) return e.slice();
              e = [];
              for (var o of n) o != null && !isNaN((o = +o)) && e.push(o);
              return (e.sort(t.ascending), r);
            }),
            (r.interpolator = function (e) {
              return arguments.length ? ((n = e), r) : n;
            }),
            (r.range = function () {
              return e.map(function (t, r) {
                return n(r / (e.length - 1));
              });
            }),
            (r.quantiles = function (n) {
              return Array.from({ length: n + 1 }, function (r, o) {
                return t.quantile(e, o / n);
              });
            }),
            (r.copy = function () {
              return pe(n).domain(e);
            }),
            l.apply(r, arguments)
          );
        }
        function _e() {
          var e = 0,
            t = 0.5,
            r = 1,
            o = 1,
            a,
            i,
            l,
            s,
            u,
            c = g,
            d,
            m = !1,
            p;
          function _(e) {
            return isNaN((e = +e))
              ? p
              : ((e = 0.5 + ((e = +d(e)) - i) * (o * e < o * i ? s : u)),
                c(m ? Math.max(0, Math.min(1, e)) : e));
          }
          ((_.domain = function (n) {
            return arguments.length
              ? ((e = n[0]),
                (t = n[1]),
                (r = n[2]),
                (a = d((e = +e))),
                (i = d((t = +t))),
                (l = d((r = +r))),
                (s = a === i ? 0 : 0.5 / (i - a)),
                (u = i === l ? 0 : 0.5 / (l - i)),
                (o = i < a ? -1 : 1),
                _)
              : [e, t, r];
          }),
            (_.clamp = function (e) {
              return arguments.length ? ((m = !!e), _) : m;
            }),
            (_.interpolator = function (e) {
              return arguments.length ? ((c = e), _) : c;
            }));
          function f(e) {
            return function (t) {
              var r, o, a;
              return arguments.length
                ? ((r = t[0]),
                  (o = t[1]),
                  (a = t[2]),
                  (c = n.piecewise(e, [r, o, a])),
                  _)
                : [c(0), c(0.5), c(1)];
            };
          }
          return (
            (_.range = f(n.interpolate)),
            (_.rangeRound = f(n.interpolateRound)),
            (_.unknown = function (e) {
              return arguments.length ? ((p = e), _) : p;
            }),
            function (n) {
              return (
                (d = n),
                (a = n(e)),
                (i = n(t)),
                (l = n(r)),
                (s = a === i ? 0 : 0.5 / (i - a)),
                (u = i === l ? 0 : 0.5 / (l - i)),
                (o = i < a ? -1 : 1),
                _
              );
            }
          );
        }
        function fe() {
          var e = E(_e()(g));
          return (
            (e.copy = function () {
              return le(e, fe());
            }),
            l.apply(e, arguments)
          );
        }
        function ge() {
          var e = F(_e()).domain([0.1, 1, 10]);
          return (
            (e.copy = function () {
              return le(e, ge()).base(e.base());
            }),
            l.apply(e, arguments)
          );
        }
        function he() {
          var e = q(_e());
          return (
            (e.copy = function () {
              return le(e, he()).constant(e.constant());
            }),
            l.apply(e, arguments)
          );
        }
        function ye() {
          var e = z(_e());
          return (
            (e.copy = function () {
              return le(e, ye()).exponent(e.exponent());
            }),
            l.apply(e, arguments)
          );
        }
        function Ce() {
          return ye.apply(null, arguments).exponent(0.5);
        }
        ((e.scaleBand = c),
          (e.scaleDiverging = fe),
          (e.scaleDivergingLog = ge),
          (e.scaleDivergingPow = ye),
          (e.scaleDivergingSqrt = Ce),
          (e.scaleDivergingSymlog = he),
          (e.scaleIdentity = I),
          (e.scaleImplicit = s),
          (e.scaleLinear = k),
          (e.scaleLog = O),
          (e.scaleOrdinal = u),
          (e.scalePoint = m),
          (e.scalePow = j),
          (e.scaleQuantile = J),
          (e.scaleQuantize = Z),
          (e.scaleRadial = Y),
          (e.scaleSequential = se),
          (e.scaleSequentialLog = ue),
          (e.scaleSequentialPow = de),
          (e.scaleSequentialQuantile = pe),
          (e.scaleSequentialSqrt = me),
          (e.scaleSequentialSymlog = ce),
          (e.scaleSqrt = K),
          (e.scaleSymlog = U),
          (e.scaleThreshold = ee),
          (e.scaleTime = oe),
          (e.scaleUtc = ae),
          (e.tickFormat = L),
          Object.defineProperty(e, "__esModule", { value: !0 }));
      });
    }
    var g = !1;
    function h() {
      return (g || ((g = !0), f()), p.exports);
    }
    function y(e) {
      switch (e) {
        case void 0:
          return h();
      }
    }
    a.exports = y;
  },
  null,
);
