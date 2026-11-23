__d(
  "WAWebHatchScheduledTasksDecoder",
  ["WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(["dreaming", "flock", "goal_keeper", "heartbeat"]),
      s = [
        ["runonce@", "reminder"],
        ["interval@", "interval"],
        ["hourly@", "interval"],
        ["daily@", "daily"],
        ["weekly@", "weekly"],
        ["monthly@", "monthly"],
        ["yearly@", "yearly"],
      ];
    function u(e) {
      var t = o("WAWebHatchJsonReaders").readArray(e, "schedules");
      if (t == null) return null;
      var n = [],
        r = new Set();
      for (var a of t) {
        var i = c(a);
        i != null && !r.has(i.id) && (r.add(i.id), n.push(i));
      }
      return n;
    }
    function c(t) {
      var n,
        r = o("WAWebHatchJsonReaders").readString(t, "id");
      if (r == null || o("WAWebHatchJsonReaders").isBlankText(r) || e.has(r))
        return null;
      var a = o("WAWebHatchJsonReaders").readNonEmptyString(t, "schedule_key"),
        i = d(o("WAWebHatchJsonReaders").readString(t, "mode"), a);
      return i == null
        ? null
        : {
            category: i,
            id: r,
            isEnabled:
              (n = o("WAWebHatchJsonReaders").readBool(t, "enabled")) != null
                ? n
                : !0,
            nextRunAtSec: o("WAWebHatchJsonReaders").readPositiveDateSec(
              t,
              "next_run_at_utc",
            ),
            scheduleKey: a,
            timeZone: o("WAWebHatchJsonReaders").readNonEmptyString(
              t,
              "timezone",
            ),
            title: o("WAWebHatchJsonReaders").trimToNull(
              o("WAWebHatchJsonReaders").readStringOrEmpty(t, "title"),
            ),
          };
    }
    function d(e, t) {
      var n;
      return e === "reminder"
        ? "reminder"
        : t == null
          ? null
          : (n = s.find(function (e) {
                var n = e[0];
                return t.startsWith(n);
              })) == null
            ? void 0
            : n[1];
    }
    l.decodeHatchScheduledTasks = u;
  },
  98,
);
