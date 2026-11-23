__d(
  "WAWebLabyrinthSaveCompanionOnboarding",
  [
    "WAResultOrError",
    "WAWebLabyrinthDebugDatabase",
    "WAWebLabyrinthDebugStores",
    "WAWebLabyrinthOwnerAccountId",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      try {
        var t = o("WAWebLabyrinthOwnerAccountId").getOwnerAccountId(),
          n = await o(
            "WAWebLabyrinthDebugDatabase",
          ).getLabyrinthDebugDatabase();
        return (
          await n.runInTransaction(
            ["companionOnboarding"],
            "readwrite",
            async function (n) {
              await n.stores.companionOnboarding.bulkPut([
                babelHelpers.extends({}, e, {
                  id: o("WAWebLabyrinthDebugStores")
                    .LABYRINTH_DEBUG_SINGLETON_ID,
                  ownerAccountId: t,
                }),
              ]);
            },
            "saveLabyrinthCompanionOnboarding",
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
    l.saveLabyrinthCompanionOnboarding = e;
  },
  98,
);
