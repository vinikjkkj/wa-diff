__d(
  "WAWebVoipQplHelpers",
  ["$InternalEnum", "WAWebQplFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("qpl")._(891422152, "3402"),
      s = n("$InternalEnum")({
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
        VOIP_STACK_INIT_START: "voip_stack_init_start",
        VOIP_STACK_INIT_END: "voip_stack_init_end",
      }),
      u = null;
    function c(t) {
      var n = o("WAWebQplFlow").startQplFlow(e, {
        timeoutInMs: 12e4,
        annotations: t,
      });
      return ((u = n), n);
    }
    function d(e, t) {
      var n;
      (n = u) == null || n.addPoint(e, t);
    }
    function m(e) {
      var t;
      (t = u) == null ||
        t.addAnnotations({ bool: { using_dedicated_worker: e } });
    }
    function p(e, t, n) {
      var r;
      (r = u) == null ||
        r.addAnnotations({
          int: { pthread_pool_size: e },
          bool: { is_webkit: n, is_dynamic_pool: t },
        });
    }
    function _(e) {
      var t;
      ((t = u) == null || t.endSuccess(e), (u = null));
    }
    function f(e, t) {
      var n;
      ((n = u) == null || n.endFail(e, t), (u = null));
    }
    ((l.VoipInitQplPoint = s),
      (l.startVoipInitQpl = c),
      (l.voipInitQplAddPoint = d),
      (l.voipInitQplAnnotateExecutionMode = m),
      (l.voipInitQplAnnotateThreadPool = p),
      (l.endVoipInitQplSuccess = _),
      (l.endVoipInitQplFail = f));
  },
  98,
);
