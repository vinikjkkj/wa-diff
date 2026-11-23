__d(
  "WAWebSentinel",
  [
    "WAWebGetPendingMutation",
    "WAWebSentinelMutationSync",
    "WAWebSyncd",
    "WAWebSyncdConst",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e() {
      var e = await r("WAWebSentinelMutationSync").getSentinelMutations();
      return (
        await o(
          "WAWebGetPendingMutation",
        ).bulkCreateSyncPendingMutationsInTransaction(e),
        o("WAWebSyncd").markCollectionsForSync(
          Array.from(o("WAWebSyncdConst").CollectionName.members()),
        )
      );
    }
    l.default = e;
  },
  98,
);
