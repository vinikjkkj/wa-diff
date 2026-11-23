__d(
  "WmiMetadataRecurringTasksReader",
  ["WmiMetadataDb"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = await o("WmiMetadataDb")
        .getMetadataDb()
        .runInTransaction(
          ["recurringTasks"],
          "readonly",
          function (t) {
            return t.stores.recurringTasks.get(e);
          },
          "WmiMetadataReadRecurringTask",
        );
      return t;
    }
    l.readRecurringTaskFromMetadataDb = e;
  },
  98,
);
