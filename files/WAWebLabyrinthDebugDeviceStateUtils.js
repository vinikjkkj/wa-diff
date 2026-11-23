__d(
  "WAWebLabyrinthDebugDeviceStateUtils",
  ["WAWebLabyrinthDebugDeviceStateStore", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e =
      "Call Debug.labyrinthCreateBackupNativeWasm() or Debug.labyrinthAddDevice() first";
    async function s(t) {
      var n = await o("WAWebLabyrinthDebugDeviceStateStore").loadOwnedState(t);
      if (!n.success) throw n.error.error;
      if (n.value == null) throw r("err")(e);
      return n.value;
    }
    l.requireDebugState = s;
  },
  98,
);
