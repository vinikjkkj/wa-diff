__d(
  "WAWebLabyrinthDebugClearAllState",
  [
    "WAWebLabyrinthDebugDatabase",
    "WAWebLabyrinthDebugTransactors",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
            "WAWebLabyrinthDebugDatabase",
          ).getLabyrinthDebugDatabase();
          yield e.runInTransaction(
            ["backup", "companionOnboarding", "device", "epoch"],
            "readwrite",
            function (e) {
              return o("WAWebLabyrinthDebugTransactors").clearAllStores(e);
            },
            "clearAllLabyrinthDebugState",
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.clearAllState = e;
  },
  98,
);
