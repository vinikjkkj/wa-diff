__d(
  "SharedWorkerBugReportUtils",
  ["ifRequired"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e;
      return (e = r("ifRequired")("SharedWorkerStorageManager", function (e) {
        return JSON.stringify(e.getDebugState());
      })) != null
        ? e
        : null;
    }
    l.getSharedWorkerState = e;
  },
  98,
);
