__d(
  "MAWWorkerOnClose",
  [
    "MAWSetupWorkerAuxStateForLogging",
    "MAWWaitForBackendSetup",
    "MAWWorkerHealthStatus",
    "QPLUserFlow",
    "pageID",
    "promiseDone",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("qpl")._(1056841865, "2862");
    function s(t, n, a) {
      r("QPLUserFlow").start(e, {
        annotations: {
          string: {
            currentWorkerId: o("MAWWaitForBackendSetup").getCurrentWorkerID(),
            pageID: r("pageID"),
            terminationMsgType: n,
            terminationReason: t,
            workerID: a,
          },
          string_array: {
            pastWorkerTerminationMsgTypes: o("MAWSetupWorkerAuxStateForLogging")
              .WorkerLifeCycleState.restartMessageTypes,
            pastWorkerTerminationReasons: o("MAWSetupWorkerAuxStateForLogging")
              .WorkerLifeCycleState.restartReasons,
          },
        },
      });
    }
    function u(t) {
      r("promiseDone")(
        o("MAWWorkerHealthStatus").getWorkerHealthStatus(),
        function (n) {
          return r("QPLUserFlow").endSuccess(e, {
            annotations: {
              bool: babelHelpers.extends({}, n.data),
              string: { healthStatusAfter: n.tag, outcome: t },
            },
          });
        },
      );
    }
    function c(t, n) {
      r("promiseDone")(
        o("MAWWorkerHealthStatus").getWorkerHealthStatus(),
        function (o) {
          return r("QPLUserFlow").endFailure(e, t, {
            annotations: {
              bool: babelHelpers.extends({}, o.data),
              string: { healthStatusAfter: o.tag },
            },
            error: n,
          });
        },
      );
    }
    ((l.startQPL = s), (l.success = u), (l.fail = c));
  },
  98,
);
