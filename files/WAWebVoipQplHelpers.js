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
          t.addAnnotations({ int: { wasm_idle_warm_state_code: H(_) } }),
        f != null &&
          t.addAnnotations({ int: { idle_preload_state_code: z(f) } }),
        y != null && t.addAnnotations(W(y)),
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
        r = e.bootDecisionReason,
        a = e.isRetry;
      (t = m) == null ||
        t.addAnnotations({
          bool: {
            init_focused: document.hasFocus(),
            init_visible: !document.hidden,
            is_retry: a,
          },
          int: {
            boot_decision_code: S(n),
            boot_decision_reason_code: R(r),
            cpu_cores: o("WAWebBrowserApi").getNumCpu(),
            device_memory_mb: o("WAWebBrowserApi").getMemClass(),
          },
          string: {
            boot_decision: n != null ? n : "unknown",
            boot_decision_reason: r != null ? r : "unknown",
          },
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
      return e === "prop_off"
        ? 1
        : e === "deferred"
          ? 2
          : e === "windows"
            ? 3
            : e === "guest"
              ? 4
              : e === "eager_no_longtask"
                ? 5
                : e === "eager_recent_caller"
                  ? 6
                  : e === "eager_last_call_unreadable"
                    ? 7
                    : e == null
                      ? 0
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              e,
                          );
                        })();
    }
    function L(e) {
      var t;
      (t = m) == null ||
        t.addAnnotations({
          int: {
            last_call_connected_days: E(
              e,
              e == null ? void 0 : e.connectedDays,
            ),
            last_call_history_days: E(e, e == null ? void 0 : e.historyDays),
            last_call_placed_days: E(e, e == null ? void 0 : e.placedDays),
          },
        });
    }
    function E(e, t) {
      return e == null ? -2 : t != null ? t : -1;
    }
    function k(e) {
      var t = m;
      if (t != null) {
        p = e.atMs;
        var n = self.performance.now();
        t.addAnnotations({
          int: {
            trigger_hidden_for_ms: Math.round(e.hiddenForMs),
            trigger_ms_since_visible: Math.round(e.msSinceVisible),
            trigger_to_init_ms: Math.round(n - e.atMs),
            trigger_visibility_code: D(e.visibility),
          },
        });
        var r = d.get(e);
        r != null &&
          t.addAnnotations({ int: { early_start_ms: Math.round(n - r) } });
      }
    }
    function I(e) {
      d.set(e, self.performance.now());
    }
    function T() {
      return p;
    }
    function D(e) {
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
    function x(e) {
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
    function $(e, t) {
      var n;
      (n = m) == null || n.addPoint(e, t);
    }
    function P(e) {
      var t = m;
      return function () {
        t != null && t === m && t.addPoint(e);
      };
    }
    function N(e) {
      var t;
      (t = m) == null ||
        t.addAnnotations({ bool: { using_dedicated_worker: e } });
    }
    function M(e) {
      var t;
      (t = m) == null ||
        t.addAnnotations({ bool: { pre_init_worker_bootstrap: e } });
    }
    function w(e, t, n) {
      var r;
      (r = m) == null ||
        r.addAnnotations({
          int: { pthread_pool_size: e },
          bool: { is_webkit: n, is_dynamic_pool: t },
        });
    }
    function A(e) {
      var t;
      ((g = e),
        (t = m) == null ||
          t.addAnnotations({ int: { pthread_hardening_level: e } }));
    }
    function F(e) {
      var t,
        n = O(e);
      ((h = n),
        (t = m) == null || t.addAnnotations({ int: { main_lock_fix_arm: n } }));
    }
    function O(e) {
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
    function B(e) {
      var t;
      ((y = e), (t = m) == null || t.addAnnotations(W(e)));
    }
    function W(e) {
      return {
        bool: {
          content_addressed_wasm: e.isContentAddressed,
          is_webkit: e.isWebKit,
          pin_worker_glue: e.pinWorkerGlue,
        },
      };
    }
    function q(e) {
      var t;
      (t = m) == null ||
        t.addAnnotations({ int: { wasm_prefetch_state_code: U(e) } });
    }
    function U(e) {
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
    function V(e) {
      _ = e;
    }
    function H(e) {
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
    function G(e) {
      f = e;
    }
    function z(e) {
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
    function j(e) {
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
    function K(e) {
      var t;
      (X(), (t = m) == null || t.endSuccess(e), (m = null), (p = null));
    }
    function Q(e, t) {
      var n;
      (X(), (n = m) == null || n.endFail(e, t), (m = null), (p = null));
    }
    function X() {
      try {
        var e;
        (e = m) == null ||
          e.addAnnotations({
            int: {
              init_end_visibility_code: D(
                o("WAWebPageVisibilityRecency").snapshotPageVisibility()
                  .visibility,
              ),
            },
          });
      } catch (e) {}
    }
    var Y = s._(891426543, "3400"),
      J = 12e4,
      Z = e({
        CALL_ENDING_HANDLER_START: "call_ending_handler_start",
        CALL_ENDING_HANDLER_END: "call_ending_handler_end",
        CLEANUP_START: "cleanup_start",
        CLEANUP_END: "cleanup_end",
      }),
      ee = null;
    function te() {
      ee = o("WAWebQplFlow").startQplFlow(Y, { timeoutInMs: J });
    }
    function ne(e) {
      var t;
      (t = ee) == null || t.addPoint(e);
    }
    function re() {
      var e;
      ((e = ee) == null || e.endSuccess(), (ee = null));
    }
    var oe = s._(891426840, "3404"),
      ae = 14400 * 1e3,
      ie = e({ PIP_OPENED: "pip_opened", POPOUT_OPENED: "popout_opened" }),
      le = null;
    function se(e) {
      le = o("WAWebQplFlow").startQplFlow(oe, {
        timeoutInMs: ae,
        annotations: e,
      });
    }
    function ue(e) {
      var t;
      (t = le) == null || t.addPoint(e);
    }
    function ce() {
      var e;
      ((e = le) == null || e.endSuccess(), (le = null));
    }
    var de = s._(891424539, "3405"),
      me = 12e4,
      pe = e({
        POOL_GROWTH_START: "pool_growth_start",
        POOL_GROWTH_END: "pool_growth_end",
        EMERGENCY_ALLOC: "emergency_alloc",
        POOL_SHRINK: "pool_shrink",
      });
    function _e(e) {
      return o("WAWebQplFlow").startQplFlow(de, {
        timeoutInMs: me,
        annotations: e,
      });
    }
    function fe(e, t) {
      e.addPoint(t);
    }
    function ge(e) {
      e.endSuccess();
    }
    function he(e, t) {
      e.endFail(t);
    }
    ((l.VoipInitQplPoint = c),
      (l.startVoipInitQpl = b),
      (l.voipInitQplAnnotateStart = v),
      (l.voipInitQplAnnotateLastCall = L),
      (l.voipInitQplAnnotateTrigger = k),
      (l.voipInitQplRecordEarlyStart = I),
      (l.getVoipInitQplTriggeredAtMs = T),
      (l.voipInitQplAnnotateRetryIdleWait = x),
      (l.voipInitQplAddPoint = $),
      (l.bindVoipInitQplPointToActiveFlow = P),
      (l.voipInitQplAnnotateExecutionMode = N),
      (l.voipInitQplAnnotateWorkerBootstrapMode = M),
      (l.voipInitQplAnnotateThreadPool = w),
      (l.voipInitQplAnnotatePthreadHardening = A),
      (l.voipInitQplAnnotateMainLockFixArm = F),
      (l.voipInitQplAnnotateWasmLoad = B),
      (l.voipInitQplAnnotateWasmPrefetch = q),
      (l.voipInitQplRecordWasmIdleWarmState = V),
      (l.voipInitQplRecordIdleColdPathPreloadState = G),
      (l.voipInitQplAnnotateWorkerGlueSkew = j),
      (l.endVoipInitQplSuccess = K),
      (l.endVoipInitQplFail = Q),
      (l.VoipEndCallQplPoint = Z),
      (l.startVoipEndCallQpl = te),
      (l.voipEndCallQplAddPoint = ne),
      (l.endVoipEndCallQplSuccess = re),
      (l.VoipUiLifecycleQplPoint = ie),
      (l.startVoipUiLifecycleQpl = se),
      (l.voipUiLifecycleQplAddPoint = ue),
      (l.endVoipUiLifecycleQplSuccess = ce),
      (l.VoipWorkerSetupQplPoint = pe),
      (l.startVoipWorkerSetupQpl = _e),
      (l.voipWorkerSetupQplAddPoint = fe),
      (l.endVoipWorkerSetupQplSuccess = ge),
      (l.endVoipWorkerSetupQplFail = he));
  },
  98,
);
