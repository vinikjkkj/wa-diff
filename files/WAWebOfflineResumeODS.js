__d(
  "WAWebOfflineResumeODS",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    var e = {
      appReload: function (t) {
        e: {
          if (t === "open_tab_limit") {
            r("WAWebODS").incr("web.app.reload.open_tab_limit");
            break e;
          }
          if (t === "open_tab_limit_blocking") {
            r("WAWebODS").incr("web.app.reload.open_tab_limit_blocking");
            break e;
          }
          if (t === "open_tab_limit_nonblocking") {
            r("WAWebODS").incr("web.app.reload.open_tab_limit_nonblocking");
            break e;
          }
          if (t === "stanzas_after_complete_blocking") {
            r("WAWebODS").incr(
              "web.app.reload.stanzas_after_complete_blocking",
            );
            break e;
          }
          if (t === "stanzas_after_complete_nonblocking") {
            r("WAWebODS").incr(
              "web.app.reload.stanzas_after_complete_nonblocking",
            );
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              t,
          );
        }
      },
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
      oneQueueOfflineEndNotResolved: function (t) {
        e: {
          if (t === "replaced") {
            r("WAWebODS").incr(
              "web.offline_resume.one_queue.offline_end_replaced",
            );
            break e;
          }
          if (t === "dropped") {
            r("WAWebODS").incr(
              "web.offline_resume.one_queue.offline_end_dropped",
            );
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              t,
          );
        }
      },
      oneQueueTimeout: function () {
        r("WAWebODS").incr("web.message_queue.one_queue_timeout");
      },
    };
    l.offlineResumeODSCounters = e;
  },
  98,
);
