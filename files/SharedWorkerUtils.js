__d(
  "SharedWorkerUtils",
  ["WorkerConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        o("WorkerConfig").worker === "shared" &&
        "SharedWorker" in t &&
        typeof t.SharedWorker == "function"
      );
    }
    l.isSharedWorkerSupported = e;
  },
  98,
);
