__d(
  "WAWebSentinel",
  [
    "WAWebGetPendingMutation",
    "WAWebSentinelMutationSync",
    "WAWebSyncd",
    "WAWebSyncdConst",
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
          var e = yield r("WAWebSentinelMutationSync").getSentinelMutations();
          return (
            yield o(
              "WAWebGetPendingMutation",
            ).bulkCreateSyncPendingMutationsInTransaction(e),
            o("WAWebSyncd").markCollectionsForSync(
              Array.from(o("WAWebSyncdConst").CollectionName.members()),
            )
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.default = e;
  },
  98,
);
