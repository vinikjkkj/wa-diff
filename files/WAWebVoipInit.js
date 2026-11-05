__d(
  "WAWebVoipInit",
  [
    "Promise",
    "WALogger",
    "WAPromiseTimeout",
    "WAResolvable",
    "WAWebBackendApi",
    "WAWebBoolFunc",
    "WAWebCallWamEvent",
    "WAWebCoreActionsODS",
    "WAWebCountryCodeUtils",
    "WAWebEnvironment",
    "WAWebJoinableCallWamEvent",
    "WAWebODS",
    "WAWebPageVisibilityRecency",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebVoipBackgroundWarmConditions",
    "WAWebVoipBootInitDecision",
    "WAWebVoipBrowserAudioStatus",
    "WAWebVoipCrashRecovery",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipGatingUtils",
    "WAWebVoipHiddenPrewarmIdleWork",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipInitFailureRecovery",
    "WAWebVoipInitOutcomeLog",
    "WAWebVoipInitReliabilityGates",
    "WAWebVoipLastCallLogging",
    "WAWebVoipLastCallStore",
    "WAWebVoipNetworkMedium",
    "WAWebVoipPthreadGlueFailureTracker",
    "WAWebVoipQplHelpers",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "WAWebVoipWasmArtifactRecoveryEvents",
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
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P = (e = n("cr:17219")) != null ? e : {},
      N = P.getWindowsBridge,
      M = 1,
      w = 5e3,
      A = 60 * 1e3,
      F = 5e3,
      O,
      B = "prewarm",
      W = null,
      q = null,
      U = null,
      V = null,
      H = !1,
      G = !1,
      z = null,
      j = 0,
      K = null,
      Q = null,
      X = 0,
      Y = !1,
      J = !1,
      Z = 0,
      ee = null;
    function te(e, t, n, r, o) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            e === void 0 && (e = "prewarm");
            var i = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
            if (i == null) {
              (o("WALogger").WARN(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: init skipped, selfLid not available yet",
                  ])),
              ),
                (H = !0),
                o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.triggerVoipInitFailure());
              return;
            }
            if (!i.equals(O))
              ((O = i),
                (B = e),
                Ie(),
                (W = t),
                (q = n),
                (U = r),
                (V = a),
                yield fe(i));
            else {
              if (t != null) {
                var l = B === "prewarm" ? "prewarm_owned" : "intent_owned";
                o(
                  "WAWebVoipDeferredBootLogging",
                ).safelyLogVoipDeferredBootEvent(function () {
                  o("WAWebCoreActionsODS").logCallVoipBootInitFired(l);
                });
              }
              _e && (yield _e.promise, Ge(e) && (yield te(e, t, n, r, a)));
            }
          },
        )),
        ne.apply(this, arguments)
      );
    }
    function re() {
      return (
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getDidVoipInitError() &&
        H &&
        j < ke()
      );
    }
    function oe() {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (Q != null) return yield Q;
          var e = me();
          Q = e;
          try {
            return yield e;
          } finally {
            Q === e && (Q = null);
          }
        })),
        ae.apply(this, arguments)
      );
    }
    function ie(e) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited()
            ? !0
            : (at(),
              o(
                "WAWebVoipWasmArtifactRecoveryEvents",
              ).emitVoipWasmArtifactRecovered(),
              yield ce({ artifact_recovery_attempt: e }));
        })),
        le.apply(this, arguments)
      );
    }
    function se(e, t) {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited()
            ? !0
            : yield ce({ init_recovery_attempt: e }, t);
        })),
        ue.apply(this, arguments)
      );
    }
    function ce(e, t) {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            (t === void 0 && (t = o("WAWebBoolFunc").returnTrue),
            _e != null &&
              (yield _e.promise,
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getIsVoipInited()))
          )
            return !0;
          if (!t()) return !1;
          ((O = null),
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.markVoipInitUntried(),
            (z = e));
          try {
            yield te(B);
          } finally {
            z = null;
          }
          return o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited();
        })),
        de.apply(this, arguments)
      );
    }
    function me() {
      return pe.apply(this, arguments);
    }
    function pe() {
      return (
        (pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            _e &&
            (yield _e.promise,
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited())
          )
            return !0;
          if (!re())
            return o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited();
          var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (e == null) return !1;
          (j++,
            r("WAWebODS").incr("web.call.voip_init.retry_attempt"),
            (O = e),
            o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: retrying init after transient failure attempt=",
                  " max=",
                  "",
                ])),
              j,
              ke(),
            ));
          var t = X,
            n = yield tt();
          if (
            t !== X ||
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited()
          ) {
            var a;
            return (
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: skip retry, a newer init started in idle wait",
                  ])),
              ),
              yield (a = _e) == null ? void 0 : a.promise,
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getIsVoipInited()
            );
          }
          var i = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (i == null || !e.equals(i))
            return (
              o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: skip retry, identity changed in idle wait",
                  ])),
              ),
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getIsVoipInited()
            );
          yield fe(e, !0, n);
          var l = o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited();
          return (
            l
              ? o("WAWebCoreActionsODS").logCallVoipInitRetrySuccess()
              : (r("WAWebODS").incr("web.call.voip_init.retry_failure"),
                re() ||
                  r("WAWebODS").incr("web.call.voip_init.retry_exhausted")),
            l
          );
        })),
        pe.apply(this, arguments)
      );
    }
    var _e = null;
    function fe(e, t, n) {
      return ge.apply(this, arguments);
    }
    function ge() {
      return (
        (ge = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a) {
            if (
              (t === void 0 && (t = !1),
              o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
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
                _e &&
                (yield _e.promise,
                o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.getIsVoipInited() ||
                  o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.getDidVoipInitError())
              ) {
                o("WALogger").LOG(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: init already done, ignoring duplicate call",
                    ])),
                );
                return;
              }
              _e = new (o("WAResolvable").Resolvable)();
              var i = W,
                l = Be(i, t);
              (!t &&
                i != null &&
                o(
                  "WAWebVoipDeferredBootLogging",
                ).safelyLogVoipDeferredBootEvent(function () {
                  o("WAWebCoreActionsODS").logCallVoipBootInitFired(i.reason);
                }),
                o("WAWebVoipQplHelpers").startVoipInitQpl(Me()),
                l || o("WAWebVoipInitOutcomeLog").logVoipInitAttemptOnce(we(i)),
                Te(t, a),
                De(),
                $e(t));
              try {
                var s, u, c;
                if (
                  (o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.markVoipInitAttemptStarted(
                    B === "prewarm" &&
                      (!t ||
                        o(
                          "WAWebVoipInitEventEmitter",
                        ).VoipInitEventEmitter.getVoipWebStackCreatedAtMs() !=
                          null),
                  ),
                  o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.markVoipInitTrigger(we(i)),
                  o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling())
                ) {
                  (o("WALogger").LOG(
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: init skipped due to unsupported browser",
                      ])),
                  ),
                    o("WAWebCoreActionsODS").logCallVoipInitSkipUnsupported(),
                    o("WAWebVoipQplHelpers").endVoipInitQplFail(
                      "unsupported_browser",
                    ),
                    (H = !1),
                    o(
                      "WAWebVoipInitEventEmitter",
                    ).VoipInitEventEmitter.triggerVoipInitFailure());
                  return;
                }
                (Ke(),
                  o(
                    "WAWebVoipBrowserAudioStatus",
                  ).preDetectBrowserAudioCapabilities(),
                  ot());
                var d = yield o(
                  "WAWebVoipStackInterface",
                ).getVoipStackInterface();
                if ((d == null ? void 0 : d.type) === "windows") {
                  var m = null;
                  try {
                    m = yield o("WAPromiseTimeout").promiseTimeout(
                      o("WAWebCountryCodeUtils").getMyCallingCode(),
                      w,
                    );
                  } catch (e) {
                    o("WALogger")
                      .WARN(
                        k ||
                          (k = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: getMyCallingCode failed or timed out, using fallback: ",
                            "",
                          ])),
                        String(e),
                      )
                      .sendLogs("voip-get-self-country-code-failed");
                  }
                  try {
                    yield d.setSelfCountryCode(m != null ? m : "");
                  } catch (e) {
                    o("WALogger")
                      .WARN(
                        I ||
                          (I = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: setSelfCountryCode failed, continuing init: ",
                            "",
                          ])),
                        String(e),
                      )
                      .sendLogs("voip-set-self-country-code-failed");
                  }
                }
                var p = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
                  _ = p != null && !p.isLid() ? p : null,
                  f =
                    _ != null ? o("WAWebWidFactory").asUserWidOrThrow(_) : null,
                  g =
                    d == null
                      ? void 0
                      : d.voipInit(
                          (s =
                            _ == null ? void 0 : _.toString({ legacy: !0 })) !=
                            null
                            ? s
                            : "",
                          (u =
                            f == null ? void 0 : f.toString({ legacy: !0 })) !=
                            null
                            ? u
                            : "",
                          e.toString({ legacy: !0 }),
                        );
                if (
                  (yield ($ || ($ = n("Promise"))).all([
                    g,
                    d == null
                      ? void 0
                      : d.setHideMyIp(
                          (c = o(
                            "WAWebUserPrefsGeneral",
                          ).getUserPrivacySettings().disallowAllP2p) != null
                            ? c
                            : !1,
                        ),
                  ]),
                  (d == null ? void 0 : d.type) === "web")
                )
                  var h = new (o("WAWebCallWamEvent").CallWamEvent)(),
                    y = new (o(
                      "WAWebJoinableCallWamEvent",
                    ).JoinableCallWamEvent)();
                try {
                  o("WAWebVoipNetworkMedium").startNetworkMediumMonitoring();
                } catch (e) {
                  o("WALogger").WARN(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: network medium monitoring failed to start: ",
                        "",
                      ])),
                    e,
                  );
                }
                if (
                  ((d == null ? void 0 : d.type) === "web" &&
                    o("WAWebVoipCrashRecovery").initCrashRecovery(),
                  (d == null ? void 0 : d.type) === "windows")
                ) {
                  var C;
                  N == null ||
                    (C = N(
                      r("WAWebWindowsHybridBridgeInitiator").WAWebVoipInit,
                    )) == null ||
                    (C = C.voip) == null ||
                    C.setHandlers(d.callbacks);
                }
                (We(l),
                  o("WAWebVoipInitOutcomeLog").logVoipInitReadyOnce(Ae(i)),
                  Ie(),
                  qe(l),
                  o("WAWebVoipQplHelpers").endVoipInitQplSuccess({
                    bool: { download_only: !1 },
                  }));
              } catch (e) {
                o("WAWebVoipQplHelpers").endVoipInitQplFail(
                  "init_error",
                  ve(e),
                );
                var b = e instanceof Error ? e.message : String(e),
                  v =
                    r("WAWebEnvironment").isWindows &&
                    b.includes(
                      "Attempted to create Web stack in Windows environment",
                    );
                if (v) {
                  (o("WALogger").LOG(
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: init skipped on Windows Hybrid due to mis-resolve",
                      ])),
                  ),
                    (H = !1),
                    o(
                      "WAWebVoipInitEventEmitter",
                    ).VoipInitEventEmitter.triggerVoipInitFailure());
                  return;
                }
                ((G = !0), Ue(t, l));
                var S = he(e);
                (Ee(e, S, t), je(e, l));
                var x =
                  (S && ye()) ||
                  o(
                    "WAWebVoipPthreadGlueFailureTracker",
                  ).hasTerminalPthreadGlueFailure();
                ((H = !x),
                  x &&
                    o("WAWebBackendApi").frontendFireAndForget(
                      "markVoipWasmArtifactUnavailable",
                    ),
                  Ve(l, S),
                  o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.getDidVoipInitError() &&
                    !re() &&
                    o("WAWebVoipInitOutcomeLog").logVoipInitDeadOnce(e),
                  He(e),
                  Ke());
              } finally {
                var P;
                (o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.markVoipInitAttemptEnded(),
                  (P = _e) == null || P.resolve(),
                  (_e = null));
              }
            }
          },
        )),
        ge.apply(this, arguments)
      );
    }
    function he(e) {
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
    function ye() {
      try {
        return r("justknobx")._("5809");
      } catch (e) {
        return !0;
      }
    }
    function Ce(e) {
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
    function be(e) {
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
    function ve(e) {
      var t = e instanceof Error ? e.name + ": " + e.message : String(e);
      return {
        int: {
          failure_fingerprint_code: Re(be(t)),
          failure_phase_code: Se(Ce(t)),
        },
      };
    }
    function Se(e) {
      return e === "stack_interface_load"
        ? 1
        : e === "worker_rpc_ready"
          ? 2
          : e === "worker_glue_handshake"
            ? 3
            : e === "worker_glue_load"
              ? 4
              : e === "wasm_runtime"
                ? 5
                : e === "wasm_instantiate"
                  ? 6
                  : e === "init"
                    ? 7
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            e,
                        );
                      })();
    }
    function Re(e) {
      return e === "worker_glue_skew"
        ? 1
        : e === "worker_glue_pinned_load_failed"
          ? 2
          : e === "missing_cxa_primary_exception"
            ? 3
            : e === "missing_fd_sync"
              ? 4
              : e === "missing_invoke_trampoline"
                ? 5
                : e === "missing_em_asm"
                  ? 6
                  : e === "linkerror_other"
                    ? 7
                    : e === "other"
                      ? 8
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              e,
                          );
                        })();
    }
    function Le() {
      var e;
      return (e = o(
        "WAWebVoipWasmArtifactRegistry",
      ).getSelectedVoipWasmUri()) != null
        ? e
        : "unknown";
    }
    function Ee(e, t, n) {
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
          Ce(r),
          be(r),
          Le(),
        ));
    }
    function ke() {
      if (K == null)
        try {
          K = Math.max(0, r("justknobx")._("4786"));
        } catch (e) {
          (o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: init retry count JK unavailable, using fallback=",
                ": ",
                "",
              ])),
            M,
            String(e),
          ),
            (K = M));
        }
      return K;
    }
    function Ie() {
      (X++,
        (H = !1),
        (j = 0),
        (K = null),
        (Q = null),
        (Z = 0),
        (W = null),
        (q = null),
        (U = null),
        (V = null));
    }
    function Te(e, t) {
      try {
        (o("WAWebVoipQplHelpers").voipInitQplAnnotateStart({
          bootDecision: o(
            "WAWebVoipBootInitDecision",
          ).getVoipBootInitDecision(),
          bootDecisionReason: o(
            "WAWebVoipBootInitDecision",
          ).getVoipBootInitDecisionReason(),
          isRetry: e,
        }),
          o("WAWebVoipQplHelpers").voipInitQplAnnotateTrigger(xe(e)),
          t != null &&
            o("WAWebVoipQplHelpers").voipInitQplAnnotateRetryIdleWait(t));
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
    function De() {
      try {
        o("WAWebVoipLastCallLogging").logVoipLastCallAtInit(
          o("WAWebVoipLastCallStore").getBootLastCall(),
        );
      } catch (e) {
        o("WALogger")
          .WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: last call logging failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
    }
    function xe(e) {
      var t;
      return (t = e ? null : V) != null
        ? t
        : o("WAWebPageVisibilityRecency").snapshotPageVisibility();
    }
    function $e(e) {
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          !e &&
            o("WAWebVoipBootInitDecision").getVoipBootInitDecision() ===
              "deferred" &&
            o("WAWebCoreActionsODS").logCallVoipInitDeferredStart(Pe());
        },
      );
    }
    function Pe() {
      return B === "call"
        ? "call"
        : B === "incoming"
          ? Ne(q)
          : B === "prewarm"
            ? W == null
              ? "prewarm_unscheduled"
              : "prewarm_scheduled"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    B,
                );
              })();
    }
    function Ne(e) {
      return e == null
        ? "incoming_other"
        : e.isGroup
          ? "incoming_group"
          : e.msgType !== o("WAWebVoipSignalingEnums").TYPE.OFFER
            ? "incoming_other"
            : e.isCallEnded
              ? "incoming_offer_ended"
              : e.isFreshOffer
                ? "incoming_offer_fresh"
                : "incoming_offer_queued_30s_plus";
    }
    function Me() {
      var e = babelHelpers.extends({}, z, { trigger_code: Fe(B) });
      U != null && (e.intent_backend_load_ms = U);
      var t = { trigger_source: B },
        n = W;
      n != null &&
        ((t.boot_defer_reason = n.reason),
        (e.boot_defer_reason_code = Oe(n.reason)),
        n.waitMs != null && (e.boot_defer_wait_ms = n.waitMs));
      var r = q;
      return r == null
        ? { int: e, string: t }
        : ((e.incoming_msg_type = r.msgType),
          (e.incoming_queued_ms = r.queuedMs),
          (t.incoming_payload_tag = r.payloadTag),
          {
            bool: {
              incoming_call_ended: r.isCallEnded,
              incoming_fresh_offer: r.isFreshOffer,
              incoming_is_group: r.isGroup,
              incoming_offline: r.isOffline,
            },
            int: e,
            string: t,
          });
    }
    function we(e) {
      var t;
      return B === "prewarm"
        ? (t = e == null ? void 0 : e.reason) != null
          ? t
          : "boot"
        : B === "call"
          ? "call"
          : B === "incoming"
            ? "incoming"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    B,
                );
              })();
    }
    function Ae(e) {
      return e != null ? "deferred" : B === "prewarm" ? "eager" : "intent";
    }
    function Fe(e) {
      return e === "prewarm"
        ? 1
        : e === "call"
          ? 2
          : e === "incoming"
            ? 3
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function Oe(e) {
      return e === "deadline"
        ? 1
        : e === "scheduler_error"
          ? 2
          : e === "hidden_prewarm"
            ? 3
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function Be(e, t) {
      return !t && (e == null ? void 0 : e.reason) === "hidden_prewarm";
    }
    function We(e) {
      (e &&
        o("WAWebVoipHiddenPrewarmIdleWork").watchTabFromHiddenPrewarmSuccess(),
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.triggerVoipInitSuccess(e));
    }
    function qe(e) {
      (o("WAWebCoreActionsODS").logCallVoipInitSuccess(), e && ze("success"));
    }
    function Ue(e, t) {
      t ? ze("failure") : e || o("WAWebCoreActionsODS").logCallVoipInitError();
    }
    function Ve(e, t) {
      if (e && H) {
        ((O = null),
          o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.markVoipInitUntried(),
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] hidden_prewarm init failed, VoIP left untried",
                  ])),
              );
            },
          ));
        return;
      }
      o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.triggerVoipInitFailure(
        t ? "wasm_contract_mismatch" : null,
      );
    }
    function He(e) {
      o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.getDidVoipInitError() &&
        (H && o("WAWebVoipInitFailureRecovery").isRecoverableVoipInitFailure(e)
          ? o("WAWebVoipInitFailureRecovery").armVoipInitFailureRecovery(se)
          : o("WAWebVoipInitFailureRecovery").stopVoipInitFailureRecovery());
    }
    function Ge(e) {
      return (
        e !== "prewarm" &&
        !o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getIsVoipInited() &&
        !o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getDidVoipInitError()
      );
    }
    function ze(e) {
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          var t = !document.hidden && document.hasFocus();
          (o("WAWebCoreActionsODS").logCallVoipBootHiddenPrewarmInit(e),
            t &&
              o("WAWebCoreActionsODS").logCallVoipBootHiddenPrewarmInit(
                "ended_visible",
              ),
            e === "success" &&
              o("WAWebCoreActionsODS").logCallVoipBootHiddenPrewarmPostInit(
                document.hidden ? "hidden" : "visible",
              ),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] hidden_prewarm init_end outcome=",
                  " visible_focused=",
                  "",
                ])),
              e,
              String(t),
            ));
        },
      );
    }
    function je(e, t) {
      var n = o("WALogger").ERROR(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "voip: init failed: ",
              "",
            ])),
          e,
        ),
        r = t ? n.tags("non-sad") : n;
      r.sendLogs("voip: init-failed");
    }
    function Ke() {
      Y ||
        ((Y = !0),
        (J = document.hidden),
        document.addEventListener("visibilitychange", function () {
          var e = J && !document.hidden;
          ((J = document.hidden),
            e &&
              Qe().catch(function (e) {
                o("WALogger")
                  .ERROR(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: visibility init check failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("voip-visibility-init-failed");
              }));
        }));
    }
    function Qe() {
      return Xe.apply(this, arguments);
    }
    function Xe() {
      return (
        (Xe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (ee != null) return yield ee;
          var e = Ye();
          ee = e;
          try {
            return yield e;
          } finally {
            ee === e && (ee = null);
          }
        })),
        Xe.apply(this, arguments)
      );
    }
    function Ye() {
      return Je.apply(this, arguments);
    }
    function Je() {
      return (
        (Je = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !document.hidden &&
            (_e && (yield _e.promise),
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
            if (!Ze()) {
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed();
              return;
            }
            if (!re()) {
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed();
              return;
            }
            var e = Q != null;
            if (e) {
              (o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed(),
                yield oe());
              return;
            }
            (et(),
              o("WALogger").LOG(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: retrying init after tab became visible",
                  ])),
              ),
              r("WAWebODS").incr(
                "web.call.voip_init.visibility_retry_attempt",
              ));
            var t = yield oe();
            t &&
              r("WAWebODS").incr("web.call.voip_init.visibility_retry_success");
          }
        })),
        Je.apply(this, arguments)
      );
    }
    function Ze() {
      return Z === 0 || Date.now() - Z >= A;
    }
    function et() {
      Z = Date.now();
    }
    function tt() {
      return nt.apply(this, arguments);
    }
    function nt() {
      return (
        (nt = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = document.hidden;
          e &&
            r("WAWebODS").incr(
              "web.call.voip_init.retry_idle_wait.started_hidden",
            );
          var t = self.performance.now();
          yield o("WAWebVoipBackgroundWarmConditions").waitForIdleCallback(
            rt(e),
          );
          var n = {
            endedHidden: document.hidden,
            startedHidden: e,
            waitMs: Math.round(self.performance.now() - t),
          };
          return (st(n), n);
        })),
        nt.apply(this, arguments)
      );
    }
    function rt(e) {
      return e && lt()
        ? o("WAWebVoipHiddenPrewarmIdleWork").HIDDEN_TAB_IDLE_FALLBACK_MS
        : null;
    }
    function ot() {
      G && it() && at();
    }
    function at() {
      ((G = !1),
        o("WAWebVoipWasmArtifactRecoveryEvents").requestVoipWasmReload());
    }
    function it() {
      try {
        return o("WAWebVoipInitReliabilityGates").isVoipInitWasmEnvFixEnabled();
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: WASM reload gate failed",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          !1
        );
      }
    }
    function lt() {
      try {
        return o(
          "WAWebVoipBootInitDecision",
        ).isDeferredVoipBootHiddenPrewarmEnabled();
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: hidden prewarm gate failed",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          !1
        );
      }
    }
    function st(e) {
      var t = e.endedHidden,
        n = e.startedHidden,
        a = e.waitMs;
      (o("WALogger").LOG(
        y ||
          (y = babelHelpers.taggedTemplateLiteralLoose([
            "voip: init retry idle wait ms=",
            " started_hidden=",
            " ended_hidden=",
            "",
          ])),
        a,
        String(n),
        String(t),
      ),
        n &&
          (r("WAWebODS").incr(
            "web.call.voip_init.retry_idle_wait.hidden_ended",
          ),
          a >= F &&
            r("WAWebODS").incr(
              "web.call.voip_init.retry_idle_wait.hidden_long",
            )));
    }
    ((l.VoipInitEventEmitter = o(
      "WAWebVoipInitEventEmitter",
    ).VoipInitEventEmitter),
      (l.initWAWebVoip = te),
      (l.canRetryWAWebVoipInitAfterFailure = re),
      (l.retryWAWebVoipInitAfterFailure = oe),
      (l.restartVoipInitAfterArtifactRecovery = ie));
  },
  98,
);
