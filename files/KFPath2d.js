__d(
  "KFPath2d",
  ["KFAnimatable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n) {
        var r;
        return ((r = e.call(this, t, n) || this), (r.$KFPath2d$p_1 = []), r);
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.__interpolate = function (t, n, r) {
          this.$KFPath2d$p_1 =
            this.$KFPath2d$p_1 != null ? this.$KFPath2d$p_1 : [];
          for (var e = 0; e < n.length; e++) {
            var o = { type: n[e].type, point: [0, 0], c1: [0, 0], c2: [0, 0] };
            ((o.point[0] = (r[e].point[0] - n[e].point[0]) * t + n[e].point[0]),
              (o.point[1] =
                (r[e].point[1] - n[e].point[1]) * t + n[e].point[1]),
              n[e].c1 &&
                ((o.c1[0] = (r[e].c1[0] - n[e].c1[0]) * t + n[e].c1[0]),
                (o.c1[1] = (r[e].c1[1] - n[e].c1[1]) * t + n[e].c1[1])),
              n[e].c2 &&
                ((o.c2[0] = (r[e].c2[0] - n[e].c2[0]) * t + n[e].c2[0]),
                (o.c2[1] = (r[e].c2[1] - n[e].c2[1]) * t + n[e].c2[1])),
              (this.$KFPath2d$p_1[e] = o));
          }
          return this.$KFPath2d$p_1;
        }),
        t
      );
    })(r("KFAnimatable"));
    l.default = e;
  },
  98,
);
