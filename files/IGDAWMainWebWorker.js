__d(
  "IGDAWMainWebWorker",
  [
    "CurrentWorkerMessagePort",
    "FalcoLoggerTransports",
    "IGDAWMainWebWorkerConfig",
    "IGDBackend",
    "IGDLowLevelApiImpl",
    "MAWCommonMainWebWorker",
    "WorkerBridgeAdaptor",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      self.Env = self.Env || {};
      var e = new (r("WorkerBridgeAdaptor"))(
        o("CurrentWorkerMessagePort").getMessagePort(),
        "IGDAWMainWebWorker",
      );
      (o("MAWCommonMainWebWorker").initWorker({
        config: o("IGDAWMainWebWorkerConfig").waConfig,
        currentWorker: e,
        initBackend: o("IGDBackend").startIGDBackend,
        makeLowLevelApi: o("IGDLowLevelApiImpl").makeLowLevelApi,
      }),
        o("FalcoLoggerTransports").attach());
    }
    l.default = e;
  },
  98,
);
