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
      p = null;
    function _(e) {
      var t = o("WAWebQplFlow").startQplFlow(u, {
        timeoutInMs: 12e4,
        annotations: e,
      });
      ((d = t),
        m != null && t.addAnnotations({ int: { pthread_hardening_level: m } }),
        p != null && t.addAnnotations(S(p)));
      var n = window.performance;
      return (
        n != null &&
          t.addAnnotations({ int: { session_age_ms: Math.round(n.now()) } }),
        t
      );
    }
    function f(e) {
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
            cpu_cores: o("WAWebBrowserApi").getNumCpu(),
            device_memory_mb: o("WAWebBrowserApi").getMemClass(),
          },
          string: { boot_decision: n != null ? n : "unknown" },
        });
    }
    function g(e, t) {
      var n;
      (n = d) == null || n.addPoint(e, t);
    }
    function h(e) {
      var t;
      (t = d) == null ||
        t.addAnnotations({ bool: { using_dedicated_worker: e } });
    }
    function y(e) {
      var t;
      (t = d) == null ||
        t.addAnnotations({ bool: { pre_init_worker_bootstrap: e } });
    }
    function C(e, t, n) {
      var r;
      (r = d) == null ||
        r.addAnnotations({
          int: { pthread_pool_size: e },
          bool: { is_webkit: n, is_dynamic_pool: t },
        });
    }
    function b(e) {
      var t;
      ((m = e),
        (t = d) == null ||
          t.addAnnotations({ int: { pthread_hardening_level: e } }));
    }
    function v(e) {
      var t;
      ((p = e), (t = d) == null || t.addAnnotations(S(e)));
    }
    function S(e) {
      return {
        bool: {
          content_addressed_wasm: e.isContentAddressed,
          is_webkit: e.isWebKit,
          pin_worker_glue: e.pinWorkerGlue,
        },
      };
    }
    function R(e) {
      var t;
      ((t = d) == null || t.endSuccess(e), (d = null));
    }
    function L(e, t) {
      var n;
      ((n = d) == null || n.endFail(e, t), (d = null));
    }
    var E = s._(891426543, "3400"),
      k = 12e4,
      I = e({
        CALL_ENDING_HANDLER_START: "call_ending_handler_start",
        CALL_ENDING_HANDLER_END: "call_ending_handler_end",
        CLEANUP_START: "cleanup_start",
        CLEANUP_END: "cleanup_end",
      }),
      T = null;
    function D() {
      T = o("WAWebQplFlow").startQplFlow(E, { timeoutInMs: k });
    }
    function x(e) {
      var t;
      (t = T) == null || t.addPoint(e);
    }
    function $() {
      var e;
      ((e = T) == null || e.endSuccess(), (T = null));
    }
    var P = s._(891426840, "3404"),
      N = 14400 * 1e3,
      M = e({ PIP_OPENED: "pip_opened", POPOUT_OPENED: "popout_opened" }),
      w = null;
    function A(e) {
      w = o("WAWebQplFlow").startQplFlow(P, { timeoutInMs: N, annotations: e });
    }
    function F(e) {
      var t;
      (t = w) == null || t.addPoint(e);
    }
    function O() {
      var e;
      ((e = w) == null || e.endSuccess(), (w = null));
    }
    var B = s._(891424539, "3405"),
      W = 12e4,
      q = e({
        POOL_GROWTH_START: "pool_growth_start",
        POOL_GROWTH_END: "pool_growth_end",
        EMERGENCY_ALLOC: "emergency_alloc",
        POOL_SHRINK: "pool_shrink",
      });
    function U(e) {
      return o("WAWebQplFlow").startQplFlow(B, {
        timeoutInMs: W,
        annotations: e,
      });
    }
    function V(e, t) {
      e.addPoint(t);
    }
    function H(e) {
      e.endSuccess();
    }
    function G(e, t) {
      e.endFail(t);
    }
    ((l.VoipInitQplPoint = c),
      (l.startVoipInitQpl = _),
      (l.voipInitQplAnnotateStart = f),
      (l.voipInitQplAddPoint = g),
      (l.voipInitQplAnnotateExecutionMode = h),
      (l.voipInitQplAnnotateWorkerBootstrapMode = y),
      (l.voipInitQplAnnotateThreadPool = C),
      (l.voipInitQplAnnotatePthreadHardening = b),
      (l.voipInitQplAnnotateWasmLoad = v),
      (l.endVoipInitQplSuccess = R),
      (l.endVoipInitQplFail = L),
      (l.VoipEndCallQplPoint = I),
      (l.startVoipEndCallQpl = D),
      (l.voipEndCallQplAddPoint = x),
      (l.endVoipEndCallQplSuccess = $),
      (l.VoipUiLifecycleQplPoint = M),
      (l.startVoipUiLifecycleQpl = A),
      (l.voipUiLifecycleQplAddPoint = F),
      (l.endVoipUiLifecycleQplSuccess = O),
      (l.VoipWorkerSetupQplPoint = q),
      (l.startVoipWorkerSetupQpl = U),
      (l.voipWorkerSetupQplAddPoint = V),
      (l.endVoipWorkerSetupQplSuccess = H),
      (l.endVoipWorkerSetupQplFail = G));
  },
  98,
);
