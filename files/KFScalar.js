__d(
  "KFScalar",
  ["KFAnimatable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t(t, n) {
          return e.call(this, t, n) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__interpolate = function (t, n, r) {
            return (r - n) * t + n;
          }),
          t
        );
      })(r("KFAnimatable")),
      s = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, t, n) || this),
            (r.$KFScalarArray$p_1 = []),
            r
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__interpolate = function (t, n, r) {
            this.$KFScalarArray$p_1 =
              this.$KFScalarArray$p_1 != null ? this.$KFScalarArray$p_1 : [];
            for (var e = 0; e < n.length; e++)
              this.$KFScalarArray$p_1[e] = (r[e] - n[e]) * t + n[e];
            return this.$KFScalarArray$p_1;
          }),
          t
        );
      })(r("KFAnimatable"));
    ((l.KFScalar = e), (l.KFScalarArray = s));
  },
  98,
);
