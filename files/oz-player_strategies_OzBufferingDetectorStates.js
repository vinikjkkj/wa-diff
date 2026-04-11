__d(
  "oz-player/strategies/OzBufferingDetectorStates",
  ["oz-player/utils/OzBufferingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e(e, t, n) {
          ((this.$1 = e), (this.$2 = t), (this.$3 = n));
        }
        var t = e.prototype;
        return (
          (t.handleEvent = function (t, n, r) {
            if (t.type === "pause" || n.paused) return new s(this.$1, this.$2);
            var e =
              this.$3 instanceof u
                ? this.$1.getInPlayBufferOverflowTarget()
                : this.$1.getStartBufferUnderflowTarget();
            return o("oz-player/utils/OzBufferingUtils").hasEnoughBuffer(
              n,
              e,
              r,
            )
              ? new u(this.$1, this.$2)
              : this;
          }),
          e
        );
      })(),
      s = (function () {
        function t(e, t) {
          ((this.$1 = e), (this.$2 = t));
        }
        var n = t.prototype;
        return (
          (n.handleEvent = function (n, r, a) {
            return n.type === "play" || n.type === "playing" || !r.paused
              ? o("oz-player/utils/OzBufferingUtils").hasEnoughBuffer(
                  r,
                  this.$1.getStartBufferUnderflowTarget(),
                  a,
                )
                ? new u(this.$1, this.$2)
                : new e(this.$1, this.$2, this)
              : this;
          }),
          t
        );
      })(),
      u = (function () {
        function t(e, t) {
          ((this.$1 = e),
            (this.$2 = t),
            (this.$3 = t
              .getString("stream_types_eligible_for_partial_playback", "")
              .split(",")));
        }
        var n = t.prototype;
        return (
          (n.handleEvent = function (n, r, a, i) {
            return (
              i === void 0 && (i = new Map()),
              n.type === "pause" || r.paused
                ? new s(this.$1, this.$2)
                : !o("oz-player/utils/OzBufferingUtils").hasEnoughBuffer(
                      r,
                      this.$1.getInPlayBufferUnderflowTarget(),
                      a,
                    ) && !this.$4(n, r.currentTime, i)
                  ? new e(this.$1, this.$2, this)
                  : this
            );
          }),
          (n.$4 = function (t, n, r) {
            return t.type === "waiting"
              ? !1
              : o("oz-player/utils/OzBufferingUtils").hasEnoughPartialBuffer(
                  n,
                  r,
                  this.$3,
                  this.$2.getNumber("partial_playback_buffer_overflow", 0),
                );
          }),
          t
        );
      })();
    ((l.OzVideoBufferingState = e),
      (l.OzVideoPausedState = s),
      (l.OzVideoPlayingState = u));
  },
  98,
);
