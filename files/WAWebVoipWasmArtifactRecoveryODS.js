__d(
  "WAWebVoipWasmArtifactRecoveryODS",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      e: {
        if (e === "armed") {
          r("WAWebODS").incr("web.call.voip_init.wasm_artifact.recovery.armed");
          break e;
        }
        if (e === "attempt") {
          r("WAWebODS").incr(
            "web.call.voip_init.wasm_artifact.recovery.attempt",
          );
          break e;
        }
        if (e === "attempt_error") {
          r("WAWebODS").incr(
            "web.call.voip_init.wasm_artifact.recovery.attempt_error",
          );
          break e;
        }
        if (e === "carrier_failure") {
          r("WAWebODS").incr(
            "web.call.voip_init.wasm_artifact.recovery.carrier_failure",
          );
          break e;
        }
        if (e === "carrier_timeout") {
          r("WAWebODS").incr(
            "web.call.voip_init.wasm_artifact.recovery.carrier_timeout",
          );
          break e;
        }
        if (e === "exhausted") {
          r("WAWebODS").incr(
            "web.call.voip_init.wasm_artifact.recovery.exhausted",
          );
          break e;
        }
        if (e === "not_needed") {
          r("WAWebODS").incr(
            "web.call.voip_init.wasm_artifact.recovery.not_needed",
          );
          break e;
        }
        if (e === "resolved") {
          r("WAWebODS").incr(
            "web.call.voip_init.wasm_artifact.recovery.resolved",
          );
          break e;
        }
        if (e === "restart_init_failure") {
          r("WAWebODS").incr(
            "web.call.voip_init.wasm_artifact.recovery.restart_init_failure",
          );
          break e;
        }
        if (e === "restart_init_success") {
          r("WAWebODS").incr(
            "web.call.voip_init.wasm_artifact.recovery.restart_init_success",
          );
          break e;
        }
        if (e === "unresolved") {
          r("WAWebODS").incr(
            "web.call.voip_init.wasm_artifact.recovery.unresolved",
          );
          break e;
        }
        if (e === "unsupported") {
          r("WAWebODS").incr(
            "web.call.voip_init.wasm_artifact.recovery.unsupported",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    l.logCallVoipInitWasmArtifactRecovery = e;
  },
  98,
);
