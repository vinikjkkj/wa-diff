__d(
  "WAWebNoiseInfoWorker",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return {
        getNoiseInfo: function () {
          return e.sendAndReceive(
            "mainthread_noiseInfo",
            "getNoiseInfo",
            void 0,
          );
        },
        setCertificateChain: function (n) {
          return e.sendAndReceive(
            "mainthread_noiseInfo",
            "setCertificateChain",
            { cert: n },
          );
        },
      };
    }
    i.createNoiseInfoWorkerBridge = e;
  },
  66,
);
