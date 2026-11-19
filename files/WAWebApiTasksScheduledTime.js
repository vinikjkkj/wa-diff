__d(
  "WAWebApiTasksScheduledTime",
  ["WAWebModelStorageUtils", "WAWebSchemaTasksScheduledTime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebSchemaTasksScheduledTime")
        .getTasksScheduledTimeTable()
        .get(e)
        .then(function (e) {
          return e == null ? void 0 : e.time;
        });
    }
    function s(e, t) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["tasks-scheduled-time"], function (n) {
          var r = n[0],
            o = { taskName: e, time: t };
          return r.createOrReplace(o);
        });
    }
    function u(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["tasks-scheduled-time"], function (t) {
          var n = t[0];
          return n.remove(e);
        });
    }
    ((l.getTaskScheduledTime = e),
      (l.updateTaskScheduledTime = s),
      (l.removeTaskScheduledTime = u));
  },
  98,
);
