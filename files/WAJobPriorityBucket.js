__d(
  "WAJobPriorityBucket",
  ["WAJobOrchestratorTypes", "WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (function () {
        function t(e) {
          var t;
          ((this.tasks = []),
            (this.pendingTasks = []),
            (this.lastJobStartedTimestampMs = null),
            (this.jobMaxConcurrency =
              (t = e.jobMaxConcurrencyMap) != null ? t : {}));
        }
        var n = t.prototype;
        return (
          (n.updateConfig = function (t) {
            var e;
            this.jobMaxConcurrency =
              (e = t.jobMaxConcurrencyMap) != null ? e : {};
          }),
          (n.getStats = function () {
            return [].concat(this.tasks, this.pendingTasks).reduce(function (
              e,
              t,
            ) {
              var n,
                r = (n = e[t.jobName]) != null ? n : 0;
              return ((e[t.jobName] = r + 1), e);
            }, {});
          }),
          (n.next = function () {
            var e = this;
            if (this.tasks.length === 0) return null;
            var t = this.pendingTasks.reduce(function (e, t) {
                var n,
                  r = (n = e.get(t.jobName)) != null ? n : 0;
                return (e.set(t.jobName, r + 1), e);
              }, new Map()),
              n = this.tasks.filter(function (n) {
                var r, a;
                return (
                  ((r = t.get(n.jobName)) != null ? r : 0) <
                  ((a = e.jobMaxConcurrency[n.jobName]) != null
                    ? a
                    : o("WAJobOrchestratorTypes").DEFAULT_CONCURRENCY)
                );
              });
            return n.length > 0 ? [n[0]] : null;
          }),
          (n.add = function (t, n, r, o) {
            var e = { jobId: r, jobInfo: n, jobName: t, run: o };
            return (this.tasks.push(e), e);
          }),
          (n.markJobTaskPending = function (n) {
            (this.pendingTasks.includes(function (e) {
              return e.jobId === n.jobId;
            }) &&
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Assertion failed::markJobTaskPending found jobId: ",
                      " in pending tasks",
                    ])),
                  n.jobId,
                )
                .sendLogs("JobOrchestrator::markJobTaskPending"),
              (this.lastJobStartedTimestampMs = Date.now()),
              this.pendingTasks.push(n),
              (this.tasks = this.tasks.filter(function (e) {
                return e.jobId !== n.jobId;
              })));
          }),
          (n.markJobTaskDone = function (t) {
            ((this.pendingTasks = this.pendingTasks.filter(function (e) {
              return e.jobId !== t;
            })),
              this.tasks.includes(function (e) {
                return e.jobId === t;
              }) &&
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Assertion failed::markJobTaskDone found jobId: ",
                        " in scheduled tasks",
                      ])),
                    t,
                  )
                  .sendLogs("JobOrchestrator::markJobTaskDone"));
          }),
          (n.count = function () {
            return this.tasks.length;
          }),
          (n.pendingCount = function () {
            return this.pendingTasks.length;
          }),
          (n.clearWaitingTasks = function () {
            this.tasks = [];
          }),
          (n.clear = function () {
            ((this.tasks = []), (this.pendingTasks = []));
          }),
          (n.getLastJobStartedTimestamp = function () {
            return this.lastJobStartedTimestampMs;
          }),
          t
        );
      })(),
      c = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.next = function () {
            var e = this,
              t,
              n;
            if (this.tasks.length === 0) return null;
            var r = this.pendingTasks.reduce(function (e, t) {
                var n,
                  r = (n = e.get(t.jobName)) != null ? n : 0;
                return (e.set(t.jobName, r + 1), e);
              }, new Map()),
              o = this.tasks.filter(function (t) {
                var n, o;
                return (
                  ((n = r.get(t.jobName)) != null ? n : 0) <
                  ((o = e.jobMaxConcurrency[t.jobName]) != null ? o : 1)
                );
              });
            if (o.length === 0) return null;
            var a = (t = this.jobMaxConcurrency[o[0].jobName]) != null ? t : 1,
              i = (n = r.get(o[0].jobName)) != null ? n : 0;
            if (a > 1 && i < a) {
              var l = o.filter(function (e) {
                  return e.jobName === o[0].jobName;
                }),
                s = Math.min(l.length, a - i);
              return l.slice(0, s);
            }
            return [o[0]];
          }),
          t
        );
      })(u);
    ((l.BaseJobBucket = u), (l.LowJobBucket = c));
  },
  98,
);
