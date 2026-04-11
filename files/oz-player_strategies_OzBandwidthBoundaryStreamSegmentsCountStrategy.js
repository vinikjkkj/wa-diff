__d(
  "oz-player/strategies/OzBandwidthBoundaryStreamSegmentsCountStrategy",
  [
    "oz-player/networks/OzBandwidthEstimator",
    "oz-player/strategies/OzStaticStreamSegmentsStrategy",
    "oz-player/strategies/getSegmentsCount",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$1 = e),
          (this.$2 = t),
          (this.$3 = new (r(
            "oz-player/strategies/OzStaticStreamSegmentsStrategy",
          ))(e)));
      }
      var t = e.prototype;
      return (
        (t.isActive = function (t) {
          return !0;
        }),
        (t.getSegmentsCount = function (t, n, o) {
          var e = r("oz-player/networks/OzBandwidthEstimator").getBandwidth(
              this.$1.getLegacyConfig(),
            ),
            a = r(
              "oz-player/networks/OzBandwidthEstimator",
            ).getStandardDeviationOfBandwidth(),
            i = this.$1.getNumber(
              "bandwidth_boundary_standard_deviation_factor",
            ),
            l = this.$2.some(function (t) {
              var n = t.getBandwidth();
              return Math.abs(n - e) < a * i;
            }),
            s = l ? this.$4(t, n, o) : this.$3.getSegmentsCount(t, n, o),
            u = this.$5(n, e);
          return Math.min(s, u);
        }),
        (t.$4 = function (t, n, o) {
          var e = this.$1.getNumber(
              "seconds_to_stream_near_bandwidth_boundary",
            ),
            a = this.$1.getNumber("segments_to_stream_near_bandwidth_boundary");
          return (
            e > 0 &&
              (a = r("oz-player/strategies/getSegmentsCount")(n, o, e, a)),
            a
          );
        }),
        (t.$5 = function (t, n) {
          var e = 1 / 0,
            r = t.getByteRange();
          if (r) {
            var o = r.endByte;
            if (o != null) {
              var a = this.$1.getNumber("per_stream_duration_target"),
                i = o - r.startByte;
              a > 1e-5 && i !== 0 && (e = Math.ceil((a * n) / (i * 8)));
            }
          }
          return e;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
