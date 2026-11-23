__d(
  "WAWebChatStickerStatusPageBackground",
  [],
  function (t, n, r, o, a, i) {
    var e = [
        [254, 226, 216],
        [255, 218, 231],
        [254, 250, 202],
        [237, 210, 194],
        [253, 172, 145],
        [255, 171, 199],
        [206, 149, 113],
        [255, 167, 153],
        [91, 60, 41],
        [107, 52, 36],
        [42, 31, 24],
        [80, 67, 52],
      ],
      l = 4,
      s = 255,
      u = 128,
      c = 0.05,
      d = 3,
      m = 0.2,
      p = 0.15,
      _ = 0.05,
      f = [
        [0.4122214708, 0.5363325363, 0.0514459929],
        [0.2119034982, 0.6806995451, 0.1073969566],
        [0.0883024619, 0.2817188376, 0.6299787005],
      ],
      g = [
        [0.2104542553, 0.793617785, -0.0040720468],
        [1.9779984951, -2.428592205, 0.4505937099],
        [0.0259040371, 0.7827717662, -0.808675766],
      ];
    function h(t) {
      var n,
        r = y(t),
        o = r.edge,
        a = r.opaque,
        i = e.map(function (e) {
          return v(e, o, a);
        }),
        l = Math.max.apply(
          Math,
          i.map(function (e) {
            return e.visibleEdge;
          }),
        ),
        s = i.filter(function (e) {
          return e.visibleEdge >= l - m;
        }),
        u = Math.min.apply(
          Math,
          s.map(function (e) {
            return e.resemblance;
          }),
        ),
        c = s.find(function (e) {
          return e.resemblance <= u + _;
        });
      return x((n = c == null ? void 0 : c.color) != null ? n : e[0]);
    }
    function y(e) {
      for (
        var t = e.data, n = e.height, r = e.width, o = [], a = [], i = 0;
        i < n;
        i++
      )
        for (var u = 0; u < r; u++)
          if (C(e, u, i)) {
            var c = (i * r + u) * l,
              d = [t[c], t[c + 1], t[c + 2]],
              m = { alpha: t[c + 3] / s, color: d, oklab: L(d) };
            (a.push(m), b(e, u, i) && o.push(m));
          }
      return { edge: o, opaque: a };
    }
    function C(e, t, n) {
      var r = e.data,
        o = e.height,
        a = e.width;
      return t >= 0 && n >= 0 && t < a && n < o && r[(n * a + t) * l + 3] >= u;
    }
    function b(e, t, n) {
      return (
        !C(e, t - 1, n) || !C(e, t + 1, n) || !C(e, t, n - 1) || !C(e, t, n + 1)
      );
    }
    function v(e, t, n) {
      var r = I(e),
        o = L(e);
      return {
        color: e,
        resemblance: S(
          n,
          function (e) {
            return k(e.oklab, o) < p;
          },
          0,
        ),
        visibleEdge: S(
          t,
          function (t) {
            return D(I(R(t, e)), r) >= d;
          },
          1,
        ),
      };
    }
    function S(e, t, n) {
      var r = 0,
        o = 0;
      return (
        e.forEach(function (e) {
          ((r += e.alpha), (o += t(e) ? e.alpha : 0));
        }),
        r > 0 ? o / r : n
      );
    }
    function R(e, t) {
      var n = e.alpha,
        r = e.color;
      return [
        r[0] * n + t[0] * (1 - n),
        r[1] * n + t[1] * (1 - n),
        r[2] * n + t[2] * (1 - n),
      ];
    }
    function L(e) {
      var t = [T(e[0]), T(e[1]), T(e[2])],
        n = E(f, t);
      return E(g, [Math.cbrt(n[0]), Math.cbrt(n[1]), Math.cbrt(n[2])]);
    }
    function E(e, t) {
      var n = function (r) {
        return e[r][0] * t[0] + e[r][1] * t[1] + e[r][2] * t[2];
      };
      return [n(0), n(1), n(2)];
    }
    function k(e, t) {
      return Math.hypot(e[0] - t[0], e[1] - t[1], e[2] - t[2]);
    }
    function I(e) {
      var t = e[0],
        n = e[1],
        r = e[2];
      return 0.2126 * T(t) + 0.7152 * T(n) + 0.0722 * T(r);
    }
    function T(e) {
      var t = e / s;
      return t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
    }
    function D(e, t) {
      return (Math.max(e, t) + c) / (Math.min(e, t) + c);
    }
    function x(e) {
      return (
        "#" +
        e
          .map(function (e) {
            return e.toString(16).padStart(2, "0");
          })
          .join("")
          .toUpperCase()
      );
    }
    i.default = h;
  },
  66,
);
