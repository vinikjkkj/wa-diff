__d(
  "RSTRecoverableUnresponsivenessTrackingMainThread",
  ["RSTConfig", "one-trace", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set(["INP", "LONGTASK"]);
    function u() {
      r("one-trace").subscribe("trace-end", function (e) {
        s.has(e.traceType) &&
          d.getInstance().addEvent(babelHelpers.extends({}, e));
      });
    }
    function c() {
      return d.getInstance().getStats();
    }
    var d = (function () {
      function t() {
        ((this.WINDOW_MS = r("RSTConfig").TRACE_STATS_WINDOW_SIZE_MS),
          (this.MAX_EVENTS = r("RSTConfig").TRACE_STATS_MAX_QUEUE_SIZE),
          (this.eventQueue = []));
      }
      t.getInstance = function () {
        return (t.instance || (t.instance = new t()), t.instance);
      };
      var n = t.prototype;
      return (
        (n.addEvent = function (t) {
          if (!(t.startTime == null || t.endTime == null)) {
            var e = {
              traceType: t.traceType,
              startTime: t.startTime,
              duration: t.endTime - t.startTime,
              endTime: t.endTime,
            };
            (this.eventQueue.push(e),
              this.cleanupOldEvents(),
              this.eventQueue.length >= this.MAX_EVENTS &&
                this.eventQueue.shift());
          }
        }),
        (n.getStats = function () {
          this.cleanupOldEvents();
          var e = {};
          this.eventQueue.forEach(function (t) {
            t.traceType in e
              ? (e[t.traceType].count++,
                (e[t.traceType].totalDurationMs += t.duration))
              : (e[t.traceType] = {
                  count: 1,
                  totalDurationMs: t.duration,
                  averageDurationMs: 0,
                });
          });
          for (var t of Object.keys(e)) {
            var n = e[t].totalDurationMs / e[t].count;
            e[t].averageDurationMs = Math.floor(n);
          }
          return e;
        }),
        (n.cleanupOldEvents = function () {
          for (
            var t = (e || (e = r("performanceNow")))();
            this.eventQueue.length > 0;
          ) {
            var n = this.eventQueue[0];
            if (n.endTime >= t - this.WINDOW_MS) break;
            this.eventQueue.shift();
          }
        }),
        t
      );
    })();
    ((d.instance = null), (l.start = u), (l.getStats = c));
  },
  98,
);
