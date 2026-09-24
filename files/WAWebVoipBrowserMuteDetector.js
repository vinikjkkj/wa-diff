__d(
  "WAWebVoipBrowserMuteDetector",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 3,
      l = 1,
      s = 5,
      u = 3;
    function c(t) {
      return t * e;
    }
    function d(e) {
      return (
        e.baseLatencyMs > 0 &&
        Math.abs(e.outputLatencyMs - c(e.baseLatencyMs)) <= l
      );
    }
    var m = (function () {
      function e() {
        ((this.$1 = 0), (this.$2 = 0), (this.$3 = 0), (this.$4 = !1));
      }
      var t = e.prototype;
      return (
        (t.isSuspected = function () {
          return this.$4;
        }),
        (t.getFloorSampleCount = function () {
          return this.$3;
        }),
        (t.hasEnoughSamplesToDetect = function () {
          return this.$1 >= s + u;
        }),
        (t.observe = function (t) {
          if ((this.$1++, this.$1 <= s)) return null;
          d(t) ? (this.$2++, this.$3++) : (this.$2 = 0);
          var e = this.$2 >= u;
          return e === this.$4
            ? null
            : ((this.$4 = e), e ? "suspected" : "cleared");
        }),
        (t.reset = function () {
          ((this.$1 = 0), (this.$2 = 0), (this.$3 = 0), (this.$4 = !1));
        }),
        e
      );
    })();
    ((i.BROWSER_MUTE_FLOOR_MULTIPLIER = e),
      (i.BROWSER_MUTE_FLOOR_TOLERANCE_MS = l),
      (i.BROWSER_MUTE_WARMUP_SAMPLES = s),
      (i.BROWSER_MUTE_MIN_CONSECUTIVE_SAMPLES = u),
      (i.getBrowserMuteFloorMs = c),
      (i.isAtBrowserMuteFloor = d),
      (i.WAWebVoipBrowserMuteDetector = m));
  },
  66,
);
