__d(
  "MAWMICSchema",
  ["qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("qpl")._(1056839232, "112"),
      s = {
        process_offline_queue_end: "process_offline_queue_end",
        maw_init_end: "maw_init_end",
        ls_init_end: "ls_init_end",
        thread_mapping_end: "thread_mapping_end",
        thread_mapping_start: "thread_mapping_start",
        ls_sync_end: "ls_sync_end",
        backend_setup_ready: "backend_setup_ready",
        occamadillo_thread_mapping_txn_reached:
          "occamadillo_thread_mapping_txn_reached",
        occamadillo_thread_mapping_txn_passed_bulk_get:
          "occamadillo_thread_mapping_txn_passed_bulk_get",
        occamadillo_thread_mapping_txn_loaded_participants_and_msgs:
          "occamadillo_thread_mapping_txn_loaded_participants_and_msgs",
      },
      u = {
        occamadilloCallingSources: "occamadilloCallingSources",
        occamadilloBulkBatchSizes: "occamadilloBulkBatchSizes",
        occamadilloBatchesSentToWorker: "occamadilloBatchesSentToWorker",
        occamadilloDuplicateThreads: "occamadilloDuplicateThreads",
        occamadilloPendingThreadsAfterInitSync:
          "occamadilloPendingThreadsAfterInitSync",
      };
    ((l.EVENT = e), (l.POINTS = s), (l.ANNOTATIONS = u));
  },
  98,
);
