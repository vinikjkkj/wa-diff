__d(
  "WAWebOfflineResumeODS",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    var e = {
      awaitUnflushedMsgWrite: function (t) {
        e: {
          if (t === "legacy") {
            r("WAWebODS").incr("web.offline_resume.await_unflushed_msg_write");
            break e;
          }
          if (t === "one_queue") {
            r("WAWebODS").incr(
              "web.offline_resume.one_queue.await_unflushed_msg_write",
            );
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              t,
          );
        }
      },
      msgRoutedToOnlineQueue: function (t) {
        e: {
          if (t === "legacy") {
            r("WAWebODS").incr("web.offline_resume.msg_routed_to_online_queue");
            break e;
          }
          if (t === "one_queue") {
            r("WAWebODS").incr(
              "web.offline_resume.one_queue.msg_routed_to_online_queue",
            );
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              t,
          );
        }
      },
      oneQueueFlushFailed: function () {
        r("WAWebODS").incr("web.message_queue.one_queue_flush_failed");
      },
      oneQueueTimeout: function () {
        r("WAWebODS").incr("web.message_queue.one_queue_timeout");
      },
    };
    l.offlineResumeODSCounters = e;
  },
  98,
);
