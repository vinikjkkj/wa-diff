__d(
  "WAWebOfflineResumeCounters",
  [],
  function (t, n, r, o, a, i) {
    var e = {
        awaitUnflushedMsgWrite: function () {},
        msgRoutedToOnlineQueue: function () {},
      },
      l = e;
    function s(e) {
      l = e;
    }
    function u(e) {
      e && l.msgRoutedToOnlineQueue();
    }
    function c(e) {
      e && l.awaitUnflushedMsgWrite();
    }
    ((i.setOfflineResumeCounters = s),
      (i.maybeLogOfflineMsgRoutedToOnlineQueue = u),
      (i.maybeLogAwaitUnflushedMsgWrite = c));
  },
  66,
);
