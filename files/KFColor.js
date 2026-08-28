__d(
  "KFColor",
  ["KFAnimatable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, t, n) || this),
            (r.$KFColor$p_2 = [0, 0, 0, 0]),
            (r.$KFColor$p_1 = r.$KFColor$p_2),
            r
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__interpolate = function (t, n, r) {
            return (
              (this.$KFColor$p_1 =
                this.$KFColor$p_1 != null
                  ? this.$KFColor$p_1
                  : this.$KFColor$p_2),
              u(this.$KFColor$p_1, t, n, r)
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
            (r.$KFColorArray$p_1 = []),
            r
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__interpolate = function (t, n, r) {
            return (
              (this.$KFColorArray$p_1 =
                this.$KFColorArray$p_1 != null ? this.$KFColorArray$p_1 : []),
              c(this.$KFColorArray$p_1, t, n, r)
            );
          }),
          t
        );
      })(r("KFAnimatable"));
    function u(e, t, n, r) {
      return (
        e === void 0 && (e = [0, 0, 0, 0]),
        (e[0] = (r[0] - n[0]) * t + n[0]),
        (e[1] = (r[1] - n[1]) * t + n[1]),
        (e[2] = (r[2] - n[2]) * t + n[2]),
        (e[3] = (r[3] - n[3]) * t + n[3]),
        e
      );
    }
    function c(e, t, n, r) {
      e === void 0 && (e = []);
      for (var o = n.length, a = 0; a < o - 1; a++)
        (e[a] || (e[a] = [0, 0, 0, 0]), u(e[a], t, n[a], r[a]));
      return e;
    }
    ((l.KFColor = e), (l.KFColorArray = s));
  },
  98,
);
