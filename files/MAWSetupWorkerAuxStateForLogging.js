__d(
  "MAWSetupWorkerAuxStateForLogging",
  ["nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [],
      s = 3,
      u = {
        getWorkerAge: function () {
          if (u.workerStartTime != null)
            return Math.floor(
              (Date.now() - r("nullthrows")(u.workerStartTime)) / 1e3,
            );
        },
        restartMessageTypes: [],
        restartReasons: [],
        workerStartTime: null,
        workerTerminatedPermanently: !1,
      };
    function c() {
      u.workerStartTime = Date.now();
    }
    function d(t) {
      (e.push(t), e.length > s && e.shift());
    }
    function m() {
      return e.join(",");
    }
    ((l.WorkerLifeCycleState = u),
      (l.resetWorkerCreationTime = c),
      (l.addWorkerHeartbeatToHistory = d),
      (l.getHeartbeatHistoryAsString = m));
  },
  98,
);
