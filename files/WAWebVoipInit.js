__d(
  "WAWebVoipInit",
  [
    "Promise",
    "WALogger",
    "WAPromiseTimeout",
    "WAResolvable",
    "WAWebBackendApi",
    "WAWebCallWamEvent",
    "WAWebCoreActionsODS",
    "WAWebCountryCodeUtils",
    "WAWebEnvironment",
    "WAWebJoinableCallWamEvent",
    "WAWebPonyfillsIdleCallback",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebVoipBrowserAudioStatus",
    "WAWebVoipCrashRecovery",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipNetworkMedium",
    "WAWebVoipPthreadGlueFailureTracker",
    "WAWebVoipQplHelpers",
    "WAWebVoipStackInterface",
    "WAWebVoipWasmArtifactRegistry",
    "WAWebVoipWasmArtifactSkewErrors",
    "WAWebWidFactory",
    "WAWebWindowsHybridBridgeInitiator",
    "asyncToGeneratorRuntime",
    "cr:17219",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L = (e = n("cr:17219")) != null ? e : {},
      E = L.getWindowsBridge,
      k = 1,
      I = 5e3,
      T = 60 * 1e3,
      D,
      x = "prewarm",
      $ = null,
      P = !1,
      N = 0,
      M = null,
      w = null,
      A = !1,
      F = !1,
      O = 0,
      B = null;
    function W(e, t) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          e === void 0 && (e = "prewarm");
          var n = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (n == null) {
            (o("WALogger").WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: init skipped, selfLid not available yet",
                ])),
            ),
              (P = !0),
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.triggerVoipInitFailure());
            return;
          }
          if (!n.equals(D)) ((D = n), (x = e), re(), ($ = t), yield K(n));
          else {
            if (t != null) {
              var r = x === "prewarm" ? "prewarm_owned" : "intent_owned";
              o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  o("WAWebCoreActionsODS").logCallVoipBootInitFired(r);
                },
              );
            }
            j && (yield j.promise);
          }
        })),
        q.apply(this, arguments)
      );
    }
    function U() {
      return (
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getDidVoipInitError() &&
        P &&
        N < ne()
      );
    }
    function V() {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (w != null) return yield w;
          var e = G();
          w = e;
          try {
            return yield e;
          } finally {
            w === e && (w = null);
          }
        })),
        H.apply(this, arguments)
      );
    }
    function G() {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            j &&
            (yield j.promise,
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited())
          )
            return !0;
          if (!U())
            return o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited();
          var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (e == null) return !1;
          (N++,
            o("WAWebCoreActionsODS").logCallVoipInitRetryAttempt(),
            (D = e),
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: retrying init after transient failure attempt=",
                  " max=",
                  "",
                ])),
              N,
              ne(),
            ),
            yield me());
          var t = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (t == null || !e.equals(t))
            return (
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: skip retry, identity changed in idle wait",
                  ])),
              ),
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getIsVoipInited()
            );
          yield K(e, !0);
          var n = o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited();
          return (
            n
              ? o("WAWebCoreActionsODS").logCallVoipInitRetrySuccess()
              : (o("WAWebCoreActionsODS").logCallVoipInitRetryFailure(),
                U() ||
                  o("WAWebCoreActionsODS").logCallVoipInitRetryExhausted()),
            n
          );
        })),
        z.apply(this, arguments)
      );
    }
    var j = null;
    function K(e, t) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            (t === void 0 && (t = !1),
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: init after me_ready",
                ])),
            ),
            !(
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getDidVoipInitError() && !t
            ))
          ) {
            if (
              j &&
              (yield j.promise,
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getIsVoipInited() ||
                o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.getDidVoipInitError())
            ) {
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: init already done, ignoring duplicate call",
                  ])),
              );
              return;
            }
            j = new (o("WAResolvable").Resolvable)();
            var a = $;
            (!t &&
              a != null &&
              o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  o("WAWebCoreActionsODS").logCallVoipBootInitFired(a.reason);
                },
              ),
              o("WAWebVoipQplHelpers").startVoipInitQpl(oe()));
            try {
              var i, l, s;
              if (
                o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling()
              ) {
                (o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: init skipped due to unsupported browser",
                    ])),
                ),
                  o("WAWebCoreActionsODS").logCallVoipInitSkipUnsupported(),
                  (P = !1),
                  o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.triggerVoipInitFailure());
                return;
              }
              (ae(),
                o(
                  "WAWebVoipBrowserAudioStatus",
                ).preDetectBrowserAudioCapabilities());
              var u = yield o(
                "WAWebVoipStackInterface",
              ).getVoipStackInterface();
              if ((u == null ? void 0 : u.type) === "windows") {
                var c = null;
                try {
                  c = yield o("WAPromiseTimeout").promiseTimeout(
                    o("WAWebCountryCodeUtils").getMyCallingCode(),
                    I,
                  );
                } catch (e) {
                  o("WALogger")
                    .WARN(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: getMyCallingCode failed or timed out, using fallback: ",
                          "",
                        ])),
                      String(e),
                    )
                    .sendLogs("voip-get-self-country-code-failed");
                }
                try {
                  yield u.setSelfCountryCode(c != null ? c : "");
                } catch (e) {
                  o("WALogger")
                    .WARN(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: setSelfCountryCode failed, continuing init: ",
                          "",
                        ])),
                      String(e),
                    )
                    .sendLogs("voip-set-self-country-code-failed");
                }
              }
              var d = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
                m = d != null && !d.isLid() ? d : null,
                p = m != null ? o("WAWebWidFactory").asUserWidOrThrow(m) : null,
                S =
                  u == null
                    ? void 0
                    : u.voipInit(
                        (i = m == null ? void 0 : m.toString({ legacy: !0 })) !=
                          null
                          ? i
                          : "",
                        (l = p == null ? void 0 : p.toString({ legacy: !0 })) !=
                          null
                          ? l
                          : "",
                        e.toString({ legacy: !0 }),
                      );
              if (
                (yield (R || (R = n("Promise"))).all([
                  S,
                  u == null
                    ? void 0
                    : u.setHideMyIp(
                        (s = o("WAWebUserPrefsGeneral").getUserPrivacySettings()
                          .disallowAllP2p) != null
                          ? s
                          : !1,
                      ),
                ]),
                (u == null ? void 0 : u.type) === "web")
              )
                var L = new (o("WAWebCallWamEvent").CallWamEvent)(),
                  k = new (o(
                    "WAWebJoinableCallWamEvent",
                  ).JoinableCallWamEvent)();
              try {
                o("WAWebVoipNetworkMedium").startNetworkMediumMonitoring();
              } catch (e) {
                o("WALogger").WARN(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: network medium monitoring failed to start: ",
                      "",
                    ])),
                  e,
                );
              }
              if (
                ((u == null ? void 0 : u.type) === "web" &&
                  o("WAWebVoipCrashRecovery").initCrashRecovery(),
                (u == null ? void 0 : u.type) === "windows")
              ) {
                var T;
                E == null ||
                  (T = E(
                    r("WAWebWindowsHybridBridgeInitiator").WAWebVoipInit,
                  )) == null ||
                  (T = T.voip) == null ||
                  T.setHandlers(u.callbacks);
              }
              (o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.triggerVoipInitSuccess(),
                re(),
                o("WAWebCoreActionsODS").logCallVoipInitSuccess(),
                o("WAWebVoipQplHelpers").endVoipInitQplSuccess({
                  bool: { download_only: !1 },
                }));
            } catch (e) {
              o("WAWebVoipQplHelpers").endVoipInitQplFail("init_error");
              var D = e instanceof Error ? e.message : String(e),
                x =
                  r("WAWebEnvironment").isWindows &&
                  D.includes(
                    "Attempted to create Web stack in Windows environment",
                  );
              if (x) {
                (o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: init skipped on Windows Hybrid due to mis-resolve",
                    ])),
                ),
                  (P = !1),
                  o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.triggerVoipInitFailure());
                return;
              }
              t || o("WAWebCoreActionsODS").logCallVoipInitError();
              var N = X(e);
              (te(e, N, t),
                o("WALogger")
                  .ERROR(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: init failed: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("voip: init-failed"));
              var M =
                (N && Y()) ||
                o(
                  "WAWebVoipPthreadGlueFailureTracker",
                ).hasTerminalPthreadGlueFailure();
              ((P = !M),
                M &&
                  o("WAWebBackendApi").frontendFireAndForget(
                    "markVoipWasmArtifactUnavailable",
                  ),
                o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.triggerVoipInitFailure(
                  N ? "wasm_contract_mismatch" : null,
                ),
                ae());
            } finally {
              var w;
              ((w = j) == null || w.resolve(), (j = null));
            }
          }
        })),
        Q.apply(this, arguments)
      );
    }
    function X(e) {
      var t = e instanceof Error ? e.name + ": " + e.message : String(e),
        n =
          t.includes("LinkError") &&
          t.includes("function import requires a callable");
      return (
        n ||
        t.includes("No EM_ASM constant found") ||
        t.includes(
          o("WAWebVoipWasmArtifactSkewErrors").WORKER_GLUE_BUILD_MISMATCH_TOKEN,
        )
      );
    }
    function Y() {
      try {
        return r("justknobx")._("5809");
      } catch (e) {
        return !0;
      }
    }
    function J(e) {
      return e.includes("stack interface load timed out")
        ? "stack_interface_load"
        : e.includes("timeout waiting for RPC ready")
          ? "worker_rpc_ready"
          : e.includes(
                o("WAWebVoipWasmArtifactSkewErrors")
                  .WORKER_GLUE_BUILD_MISMATCH_TOKEN,
              )
            ? "worker_glue_handshake"
            : e.includes(
                  o("WAWebVoipWasmArtifactSkewErrors")
                    .PINNED_WORKER_GLUE_LOAD_FAILED_TOKEN,
                )
              ? "worker_glue_load"
              : e.includes("No EM_ASM constant found")
                ? "wasm_runtime"
                : e.includes("LinkError") || e.includes("WebAssembly")
                  ? "wasm_instantiate"
                  : "init";
    }
    function Z(e) {
      return e.includes(
        o("WAWebVoipWasmArtifactSkewErrors").WORKER_GLUE_BUILD_MISMATCH_TOKEN,
      )
        ? "worker_glue_skew"
        : e.includes(
              o("WAWebVoipWasmArtifactSkewErrors")
                .PINNED_WORKER_GLUE_LOAD_FAILED_TOKEN,
            )
          ? "worker_glue_pinned_load_failed"
          : e.includes("__cxa_current_primary_exception")
            ? "missing_cxa_primary_exception"
            : e.includes("fd_sync")
              ? "missing_fd_sync"
              : e.includes("invoke_")
                ? "missing_invoke_trampoline"
                : e.includes("No EM_ASM constant found")
                  ? "missing_em_asm"
                  : e.includes("LinkError")
                    ? "linkerror_other"
                    : "other";
    }
    function ee() {
      var e;
      return (e = o(
        "WAWebVoipWasmArtifactRegistry",
      ).getSelectedVoipWasmUri()) != null
        ? e
        : "unknown";
    }
    function te(e, t, n) {
      var r = e instanceof Error ? e.name + ": " + e.message : String(e);
      (t &&
        !n &&
        (o("WAWebCoreActionsODS").logCallVoipInitWasmContractMismatch(),
        r.includes(
          o("WAWebVoipWasmArtifactSkewErrors").WORKER_GLUE_BUILD_MISMATCH_TOKEN,
        ) &&
          o(
            "WAWebCoreActionsODS",
          ).logCallVoipInitWasmArtifactWorkerGlueSkewDetected()),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: init failure artifacts phase=",
              " fingerprint=",
              " expectedWasmUri=",
              "",
            ])),
          J(r),
          Z(r),
          ee(),
        ));
    }
    function ne() {
      if (M == null)
        try {
          M = Math.max(0, r("justknobx")._("4786"));
        } catch (e) {
          (o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: init retry count JK unavailable, using fallback=",
                ": ",
                "",
              ])),
            k,
            String(e),
          ),
            (M = k));
        }
      return M;
    }
    function re() {
      ((P = !1), (N = 0), (M = null), (w = null), (O = 0), ($ = null));
    }
    function oe() {
      var e = $;
      if (e == null) return { string: { trigger_source: x } };
      var t = { boot_defer_reason: e.reason, trigger_source: x },
        n = e.visibleWaitMs;
      return n == null
        ? { string: t }
        : { string: t, int: { boot_defer_visible_wait_ms: n } };
    }
    function ae() {
      A ||
        ((A = !0),
        (F = document.hidden),
        document.addEventListener("visibilitychange", function () {
          var e = F && !document.hidden;
          ((F = document.hidden),
            e &&
              ie().catch(function (e) {
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: visibility init check failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("voip-visibility-init-failed");
              }));
        }));
    }
    function ie() {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (B != null) return yield B;
          var e = se();
          B = e;
          try {
            return yield e;
          } finally {
            B === e && (B = null);
          }
        })),
        le.apply(this, arguments)
      );
    }
    function se() {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !document.hidden &&
            (j && (yield j.promise),
            !(
              document.hidden ||
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getIsVoipInited()
            ) &&
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getDidVoipInitError())
          ) {
            if (!ce()) {
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed();
              return;
            }
            if (!U()) {
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed();
              return;
            }
            var e = w != null;
            if (e) {
              (o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed(),
                yield V());
              return;
            }
            (de(),
              o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: retrying init after tab became visible",
                  ])),
              ),
              o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetryAttempt());
            var t = yield V();
            t &&
              o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetrySuccess();
          }
        })),
        ue.apply(this, arguments)
      );
    }
    function ce() {
      return O === 0 || Date.now() - O >= T;
    }
    function de() {
      O = Date.now();
    }
    function me() {
      return pe.apply(this, arguments);
    }
    function pe() {
      return (
        (pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield new (R || (R = n("Promise")))(function (e) {
            o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
              return e();
            });
          });
        })),
        pe.apply(this, arguments)
      );
    }
    ((l.VoipInitEventEmitter = o(
      "WAWebVoipInitEventEmitter",
    ).VoipInitEventEmitter),
      (l.initWAWebVoip = W),
      (l.canRetryWAWebVoipInitAfterFailure = U),
      (l.retryWAWebVoipInitAfterFailure = V));
  },
  98,
);
