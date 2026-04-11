__d(
  "oz-player/strategies/OzBufferingStateThresholdManager",
  ["oz-player/shims/OzPerformance", "oz-player/utils/OzBufferingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$2 = !1), (this.$3 = -1 / 0), (this.$4 = -1 / 0), (this.$1 = e));
      }
      var t = e.prototype;
      return (
        (t.getInPlayBufferUnderflowTarget = function () {
          return this.$1.getNumber(
            "in_play_buffer_underflow_target",
            o("oz-player/utils/OzBufferingUtils").BUFFER_UNDERFLOW_THRESHOLD,
          );
        }),
        (t.getInPlayBufferOverflowTarget = function () {
          return this.$5()
            ? this.$1.getNumber(
                "stream_interrupt_in_play_buffer_overflow_target",
                o("oz-player/utils/OzBufferingUtils")
                  .BUFFER_UNDERFLOW_THRESHOLD,
              )
            : r("oz-player/shims/OzPerformance").now() - this.$4 <
                this.$1.getNumber("recent_buffer_timeout_ms", 0)
              ? this.$1.getNumber(
                  "recent_buffer_in_play_buffer_overflow_target",
                  o("oz-player/utils/OzBufferingUtils")
                    .BUFFER_UNDERFLOW_THRESHOLD,
                )
              : this.$1.getNumber(
                  "in_play_buffer_overflow_target",
                  o("oz-player/utils/OzBufferingUtils")
                    .BUFFER_OVERFLOW_THRESHOLD,
                );
        }),
        (t.getStartBufferUnderflowTarget = function () {
          return this.$1.getNumber(
            "start_buffer_underflow_target",
            o("oz-player/utils/OzBufferingUtils").BUFFER_UNDERFLOW_THRESHOLD,
          );
        }),
        (t.notifyBufferingEnd = function () {
          this.$4 = r("oz-player/shims/OzPerformance").now();
        }),
        (t.notifyStreamInterrupted = function () {
          this.$2 = !0;
        }),
        (t.notifyStreamResumed = function () {
          ((this.$2 = !1),
            (this.$3 = r("oz-player/shims/OzPerformance").now()));
        }),
        (t.$5 = function () {
          var e = this.$1.getNumber(
            "stream_interrupt_buffer_target_timeout_ms",
            0,
          );
          return e === 0
            ? !1
            : this.$2 || r("oz-player/shims/OzPerformance").now() - this.$3 < e;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
