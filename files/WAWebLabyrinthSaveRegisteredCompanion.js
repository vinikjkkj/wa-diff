__d(
  "WAWebLabyrinthSaveRegisteredCompanion",
  [
    "WAResultOrError",
    "WAWebLabyrinthDebugDatabase",
    "WAWebLabyrinthDebugStores",
    "WAWebLabyrinthDebugTransactors",
    "WAWebLabyrinthOwnerAccountId",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t) {
      try {
        var n = o("WAWebLabyrinthOwnerAccountId").getOwnerAccountId(),
          a = await o(
            "WAWebLabyrinthDebugDatabase",
          ).getLabyrinthDebugDatabase();
        return (
          await a.runInTransaction(
            ["backup", "companionOnboarding", "device", "epoch"],
            "readwrite",
            async function (r) {
              (await o("WAWebLabyrinthDebugTransactors").replaceWithNewBackup(
                r,
                babelHelpers.extends({}, e, { ownerAccountId: n }),
              ),
                await r.stores.companionOnboarding.bulkPut([
                  babelHelpers.extends({}, t, {
                    id: o("WAWebLabyrinthDebugStores")
                      .LABYRINTH_DEBUG_SINGLETON_ID,
                    ownerAccountId: n,
                  }),
                ]));
            },
            "saveRegisteredLabyrinthCompanion",
          ),
          o("WAResultOrError").makeResult(void 0)
        );
      } catch (e) {
        return o("WAResultOrError").makeError({
          error: r("getErrorSafe")(e),
          kind: "storage-error",
          operation: "save",
        });
      }
    }
    l.saveRegisteredLabyrinthCompanion = e;
  },
  98,
);
