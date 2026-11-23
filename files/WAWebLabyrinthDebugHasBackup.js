__d(
  "WAWebLabyrinthDebugHasBackup",
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
        ["backup"],
        "readonly",
        async function (t) {
          var n = await o("WAWebLabyrinthDebugTransactors").readOwnedBackup(
            t,
            e,
          );
          return n.success
            ? o("WAResultOrError").makeResult(n.value != null)
            : n;
        },
        "hasLabyrinthDebugBackup",
      );
    }
    l.hasBackup = e;
  },
  98,
);
