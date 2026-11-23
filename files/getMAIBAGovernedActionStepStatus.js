__d(
  "getMAIBAGovernedActionStepStatus",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      return e === "PREPARED" && t === "EXPIRED"
        ? "EXPIRED"
        : e === "FAILED" && n === !0
          ? "OUTCOME_UNKNOWN"
          : e;
    }
    i.default = e;
  },
  66,
);
