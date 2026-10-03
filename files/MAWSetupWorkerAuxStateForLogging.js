__d(
  "MAWSetupWorkerAuxStateForLogging",
  ["nullthrows", "performanceAbsoluteNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [],
      u = 3,
      c = {
        getWorkerAge: function () {
          if (c.workerStartTime != null)
            return Math.floor(
              ((e || (e = r("performanceAbsoluteNow")))() -
                r("nullthrows")(c.workerStartTime)) /
                1e3,
            );
        },
        restartMessageTypes: [],
        restartReasons: [],
        workerStartTime: null,
        workerTerminatedPermanently: !1,
      };
    function d() {
      c.workerStartTime = (e || (e = r("performanceAbsoluteNow")))();
    }
    function m(e) {
      (s.push(e), s.length > u && s.shift());
    }
    function p() {
      return s.join(",");
    }
    ((l.WorkerLifeCycleState = c),
      (l.resetWorkerCreationTime = d),
      (l.addWorkerHeartbeatToHistory = m),
      (l.getHeartbeatHistoryAsString = p));
  },
  98,
);
