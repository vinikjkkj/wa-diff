__d(
  "WAWebVoipVideoEffectsFrameStats",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 5e3,
      l = 6e4,
      s = 6e4;
    function u(t) {
      return t < l ? e : s;
    }
    var c = (function () {
      function e() {
        ((this.$1 = null),
          (this.$2 = null),
          (this.$3 = 0),
          (this.$4 = 0),
          (this.$5 = 0),
          (this.$6 = 0),
          (this.$7 = 0),
          (this.$8 = 0),
          (this.$9 = 0),
          (this.$10 = 0),
          (this.$11 = 0));
      }
      var t = e.prototype;
      return (
        (t.recordProcessed = function (t, n) {
          var e = n.roundTripMs,
            r = n.segmented,
            o = n.workerMs;
          (this.$12(t),
            this.$4++,
            r && (this.$5++, (this.$8 += o)),
            (this.$7 += o),
            (this.$9 = Math.max(this.$9, o)),
            (this.$10 += e),
            (this.$11 = Math.max(this.$11, e)));
        }),
        (t.recordFailed = function (t) {
          (this.$12(t), this.$6++);
        }),
        (t.takeIfDue = function (t) {
          var e = this.$2,
            n = this.$1;
          return e == null || n == null
            ? null
            : t - e >= u(e - n)
              ? this.$13()
              : null;
        }),
        (t.take = function () {
          return ((this.$1 = null), this.$13());
        }),
        (t.$13 = function () {
          var e = this.$2;
          if (e == null) return null;
          var t = this.$4,
            n = {
              averageRoundTripMs: t > 0 ? this.$10 / t : 0,
              averageSegmentedMs: this.$5 > 0 ? this.$8 / this.$5 : 0,
              averageWorkerMs: t > 0 ? this.$7 / t : 0,
              failed: this.$6,
              frames: t,
              maxRoundTripMs: this.$11,
              maxWorkerMs: this.$9,
              segmented: this.$5,
              spanMs: this.$3 - e,
            };
          return (
            (this.$2 = null),
            (this.$4 = 0),
            (this.$5 = 0),
            (this.$6 = 0),
            (this.$7 = 0),
            (this.$8 = 0),
            (this.$9 = 0),
            (this.$10 = 0),
            (this.$11 = 0),
            n
          );
        }),
        (t.$12 = function (t) {
          (this.$1 == null && (this.$1 = t),
            this.$2 == null && (this.$2 = t),
            (this.$3 = t));
        }),
        e
      );
    })();
    ((i.getSummaryIntervalMs = u), (i.WAWebVoipVideoEffectsFrameStats = c));
  },
  66,
);
