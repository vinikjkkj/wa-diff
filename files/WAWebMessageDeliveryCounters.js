__d(
  "WAWebMessageDeliveryCounters",
  [],
  function (t, n, r, o, a, i) {
    var e = {
        queueTimeout: function () {},
        offlineDeliveryWaitTimeout: function () {},
      },
      l = e;
    function s(e) {
      l = e;
    }
    function u(e) {
      l.queueTimeout(e);
    }
    function c() {
      l.offlineDeliveryWaitTimeout();
    }
    ((i.setMessageDeliveryCounters = s),
      (i.logMessageQueueTimeout = u),
      (i.logOfflineDeliveryWaitTimeout = c));
  },
  66,
);
