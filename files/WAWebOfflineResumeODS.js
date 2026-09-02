__d(
  "WAWebOfflineResumeODS",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    var e = {
      awaitUnflushedMsgWrite: function () {
        r("WAWebODS").incr("web.offline_resume.await_unflushed_msg_write");
      },
      msgRoutedToOnlineQueue: function () {
        r("WAWebODS").incr("web.offline_resume.msg_routed_to_online_queue");
      },
    };
    l.offlineResumeODSCounters = e;
  },
  98,
);
