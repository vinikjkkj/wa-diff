__d(
  "WADefaultJobNoQueue",
  ["WAJobOrchestratorTypes", "WARandomHex", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        this.$2 = !1;
      }
      var t = e.prototype;
      return (
        (t.init = function (t, n) {
          if (this.$2) throw r("err")("DefaultNoQueue has already initialized");
          ((this.$1 = n), (this.$2 = !0));
        }),
        (t.updateConfig = function (t) {}),
        (t.isInitialized = function () {
          return this.$2;
        }),
        (t.clearQueue = function () {}),
        (t.clearQueueByPriority = function (t) {}),
        (t.getSnapshot = function () {
          throw r("err")("getSnapshot is not implemented for DefaultNoQueue");
        }),
        (t.enqueue = async function (t, n, r) {
          var e,
            a,
            i =
              (e = r == null ? void 0 : r.jobId) != null
                ? e
                : o("WARandomHex").randomHex(8).substr(0, 64);
          this.$1.logJobCreated({
            jobId: i,
            jobName: t,
            jobPriority:
              (a = r == null ? void 0 : r.priority) != null
                ? a
                : o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW,
            pendingJobsCount: 0,
          });
          try {
            this.$1.logJobStarted(i);
            var l = await n();
            return (this.$1.logJobCompleted(i), l);
          } catch (e) {
            throw (this.$1.logJobError(i), e);
          }
        }),
        e
      );
    })();
    l.WADefaultJobNoQueue = e;
  },
  98,
);
