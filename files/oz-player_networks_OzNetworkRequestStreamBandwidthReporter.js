__d(
  "oz-player/networks/OzNetworkRequestStreamBandwidthReporter",
  [
    "oz-player/networks/OzTransformStream",
    "oz-player/shims/OzNetworkDiagnostics",
    "oz-player/utils/OzNetworkRequestLoggingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var n = this;
        ((this.$8 = Date.now()),
          (this.$9 = Date.now()),
          (this.$10 = 0),
          (this.$11 = 0),
          (this.$12 = function () {}),
          (this.$13 = function () {}),
          (this.$14 = function () {}),
          (this.$16 = new (r("oz-player/networks/OzTransformStream"))()),
          (this.$19 = !1),
          (this.$20 = !1),
          (this.$21 = null),
          (this.$22 = function (e) {
            (n.$25(),
              e.length != null && (n.$11 += e.length),
              n.$26(),
              !n.$18 && n.$27());
          }),
          (this.$23 = function () {
            if (!(n.$21 != null && n.$21 > 0)) {
              var e = Date.now() - n.$8,
                r = n.$1.getLastPerformanceEntry();
              (r &&
                n.$13(
                  r.responseStart - r.requestStart,
                  r.responseEnd - r.requestStart,
                  n.$11,
                ),
                !r && t.__isresourcetimingbufferfull && n.$15 && n.$15(),
                n.$3 > 0 &&
                  e > 0 &&
                  n.$10 === 0 &&
                  n.$11 >= n.$3 &&
                  n.$28(n.$11, e));
            }
          }));
        var o = e.byteCountPerSample,
          a = e.ignoreOnStreamWriteSamples,
          i = e.loggerProvider,
          l = e.maximumSampleBandwidth,
          s = e.minimumBytesToSampleOnClose,
          u = e.minimumSampleDuration,
          c = e.onResourceTimingBufferFull,
          d = e.responseTimeHandicapMs,
          m = e.stream,
          p = e.useResponseTimeMs;
        ((this.$1 = m),
          (this.$17 = i),
          (this.$2 = o),
          (this.$3 = s),
          (this.$4 = u),
          (this.$5 = l),
          (this.$6 = p),
          (this.$7 = d),
          (this.$18 = a),
          this.$16.addListener("writableWrite", this.$22),
          this.$16.addListener("writableClose", this.$23),
          (this.$15 = c));
      }
      var n = e.prototype;
      return (
        (n.getTransformStream = function () {
          return this.$16;
        }),
        (n.onBandwidthSample = function (t) {
          this.$12 = t;
        }),
        (n.onNavigationTimingSample = function (t) {
          this.$13 = t;
        }),
        (n.onEstimateFromHeaders = function (t) {
          this.$14 = t;
        }),
        (n.$24 = function (t, n, r) {
          var e = n - r,
            a = this.$17
              ? this.$17.getOperationLogger("bandwidth_sampled")
              : null;
          if (a) {
            var i = Date.now(),
              l = i - e;
            (o(
              "oz-player/utils/OzNetworkRequestLoggingUtils",
            ).setBandwidthSampledLoggingAttributes(
              a,
              this.$1.getLastRequestUrl(),
              t,
              this.$1.getLastResponse(),
              l,
              i,
              this.$21,
            ),
              a.log());
          }
          this.$12(t, e);
        }),
        (n.$29 = function (t, n, r) {
          if (n - r <= 0) return !0;
          var e = (t * 8) / (n / 1e3);
          return n < this.$4 && e > this.$5;
        }),
        (n.$28 = function (t, n) {
          var e = this.$1.getLastResponse(),
            o =
              (this.$6 &&
                r("oz-player/shims/OzNetworkDiagnostics").getResponseTimeMs(
                  e == null ? void 0 : e.headers,
                )) ||
              0;
          this.$29(t, n, o) || this.$24(t, n, Math.max(o - this.$7, 0));
        }),
        (n.$25 = function () {
          var e,
            t = (e = this.$1.getLastResponse()) == null ? void 0 : e.headers;
          if (!(this.$20 || t == null)) {
            this.$20 = !0;
            var n = r(
              "oz-player/shims/OzNetworkDiagnostics",
            ).getBandwidthMeanEstimate(t);
            n != null && this.$14(n);
          }
        }),
        (n.$26 = function () {
          if (!this.$19) {
            if (this.$21 == null) {
              var e = this.$1.getLastResponse();
              this.$21 =
                r(
                  "oz-player/shims/OzNetworkDiagnostics",
                ).getUsableResponseSizeForBandwidthEstimation(
                  e == null ? void 0 : e.headers,
                ) || 0;
            }
            this.$21 != null &&
              this.$21 > 0 &&
              this.$11 >= this.$21 &&
              ((this.$19 = !0), this.$28(this.$11, Date.now() - this.$9));
          }
        }),
        (n.$27 = function () {
          var e = Date.now(),
            t = e - this.$8;
          this.$2 > 0 &&
            this.$11 >= this.$10 + this.$2 &&
            !this.$29(this.$11, t, 0) &&
            (this.$24(this.$11 - this.$10, t, 0),
            (this.$8 = e),
            (this.$10 = this.$11));
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
