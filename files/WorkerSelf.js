__d(
  "WorkerSelf",
  [
    "WorkerBanzaiLazyQueueChannelWorker",
    "WorkerFuncChannel",
    "WorkerQPLChannel",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      (o("WorkerFuncChannel").activateChannels(e, "worker", "client"),
        o("WorkerBanzaiLazyQueueChannelWorker").init(e),
        o("WorkerQPLChannel").setMessagePort(e));
    }
    l.init = e;
  },
  98,
);
