__d(
  "WAWebReadHatchScheduledTaskRuns",
  [
    "WALogger",
    "WAWebHatchScheduledTaskRunsDecoder",
    "WAWebReadHatchScheduledTasks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(e, t, n) {
      var r = await o("WAWebReadHatchScheduledTasks").readFromHatchVm(n, {
        decode: function (n) {
          return o(
            "WAWebHatchScheduledTaskRunsDecoder",
          ).decodeHatchScheduledTaskRuns(n, e);
        },
        decodeFailedReason: "noRuns",
        reportFailure: u,
        request: function (r) {
          return r.scheduledTaskRuns(e, t, {
            timeoutMs: o("WAWebReadHatchScheduledTasks").READ_TIMEOUT_MS,
          });
        },
      });
      return r.kind === "ok" ? { kind: "loaded", runs: r.value } : r;
    }
    function u(t) {
      o("WALogger")
        .WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-scheduled-task-runs/read-failed reason=",
              "",
            ])),
          t,
        )
        .sendLogs("hatch-scheduled-task-runs-read-failed");
    }
    l.readHatchScheduledTaskRuns = s;
  },
  98,
);
