__d(
  "oz-player/networks/OzBandwidthEstimator",
  [
    "oz-player/networks/OzBandwidthEstimatorBase",
    "oz-player/networks/OzBandwidthUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getBandwidthDiagnostics = function (t) {
            return o(
              "oz-player/networks/OzBandwidthUtils",
            ).getBandwidthDiagnostics(
              this.getNetworkSamples().getRecentBandwidthSamples(),
              t.getNumber("bandwidth_estimator_half_life", 6),
              this.getNetworkSamples().getRecentNavigationTimingSamples(),
              t.getNumber("time_to_first_byte_estimate_half_life_ms", 500),
            );
          }),
          (n.getBandwidth = function (t) {
            var e = o(
              "oz-player/networks/OzBandwidthUtils",
            ).getBandwidthEstimate(
              this.getNetworkSamples().getRecentBandwidthSamples(),
              t.getNumber("bandwidth_estimator_half_life", 6),
              t.getNumber("bandwidth_estimator_outlier_exclusion_factor", 50),
              t.getNumber("bandwidth_estimator_std_dev_penalty_factor", 0),
            );
            return e > 0 ? e : this.getDefaultEstimate(t);
          }),
          t
        );
      })(r("oz-player/networks/OzBandwidthEstimatorBase")),
      s = new e(),
      u = s;
    l.default = u;
  },
  98,
);
