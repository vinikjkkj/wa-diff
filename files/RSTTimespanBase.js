__d(
  "RSTTimespanBase",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 200,
      l = (function () {
        function t() {
          this.$1 = [];
        }
        var n = t.prototype;
        return (
          (n.getLastTimespan = function () {
            return this.$1.length > 0 ? this.$1[this.$1.length - 1] : null;
          }),
          (n.startTimespan = function () {
            var t = this.getLastTimespan();
            (t == null || t.end != null) &&
              (this.$1.push({ start: Date.now(), end: null }),
              this.$1.length > e && this.$1.shift());
          }),
          (n.endTimespan = function () {
            var e = this.getLastTimespan();
            e != null && e.end == null && (e.end = Date.now());
          }),
          (n.clearLastUnfinishedTimespan = function () {
            var e = this.getLastTimespan();
            e != null && e.end == null && this.$1.pop();
          }),
          (n.isWithinTimespan = function () {
            var e = this.getLastTimespan();
            return e == null ? !1 : e.end == null;
          }),
          (n.isCurrentlyInTimespan = function () {
            var e = this.getLastTimespan();
            return e == null ? !1 : e.end == null;
          }),
          (n.getIntersectionTime = function (t, n, r) {
            var e, o;
            r === void 0 && (r = null);
            for (
              var a =
                  (e = (o = r) == null ? void 0 : o.ignoreLastUnfinished) !=
                  null
                    ? e
                    : !1,
                i = 0,
                l = this.$1.length,
                s = 0;
              s < l;
              ++s
            ) {
              var u,
                c,
                d = this.$1[s];
              if (
                !(a && s === l - 1 && d.end == null) &&
                !(((u = d.end) != null ? u : 1 / 0) <= t)
              ) {
                if (d.start >= n) break;
                var m = Math.max(d.start, t),
                  p = Math.min((c = d.end) != null ? c : 1 / 0, n);
                i += p - m;
              }
            }
            return i;
          }),
          t
        );
      })();
    i.default = l;
  },
  66,
);
