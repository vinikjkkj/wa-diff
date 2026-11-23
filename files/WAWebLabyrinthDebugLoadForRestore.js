__d(
  "WAWebLabyrinthDebugLoadForRestore",
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
        ["backup", "device", "epoch"],
        "readonly",
        async function (t) {
          var n = await o("WAWebLabyrinthDebugTransactors").readOwnedRows(t, e);
          if (!n.success) return n;
          if (n.value == null) return o("WAResultOrError").makeResult(null);
          var r = n.value,
            a = r.backup,
            i = r.currentEpoch,
            l = r.device;
          return o("WAResultOrError").makeResult({
            backupId: a.backupId,
            currentEpoch: i,
            ebDeviceId: l.ebDeviceId,
            epochStoragePrivateKey: l.epochStoragePrivateKey,
            orfClientState: l.orfClientState,
          });
        },
        "loadLabyrinthDebugStateForRestore",
      );
    }
    l.loadForRestore = e;
  },
  98,
);
