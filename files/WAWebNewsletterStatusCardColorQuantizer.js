__d(
  "WAWebNewsletterStatusCardColorQuantizer",
  [],
  function (t, n, r, o, a, i) {
    var e = 16,
      l = 32,
      s = 8,
      u = l * l,
      c = l,
      d = l * l * l,
      m = 4,
      p = 3,
      _ = 255,
      f = Math.fround(0.05),
      g = Math.fround(0.95),
      h = 10,
      y = 37,
      C = Math.fround(0.82),
      b = 6,
      v = 2,
      S = 4,
      R = 60,
      L = 360;
    function E(t) {
      var n = k(t),
        r = I(n);
      return r.length <= e
        ? r.map(function (e) {
            return { color: X(e), population: n[e] };
          })
        : T(r, n)
            .map(function (e) {
              return A(e, r, n);
            })
            .filter(function (e) {
              return U(e.color);
            });
    }
    function k(e) {
      for (var t = new Uint32Array(d), n = 0; n + p < e.length; n += m) {
        var r = e[n + p] === 0 ? 0 : K(e[n], e[n + 1], e[n + 2]);
        t[r] += 1;
      }
      return t;
    }
    function I(e) {
      var t = [];
      return (
        e.forEach(function (e, n) {
          e > 0 && U(X(n)) && t.push(n);
        }),
        t
      );
    }
    function T(t, n) {
      var r = [];
      for (F(r, N(t, n, 0, t.length - 1)); r.length < e; ) {
        var o = O(r);
        if (o == null || o.upper <= o.lower) break;
        var a = D(o, t, n);
        (F(r, N(t, n, a + 1, o.upper)), F(r, N(t, n, o.lower, a)));
      }
      return r;
    }
    function D(e, t, n) {
      x(t, e, P(e));
      for (
        var r = Math.floor(e.population / 2), o = 0, a = e.lower;
        a <= e.upper;
        a++
      )
        if (((o += n[t[a]]), o >= r)) return Math.min(e.upper - 1, a);
      return e.lower;
    }
    function x(e, t, n) {
      var r = t.lower,
        o = t.upper,
        a = e.slice(r, o + 1).sort(function (e, t) {
          return $(e, n) - $(t, n);
        });
      e.splice.apply(e, [r, a.length].concat(a));
    }
    function $(e, t) {
      return t === "red"
        ? e
        : t === "green"
          ? J(e) * u + Y(e) * c + Z(e)
          : t === "blue"
            ? Z(e) * u + J(e) * c + Y(e)
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t,
                );
              })();
    }
    function P(e) {
      var t = e.blue,
        n = e.green,
        r = e.red,
        o = r.max - r.min,
        a = n.max - n.min,
        i = t.max - t.min;
      return o >= a && o >= i ? "red" : a >= o && a >= i ? "green" : "blue";
    }
    function N(e, t, n, r) {
      var o = e.slice(n, r + 1);
      return {
        lower: n,
        upper: r,
        population: o.reduce(function (e, n) {
          return e + t[n];
        }, 0),
        red: M(o, Y),
        green: M(o, J),
        blue: M(o, Z),
      };
    }
    function M(e, t) {
      return e.reduce(
        function (e, n) {
          return { min: Math.min(e.min, t(n)), max: Math.max(e.max, t(n)) };
        },
        { min: 1 / 0, max: -1 / 0 },
      );
    }
    function w(e) {
      var t = e.blue,
        n = e.green,
        r = e.red;
      return (r.max - r.min + 1) * (n.max - n.min + 1) * (t.max - t.min + 1);
    }
    function A(e, t, n) {
      var r = e.lower,
        o = e.population,
        a = e.upper,
        i = t.slice(r, a + 1),
        l = function (t) {
          return (
            Math.round(
              Math.fround(
                i.reduce(function (e, r) {
                  return e + n[r] * t(r);
                }, 0) / o,
              ),
            ) * s
          );
        };
      return { color: { r: l(Y), g: l(J), b: l(Z) }, population: o };
    }
    function F(e, t) {
      var n = e.length;
      for (e.push(t); n > 0; ) {
        var r = Math.floor((n - 1) / 2);
        if (q(t, e[r]) >= 0) break;
        ((e[n] = e[r]), (n = r));
      }
      e[n] = t;
    }
    function O(e) {
      var t = e[0],
        n = e.pop();
      return (e.length > 0 && n != null && B(e, n), t);
    }
    function B(e, t) {
      for (var n = Math.floor(e.length / 2), r = 0; r < n; ) {
        var o = W(e, r);
        if (q(t, e[o]) <= 0) break;
        ((e[r] = e[o]), (r = o));
      }
      e[r] = t;
    }
    function W(e, t) {
      var n = 2 * t + 1,
        r = n + 1;
      return r < e.length && q(e[n], e[r]) > 0 ? r : n;
    }
    function q(e, t) {
      return w(t) - w(e);
    }
    function U(e) {
      var t = H(e),
        n = t.hue,
        r = t.lightness,
        o = t.saturation;
      return r > f && r < g && !V(n, o);
    }
    function V(e, t) {
      return e >= h && e <= y && t <= C;
    }
    function H(e) {
      var t = e.b,
        n = e.g,
        r = e.r,
        o = j(r),
        a = j(n),
        i = j(t),
        l = Math.max(o, a, i),
        s = Math.min(o, a, i),
        u = Math.fround(Math.fround(l + s) / 2);
      if (l === s) return { hue: 0, saturation: 0, lightness: u };
      var c = Math.fround(l - s),
        d = Math.fround(
          c / Math.fround(1 - Math.abs(Math.fround(Math.fround(2 * u) - 1))),
        );
      return {
        hue: z(G(o, a, i, l, c)),
        saturation: Math.min(1, d),
        lightness: u,
      };
    }
    function G(e, t, n, r, o) {
      return r === e
        ? Math.fround(Math.fround(t - n) / o) % b
        : Math.fround(
            r === t
              ? Math.fround(Math.fround(n - e) / o) + v
              : Math.fround(Math.fround(e - t) / o) + S,
          );
    }
    function z(e) {
      var t = Math.fround(e * R) % L;
      return t < 0 ? Math.fround(t + L) : t;
    }
    function j(e) {
      return Math.fround(e / _);
    }
    function K(e, t, n) {
      return Q(e) * u + Q(t) * c + Q(n);
    }
    function Q(e) {
      return Math.floor(e / s);
    }
    function X(e) {
      return { r: Y(e) * s, g: J(e) * s, b: Z(e) * s };
    }
    function Y(e) {
      return Math.floor(e / u);
    }
    function J(e) {
      return Math.floor(e / c) % l;
    }
    function Z(e) {
      return e % l;
    }
    i.quantizeCardColors = E;
  },
  66,
);
