__d(
  "WAWebOfflineResumeCounters",
  [],
  function (t, n, r, o, a, i) {
    var e = {
        appReload: function () {},
        awaitUnflushedMsgWrite: function () {},
        msgRoutedToOnlineQueue: function () {},
        oneQueueFlushFailed: function () {},
        oneQueueTimeout: function () {},
      },
      l = e;
    function s(e) {
      l = e;
    }
    function u(e, t) {
      e && l.msgRoutedToOnlineQueue(t);
    }
    function c(e, t) {
      e && l.awaitUnflushedMsgWrite(t);
    }
    function d() {
      l.oneQueueTimeout();
    }
    function m() {
      l.oneQueueFlushFailed();
    }
    function p(e) {
      l.appReload(e);
    }
    ((i.setOfflineResumeCounters = s),
      (i.maybeLogOfflineMsgRoutedToOnlineQueue = u),
      (i.maybeLogAwaitUnflushedMsgWrite = c),
      (i.logOneQueueTimeout = d),
      (i.logOneQueueFlushFailed = m),
      (i.logAppReload = p));
  },
  66,
);
