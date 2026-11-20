__d(
  "WAWebLabyrinthDebugLoadForStatus",
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
            ["backup", "device"],
            "readonly",
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n,
                    r,
                    a = yield o(
                      "WAWebLabyrinthDebugTransactors",
                    ).readOwnedBackup(t, e);
                  if (!a.success) return a;
                  var i = a.value;
                  if (i == null) return o("WAResultOrError").makeResult(null);
                  var l = yield o("WAWebLabyrinthDebugTransactors").readDevice(
                    t,
                  );
                  return l == null
                    ? o("WAResultOrError").makeResult(null)
                    : o("WAResultOrError").makeResult({
                        activeServerEpochId: i.activeServerEpochId,
                        backupId: i.backupId,
                        ebDeviceId: l.ebDeviceId,
                        localDeviceId: (n = l.localDeviceId) != null ? n : null,
                        waLabyrinthAccountId:
                          (r = i.mailboxId) != null ? r : null,
                      });
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            "loadLabyrinthDebugStateForStatus",
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.loadForStatus = e;
  },
  98,
);
