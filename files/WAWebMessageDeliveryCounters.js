__d(
  "WAWebMessageDeliveryCounters",
  [],
  function (t, n, r, o, a, i) {
    var e = {
        queueEnqueued: function () {},
        queueTimeout: function () {},
        offlineDeliveryWaitTimeout: function () {},
      },
      l = e;
    function s(e) {
      l = e;
    }
    function u(e, t) {
      l.queueEnqueued(e, t);
    }
    function c(e, t) {
      l.queueTimeout(e, t);
    }
    function d(e) {
      l.offlineDeliveryWaitTimeout(e);
    }
    ((i.setMessageDeliveryCounters = s),
      (i.logMessageQueueEnqueued = u),
      (i.logMessageQueueTimeout = c),
      (i.logOfflineDeliveryWaitTimeout = d));
  },
  66,
);
