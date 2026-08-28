__d(
  "CubicBezier",
  [],
  function (t, n, r, o, a, i) {
    var e = 0.005,
      l = (function () {
        function t(e, t) {
          ((this.cx = 3 * e[0]),
            (this.bx = 3 * (t[0] - e[0]) - this.cx),
            (this.ax = 1 - this.cx - this.bx),
            (this.cy = 3 * e[1]),
            (this.by = 3 * (t[1] - e[1]) - this.cy),
            (this.ay = 1 - this.cy - this.by));
        }
        var n = t.prototype;
        return (
          (n.sampleCurveX = function (t) {
            return ((this.ax * t + this.bx) * t + this.cx) * t;
          }),
          (n.solve = function (t) {
            return (
              (t = this.solveCurveX(t)),
              ((this.ay * t + this.by) * t + this.cy) * t
            );
          }),
          (n.solveCurveX = function (n) {
            var t, r, o, a, i, l;
            for (i = n, r = 0; r < 8; r++) {
              if (((l = this.sampleCurveX(i) - n), Math.abs(l) < e)) return i;
              if (
                ((t = (3 * this.ax * i + 2 * this.bx) * i + this.cx),
                Math.abs(t) < 1e-6)
              )
                break;
              i -= l / t;
            }
            if (((o = 0), (a = 1), (i = n), i < o)) return o;
            if (i > a) return a;
            for (; o < a; ) {
              if (((l = this.sampleCurveX(i)), Math.abs(l - n) < e)) return i;
              (n > l ? (o = i) : (a = i), (i = (a - o) / 2 + o));
            }
            return i;
          }),
          t
        );
      })();
    i.default = l;
  },
  66,
);
