__d(
  "WmiMetadataRecurringTasksWriter",
  ["WmiMetadataDb"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      await o("WmiMetadataDb")
        .getMetadataDb()
        .runInTransaction(
          ["recurringTasks"],
          "readwrite",
          function (t) {
            return t.stores.recurringTasks.bulkPut([e]);
          },
          "WmiMetadataWriteRecurringTask",
        );
    }
    async function s() {
      await o("WmiMetadataDb")
        .getMetadataDb()
        .runInTransaction(
          ["recurringTasks"],
          "readwrite",
          function (e) {
            return e.stores.recurringTasks.clear();
          },
          "WmiMetadataClearRecurringTasks",
        );
    }
    ((l.writeRecurringTaskToMetadataDb = e),
      (l.clearRecurringTasksInMetadataDb = s));
  },
  98,
);
