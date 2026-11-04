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
    "WAWebVoipInitOutcomeLog",
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
      $ = (e = n("cr:17219")) != null ? e : {},
      P = $.getWindowsBridge,
      N = 1,
      M = 5e3,
      w = 60 * 1e3,
      A = 5e3,
      F,
      O = "prewarm",
      B = null,
      W = null,
      q = null,
      U = null,
      V = !1,
      H = null,
      G = 0,
      z = null,
      j = null,
      K = 0,
      Q = !1,
      X = !1,
      Y = 0,
      J = null;
    function Z(e, t, n, r, o) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                (V = !0),
                o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.triggerVoipInitFailure());
              return;
            }
            if (!i.equals(F))
              ((F = i),
                (O = e),
                ve(),
                (B = t),
                (W = n),
                (q = r),
                (U = a),
                yield ue(i));
            else {
              if (t != null) {
                var l = O === "prewarm" ? "prewarm_owned" : "intent_owned";
                o(
                  "WAWebVoipDeferredBootLogging",
                ).safelyLogVoipDeferredBootEvent(function () {
                  o("WAWebCoreActionsODS").logCallVoipBootInitFired(l);
                });
              }
              se && (yield se.promise, Oe(e) && (yield Z(e, t, n, r, a)));
            }
          },
        )),
        ee.apply(this, arguments)
      );
    }
    function te() {
      return (
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getDidVoipInitError() &&
        V &&
        G < be()
      );
    }
    function ne() {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (j != null) return yield j;
          var e = ie();
          j = e;
          try {
            return yield e;
          } finally {
            j === e && (j = null);
          }
        })),
        re.apply(this, arguments)
      );
    }
    function oe(e) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited() ||
            (o(
              "WAWebVoipWasmArtifactRecoveryEvents",
            ).emitVoipWasmArtifactRecovered(),
            se != null &&
              (yield se.promise,
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getIsVoipInited()))
          )
            return !0;
          ((F = null),
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.markVoipInitUntried(),
            (H = e));
          try {
            yield Z(O);
          } finally {
            H = null;
          }
          return o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited();
        })),
        ae.apply(this, arguments)
      );
    }
    function ie() {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            se &&
            (yield se.promise,
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited())
          )
            return !0;
          if (!te())
            return o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited();
          var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (e == null) return !1;
          (G++,
            r("WAWebODS").incr("web.call.voip_init.retry_attempt"),
            (F = e),
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: retrying init after transient failure attempt=",
                  " max=",
                  "",
                ])),
              G,
              be(),
            ));
          var t = K,
            n = yield Ke();
          if (
            t !== K ||
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited()
          ) {
            var a;
            return (
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: skip retry, a newer init started in idle wait",
                  ])),
              ),
              yield (a = se) == null ? void 0 : a.promise,
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getIsVoipInited()
            );
          }
          var i = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (i == null || !e.equals(i))
            return (
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: skip retry, identity changed in idle wait",
                  ])),
              ),
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getIsVoipInited()
            );
          yield ue(e, !0, n);
          var l = o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited();
          return (
            l
              ? o("WAWebCoreActionsODS").logCallVoipInitRetrySuccess()
              : (r("WAWebODS").incr("web.call.voip_init.retry_failure"),
                te() ||
                  r("WAWebODS").incr("web.call.voip_init.retry_exhausted")),
            l
          );
        })),
        le.apply(this, arguments)
      );
    }
    var se = null;
    function ue(e, t, n) {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a) {
            if (
              (t === void 0 && (t = !1),
              o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
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
                se &&
                (yield se.promise,
                o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.getIsVoipInited() ||
                  o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.getDidVoipInitError())
              ) {
                o("WALogger").LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: init already done, ignoring duplicate call",
                    ])),
                );
                return;
              }
              se = new (o("WAResolvable").Resolvable)();
              var i = B,
                l = Ne(i, t);
              (!t &&
                i != null &&
                o(
                  "WAWebVoipDeferredBootLogging",
                ).safelyLogVoipDeferredBootEvent(function () {
                  o("WAWebCoreActionsODS").logCallVoipBootInitFired(i.reason);
                }),
                o("WAWebVoipQplHelpers").startVoipInitQpl(Te()),
                l || o("WAWebVoipInitOutcomeLog").logVoipInitAttemptOnce(De(i)),
                Se(t, a),
                Re(),
                Ee(t));
              try {
                var s, u, c;
                if (
                  (o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.markVoipInitAttemptStarted(
                    O === "prewarm" &&
                      (!t ||
                        o(
                          "WAWebVoipInitEventEmitter",
                        ).VoipInitEventEmitter.getVoipWebStackCreatedAtMs() !=
                          null),
                  ),
                  o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.markVoipInitTrigger(De(i)),
                  o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling())
                ) {
                  (o("WALogger").LOG(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: init skipped due to unsupported browser",
                      ])),
                  ),
                    o("WAWebCoreActionsODS").logCallVoipInitSkipUnsupported(),
                    o("WAWebVoipQplHelpers").endVoipInitQplFail(
                      "unsupported_browser",
                    ),
                    (V = !1),
                    o(
                      "WAWebVoipInitEventEmitter",
                    ).VoipInitEventEmitter.triggerVoipInitFailure());
                  return;
                }
                (qe(),
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
                      M,
                    );
                  } catch (e) {
                    o("WALogger")
                      .WARN(
                        E ||
                          (E = babelHelpers.taggedTemplateLiteralLoose([
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
                        k ||
                          (k = babelHelpers.taggedTemplateLiteralLoose([
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
                  (yield (x || (x = n("Promise"))).all([
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
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
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
                  P == null ||
                    (C = P(
                      r("WAWebWindowsHybridBridgeInitiator").WAWebVoipInit,
                    )) == null ||
                    (C = C.voip) == null ||
                    C.setHandlers(d.callbacks);
                }
                (Me(l),
                  o("WAWebVoipInitOutcomeLog").logVoipInitReadyOnce(xe(i)),
                  ve(),
                  we(l),
                  o("WAWebVoipQplHelpers").endVoipInitQplSuccess({
                    bool: { download_only: !1 },
                  }));
              } catch (e) {
                o("WAWebVoipQplHelpers").endVoipInitQplFail(
                  "init_error",
                  fe(e),
                );
                var b = e instanceof Error ? e.message : String(e),
                  v =
                    r("WAWebEnvironment").isWindows &&
                    b.includes(
                      "Attempted to create Web stack in Windows environment",
                    );
                if (v) {
                  (o("WALogger").LOG(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: init skipped on Windows Hybrid due to mis-resolve",
                      ])),
                  ),
                    (V = !1),
                    o(
                      "WAWebVoipInitEventEmitter",
                    ).VoipInitEventEmitter.triggerVoipInitFailure());
                  return;
                }
                Ae(t, l);
                var D = de(e);
                (Ce(e, D, t), We(e, l));
                var $ =
                  (D && me()) ||
                  o(
                    "WAWebVoipPthreadGlueFailureTracker",
                  ).hasTerminalPthreadGlueFailure();
                ((V = !$),
                  $ &&
                    o("WAWebBackendApi").frontendFireAndForget(
                      "markVoipWasmArtifactUnavailable",
                    ),
                  Fe(l, D),
                  o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.getDidVoipInitError() &&
                    !te() &&
                    o("WAWebVoipInitOutcomeLog").logVoipInitDeadOnce(e),
                  qe());
              } finally {
                var N;
                (o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.markVoipInitAttemptEnded(),
                  (N = se) == null || N.resolve(),
                  (se = null));
              }
            }
          },
        )),
        ce.apply(this, arguments)
      );
    }
    function de(e) {
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
    function me() {
      try {
        return r("justknobx")._("5809");
      } catch (e) {
        return !0;
      }
    }
    function pe(e) {
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
    function _e(e) {
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
    function fe(e) {
      var t = e instanceof Error ? e.name + ": " + e.message : String(e);
      return {
        int: {
          failure_fingerprint_code: he(_e(t)),
          failure_phase_code: ge(pe(t)),
        },
      };
    }
    function ge(e) {
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
    function he(e) {
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
    function ye() {
      var e;
      return (e = o(
        "WAWebVoipWasmArtifactRegistry",
      ).getSelectedVoipWasmUri()) != null
        ? e
        : "unknown";
    }
    function Ce(e, t, n) {
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
          pe(r),
          _e(r),
          ye(),
        ));
    }
    function be() {
      if (z == null)
        try {
          z = Math.max(0, r("justknobx")._("4786"));
        } catch (e) {
          (o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: init retry count JK unavailable, using fallback=",
                ": ",
                "",
              ])),
            N,
            String(e),
          ),
            (z = N));
        }
      return z;
    }
    function ve() {
      (K++,
        (V = !1),
        (G = 0),
        (z = null),
        (j = null),
        (Y = 0),
        (B = null),
        (W = null),
        (q = null),
        (U = null));
    }
    function Se(e, t) {
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
          o("WAWebVoipQplHelpers").voipInitQplAnnotateTrigger(Le(e)),
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
    function Re() {
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
    function Le(e) {
      var t;
      return (t = e ? null : U) != null
        ? t
        : o("WAWebPageVisibilityRecency").snapshotPageVisibility();
    }
    function Ee(e) {
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          !e &&
            o("WAWebVoipBootInitDecision").getVoipBootInitDecision() ===
              "deferred" &&
            o("WAWebCoreActionsODS").logCallVoipInitDeferredStart(ke());
        },
      );
    }
    function ke() {
      return O === "call"
        ? "call"
        : O === "incoming"
          ? Ie(W)
          : O === "prewarm"
            ? B == null
              ? "prewarm_unscheduled"
              : "prewarm_scheduled"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    O,
                );
              })();
    }
    function Ie(e) {
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
    function Te() {
      var e = { trigger_code: $e(O) };
      (H != null && (e.artifact_recovery_attempt = H),
        q != null && (e.intent_backend_load_ms = q));
      var t = { trigger_source: O },
        n = B;
      n != null &&
        ((t.boot_defer_reason = n.reason),
        (e.boot_defer_reason_code = Pe(n.reason)),
        n.waitMs != null && (e.boot_defer_wait_ms = n.waitMs));
      var r = W;
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
    function De(e) {
      var t;
      return O === "prewarm"
        ? (t = e == null ? void 0 : e.reason) != null
          ? t
          : "boot"
        : O === "call"
          ? "call"
          : O === "incoming"
            ? "incoming"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    O,
                );
              })();
    }
    function xe(e) {
      return e != null ? "deferred" : O === "prewarm" ? "eager" : "intent";
    }
    function $e(e) {
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
    function Pe(e) {
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
    function Ne(e, t) {
      return !t && (e == null ? void 0 : e.reason) === "hidden_prewarm";
    }
    function Me(e) {
      (e &&
        o("WAWebVoipHiddenPrewarmIdleWork").watchTabFromHiddenPrewarmSuccess(),
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.triggerVoipInitSuccess(e));
    }
    function we(e) {
      (o("WAWebCoreActionsODS").logCallVoipInitSuccess(), e && Be("success"));
    }
    function Ae(e, t) {
      t ? Be("failure") : e || o("WAWebCoreActionsODS").logCallVoipInitError();
    }
    function Fe(e, t) {
      if (e && V) {
        ((F = null),
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
    function Oe(e) {
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
    function Be(e) {
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
    function We(e, t) {
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
    function qe() {
      Q ||
        ((Q = !0),
        (X = document.hidden),
        document.addEventListener("visibilitychange", function () {
          var e = X && !document.hidden;
          ((X = document.hidden),
            e &&
              Ue().catch(function (e) {
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
    function Ue() {
      return Ve.apply(this, arguments);
    }
    function Ve() {
      return (
        (Ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (J != null) return yield J;
          var e = He();
          J = e;
          try {
            return yield e;
          } finally {
            J === e && (J = null);
          }
        })),
        Ve.apply(this, arguments)
      );
    }
    function He() {
      return Ge.apply(this, arguments);
    }
    function Ge() {
      return (
        (Ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !document.hidden &&
            (se && (yield se.promise),
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
            if (!ze()) {
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed();
              return;
            }
            if (!te()) {
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed();
              return;
            }
            var e = j != null;
            if (e) {
              (o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed(),
                yield ne());
              return;
            }
            (je(),
              o("WALogger").LOG(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: retrying init after tab became visible",
                  ])),
              ),
              o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetryAttempt());
            var t = yield ne();
            t &&
              r("WAWebODS").incr("web.call.voip_init.visibility_retry_success");
          }
        })),
        Ge.apply(this, arguments)
      );
    }
    function ze() {
      return Y === 0 || Date.now() - Y >= w;
    }
    function je() {
      Y = Date.now();
    }
    function Ke() {
      return Qe.apply(this, arguments);
    }
    function Qe() {
      return (
        (Qe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = document.hidden;
          e &&
            r("WAWebODS").incr(
              "web.call.voip_init.retry_idle_wait.started_hidden",
            );
          var t = self.performance.now();
          yield o("WAWebVoipBackgroundWarmConditions").waitForIdleCallback(
            Xe(e),
          );
          var n = {
            endedHidden: document.hidden,
            startedHidden: e,
            waitMs: Math.round(self.performance.now() - t),
          };
          return (Je(n), n);
        })),
        Qe.apply(this, arguments)
      );
    }
    function Xe(e) {
      return e && Ye()
        ? o("WAWebVoipHiddenPrewarmIdleWork").HIDDEN_TAB_IDLE_FALLBACK_MS
        : null;
    }
    function Ye() {
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
    function Je(e) {
      var t = e.endedHidden,
        n = e.startedHidden,
        a = e.waitMs;
      (o("WALogger").LOG(
        h ||
          (h = babelHelpers.taggedTemplateLiteralLoose([
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
          a >= A &&
            r("WAWebODS").incr(
              "web.call.voip_init.retry_idle_wait.hidden_long",
            )));
    }
    ((l.VoipInitEventEmitter = o(
      "WAWebVoipInitEventEmitter",
    ).VoipInitEventEmitter),
      (l.initWAWebVoip = Z),
      (l.canRetryWAWebVoipInitAfterFailure = te),
      (l.retryWAWebVoipInitAfterFailure = ne),
      (l.restartVoipInitAfterArtifactRecovery = oe));
  },
  98,
);
