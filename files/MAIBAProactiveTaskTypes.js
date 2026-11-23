__d(
  "MAIBAProactiveTaskTypes",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t =
        e.lifecycleState === "ACTIVE"
          ? "ACTIVE"
          : e.lifecycleState === "PAUSED"
            ? "PAUSED"
            : e.lifecycleState === "OPTED_OUT"
              ? "OPTED_OUT"
              : null;
      if (t == null) return null;
      var n =
        e.templateKey === "weekly_performance_summary"
          ? "WEEKLY_PERFORMANCE_SUMMARY"
          : e.templateKey === "camo"
            ? "CAMO"
            : e.templateKey === "delivery_issue_alerts"
              ? "DELIVERY_ISSUE_ALERTS"
              : null;
      return n == null
        ? null
        : {
            allocationKey: e.allocationKey,
            kind: n,
            lifecycleState: t,
            pastRuns: e.pastRuns,
            templateKey: e.templateKey,
            templateVersion: e.templateVersion,
          };
    }
    function l(e, t) {
      return t === "ALL"
        ? !0
        : t === "ACTIVE"
          ? e.lifecycleState === "ACTIVE"
          : t === "PAUSED"
            ? e.lifecycleState !== "ACTIVE"
            : t === "SCHEDULED"
              ? e.kind === "WEEKLY_PERFORMANCE_SUMMARY"
              : t === "TRIGGERED"
                ? e.kind !== "WEEKLY_PERFORMANCE_SUMMARY"
                : t === "COMPLETED" || t === "ENDED"
                  ? !1
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          t,
                      );
                    })();
    }
    ((i.toMAIBAProactiveTaskView = e),
      (i.matchesMAIBAProactiveTaskListFilter = l));
  },
  66,
);
