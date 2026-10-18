__d(
  "WAWebVoipQplHelpers",
  [
    "$InternalEnum",
    "WAWebBrowserApi",
    "WAWebPageVisibilityRecency",
    "WAWebQplFlow",
    "qpl",
  ],
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
        FIRST_PTHREAD_LOADED: "first_pthread_loaded",
        RPC_SETUP_END: "rpc_setup_end",
        WEBCODECS_PROBE_START: "webcodecs_probe_start",
        WEBCODECS_PROBE_END: "webcodecs_probe_end",
        VOIP_STACK_INIT_START: "voip_stack_init_start",
        VOIP_STACK_INIT_END: "voip_stack_init_end",
      }),
      d = new WeakMap(),
      m = null,
      p = null,
      _ = null,
      f = null,
      g = null,
      h = null;
    function y(e) {
      var t = o("WAWebQplFlow").startQplFlow(u, {
        timeoutInMs: 12e4,
        annotations: e,
      });
      ((m = t),
        (p = null),
        f != null && t.addAnnotations({ int: { pthread_hardening_level: f } }),
        _ != null &&
          t.addAnnotations({ int: { wasm_idle_warm_state_code: F(_) } }),
        g != null && t.addAnnotations(N(g)),
        h != null && t.addAnnotations(h));
      var n = window.performance;
      return (
        n != null &&
          t.addAnnotations({ int: { session_age_ms: Math.round(n.now()) } }),
        t
      );
    }
    function C(e) {
      var t,
        n = e.bootDecision,
        r = e.isRetry;
      (t = m) == null ||
        t.addAnnotations({
          bool: {
            init_focused: document.hasFocus(),
            init_visible: !document.hidden,
            is_retry: r,
          },
          int: {
            boot_decision_code: b(n),
            cpu_cores: o("WAWebBrowserApi").getNumCpu(),
            device_memory_mb: o("WAWebBrowserApi").getMemClass(),
          },
          string: { boot_decision: n != null ? n : "unknown" },
        });
    }
    function b(e) {
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
    function v(e) {
      var t = m;
      if (t != null) {
        p = e.atMs;
        var n = self.performance.now();
        t.addAnnotations({
          int: {
            trigger_hidden_for_ms: Math.round(e.hiddenForMs),
            trigger_ms_since_visible: Math.round(e.msSinceVisible),
            trigger_to_init_ms: Math.round(n - e.atMs),
            trigger_visibility_code: L(e.visibility),
          },
        });
        var r = d.get(e);
        r != null &&
          t.addAnnotations({ int: { early_start_ms: Math.round(n - r) } });
      }
    }
    function S(e) {
      d.set(e, self.performance.now());
    }
    function R() {
      return p;
    }
    function L(e) {
      return e === "hidden"
        ? 1
        : e === "visible_unfocused"
          ? 2
          : e === "visible_focused"
            ? 3
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function E(e) {
      var t,
        n = e.endedHidden,
        r = e.startedHidden,
        o = e.waitMs;
      (t = m) == null ||
        t.addAnnotations({
          bool: {
            retry_idle_wait_ended_hidden: n,
            retry_idle_wait_started_hidden: r,
          },
          int: { retry_idle_wait_ms: o },
        });
    }
    function k(e, t) {
      var n;
      (n = m) == null || n.addPoint(e, t);
    }
    function I(e) {
      var t = m;
      return function () {
        t != null && t === m && t.addPoint(e);
      };
    }
    function T(e) {
      var t;
      (t = m) == null ||
        t.addAnnotations({ bool: { using_dedicated_worker: e } });
    }
    function D(e) {
      var t;
      (t = m) == null ||
        t.addAnnotations({ bool: { pre_init_worker_bootstrap: e } });
    }
    function x(e, t, n) {
      var r;
      (r = m) == null ||
        r.addAnnotations({
          int: { pthread_pool_size: e },
          bool: { is_webkit: n, is_dynamic_pool: t },
        });
    }
    function $(e) {
      var t;
      ((f = e),
        (t = m) == null ||
          t.addAnnotations({ int: { pthread_hardening_level: e } }));
    }
    function P(e) {
      var t;
      ((g = e), (t = m) == null || t.addAnnotations(N(e)));
    }
    function N(e) {
      return {
        bool: {
          content_addressed_wasm: e.isContentAddressed,
          is_webkit: e.isWebKit,
          pin_worker_glue: e.pinWorkerGlue,
        },
      };
    }
    function M(e) {
      var t;
      (t = m) == null ||
        t.addAnnotations({ int: { wasm_prefetch_state_code: w(e) } });
    }
    function w(e) {
      return e === "unknown"
        ? 0
        : e === "none"
          ? 1
          : e === "complete_before_trigger"
            ? 2
            : e === "in_flight_at_trigger"
              ? 3
              : e === "started_after_trigger"
                ? 4
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    function A(e) {
      _ = e;
    }
    function F(e) {
      return e === "scheduled"
        ? 1
        : e === "skipped"
          ? 2
          : e === "fetching"
            ? 3
            : e === "complete"
              ? 4
              : e === "failed"
                ? 5
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    function O(e) {
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
      ((h = n), (t = m) == null || t.addAnnotations(n));
    }
    function B(e) {
      var t;
      (q(), (t = m) == null || t.endSuccess(e), (m = null), (p = null));
    }
    function W(e, t) {
      var n;
      (q(), (n = m) == null || n.endFail(e, t), (m = null), (p = null));
    }
    function q() {
      try {
        var e;
        (e = m) == null ||
          e.addAnnotations({
            int: {
              init_end_visibility_code: L(
                o("WAWebPageVisibilityRecency").snapshotPageVisibility()
                  .visibility,
              ),
            },
          });
      } catch (e) {}
    }
    var U = s._(891426543, "3400"),
      V = 12e4,
      H = e({
        CALL_ENDING_HANDLER_START: "call_ending_handler_start",
        CALL_ENDING_HANDLER_END: "call_ending_handler_end",
        CLEANUP_START: "cleanup_start",
        CLEANUP_END: "cleanup_end",
      }),
      G = null;
    function z() {
      G = o("WAWebQplFlow").startQplFlow(U, { timeoutInMs: V });
    }
    function j(e) {
      var t;
      (t = G) == null || t.addPoint(e);
    }
    function K() {
      var e;
      ((e = G) == null || e.endSuccess(), (G = null));
    }
    var Q = s._(891426840, "3404"),
      X = 14400 * 1e3,
      Y = e({ PIP_OPENED: "pip_opened", POPOUT_OPENED: "popout_opened" }),
      J = null;
    function Z(e) {
      J = o("WAWebQplFlow").startQplFlow(Q, { timeoutInMs: X, annotations: e });
    }
    function ee(e) {
      var t;
      (t = J) == null || t.addPoint(e);
    }
    function te() {
      var e;
      ((e = J) == null || e.endSuccess(), (J = null));
    }
    var ne = s._(891424539, "3405"),
      re = 12e4,
      oe = e({
        POOL_GROWTH_START: "pool_growth_start",
        POOL_GROWTH_END: "pool_growth_end",
        EMERGENCY_ALLOC: "emergency_alloc",
        POOL_SHRINK: "pool_shrink",
      });
    function ae(e) {
      return o("WAWebQplFlow").startQplFlow(ne, {
        timeoutInMs: re,
        annotations: e,
      });
    }
    function ie(e, t) {
      e.addPoint(t);
    }
    function le(e) {
      e.endSuccess();
    }
    function se(e, t) {
      e.endFail(t);
    }
    ((l.VoipInitQplPoint = c),
      (l.startVoipInitQpl = y),
      (l.voipInitQplAnnotateStart = C),
      (l.voipInitQplAnnotateTrigger = v),
      (l.voipInitQplRecordEarlyStart = S),
      (l.getVoipInitQplTriggeredAtMs = R),
      (l.voipInitQplAnnotateRetryIdleWait = E),
      (l.voipInitQplAddPoint = k),
      (l.bindVoipInitQplPointToActiveFlow = I),
      (l.voipInitQplAnnotateExecutionMode = T),
      (l.voipInitQplAnnotateWorkerBootstrapMode = D),
      (l.voipInitQplAnnotateThreadPool = x),
      (l.voipInitQplAnnotatePthreadHardening = $),
      (l.voipInitQplAnnotateWasmLoad = P),
      (l.voipInitQplAnnotateWasmPrefetch = M),
      (l.voipInitQplRecordWasmIdleWarmState = A),
      (l.voipInitQplAnnotateWorkerGlueSkew = O),
      (l.endVoipInitQplSuccess = B),
      (l.endVoipInitQplFail = W),
      (l.VoipEndCallQplPoint = H),
      (l.startVoipEndCallQpl = z),
      (l.voipEndCallQplAddPoint = j),
      (l.endVoipEndCallQplSuccess = K),
      (l.VoipUiLifecycleQplPoint = Y),
      (l.startVoipUiLifecycleQpl = Z),
      (l.voipUiLifecycleQplAddPoint = ee),
      (l.endVoipUiLifecycleQplSuccess = te),
      (l.VoipWorkerSetupQplPoint = oe),
      (l.startVoipWorkerSetupQpl = ae),
      (l.voipWorkerSetupQplAddPoint = ie),
      (l.endVoipWorkerSetupQplSuccess = le),
      (l.endVoipWorkerSetupQplFail = se));
  },
  98,
);
