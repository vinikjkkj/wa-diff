__d(
  "WAWebChatStickerStatusPageBackground",
  [],
  function (t, n, r, o, a, i) {
    var e = [
        "#AE8774",
        "#C69FCC",
        "#C1A03F",
        "#FF8A8C",
        "#74676A",
        "#8B6990",
        "#243640",
      ],
      l = 4,
      s = 255,
      u = 128,
      c = 3,
      d = 0.05;
    function m(t, n) {
      var r = _(t),
        o = r == null ? e : p(r);
      return o[n % o.length];
    }
    function p(t) {
      var n = y(t),
        r = e.map(function (e) {
          return b(n, y(h(e)));
        }),
        o = e.filter(function (e, t) {
          return r[t] >= c;
        });
      return o.length > 0 ? o : [e[r.indexOf(Math.max.apply(Math, r))]];
    }
    function _(e) {
      for (
        var t = e.data, n = e.height, r = e.width, o = 0, a = [0, 0, 0], i = 0;
        i < n;
        i++
      )
        for (var s = 0; s < r; s++)
          if (f(e, s, i) && g(e, s, i)) {
            var u = (i * r + s) * l,
              c = t[u + 3];
            ((o += c),
              (a[0] += t[u] * c),
              (a[1] += t[u + 1] * c),
              (a[2] += t[u + 2] * c));
          }
      return o === 0 ? null : [a[0] / o, a[1] / o, a[2] / o];
    }
    function f(e, t, n) {
      var r = e.data,
        o = e.height,
        a = e.width;
      return t >= 0 && n >= 0 && t < a && n < o && r[(n * a + t) * l + 3] >= u;
    }
    function g(e, t, n) {
      return (
        !f(e, t - 1, n) || !f(e, t + 1, n) || !f(e, t, n - 1) || !f(e, t, n + 1)
      );
    }
    function h(e) {
      var t = function (n) {
        return parseInt(e.slice(n, n + 2), 16);
      };
      return [t(1), t(3), t(5)];
    }
    function y(e) {
      var t = e[0],
        n = e[1],
        r = e[2];
      return 0.2126 * C(t) + 0.7152 * C(n) + 0.0722 * C(r);
    }
    function C(e) {
      var t = e / s;
      return t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
    }
    function b(e, t) {
      return (Math.max(e, t) + d) / (Math.min(e, t) + d);
    }
    i.default = m;
  },
  66,
);
