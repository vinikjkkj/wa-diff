__d(
  "WAWebOrchestratorJobInfoEvent",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e(e) {
        var t = e.jobName,
          n = e.jobPriority,
          r = e.pendingJobsCount,
          o = e.scenario;
        ((this.jobName = t),
          (this.scenario = o),
          (this.pendingJobsCount = r),
          (this.jobPriority = n));
      }
      var t = e.prototype;
      return (
        (t.logJobAdded = function () {
          this.webcJobAddedT = Date.now();
        }),
        (t.logJobStarted = function () {
          this.webcJobStartedT = Date.now();
        }),
        (t.logJobCompleted = function (t) {
          ((this.webcJobCompletedT = Date.now()), (this.jobResultType = t));
        }),
        e
      );
    })();
    i.JobInfoEvent = e;
  },
  66,
);
