__d(
  "oz-player/networks/OzBandwidthEstimatorBase",
  [
    "oz-player/configs/OzGlobalConfig",
    "oz-player/networks/OzBandwidthCache",
    "oz-player/networks/OzBandwidthUtils",
    "oz-player/networks/OzNetworkSamples",
    "oz-player/shims/OzEventEmitter",
    "oz-player/utils/OzErrorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e6,
      s = "bandwidthEstimate",
      u = "bandwidthAndTTFBSamples",
      c = (function (t) {
        function n() {
          var e;
          return (
            (e = t.call(this) || this),
            (e.$OzBandwidthEstimatorBase$p_2 = new (r(
              "oz-player/networks/OzNetworkSamples",
            ))()),
            (e.$OzBandwidthEstimatorBase$p_1 = new (r(
              "oz-player/networks/OzBandwidthCache",
            ))(
              s,
              u,
              function () {
                return e.getAdjustedBandwidth(
                  r("oz-player/configs/OzGlobalConfig"),
                );
              },
              function () {
                return {
                  bandwidth:
                    e.$OzBandwidthEstimatorBase$p_2.getRecentBandwidthSamples(),
                  navigationTiming:
                    e.$OzBandwidthEstimatorBase$p_2.getRecentNavigationTimingSamples(),
                };
              },
            )),
            e.$OzBandwidthEstimatorBase$p_2.setBandwidthCache(
              e.$OzBandwidthEstimatorBase$p_1,
            ),
            e
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getNetworkSamples = function () {
            return this.$OzBandwidthEstimatorBase$p_2;
          }),
          (a.getStandardDeviationOfBandwidth = function () {
            return o(
              "oz-player/networks/OzBandwidthUtils",
            ).getStandardDeviationOfBandwidth(
              this.$OzBandwidthEstimatorBase$p_2.getRecentBandwidthSamples(),
            );
          }),
          (a.getSampleCount = function () {
            return this.$OzBandwidthEstimatorBase$p_2.getRecentBandwidthSamples()
              .length;
          }),
          (a.getAdjustedBandwidth = function (t) {
            return this.$OzBandwidthEstimatorBase$p_2.getRecentBandwidthSamples()
              .length === 0
              ? this.getDefaultEstimate(t)
              : this.$OzBandwidthEstimatorBase$p_3(t);
          }),
          (a.getBandwidthDiagnostics = function (t) {
            throw o("oz-player/utils/OzErrorUtils").createOzError({
              type: "OZ_NOT_IMPLEMENTED_ERROR",
              description: "must be implementd by subclasses",
            });
          }),
          (a.getBandwidth = function (t) {
            throw o("oz-player/utils/OzErrorUtils").createOzError({
              type: "OZ_NOT_IMPLEMENTED_ERROR",
              description: "must be implementd by subclasses",
            });
          }),
          (a.getBandwidthDiagnosticsFromHeaders = function (t) {
            var e = this.getBandwidthDiagnostics(t);
            if (e == null) return null;
            var n =
              this.$OzBandwidthEstimatorBase$p_2.getBandwidthEstimateFromHeaders();
            if (n == null) return e;
            var r, o, a;
            if (e != null)
              ((r = e.timeToFirstByteMsEstimate),
                (o = e.timeToFirstByteMsStandardDeviation),
                (a = e.timeToFirstByteMsTotalWeight));
            else return null;
            return {
              bandwidthEstimate: n.meanEstimate,
              bandwidthStandardDeviation: 1,
              bandwidthTotalWeight: 1,
              timeToFirstByteMsEstimate: r,
              timeToFirstByteMsStandardDeviation: o,
              timeToFirstByteMsTotalWeight: a,
            };
          }),
          (a.getDefaultEstimate = function (n) {
            var t,
              r,
              o = this.$OzBandwidthEstimatorBase$p_1.getCachedBandwidth();
            if (typeof o == "number" && o > 0) return o;
            var a =
                ((t =
                  (r = window.navigator) == null || (r = r.connection) == null
                    ? void 0
                    : r.downlink) != null
                  ? t
                  : 0) * 1e6,
              i = a > 0 ? a : n.getNumber("default_bandwidth_estimate", e);
            return i;
          }),
          (a.$OzBandwidthEstimatorBase$p_3 = function (t) {
            return this.getBandwidth(t);
          }),
          (a.addBandwidthSample = function (t, n, r) {
            (this.$OzBandwidthEstimatorBase$p_2.addBandwidthSample(
              { bytes: t, timeInMs: n },
              r,
            ),
              this.emit("bandwidth_sampled"));
          }),
          (a.addNavigationTimingSample = function (t, n, r, o) {
            var e = { timeToFirstByteMs: t, timeToLastByteMs: n, bytes: r };
            this.$OzBandwidthEstimatorBase$p_2.addNavigationTimingSample(e, o);
          }),
          (a.setBandwidthEstimateFromHeaders = function (t) {
            this.$OzBandwidthEstimatorBase$p_2.setBandwidthEstimateFromHeaders(
              t,
            );
          }),
          (a.hasRecentBandwidthEstimateFromHeader = function () {
            return this.getNetworkSamples().hasRecentBandwidthEstimateFromHeader();
          }),
          n
        );
      })(r("oz-player/shims/OzEventEmitter"));
    l.default = c;
  },
  98,
);
