__d(
  "WAJobOrchestratorTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum")({
        SKIP: "SKIP_PRIORITIZATION",
        UI_ACTION: "UI_ACTION",
        LOW: "LOW",
        HIGH: "HIGH",
        OFFLINE: "OFFLINE",
        HISTORY_SYNC: "HISTORY_SYNC",
        BEST_EFFORT: "BEST_EFFORT",
      }),
      l = 1,
      s = e.LOW,
      u = 10 * 1e3;
    ((i.JOB_PRIORITY = e),
      (i.DEFAULT_CONCURRENCY = l),
      (i.DEFAULT_JOB_PRIORITY = s),
      (i.DEFAULT_JOB_TIMEOUT_MS = u));
  },
  66,
);
