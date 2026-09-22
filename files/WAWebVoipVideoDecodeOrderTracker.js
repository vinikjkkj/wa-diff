__d(
  "WAWebVoipVideoDecodeOrderTracker",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 4294967296,
      l = 500,
      s = (function () {
        function e() {
          ((this.$1 = new Map()),
            (this.$2 = 0),
            (this.$3 = 0),
            (this.$4 = 0),
            (this.$5 = 0),
            (this.$6 = 0),
            (this.$7 = 0));
        }
        var t = e.prototype;
        return (
          (t.setOrderingMode = function (t) {
            this.$7 = t;
          }),
          (t.observe = function (t, n, r, o) {
            var e = this.$8(t);
            if (r)
              return (
                this.$9(e, o),
                (e.lastRtpTimestamp = n),
                { outOfOrder: !1, episodeStarted: !1 }
              );
            var a = e.lastRtpTimestamp;
            if (a == null || u(n, a) > 0)
              return (
                (e.lastRtpTimestamp = n),
                { outOfOrder: !1, episodeStarted: !1 }
              );
            this.$2++;
            var i = !1;
            return (
              e.brokenSinceMs == null &&
                ((e.brokenSinceMs = o), this.$3++, (i = !0)),
              { outOfOrder: !0, episodeStarted: i }
            );
          }),
          (t.markRendered = function (t, n) {
            var e = this.$8(t),
              r = e.lastRenderMs;
            if (r != null) {
              var o = n - r;
              o > l && ((this.$5 += o), this.$6++);
            }
            e.lastRenderMs = n;
          }),
          (t.resetSource = function (t, n) {
            var e = this.$1.get(t);
            e != null && (this.$9(e, n), this.$1.delete(t));
          }),
          (t.consume = function (t) {
            for (var e of this.$1.values()) this.$9(e, t);
            var n = {
              webVideoDecOutOfOrderFrames: this.$2,
              webVideoDecRefChainBreakCount: this.$3,
              webVideoDecRefChainBrokenT: Math.round(this.$4),
              webVideoDecOrderingMode: this.$7,
              webVideoRenderFreezeT: Math.round(this.$5),
              webVideoRenderNumFreezes: this.$6,
            };
            return (
              this.$1.clear(),
              (this.$2 = 0),
              (this.$3 = 0),
              (this.$4 = 0),
              (this.$5 = 0),
              (this.$6 = 0),
              (this.$7 = 0),
              n
            );
          }),
          (t.$8 = function (t) {
            var e = this.$1.get(t);
            return (
              e == null &&
                ((e = {
                  lastRtpTimestamp: null,
                  brokenSinceMs: null,
                  lastRenderMs: null,
                }),
                this.$1.set(t, e)),
              e
            );
          }),
          (t.$9 = function (t, n) {
            var e = t.brokenSinceMs;
            e != null &&
              ((this.$4 += Math.max(0, n - e)), (t.brokenSinceMs = null));
          }),
          e
        );
      })();
    function u(t, n) {
      var r = t - n;
      return (r > e / 2 ? (r -= e) : r < -(e / 2) && (r += e), r);
    }
    ((i.RENDER_FREEZE_THRESHOLD_MS = l),
      (i.WAWebVoipVideoDecodeOrderTracker = s));
  },
  66,
);
