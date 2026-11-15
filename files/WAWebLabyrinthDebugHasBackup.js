__d(
  "WAWebLabyrinthDebugHasBackup",
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
            ["backup"],
            "readonly",
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n = yield o(
                    "WAWebLabyrinthDebugTransactors",
                  ).readOwnedBackup(t, e);
                  return n.success
                    ? o("WAResultOrError").makeResult(n.value != null)
                    : n;
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            "hasLabyrinthDebugBackup",
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.hasBackup = e;
  },
  98,
);
