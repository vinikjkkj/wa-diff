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
    "WAWebVoipLastCallLogging",
    "WAWebVoipLastCallStore",
    "WAWebVoipNetworkMedium",
    "WAWebVoipPthreadGlueFailureTracker",
    "WAWebVoipQplHelpers",
    "WAWebVoipSignalingEnums",
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
      E,
      k,
      I,
      T,
      D,
      x = (e = n("cr:17219")) != null ? e : {},
      $ = x.getWindowsBridge,
      P = 1,
      N = 5e3,
      M = 60 * 1e3,
      w = 5e3,
      A,
      F = "prewarm",
      O = null,
      B = null,
      W = null,
      q = null,
      U = !1,
      V = 0,
      H = null,
      G = null,
      z = !1,
      j = !1,
      K = 0,
      Q = null;
    function X(e, t, n, r, o) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            e === void 0 && (e = "prewarm");
            var i = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
            if (i == null) {
              (o("WALogger").WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: init skipped, selfLid not available yet",
                  ])),
              ),
                (U = !0),
                o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.triggerVoipInitFailure());
              return;
            }
            if (!i.equals(A))
              ((A = i),
                (F = e),
                ge(),
                (O = t),
                (B = n),
                (W = r),
                (q = a),
                yield oe(i));
            else {
              if (t != null) {
                var l = F === "prewarm" ? "prewarm_owned" : "intent_owned";
                o(
                  "WAWebVoipDeferredBootLogging",
                ).safelyLogVoipDeferredBootEvent(function () {
                  o("WAWebCoreActionsODS").logCallVoipBootInitFired(l);
                });
              }
              re && (yield re.promise, Pe(e) && (yield X(e, t, n, r, a)));
            }
          },
        )),
        Y.apply(this, arguments)
      );
    }
    function J() {
      return (
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getDidVoipInitError() &&
        U &&
        V < fe()
      );
    }
    function Z() {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (G != null) return yield G;
          var e = te();
          G = e;
          try {
            return yield e;
          } finally {
            G === e && (G = null);
          }
        })),
        ee.apply(this, arguments)
      );
    }
    function te() {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            re &&
            (yield re.promise,
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited())
          )
            return !0;
          if (!J())
            return o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited();
          var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (e == null) return !1;
          (V++,
            o("WAWebCoreActionsODS").logCallVoipInitRetryAttempt(),
            (A = e),
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: retrying init after transient failure attempt=",
                  " max=",
                  "",
                ])),
              V,
              fe(),
            ));
          var t = yield Ue(),
            n = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (n == null || !e.equals(n))
            return (
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: skip retry, identity changed in idle wait",
                  ])),
              ),
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getIsVoipInited()
            );
          yield oe(e, !0, t);
          var r = o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited();
          return (
            r
              ? o("WAWebCoreActionsODS").logCallVoipInitRetrySuccess()
              : (o("WAWebCoreActionsODS").logCallVoipInitRetryFailure(),
                J() ||
                  o("WAWebCoreActionsODS").logCallVoipInitRetryExhausted()),
            r
          );
        })),
        ne.apply(this, arguments)
      );
    }
    var re = null;
    function oe(e, t, n) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a) {
            if (
              (t === void 0 && (t = !1),
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
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
                re &&
                (yield re.promise,
                o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.getIsVoipInited() ||
                  o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.getDidVoipInitError())
              ) {
                o("WALogger").LOG(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: init already done, ignoring duplicate call",
                    ])),
                );
                return;
              }
              re = new (o("WAResolvable").Resolvable)();
              var i = O,
                l = Ie(i, t);
              (!t &&
                i != null &&
                o(
                  "WAWebVoipDeferredBootLogging",
                ).safelyLogVoipDeferredBootEvent(function () {
                  o("WAWebCoreActionsODS").logCallVoipBootInitFired(i.reason);
                }),
                o("WAWebVoipQplHelpers").startVoipInitQpl(Re()),
                he(t, a),
                ye(),
                be(t));
              try {
                var s, u, c;
                if (
                  (o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.markVoipInitAttemptStarted(
                    F === "prewarm" &&
                      (!t ||
                        o(
                          "WAWebVoipInitEventEmitter",
                        ).VoipInitEventEmitter.getVoipWebStackCreatedAtMs() !=
                          null),
                  ),
                  o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.markVoipInitTrigger(Le(i)),
                  o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling())
                ) {
                  (o("WALogger").LOG(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: init skipped due to unsupported browser",
                      ])),
                  ),
                    o("WAWebCoreActionsODS").logCallVoipInitSkipUnsupported(),
                    o("WAWebVoipQplHelpers").endVoipInitQplFail(
                      "unsupported_browser",
                    ),
                    (U = !1),
                    o(
                      "WAWebVoipInitEventEmitter",
                    ).VoipInitEventEmitter.triggerVoipInitFailure());
                  return;
                }
                (we(),
                  o(
                    "WAWebVoipBrowserAudioStatus",
                  ).preDetectBrowserAudioCapabilities());
                var d = yield o(
                  "WAWebVoipStackInterface",
                ).getVoipStackInterface();
                if ((d == null ? void 0 : d.type) === "windows") {
                  var m = null;
                  try {
                    m = yield o("WAPromiseTimeout").promiseTimeout(
                      o("WAWebCountryCodeUtils").getMyCallingCode(),
                      N,
                    );
                  } catch (e) {
                    o("WALogger")
                      .WARN(
                        L ||
                          (L = babelHelpers.taggedTemplateLiteralLoose([
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
                        E ||
                          (E = babelHelpers.taggedTemplateLiteralLoose([
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
                  (yield (D || (D = n("Promise"))).all([
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
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
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
                  $ == null ||
                    (C = $(
                      r("WAWebWindowsHybridBridgeInitiator").WAWebVoipInit,
                    )) == null ||
                    (C = C.voip) == null ||
                    C.setHandlers(d.callbacks);
                }
                (Te(l),
                  ge(),
                  De(l),
                  o("WAWebVoipQplHelpers").endVoipInitQplSuccess({
                    bool: { download_only: !1 },
                  }));
              } catch (e) {
                o("WAWebVoipQplHelpers").endVoipInitQplFail(
                  "init_error",
                  ce(e),
                );
                var b = e instanceof Error ? e.message : String(e),
                  T =
                    r("WAWebEnvironment").isWindows &&
                    b.includes(
                      "Attempted to create Web stack in Windows environment",
                    );
                if (T) {
                  (o("WALogger").LOG(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: init skipped on Windows Hybrid due to mis-resolve",
                      ])),
                  ),
                    (U = !1),
                    o(
                      "WAWebVoipInitEventEmitter",
                    ).VoipInitEventEmitter.triggerVoipInitFailure());
                  return;
                }
                xe(t, l);
                var x = ie(e);
                (_e(e, x, t), Me(e, l));
                var P =
                  (x && le()) ||
                  o(
                    "WAWebVoipPthreadGlueFailureTracker",
                  ).hasTerminalPthreadGlueFailure();
                ((U = !P),
                  P &&
                    o("WAWebBackendApi").frontendFireAndForget(
                      "markVoipWasmArtifactUnavailable",
                    ),
                  $e(l, x),
                  we());
              } finally {
                var M;
                (o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.markVoipInitAttemptEnded(),
                  (M = re) == null || M.resolve(),
                  (re = null));
              }
            }
          },
        )),
        ae.apply(this, arguments)
      );
    }
    function ie(e) {
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
    function le() {
      try {
        return r("justknobx")._("5809");
      } catch (e) {
        return !0;
      }
    }
    function se(e) {
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
    function ue(e) {
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
    function ce(e) {
      var t = e instanceof Error ? e.name + ": " + e.message : String(e);
      return {
        int: {
          failure_fingerprint_code: me(ue(t)),
          failure_phase_code: de(se(t)),
        },
      };
    }
    function de(e) {
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
    function me(e) {
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
    function pe() {
      var e;
      return (e = o(
        "WAWebVoipWasmArtifactRegistry",
      ).getSelectedVoipWasmUri()) != null
        ? e
        : "unknown";
    }
    function _e(e, t, n) {
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
          se(r),
          ue(r),
          pe(),
        ));
    }
    function fe() {
      if (H == null)
        try {
          H = Math.max(0, r("justknobx")._("4786"));
        } catch (e) {
          (o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: init retry count JK unavailable, using fallback=",
                ": ",
                "",
              ])),
            P,
            String(e),
          ),
            (H = P));
        }
      return H;
    }
    function ge() {
      ((U = !1),
        (V = 0),
        (H = null),
        (G = null),
        (K = 0),
        (O = null),
        (B = null),
        (W = null),
        (q = null));
    }
    function he(e, t) {
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
          o("WAWebVoipQplHelpers").voipInitQplAnnotateTrigger(Ce(e)),
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
    function ye() {
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
    function Ce(e) {
      var t;
      return (t = e ? null : q) != null
        ? t
        : o("WAWebPageVisibilityRecency").snapshotPageVisibility();
    }
    function be(e) {
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          !e &&
            o("WAWebVoipBootInitDecision").getVoipBootInitDecision() ===
              "deferred" &&
            o("WAWebCoreActionsODS").logCallVoipInitDeferredStart(ve());
        },
      );
    }
    function ve() {
      return F === "call"
        ? "call"
        : F === "incoming"
          ? Se(B)
          : F === "prewarm"
            ? O == null
              ? "prewarm_unscheduled"
              : "prewarm_scheduled"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    F,
                );
              })();
    }
    function Se(e) {
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
    function Re() {
      var e = { trigger_code: Ee(F) };
      W != null && (e.intent_backend_load_ms = W);
      var t = { trigger_source: F },
        n = O;
      n != null &&
        ((t.boot_defer_reason = n.reason),
        (e.boot_defer_reason_code = ke(n.reason)),
        n.waitMs != null && (e.boot_defer_wait_ms = n.waitMs));
      var r = B;
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
    function Le(e) {
      var t;
      return F === "prewarm"
        ? (t = e == null ? void 0 : e.reason) != null
          ? t
          : "boot"
        : F === "call"
          ? "call"
          : F === "incoming"
            ? "incoming"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    F,
                );
              })();
    }
    function Ee(e) {
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
    function ke(e) {
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
    function Ie(e, t) {
      return !t && (e == null ? void 0 : e.reason) === "hidden_prewarm";
    }
    function Te(e) {
      (e &&
        o("WAWebVoipHiddenPrewarmIdleWork").watchTabFromHiddenPrewarmSuccess(),
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.triggerVoipInitSuccess(e));
    }
    function De(e) {
      (o("WAWebCoreActionsODS").logCallVoipInitSuccess(), e && Ne("success"));
    }
    function xe(e, t) {
      t ? Ne("failure") : e || o("WAWebCoreActionsODS").logCallVoipInitError();
    }
    function $e(e, t) {
      if (e && U) {
        ((A = null),
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
    function Pe(e) {
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
    function Ne(e) {
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
    function Me(e, t) {
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
    function we() {
      z ||
        ((z = !0),
        (j = document.hidden),
        document.addEventListener("visibilitychange", function () {
          var e = j && !document.hidden;
          ((j = document.hidden),
            e &&
              Ae().catch(function (e) {
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
    function Ae() {
      return Fe.apply(this, arguments);
    }
    function Fe() {
      return (
        (Fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (Q != null) return yield Q;
          var e = Oe();
          Q = e;
          try {
            return yield e;
          } finally {
            Q === e && (Q = null);
          }
        })),
        Fe.apply(this, arguments)
      );
    }
    function Oe() {
      return Be.apply(this, arguments);
    }
    function Be() {
      return (
        (Be = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !document.hidden &&
            (re && (yield re.promise),
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
            if (!We()) {
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed();
              return;
            }
            if (!J()) {
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed();
              return;
            }
            var e = G != null;
            if (e) {
              (o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed(),
                yield Z());
              return;
            }
            (qe(),
              o("WALogger").LOG(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: retrying init after tab became visible",
                  ])),
              ),
              o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetryAttempt());
            var t = yield Z();
            t &&
              o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetrySuccess();
          }
        })),
        Be.apply(this, arguments)
      );
    }
    function We() {
      return K === 0 || Date.now() - K >= M;
    }
    function qe() {
      K = Date.now();
    }
    function Ue() {
      return Ve.apply(this, arguments);
    }
    function Ve() {
      return (
        (Ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = document.hidden;
          e &&
            o(
              "WAWebCoreActionsODS",
            ).logCallVoipInitRetryIdleWaitStartedHidden();
          var t = self.performance.now();
          yield o("WAWebVoipBackgroundWarmConditions").waitForIdleCallback(
            He(e),
          );
          var n = {
            endedHidden: document.hidden,
            startedHidden: e,
            waitMs: Math.round(self.performance.now() - t),
          };
          return (ze(n), n);
        })),
        Ve.apply(this, arguments)
      );
    }
    function He(e) {
      return e && Ge()
        ? o("WAWebVoipHiddenPrewarmIdleWork").HIDDEN_TAB_IDLE_FALLBACK_MS
        : null;
    }
    function Ge() {
      try {
        return o(
          "WAWebVoipBootInitDecision",
        ).isDeferredVoipBootHiddenPrewarmEnabled();
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: hidden prewarm gate failed",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          !1
        );
      }
    }
    function ze(e) {
      var t = e.endedHidden,
        n = e.startedHidden,
        r = e.waitMs;
      (o("WALogger").LOG(
        h ||
          (h = babelHelpers.taggedTemplateLiteralLoose([
            "voip: init retry idle wait ms=",
            " started_hidden=",
            " ended_hidden=",
            "",
          ])),
        r,
        String(n),
        String(t),
      ),
        n &&
          (o("WAWebCoreActionsODS").logCallVoipInitRetryIdleWaitHiddenEnded(),
          r >= w &&
            o("WAWebCoreActionsODS").logCallVoipInitRetryIdleWaitHiddenLong()));
    }
    ((l.VoipInitEventEmitter = o(
      "WAWebVoipInitEventEmitter",
    ).VoipInitEventEmitter),
      (l.initWAWebVoip = X),
      (l.canRetryWAWebVoipInitAfterFailure = J),
      (l.retryWAWebVoipInitAfterFailure = Z));
  },
  98,
);
