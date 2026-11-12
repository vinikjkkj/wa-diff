__d(
  "WAPullModeAdaptiveLowWatermark",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 2,
      l = 50,
      s = 600,
      u = 200,
      c = 0.3,
      d = 20,
      m = (function () {
        function t() {
          ((this.$1 = 0),
            (this.$2 = 0),
            (this.$3 = 0),
            (this.$4 = 0),
            (this.$5 = null),
            (this.$6 = 0),
            (this.$7 = null),
            (this.$8 = null),
            (this.$9 = 0),
            (this.$10 = 0),
            (this.$11 = null),
            (this.$12 = 0));
        }
        var n = t.prototype;
        return (
          (n.get = function () {
            var t = this.$7;
            if (t == null || this.$10 < d) return u;
            var n = this.$9 / this.$10;
            return n <= 0
              ? s
              : Math.min(s, Math.max(l, Math.ceil((e * t) / n)));
          }),
          (n.getOutstanding = function () {
            return this.$1 - this.$3 + this.$2 - this.$4;
          }),
          (n.hasRequested = function () {
            return this.$1 > 0;
          }),
          (n.getMaxOffline = function () {
            var e;
            return (e = this.$5) != null ? e : this.$6;
          }),
          (n.batchRequested = function (t) {
            (this.$8 == null &&
              this.$1 > 0 &&
              this.$3 >= this.$1 &&
              (this.$8 = {
                firstStanza: this.$1 + 1,
                requestedAt: self.performance.now(),
              }),
              (this.$1 += t),
              (this.$6 = this.getMaxOffline()),
              (this.$5 = null));
          }),
          (n.stanzaArrived = function (t) {
            var e;
            (this.$2++,
              (this.$5 = Math.max((e = this.$5) != null ? e : 0, t)),
              !(this.$3 >= this.$1) && (this.$3++, this.$13()));
          }),
          (n.stanzaProcessed = function () {
            this.$4++;
            var e = self.performance.now(),
              t = this.$11;
            (t != null && this.$12 > 0 && ((this.$9 += e - t), this.$10++),
              (this.$11 = e),
              (this.$12 = this.$2 - this.$4));
          }),
          (n.$13 = function () {
            var e = this.$8;
            if (!(e == null || this.$3 < e.firstStanza)) {
              var t = self.performance.now() - e.requestedAt,
                n = this.$7;
              ((this.$7 = n == null ? t : n + c * (t - n)), (this.$8 = null));
            }
          }),
          t
        );
      })();
    i.WAPullModeAdaptiveLowWatermark = m;
  },
  66,
);
