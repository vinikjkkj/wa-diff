__d(
  "MAIBATaskListSorting",
  ["MAIBATaskFormatting"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return t === "ALL"
        ? !0
        : t === "ENDED"
          ? o("MAIBATaskFormatting").matchesMAIBATaskStatusFilter(
              e.status,
              "COMPLETED",
            )
          : t === "SCHEDULED"
            ? e.taskType !== "CONDITION_BASED"
            : t === "TRIGGERED"
              ? e.taskType === "CONDITION_BASED"
              : t === "ACTIVE" || t === "COMPLETED" || t === "PAUSED"
                ? o("MAIBATaskFormatting").matchesMAIBATaskStatusFilter(
                    e.status,
                    t,
                  )
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        t,
                    );
                  })();
    }
    function s(e) {
      return e === "ACTIVE"
        ? 0
        : e === "PAUSED" || e === "FORCED_PAUSE"
          ? 1
          : e === "COMPLETED"
            ? 2
            : 3;
    }
    function u(e, t, n) {
      return [].concat(e).sort(function (e, r) {
        if (n && t) {
          var o = s(e.status) - s(r.status);
          if (o !== 0) return o;
        }
        if (e.actionNeeded !== r.actionNeeded) return e.actionNeeded ? -1 : 1;
        if (n && !t) {
          var a = s(e.status) - s(r.status);
          if (a !== 0) return a;
        }
        return e.lastActivityTime === r.lastActivityTime
          ? 0
          : r.lastActivityTime - e.lastActivityTime;
      });
    }
    ((l.matchesMAIBATaskListFilter = e), (l.sortMAIBATasks = u));
  },
  98,
);
