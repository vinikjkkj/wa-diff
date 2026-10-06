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
          (t.observe = function (t) {
            var e = t.isKeyFrame,
              n = t.nowMs,
              r = t.rtpTimestamp,
              o = t.source,
              a = this.$8(o);
            if (e)
              return (
                this.$9(a, n),
                (a.lastRtpTimestamp = r),
                { outOfOrder: !1, episodeStarted: !1 }
              );
            var i = a.lastRtpTimestamp;
            if (i == null || u(r, i) >= 0)
              return (
                (a.lastRtpTimestamp = r),
                { outOfOrder: !1, episodeStarted: !1 }
              );
            this.$2++;
            var l = !1;
            return (
              a.brokenSinceMs == null &&
                ((a.brokenSinceMs = n), this.$3++, (l = !0)),
              { outOfOrder: !0, episodeStarted: l }
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
