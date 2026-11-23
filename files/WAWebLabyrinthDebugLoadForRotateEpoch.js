__d(
  "WAWebLabyrinthDebugLoadForRotateEpoch",
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
          var n,
            r,
            a = await o("WAWebLabyrinthDebugTransactors").readOwnedRows(t, e);
          if (!a.success) return a;
          if (a.value == null) return o("WAResultOrError").makeResult(null);
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
        "loadLabyrinthDebugStateForRotateEpoch",
      );
    }
    l.loadForRotateEpoch = e;
  },
  98,
);
