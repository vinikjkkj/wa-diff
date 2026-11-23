__d(
  "WAWebLabyrinthDebugClearAllState",
  ["WAWebLabyrinthDebugDatabase", "WAWebLabyrinthDebugTransactors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e() {
      var e = await o(
        "WAWebLabyrinthDebugDatabase",
      ).getLabyrinthDebugDatabase();
      await e.runInTransaction(
        ["backup", "companionOnboarding", "device", "epoch"],
        "readwrite",
        function (e) {
          return o("WAWebLabyrinthDebugTransactors").clearAllStores(e);
        },
        "clearAllLabyrinthDebugState",
      );
    }
    l.clearAllState = e;
  },
  98,
);
