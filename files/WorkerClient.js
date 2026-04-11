__d(
  "WorkerClient",
  [
    "WorkerBanzaiLazyQueueChannelClient",
    "WorkerFuncChannel",
    "WorkerQPLChannel",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      (o("WorkerFuncChannel").activateChannels(e, "client", "worker"),
        o("WorkerBanzaiLazyQueueChannelClient").init(e),
        o("WorkerQPLChannel").setMessagePort(e),
        a(["QuickPerformanceLogger"], function (e) {
          return o("WorkerQPLChannel").initQPL(e);
        }));
    }
    l.init = e;
  },
  98,
);
