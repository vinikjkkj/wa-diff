__d(
  "WAWebLabyrinthDebugDeviceStateUtils",
  ["WAWebLabyrinthDebugDeviceStateStore", "asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e =
      "Call Debug.labyrinthCreateBackupNativeWasm() or Debug.labyrinthAddDevice() first";
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield o("WAWebLabyrinthDebugDeviceStateStore").loadOwnedState(
            t,
          );
          if (!n.success) throw n.error.error;
          if (n.value == null) throw r("err")(e);
          return n.value;
        })),
        u.apply(this, arguments)
      );
    }
    l.requireDebugState = s;
  },
  98,
);
