__d(
  "WAWebLabyrinthDebugSaveNewBackup",
  ["WAWebLabyrinthDebugDatabase", "WAWebLabyrinthDebugTransactors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = await o(
        "WAWebLabyrinthDebugDatabase",
      ).getLabyrinthDebugDatabase();
      await t.runInTransaction(
        ["backup", "companionOnboarding", "device", "epoch"],
        "readwrite",
        function (t) {
          return o("WAWebLabyrinthDebugTransactors").replaceWithNewBackup(t, e);
        },
        "saveNewLabyrinthDebugBackup",
      );
    }
    l.saveNewBackup = e;
  },
  98,
);
