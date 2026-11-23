__d(
  "getMAIBAGovernedActionStepIconKind",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e === "APPROVED" || e === "EXECUTING"
        ? "pending"
        : e === "REJECTED"
          ? "neutral"
          : e === "REJECTED_STALE" ||
              e === "EXPIRED" ||
              e === "OUTCOME_UNKNOWN" ||
              e === "BLOCKED"
            ? "warning"
            : e === "FAILED"
              ? "error"
              : null;
    }
    i.default = e;
  },
  66,
);
