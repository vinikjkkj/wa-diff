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
    ((l.isRestOperationGateEnabled = e), (l.runRestOperation = s));
  },
  98,
);
