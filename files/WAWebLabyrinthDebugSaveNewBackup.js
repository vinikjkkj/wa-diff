__d(
  "WAWebLabyrinthDebugSaveNewBackup",
  [
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
          yield t.runInTransaction(
            ["backup", "companionOnboarding", "device", "epoch"],
            "readwrite",
            function (t) {
              return o("WAWebLabyrinthDebugTransactors").replaceWithNewBackup(
                t,
                e,
              );
            },
            "saveNewLabyrinthDebugBackup",
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.saveNewBackup = e;
  },
  98,
);
