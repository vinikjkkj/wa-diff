__d(
  "WAWebLabyrinthDebugLoadForRotateEpoch",
  [
    "WAResultOrError",
    "WAWebLabyrinthDebugDatabase",
    "WAWebLabyrinthDebugTransactors",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebLabyrinthDebugDatabase",
          ).getLabyrinthDebugDatabase();
          return t.runInTransaction(
            ["backup", "device", "epoch"],
            "readonly",
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n,
                    r,
                    a = yield o("WAWebLabyrinthDebugTransactors").readOwnedRows(
                      t,
                      e,
                    );
                  if (!a.success) return a;
                  if (a.value == null)
                    return o("WAResultOrError").makeResult(null);
                  var i = a.value,
                    l = i.backup,
                    s = i.currentEpoch,
                    u = i.device;
                  return o("WAResultOrError").makeResult({
                    currentEpoch: s,
                    ebDeviceId: u.ebDeviceId,
                    epochStorageAuthPrivateKey:
                      (n = u.epochStorageAuthPrivateKey) != null ? n : null,
                    vdDeviceId: (r = l.vdDeviceId) != null ? r : null,
                  });
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            "loadLabyrinthDebugStateForRotateEpoch",
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.loadForRotateEpoch = e;
  },
  98,
);
