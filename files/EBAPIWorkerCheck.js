__d(
  "EBAPIWorkerCheck",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      try {
        return (
          WorkerGlobalScope !== void 0 && self instanceof WorkerGlobalScope
        );
      } catch (e) {
        return !1;
      }
    }
    i.runningInWorker = e;
  },
  66,
);
