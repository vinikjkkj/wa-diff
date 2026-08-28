__d(
  "MediaUploadRetryState",
  ["MediaUploadTime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.retryPolicy = e),
          (this.$3 = 0),
          (this.$4 = 0),
          (this.$1 = t.currentTimeProvider),
          (this.$2 = t.randomNumberProvider),
          (this.$5 = this.$1()));
      }
      var t = e.prototype;
      return (
        (t.resetBackoff = function () {
          this.$3 = 0;
        }),
        (t.getRetryAttempts = function () {
          return this.$4;
        }),
        (t.getRetryAttemptsSinceLastReset = function () {
          return this.$3;
        }),
        (t.calculateBackoffDelay = function () {
          var e = this.retryPolicy.backoff,
            t = o("MediaUploadTime").timeToMilliseconds(e.initial),
            n = e.expBase,
            r = e.expMultiplier;
          (this.$3 > 0 &&
            n != null &&
            r != null &&
            (t +=
              o("MediaUploadTime").timeToMilliseconds(n) *
              Math.pow(r, this.$3 - 1)),
            e.max != null &&
              (t = Math.min(
                t,
                o("MediaUploadTime").timeToMilliseconds(e.max),
              )));
          var a =
            e.jitter == null
              ? 0
              : o("MediaUploadTime").timeToMilliseconds(e.jitter);
          return (
            a > 0 && (t += this.$2(-0.5 * a, 0.5 * a)),
            o("MediaUploadTime").millisecondsToTime(Math.round(t))
          );
        }),
        (t.exceedTotalRetries = function () {
          var e;
          return (
            ((e = this.retryPolicy.limits) == null
              ? void 0
              : e.totalRetryCount) != null &&
            this.$4 > this.retryPolicy.limits.totalRetryCount
          );
        }),
        (t.exceedTotalDuration = function () {
          var e, t;
          return (
            ((e = this.retryPolicy.limits) == null ? void 0 : e.totalTime) !=
              null &&
            o("MediaUploadTime").compareTime(
              (t = this.retryPolicy.limits) == null ? void 0 : t.totalTime,
              o("MediaUploadTime").subtractTime(this.$1(), this.$5),
            ) <= 0
          );
        }),
        (t.increaseRetryAttemptCounter = function () {
          (this.$3++, this.$4++);
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
