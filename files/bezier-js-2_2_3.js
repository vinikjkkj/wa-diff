__d(
  "bezier-js-2.2.3",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      (function () {
        var e = Math.abs,
          t = Math.cos,
          n = Math.sin,
          r = Math.acos,
          o = Math.atan2,
          a = Math.sqrt,
          i = Math.pow,
          s = function (e) {
            return e < 0 ? -i(-e, 1 / 3) : i(e, 1 / 3);
          },
          u = Math.PI,
          c = 2 * u,
          d = u / 2,
          m = 1e-6,
          p = Number.MAX_SAFE_INTEGER,
          _ = Number.MIN_SAFE_INTEGER,
          f = {
            Tvalues: [
              -0.06405689286260563, 0.06405689286260563, -0.1911188674736163,
              0.1911188674736163, -0.3150426796961634, 0.3150426796961634,
              -0.4337935076260451, 0.4337935076260451, -0.5454214713888396,
              0.5454214713888396, -0.6480936519369755, 0.6480936519369755,
              -0.7401241915785544, 0.7401241915785544, -0.820001985973903,
              0.820001985973903, -0.8864155270044011, 0.8864155270044011,
              -0.9382745520027328, 0.9382745520027328, -0.9747285559713095,
              0.9747285559713095, -0.9951872199970213, 0.9951872199970213,
            ],
            Cvalues: [
              0.12793819534675216, 0.12793819534675216, 0.1258374563468283,
              0.1258374563468283, 0.12167047292780339, 0.12167047292780339,
              0.1155056680537256, 0.1155056680537256, 0.10744427011596563,
              0.10744427011596563, 0.09761865210411388, 0.09761865210411388,
              0.08619016153195327, 0.08619016153195327, 0.0733464814110803,
              0.0733464814110803, 0.05929858491543678, 0.05929858491543678,
              0.04427743881741981, 0.04427743881741981, 0.028531388628933663,
              0.028531388628933663, 0.0123412297999872, 0.0123412297999872,
            ],
            arcfn: function (e, t) {
              var n = t(e),
                r = n.x * n.x + n.y * n.y;
              return (typeof n.z != "undefined" && (r += n.z * n.z), a(r));
            },
            between: function (e, t, n) {
              return (
                (t <= e && e <= n) ||
                f.approximately(e, t) ||
                f.approximately(e, n)
              );
            },
            approximately: function (t, n, r) {
              return e(t - n) <= (r || m);
            },
            length: function (e) {
              var t = 0.5,
                n = 0,
                r = f.Tvalues.length,
                o,
                a;
              for (o = 0; o < r; o++)
                ((a = t * f.Tvalues[o] + t),
                  (n += f.Cvalues[o] * f.arcfn(a, e)));
              return t * n;
            },
            map: function (e, t, n, r, o) {
              var a = n - t,
                i = o - r,
                l = e - t,
                s = l / a;
              return r + i * s;
            },
            lerp: function (e, t, n) {
              var r = { x: t.x + e * (n.x - t.x), y: t.y + e * (n.y - t.y) };
              return (t.z && n.z && (r.z = t.z + e * (n.z - t.z)), r);
            },
            pointToString: function (e) {
              var t = e.x + "/" + e.y;
              return (typeof e.z != "undefined" && (t += "/" + e.z), t);
            },
            pointsToString: function (e) {
              return "[" + e.map(f.pointToString).join(", ") + "]";
            },
            copy: function (e) {
              return JSON.parse(JSON.stringify(e));
            },
            angle: function (e, t, n) {
              var r = t.x - e.x,
                a = t.y - e.y,
                i = n.x - e.x,
                l = n.y - e.y,
                s = r * l - a * i,
                u = r * i + a * l;
              return o(s, u);
            },
            round: function (e, t) {
              var n = "" + e,
                r = n.indexOf(".");
              return parseFloat(n.substring(0, r + 1 + t));
            },
            dist: function (e, t) {
              var n = e.x - t.x,
                r = e.y - t.y;
              return a(n * n + r * r);
            },
            closest: function (e, t) {
              var n = i(2, 63),
                r,
                o;
              return (
                e.forEach(function (e, a) {
                  ((o = f.dist(t, e)), o < n && ((n = o), (r = a)));
                }),
                { mdist: n, mpos: r }
              );
            },
            abcratio: function (t, n) {
              if (n !== 2 && n !== 3) return !1;
              if (typeof t == "undefined") t = 0.5;
              else if (t === 0 || t === 1) return t;
              var r = i(t, n) + i(1 - t, n),
                o = r - 1;
              return e(o / r);
            },
            projectionratio: function (e, t) {
              if (t !== 2 && t !== 3) return !1;
              if (typeof e == "undefined") e = 0.5;
              else if (e === 0 || e === 1) return e;
              var n = i(1 - e, t),
                r = i(e, t) + n;
              return n / r;
            },
            lli8: function (e, t, n, r, o, a, i, l) {
              var s = (e * r - t * n) * (o - i) - (e - n) * (o * l - a * i),
                u = (e * r - t * n) * (a - l) - (t - r) * (o * l - a * i),
                c = (e - n) * (a - l) - (t - r) * (o - i);
              return c == 0 ? !1 : { x: s / c, y: u / c };
            },
            lli4: function (e, t, n, r) {
              var o = e.x,
                a = e.y,
                i = t.x,
                l = t.y,
                s = n.x,
                u = n.y,
                c = r.x,
                d = r.y;
              return f.lli8(o, a, i, l, s, u, c, d);
            },
            lli: function (e, t) {
              return f.lli4(e, e.c, t, t.c);
            },
            makeline: function (e, t) {
              var n = b(),
                r = e.x,
                o = e.y,
                a = t.x,
                i = t.y,
                l = (a - r) / 3,
                s = (i - o) / 3;
              return new n(r, o, r + l, o + s, r + 2 * l, o + 2 * s, a, i);
            },
            findbbox: function (e) {
              var t = p,
                n = p,
                r = _,
                o = _;
              return (
                e.forEach(function (e) {
                  var a = e.bbox();
                  (t > a.x.min && (t = a.x.min),
                    n > a.y.min && (n = a.y.min),
                    r < a.x.max && (r = a.x.max),
                    o < a.y.max && (o = a.y.max));
                }),
                {
                  x: { min: t, mid: (t + r) / 2, max: r, size: r - t },
                  y: { min: n, mid: (n + o) / 2, max: o, size: o - n },
                }
              );
            },
            shapeintersections: function (e, t, n, r, o) {
              if (!f.bboxoverlap(t, r)) return [];
              var a = [],
                i = [e.startcap, e.forward, e.back, e.endcap],
                l = [n.startcap, n.forward, n.back, n.endcap];
              return (
                i.forEach(function (t) {
                  t.virtual ||
                    l.forEach(function (r) {
                      if (!r.virtual) {
                        var i = t.intersects(r, o);
                        i.length > 0 &&
                          ((i.c1 = t),
                          (i.c2 = r),
                          (i.s1 = e),
                          (i.s2 = n),
                          a.push(i));
                      }
                    });
                }),
                a
              );
            },
            makeshape: function (e, t, n) {
              var r = t.points.length,
                o = e.points.length,
                a = f.makeline(t.points[r - 1], e.points[0]),
                i = f.makeline(e.points[o - 1], t.points[0]),
                l = {
                  startcap: a,
                  forward: e,
                  back: t,
                  endcap: i,
                  bbox: f.findbbox([a, e, t, i]),
                },
                s = f;
              return (
                (l.intersections = function (e) {
                  return s.shapeintersections(l, l.bbox, e, e.bbox, n);
                }),
                l
              );
            },
            getminmax: function (e, t, n) {
              if (!n) return { min: 0, max: 0 };
              var r = p,
                o = _,
                a,
                i;
              (n.indexOf(0) === -1 && (n = [0].concat(n)),
                n.indexOf(1) === -1 && n.push(1));
              for (var l = 0, s = n.length; l < s; l++)
                ((a = n[l]),
                  (i = e.get(a)),
                  i[t] < r && (r = i[t]),
                  i[t] > o && (o = i[t]));
              return { min: r, mid: (r + o) / 2, max: o, size: o - r };
            },
            align: function (e, r) {
              var a = r.p1.x,
                i = r.p1.y,
                l = -o(r.p2.y - i, r.p2.x - a),
                s = function (e) {
                  return {
                    x: (e.x - a) * t(l) - (e.y - i) * n(l),
                    y: (e.x - a) * n(l) + (e.y - i) * t(l),
                  };
                };
              return e.map(s);
            },
            roots: function (e, n) {
              n = n || { p1: { x: 0, y: 0 }, p2: { x: 1, y: 0 } };
              var o = e.length - 1,
                v = f.align(e, n),
                i = function (e) {
                  return 0 <= e && e <= 1;
                };
              if (o === 2) {
                var y = v[0].y,
                  C = v[1].y,
                  b = v[2].y,
                  h = y - 2 * C + b;
                if (h !== 0) {
                  var l = -a(C * C - y * b),
                    u = -y + C,
                    I = -(l + u) / h,
                    d = -(-l + u) / h;
                  return [I, d].filter(i);
                } else if (C !== b && h === 0)
                  return [((2 * C - b) / 2) * (C - b)].filter(i);
                return [];
              }
              var m = v[0].y,
                p = v[1].y,
                _ = v[2].y,
                g = v[3].y,
                h = -m + 3 * p - 3 * _ + g,
                y = (3 * m - 6 * p + 3 * _) / h,
                C = (-3 * m + 3 * p) / h,
                b = m / h,
                v = (3 * C - y * y) / 3,
                S = v / 3,
                R = (2 * y * y * y - 9 * y * C + 27 * b) / 27,
                L = R / 2,
                E = L * L + S * S * S,
                k,
                I,
                T,
                D,
                x;
              if (E < 0) {
                var $ = -v / 3,
                  P = $ * $ * $,
                  N = a(P),
                  M = -R / (2 * N),
                  w = M < -1 ? -1 : M > 1 ? 1 : M,
                  A = r(w),
                  F = s(N),
                  O = 2 * F;
                return (
                  (T = O * t(A / 3) - y / 3),
                  (D = O * t((A + c) / 3) - y / 3),
                  (x = O * t((A + 2 * c) / 3) - y / 3),
                  [T, D, x].filter(i)
                );
              } else {
                if (E === 0)
                  return (
                    (k = L < 0 ? s(-L) : -s(L)),
                    (T = 2 * k - y / 3),
                    (D = -k - y / 3),
                    [T, D].filter(i)
                  );
                var B = a(E);
                return (
                  (k = s(-L + B)),
                  (I = s(L + B)),
                  [k - I - y / 3].filter(i)
                );
              }
            },
            droots: function (e) {
              if (e.length === 3) {
                var t = e[0],
                  n = e[1],
                  r = e[2],
                  o = t - 2 * n + r;
                if (o !== 0) {
                  var i = -a(n * n - t * r),
                    l = -t + n,
                    s = -(i + l) / o,
                    u = -(-i + l) / o;
                  return [s, u];
                } else if (n !== r && o === 0)
                  return [(2 * n - r) / (2 * (n - r))];
                return [];
              }
              if (e.length === 2) {
                var t = e[0],
                  n = e[1];
                return t !== n ? [t / (t - n)] : [];
              }
            },
            inflections: function (e) {
              if (e.length < 4) return [];
              var t = f.align(e, { p1: e[0], p2: e.slice(-1)[0] }),
                n = t[2].x * t[1].y,
                r = t[3].x * t[1].y,
                o = t[1].x * t[2].y,
                d = t[3].x * t[2].y,
                a = 18 * (-3 * n + 2 * r + 3 * o - d),
                i = 18 * (3 * n - r - 3 * o),
                l = 18 * (o - n);
              if (f.approximately(a, 0)) {
                if (!f.approximately(i, 0)) {
                  var s = -l / i;
                  if (0 <= s && s <= 1) return [s];
                }
                return [];
              }
              var u = i * i - 4 * a * l,
                c = Math.sqrt(u),
                d = 2 * a;
              return f.approximately(d, 0)
                ? []
                : [(c - i) / d, -(i + c) / d].filter(function (e) {
                    return 0 <= e && e <= 1;
                  });
            },
            bboxoverlap: function (t, n) {
              var r = ["x", "y"],
                o = r.length,
                a,
                i,
                l,
                s,
                u;
              for (a = 0; a < o; a++)
                if (
                  ((i = r[a]),
                  (l = t[i].mid),
                  (s = n[i].mid),
                  (u = (t[i].size + n[i].size) / 2),
                  e(l - s) >= u)
                )
                  return !1;
              return !0;
            },
            expandbox: function (e, t) {
              (t.x.min < e.x.min && (e.x.min = t.x.min),
                t.y.min < e.y.min && (e.y.min = t.y.min),
                t.z && t.z.min < e.z.min && (e.z.min = t.z.min),
                t.x.max > e.x.max && (e.x.max = t.x.max),
                t.y.max > e.y.max && (e.y.max = t.y.max),
                t.z && t.z.max > e.z.max && (e.z.max = t.z.max),
                (e.x.mid = (e.x.min + e.x.max) / 2),
                (e.y.mid = (e.y.min + e.y.max) / 2),
                e.z && (e.z.mid = (e.z.min + e.z.max) / 2),
                (e.x.size = e.x.max - e.x.min),
                (e.y.size = e.y.max - e.y.min),
                e.z && (e.z.size = e.z.max - e.z.min));
            },
            pairiteration: function (e, t, n) {
              var r = e.bbox(),
                o = t.bbox(),
                a = 1e5,
                i = n || 0.5;
              if (r.x.size + r.y.size < i && o.x.size + o.y.size < i)
                return [
                  (((a * (e._t1 + e._t2)) / 2) | 0) / a +
                    "/" +
                    (((a * (t._t1 + t._t2)) / 2) | 0) / a,
                ];
              var l = e.split(0.5),
                s = t.split(0.5),
                u = [
                  { left: l.left, right: s.left },
                  { left: l.left, right: s.right },
                  { left: l.right, right: s.right },
                  { left: l.right, right: s.left },
                ];
              u = u.filter(function (e) {
                return f.bboxoverlap(e.left.bbox(), e.right.bbox());
              });
              var c = [];
              return (
                u.length === 0 ||
                  (u.forEach(function (e) {
                    c = c.concat(f.pairiteration(e.left, e.right, i));
                  }),
                  (c = c.filter(function (e, t) {
                    return c.indexOf(e) === t;
                  }))),
                c
              );
            },
            getccenter: function (e, r, a) {
              var i = r.x - e.x,
                l = r.y - e.y,
                s = a.x - r.x,
                u = a.y - r.y,
                m = i * t(d) - l * n(d),
                p = i * n(d) + l * t(d),
                _ = s * t(d) - u * n(d),
                g = s * n(d) + u * t(d),
                h = (e.x + r.x) / 2,
                y = (e.y + r.y) / 2,
                C = (r.x + a.x) / 2,
                b = (r.y + a.y) / 2,
                v = h + m,
                S = y + p,
                R = C + _,
                L = b + g,
                E = f.lli8(h, y, v, S, C, b, R, L),
                k = f.dist(E, e),
                I = o(e.y - E.y, e.x - E.x),
                T = o(r.y - E.y, r.x - E.x),
                D = o(a.y - E.y, a.x - E.x),
                x;
              return (
                I < D
                  ? ((I > T || T > D) && (I += c),
                    I > D && ((x = D), (D = I), (I = x)))
                  : D < T && T < I
                    ? ((x = D), (D = I), (I = x))
                    : (D += c),
                (E.s = I),
                (E.e = D),
                (E.r = k),
                E
              );
            },
          };
        l.exports = f;
      })();
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    var d = {},
      m = { exports: d };
    function p() {
      (function () {
        var e = c(),
          t = function (e) {
            ((this.curves = []),
              (this._3d = !1),
              e && ((this.curves = e), (this._3d = this.curves[0]._3d)));
          };
        ((t.prototype = {
          valueOf: function () {
            return this.toString();
          },
          toString: function () {
            return (
              "[" +
              this.curves
                .map(function (t) {
                  return e.pointsToString(t.points);
                })
                .join(", ") +
              "]"
            );
          },
          addCurve: function (e) {
            (this.curves.push(e), (this._3d = this._3d || e._3d));
          },
          length: function () {
            return this.curves
              .map(function (e) {
                return e.length();
              })
              .reduce(function (e, t) {
                return e + t;
              });
          },
          curve: function (e) {
            return this.curves[e];
          },
          bbox: function () {
            for (var t = this.curves, n = t[0].bbox(), r = 1; r < t.length; r++)
              e.expandbox(n, t[r].bbox());
            return n;
          },
          offset: function (e) {
            var n = [];
            return (
              this.curves.forEach(function (t) {
                n = n.concat(t.offset(e));
              }),
              new t(n)
            );
          },
        }),
          (m.exports = t));
      })();
    }
    var _ = !1;
    function f() {
      return (_ || ((_ = !0), p()), m.exports);
    }
    var g = {},
      h = { exports: g };
    function y() {
      (function () {
        var e = Math.abs,
          t = Math.min,
          n = Math.max,
          r = Math.acos,
          o = Math.sqrt,
          a = Math.PI,
          i = { x: 0, y: 0, z: 0 },
          l = c(),
          s = f(),
          u = function (t) {
            var n = t && t.forEach ? t : [].slice.call(arguments),
              r = !1;
            if (typeof n[0] == "object") {
              r = n.length;
              var o = [];
              (n.forEach(function (e) {
                ["x", "y", "z"].forEach(function (t) {
                  typeof e[t] != "undefined" && o.push(e[t]);
                });
              }),
                (n = o));
            }
            var a = !1,
              i = n.length;
            if (r) {
              if (r > 4) {
                if (arguments.length !== 1)
                  throw new Error(
                    "Only new Bezier(point[]) is accepted for 4th and higher order curves",
                  );
                a = !0;
              }
            } else if (
              i !== 6 &&
              i !== 8 &&
              i !== 9 &&
              i !== 12 &&
              arguments.length !== 1
            )
              throw new Error(
                "Only new Bezier(point[]) is accepted for 4th and higher order curves",
              );
            var s =
              (!a && (i === 9 || i === 12)) ||
              (t && t[0] && typeof t[0].z != "undefined");
            this._3d = s;
            for (var u = [], c = 0, d = s ? 3 : 2; c < i; c += d) {
              var m = { x: n[c], y: n[c + 1] };
              (s && (m.z = n[c + 2]), u.push(m));
            }
            ((this.order = u.length - 1), (this.points = u));
            var p = ["x", "y"];
            (s && p.push("z"),
              (this.dims = p),
              (this.dimlen = p.length),
              (function (t) {
                for (
                  var n = t.order,
                    r = t.points,
                    o = l.align(r, { p1: r[0], p2: r[n] }),
                    a = 0;
                  a < o.length;
                  a++
                )
                  if (e(o[a].y) > 1e-4) {
                    t._linear = !1;
                    return;
                  }
                t._linear = !0;
              })(this),
              (this._t1 = 0),
              (this._t2 = 1),
              this.update());
          };
        u.fromSVG = function (e) {
          var t = e.match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g).map(parseFloat),
            n = /[cq]/.test(e);
          return n
            ? ((t = t.map(function (e, n) {
                return n < 2 ? e : e + t[n % 2];
              })),
              new u(t))
            : new u(t);
        };
        function d(e, t, n, r, o) {
          typeof o == "undefined" && (o = 0.5);
          var a = l.projectionratio(o, e),
            i = 1 - a,
            s = { x: a * t.x + i * r.x, y: a * t.y + i * r.y },
            u = l.abcratio(o, e),
            c = { x: n.x + (n.x - s.x) / u, y: n.y + (n.y - s.y) / u };
          return { A: c, B: n, C: s };
        }
        ((u.quadraticFromPoints = function (e, t, n, r) {
          if ((typeof r == "undefined" && (r = 0.5), r === 0))
            return new u(t, t, n);
          if (r === 1) return new u(e, t, t);
          var o = d(2, e, t, n, r);
          return new u(e, o.A, n);
        }),
          (u.cubicFromPoints = function (e, t, n, r, o) {
            typeof r == "undefined" && (r = 0.5);
            var a = d(3, e, t, n, r);
            typeof o == "undefined" && (o = l.dist(t, a.C));
            var i = (o * (1 - r)) / r,
              s = l.dist(e, n),
              c = (n.x - e.x) / s,
              m = (n.y - e.y) / s,
              p = o * c,
              _ = o * m,
              f = i * c,
              g = i * m,
              h = { x: t.x - p, y: t.y - _ },
              y = { x: t.x + f, y: t.y + g },
              C = a.A,
              b = {
                x: C.x + (h.x - C.x) / (1 - r),
                y: C.y + (h.y - C.y) / (1 - r),
              },
              v = { x: C.x + (y.x - C.x) / r, y: C.y + (y.y - C.y) / r },
              S = { x: e.x + (b.x - e.x) / r, y: e.y + (b.y - e.y) / r },
              R = {
                x: n.x + (v.x - n.x) / (1 - r),
                y: n.y + (v.y - n.y) / (1 - r),
              };
            return new u(e, S, R, n);
          }));
        var m = function () {
          return l;
        };
        ((u.getUtils = m),
          (u.prototype = {
            getUtils: m,
            valueOf: function () {
              return this.toString();
            },
            toString: function () {
              return l.pointsToString(this.points);
            },
            toSVG: function (e) {
              if (this._3d) return !1;
              for (
                var t = this.points,
                  n = t[0].x,
                  r = t[0].y,
                  o = ["M", n, r, this.order === 2 ? "Q" : "C"],
                  a = 1,
                  i = t.length;
                a < i;
                a++
              )
                (o.push(t[a].x), o.push(t[a].y));
              return o.join(" ");
            },
            update: function () {
              this.dpoints = [];
              for (
                var e = this.points, t = e.length, n = t - 1;
                t > 1;
                t--, n--
              ) {
                for (var r = [], o = 0, a; o < n; o++)
                  ((a = {
                    x: n * (e[o + 1].x - e[o].x),
                    y: n * (e[o + 1].y - e[o].y),
                  }),
                    this._3d && (a.z = n * (e[o + 1].z - e[o].z)),
                    r.push(a));
                (this.dpoints.push(r), (e = r));
              }
              this.computedirection();
            },
            computedirection: function () {
              var e = this.points,
                t = l.angle(e[0], e[this.order], e[1]);
              this.clockwise = t > 0;
            },
            length: function () {
              return l.length(this.derivative.bind(this));
            },
            _lut: [],
            getLUT: function (e) {
              if (((e = e || 100), this._lut.length === e)) return this._lut;
              this._lut = [];
              for (var t = 0; t <= e; t++) this._lut.push(this.compute(t / e));
              return this._lut;
            },
            on: function (e, t) {
              t = t || 5;
              for (
                var n = this.getLUT(), r = [], o, a = 0, i = 0;
                i < n.length;
                i++
              )
                ((o = n[i]),
                  l.dist(o, e) < t && (r.push(o), (a += i / n.length)));
              return r.length ? (a /= r.length) : !1;
            },
            project: function (e) {
              var t = this.getLUT(),
                n = t.length - 1,
                r = l.closest(t, e),
                o = r.mdist,
                a = r.mpos;
              if (a === 0 || a === n) {
                var u = a / n,
                  i = this.compute(u);
                return ((i.t = u), (i.d = o), i);
              }
              var s,
                u,
                c,
                d,
                m = (a - 1) / n,
                p = (a + 1) / n,
                _ = 0.1 / n;
              for (o += 1, u = m, s = u; u < p + _; u += _)
                ((c = this.compute(u)),
                  (d = l.dist(e, c)),
                  d < o && ((o = d), (s = u)));
              return ((c = this.compute(s)), (c.t = s), (c.d = o), c);
            },
            get: function (e) {
              return this.compute(e);
            },
            point: function (e) {
              return this.points[e];
            },
            compute: function (e) {
              if (e === 0) return this.points[0];
              if (e === 1) return this.points[this.order];
              var t = this.points,
                n = 1 - e;
              if (this.order === 1)
                return (
                  (c = {
                    x: n * t[0].x + e * t[1].x,
                    y: n * t[0].y + e * t[1].y,
                  }),
                  this._3d && (c.z = n * t[0].z + e * t[1].z),
                  c
                );
              if (this.order < 4) {
                var r = n * n,
                  o = e * e,
                  a,
                  l,
                  s,
                  u = 0;
                this.order === 2
                  ? ((t = [t[0], t[1], t[2], i]),
                    (a = r),
                    (l = n * e * 2),
                    (s = o))
                  : this.order === 3 &&
                    ((a = r * n),
                    (l = r * e * 3),
                    (s = n * o * 3),
                    (u = e * o));
                var c = {
                  x: a * t[0].x + l * t[1].x + s * t[2].x + u * t[3].x,
                  y: a * t[0].y + l * t[1].y + s * t[2].y + u * t[3].y,
                };
                return (
                  this._3d &&
                    (c.z = a * t[0].z + l * t[1].z + s * t[2].z + u * t[3].z),
                  c
                );
              }
              for (
                var d = JSON.parse(JSON.stringify(this.points));
                d.length > 1;
              ) {
                for (var m = 0; m < d.length - 1; m++)
                  ((d[m] = {
                    x: d[m].x + (d[m + 1].x - d[m].x) * e,
                    y: d[m].y + (d[m + 1].y - d[m].y) * e,
                  }),
                    typeof d[m].z != "undefined" &&
                      (d[m] = d[m].z + (d[m + 1].z - d[m].z) * e));
                d.splice(d.length - 1, 1);
              }
              return d[0];
            },
            raise: function () {
              for (
                var e = this.points, t = [e[0]], n, r = e.length, o, a, n = 1;
                n < r;
                n++
              )
                ((o = e[n]),
                  (a = e[n - 1]),
                  (t[n] = {
                    x: ((r - n) / r) * o.x + (n / r) * a.x,
                    y: ((r - n) / r) * o.y + (n / r) * a.y,
                  }));
              return ((t[r] = e[r - 1]), new u(t));
            },
            derivative: function (e) {
              var t = 1 - e,
                n,
                r,
                o = 0,
                a = this.dpoints[0];
              (this.order === 2 && ((a = [a[0], a[1], i]), (n = t), (r = e)),
                this.order === 3 &&
                  ((n = t * t), (r = t * e * 2), (o = e * e)));
              var l = {
                x: n * a[0].x + r * a[1].x + o * a[2].x,
                y: n * a[0].y + r * a[1].y + o * a[2].y,
              };
              return (
                this._3d && (l.z = n * a[0].z + r * a[1].z + o * a[2].z),
                l
              );
            },
            inflections: function () {
              return l.inflections(this.points);
            },
            normal: function (e) {
              return this._3d ? this.__normal3(e) : this.__normal2(e);
            },
            __normal2: function (e) {
              var t = this.derivative(e),
                n = o(t.x * t.x + t.y * t.y);
              return { x: -t.y / n, y: t.x / n };
            },
            __normal3: function (e) {
              var t = this.derivative(e),
                n = this.derivative(e + 0.01),
                r = o(t.x * t.x + t.y * t.y + t.z * t.z),
                a = o(n.x * n.x + n.y * n.y + n.z * n.z);
              ((t.x /= r),
                (t.y /= r),
                (t.z /= r),
                (n.x /= a),
                (n.y /= a),
                (n.z /= a));
              var i = {
                  x: n.y * t.z - n.z * t.y,
                  y: n.z * t.x - n.x * t.z,
                  z: n.x * t.y - n.y * t.x,
                },
                l = o(i.x * i.x + i.y * i.y + i.z * i.z);
              ((i.x /= l), (i.y /= l), (i.z /= l));
              var s = [
                  i.x * i.x,
                  i.x * i.y - i.z,
                  i.x * i.z + i.y,
                  i.x * i.y + i.z,
                  i.y * i.y,
                  i.y * i.z - i.x,
                  i.x * i.z - i.y,
                  i.y * i.z + i.x,
                  i.z * i.z,
                ],
                u = {
                  x: s[0] * t.x + s[1] * t.y + s[2] * t.z,
                  y: s[3] * t.x + s[4] * t.y + s[5] * t.z,
                  z: s[6] * t.x + s[7] * t.y + s[8] * t.z,
                };
              return u;
            },
            hull: function (e) {
              var t = this.points,
                n = [],
                r,
                o = [],
                a = 0,
                i = 0,
                s = 0;
              for (
                o[a++] = t[0],
                  o[a++] = t[1],
                  o[a++] = t[2],
                  this.order === 3 && (o[a++] = t[3]);
                t.length > 1;
              ) {
                for (n = [], i = 0, s = t.length - 1; i < s; i++)
                  ((r = l.lerp(e, t[i], t[i + 1])), (o[a++] = r), n.push(r));
                t = n;
              }
              return o;
            },
            split: function (e, t) {
              if (e === 0 && t) return this.split(t).left;
              if (t === 1) return this.split(e).right;
              var n = this.hull(e),
                r = {
                  left:
                    this.order === 2
                      ? new u([n[0], n[3], n[5]])
                      : new u([n[0], n[4], n[7], n[9]]),
                  right:
                    this.order === 2
                      ? new u([n[5], n[4], n[2]])
                      : new u([n[9], n[8], n[6], n[3]]),
                  span: n,
                };
              if (
                ((r.left._t1 = l.map(0, 0, 1, this._t1, this._t2)),
                (r.left._t2 = l.map(e, 0, 1, this._t1, this._t2)),
                (r.right._t1 = l.map(e, 0, 1, this._t1, this._t2)),
                (r.right._t2 = l.map(1, 0, 1, this._t1, this._t2)),
                !t)
              )
                return r;
              t = l.map(t, e, 1, 0, 1);
              var o = r.right.split(t);
              return o.left;
            },
            extrema: function () {
              var e = this.dims,
                t = {},
                n = [],
                r,
                o;
              return (
                e.forEach(
                  function (e) {
                    ((o = function (t) {
                      return t[e];
                    }),
                      (r = this.dpoints[0].map(o)),
                      (t[e] = l.droots(r)),
                      this.order === 3 &&
                        ((r = this.dpoints[1].map(o)),
                        (t[e] = t[e].concat(l.droots(r)))),
                      (t[e] = t[e].filter(function (e) {
                        return e >= 0 && e <= 1;
                      })),
                      (n = n.concat(t[e].sort())));
                  }.bind(this),
                ),
                (n = n.sort().filter(function (e, t) {
                  return n.indexOf(e) === t;
                })),
                (t.values = n),
                t
              );
            },
            bbox: function () {
              var e = this.extrema(),
                t = {};
              return (
                this.dims.forEach(
                  function (n) {
                    t[n] = l.getminmax(this, n, e[n]);
                  }.bind(this),
                ),
                t
              );
            },
            overlaps: function (e) {
              var t = this.bbox(),
                n = e.bbox();
              return l.bboxoverlap(t, n);
            },
            offset: function (e, t) {
              if (typeof t != "undefined") {
                var n = this.get(e),
                  r = this.normal(e),
                  o = { c: n, n: r, x: n.x + r.x * t, y: n.y + r.y * t };
                return (this._3d && (o.z = n.z + r.z * t), o);
              }
              if (this._linear) {
                var a = this.normal(0),
                  i = this.points.map(function (t) {
                    var n = { x: t.x + e * a.x, y: t.y + e * a.y };
                    return (t.z && r.z && (n.z = t.z + e * a.z), n);
                  });
                return [new u(i)];
              }
              var l = this.reduce();
              return l.map(function (t) {
                return t.scale(e);
              });
            },
            simple: function () {
              if (this.order === 3) {
                var t = l.angle(this.points[0], this.points[3], this.points[1]),
                  n = l.angle(this.points[0], this.points[3], this.points[2]);
                if ((t > 0 && n < 0) || (t < 0 && n > 0)) return !1;
              }
              var o = this.normal(0),
                i = this.normal(1),
                s = o.x * i.x + o.y * i.y;
              this._3d && (s += o.z * i.z);
              var u = e(r(s));
              return u < a / 3;
            },
            reduce: function () {
              var t,
                n = 0,
                r = 0,
                o = 0.01,
                a,
                i = [],
                s = [],
                u = this.extrema().values;
              for (
                u.indexOf(0) === -1 && (u = [0].concat(u)),
                  u.indexOf(1) === -1 && u.push(1),
                  n = u[0],
                  t = 1;
                t < u.length;
                t++
              )
                ((r = u[t]),
                  (a = this.split(n, r)),
                  (a._t1 = n),
                  (a._t2 = r),
                  i.push(a),
                  (n = r));
              return (
                i.forEach(function (t) {
                  for (n = 0, r = 0; r <= 1; )
                    for (r = n + o; r <= 1 + o; r += o)
                      if (((a = t.split(n, r)), !a.simple())) {
                        if (((r -= o), e(n - r) < o)) return [];
                        ((a = t.split(n, r)),
                          (a._t1 = l.map(n, 0, 1, t._t1, t._t2)),
                          (a._t2 = l.map(r, 0, 1, t._t1, t._t2)),
                          s.push(a),
                          (n = r));
                        break;
                      }
                  n < 1 &&
                    ((a = t.split(n, 1)),
                    (a._t1 = l.map(n, 0, 1, t._t1, t._t2)),
                    (a._t2 = t._t2),
                    s.push(a));
                }),
                s
              );
            },
            scale: function (e) {
              var t = this.order,
                n = !1;
              if ((typeof e == "function" && (n = e), n && t === 2))
                return this.raise().scale(n);
              var r = this.clockwise,
                a = n ? n(0) : e,
                i = n ? n(1) : e,
                s = [this.offset(0, 10), this.offset(1, 10)],
                c = l.lli4(s[0], s[0].c, s[1], s[1].c);
              if (!c)
                throw new Error(
                  "cannot scale this curve. Try reducing it first.",
                );
              var d = this.points,
                m = [];
              return (
                [0, 1].forEach(
                  function (e) {
                    var n = (m[e * t] = l.copy(d[e * t]));
                    ((n.x += (e ? i : a) * s[e].n.x),
                      (n.y += (e ? i : a) * s[e].n.y));
                  }.bind(this),
                ),
                n
                  ? ([0, 1].forEach(
                      function (a) {
                        if (!(this.order === 2 && a)) {
                          var i = d[a + 1],
                            l = { x: i.x - c.x, y: i.y - c.y },
                            s = n ? n((a + 1) / t) : e;
                          n && !r && (s = -s);
                          var u = o(l.x * l.x + l.y * l.y);
                          ((l.x /= u),
                            (l.y /= u),
                            (m[a + 1] = {
                              x: i.x + s * l.x,
                              y: i.y + s * l.y,
                            }));
                        }
                      }.bind(this),
                    ),
                    new u(m))
                  : ([0, 1].forEach(
                      function (e) {
                        if (!(this.order === 2 && e)) {
                          var n = m[e * t],
                            r = this.derivative(e),
                            o = { x: n.x + r.x, y: n.y + r.y };
                          m[e + 1] = l.lli4(n, o, c, d[e + 1]);
                        }
                      }.bind(this),
                    ),
                    new u(m))
              );
            },
            outline: function (e, t, n, r) {
              t = typeof t == "undefined" ? e : t;
              var o = this.reduce(),
                a = o.length,
                i = [],
                u = [],
                c,
                d = 0,
                m = this.length(),
                p = typeof n != "undefined" && typeof r != "undefined";
              function _(e, t, n, r, o) {
                return function (a) {
                  var i = r / n,
                    s = (r + o) / n,
                    u = t - e;
                  return l.map(a, 0, 1, e + i * u, e + s * u);
                };
              }
              (o.forEach(function (o) {
                ((S = o.length()),
                  p
                    ? (i.push(o.scale(_(e, n, m, d, S))),
                      u.push(o.scale(_(-t, -r, m, d, S))))
                    : (i.push(o.scale(e)), u.push(o.scale(-t))),
                  (d += S));
              }),
                (u = u
                  .map(function (e) {
                    return (
                      (c = e.points),
                      c[3]
                        ? (e.points = [c[3], c[2], c[1], c[0]])
                        : (e.points = [c[2], c[1], c[0]]),
                      e
                    );
                  })
                  .reverse()));
              var f = i[0].points[0],
                g = i[a - 1].points[i[a - 1].points.length - 1],
                h = u[a - 1].points[u[a - 1].points.length - 1],
                y = u[0].points[0],
                C = l.makeline(h, f),
                b = l.makeline(g, y),
                v = [C].concat(i).concat([b]).concat(u),
                S = v.length;
              return new s(v);
            },
            outlineshapes: function (e, t, n) {
              t = t || e;
              for (
                var r = this.outline(e, t).curves, o = [], a = 1, i = r.length;
                a < i / 2;
                a++
              ) {
                var s = l.makeshape(r[a], r[i - a], n);
                ((s.startcap.virtual = a > 1),
                  (s.endcap.virtual = a < i / 2 - 1),
                  o.push(s));
              }
              return o;
            },
            intersects: function (e, t) {
              return e
                ? e.p1 && e.p2
                  ? this.lineIntersects(e)
                  : (e instanceof u && (e = e.reduce()),
                    this.curveintersects(this.reduce(), e, t))
                : this.selfintersects(t);
            },
            lineIntersects: function (e) {
              var r = t(e.p1.x, e.p2.x),
                o = t(e.p1.y, e.p2.y),
                a = n(e.p1.x, e.p2.x),
                i = n(e.p1.y, e.p2.y),
                s = this;
              return l.roots(this.points, e).filter(function (e) {
                var t = s.get(e);
                return l.between(t.x, r, a) && l.between(t.y, o, i);
              });
            },
            selfintersects: function (e) {
              var t = this.reduce(),
                n,
                r = t.length - 2,
                o = [],
                a,
                i,
                l;
              for (n = 0; n < r; n++)
                ((i = t.slice(n, n + 1)),
                  (l = t.slice(n + 2)),
                  (a = this.curveintersects(i, l, e)),
                  (o = o.concat(a)));
              return o;
            },
            curveintersects: function (e, t, n) {
              var r = [];
              e.forEach(function (e) {
                t.forEach(function (t) {
                  e.overlaps(t) && r.push({ left: e, right: t });
                });
              });
              var o = [];
              return (
                r.forEach(function (e) {
                  var t = l.pairiteration(e.left, e.right, n);
                  t.length > 0 && (o = o.concat(t));
                }),
                o
              );
            },
            arcs: function (e) {
              e = e || 0.5;
              var t = [];
              return this._iterate(e, t);
            },
            _error: function (t, n, r, o) {
              var a = (o - r) / 4,
                i = this.get(r + a),
                s = this.get(o - a),
                u = l.dist(t, n),
                c = l.dist(t, i),
                d = l.dist(t, s);
              return e(c - u) + e(d - u);
            },
            _iterate: function (e, t) {
              var n = 0,
                r = 1,
                o;
              do {
                ((o = 0), (r = 1));
                var a = this.get(n),
                  i,
                  s,
                  u,
                  c,
                  d = !1,
                  m = !1,
                  p,
                  _ = r,
                  f = 1;
                do {
                  ((m = d),
                    (c = u),
                    (_ = (n + r) / 2),
                    (i = this.get(_)),
                    (s = this.get(r)),
                    (u = l.getccenter(a, i, s)),
                    (u.interval = { start: n, end: r }));
                  var g = this._error(u, a, n, r);
                  if (((d = g <= e), (p = m && !d), p || (f = r), d)) {
                    if (r >= 1) {
                      ((u.interval.end = f = 1), (c = u));
                      break;
                    }
                    r = r + (r - n) / 2;
                  } else r = _;
                } while (!p && o++ < 100);
                if (o >= 100) break;
                ((c = c || u), t.push(c), (n = f));
              } while (r < 1);
              return t;
            },
          }),
          (h.exports = u));
      })();
    }
    var C = !1;
    function b() {
      return (C || ((C = !0), y()), h.exports);
    }
    var v = {},
      S = { exports: v };
    function R() {
      S.exports = b();
    }
    var L = !1;
    function E() {
      return (L || ((L = !0), R()), S.exports);
    }
    function k(e) {
      switch (e) {
        case void 0:
          return E();
      }
    }
    a.exports = k;
  },
  null,
);
