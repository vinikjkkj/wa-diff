__d(
  "oz-player/utils/OzStreamInterruptChecker",
  ["oz-player/shims/OzEventEmitter", "oz-player/utils/OzMpdUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n) {
        var r;
        return (
          (r = e.call(this) || this),
          (r.$OzStreamInterruptChecker$p_4 = 0),
          (r.$OzStreamInterruptChecker$p_5 = null),
          (r.$OzStreamInterruptChecker$p_6 = !1),
          (r.$OzStreamInterruptChecker$p_2 = t),
          (r.$OzStreamInterruptChecker$p_3 = n),
          (r.$OzStreamInterruptChecker$p_1 =
            r.$OzStreamInterruptChecker$p_3.getNumber(
              "live_numerical_error_epsilon",
            )),
          r
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.notifyMpdUpdated = function () {
          var e = o("oz-player/utils/OzMpdUtils").getMpdLastTimeRange(
              this.$OzStreamInterruptChecker$p_2,
              this.$OzStreamInterruptChecker$p_3,
            ),
            t = e ? e.endTime : null,
            n = !1;
          (t !== null && (n = t === this.$OzStreamInterruptChecker$p_5),
            n
              ? this.$OzStreamInterruptChecker$p_4++
              : ((this.$OzStreamInterruptChecker$p_4 = 0),
                this.$OzStreamInterruptChecker$p_6 &&
                  this.$OzStreamInterruptChecker$p_5 !== null &&
                  this.$OzStreamInterruptChecker$p_5 !== void 0 &&
                  e !== null &&
                  e !== void 0 &&
                  this.emit("streamResumedAt", e.startTime),
                (this.$OzStreamInterruptChecker$p_6 = !1)));
          var r = this.$OzStreamInterruptChecker$p_3.getNumber(
            "stream_interrupt_check_mpd_stale_count_threshold",
          );
          (!this.$OzStreamInterruptChecker$p_6 &&
            r > 0 &&
            this.$OzStreamInterruptChecker$p_4 >= r &&
            t !== null &&
            t !== void 0 &&
            (this.emit("streamInterruptAt", t),
            (this.$OzStreamInterruptChecker$p_6 = !0)),
            (this.$OzStreamInterruptChecker$p_5 = t));
        }),
        t
      );
    })(r("oz-player/shims/OzEventEmitter"));
    l.default = e;
  },
  98,
);
