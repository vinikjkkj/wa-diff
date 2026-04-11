__d(
  "WAWebVoipStatsTracker",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 1e4;
    function l(e) {
      return { min: e, max: e, total: e, samples: 1 };
    }
    var s = (function () {
      function e() {
        ((this.$1 = new Map()), (this.$2 = null), (this.$3 = null));
      }
      var t = e.prototype;
      return (
        (t.record = function (t, n) {
          var e = this.$1.get(t);
          e == null
            ? this.$1.set(t, l(n))
            : ((e.min = Math.min(e.min, n)),
              (e.max = Math.max(e.max, n)),
              (e.total += n),
              e.samples++);
        }),
        (t.getStats = function (t) {
          return this.$1.get(t);
        }),
        (t.getMostActiveId = function () {
          var e = null,
            t = 0;
          for (var n of this.$1) {
            var r = n[0],
              o = n[1];
            o.samples > t && ((t = o.samples), (e = r));
          }
          return e;
        }),
        (t.formatStats = function (t) {
          var e = this.$1.get(t);
          if (e == null || e.samples === 0) return null;
          var n = Math.round(e.total / e.samples);
          return (
            "min=" +
            e.min +
            ", max=" +
            e.max +
            ", avg=" +
            n +
            ", samples=" +
            e.samples
          );
        }),
        (t.formatSummary = function () {
          var e = this.getMostActiveId();
          if (e == null) return null;
          var t = this.$1.get(e);
          if (t == null || t.samples === 0) return null;
          var n = Math.round(t.total / t.samples);
          return (
            t.samples +
            " samples, min=" +
            t.min +
            ", max=" +
            t.max +
            ", avg=" +
            n
          );
        }),
        (t.resetAll = function () {
          for (var e of this.$1.values())
            ((e.min = 1 / 0), (e.max = 0), (e.total = 0), (e.samples = 0));
        }),
        (t.remove = function (t) {
          this.$1.delete(t);
        }),
        (t.clear = function () {
          this.$1.clear();
        }),
        (t.startPolling = function (t) {
          var e = this;
          this.$3 == null &&
            ((this.$2 = t),
            (this.$3 = globalThis.setInterval(function () {
              (t.onInterval(e), t.resetPerInterval === !0 && e.resetAll());
            }, t.intervalMs)));
        }),
        (t.stopPolling = function () {
          (this.$3 != null &&
            (globalThis.clearInterval(this.$3), (this.$3 = null)),
            (this.$2 = null));
          var e = this.formatSummary();
          return (this.clear(), e);
        }),
        (t.isPolling = function () {
          return this.$3 != null;
        }),
        e
      );
    })();
    ((i.DEFAULT_POLL_INTERVAL_MS = e), (i.VoipStatsTracker = s));
  },
  66,
);
