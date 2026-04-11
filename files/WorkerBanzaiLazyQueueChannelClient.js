__d(
  "WorkerBanzaiLazyQueueChannelClient",
  ["BanzaiLazyQueue", "WorkerFuncChannel"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      o("WorkerFuncChannel").exportChannel(
        r("BanzaiLazyQueue"),
        e,
        "banzai_lazyqueue_channel",
      );
    }
    l.init = e;
  },
  98,
);
