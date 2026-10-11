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
    "WAWebVoipBootInitDecision",
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
      L,
      E = (e = n("cr:17219")) != null ? e : {},
      k = E.getWindowsBridge,
      I = 1,
      T = 5e3,
      D = 60 * 1e3,
      x,
      $ = "prewarm",
      P = null,
      N = !1,
      M = 0,
      w = null,
      A = null,
      F = !1,
      O = !1,
      B = 0,
      W = null;
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          e === void 0 && (e = "prewarm");
          var n = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (n == null) {
            (o("WALogger").WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: init skipped, selfLid not available yet",
                ])),
            ),
              (N = !0),
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.triggerVoipInitFailure());
            return;
          }
          if (!n.equals(x)) ((x = n), ($ = e), oe(), (P = t), yield Q(n));
          else {
            if (t != null) {
              var r = $ === "prewarm" ? "prewarm_owned" : "intent_owned";
              o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  o("WAWebCoreActionsODS").logCallVoipBootInitFired(r);
                },
              );
            }
            K && (yield K.promise);
          }
        })),
        U.apply(this, arguments)
      );
    }
    function V() {
      return (
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getDidVoipInitError() &&
        N &&
        M < re()
      );
    }
    function H() {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (A != null) return yield A;
          var e = z();
          A = e;
          try {
            return yield e;
          } finally {
            A === e && (A = null);
          }
        })),
        G.apply(this, arguments)
      );
    }
    function z() {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            K &&
            (yield K.promise,
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited())
          )
            return !0;
          if (!V())
            return o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited();
          var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (e == null) return !1;
          (M++,
            o("WAWebCoreActionsODS").logCallVoipInitRetryAttempt(),
            (x = e),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: retrying init after transient failure attempt=",
                  " max=",
                  "",
                ])),
              M,
              re(),
            ),
            yield _e());
          var t = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (t == null || !e.equals(t))
            return (
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: skip retry, identity changed in idle wait",
                  ])),
              ),
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getIsVoipInited()
            );
          yield Q(e, !0);
          var n = o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited();
          return (
            n
              ? o("WAWebCoreActionsODS").logCallVoipInitRetrySuccess()
              : (o("WAWebCoreActionsODS").logCallVoipInitRetryFailure(),
                V() ||
                  o("WAWebCoreActionsODS").logCallVoipInitRetryExhausted()),
            n
          );
        })),
        j.apply(this, arguments)
      );
    }
    var K = null;
    function Q(e, t) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            (t === void 0 && (t = !1),
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
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
              K &&
              (yield K.promise,
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getIsVoipInited() ||
                o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.getDidVoipInitError())
            ) {
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: init already done, ignoring duplicate call",
                  ])),
              );
              return;
            }
            K = new (o("WAResolvable").Resolvable)();
            var a = P;
            (!t &&
              a != null &&
              o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  o("WAWebCoreActionsODS").logCallVoipBootInitFired(a.reason);
                },
              ),
              o("WAWebVoipQplHelpers").startVoipInitQpl(ie()),
              ae(t));
            try {
              var i, l, s;
              if (
                o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling()
              ) {
                (o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: init skipped due to unsupported browser",
                    ])),
                ),
                  o("WAWebCoreActionsODS").logCallVoipInitSkipUnsupported(),
                  o("WAWebVoipQplHelpers").endVoipInitQplFail(
                    "unsupported_browser",
                  ),
                  (N = !1),
                  o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.triggerVoipInitFailure());
                return;
              }
              (le(),
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
                    T,
                  );
                } catch (e) {
                  o("WALogger")
                    .WARN(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
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
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
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
                _ =
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
                (yield (L || (L = n("Promise"))).all([
                  _,
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
                var R = new (o("WAWebCallWamEvent").CallWamEvent)(),
                  E = new (o(
                    "WAWebJoinableCallWamEvent",
                  ).JoinableCallWamEvent)();
              try {
                o("WAWebVoipNetworkMedium").startNetworkMediumMonitoring();
              } catch (e) {
                o("WALogger").WARN(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
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
                var I;
                k == null ||
                  (I = k(
                    r("WAWebWindowsHybridBridgeInitiator").WAWebVoipInit,
                  )) == null ||
                  (I = I.voip) == null ||
                  I.setHandlers(u.callbacks);
              }
              (o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.triggerVoipInitSuccess(),
                oe(),
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
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: init skipped on Windows Hybrid due to mis-resolve",
                    ])),
                ),
                  (N = !1),
                  o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.triggerVoipInitFailure());
                return;
              }
              t || o("WAWebCoreActionsODS").logCallVoipInitError();
              var $ = Y(e);
              (ne(e, $, t),
                o("WALogger")
                  .ERROR(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: init failed: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("voip: init-failed"));
              var M =
                ($ && J()) ||
                o(
                  "WAWebVoipPthreadGlueFailureTracker",
                ).hasTerminalPthreadGlueFailure();
              ((N = !M),
                M &&
                  o("WAWebBackendApi").frontendFireAndForget(
                    "markVoipWasmArtifactUnavailable",
                  ),
                o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.triggerVoipInitFailure(
                  $ ? "wasm_contract_mismatch" : null,
                ),
                le());
            } finally {
              var w;
              ((w = K) == null || w.resolve(), (K = null));
            }
          }
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e) {
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
    function J() {
      try {
        return r("justknobx")._("5809");
      } catch (e) {
        return !0;
      }
    }
    function Z(e) {
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
    function ee(e) {
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
    function te() {
      var e;
      return (e = o(
        "WAWebVoipWasmArtifactRegistry",
      ).getSelectedVoipWasmUri()) != null
        ? e
        : "unknown";
    }
    function ne(e, t, n) {
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
          Z(r),
          ee(r),
          te(),
        ));
    }
    function re() {
      if (w == null)
        try {
          w = Math.max(0, r("justknobx")._("4786"));
        } catch (e) {
          (o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: init retry count JK unavailable, using fallback=",
                ": ",
                "",
              ])),
            I,
            String(e),
          ),
            (w = I));
        }
      return w;
    }
    function oe() {
      ((N = !1), (M = 0), (w = null), (A = null), (B = 0), (P = null));
    }
    function ae(e) {
      try {
        o("WAWebVoipQplHelpers").voipInitQplAnnotateStart({
          bootDecision: o(
            "WAWebVoipBootInitDecision",
          ).getVoipBootInitDecision(),
          isRetry: e,
        });
      } catch (e) {
        o("WALogger")
          .WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: init start annotation failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
    }
    function ie() {
      var e = P;
      if (e == null) return { string: { trigger_source: $ } };
      var t = { boot_defer_reason: e.reason, trigger_source: $ },
        n = e.waitMs;
      return n == null
        ? { string: t }
        : { string: t, int: { boot_defer_wait_ms: n } };
    }
    function le() {
      F ||
        ((F = !0),
        (O = document.hidden),
        document.addEventListener("visibilitychange", function () {
          var e = O && !document.hidden;
          ((O = document.hidden),
            e &&
              se().catch(function (e) {
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: visibility init check failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("voip-visibility-init-failed");
              }));
        }));
    }
    function se() {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (W != null) return yield W;
          var e = ce();
          W = e;
          try {
            return yield e;
          } finally {
            W === e && (W = null);
          }
        })),
        ue.apply(this, arguments)
      );
    }
    function ce() {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !document.hidden &&
            (K && (yield K.promise),
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
            if (!me()) {
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed();
              return;
            }
            if (!V()) {
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed();
              return;
            }
            var e = A != null;
            if (e) {
              (o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed(),
                yield H());
              return;
            }
            (pe(),
              o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: retrying init after tab became visible",
                  ])),
              ),
              o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetryAttempt());
            var t = yield H();
            t &&
              o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetrySuccess();
          }
        })),
        de.apply(this, arguments)
      );
    }
    function me() {
      return B === 0 || Date.now() - B >= D;
    }
    function pe() {
      B = Date.now();
    }
    function _e() {
      return fe.apply(this, arguments);
    }
    function fe() {
      return (
        (fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield new (L || (L = n("Promise")))(function (e) {
            o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
              return e();
            });
          });
        })),
        fe.apply(this, arguments)
      );
    }
    ((l.VoipInitEventEmitter = o(
      "WAWebVoipInitEventEmitter",
    ).VoipInitEventEmitter),
      (l.initWAWebVoip = q),
      (l.canRetryWAWebVoipInitAfterFailure = V),
      (l.retryWAWebVoipInitAfterFailure = H));
  },
  98,
);
