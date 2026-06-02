__d(
  "WAWebNewsletterDeleteMessageAddOns",
  [
    "WAJobOrchestratorTypes",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaMessage",
    "WAWebdbCRUDOperationsNewsletterReaction",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
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
    function s(t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "deleteNewsletterMessageAddOns",
          async function () {
            var n = t.toString(),
              r = await o("WAWebSchemaMessage")
                .getMessageTable()
                .startsWithAnyOf(["internalId"], [n]),
              a = r.map(function (e) {
                return e.id;
              });
            await Promise.all(
              e.map(function (e) {
                return e(a);
              }),
            );
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.deleteNewsletterMessageAddOns = s;
  },
  98,
);
