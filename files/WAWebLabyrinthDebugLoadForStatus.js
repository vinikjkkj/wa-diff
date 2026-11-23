__d(
  "WAWebLabyrinthDebugLoadForStatus",
  [
    "WAResultOrError",
    "WAWebLabyrinthDebugDatabase",
    "WAWebLabyrinthDebugTransactors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = await o(
        "WAWebLabyrinthDebugDatabase",
      ).getLabyrinthDebugDatabase();
      return t.runInTransaction(
        ["backup", "device"],
        "readonly",
        async function (t) {
          var n,
            r,
            a = await o("WAWebLabyrinthDebugTransactors").readOwnedBackup(t, e);
          if (!a.success) return a;
          var i = a.value;
          if (i == null) return o("WAResultOrError").makeResult(null);
          var l = await o("WAWebLabyrinthDebugTransactors").readDevice(t);
          return l == null
            ? o("WAResultOrError").makeResult(null)
            : o("WAResultOrError").makeResult({
                activeServerEpochId: i.activeServerEpochId,
                backupId: i.backupId,
                ebDeviceId: l.ebDeviceId,
                localDeviceId: (n = l.localDeviceId) != null ? n : null,
                waLabyrinthAccountId: (r = i.mailboxId) != null ? r : null,
              });
        },
        "loadLabyrinthDebugStateForStatus",
      );
    }
    l.loadForStatus = e;
  },
  98,
);
