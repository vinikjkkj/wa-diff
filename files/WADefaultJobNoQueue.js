__d(
  "WADefaultJobNoQueue",
  ["WAJobOrchestratorTypes", "WARandomHex", "asyncToGeneratorRuntime", "err"],
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
        (t.enqueue = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              var r,
                a,
                i =
                  (r = n == null ? void 0 : n.jobId) != null
                    ? r
                    : o("WARandomHex").randomHex(8).substr(0, 64);
              this.$1.logJobCreated({
                jobId: i,
                jobName: e,
                jobPriority:
                  (a = n == null ? void 0 : n.priority) != null
                    ? a
                    : o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW,
                pendingJobsCount: 0,
              });
              try {
                this.$1.logJobStarted(i);
                var l = yield t();
                return (this.$1.logJobCompleted(i), l);
              } catch (e) {
                throw (this.$1.logJobError(i), e);
              }
            },
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        e
      );
    })();
    l.WADefaultJobNoQueue = e;
  },
  98,
);
