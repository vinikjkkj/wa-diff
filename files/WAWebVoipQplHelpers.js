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
      h = null,
      y = null,
      C = null;
    function b(e) {
      var t = o("WAWebQplFlow").startQplFlow(u, {
        timeoutInMs: 12e4,
        annotations: e,
      });
      ((m = t),
        (p = null),
        g != null && t.addAnnotations({ int: { pthread_hardening_level: g } }),
        h != null && t.addAnnotations({ int: { main_lock_fix_arm: h } }),
        _ != null &&
          t.addAnnotations({ int: { wasm_idle_warm_state_code: q(_) } }),
        f != null &&
          t.addAnnotations({ int: { idle_preload_state_code: V(f) } }),
        y != null && t.addAnnotations(F(y)),
        C != null && t.addAnnotations(C));
      var n = window.performance;
      return (
        n != null &&
          t.addAnnotations({ int: { session_age_ms: Math.round(n.now()) } }),
        t
      );
    }
    function v(e) {
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
            boot_decision_code: S(n),
            cpu_cores: o("WAWebBrowserApi").getNumCpu(),
            device_memory_mb: o("WAWebBrowserApi").getMemClass(),
          },
          string: { boot_decision: n != null ? n : "unknown" },
        });
    }
    function S(e) {
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
    function R(e) {
      var t = m;
      if (t != null) {
        p = e.atMs;
        var n = self.performance.now();
        t.addAnnotations({
          int: {
            trigger_hidden_for_ms: Math.round(e.hiddenForMs),
            trigger_ms_since_visible: Math.round(e.msSinceVisible),
            trigger_to_init_ms: Math.round(n - e.atMs),
            trigger_visibility_code: k(e.visibility),
          },
        });
        var r = d.get(e);
        r != null &&
          t.addAnnotations({ int: { early_start_ms: Math.round(n - r) } });
      }
    }
    function L(e) {
      d.set(e, self.performance.now());
    }
    function E() {
      return p;
    }
    function k(e) {
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
    function I(e) {
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
    function T(e, t) {
      var n;
      (n = m) == null || n.addPoint(e, t);
    }
    function D(e) {
      var t = m;
      return function () {
        t != null && t === m && t.addPoint(e);
      };
    }
    function x(e) {
      var t;
      (t = m) == null ||
        t.addAnnotations({ bool: { using_dedicated_worker: e } });
    }
    function $(e) {
      var t;
      (t = m) == null ||
        t.addAnnotations({ bool: { pre_init_worker_bootstrap: e } });
    }
    function P(e, t, n) {
      var r;
      (r = m) == null ||
        r.addAnnotations({
          int: { pthread_pool_size: e },
          bool: { is_webkit: n, is_dynamic_pool: t },
        });
    }
    function N(e) {
      var t;
      ((g = e),
        (t = m) == null ||
          t.addAnnotations({ int: { pthread_hardening_level: e } }));
    }
    function M(e) {
      var t,
        n = w(e);
      ((h = n),
        (t = m) == null || t.addAnnotations({ int: { main_lock_fix_arm: n } }));
    }
    function w(e) {
      return e === "none"
        ? 0
        : e === "control"
          ? 1
          : e === "test"
            ? 2
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function A(e) {
      var t;
      ((y = e), (t = m) == null || t.addAnnotations(F(e)));
    }
    function F(e) {
      return {
        bool: {
          content_addressed_wasm: e.isContentAddressed,
          is_webkit: e.isWebKit,
          pin_worker_glue: e.pinWorkerGlue,
        },
      };
    }
    function O(e) {
      var t;
      (t = m) == null ||
        t.addAnnotations({ int: { wasm_prefetch_state_code: B(e) } });
    }
    function B(e) {
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
    function W(e) {
      _ = e;
    }
    function q(e) {
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
    function U(e) {
      f = e;
    }
    function V(e) {
      return e === "skipped"
        ? 1
        : e === "started"
          ? 2
          : e === "complete"
            ? 3
            : e === "timeout"
              ? 4
              : e === "chunk_failed"
                ? 5
                : e === "failed"
                  ? 6
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e,
                      );
                    })();
    }
    function H(e) {
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
      ((C = n), (t = m) == null || t.addAnnotations(n));
    }
    function G(e) {
      var t;
      (j(), (t = m) == null || t.endSuccess(e), (m = null), (p = null));
    }
    function z(e, t) {
      var n;
      (j(), (n = m) == null || n.endFail(e, t), (m = null), (p = null));
    }
    function j() {
      try {
        var e;
        (e = m) == null ||
          e.addAnnotations({
            int: {
              init_end_visibility_code: k(
                o("WAWebPageVisibilityRecency").snapshotPageVisibility()
                  .visibility,
              ),
            },
          });
      } catch (e) {}
    }
    var K = s._(891426543, "3400"),
      Q = 12e4,
      X = e({
        CALL_ENDING_HANDLER_START: "call_ending_handler_start",
        CALL_ENDING_HANDLER_END: "call_ending_handler_end",
        CLEANUP_START: "cleanup_start",
        CLEANUP_END: "cleanup_end",
      }),
      Y = null;
    function J() {
      Y = o("WAWebQplFlow").startQplFlow(K, { timeoutInMs: Q });
    }
    function Z(e) {
      var t;
      (t = Y) == null || t.addPoint(e);
    }
    function ee() {
      var e;
      ((e = Y) == null || e.endSuccess(), (Y = null));
    }
    var te = s._(891426840, "3404"),
      ne = 14400 * 1e3,
      re = e({ PIP_OPENED: "pip_opened", POPOUT_OPENED: "popout_opened" }),
      oe = null;
    function ae(e) {
      oe = o("WAWebQplFlow").startQplFlow(te, {
        timeoutInMs: ne,
        annotations: e,
      });
    }
    function ie(e) {
      var t;
      (t = oe) == null || t.addPoint(e);
    }
    function le() {
      var e;
      ((e = oe) == null || e.endSuccess(), (oe = null));
    }
    var se = s._(891424539, "3405"),
      ue = 12e4,
      ce = e({
        POOL_GROWTH_START: "pool_growth_start",
        POOL_GROWTH_END: "pool_growth_end",
        EMERGENCY_ALLOC: "emergency_alloc",
        POOL_SHRINK: "pool_shrink",
      });
    function de(e) {
      return o("WAWebQplFlow").startQplFlow(se, {
        timeoutInMs: ue,
        annotations: e,
      });
    }
    function me(e, t) {
      e.addPoint(t);
    }
    function pe(e) {
      e.endSuccess();
    }
    function _e(e, t) {
      e.endFail(t);
    }
    ((l.VoipInitQplPoint = c),
      (l.startVoipInitQpl = b),
      (l.voipInitQplAnnotateStart = v),
      (l.voipInitQplAnnotateTrigger = R),
      (l.voipInitQplRecordEarlyStart = L),
      (l.getVoipInitQplTriggeredAtMs = E),
      (l.voipInitQplAnnotateRetryIdleWait = I),
      (l.voipInitQplAddPoint = T),
      (l.bindVoipInitQplPointToActiveFlow = D),
      (l.voipInitQplAnnotateExecutionMode = x),
      (l.voipInitQplAnnotateWorkerBootstrapMode = $),
      (l.voipInitQplAnnotateThreadPool = P),
      (l.voipInitQplAnnotatePthreadHardening = N),
      (l.voipInitQplAnnotateMainLockFixArm = M),
      (l.voipInitQplAnnotateWasmLoad = A),
      (l.voipInitQplAnnotateWasmPrefetch = O),
      (l.voipInitQplRecordWasmIdleWarmState = W),
      (l.voipInitQplRecordIdleColdPathPreloadState = U),
      (l.voipInitQplAnnotateWorkerGlueSkew = H),
      (l.endVoipInitQplSuccess = G),
      (l.endVoipInitQplFail = z),
      (l.VoipEndCallQplPoint = X),
      (l.startVoipEndCallQpl = J),
      (l.voipEndCallQplAddPoint = Z),
      (l.endVoipEndCallQplSuccess = ee),
      (l.VoipUiLifecycleQplPoint = re),
      (l.startVoipUiLifecycleQpl = ae),
      (l.voipUiLifecycleQplAddPoint = ie),
      (l.endVoipUiLifecycleQplSuccess = le),
      (l.VoipWorkerSetupQplPoint = ce),
      (l.startVoipWorkerSetupQpl = de),
      (l.voipWorkerSetupQplAddPoint = me),
      (l.endVoipWorkerSetupQplSuccess = pe),
      (l.endVoipWorkerSetupQplFail = _e));
  },
  98,
);
