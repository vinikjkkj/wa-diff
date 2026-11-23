__d(
  "WAWebLabyrinthDebugResetDeviceController",
  ["WAResultOrError", "WAWebLabyrinthDebugDeviceStateStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e() {
      var e = await o(
        "WAWebLabyrinthDebugDeviceStateStore",
      ).clearLabyrinthDebugDeviceState();
      return e.success
        ? o("WAResultOrError").makeResult(void 0)
        : o("WAResultOrError").makeError({
            error: e.error,
            kind: "clear-device-state-error",
          });
    }
    l.resetLabyrinthDebugDevice = e;
  },
  98,
);
