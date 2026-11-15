__d(
  "WAWebLabyrinthDebugRotateToEpoch",
  [
    "WAWebLabyrinthDebugDatabase",
    "WAWebLabyrinthDebugStores",
    "asyncToGeneratorRuntime",
    "err",
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
            ).getLabyrinthDebugDatabase(),
            a = yield t.runInTransaction(
              ["backup", "epoch"],
              "readwrite",
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var n = yield t.stores.backup.get(
                      o("WAWebLabyrinthDebugStores")
                        .LABYRINTH_DEBUG_SINGLETON_ID,
                    );
                    return n == null
                      ? !1
                      : (yield t.stores.epoch.bulkPut([e]),
                        yield t.stores.backup.bulkPut([
                          babelHelpers.extends({}, n, {
                            activeServerEpochId: e.serverEpochId,
                          }),
                        ]),
                        !0);
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              "rotateLabyrinthDebugToEpoch",
            );
          if (!a)
            throw r("err")(
              "[labyrinth-debug-storage] cannot rotate an epoch without a stored backup",
            );
        })),
        s.apply(this, arguments)
      );
    }
    l.rotateToEpoch = e;
  },
  98,
);
