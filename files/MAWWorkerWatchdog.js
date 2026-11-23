__d(
  "MAWWorkerWatchdog",
  [
    "MAWBridgeLoggingUtils",
    "MAWBridgeSendAndReceive",
    "MAWSetupWorkerAuxStateForLogging",
    "MAWWaitForBackendSetup",
    "MAWWorkerHealthStatus",
    "MAWWorkerWatchdogRecovery",
    "Promise",
    "QPLUserFlow",
    "err",
    "justknobx",
    "promiseDone",
    "qpl",
    "setInterval",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("justknobx")._("4240"),
      u = s / 2,
      c = r("qpl")._(1056847415, "2909"),
      d = !1,
      m = !1,
      p = ["shared_not_exists", "shared_exists_not_connected"];
    function _() {
      var t;
      return (
        r("QPLUserFlow").start(c, {
          annotations: {
            bool: {
              workerTerminatedPermanently: (t = o(
                "MAWSetupWorkerAuxStateForLogging",
              )).WorkerLifeCycleState.workerTerminatedPermanently,
            },
            int: { workerAge: t.WorkerLifeCycleState.getWorkerAge() },
            string: {
              currentWorkerId: o("MAWWaitForBackendSetup").getCurrentWorkerID(),
            },
            string_array: {
              pastWorkerTerminationMsgTypes:
                t.WorkerLifeCycleState.restartMessageTypes,
              pastWorkerTerminationReasons:
                t.WorkerLifeCycleState.restartReasons,
            },
          },
        }),
        (e || (e = n("Promise")))
          .race([
            o("MAWBridgeSendAndReceive").sendAndReceive(
              "backend",
              o("MAWBridgeLoggingUtils").HEARTBEAT_ROUTE,
            ),
            new e(function (e, t) {
              r("setTimeout")(function () {
                t(r("err")("Armadillo web worker heartbeat timed out."));
              }, u);
            }),
          ])
          .then(
            function () {
              (r("QPLUserFlow").endSuccess(c),
                o(
                  "MAWSetupWorkerAuxStateForLogging",
                ).addWorkerHeartbeatToHistory("OK"));
            },
            function (e) {
              (f(),
                o(
                  "MAWSetupWorkerAuxStateForLogging",
                ).addWorkerHeartbeatToHistory("ERROR"),
                r("promiseDone")(
                  o("MAWWorkerHealthStatus").getWorkerHealthStatus(),
                  function (t) {
                    return r("QPLUserFlow").endFailure(c, "heartbeat_timeout", {
                      annotations: {
                        bool: babelHelpers.extends({}, t.data),
                        string: { workerHealthStatus: t.tag },
                      },
                      error: e,
                    });
                  },
                ));
            },
          )
      );
    }
    function f() {
      (r("QPLUserFlow").addPoint(c, "starting-lock-based-recovery"),
        r("promiseDone")(
          o("MAWWorkerHealthStatus")
            .getWorkerHealthStatus()
            .then(function (e) {
              var t = o(
                  "MAWWorkerWatchdogRecovery",
                ).getWorkerRecoveryForWatchdog(),
                n = o("MAWWaitForBackendSetup").getCurrentWorkerID();
              if (p.includes(e.tag) && t != null)
                return t("locks_based_recovery", n, "locks_based_recovery");
            }),
        ));
    }
    function g() {
      m ||
        ((m = !0),
        r("setInterval")(function () {
          d && r("promiseDone")(_());
        }, s),
        o("MAWWaitForBackendSetup").runAfterBackendSetup(function () {
          d = !0;
        }, o("MAWBridgeLoggingUtils").HEARTBEAT_ROUTE));
    }
    l.startWatchdog = g;
  },
  98,
);
