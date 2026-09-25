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
      m = null;
    function p(e) {
      var t = o("WAWebQplFlow").startQplFlow(u, {
        timeoutInMs: 12e4,
        annotations: e,
      });
      ((d = t),
        m != null && t.addAnnotations({ int: { pthread_hardening_level: m } }));
      var n = window.performance;
      return (
        n != null &&
          t.addAnnotations({ int: { session_age_ms: Math.round(n.now()) } }),
        t
      );
    }
    function _(e, t) {
      var n;
      (n = d) == null || n.addPoint(e, t);
    }
    function f(e) {
      var t;
      (t = d) == null ||
        t.addAnnotations({ bool: { using_dedicated_worker: e } });
    }
    function g(e) {
      var t;
      (t = d) == null ||
        t.addAnnotations({ bool: { pre_init_worker_bootstrap: e } });
    }
    function h(e, t, n) {
      var r;
      (r = d) == null ||
        r.addAnnotations({
          int: { pthread_pool_size: e },
          bool: { is_webkit: n, is_dynamic_pool: t },
        });
    }
    function y(e) {
      var t;
      ((m = e),
        (t = d) == null ||
          t.addAnnotations({ int: { pthread_hardening_level: e } }));
    }
    function C(e) {
      var t;
      ((t = d) == null || t.endSuccess(e), (d = null));
    }
    function b(e, t) {
      var n;
      ((n = d) == null || n.endFail(e, t), (d = null));
    }
    var v = s._(891426543, "3400"),
      S = 12e4,
      R = e({
        CALL_ENDING_HANDLER_START: "call_ending_handler_start",
        CALL_ENDING_HANDLER_END: "call_ending_handler_end",
        CLEANUP_START: "cleanup_start",
        CLEANUP_END: "cleanup_end",
      }),
      L = null;
    function E() {
      L = o("WAWebQplFlow").startQplFlow(v, { timeoutInMs: S });
    }
    function k(e) {
      var t;
      (t = L) == null || t.addPoint(e);
    }
    function I() {
      var e;
      ((e = L) == null || e.endSuccess(), (L = null));
    }
    var T = s._(891426840, "3404"),
      D = 14400 * 1e3,
      x = e({ PIP_OPENED: "pip_opened", POPOUT_OPENED: "popout_opened" }),
      $ = null;
    function P(e) {
      $ = o("WAWebQplFlow").startQplFlow(T, { timeoutInMs: D, annotations: e });
    }
    function N(e) {
      var t;
      (t = $) == null || t.addPoint(e);
    }
    function M() {
      var e;
      ((e = $) == null || e.endSuccess(), ($ = null));
    }
    var w = s._(891424539, "3405"),
      A = 12e4,
      F = e({
        POOL_GROWTH_START: "pool_growth_start",
        POOL_GROWTH_END: "pool_growth_end",
        EMERGENCY_ALLOC: "emergency_alloc",
        POOL_SHRINK: "pool_shrink",
      });
    function O() {
      return o("WAWebQplFlow").startQplFlow(w, { timeoutInMs: A });
    }
    function B(e, t) {
      e.addPoint(t);
    }
    function W(e) {
      e.endSuccess();
    }
    function q(e, t) {
      e.endFail(t);
    }
    ((l.VoipInitQplPoint = c),
      (l.startVoipInitQpl = p),
      (l.voipInitQplAddPoint = _),
      (l.voipInitQplAnnotateExecutionMode = f),
      (l.voipInitQplAnnotateWorkerBootstrapMode = g),
      (l.voipInitQplAnnotateThreadPool = h),
      (l.voipInitQplAnnotatePthreadHardening = y),
      (l.endVoipInitQplSuccess = C),
      (l.endVoipInitQplFail = b),
      (l.VoipEndCallQplPoint = R),
      (l.startVoipEndCallQpl = E),
      (l.voipEndCallQplAddPoint = k),
      (l.endVoipEndCallQplSuccess = I),
      (l.VoipUiLifecycleQplPoint = x),
      (l.startVoipUiLifecycleQpl = P),
      (l.voipUiLifecycleQplAddPoint = N),
      (l.endVoipUiLifecycleQplSuccess = M),
      (l.VoipWorkerSetupQplPoint = F),
      (l.startVoipWorkerSetupQpl = O),
      (l.voipWorkerSetupQplAddPoint = B),
      (l.endVoipWorkerSetupQplSuccess = W),
      (l.endVoipWorkerSetupQplFail = q));
  },
  98,
);
