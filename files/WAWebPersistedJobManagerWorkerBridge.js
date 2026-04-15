__d(
  "WAWebPersistedJobManagerWorkerBridge",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return {
        fireAndForget: function (n) {
          e.fireAndForget("mainthread_jobmanager", "fireAndForget", n);
        },
        waitUntilPersisted: function (n) {
          return e.sendAndReceive(
            "mainthread_jobmanager",
            "waitUntilPersisted",
            n,
          );
        },
        waitUntilCompleted: function (n) {
          return e.sendAndReceive(
            "mainthread_jobmanager",
            "waitUntilCompleted",
            n,
          );
        },
        loadAndRunJobFromId: function (n) {
          return e.sendAndReceive(
            "mainthread_jobmanager",
            "loadAndRunJobFromId",
            { jobId: n },
          );
        },
        accessors: {
          deletePersistedJob: function (n) {
            return e.sendAndReceive(
              "mainthread_jobmanager",
              "deletePersistedJob",
              { jobId: n },
            );
          },
          maybeCreateJob: function (n) {
            return e.sendAndReceive(
              "mainthread_jobmanager",
              "maybeCreateJob",
              n,
            );
          },
        },
      };
    }
    i.createPersistedJobManagerWorkerBridge = e;
  },
  66,
);
