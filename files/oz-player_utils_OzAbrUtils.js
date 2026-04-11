__d(
  "oz-player/utils/OzAbrUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n, r) {
      if (r.resolutionConstraintFactor === 0) return e.slice();
      var o = e.filter(function (e) {
        var o = e.getWidth() <= t.width * n * r.resolutionConstraintFactor,
          a = e.getHeight() <= t.height * n * r.resolutionConstraintFactor;
        return o && a;
      });
      return o.length ? o : [e[0]];
    }
    function l(e, t, n, r, o, a) {
      var i = t
          ? e.getNumber("min_switch_interval")
          : e.getNumber("initial_switch_interval"),
        l = r >= e.getNumber("abr_min_bandwidth_samples"),
        s = e.getNumber("abr_eval_buffer_threshold"),
        u = !s || n >= s,
        c = null;
      return (
        o + e.getNumber("min_eval_interval") > Date.now()
          ? (c = "min_eval_interval")
          : a + i > Date.now()
            ? (c = "min_switch_interval")
            : l
              ? u || (c = "buffer_threshold_not_satisfied")
              : (c = "min_bandwidth_samples"),
        c
      );
    }
    ((i.excludeLargeRepresentations = e), (i.getReasonToPreventEvaluation = l));
  },
  66,
);
