__d(
  "WAWebVoipInitFailureRecoveryODS",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      e: {
        if (e === "armed") {
          r("WAWebODS").incr("web.call.voip_init.failure_recovery.armed");
          break e;
        }
        if (e === "attempt") {
          r("WAWebODS").incr("web.call.voip_init.failure_recovery.attempt");
          break e;
        }
        if (e === "attempt_error") {
          r("WAWebODS").incr(
            "web.call.voip_init.failure_recovery.attempt_error",
          );
          break e;
        }
        if (e === "exhausted") {
          r("WAWebODS").incr("web.call.voip_init.failure_recovery.exhausted");
          break e;
        }
        if (e === "not_needed") {
          r("WAWebODS").incr("web.call.voip_init.failure_recovery.not_needed");
          break e;
        }
        if (e === "restart_init_failure") {
          r("WAWebODS").incr(
            "web.call.voip_init.failure_recovery.restart_init_failure",
          );
          break e;
        }
        if (e === "restart_init_success") {
          r("WAWebODS").incr(
            "web.call.voip_init.failure_recovery.restart_init_success",
          );
          break e;
        }
        if (e === "unrecoverable") {
          r("WAWebODS").incr(
            "web.call.voip_init.failure_recovery.unrecoverable",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    l.logCallVoipInitFailureRecovery = e;
  },
  98,
);
