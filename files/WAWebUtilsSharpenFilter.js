__d(
  "WAWebUtilsSharpenFilter",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      for (
        var t = [0, -1, 0, -1, 5, -1, 0, -1, 0],
          n = Math.round(Math.sqrt(t.length)),
          r = (n * 0.5) | 0,
          o = e.data,
          a = e.width,
          i = e.height,
          l = new Uint8ClampedArray(o),
          s = 0;
        s < i;
        s++
      )
        for (var u = 0; u < a; u++) {
          for (
            var c = u, d = s, m = (s * a + u) * 4, p = [0, 0, 0], _ = 0;
            _ < n;
            _++
          )
            for (var f = 0; f < n; f++) {
              var g = d + _ - r,
                h = c + f - r;
              if (g >= 0 && g < i && h >= 0 && h < a) {
                var y = (g * a + h) * 4,
                  C = t[_ * n + f];
                ((p[0] += l[y] * C),
                  (p[1] += l[y + 1] * C),
                  (p[2] += l[y + 2] * C));
              }
            }
          ((o[m] = p[0]), (o[m + 1] = p[1]), (o[m + 2] = p[2]));
        }
    }
    i.default = e;
  },
  66,
);
