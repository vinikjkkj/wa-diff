__d(
  "WAWebSchemaTasksScheduledTime",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addColumn,
        r = t.addUserDefinedPrimaryKey;
      e.add("tasks-scheduled-time")
        .version(
          o("WAWebModelStorageVersions").tasksScheduledTimeCreateTable(),
          [r("taskName"), n("time")],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("tasks-scheduled-time");
    }
    ((l.addTable = e), (l.getTasksScheduledTimeTable = s));
  },
  98,
);
