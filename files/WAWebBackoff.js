__d(
  "WAWebBackoff",
  ["err"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e, t) {
        var n;
        ((this.backoffIntervals = [].concat(e)),
          (this.cache = new Map()),
          (this.resetInterval =
            (n = t == null ? void 0 : t.resetInterval) != null ? n : null));
      }
      var t = e.prototype;
      return (
        (t.add = function (t) {
          if (this.get(t))
            throw r("err")("This entry already exists in the backoff cache");
          this.cache.set(t, {
            lastAttempt: Date.now(),
            intervals: [].concat(this.backoffIntervals),
            attempts: 1,
          });
        }),
        (t.remove = function (t) {
          this.cache.delete(t);
        }),
        (t.get = function (t) {
          return this.cache.get(t);
        }),
        (t.reset = function (t) {
          (this.remove(t), this.add(t));
        }),
        (t.shouldBackoff = function (t) {
          var e = this.get(t);
          if (this.resetInterval != null && e != null) {
            var n = this.resetInterval,
              r = Date.now() - e.lastAttempt;
            if (r >= n) return (this.remove(t), !1);
          }
          if (e != null) {
            var o = e.intervals[0];
            if (o != null) {
              var a = Date.now() - e.lastAttempt;
              if (a < o) return !0;
            }
          }
          return !1;
        }),
        (t.markAttemptAndShiftInterval = function (t) {
          var e = this.get(t);
          e != null &&
            ((e.lastAttempt = Date.now()), e.intervals.shift(), e.attempts++);
        }),
        (t.test = function (t) {
          return this.shouldBackoff(t)
            ? !0
            : (this.get(t) != null
                ? this.markAttemptAndShiftInterval(t)
                : this.add(t),
              !1);
        }),
        (t.getCurrentInterval = function (t) {
          var e = this.get(t);
          if (e != null) return e.intervals[0];
        }),
        e
      );
    })();
    l.BackoffCache = e;
  },
  98,
);
