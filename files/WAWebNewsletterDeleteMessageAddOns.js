__d(
  "WAWebNewsletterDeleteMessageAddOns",
  [
    "Promise",
    "WAJobOrchestratorTypes",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaMessage",
    "WAWebdbCRUDOperationsNewsletterReaction",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = [
        function (e) {
          return o(
            "WAWebdbCRUDOperationsNewsletterReaction",
          ).bulkRemoveNewsletterReactionsForParentMsg(
            e.map(function (e) {
              return e;
            }),
          );
        },
      ];
    function u(t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "deleteNewsletterMessageAddOns",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var r = t.toString(),
              a = yield o("WAWebSchemaMessage")
                .getMessageTable()
                .startsWithAnyOf(["internalId"], [r]),
              i = a.map(function (e) {
                return e.id;
              });
            yield (e || (e = n("Promise"))).all(
              s.map(function (e) {
                return e(i);
              }),
            );
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.deleteNewsletterMessageAddOns = u;
  },
  98,
);
