__d(
  "getMAIBAGovernedActionStepTitle",
  ["MAIBAGovernedActionStrings"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n, r;
      return e === "COMMITTED"
        ? (n = t == null ? void 0 : t.applied_title) != null
          ? n
          : o("MAIBAGovernedActionStrings").appliedStepTitle()
        : e === "APPROVED" || e === "EXECUTING"
          ? (r = t == null ? void 0 : t.applying_title) != null
            ? r
            : o("MAIBAGovernedActionStrings").applyingStepTitle()
          : e === "REJECTED"
            ? o("MAIBAGovernedActionStrings").notAppliedStepTitle()
            : e === "REJECTED_STALE"
              ? o("MAIBAGovernedActionStrings").staleStepTitle()
              : e === "EXPIRED"
                ? o("MAIBAGovernedActionStrings").expiredStepTitle()
                : e === "FAILED"
                  ? o("MAIBAGovernedActionStrings").failedStepTitle()
                  : e === "OUTCOME_UNKNOWN"
                    ? o("MAIBAGovernedActionStrings").outcomeUnknownStepTitle()
                    : e === "BLOCKED"
                      ? o("MAIBAGovernedActionStrings").blockedStepTitle()
                      : o("MAIBAGovernedActionStrings").reviewStepTitle();
    }
    l.default = e;
  },
  98,
);
