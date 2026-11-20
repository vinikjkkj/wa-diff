__d(
  "WAWebLabyrinthDebugDeviceStatusController",
  [
    "WAResultOrError",
    "WAWebLabyrinthDebugDeviceStateStore",
    "WAWebLabyrinthDebugLoadForStatus",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebLabyrinthDebugDeviceStateStore").loadOwnedState(
            o("WAWebLabyrinthDebugLoadForStatus").loadForStatus,
          );
          if (!e.success)
            return o("WAResultOrError").makeError({
              error: e.error,
              kind: "load-device-state-error",
            });
          var t = e.value;
          return t == null
            ? o("WAResultOrError").makeResult({ status: "not-added" })
            : o("WAResultOrError").makeResult({
                ids: {
                  backupId: t.backupId,
                  ebDeviceId: t.ebDeviceId,
                  localDeviceId: t.localDeviceId,
                  waLabyrinthAccountId: t.waLabyrinthAccountId,
                },
                status: "ready",
              });
        })),
        s.apply(this, arguments)
      );
    }
    l.getLabyrinthDebugDeviceStatus = e;
  },
  98,
);
