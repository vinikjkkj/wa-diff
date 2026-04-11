__d(
  "VideoPlayerOzImplementationLatencyLevelManager",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        ((this.$2 = "normal"),
          (this.$4 = null),
          (this.$1 = e),
          (this.$3 = t),
          (this.$6 = n));
      }
      var t = e.prototype;
      return (
        (t.updatePlayerFormat = function (t) {
          this.$4 !== t && ((this.$4 = t), this.maybeUpdateLatencyLevel());
        }),
        (t.updateBroadcastLatencySensitivity = function (t) {
          this.$5 !== t && ((this.$5 = t), this.maybeUpdateLatencyLevel());
        }),
        (t.maybeUpdateLatencyLevel = function () {
          var e = this.$7(this.$5);
          e !== this.$2 &&
            ((this.$2 = e),
            this.$1.getBool("set_latency_context_immediately", !1) &&
              this.$1.setContext("latency_level", e),
            this.$3.dispatch({
              payload: { latencyLevel: e, ullIneligibilityReason: this.$8() },
              type: "implementation_set_latency_level_requested",
            }));
        }),
        (t.$8 = function () {
          var e = this.$1.getNumber("ultra_low_latency_bandwidth_threshold", 0),
            t = this.$6.getEstimatedBandwidth();
          return t !== null && e > 0 && t < e ? "low_bandwidth_estimate" : null;
        }),
        (t.$7 = function (t) {
          if (t == null) return "normal";
          switch (t) {
            case 1:
              return "low";
            case 2:
              return this.$8() !== null
                ? this.$1.getBool("fall_back_to_low_latency_in_ull", !1)
                  ? "low"
                  : "normal"
                : "ultra-low";
            case 0:
              return "normal";
          }
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
