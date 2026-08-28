__d(
  "d3-interpolate-2.0.1",
  ["d3-color-2.0.0"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e && typeof e == "object" && "default" in e ? e.default : e;
    }
    var l = e(n("d3-color-2.0.0")),
      s = {},
      u = { exports: s },
      c;
    function d() {
      (function (e, t) {
        typeof s == "object" && typeof u != "undefined"
          ? t(s, l())
          : typeof c == "function" && c.amd
            ? c(["exports", "d3-color"], t)
            : ((e = e || self), t((e.d3 = e.d3 || {}), e.d3));
      })(this, function (e, t) {
        function n(e, t, n, r, o) {
          var a = e * e,
            i = a * e;
          return (
            ((1 - 3 * e + 3 * a - i) * t +
              (4 - 6 * a + 3 * i) * n +
              (1 + 3 * e + 3 * a - 3 * i) * r +
              i * o) /
            6
          );
        }
        function r(e) {
          var t = e.length - 1;
          return function (r) {
            var o =
                r <= 0
                  ? (r = 0)
                  : r >= 1
                    ? ((r = 1), t - 1)
                    : Math.floor(r * t),
              a = e[o],
              i = e[o + 1],
              l = o > 0 ? e[o - 1] : 2 * a - i,
              s = o < t - 1 ? e[o + 2] : 2 * i - a;
            return n((r - o / t) * t, l, a, i, s);
          };
        }
        function o(e) {
          var t = e.length;
          return function (r) {
            var o = Math.floor(((r %= 1) < 0 ? ++r : r) * t),
              a = e[(o + t - 1) % t],
              i = e[o % t],
              l = e[(o + 1) % t],
              s = e[(o + 2) % t];
            return n((r - o / t) * t, a, i, l, s);
          };
        }
        var a = function (t) {
          return function () {
            return t;
          };
        };
        function i(e, t) {
          return function (n) {
            return e + n * t;
          };
        }
        function l(e, t, n) {
          return (
            (e = Math.pow(e, n)),
            (t = Math.pow(t, n) - e),
            (n = 1 / n),
            function (r) {
              return Math.pow(e + r * t, n);
            }
          );
        }
        function s(e, t) {
          var n = t - e;
          return n
            ? i(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n)
            : a(isNaN(e) ? t : e);
        }
        function u(e) {
          return (e = +e) == 1
            ? c
            : function (t, n) {
                return n - t ? l(t, n, e) : a(isNaN(t) ? n : t);
              };
        }
        function c(e, t) {
          var n = t - e;
          return n ? i(e, n) : a(isNaN(e) ? t : e);
        }
        var d = (function e(n) {
          var r = u(n);
          function o(e, n) {
            var o = r((e = t.rgb(e)).r, (n = t.rgb(n)).r),
              a = r(e.g, n.g),
              i = r(e.b, n.b),
              l = c(e.opacity, n.opacity);
            return function (t) {
              return (
                (e.r = o(t)),
                (e.g = a(t)),
                (e.b = i(t)),
                (e.opacity = l(t)),
                e + ""
              );
            };
          }
          return ((o.gamma = e), o);
        })(1);
        function m(e) {
          return function (n) {
            var r = n.length,
              o = new Array(r),
              a = new Array(r),
              i = new Array(r),
              l,
              s;
            for (l = 0; l < r; ++l)
              ((s = t.rgb(n[l])),
                (o[l] = s.r || 0),
                (a[l] = s.g || 0),
                (i[l] = s.b || 0));
            return (
              (o = e(o)),
              (a = e(a)),
              (i = e(i)),
              (s.opacity = 1),
              function (e) {
                return ((s.r = o(e)), (s.g = a(e)), (s.b = i(e)), s + "");
              }
            );
          };
        }
        var p = m(r),
          _ = m(o);
        function f(e, t) {
          t || (t = []);
          var n = e ? Math.min(t.length, e.length) : 0,
            r = t.slice(),
            o;
          return function (a) {
            for (o = 0; o < n; ++o) r[o] = e[o] * (1 - a) + t[o] * a;
            return r;
          };
        }
        function g(e) {
          return ArrayBuffer.isView(e) && !(e instanceof DataView);
        }
        function h(e, t) {
          return (g(t) ? f : y)(e, t);
        }
        function y(e, t) {
          var n = t ? t.length : 0,
            r = e ? Math.min(n, e.length) : 0,
            o = new Array(r),
            a = new Array(n),
            i;
          for (i = 0; i < r; ++i) o[i] = I(e[i], t[i]);
          for (; i < n; ++i) a[i] = t[i];
          return function (e) {
            for (i = 0; i < r; ++i) a[i] = o[i](e);
            return a;
          };
        }
        function C(e, t) {
          var n = new Date();
          return (
            (e = +e),
            (t = +t),
            function (r) {
              return (n.setTime(e * (1 - r) + t * r), n);
            }
          );
        }
        function b(e, t) {
          return (
            (e = +e),
            (t = +t),
            function (n) {
              return e * (1 - n) + t * n;
            }
          );
        }
        function v(e, t) {
          var n = {},
            r = {},
            o;
          ((e === null || typeof e != "object") && (e = {}),
            (t === null || typeof t != "object") && (t = {}));
          for (o in t) o in e ? (n[o] = I(e[o], t[o])) : (r[o] = t[o]);
          return function (e) {
            for (o in n) r[o] = n[o](e);
            return r;
          };
        }
        var S = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
          R = new RegExp(S.source, "g");
        function L(e) {
          return function () {
            return e;
          };
        }
        function E(e) {
          return function (t) {
            return e(t) + "";
          };
        }
        function k(e, t) {
          var n = (S.lastIndex = R.lastIndex = 0),
            r,
            o,
            a,
            i = -1,
            l = [],
            s = [];
          for (e = e + "", t = t + ""; (r = S.exec(e)) && (o = R.exec(t)); )
            ((a = o.index) > n &&
              ((a = t.slice(n, a)), l[i] ? (l[i] += a) : (l[++i] = a)),
              (r = r[0]) === (o = o[0])
                ? l[i]
                  ? (l[i] += o)
                  : (l[++i] = o)
                : ((l[++i] = null), s.push({ i: i, x: b(r, o) })),
              (n = R.lastIndex));
          return (
            n < t.length &&
              ((a = t.slice(n)), l[i] ? (l[i] += a) : (l[++i] = a)),
            l.length < 2
              ? s[0]
                ? E(s[0].x)
                : L(t)
              : ((t = s.length),
                function (e) {
                  for (var n = 0, r; n < t; ++n) l[(r = s[n]).i] = r.x(e);
                  return l.join("");
                })
          );
        }
        function I(e, n) {
          var r = typeof n,
            o;
          return n == null || r === "boolean"
            ? a(n)
            : (r === "number"
                ? b
                : r === "string"
                  ? (o = t.color(n))
                    ? ((n = o), d)
                    : k
                  : n instanceof t.color
                    ? d
                    : n instanceof Date
                      ? C
                      : g(n)
                        ? f
                        : Array.isArray(n)
                          ? y
                          : (typeof n.valueOf != "function" &&
                                typeof n.toString != "function") ||
                              isNaN(n)
                            ? v
                            : b)(e, n);
        }
        function T(e) {
          var t = e.length;
          return function (n) {
            return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
          };
        }
        function D(e, t) {
          var n = s(+e, +t);
          return function (e) {
            var t = n(e);
            return t - 360 * Math.floor(t / 360);
          };
        }
        function x(e, t) {
          return (
            (e = +e),
            (t = +t),
            function (n) {
              return Math.round(e * (1 - n) + t * n);
            }
          );
        }
        var $ = 180 / Math.PI,
          P = {
            translateX: 0,
            translateY: 0,
            rotate: 0,
            skewX: 0,
            scaleX: 1,
            scaleY: 1,
          };
        function N(e, t, n, r, o, a) {
          var i, l, s;
          return (
            (i = Math.sqrt(e * e + t * t)) && ((e /= i), (t /= i)),
            (s = e * n + t * r) && ((n -= e * s), (r -= t * s)),
            (l = Math.sqrt(n * n + r * r)) && ((n /= l), (r /= l), (s /= l)),
            e * r < t * n && ((e = -e), (t = -t), (s = -s), (i = -i)),
            {
              translateX: o,
              translateY: a,
              rotate: Math.atan2(t, e) * $,
              skewX: Math.atan(s) * $,
              scaleX: i,
              scaleY: l,
            }
          );
        }
        var M;
        function w(e) {
          var t = new (
            typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix
          )(e + "");
          return t.isIdentity ? P : N(t.a, t.b, t.c, t.d, t.e, t.f);
        }
        function A(e) {
          return e == null ||
            (M ||
              (M = document.createElementNS("http://www.w3.org/2000/svg", "g")),
            M.setAttribute("transform", e),
            !(e = M.transform.baseVal.consolidate()))
            ? P
            : ((e = e.matrix), N(e.a, e.b, e.c, e.d, e.e, e.f));
        }
        function F(e, t, n, r) {
          function o(e) {
            return e.length ? e.pop() + " " : "";
          }
          function a(e, r, o, a, i, l) {
            if (e !== o || r !== a) {
              var s = i.push("translate(", null, t, null, n);
              l.push({ i: s - 4, x: b(e, o) }, { i: s - 2, x: b(r, a) });
            } else (o || a) && i.push("translate(" + o + t + a + n);
          }
          function i(e, t, n, a) {
            e !== t
              ? (e - t > 180 ? (t += 360) : t - e > 180 && (e += 360),
                a.push({
                  i: n.push(o(n) + "rotate(", null, r) - 2,
                  x: b(e, t),
                }))
              : t && n.push(o(n) + "rotate(" + t + r);
          }
          function l(e, t, n, a) {
            e !== t
              ? a.push({ i: n.push(o(n) + "skewX(", null, r) - 2, x: b(e, t) })
              : t && n.push(o(n) + "skewX(" + t + r);
          }
          function s(e, t, n, r, a, i) {
            if (e !== n || t !== r) {
              var l = a.push(o(a) + "scale(", null, ",", null, ")");
              i.push({ i: l - 4, x: b(e, n) }, { i: l - 2, x: b(t, r) });
            } else
              (n !== 1 || r !== 1) &&
                a.push(o(a) + "scale(" + n + "," + r + ")");
          }
          return function (t, n) {
            var r = [],
              o = [];
            return (
              (t = e(t)),
              (n = e(n)),
              a(t.translateX, t.translateY, n.translateX, n.translateY, r, o),
              i(t.rotate, n.rotate, r, o),
              l(t.skewX, n.skewX, r, o),
              s(t.scaleX, t.scaleY, n.scaleX, n.scaleY, r, o),
              (t = n = null),
              function (e) {
                for (var t = -1, n = o.length, a; ++t < n; )
                  r[(a = o[t]).i] = a.x(e);
                return r.join("");
              }
            );
          };
        }
        var O = F(w, "px, ", "px)", "deg)"),
          B = F(A, ", ", ")", ")"),
          W = 1e-12;
        function q(e) {
          return ((e = Math.exp(e)) + 1 / e) / 2;
        }
        function U(e) {
          return ((e = Math.exp(e)) - 1 / e) / 2;
        }
        function V(e) {
          return ((e = Math.exp(2 * e)) - 1) / (e + 1);
        }
        var H = (function e(t, n, r) {
          function o(e, o) {
            var a = e[0],
              i = e[1],
              l = e[2],
              s = o[0],
              u = o[1],
              c = o[2],
              d = s - a,
              m = u - i,
              p = d * d + m * m,
              _,
              f;
            if (p < W)
              ((f = Math.log(c / l) / t),
                (_ = function (n) {
                  return [a + n * d, i + n * m, l * Math.exp(t * n * f)];
                }));
            else {
              var g = Math.sqrt(p),
                h = (c * c - l * l + r * p) / (2 * l * n * g),
                y = (c * c - l * l - r * p) / (2 * c * n * g),
                C = Math.log(Math.sqrt(h * h + 1) - h),
                b = Math.log(Math.sqrt(y * y + 1) - y);
              ((f = (b - C) / t),
                (_ = function (r) {
                  var e = r * f,
                    o = q(C),
                    s = (l / (n * g)) * (o * V(t * e + C) - U(C));
                  return [a + s * d, i + s * m, (l * o) / q(t * e + C)];
                }));
            }
            return ((_.duration = (f * 1e3 * t) / Math.SQRT2), _);
          }
          return (
            (o.rho = function (t) {
              var n = Math.max(0.001, +t),
                r = n * n,
                o = r * r;
              return e(n, r, o);
            }),
            o
          );
        })(Math.SQRT2, 2, 4);
        function G(e) {
          return function (n, r) {
            var o = e((n = t.hsl(n)).h, (r = t.hsl(r)).h),
              a = c(n.s, r.s),
              i = c(n.l, r.l),
              l = c(n.opacity, r.opacity);
            return function (e) {
              return (
                (n.h = o(e)),
                (n.s = a(e)),
                (n.l = i(e)),
                (n.opacity = l(e)),
                n + ""
              );
            };
          };
        }
        var z = G(s),
          j = G(c);
        function K(e, n) {
          var r = c((e = t.lab(e)).l, (n = t.lab(n)).l),
            o = c(e.a, n.a),
            a = c(e.b, n.b),
            i = c(e.opacity, n.opacity);
          return function (t) {
            return (
              (e.l = r(t)),
              (e.a = o(t)),
              (e.b = a(t)),
              (e.opacity = i(t)),
              e + ""
            );
          };
        }
        function Q(e) {
          return function (n, r) {
            var o = e((n = t.hcl(n)).h, (r = t.hcl(r)).h),
              a = c(n.c, r.c),
              i = c(n.l, r.l),
              l = c(n.opacity, r.opacity);
            return function (e) {
              return (
                (n.h = o(e)),
                (n.c = a(e)),
                (n.l = i(e)),
                (n.opacity = l(e)),
                n + ""
              );
            };
          };
        }
        var X = Q(s),
          Y = Q(c);
        function J(e) {
          return (function n(r) {
            r = +r;
            function o(n, o) {
              var a = e((n = t.cubehelix(n)).h, (o = t.cubehelix(o)).h),
                i = c(n.s, o.s),
                l = c(n.l, o.l),
                s = c(n.opacity, o.opacity);
              return function (e) {
                return (
                  (n.h = a(e)),
                  (n.s = i(e)),
                  (n.l = l(Math.pow(e, r))),
                  (n.opacity = s(e)),
                  n + ""
                );
              };
            }
            return ((o.gamma = n), o);
          })(1);
        }
        var Z = J(s),
          ee = J(c);
        function te(e, t) {
          t === void 0 && ((t = e), (e = I));
          for (
            var n = 0, r = t.length - 1, o = t[0], a = new Array(r < 0 ? 0 : r);
            n < r;
          )
            a[n] = e(o, (o = t[++n]));
          return function (e) {
            var t = Math.max(0, Math.min(r - 1, Math.floor((e *= r))));
            return a[t](e - t);
          };
        }
        function ne(e, t) {
          for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e(r / (t - 1));
          return n;
        }
        ((e.interpolate = I),
          (e.interpolateArray = h),
          (e.interpolateBasis = r),
          (e.interpolateBasisClosed = o),
          (e.interpolateCubehelix = Z),
          (e.interpolateCubehelixLong = ee),
          (e.interpolateDate = C),
          (e.interpolateDiscrete = T),
          (e.interpolateHcl = X),
          (e.interpolateHclLong = Y),
          (e.interpolateHsl = z),
          (e.interpolateHslLong = j),
          (e.interpolateHue = D),
          (e.interpolateLab = K),
          (e.interpolateNumber = b),
          (e.interpolateNumberArray = f),
          (e.interpolateObject = v),
          (e.interpolateRgb = d),
          (e.interpolateRgbBasis = p),
          (e.interpolateRgbBasisClosed = _),
          (e.interpolateRound = x),
          (e.interpolateString = k),
          (e.interpolateTransformCss = O),
          (e.interpolateTransformSvg = B),
          (e.interpolateZoom = H),
          (e.piecewise = te),
          (e.quantize = ne),
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
