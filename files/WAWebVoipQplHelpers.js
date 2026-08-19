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
      d = null;
    function m(e) {
      var t = o("WAWebQplFlow").startQplFlow(u, {
        timeoutInMs: 12e4,
        annotations: e,
      });
      d = t;
      var n = window.performance;
      return (
        n != null &&
          t.addAnnotations({ int: { session_age_ms: Math.round(n.now()) } }),
        t
      );
    }
    function p(e, t) {
      var n;
      (n = d) == null || n.addPoint(e, t);
    }
    function _(e) {
      var t;
      (t = d) == null ||
        t.addAnnotations({ bool: { using_dedicated_worker: e } });
    }
    function f(e) {
      var t;
      (t = d) == null ||
        t.addAnnotations({ bool: { pre_init_worker_bootstrap: e } });
    }
    function g(e, t, n) {
      var r;
      (r = d) == null ||
        r.addAnnotations({
          int: { pthread_pool_size: e },
          bool: { is_webkit: n, is_dynamic_pool: t },
        });
    }
    function h(e) {
      var t;
      ((t = d) == null || t.endSuccess(e), (d = null));
    }
    function y(e, t) {
      var n;
      ((n = d) == null || n.endFail(e, t), (d = null));
    }
    var C = s._(891426543, "3400"),
      b = 12e4,
      v = e({
        CALL_ENDING_HANDLER_START: "call_ending_handler_start",
        CALL_ENDING_HANDLER_END: "call_ending_handler_end",
        CLEANUP_START: "cleanup_start",
        CLEANUP_END: "cleanup_end",
      }),
      S = null;
    function R() {
      S = o("WAWebQplFlow").startQplFlow(C, { timeoutInMs: b });
    }
    function L(e) {
      var t;
      (t = S) == null || t.addPoint(e);
    }
    function E() {
      var e;
      ((e = S) == null || e.endSuccess(), (S = null));
    }
    var k = s._(891426840, "3404"),
      I = 14400 * 1e3,
      T = e({ PIP_OPENED: "pip_opened", POPOUT_OPENED: "popout_opened" }),
      D = null;
    function x(e) {
      D = o("WAWebQplFlow").startQplFlow(k, { timeoutInMs: I, annotations: e });
    }
    function $(e) {
      var t;
      (t = D) == null || t.addPoint(e);
    }
    function P() {
      var e;
      ((e = D) == null || e.endSuccess(), (D = null));
    }
    var N = s._(891424539, "3405"),
      M = 12e4,
      w = e({
        POOL_GROWTH_START: "pool_growth_start",
        POOL_GROWTH_END: "pool_growth_end",
        EMERGENCY_ALLOC: "emergency_alloc",
        POOL_SHRINK: "pool_shrink",
      });
    function A() {
      return o("WAWebQplFlow").startQplFlow(N, { timeoutInMs: M });
    }
    function F(e, t) {
      e.addPoint(t);
    }
    function O(e) {
      e.endSuccess();
    }
    function B(e, t) {
      e.endFail(t);
    }
    ((l.VoipInitQplPoint = c),
      (l.startVoipInitQpl = m),
      (l.voipInitQplAddPoint = p),
      (l.voipInitQplAnnotateExecutionMode = _),
      (l.voipInitQplAnnotateWorkerBootstrapMode = f),
      (l.voipInitQplAnnotateThreadPool = g),
      (l.endVoipInitQplSuccess = h),
      (l.endVoipInitQplFail = y),
      (l.VoipEndCallQplPoint = v),
      (l.startVoipEndCallQpl = R),
      (l.voipEndCallQplAddPoint = L),
      (l.endVoipEndCallQplSuccess = E),
      (l.VoipUiLifecycleQplPoint = T),
      (l.startVoipUiLifecycleQpl = x),
      (l.voipUiLifecycleQplAddPoint = $),
      (l.endVoipUiLifecycleQplSuccess = P),
      (l.VoipWorkerSetupQplPoint = w),
      (l.startVoipWorkerSetupQpl = A),
      (l.voipWorkerSetupQplAddPoint = F),
      (l.endVoipWorkerSetupQplSuccess = O),
      (l.endVoipWorkerSetupQplFail = B));
  },
  98,
);
