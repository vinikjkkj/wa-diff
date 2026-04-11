__d(
  "fit-curve-0.2.0",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      (function (t, n) {
        if (typeof e != "undefined") n(l);
        else {
          var r = { exports: {} };
          (n(r), (t.fitCurve = r.exports));
        }
      })(this, function (e) {
        function t(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function n(e, t, n) {
          if (!Array.isArray(e))
            throw new TypeError("First argument should be an array");
          if (
            (e.forEach(function (t) {
              if (
                !Array.isArray(t) ||
                t.some(function (e) {
                  return typeof e != "number";
                }) ||
                t.length !== e[0].length
              )
                throw Error(
                  "Each point should be an array of numbers. Each point should have the same amount of numbers.",
                );
            }),
            (e = e.filter(function (t, n) {
              return (
                n === 0 ||
                !t.every(function (t, r) {
                  return t === e[n - 1][r];
                })
              );
            })),
            e.length < 2)
          )
            return [];
          var o = e.length,
            a = m(e[1], e[0]),
            i = m(e[o - 2], e[o - 1]);
          return r(e, a, i, t, n);
        }
        function r(e, t, n, a, l) {
          var u = 20,
            c,
            d,
            m,
            _,
            f,
            g,
            h,
            y,
            C,
            b,
            v,
            S,
            R;
          if (e.length === 2)
            return (
              (S = p.vectorLen(p.subtract(e[0], e[1])) / 3),
              (c = [
                e[0],
                p.addArrays(e[0], p.mulItems(t, S)),
                p.addArrays(e[1], p.mulItems(n, S)),
                e[1],
              ]),
              [c]
            );
          d = s(e);
          var L = o(e, d, d, t, n, l);
          if (((c = L[0]), (_ = L[1]), (g = L[2]), _ === 0 || _ < a))
            return [c];
          if (_ < a * a)
            for (m = d, f = _, h = g, R = 0; R < u; R++) {
              m = i(c, e, m);
              var E = o(e, d, m, t, n, l);
              if (((c = E[0]), (_ = E[1]), (g = E[2]), _ < a)) return [c];
              if (g === h) {
                var k = _ / f;
                if (k > 0.9999 && k < 1.0001) break;
              }
              ((f = _), (h = g));
            }
          if (
            ((v = []),
            (y = p.subtract(e[g - 1], e[g + 1])),
            y.every(function (e) {
              return e === 0;
            }))
          ) {
            y = p.subtract(e[g - 1], e[g]);
            var I = [-y[1], y[0]];
            ((y[0] = I[0]), (y[1] = I[1]));
          }
          return (
            (C = p.normalize(y)),
            (b = p.mulItems(C, -1)),
            (v = v.concat(r(e.slice(0, g + 1), t, C, a, l))),
            (v = v.concat(r(e.slice(g), b, n, a, l))),
            v
          );
        }
        function o(e, t, n, r, o, i) {
          var l, s, c;
          l = a(e, n, r, o);
          var d = u(e, l, t);
          return (
            (s = d[0]),
            (c = d[1]),
            i && i({ bez: l, points: e, params: t, maxErr: s, maxPoint: c }),
            [l, s, c]
          );
        }
        function a(e, t, n, r) {
          var o,
            a,
            i,
            l,
            s,
            u,
            c,
            d,
            m,
            f,
            g,
            h,
            y,
            C,
            b,
            v,
            S,
            R = e[0],
            L = e[e.length - 1];
          for (
            o = [R, null, null, L],
              a = p.zeros_Xx2x2(t.length),
              y = 0,
              C = t.length;
            y < C;
            y++
          )
            ((v = t[y]),
              (S = 1 - v),
              (i = a[y]),
              (i[0] = p.mulItems(n, 3 * v * (S * S))),
              (i[1] = p.mulItems(r, 3 * S * (v * v))));
          for (
            l = [
              [0, 0],
              [0, 0],
            ],
              s = [0, 0],
              y = 0,
              C = e.length;
            y < C;
            y++
          )
            ((v = t[y]),
              (i = a[y]),
              (l[0][0] += p.dot(i[0], i[0])),
              (l[0][1] += p.dot(i[0], i[1])),
              (l[1][0] += p.dot(i[0], i[1])),
              (l[1][1] += p.dot(i[1], i[1])),
              (b = p.subtract(e[y], _.q([R, R, L, L], v))),
              (s[0] += p.dot(i[0], b)),
              (s[1] += p.dot(i[1], b)));
          return (
            (u = l[0][0] * l[1][1] - l[1][0] * l[0][1]),
            (c = l[0][0] * s[1] - l[1][0] * s[0]),
            (d = s[0] * l[1][1] - s[1] * l[0][1]),
            (m = u === 0 ? 0 : d / u),
            (f = u === 0 ? 0 : c / u),
            (h = p.vectorLen(p.subtract(R, L))),
            (g = 1e-6 * h),
            m < g || f < g
              ? ((o[1] = p.addArrays(R, p.mulItems(n, h / 3))),
                (o[2] = p.addArrays(L, p.mulItems(r, h / 3))))
              : ((o[1] = p.addArrays(R, p.mulItems(n, m))),
                (o[2] = p.addArrays(L, p.mulItems(r, f)))),
            o
          );
        }
        function i(e, t, n) {
          return n.map(function (n, r) {
            return l(e, t[r], n);
          });
        }
        function l(e, t, n) {
          var r = p.subtract(_.q(e, n), t),
            o = _.qprime(e, n),
            a = p.mulMatrix(r, o),
            i =
              p.sum(p.squareItems(o)) + 2 * p.mulMatrix(r, _.qprimeprime(e, n));
          return i === 0 ? n : n - a / i;
        }
        function s(e) {
          var t = [],
            n,
            r,
            o;
          return (
            e.forEach(function (e, a) {
              ((n = a ? r + p.vectorLen(p.subtract(e, o)) : 0),
                t.push(n),
                (r = n),
                (o = e));
            }),
            (t = t.map(function (e) {
              return e / r;
            })),
            t
          );
        }
        function u(e, t, n) {
          var r, o, a, i, l, s, u, m;
          ((o = 0), (a = Math.floor(e.length / 2)));
          var f = c(t, 10);
          for (l = 0, s = e.length; l < s; l++)
            ((u = e[l]),
              (m = d(t, n[l], f, 10)),
              (i = p.subtract(_.q(t, m), u)),
              (r = i[0] * i[0] + i[1] * i[1]),
              r > o && ((o = r), (a = l)));
          return [o, a];
        }
        var c = function (t, n) {
          for (var e, r = [0], o = t[0], a = 0, i = 1; i <= n; i++)
            ((e = _.q(t, i / n)),
              (a += p.vectorLen(p.subtract(e, o))),
              r.push(a),
              (o = e));
          return (
            (r = r.map(function (e) {
              return e / a;
            })),
            r
          );
        };
        function d(e, t, n, r) {
          if (t < 0) return 0;
          if (t > 1) return 1;
          for (var o, a, i, l, s, u = 1; u <= r; u++)
            if (t <= n[u]) {
              ((l = (u - 1) / r),
                (i = u / r),
                (a = n[u - 1]),
                (o = n[u]),
                (s = ((t - a) / (o - a)) * (i - l) + l));
              break;
            }
          return s;
        }
        function m(e, t) {
          return p.normalize(p.subtract(e, t));
        }
        var p = (function () {
            function e() {
              t(this, e);
            }
            return (
              (e.zeros_Xx2x2 = function (t) {
                for (var e = []; t--; ) e.push([0, 0]);
                return e;
              }),
              (e.mulItems = function (t, n) {
                return t.map(function (e) {
                  return e * n;
                });
              }),
              (e.mulMatrix = function (t, n) {
                return t.reduce(function (e, t, r) {
                  return e + t * n[r];
                }, 0);
              }),
              (e.subtract = function (t, n) {
                return t.map(function (e, t) {
                  return e - n[t];
                });
              }),
              (e.addArrays = function (t, n) {
                return t.map(function (e, t) {
                  return e + n[t];
                });
              }),
              (e.addItems = function (t, n) {
                return t.map(function (e) {
                  return e + n;
                });
              }),
              (e.sum = function (t) {
                return t.reduce(function (e, t) {
                  return e + t;
                });
              }),
              (e.dot = function (n, r) {
                return e.mulMatrix(n, r);
              }),
              (e.vectorLen = function (t) {
                return Math.hypot.apply(Math, t);
              }),
              (e.divItems = function (t, n) {
                return t.map(function (e) {
                  return e / n;
                });
              }),
              (e.squareItems = function (t) {
                return t.map(function (e) {
                  return e * e;
                });
              }),
              (e.normalize = function (t) {
                return this.divItems(t, this.vectorLen(t));
              }),
              e
            );
          })(),
          _ = (function () {
            function e() {
              t(this, e);
            }
            return (
              (e.q = function (t, n) {
                var e = 1 - n,
                  r = p.mulItems(t[0], e * e * e),
                  o = p.mulItems(t[1], 3 * e * e * n),
                  a = p.mulItems(t[2], 3 * e * n * n),
                  i = p.mulItems(t[3], n * n * n);
                return p.addArrays(p.addArrays(r, o), p.addArrays(a, i));
              }),
              (e.qprime = function (t, n) {
                var e = 1 - n,
                  r = p.mulItems(p.subtract(t[1], t[0]), 3 * e * e),
                  o = p.mulItems(p.subtract(t[2], t[1]), 6 * e * n),
                  a = p.mulItems(p.subtract(t[3], t[2]), 3 * n * n);
                return p.addArrays(p.addArrays(r, o), a);
              }),
              (e.qprimeprime = function (t, n) {
                return p.addArrays(
                  p.mulItems(
                    p.addArrays(p.subtract(t[2], p.mulItems(t[1], 2)), t[0]),
                    6 * (1 - n),
                  ),
                  p.mulItems(
                    p.addArrays(p.subtract(t[3], p.mulItems(t[2], 2)), t[1]),
                    6 * n,
                  ),
                );
              }),
              e
            );
          })();
        ((e.exports = n),
          (e.exports.fitCubic = r),
          (e.exports.createTangent = m));
      });
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    function d(e) {
      switch (e) {
        case void 0:
          return c();
      }
    }
    a.exports = d;
  },
  null,
);
