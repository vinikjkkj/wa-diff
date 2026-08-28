__d(
  "KFPoint",
  ["KFAnimatable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, t, n) || this),
            (r.$KFPoint$p_1 = [0, 0]),
            r
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__interpolate = function (t, n, r) {
            return (
              (this.$KFPoint$p_1 = this.$KFPoint$p_1 || [0, 0]),
              u(this.$KFPoint$p_1, t, n, r)
            );
          }),
          t
        );
      })(r("KFAnimatable")),
      s = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, t, n) || this),
            (r.$KFPointArray$p_1 = []),
            r
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__interpolate = function (t, n, r) {
            return (
              (this.$KFPointArray$p_1 = this.$KFPointArray$p_1 || []),
              c(this.$KFPointArray$p_1, t, n, r)
            );
          }),
          t
        );
      })(r("KFAnimatable"));
    function u(e, t, n, r) {
      return (
        e === void 0 && (e = [0, 0]),
        (e[0] = (r[0] - n[0]) * t + n[0]),
        (e[1] = (r[1] - n[1]) * t + n[1]),
        e
      );
    }
    function c(e, t, n, r) {
      e === void 0 && (e = []);
      for (var o = n.length, a = 0; a < o - 1; a++) u(e[a], t, n[a], r[a]);
      return e;
    }
    ((l.KeyframesVec2 = e),
      (l.KFPoint = e),
      (l.KFPointArray = s),
      (l._interpolatePoint = u));
  },
  98,
);
