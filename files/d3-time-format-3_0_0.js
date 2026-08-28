__d(
  "d3-time-format-3.0.0",
  ["d3-time-2.1.1"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e && typeof e == "object" && "default" in e ? e.default : e;
    }
    var l = e(n("d3-time-2.1.1")),
      s = {},
      u = { exports: s },
      c;
    function d() {
      (function (e, t) {
        typeof s == "object" && typeof u != "undefined"
          ? t(s, l())
          : typeof c == "function" && c.amd
            ? c(["exports", "d3-time"], t)
            : ((e = e || self), t((e.d3 = e.d3 || {}), e.d3));
      })(this, function (e, t) {
        function n(e) {
          if (0 <= e.y && e.y < 100) {
            var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
            return (t.setFullYear(e.y), t);
          }
          return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
        }
        function r(e) {
          if (0 <= e.y && e.y < 100) {
            var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
            return (t.setUTCFullYear(e.y), t);
          }
          return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
        }
        function o(e, t, n) {
          return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
        }
        function a(e) {
          var a = e.dateTime,
            l = e.date,
            s = e.time,
            u = e.periods,
            c = e.days,
            d = e.shortDays,
            G = e.months,
            de = e.shortMonths,
            Re = m(u),
            Le = p(u),
            Ee = m(c),
            ke = p(c),
            Ie = m(d),
            Te = p(d),
            De = m(G),
            xe = p(G),
            $e = m(de),
            Pe = p(de),
            Ne = {
              a: je,
              A: Ke,
              b: Qe,
              B: Xe,
              c: null,
              d: M,
              e: M,
              f: B,
              g: X,
              G: J,
              H: w,
              I: A,
              j: F,
              L: O,
              m: W,
              M: q,
              p: Ye,
              q: Je,
              Q: ve,
              s: Se,
              S: U,
              u: V,
              U: H,
              V: z,
              w: j,
              W: K,
              x: null,
              X: null,
              y: Q,
              Y: Y,
              Z: Z,
              "%": be,
            },
            Me = {
              a: Ze,
              A: et,
              b: tt,
              B: nt,
              c: null,
              d: ee,
              e: ee,
              f: ae,
              g: ge,
              G: ye,
              H: te,
              I: ne,
              j: re,
              L: oe,
              m: ie,
              M: le,
              p: rt,
              q: ot,
              Q: ve,
              s: Se,
              S: se,
              u: ue,
              U: ce,
              V: me,
              w: pe,
              W: _e,
              x: null,
              X: null,
              y: fe,
              Y: he,
              Z: Ce,
              "%": be,
            },
            we = {
              a: We,
              A: qe,
              b: Ue,
              B: Ve,
              c: He,
              d: L,
              e: L,
              f: x,
              g: b,
              G: C,
              H: k,
              I: k,
              j: E,
              L: D,
              m: R,
              M: I,
              p: Be,
              q: S,
              Q: P,
              s: N,
              S: T,
              u: f,
              U: g,
              V: h,
              w: _,
              W: y,
              x: Ge,
              X: ze,
              y: b,
              Y: C,
              Z: v,
              "%": $,
            };
          ((Ne.x = Ae(l, Ne)),
            (Ne.X = Ae(s, Ne)),
            (Ne.c = Ae(a, Ne)),
            (Me.x = Ae(l, Me)),
            (Me.X = Ae(s, Me)),
            (Me.c = Ae(a, Me)));
          function Ae(e, t) {
            return function (n) {
              var r = [],
                o = -1,
                a = 0,
                l = e.length,
                s,
                u,
                c;
              for (n instanceof Date || (n = new Date(+n)); ++o < l; )
                e.charCodeAt(o) === 37 &&
                  (r.push(e.slice(a, o)),
                  (u = i[(s = e.charAt(++o))]) != null
                    ? (s = e.charAt(++o))
                    : (u = s === "e" ? " " : "0"),
                  (c = t[s]) && (s = c(n, u)),
                  r.push(s),
                  (a = o + 1));
              return (r.push(e.slice(a, o)), r.join(""));
            };
          }
          function Fe(e, a) {
            return function (i) {
              var l = o(1900, void 0, 1),
                s = Oe(l, e, (i += ""), 0),
                u,
                c;
              if (s != i.length) return null;
              if ("Q" in l) return new Date(l.Q);
              if ("s" in l) return new Date(l.s * 1e3 + ("L" in l ? l.L : 0));
              if (
                (a && !("Z" in l) && (l.Z = 0),
                "p" in l && (l.H = (l.H % 12) + l.p * 12),
                l.m === void 0 && (l.m = "q" in l ? l.q : 0),
                "V" in l)
              ) {
                if (l.V < 1 || l.V > 53) return null;
                ("w" in l || (l.w = 1),
                  "Z" in l
                    ? ((u = r(o(l.y, 0, 1))),
                      (c = u.getUTCDay()),
                      (u =
                        c > 4 || c === 0
                          ? t.utcMonday.ceil(u)
                          : t.utcMonday(u)),
                      (u = t.utcDay.offset(u, (l.V - 1) * 7)),
                      (l.y = u.getUTCFullYear()),
                      (l.m = u.getUTCMonth()),
                      (l.d = u.getUTCDate() + ((l.w + 6) % 7)))
                    : ((u = n(o(l.y, 0, 1))),
                      (c = u.getDay()),
                      (u =
                        c > 4 || c === 0
                          ? t.timeMonday.ceil(u)
                          : t.timeMonday(u)),
                      (u = t.timeDay.offset(u, (l.V - 1) * 7)),
                      (l.y = u.getFullYear()),
                      (l.m = u.getMonth()),
                      (l.d = u.getDate() + ((l.w + 6) % 7))));
              } else
                ("W" in l || "U" in l) &&
                  ("w" in l || (l.w = "u" in l ? l.u % 7 : "W" in l ? 1 : 0),
                  (c =
                    "Z" in l
                      ? r(o(l.y, 0, 1)).getUTCDay()
                      : n(o(l.y, 0, 1)).getDay()),
                  (l.m = 0),
                  (l.d =
                    "W" in l
                      ? ((l.w + 6) % 7) + l.W * 7 - ((c + 5) % 7)
                      : l.w + l.U * 7 - ((c + 6) % 7)));
              return "Z" in l
                ? ((l.H += (l.Z / 100) | 0), (l.M += l.Z % 100), r(l))
                : n(l);
            };
          }
          function Oe(e, t, n, r) {
            for (var o = 0, a = t.length, l = n.length, s, u; o < a; ) {
              if (r >= l) return -1;
              if (((s = t.charCodeAt(o++)), s === 37)) {
                if (
                  ((s = t.charAt(o++)),
                  (u = we[s in i ? t.charAt(o++) : s]),
                  !u || (r = u(e, n, r)) < 0)
                )
                  return -1;
              } else if (s != n.charCodeAt(r++)) return -1;
            }
            return r;
          }
          function Be(e, t, n) {
            var r = Re.exec(t.slice(n));
            return r
              ? ((e.p = Le.get(r[0].toLowerCase())), n + r[0].length)
              : -1;
          }
          function We(e, t, n) {
            var r = Ie.exec(t.slice(n));
            return r
              ? ((e.w = Te.get(r[0].toLowerCase())), n + r[0].length)
              : -1;
          }
          function qe(e, t, n) {
            var r = Ee.exec(t.slice(n));
            return r
              ? ((e.w = ke.get(r[0].toLowerCase())), n + r[0].length)
              : -1;
          }
          function Ue(e, t, n) {
            var r = $e.exec(t.slice(n));
            return r
              ? ((e.m = Pe.get(r[0].toLowerCase())), n + r[0].length)
              : -1;
          }
          function Ve(e, t, n) {
            var r = De.exec(t.slice(n));
            return r
              ? ((e.m = xe.get(r[0].toLowerCase())), n + r[0].length)
              : -1;
          }
          function He(e, t, n) {
            return Oe(e, a, t, n);
          }
          function Ge(e, t, n) {
            return Oe(e, l, t, n);
          }
          function ze(e, t, n) {
            return Oe(e, s, t, n);
          }
          function je(e) {
            return d[e.getDay()];
          }
          function Ke(e) {
            return c[e.getDay()];
          }
          function Qe(e) {
            return de[e.getMonth()];
          }
          function Xe(e) {
            return G[e.getMonth()];
          }
          function Ye(e) {
            return u[+(e.getHours() >= 12)];
          }
          function Je(e) {
            return 1 + ~~(e.getMonth() / 3);
          }
          function Ze(e) {
            return d[e.getUTCDay()];
          }
          function et(e) {
            return c[e.getUTCDay()];
          }
          function tt(e) {
            return de[e.getUTCMonth()];
          }
          function nt(e) {
            return G[e.getUTCMonth()];
          }
          function rt(e) {
            return u[+(e.getUTCHours() >= 12)];
          }
          function ot(e) {
            return 1 + ~~(e.getUTCMonth() / 3);
          }
          return {
            format: function (t) {
              var e = Ae((t += ""), Ne);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
            parse: function (t) {
              var e = Fe((t += ""), !1);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
            utcFormat: function (t) {
              var e = Ae((t += ""), Me);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
            utcParse: function (t) {
              var e = Fe((t += ""), !0);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
          };
        }
        var i = { "-": "", _: " ", 0: "0" },
          l = /^\s*\d+/,
          s = /^%/,
          u = /[\\^$*+?|[\]().{}]/g;
        function c(e, t, n) {
          var r = e < 0 ? "-" : "",
            o = (r ? -e : e) + "",
            a = o.length;
          return r + (a < n ? new Array(n - a + 1).join(t) + o : o);
        }
        function d(e) {
          return e.replace(u, "\\$&");
        }
        function m(e) {
          return new RegExp("^(?:" + e.map(d).join("|") + ")", "i");
        }
        function p(e) {
          return new Map(
            e.map(function (e, t) {
              return [e.toLowerCase(), t];
            }),
          );
        }
        function _(e, t, n) {
          var r = l.exec(t.slice(n, n + 1));
          return r ? ((e.w = +r[0]), n + r[0].length) : -1;
        }
        function f(e, t, n) {
          var r = l.exec(t.slice(n, n + 1));
          return r ? ((e.u = +r[0]), n + r[0].length) : -1;
        }
        function g(e, t, n) {
          var r = l.exec(t.slice(n, n + 2));
          return r ? ((e.U = +r[0]), n + r[0].length) : -1;
        }
        function h(e, t, n) {
          var r = l.exec(t.slice(n, n + 2));
          return r ? ((e.V = +r[0]), n + r[0].length) : -1;
        }
        function y(e, t, n) {
          var r = l.exec(t.slice(n, n + 2));
          return r ? ((e.W = +r[0]), n + r[0].length) : -1;
        }
        function C(e, t, n) {
          var r = l.exec(t.slice(n, n + 4));
          return r ? ((e.y = +r[0]), n + r[0].length) : -1;
        }
        function b(e, t, n) {
          var r = l.exec(t.slice(n, n + 2));
          return r
            ? ((e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length)
            : -1;
        }
        function v(e, t, n) {
          var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
          return r
            ? ((e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), n + r[0].length)
            : -1;
        }
        function S(e, t, n) {
          var r = l.exec(t.slice(n, n + 1));
          return r ? ((e.q = r[0] * 3 - 3), n + r[0].length) : -1;
        }
        function R(e, t, n) {
          var r = l.exec(t.slice(n, n + 2));
          return r ? ((e.m = r[0] - 1), n + r[0].length) : -1;
        }
        function L(e, t, n) {
          var r = l.exec(t.slice(n, n + 2));
          return r ? ((e.d = +r[0]), n + r[0].length) : -1;
        }
        function E(e, t, n) {
          var r = l.exec(t.slice(n, n + 3));
          return r ? ((e.m = 0), (e.d = +r[0]), n + r[0].length) : -1;
        }
        function k(e, t, n) {
          var r = l.exec(t.slice(n, n + 2));
          return r ? ((e.H = +r[0]), n + r[0].length) : -1;
        }
        function I(e, t, n) {
          var r = l.exec(t.slice(n, n + 2));
          return r ? ((e.M = +r[0]), n + r[0].length) : -1;
        }
        function T(e, t, n) {
          var r = l.exec(t.slice(n, n + 2));
          return r ? ((e.S = +r[0]), n + r[0].length) : -1;
        }
        function D(e, t, n) {
          var r = l.exec(t.slice(n, n + 3));
          return r ? ((e.L = +r[0]), n + r[0].length) : -1;
        }
        function x(e, t, n) {
          var r = l.exec(t.slice(n, n + 6));
          return r ? ((e.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
        }
        function $(e, t, n) {
          var r = s.exec(t.slice(n, n + 1));
          return r ? n + r[0].length : -1;
        }
        function P(e, t, n) {
          var r = l.exec(t.slice(n));
          return r ? ((e.Q = +r[0]), n + r[0].length) : -1;
        }
        function N(e, t, n) {
          var r = l.exec(t.slice(n));
          return r ? ((e.s = +r[0]), n + r[0].length) : -1;
        }
        function M(e, t) {
          return c(e.getDate(), t, 2);
        }
        function w(e, t) {
          return c(e.getHours(), t, 2);
        }
        function A(e, t) {
          return c(e.getHours() % 12 || 12, t, 2);
        }
        function F(e, n) {
          return c(1 + t.timeDay.count(t.timeYear(e), e), n, 3);
        }
        function O(e, t) {
          return c(e.getMilliseconds(), t, 3);
        }
        function B(e, t) {
          return O(e, t) + "000";
        }
        function W(e, t) {
          return c(e.getMonth() + 1, t, 2);
        }
        function q(e, t) {
          return c(e.getMinutes(), t, 2);
        }
        function U(e, t) {
          return c(e.getSeconds(), t, 2);
        }
        function V(e) {
          var t = e.getDay();
          return t === 0 ? 7 : t;
        }
        function H(e, n) {
          return c(t.timeSunday.count(t.timeYear(e) - 1, e), n, 2);
        }
        function G(e) {
          var n = e.getDay();
          return n >= 4 || n === 0 ? t.timeThursday(e) : t.timeThursday.ceil(e);
        }
        function z(e, n) {
          return (
            (e = G(e)),
            c(
              t.timeThursday.count(t.timeYear(e), e) +
                (t.timeYear(e).getDay() === 4),
              n,
              2,
            )
          );
        }
        function j(e) {
          return e.getDay();
        }
        function K(e, n) {
          return c(t.timeMonday.count(t.timeYear(e) - 1, e), n, 2);
        }
        function Q(e, t) {
          return c(e.getFullYear() % 100, t, 2);
        }
        function X(e, t) {
          return ((e = G(e)), c(e.getFullYear() % 100, t, 2));
        }
        function Y(e, t) {
          return c(e.getFullYear() % 1e4, t, 4);
        }
        function J(e, n) {
          var r = e.getDay();
          return (
            (e =
              r >= 4 || r === 0 ? t.timeThursday(e) : t.timeThursday.ceil(e)),
            c(e.getFullYear() % 1e4, n, 4)
          );
        }
        function Z(e) {
          var t = e.getTimezoneOffset();
          return (
            (t > 0 ? "-" : ((t *= -1), "+")) +
            c((t / 60) | 0, "0", 2) +
            c(t % 60, "0", 2)
          );
        }
        function ee(e, t) {
          return c(e.getUTCDate(), t, 2);
        }
        function te(e, t) {
          return c(e.getUTCHours(), t, 2);
        }
        function ne(e, t) {
          return c(e.getUTCHours() % 12 || 12, t, 2);
        }
        function re(e, n) {
          return c(1 + t.utcDay.count(t.utcYear(e), e), n, 3);
        }
        function oe(e, t) {
          return c(e.getUTCMilliseconds(), t, 3);
        }
        function ae(e, t) {
          return oe(e, t) + "000";
        }
        function ie(e, t) {
          return c(e.getUTCMonth() + 1, t, 2);
        }
        function le(e, t) {
          return c(e.getUTCMinutes(), t, 2);
        }
        function se(e, t) {
          return c(e.getUTCSeconds(), t, 2);
        }
        function ue(e) {
          var t = e.getUTCDay();
          return t === 0 ? 7 : t;
        }
        function ce(e, n) {
          return c(t.utcSunday.count(t.utcYear(e) - 1, e), n, 2);
        }
        function de(e) {
          var n = e.getUTCDay();
          return n >= 4 || n === 0 ? t.utcThursday(e) : t.utcThursday.ceil(e);
        }
        function me(e, n) {
          return (
            (e = de(e)),
            c(
              t.utcThursday.count(t.utcYear(e), e) +
                (t.utcYear(e).getUTCDay() === 4),
              n,
              2,
            )
          );
        }
        function pe(e) {
          return e.getUTCDay();
        }
        function _e(e, n) {
          return c(t.utcMonday.count(t.utcYear(e) - 1, e), n, 2);
        }
        function fe(e, t) {
          return c(e.getUTCFullYear() % 100, t, 2);
        }
        function ge(e, t) {
          return ((e = de(e)), c(e.getUTCFullYear() % 100, t, 2));
        }
        function he(e, t) {
          return c(e.getUTCFullYear() % 1e4, t, 4);
        }
        function ye(e, n) {
          var r = e.getUTCDay();
          return (
            (e = r >= 4 || r === 0 ? t.utcThursday(e) : t.utcThursday.ceil(e)),
            c(e.getUTCFullYear() % 1e4, n, 4)
          );
        }
        function Ce() {
          return "+0000";
        }
        function be() {
          return "%";
        }
        function ve(e) {
          return +e;
        }
        function Se(e) {
          return Math.floor(+e / 1e3);
        }
        var Re;
        Le({
          dateTime: "%x, %X",
          date: "%-m/%-d/%Y",
          time: "%-I:%M:%S %p",
          periods: ["AM", "PM"],
          days: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          shortMonths: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        });
        function Le(t) {
          return (
            (Re = a(t)),
            (e.timeFormat = Re.format),
            (e.timeParse = Re.parse),
            (e.utcFormat = Re.utcFormat),
            (e.utcParse = Re.utcParse),
            Re
          );
        }
        var Ee = "%Y-%m-%dT%H:%M:%S.%LZ";
        function ke(e) {
          return e.toISOString();
        }
        var Ie = Date.prototype.toISOString ? ke : e.utcFormat(Ee);
        function Te(e) {
          var t = new Date(e);
          return isNaN(t) ? null : t;
        }
        var De = +new Date("2000-01-01T00:00:00.000Z") ? Te : e.utcParse(Ee);
        ((e.isoFormat = Ie),
          (e.isoParse = De),
          (e.timeFormatDefaultLocale = Le),
          (e.timeFormatLocale = a),
          Object.defineProperty(e, "__esModule", { value: !0 }));
      });
    }
    var m = !1;
    function p() {
      return (m || ((m = !0), d()), u.exports);
    }
    function _(e) {
      switch (e) {
        case void 0:
          return p();
      }
    }
    a.exports = _;
  },
  null,
);
