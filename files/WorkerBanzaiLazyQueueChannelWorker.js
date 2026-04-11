__d(
  "WorkerBanzaiLazyQueueChannelWorker",
  ["BanzaiLazyQueue", "WorkerFuncChannel"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("WorkerFuncChannel").importChannel(
        { queuePost: null },
        e,
        "banzai_lazyqueue_channel",
      );
      (r("BanzaiLazyQueue").onQueue.add(function () {
        s(t);
      }),
        s(t));
    }
    function s(e) {
      r("BanzaiLazyQueue")
        .flushQueue()
        .forEach(function (t) {
          e.queuePost.apply(e, t);
        });
    }
    l.init = e;
  },
  98,
);
