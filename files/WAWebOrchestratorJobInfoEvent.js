__d(
  "WAWebOrchestratorJobInfoEvent",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e(e, t, n, r) {
        ((this.jobName = e),
          (this.scenario = r),
          (this.pendingJobsCount = n),
          (this.jobPriority = t));
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
