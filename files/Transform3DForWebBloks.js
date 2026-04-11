__d(
  "Transform3DForWebBloks",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e(e) {
        this.matrix = [
          [e[0], e[1], e[2], e[3]],
          [e[4], e[5], e[6], e[7]],
          [e[8], e[9], e[10], e[11]],
          [e[12], e[13], e[14], e[15]],
        ];
      }
      var t = e.prototype;
      return (
        (t.toString = function () {
          return this.matrix.flat().join(",");
        }),
        (t.translate = function (t, n, r) {
          var e = [
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [t, n, r, 1],
          ];
          return ((this.matrix = u(e, this.matrix)), this);
        }),
        (t.scale = function (t, n, r) {
          var e = [
            [t, 0, 0, 0],
            [0, n, 0, 0],
            [0, 0, r, 0],
            [0, 0, 0, 1],
          ];
          return ((this.matrix = u(e, this.matrix)), this);
        }),
        (t.rotate3D = function (t, n, r, o) {
          for (
            var e = s(n, r, o),
              a = e.x_norm,
              i = e.y_norm,
              c = e.z_norm,
              d = l(),
              m = [
                [0, c, -i, 0],
                [-c, 0, a, 0],
                [i, -a, 0, 0],
                [0, 0, 0, 0],
              ],
              p = m.map(function (e) {
                return e.map(function (e) {
                  return Math.sin(t) * e;
                });
              }),
              _ = u(m, m).map(function (e) {
                return e.map(function (e) {
                  return (1 - Math.cos(t)) * e;
                });
              }),
              f = l(),
              g = 0;
            g < 4;
            g++
          )
            for (var h = 0; h < 4; h++) f[g][h] = d[g][h] + p[g][h] + _[g][h];
          return ((this.matrix = u(f, this.matrix)), this);
        }),
        e
      );
    })();
    function l() {
      return [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
      ];
    }
    function s(e, t, n) {
      var r = e * e,
        o = t * t,
        a = n * n,
        i = r + o + a;
      return { x_norm: e / i, y_norm: t / i, z_norm: n / i };
    }
    function u(e, t) {
      for (
        var n = e.length,
          r = e[0].length,
          o = t[0].length,
          a = new Array(n),
          i = 0;
        i < n;
        i++
      ) {
        a[i] = new Array(o);
        for (var l = 0; l < o; l++) {
          a[i][l] = 0;
          for (var s = 0; s < r; s++) a[i][l] += e[i][s] * t[s][l];
        }
      }
      return a;
    }
    i.default = e;
  },
  66,
);
