__d(
  "WAWebMessageProcessorCacheWorker",
  ["WAWebNoop"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        addMessages: function (n, r) {
          return e.sendAndReceive("mainthread_messagecache", "addMessages", {
            messages: n,
            flushImmediately: r,
          });
        },
        addAdditionalInfo: function (n, r) {
          e.fireAndForget("mainthread_messagecache", "addAdditionalInfo", {
            info: n,
            dangerouslyFlushImmediately: r,
          });
        },
        createSnapshot: function () {
          e.fireAndForget("mainthread_messagecache", "createSnapshot", void 0);
        },
        holdCheckpointUntilMessageStaged: function () {
          return r("WAWebNoop");
        },
        isFailClosed: function () {
          return !1;
        },
        writeSignalState: function (n) {
          return e.sendAndReceive(
            "mainthread_messagecache",
            "writeSignalState",
            { snapshotInMemoryMode: n },
          );
        },
        checkpointQueueWait: function () {
          return e.sendAndReceive(
            "mainthread_messagecache",
            "checkpointQueueWait",
            void 0,
          );
        },
        checkpointQueueSize: function () {
          return e.sendAndReceive(
            "mainthread_messagecache",
            "checkpointQueueSize",
            void 0,
          );
        },
        size: function () {
          return e.sendAndReceive("mainthread_messagecache", "size", void 0);
        },
      };
    }
    l.createMessageCacheWorkerBridge = e;
  },
  98,
);
