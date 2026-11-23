__d(
  "MAWTaskScheduledTimeResolver",
  [
    "FBLogger",
    "ODS",
    "WmiMetadataRecurringTasksReader",
    "WmiMetadataRecurringTasksWriter",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "maw.recurring_tasks",
      u = function () {
        return r("FBLogger")("wmi").tags(["maw_recurring_tasks"]);
      };
    function c(t) {
      (e || (e = o("ODS"))).bumpEntityKey(9819, s, t);
    }
    async function d(e) {
      var t = await o(
        "WmiMetadataRecurringTasksReader",
      ).readRecurringTaskFromMetadataDb(e);
      return t == null ? void 0 : t.scheduledTime;
    }
    async function m(e, t) {
      try {
        await o(
          "WmiMetadataRecurringTasksWriter",
        ).writeRecurringTaskToMetadataDb({ scheduledTime: t, taskName: e });
      } catch (t) {
        throw (
          c("table_write_error"),
          u()
            .catching(r("getErrorSafe")(t))
            .mustfix("Failed to write recurring task %s to metadata DB", e),
          t
        );
      }
    }
    var p = { get: d, set: m };
    ((l.bumpRecurringTaskCounter = c), (l.scheduledTimeResolver = p));
  },
  98,
);
