__d(
  "ZenonProtocolConfiguration",
  ["ZenonMWEventAggregator", "ZenonTransactionManager"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = new (r("ZenonTransactionManager"))(t, e),
        o = new (r("ZenonMWEventAggregator"))(e, n);
      return { eventAggregator: o, messageSender: t, transactionManager: n };
    }
    l.getConfiguration = e;
  },
  98,
);
