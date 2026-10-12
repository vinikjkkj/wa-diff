__d(
  "WAWebVoipQplHelpers",
  ["$InternalEnum", "WAWebBrowserApi", "WAWebQplFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s = r("qpl"))._(891422152, "3402"),
      c = (e = n("$InternalEnum"))({
        WAIT_OFFLINE_DELIVER_START: "wait_offline_deliver_start",
        WAIT_OFFLINE_DELIVER_END: "wait_offline_deliver_end",
        WASM_LOAD_START: "wasm_load_start",
        WASM_LOAD_END: "wasm_load_end",
        WASM_FETCH_START: "wasm_fetch_start",
        WASM_FETCH_END: "wasm_fetch_end",
        THREAD_POOL_SETUP_START: "thread_pool_setup_start",
        THREAD_POOL_SETUP_END: "thread_pool_setup_end",
        WORKER_POOL_ALLOC_START: "worker_pool_alloc_start",
        WORKER_POOL_ALLOC_END: "worker_pool_alloc_end",
        WORKER_CREATE_START: "worker_create_start",
        WORKER_CREATE_END: "worker_create_end",
        RPC_SETUP_START: "rpc_setup_start",
        RPC_SETUP_END: "rpc_setup_end",
        WEBCODECS_PROBE_START: "webcodecs_probe_start",
        WEBCODECS_PROBE_END: "webcodecs_probe_end",
        VOIP_STACK_INIT_START: "voip_stack_init_start",
        VOIP_STACK_INIT_END: "voip_stack_init_end",
      }),
      d = null,
      m = null,
      p = null,
      _ = null;
    function f(e) {
      var t = o("WAWebQplFlow").startQplFlow(u, {
        timeoutInMs: 12e4,
        annotations: e,
      });
      ((d = t),
        m != null && t.addAnnotations({ int: { pthread_hardening_level: m } }),
        p != null && t.addAnnotations(E(p)),
        _ != null && t.addAnnotations(_));
      var n = window.performance;
      return (
        n != null &&
          t.addAnnotations({ int: { session_age_ms: Math.round(n.now()) } }),
        t
      );
    }
    function g(e) {
      var t,
        n = e.bootDecision,
        r = e.isRetry;
      (t = d) == null ||
        t.addAnnotations({
          bool: {
            init_focused: document.hasFocus(),
            init_visible: !document.hidden,
            is_retry: r,
          },
          int: {
            boot_decision_code: h(n),
            cpu_cores: o("WAWebBrowserApi").getNumCpu(),
            device_memory_mb: o("WAWebBrowserApi").getMemClass(),
          },
          string: { boot_decision: n != null ? n : "unknown" },
        });
    }
    function h(e) {
      return e === "eager"
        ? 1
        : e === "deferred"
          ? 2
          : e === "skip"
            ? 3
            : e == null
              ? 0
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function y(e) {
      var t,
        n = e.endedHidden,
        r = e.startedHidden,
        o = e.waitMs;
      (t = d) == null ||
        t.addAnnotations({
          bool: {
            retry_idle_wait_ended_hidden: n,
            retry_idle_wait_started_hidden: r,
          },
          int: { retry_idle_wait_ms: o },
        });
    }
    function C(e, t) {
      var n;
      (n = d) == null || n.addPoint(e, t);
    }
    function b(e) {
      var t;
      (t = d) == null ||
        t.addAnnotations({ bool: { using_dedicated_worker: e } });
    }
    function v(e) {
      var t;
      (t = d) == null ||
        t.addAnnotations({ bool: { pre_init_worker_bootstrap: e } });
    }
    function S(e, t, n) {
      var r;
      (r = d) == null ||
        r.addAnnotations({
          int: { pthread_pool_size: e },
          bool: { is_webkit: n, is_dynamic_pool: t },
        });
    }
    function R(e) {
      var t;
      ((m = e),
        (t = d) == null ||
          t.addAnnotations({ int: { pthread_hardening_level: e } }));
    }
    function L(e) {
      var t;
      ((p = e), (t = d) == null || t.addAnnotations(E(e)));
    }
    function E(e) {
      return {
        bool: {
          content_addressed_wasm: e.isContentAddressed,
          is_webkit: e.isWebKit,
          pin_worker_glue: e.pinWorkerGlue,
        },
      };
    }
    function k(e) {
      var t,
        n = {
          int: {
            worker_glue_pinned_import_failed: e.pinnedImportFailed,
            worker_glue_pinned_import_loaded: e.pinnedImportLoaded,
            worker_glue_pinned_import_loaded_max_ms: e.pinnedImportLoadedMaxMs,
            worker_glue_pinned_import_started: e.pinnedImportStarted,
            worker_glue_skewed_workers: e.skewedWorkers,
          },
        };
      ((_ = n), (t = d) == null || t.addAnnotations(n));
    }
    function I(e) {
      var t;
      ((t = d) == null || t.endSuccess(e), (d = null));
    }
    function T(e, t) {
      var n;
      ((n = d) == null || n.endFail(e, t), (d = null));
    }
    var D = s._(891426543, "3400"),
      x = 12e4,
      $ = e({
        CALL_ENDING_HANDLER_START: "call_ending_handler_start",
        CALL_ENDING_HANDLER_END: "call_ending_handler_end",
        CLEANUP_START: "cleanup_start",
        CLEANUP_END: "cleanup_end",
      }),
      P = null;
    function N() {
      P = o("WAWebQplFlow").startQplFlow(D, { timeoutInMs: x });
    }
    function M(e) {
      var t;
      (t = P) == null || t.addPoint(e);
    }
    function w() {
      var e;
      ((e = P) == null || e.endSuccess(), (P = null));
    }
    var A = s._(891426840, "3404"),
      F = 14400 * 1e3,
      O = e({ PIP_OPENED: "pip_opened", POPOUT_OPENED: "popout_opened" }),
      B = null;
    function W(e) {
      B = o("WAWebQplFlow").startQplFlow(A, { timeoutInMs: F, annotations: e });
    }
    function q(e) {
      var t;
      (t = B) == null || t.addPoint(e);
    }
    function U() {
      var e;
      ((e = B) == null || e.endSuccess(), (B = null));
    }
    var V = s._(891424539, "3405"),
      H = 12e4,
      G = e({
        POOL_GROWTH_START: "pool_growth_start",
        POOL_GROWTH_END: "pool_growth_end",
        EMERGENCY_ALLOC: "emergency_alloc",
        POOL_SHRINK: "pool_shrink",
      });
    function z(e) {
      return o("WAWebQplFlow").startQplFlow(V, {
        timeoutInMs: H,
        annotations: e,
      });
    }
    function j(e, t) {
      e.addPoint(t);
    }
    function K(e) {
      e.endSuccess();
    }
    function Q(e, t) {
      e.endFail(t);
    }
    ((l.VoipInitQplPoint = c),
      (l.startVoipInitQpl = f),
      (l.voipInitQplAnnotateStart = g),
      (l.voipInitQplAnnotateRetryIdleWait = y),
      (l.voipInitQplAddPoint = C),
      (l.voipInitQplAnnotateExecutionMode = b),
      (l.voipInitQplAnnotateWorkerBootstrapMode = v),
      (l.voipInitQplAnnotateThreadPool = S),
      (l.voipInitQplAnnotatePthreadHardening = R),
      (l.voipInitQplAnnotateWasmLoad = L),
      (l.voipInitQplAnnotateWorkerGlueSkew = k),
      (l.endVoipInitQplSuccess = I),
      (l.endVoipInitQplFail = T),
      (l.VoipEndCallQplPoint = $),
      (l.startVoipEndCallQpl = N),
      (l.voipEndCallQplAddPoint = M),
      (l.endVoipEndCallQplSuccess = w),
      (l.VoipUiLifecycleQplPoint = O),
      (l.startVoipUiLifecycleQpl = W),
      (l.voipUiLifecycleQplAddPoint = q),
      (l.endVoipUiLifecycleQplSuccess = U),
      (l.VoipWorkerSetupQplPoint = G),
      (l.startVoipWorkerSetupQpl = z),
      (l.voipWorkerSetupQplAddPoint = j),
      (l.endVoipWorkerSetupQplSuccess = K),
      (l.endVoipWorkerSetupQplFail = Q));
  },
  98,
);
