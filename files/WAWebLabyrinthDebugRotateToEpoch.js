__d(
  "WAWebLabyrinthDebugRotateToEpoch",
  ["WAWebLabyrinthDebugDatabase", "WAWebLabyrinthDebugStores", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = await o(
          "WAWebLabyrinthDebugDatabase",
        ).getLabyrinthDebugDatabase(),
        n = await t.runInTransaction(
          ["backup", "epoch"],
          "readwrite",
          async function (t) {
            var n = await t.stores.backup.get(
              o("WAWebLabyrinthDebugStores").LABYRINTH_DEBUG_SINGLETON_ID,
            );
            return n == null
              ? !1
              : (await t.stores.epoch.bulkPut([e]),
                await t.stores.backup.bulkPut([
                  babelHelpers.extends({}, n, {
                    activeServerEpochId: e.serverEpochId,
                  }),
                ]),
                !0);
          },
          "rotateLabyrinthDebugToEpoch",
        );
      if (!n)
        throw r("err")(
          "[labyrinth-debug-storage] cannot rotate an epoch without a stored backup",
        );
    }
    l.rotateToEpoch = e;
  },
  98,
);
