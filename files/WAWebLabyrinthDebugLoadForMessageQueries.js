__d(
  "WAWebLabyrinthDebugLoadForMessageQueries",
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
                  var n = yield o(
                    "WAWebLabyrinthDebugTransactors",
                  ).readOwnedRows(t, e);
                  if (!n.success) return n;
                  if (n.value == null)
                    return o("WAResultOrError").makeResult(null);
                  var r = n.value,
                    a = r.backup,
                    i = r.currentEpoch,
                    l = r.device;
                  return o("WAResultOrError").makeResult({
                    backupId: a.backupId,
                    currentEpoch: i,
                    ebDeviceId: l.ebDeviceId,
                    orfClientState: l.orfClientState,
                  });
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            "loadLabyrinthDebugStateForMessageQueries",
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.loadForMessageQueries = e;
  },
  98,
);
