__d(
  "WAOrchestratorJobStatsLogger",
  ["QPLFlow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e(e, t, n) {
          ((this.jobName = e),
            (this.pendingJobsCount = n),
            (this.jobPriority = t));
        }
        var t = e.prototype;
        return (
          (t.logJobAdded = function () {
            ((this.webcJobAddedT = Date.now()),
              (this.eventFlow = o("QPLFlow").startNoopQPLFlow()));
          }),
          (t.logJobStarted = function () {
            ((this.webcJobStartedT = Date.now()),
              this.eventFlow.addPoint("start_job", {
                int: { startedAt: this.webcJobStartedT },
              }));
          }),
          (t.logJobCompleted = function (t) {
            ((this.webcJobCompletedT = Date.now()), (this.jobResultType = t));
            var e = {
              int: {
                pendingJobsCount: this.pendingJobsCount,
                completedAt: this.webcJobCompletedT,
              },
            };
            t === "completed"
              ? this.eventFlow.endSuccess(e)
              : this.eventFlow.endFail(t, e);
          }),
          e
        );
      })(),
      s = (function () {
        function t() {
          this.$1 = new Map();
        }
        var n = t.prototype;
        return (
          (n.logJobCreated = function (n) {
            var t = n.jobId,
              r = n.jobName,
              o = n.jobPriority,
              a = n.pendingJobsCount,
              i = new e(r, o, a);
            (i.logJobAdded(), this.$1.set(t, i));
          }),
          (n.logJobStarted = function (t) {
            var e = this.$1.get(t);
            e == null || e.logJobStarted();
          }),
          (n.logJobCompleted = function (t) {
            this.$2(t, "completed");
          }),
          (n.logJobError = function (t) {
            this.$2(t, "error");
          }),
          (n.logJobTimeout = function (t) {
            this.$2(t, "timeout");
          }),
          (n.logJobAborted = function (t) {
            this.$2(t, "aborted");
          }),
          (n.$2 = function (t, n) {
            var e = this.$1.get(t);
            (e == null || e.logJobCompleted(n), this.$1.delete(t));
          }),
          t
        );
      })();
    l.JobStatsLogger = s;
  },
  98,
);
