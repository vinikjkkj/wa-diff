__d(
  "oz-player/networks/OzNetworkSamples",
  ["oz-player/configs/OzGlobalConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        ((this.$1 = !1),
          (this.$2 = []),
          (this.$3 = []),
          (this.$4 = null),
          (this.$5 = null),
          (this.$6 = null));
      }
      var t = e.prototype;
      return (
        (t.setBandwidthCache = function (t) {
          this.$4 = t;
        }),
        (t.getRecentBandwidthSamples = function () {
          return this.$7().recentBandwidthSamples;
        }),
        (t.getRecentNavigationTimingSamples = function () {
          return this.$7().recentNavigationTimingSamples;
        }),
        (t.setBandwidthEstimateFromHeaders = function (t) {
          ((this.$5 = t), (this.$6 = Date.now()));
        }),
        (t.getBandwidthEstimateFromHeaders = function () {
          return this.hasRecentBandwidthEstimateFromHeader() ? this.$5 : null;
        }),
        (t.hasRecentBandwidthEstimateFromHeader = function () {
          var e = r("oz-player/configs/OzGlobalConfig").getNumber(
              "bandwidth_header_expire_threshold",
              0,
            ),
            t = this.$6;
          return e > 0 && t != null && Date.now() - t < e;
        }),
        (t.$7 = function () {
          if (
            !this.$1 &&
            this.$4 != null &&
            r("oz-player/configs/OzGlobalConfig").getNumber(
              "bandwidth_ttfb_samples_to_save",
              5,
            ) > 0
          ) {
            this.$1 = !0;
            var e = this.$4.getCachedSamples();
            e != null &&
              ((this.$2 = e.bandwidth), (this.$3 = e.navigationTiming));
          }
          return {
            recentBandwidthSamples: this.$2,
            recentNavigationTimingSamples: this.$3,
          };
        }),
        (t.addBandwidthSample = function (t, n) {
          (this.$2.push(
            babelHelpers.extends({}, t, {
              timestamp: n != null ? n : Date.now(),
            }),
          ),
            this.$2.length >
              r("oz-player/configs/OzGlobalConfig").getNumber(
                "max_bandwidth_sample_count",
                30,
              ) && this.$2.shift());
        }),
        (t.addNavigationTimingSample = function (t, n) {
          (this.$3.push(
            babelHelpers.extends({}, t, {
              timestamp: n != null ? n : Date.now(),
            }),
          ),
            this.$3.length >
              r("oz-player/configs/OzGlobalConfig").getNumber(
                "max_bandwidth_sample_count",
                30,
              ) && this.$3.shift());
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
