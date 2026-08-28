__d(
  "KFPosition",
  ["KFAnimationConstants", "KFAnimationUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e(e, t, n) {
          ((this.$1 = e),
            (this.$2 = t),
            (this.$3 = n),
            (this.$4 = [0, 0]),
            this.$3 && (this.$3.__interpolate = u));
        }
        var t = e.prototype;
        return (
          (t.getValueAtProgress = function (t) {
            if (this.$3) {
              var e = this.$3.getValueAtProgress(t);
              e && ((this.$4[0] = e.point[0]), (this.$4[1] = e.point[1]));
            } else
              ((this.$4[0] = this.$1 ? this.$1.getValueAtProgress(t) : 0),
                (this.$4[1] = this.$2.getValueAtProgress(t)));
            return this.$4;
          }),
          e
        );
      })(),
      s = { point: [0, 0] };
    function u(e, t, n) {
      var r = e * e,
        a = 1 - e,
        i = a * a;
      switch (n.type) {
        case o("KFAnimationConstants").CommandType.LineTo:
          ((s.point[0] = o("KFAnimationUtils").lerp(e, t.point[0], n.point[0])),
            (s.point[1] = o("KFAnimationUtils").lerp(
              e,
              t.point[1],
              n.point[1],
            )));
          break;
        case o("KFAnimationConstants").CommandType.QuadTo:
          ((s.point[0] = o("KFAnimationUtils").quadraticInterpolation(
            e,
            r,
            a,
            i,
            t.point[0],
            n.c1[0],
            n.point[0],
          )),
            (s.point[1] = o("KFAnimationUtils").quadraticInterpolation(
              e,
              r,
              a,
              i,
              t.point[1],
              n.c1[1],
              n.point[1],
            )));
          break;
        case o("KFAnimationConstants").CommandType.CubicTo:
          ((s.point[0] = o("KFAnimationUtils").cubicInterpolation(
            e,
            r,
            a,
            i,
            t.point[0],
            n.c1[0],
            n.c2[0],
            n.point[0],
          )),
            (s.point[1] = o("KFAnimationUtils").cubicInterpolation(
              e,
              r,
              a,
              i,
              t.point[1],
              n.c1[1],
              n.c2[1],
              n.point[1],
            )));
          break;
      }
      return s;
    }
    l.default = e;
  },
  98,
);
