__d(
  "WAWebVoipBrowserMuteDetector",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 3,
      l = 0.5,
      s = 5,
      u = 5,
      c = 3,
      d = 2;
    function m(t) {
      return t * e;
    }
    function p(e) {
      return (
        e.baseLatencyMs > 0 &&
        Math.abs(e.outputLatencyMs - m(e.baseLatencyMs)) <= l
      );
    }
    var _ = (function () {
      function e() {
        ((this.$1 = 0),
          (this.$2 = 0),
          (this.$3 = 0),
          (this.$4 = !1),
          (this.$5 = !1),
          (this.$6 = !1),
          (this.$7 = !1));
      }
      var t = e.prototype;
      return (
        (t.isSuspected = function () {
          return this.$4;
        }),
        (t.isMuteExpected = function () {
          return this.$5;
        }),
        (t.getSampleCount = function () {
          return this.$1;
        }),
        (t.getFloorSampleCount = function () {
          return this.$3;
        }),
        (t.getMuteEvidence = function () {
          return this.$6
            ? "not_muted"
            : this.$1 >= c
              ? "muted"
              : "inconclusive";
        }),
        (t.hasEnoughSamplesToDetect = function () {
          var e = this.$5 ? d : s + u;
          return this.$1 >= e;
        }),
        (t.expectMute = function () {
          this.$5 = !0;
        }),
        (t.observe = function (t) {
          this.$1++;
          var e = this.$1 > s;
          p(t)
            ? (this.$5 || e) && (this.$2++, this.$3++)
            : ((this.$6 = !0),
              (this.$7 = this.$7 || e),
              (this.$5 = !1),
              (this.$2 = 0));
          var n = this.$5 ? d : u,
            r = !this.$7 && this.$2 >= n;
          return r === this.$4
            ? null
            : ((this.$4 = r), r ? "suspected" : "cleared");
        }),
        (t.reset = function () {
          ((this.$1 = 0),
            (this.$2 = 0),
            (this.$3 = 0),
            (this.$4 = !1),
            (this.$5 = !1),
            (this.$6 = !1),
            (this.$7 = !1));
        }),
        e
      );
    })();
    ((i.BROWSER_MUTE_WARMUP_SAMPLES = s),
      (i.BROWSER_MUTE_MIN_CONSECUTIVE_SAMPLES = u),
      (i.BROWSER_MUTE_CARRYOVER_MIN_SAMPLES = c),
      (i.BROWSER_MUTE_CARRYOVER_CONFIRM_SAMPLES = d),
      (i.getBrowserMuteFloorMs = m),
      (i.isAtBrowserMuteFloor = p),
      (i.WAWebVoipBrowserMuteDetector = _));
  },
  66,
);
