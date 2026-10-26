__d(
  "WAWebRestOperations",
  ["WAWebJobsMigrationGating", "WAWebScheduledOperations"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebJobsMigrationGating").isRestOperationsEnabled();
    }
    function s(t, n, r) {
      return e() ? o("WAWebScheduledOperations").scheduleOperation(t, n) : r();
    }
    function u(e, t, n) {
      return o("WAWebJobsMigrationGating").isJobsManagerDecommissioned()
        ? o("WAWebScheduledOperations").scheduleOperation(e, t)
        : n();
    }
    ((l.isRestOperationGateEnabled = e),
      (l.runRestOperation = s),
      (l.runJobsManagerFreeOperation = u));
  },
  98,
);
