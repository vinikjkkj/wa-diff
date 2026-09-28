__d(
  "WAWebVoipQplHelpers",
  ["$InternalEnum", "WAWebQplFlow", "qpl"],
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
        p != null && t.addAnnotations(v(p)));
      var n = window.performance;
      return (
        n != null &&
          t.addAnnotations({ int: { session_age_ms: Math.round(n.now()) } }),
        t
      );
    }
    function f(e, t) {
      var n;
      (n = d) == null || n.addPoint(e, t);
    }
    function g(e) {
      var t;
      (t = d) == null ||
        t.addAnnotations({ bool: { using_dedicated_worker: e } });
    }
    function h(e) {
      var t;
      (t = d) == null ||
        t.addAnnotations({ bool: { pre_init_worker_bootstrap: e } });
    }
    function y(e, t, n) {
      var r;
      (r = d) == null ||
        r.addAnnotations({
          int: { pthread_pool_size: e },
          bool: { is_webkit: n, is_dynamic_pool: t },
        });
    }
    function C(e) {
      var t;
      ((m = e),
        (t = d) == null ||
          t.addAnnotations({ int: { pthread_hardening_level: e } }));
    }
    function b(e) {
      var t;
      ((p = e), (t = d) == null || t.addAnnotations(v(e)));
    }
    function v(e) {
      return {
        bool: {
          content_addressed_wasm: e.isContentAddressed,
          is_webkit: e.isWebKit,
          pin_worker_glue: e.pinWorkerGlue,
        },
      };
    }
    function S(e) {
      var t;
      ((t = d) == null || t.endSuccess(e), (d = null));
    }
    function R(e, t) {
      var n;
      ((n = d) == null || n.endFail(e, t), (d = null));
    }
    var L = s._(891426543, "3400"),
      E = 12e4,
      k = e({
        CALL_ENDING_HANDLER_START: "call_ending_handler_start",
        CALL_ENDING_HANDLER_END: "call_ending_handler_end",
        CLEANUP_START: "cleanup_start",
        CLEANUP_END: "cleanup_end",
      }),
      I = null;
    function T() {
      I = o("WAWebQplFlow").startQplFlow(L, { timeoutInMs: E });
    }
    function D(e) {
      var t;
      (t = I) == null || t.addPoint(e);
    }
    function x() {
      var e;
      ((e = I) == null || e.endSuccess(), (I = null));
    }
    var $ = s._(891426840, "3404"),
      P = 14400 * 1e3,
      N = e({ PIP_OPENED: "pip_opened", POPOUT_OPENED: "popout_opened" }),
      M = null;
    function w(e) {
      M = o("WAWebQplFlow").startQplFlow($, { timeoutInMs: P, annotations: e });
    }
    function A(e) {
      var t;
      (t = M) == null || t.addPoint(e);
    }
    function F() {
      var e;
      ((e = M) == null || e.endSuccess(), (M = null));
    }
    var O = s._(891424539, "3405"),
      B = 12e4,
      W = e({
        POOL_GROWTH_START: "pool_growth_start",
        POOL_GROWTH_END: "pool_growth_end",
        EMERGENCY_ALLOC: "emergency_alloc",
        POOL_SHRINK: "pool_shrink",
      });
    function q(e) {
      return o("WAWebQplFlow").startQplFlow(O, {
        timeoutInMs: B,
        annotations: e,
      });
    }
    function U(e, t) {
      e.addPoint(t);
    }
    function V(e) {
      e.endSuccess();
    }
    function H(e, t) {
      e.endFail(t);
    }
    ((l.VoipInitQplPoint = c),
      (l.startVoipInitQpl = _),
      (l.voipInitQplAddPoint = f),
      (l.voipInitQplAnnotateExecutionMode = g),
      (l.voipInitQplAnnotateWorkerBootstrapMode = h),
      (l.voipInitQplAnnotateThreadPool = y),
      (l.voipInitQplAnnotatePthreadHardening = C),
      (l.voipInitQplAnnotateWasmLoad = b),
      (l.endVoipInitQplSuccess = S),
      (l.endVoipInitQplFail = R),
      (l.VoipEndCallQplPoint = k),
      (l.startVoipEndCallQpl = T),
      (l.voipEndCallQplAddPoint = D),
      (l.endVoipEndCallQplSuccess = x),
      (l.VoipUiLifecycleQplPoint = N),
      (l.startVoipUiLifecycleQpl = w),
      (l.voipUiLifecycleQplAddPoint = A),
      (l.endVoipUiLifecycleQplSuccess = F),
      (l.VoipWorkerSetupQplPoint = W),
      (l.startVoipWorkerSetupQpl = q),
      (l.voipWorkerSetupQplAddPoint = U),
      (l.endVoipWorkerSetupQplSuccess = V),
      (l.endVoipWorkerSetupQplFail = H));
  },
  98,
);
