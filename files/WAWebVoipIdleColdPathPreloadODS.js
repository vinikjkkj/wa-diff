__d(
  "WAWebVoipIdleColdPathPreloadODS",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      e: {
        if (e === "started") {
          r("WAWebODS").incr("web.call.voip_init.idle_preload.started");
          break e;
        }
        if (e === "complete") {
          r("WAWebODS").incr("web.call.voip_init.idle_preload.complete");
          break e;
        }
        if (e === "chunk_failed") {
          r("WAWebODS").incr("web.call.voip_init.idle_preload.chunk_failed");
          break e;
        }
        if (e === "failed") {
          r("WAWebODS").incr("web.call.voip_init.idle_preload.failed");
          break e;
        }
        if (e === "timeout") {
          r("WAWebODS").incr("web.call.voip_init.idle_preload.timeout");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function s(e, t) {
      e: {
        if (t === "failed") {
          c(e);
          break e;
        }
        if (t === "timeout") {
          d(e);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function u(e) {
      e: {
        if (e === "constrained_network") {
          r("WAWebODS").incr(
            "web.call.voip_init.idle_preload.skip.constrained_network",
          );
          break e;
        }
        if (e === "disabled") {
          r("WAWebODS").incr("web.call.voip_init.idle_preload.skip.disabled");
          break e;
        }
        if (e === "gate_failed") {
          r("WAWebODS").incr(
            "web.call.voip_init.idle_preload.skip.gate_failed",
          );
          break e;
        }
        if (e === "hard_refresh") {
          r("WAWebODS").incr(
            "web.call.voip_init.idle_preload.skip.hard_refresh",
          );
          break e;
        }
        if (e === "init_errored") {
          r("WAWebODS").incr(
            "web.call.voip_init.idle_preload.skip.init_errored",
          );
          break e;
        }
        if (e === "init_in_flight") {
          r("WAWebODS").incr(
            "web.call.voip_init.idle_preload.skip.init_in_flight",
          );
          break e;
        }
        if (e === "inited") {
          r("WAWebODS").incr("web.call.voip_init.idle_preload.skip.inited");
          break e;
        }
        if (e === "late_timer") {
          r("WAWebODS").incr("web.call.voip_init.idle_preload.skip.late_timer");
          break e;
        }
        if (e === "low_memory_visible") {
          r("WAWebODS").incr(
            "web.call.voip_init.idle_preload.skip.low_memory_visible",
          );
          break e;
        }
        if (e === "offline") {
          r("WAWebODS").incr("web.call.voip_init.idle_preload.skip.offline");
          break e;
        }
        if (e === "unpinned") {
          r("WAWebODS").incr("web.call.voip_init.idle_preload.skip.unpinned");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function c(e) {
      e: {
        if (e === "backend") {
          r("WAWebODS").incr(
            "web.call.voip_init.idle_preload.module_failed.backend",
          );
          break e;
        }
        if (e === "stack_interface") {
          r("WAWebODS").incr(
            "web.call.voip_init.idle_preload.module_failed.stack_interface",
          );
          break e;
        }
        if (e === "wasm_loader") {
          r("WAWebODS").incr(
            "web.call.voip_init.idle_preload.module_failed.wasm_loader",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function d(e) {
      e: {
        if (e === "backend") {
          r("WAWebODS").incr(
            "web.call.voip_init.idle_preload.module_timeout.backend",
          );
          break e;
        }
        if (e === "stack_interface") {
          r("WAWebODS").incr(
            "web.call.voip_init.idle_preload.module_timeout.stack_interface",
          );
          break e;
        }
        if (e === "wasm_loader") {
          r("WAWebODS").incr(
            "web.call.voip_init.idle_preload.module_timeout.wasm_loader",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    ((l.logCallVoipIdleColdPathPreload = e),
      (l.logCallVoipIdleColdPathPreloadModuleFailure = s),
      (l.logCallVoipIdleColdPathPreloadSkip = u));
  },
  98,
);
