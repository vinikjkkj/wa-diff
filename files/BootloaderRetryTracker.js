__d(
  "BootloaderRetryTracker",
  ["ErrorGuard", "performanceAbsoluteNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (function () {
        function n(e) {
          ((this.$2 = []),
            (this.$3 = new Map()),
            (this.$1 = e),
            (this.$4 = this.$1.retries.length > 0));
        }
        var o = n.prototype;
        return (
          (o.getAllRetryAttempts_FOR_DEBUG_ONLY = function () {
            return this.$3;
          }),
          (o.getNumRetriesForSource = function (t) {
            var e;
            return (e = this.$3.get(t)) != null ? e : 0;
          }),
          (o.maybeScheduleRetry = function (o, a, i) {
            var n = this,
              l = this.getNumRetriesForSource(o);
            if (!this.$5() || l >= this.$1.retries.length) {
              i();
              return;
            }
            (this.$2.push((e || (e = r("performanceAbsoluteNow")))()),
              this.$3.set(o, l + 1),
              t.setTimeout(function () {
                n.$5() ? a() : i();
              }, this.$1.retries[l]));
          }),
          (o.maybeRetryImmediately = function (n, o, a) {
            var t = this.getNumRetriesForSource(n);
            if (!this.$5() || t >= this.$1.retries.length) {
              a();
              return;
            }
            (this.$2.push((e || (e = r("performanceAbsoluteNow")))()),
              this.$3.set(n, t + 1),
              o());
          }),
          (o.$5 = function () {
            if (!this.$4) return !1;
            var e = this.$2.length;
            if (e < this.$1.abortNum) return !0;
            var t = this.$2[e - 1] - this.$2[e - this.$1.abortNum];
            return (
              t < this.$1.abortTime &&
                ((s || (s = r("ErrorGuard"))).applyWithGuard(
                  this.$1.abortCallback,
                  null,
                  [],
                ),
                (this.$4 = !1)),
              this.$4
            );
          }),
          n
        );
      })();
    l.default = u;
  },
  98,
);
