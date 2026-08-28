__d(
  "ZenonCumulativeMediaStat",
  ["performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(t) {
          ((this.$3 = this.$5 = this.$1 = t),
            (this.$7 = this.$8 = t),
            (this.$9 = !1),
            (this.$4 = this.$6 = this.$2 = (e || (e = r("performanceNow")))()),
            (this.$10 = 1),
            (this.$11 = 0),
            (this.$12 = 0));
        }
        var n = t.prototype;
        return (
          (n.$13 = function (n) {
            ((this.$5 = this.$1),
              (this.$6 = this.$2),
              (this.$1 = n),
              (this.$2 = (e || (e = r("performanceNow")))()),
              this.$10++);
          }),
          (n.update = function (t) {
            ((this.$7 = this.$8), (this.$8 = t));
            var e = this.$8 - this.$7;
            (e < 0 ? ((e = this.$8), (this.$9 = !0)) : (this.$9 = !1),
              this.$13(this.$1 + e));
          }),
          (n.updateLastStretchStartValue = function (t) {
            this.$11 = t;
          }),
          (n.getLastStretchDelta = function () {
            return this.$1 - this.$11;
          }),
          (n.updateNonStrictCumulative = function (t) {
            ((this.$7 = this.$8), (this.$8 = t), (this.$9 = !1), this.$13(t));
          }),
          (n.isReset = function () {
            return this.$9;
          }),
          (n.getCurrentValue = function () {
            return this.$1;
          }),
          (n.getDeltaValue = function () {
            return this.$1 - this.$3;
          }),
          (n.getDeltaFromLastUpdate = function () {
            return this.$1 - this.$5;
          }),
          (n.getTimeSinceLastUpdate = function () {
            return this.$2 - this.$6;
          }),
          (n.getElapsedTime = function () {
            return this.$2 - this.$4;
          }),
          (n.getPreviousTime = function () {
            return this.$6;
          }),
          (n.getCurrentTime = function () {
            return this.$2;
          }),
          (n.getAverageOverTime = function () {
            return this.getDeltaValue() / this.getElapsedTime();
          }),
          (n.updateInactiveDuration = function (t) {
            this.$12 += t;
          }),
          (n.getActiveDuration = function () {
            return this.getElapsedTime() - this.$12;
          }),
          (n.getAverageOverActiveTime = function () {
            return this.getDeltaValue() / this.getActiveDuration();
          }),
          (n.getCurrentTimeSinceLastUpdate = function () {
            return (e || (e = r("performanceNow")))() - this.$2;
          }),
          (n.getCount = function () {
            return this.$10;
          }),
          (n.getFirstValue = function () {
            return this.$3;
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
