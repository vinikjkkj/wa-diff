__d(
  "d3-time-2.1.1",
  ["d3-array-2.12.1"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e && typeof e == "object" && "default" in e ? e.default : e;
    }
    var l = e(n("d3-array-2.12.1")),
      s = {},
      u = { exports: s },
      c;
    function d() {
      (function (e, t) {
        typeof s == "object" && typeof u != "undefined"
          ? t(s, l())
          : typeof c == "function" && c.amd
            ? c(["exports", "d3-array"], t)
            : ((e = typeof globalThis != "undefined" ? globalThis : e || self),
              t((e.d3 = e.d3 || {}), e.d3));
      })(this, function (e, t) {
        var n = new Date(),
          r = new Date();
        function o(e, t, a, i) {
          function l(t) {
            return (
              e((t = arguments.length === 0 ? new Date() : new Date(+t))),
              t
            );
          }
          return (
            (l.floor = function (t) {
              return (e((t = new Date(+t))), t);
            }),
            (l.ceil = function (n) {
              return (e((n = new Date(n - 1))), t(n, 1), e(n), n);
            }),
            (l.round = function (e) {
              var t = l(e),
                n = l.ceil(e);
              return e - t < n - e ? t : n;
            }),
            (l.offset = function (e, n) {
              return (t((e = new Date(+e)), n == null ? 1 : Math.floor(n)), e);
            }),
            (l.range = function (n, r, o) {
              var a = [],
                i;
              if (
                ((n = l.ceil(n)),
                (o = o == null ? 1 : Math.floor(o)),
                !(n < r) || !(o > 0))
              )
                return a;
              do (a.push((i = new Date(+n))), t(n, o), e(n));
              while (i < n && n < r);
              return a;
            }),
            (l.filter = function (n) {
              return o(
                function (t) {
                  if (t >= t) for (; e(t), !n(t); ) t.setTime(t - 1);
                },
                function (e, r) {
                  if (e >= e)
                    if (r < 0) for (; ++r <= 0; ) for (; t(e, -1), !n(e); );
                    else for (; --r >= 0; ) for (; t(e, 1), !n(e); );
                },
              );
            }),
            a &&
              ((l.count = function (t, o) {
                return (
                  n.setTime(+t),
                  r.setTime(+o),
                  e(n),
                  e(r),
                  Math.floor(a(n, r))
                );
              }),
              (l.every = function (e) {
                return (
                  (e = Math.floor(e)),
                  !isFinite(e) || !(e > 0)
                    ? null
                    : e > 1
                      ? l.filter(
                          i
                            ? function (t) {
                                return i(t) % e === 0;
                              }
                            : function (t) {
                                return l.count(0, t) % e === 0;
                              },
                        )
                      : l
                );
              })),
            l
          );
        }
        var a = o(
          function () {},
          function (e, t) {
            e.setTime(+e + t);
          },
          function (e, t) {
            return t - e;
          },
        );
        a.every = function (e) {
          return (
            (e = Math.floor(e)),
            !isFinite(e) || !(e > 0)
              ? null
              : e > 1
                ? o(
                    function (t) {
                      t.setTime(Math.floor(t / e) * e);
                    },
                    function (t, n) {
                      t.setTime(+t + n * e);
                    },
                    function (t, n) {
                      return (n - t) / e;
                    },
                  )
                : a
          );
        };
        var i = a.range,
          l = 1e3,
          s = l * 60,
          u = s * 60,
          c = u * 24,
          d = c * 7,
          m = c * 30,
          p = c * 365,
          _ = o(
            function (e) {
              e.setTime(e - e.getMilliseconds());
            },
            function (e, t) {
              e.setTime(+e + t * l);
            },
            function (e, t) {
              return (t - e) / l;
            },
            function (e) {
              return e.getUTCSeconds();
            },
          ),
          f = _.range,
          g = o(
            function (e) {
              e.setTime(e - e.getMilliseconds() - e.getSeconds() * l);
            },
            function (e, t) {
              e.setTime(+e + t * s);
            },
            function (e, t) {
              return (t - e) / s;
            },
            function (e) {
              return e.getMinutes();
            },
          ),
          h = g.range,
          y = o(
            function (e) {
              e.setTime(
                e -
                  e.getMilliseconds() -
                  e.getSeconds() * l -
                  e.getMinutes() * s,
              );
            },
            function (e, t) {
              e.setTime(+e + t * u);
            },
            function (e, t) {
              return (t - e) / u;
            },
            function (e) {
              return e.getHours();
            },
          ),
          C = y.range,
          b = o(
            function (e) {
              return e.setHours(0, 0, 0, 0);
            },
            function (e, t) {
              return e.setDate(e.getDate() + t);
            },
            function (e, t) {
              return (
                (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * s) /
                c
              );
            },
            function (e) {
              return e.getDate() - 1;
            },
          ),
          v = b.range;
        function S(e) {
          return o(
            function (t) {
              (t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
                t.setHours(0, 0, 0, 0));
            },
            function (e, t) {
              e.setDate(e.getDate() + t * 7);
            },
            function (e, t) {
              return (
                (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * s) /
                d
              );
            },
          );
        }
        var R = S(0),
          L = S(1),
          E = S(2),
          k = S(3),
          I = S(4),
          T = S(5),
          D = S(6),
          x = R.range,
          $ = L.range,
          P = E.range,
          N = k.range,
          M = I.range,
          w = T.range,
          A = D.range,
          F = o(
            function (e) {
              (e.setDate(1), e.setHours(0, 0, 0, 0));
            },
            function (e, t) {
              e.setMonth(e.getMonth() + t);
            },
            function (e, t) {
              return (
                t.getMonth() -
                e.getMonth() +
                (t.getFullYear() - e.getFullYear()) * 12
              );
            },
            function (e) {
              return e.getMonth();
            },
          ),
          O = F.range,
          B = o(
            function (e) {
              (e.setMonth(0, 1), e.setHours(0, 0, 0, 0));
            },
            function (e, t) {
              e.setFullYear(e.getFullYear() + t);
            },
            function (e, t) {
              return t.getFullYear() - e.getFullYear();
            },
            function (e) {
              return e.getFullYear();
            },
          );
        B.every = function (e) {
          return !isFinite((e = Math.floor(e))) || !(e > 0)
            ? null
            : o(
                function (t) {
                  (t.setFullYear(Math.floor(t.getFullYear() / e) * e),
                    t.setMonth(0, 1),
                    t.setHours(0, 0, 0, 0));
                },
                function (t, n) {
                  t.setFullYear(t.getFullYear() + n * e);
                },
              );
        };
        var W = B.range,
          q = o(
            function (e) {
              e.setUTCSeconds(0, 0);
            },
            function (e, t) {
              e.setTime(+e + t * s);
            },
            function (e, t) {
              return (t - e) / s;
            },
            function (e) {
              return e.getUTCMinutes();
            },
          ),
          U = q.range,
          V = o(
            function (e) {
              e.setUTCMinutes(0, 0, 0);
            },
            function (e, t) {
              e.setTime(+e + t * u);
            },
            function (e, t) {
              return (t - e) / u;
            },
            function (e) {
              return e.getUTCHours();
            },
          ),
          H = V.range,
          G = o(
            function (e) {
              e.setUTCHours(0, 0, 0, 0);
            },
            function (e, t) {
              e.setUTCDate(e.getUTCDate() + t);
            },
            function (e, t) {
              return (t - e) / c;
            },
            function (e) {
              return e.getUTCDate() - 1;
            },
          ),
          z = G.range;
        function j(e) {
          return o(
            function (t) {
              (t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
                t.setUTCHours(0, 0, 0, 0));
            },
            function (e, t) {
              e.setUTCDate(e.getUTCDate() + t * 7);
            },
            function (e, t) {
              return (t - e) / d;
            },
          );
        }
        var K = j(0),
          Q = j(1),
          X = j(2),
          Y = j(3),
          J = j(4),
          Z = j(5),
          ee = j(6),
          te = K.range,
          ne = Q.range,
          re = X.range,
          oe = Y.range,
          ae = J.range,
          ie = Z.range,
          le = ee.range,
          se = o(
            function (e) {
              (e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0));
            },
            function (e, t) {
              e.setUTCMonth(e.getUTCMonth() + t);
            },
            function (e, t) {
              return (
                t.getUTCMonth() -
                e.getUTCMonth() +
                (t.getUTCFullYear() - e.getUTCFullYear()) * 12
              );
            },
            function (e) {
              return e.getUTCMonth();
            },
          ),
          ue = se.range,
          ce = o(
            function (e) {
              (e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0));
            },
            function (e, t) {
              e.setUTCFullYear(e.getUTCFullYear() + t);
            },
            function (e, t) {
              return t.getUTCFullYear() - e.getUTCFullYear();
            },
            function (e) {
              return e.getUTCFullYear();
            },
          );
        ce.every = function (e) {
          return !isFinite((e = Math.floor(e))) || !(e > 0)
            ? null
            : o(
                function (t) {
                  (t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
                    t.setUTCMonth(0, 1),
                    t.setUTCHours(0, 0, 0, 0));
                },
                function (t, n) {
                  t.setUTCFullYear(t.getUTCFullYear() + n * e);
                },
              );
        };
        var de = ce.range;
        function me(e, n, r, o, i, f) {
          var g = [
            [_, 1, l],
            [_, 5, 5 * l],
            [_, 15, 15 * l],
            [_, 30, 30 * l],
            [f, 1, s],
            [f, 5, 5 * s],
            [f, 15, 15 * s],
            [f, 30, 30 * s],
            [i, 1, u],
            [i, 3, 3 * u],
            [i, 6, 6 * u],
            [i, 12, 12 * u],
            [o, 1, c],
            [o, 2, 2 * c],
            [r, 1, d],
            [n, 1, m],
            [n, 3, 3 * m],
            [e, 1, p],
          ];
          function h(e, t, n) {
            var r = t < e;
            if (r) {
              var o = [t, e];
              ((e = o[0]), (t = o[1]));
            }
            var a = n && typeof n.range == "function" ? n : y(e, t, n),
              i = a ? a.range(e, +t + 1) : [];
            return r ? i.reverse() : i;
          }
          function y(n, r, o) {
            var i = Math.abs(r - n) / o,
              l = t
                .bisector(function (e) {
                  var t = e[2];
                  return t;
                })
                .right(g, i);
            if (l === g.length) return e.every(t.tickStep(n / p, r / p, o));
            if (l === 0) return a.every(Math.max(t.tickStep(n, r, o), 1));
            var s = g[i / g[l - 1][2] < g[l][2] / i ? l - 1 : l],
              u = s[0],
              c = s[1];
            return u.every(c);
          }
          return [h, y];
        }
        var pe = me(ce, se, K, G, V, q),
          _e = pe[0],
          fe = pe[1],
          ge = me(B, F, R, b, y, g),
          he = ge[0],
          ye = ge[1];
        ((e.timeDay = b),
          (e.timeDays = v),
          (e.timeFriday = T),
          (e.timeFridays = w),
          (e.timeHour = y),
          (e.timeHours = C),
          (e.timeInterval = o),
          (e.timeMillisecond = a),
          (e.timeMilliseconds = i),
          (e.timeMinute = g),
          (e.timeMinutes = h),
          (e.timeMonday = L),
          (e.timeMondays = $),
          (e.timeMonth = F),
          (e.timeMonths = O),
          (e.timeSaturday = D),
          (e.timeSaturdays = A),
          (e.timeSecond = _),
          (e.timeSeconds = f),
          (e.timeSunday = R),
          (e.timeSundays = x),
          (e.timeThursday = I),
          (e.timeThursdays = M),
          (e.timeTickInterval = ye),
          (e.timeTicks = he),
          (e.timeTuesday = E),
          (e.timeTuesdays = P),
          (e.timeWednesday = k),
          (e.timeWednesdays = N),
          (e.timeWeek = R),
          (e.timeWeeks = x),
          (e.timeYear = B),
          (e.timeYears = W),
          (e.utcDay = G),
          (e.utcDays = z),
          (e.utcFriday = Z),
          (e.utcFridays = ie),
          (e.utcHour = V),
          (e.utcHours = H),
          (e.utcMillisecond = a),
          (e.utcMilliseconds = i),
          (e.utcMinute = q),
          (e.utcMinutes = U),
          (e.utcMonday = Q),
          (e.utcMondays = ne),
          (e.utcMonth = se),
          (e.utcMonths = ue),
          (e.utcSaturday = ee),
          (e.utcSaturdays = le),
          (e.utcSecond = _),
          (e.utcSeconds = f),
          (e.utcSunday = K),
          (e.utcSundays = te),
          (e.utcThursday = J),
          (e.utcThursdays = ae),
          (e.utcTickInterval = fe),
          (e.utcTicks = _e),
          (e.utcTuesday = X),
          (e.utcTuesdays = re),
          (e.utcWednesday = Y),
          (e.utcWednesdays = oe),
          (e.utcWeek = K),
          (e.utcWeeks = te),
          (e.utcYear = ce),
          (e.utcYears = de),
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
