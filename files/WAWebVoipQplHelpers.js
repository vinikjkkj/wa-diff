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
      y = null;
    function C(e) {
      var t = o("WAWebQplFlow").startQplFlow(u, {
        timeoutInMs: 12e4,
        annotations: e,
      });
      ((m = t),
        (p = null),
        g != null && t.addAnnotations({ int: { pthread_hardening_level: g } }),
        _ != null &&
          t.addAnnotations({ int: { wasm_idle_warm_state_code: O(_) } }),
        f != null &&
          t.addAnnotations({ int: { idle_preload_state_code: W(f) } }),
        h != null && t.addAnnotations(M(h)),
        y != null && t.addAnnotations(y));
      var n = window.performance;
      return (
        n != null &&
          t.addAnnotations({ int: { session_age_ms: Math.round(n.now()) } }),
        t
      );
    }
    function b(e) {
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
            boot_decision_code: v(n),
            cpu_cores: o("WAWebBrowserApi").getNumCpu(),
            device_memory_mb: o("WAWebBrowserApi").getMemClass(),
          },
          string: { boot_decision: n != null ? n : "unknown" },
        });
    }
    function v(e) {
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
    function S(e) {
      var t = m;
      if (t != null) {
        p = e.atMs;
        var n = self.performance.now();
        t.addAnnotations({
          int: {
            trigger_hidden_for_ms: Math.round(e.hiddenForMs),
            trigger_ms_since_visible: Math.round(e.msSinceVisible),
            trigger_to_init_ms: Math.round(n - e.atMs),
            trigger_visibility_code: E(e.visibility),
          },
        });
        var r = d.get(e);
        r != null &&
          t.addAnnotations({ int: { early_start_ms: Math.round(n - r) } });
      }
    }
    function R(e) {
      d.set(e, self.performance.now());
    }
    function L() {
      return p;
    }
    function E(e) {
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
    function k(e) {
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
    function I(e, t) {
      var n;
      (n = m) == null || n.addPoint(e, t);
    }
    function T(e) {
      var t = m;
      return function () {
        t != null && t === m && t.addPoint(e);
      };
    }
    function D(e) {
      var t;
      (t = m) == null ||
        t.addAnnotations({ bool: { using_dedicated_worker: e } });
    }
    function x(e) {
      var t;
      (t = m) == null ||
        t.addAnnotations({ bool: { pre_init_worker_bootstrap: e } });
    }
    function $(e, t, n) {
      var r;
      (r = m) == null ||
        r.addAnnotations({
          int: { pthread_pool_size: e },
          bool: { is_webkit: n, is_dynamic_pool: t },
        });
    }
    function P(e) {
      var t;
      ((g = e),
        (t = m) == null ||
          t.addAnnotations({ int: { pthread_hardening_level: e } }));
    }
    function N(e) {
      var t;
      ((h = e), (t = m) == null || t.addAnnotations(M(e)));
    }
    function M(e) {
      return {
        bool: {
          content_addressed_wasm: e.isContentAddressed,
          is_webkit: e.isWebKit,
          pin_worker_glue: e.pinWorkerGlue,
        },
      };
    }
    function w(e) {
      var t;
      (t = m) == null ||
        t.addAnnotations({ int: { wasm_prefetch_state_code: A(e) } });
    }
    function A(e) {
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
    function F(e) {
      _ = e;
    }
    function O(e) {
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
    function B(e) {
      f = e;
    }
    function W(e) {
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
    function q(e) {
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
      ((y = n), (t = m) == null || t.addAnnotations(n));
    }
    function U(e) {
      var t;
      (H(), (t = m) == null || t.endSuccess(e), (m = null), (p = null));
    }
    function V(e, t) {
      var n;
      (H(), (n = m) == null || n.endFail(e, t), (m = null), (p = null));
    }
    function H() {
      try {
        var e;
        (e = m) == null ||
          e.addAnnotations({
            int: {
              init_end_visibility_code: E(
                o("WAWebPageVisibilityRecency").snapshotPageVisibility()
                  .visibility,
              ),
            },
          });
      } catch (e) {}
    }
    var G = s._(891426543, "3400"),
      z = 12e4,
      j = e({
        CALL_ENDING_HANDLER_START: "call_ending_handler_start",
        CALL_ENDING_HANDLER_END: "call_ending_handler_end",
        CLEANUP_START: "cleanup_start",
        CLEANUP_END: "cleanup_end",
      }),
      K = null;
    function Q() {
      K = o("WAWebQplFlow").startQplFlow(G, { timeoutInMs: z });
    }
    function X(e) {
      var t;
      (t = K) == null || t.addPoint(e);
    }
    function Y() {
      var e;
      ((e = K) == null || e.endSuccess(), (K = null));
    }
    var J = s._(891426840, "3404"),
      Z = 14400 * 1e3,
      ee = e({ PIP_OPENED: "pip_opened", POPOUT_OPENED: "popout_opened" }),
      te = null;
    function ne(e) {
      te = o("WAWebQplFlow").startQplFlow(J, {
        timeoutInMs: Z,
        annotations: e,
      });
    }
    function re(e) {
      var t;
      (t = te) == null || t.addPoint(e);
    }
    function oe() {
      var e;
      ((e = te) == null || e.endSuccess(), (te = null));
    }
    var ae = s._(891424539, "3405"),
      ie = 12e4,
      le = e({
        POOL_GROWTH_START: "pool_growth_start",
        POOL_GROWTH_END: "pool_growth_end",
        EMERGENCY_ALLOC: "emergency_alloc",
        POOL_SHRINK: "pool_shrink",
      });
    function se(e) {
      return o("WAWebQplFlow").startQplFlow(ae, {
        timeoutInMs: ie,
        annotations: e,
      });
    }
    function ue(e, t) {
      e.addPoint(t);
    }
    function ce(e) {
      e.endSuccess();
    }
    function de(e, t) {
      e.endFail(t);
    }
    ((l.VoipInitQplPoint = c),
      (l.startVoipInitQpl = C),
      (l.voipInitQplAnnotateStart = b),
      (l.voipInitQplAnnotateTrigger = S),
      (l.voipInitQplRecordEarlyStart = R),
      (l.getVoipInitQplTriggeredAtMs = L),
      (l.voipInitQplAnnotateRetryIdleWait = k),
      (l.voipInitQplAddPoint = I),
      (l.bindVoipInitQplPointToActiveFlow = T),
      (l.voipInitQplAnnotateExecutionMode = D),
      (l.voipInitQplAnnotateWorkerBootstrapMode = x),
      (l.voipInitQplAnnotateThreadPool = $),
      (l.voipInitQplAnnotatePthreadHardening = P),
      (l.voipInitQplAnnotateWasmLoad = N),
      (l.voipInitQplAnnotateWasmPrefetch = w),
      (l.voipInitQplRecordWasmIdleWarmState = F),
      (l.voipInitQplRecordIdleColdPathPreloadState = B),
      (l.voipInitQplAnnotateWorkerGlueSkew = q),
      (l.endVoipInitQplSuccess = U),
      (l.endVoipInitQplFail = V),
      (l.VoipEndCallQplPoint = j),
      (l.startVoipEndCallQpl = Q),
      (l.voipEndCallQplAddPoint = X),
      (l.endVoipEndCallQplSuccess = Y),
      (l.VoipUiLifecycleQplPoint = ee),
      (l.startVoipUiLifecycleQpl = ne),
      (l.voipUiLifecycleQplAddPoint = re),
      (l.endVoipUiLifecycleQplSuccess = oe),
      (l.VoipWorkerSetupQplPoint = le),
      (l.startVoipWorkerSetupQpl = se),
      (l.voipWorkerSetupQplAddPoint = ue),
      (l.endVoipWorkerSetupQplSuccess = ce),
      (l.endVoipWorkerSetupQplFail = de));
  },
  98,
);
