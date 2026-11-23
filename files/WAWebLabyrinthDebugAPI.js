__d(
  "WAWebLabyrinthDebugAPI",
  [
    "WAResultOrError",
    "WATimeUtils",
    "WAWebLabyrinthDebugAddDeviceController",
    "WAWebLabyrinthDebugDeviceStatusController",
    "WAWebLabyrinthDebugMessagePreview",
    "WAWebLabyrinthDebugPilotStatusController",
    "WAWebLabyrinthDebugResetDeviceController",
    "WAWebLabyrinthReportedHistoryStart",
    "WAWebLabyrinthRestoreThreadController",
    "WAWebLabyrinthSealedRestoreController",
    "WAWebLabyrinthShadowScheduler",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e() {
      return {
        eligibility: await o(
          "WAWebLabyrinthShadowScheduler",
        ).getLabyrinthShadowEligibility(),
        lastRun: o("WAWebLabyrinthShadowScheduler").getLastLabyrinthShadowRun(),
        reportedHistoryStartSec: o(
          "WAWebLabyrinthReportedHistoryStart",
        ).getLabyrinthReportedHistoryStartSec(),
        running: o(
          "WAWebLabyrinthShadowScheduler",
        ).isLabyrinthShadowRunInFlight(),
      };
    }
    function s(e) {
      return o("WAWebLabyrinthShadowScheduler").forceLabyrinthShadowRun({
        reportedHistoryStartSec: e == null ? void 0 : c(e),
      });
    }
    function u(e) {
      return o(
        "WAWebLabyrinthReportedHistoryStart",
      ).saveLabyrinthReportedHistoryStart(c(e));
    }
    function c(e) {
      return o("WATimeUtils").unixTime() - e * o("WATimeUtils").DAY_SECONDS;
    }
    async function d(e) {
      var t = await o(
        "WAWebLabyrinthRestoreThreadController",
      ).restoreLabyrinthThread(e);
      return t.success
        ? o("WAResultOrError").makeResult({
            messages: await o(
              "WAWebLabyrinthDebugMessagePreview",
            ).previewLabyrinthDebugMessages(t.value.messages),
            restoredAtMs: t.value.restoredAtMs,
          })
        : t;
    }
    async function m(e) {
      var t = await o(
        "WAWebLabyrinthSealedRestoreController",
      ).restoreLabyrinthSealedThreads(e);
      return t.success
        ? o("WAResultOrError").makeResult({
            restoredAtMs: t.value.restoredAtMs,
            threads: await Promise.all(t.value.threads.map(p)),
          })
        : t;
    }
    async function p(e) {
      var t = e.serverThreadId,
        n = e.threadResult;
      return n.success
        ? {
            serverThreadId: t,
            threadResult: o("WAResultOrError").makeResult(
              babelHelpers.extends({}, n.value, {
                messages: await o(
                  "WAWebLabyrinthDebugMessagePreview",
                ).previewLabyrinthDebugMessages(n.value.messages),
              }),
            ),
          }
        : { serverThreadId: t, threadResult: n };
    }
    ((l.addLabyrinthDebugDevice = o(
      "WAWebLabyrinthDebugAddDeviceController",
    ).addLabyrinthDebugDevice),
      (l.getLabyrinthDebugDeviceStatus = o(
        "WAWebLabyrinthDebugDeviceStatusController",
      ).getLabyrinthDebugDeviceStatus),
      (l.getLabyrinthDebugPilotStatus = o(
        "WAWebLabyrinthDebugPilotStatusController",
      ).getLabyrinthDebugPilotStatus),
      (l.resetLabyrinthDebugDevice = o(
        "WAWebLabyrinthDebugResetDeviceController",
      ).resetLabyrinthDebugDevice),
      (l.getLabyrinthShadowDebugState = e),
      (l.runLabyrinthShadowDebug = s),
      (l.saveLabyrinthShadowReportedHistoryDays = u),
      (l.restoreLabyrinthDebugThread = d),
      (l.restoreLabyrinthDebugSealedThreads = m));
  },
  98,
);
