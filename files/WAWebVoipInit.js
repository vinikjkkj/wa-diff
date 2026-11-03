__d(
  "WAWebVoipInit",
  [
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
      V = null,
      H = 0,
      G = null,
      z = null,
      j = 0,
      K = !1,
      Q = !1,
      X = 0,
      Y = null;
    async function J(e, t, n, r, a) {
      e === void 0 && (e = "prewarm");
      var i = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
      if (i == null) {
        (o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
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
          fe(),
          (O = t),
          (B = n),
          (W = r),
          (q = a),
          await oe(i));
      else {
        if (t != null) {
          var l = F === "prewarm" ? "prewarm_owned" : "intent_owned";
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WAWebCoreActionsODS").logCallVoipBootInitFired(l);
            },
          );
        }
        re && (await re.promise, Pe(e) && (await J(e, t, n, r, a)));
      }
    }
    function Z() {
      return (
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getDidVoipInitError() &&
        U &&
        H < _e()
      );
    }
    async function ee() {
      if (z != null) return await z;
      var e = ne();
      z = e;
      try {
        return await e;
      } finally {
        z === e && (z = null);
      }
    }
    async function te(e) {
      if (
        o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited() ||
        (o(
          "WAWebVoipWasmArtifactRecoveryEvents",
        ).emitVoipWasmArtifactRecovered(),
        re != null &&
          (await re.promise,
          o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited()))
      )
        return !0;
      ((A = null),
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.markVoipInitUntried(),
        (V = e));
      try {
        await J(F);
      } finally {
        V = null;
      }
      return o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.getIsVoipInited();
    }
    async function ne() {
      if (
        re &&
        (await re.promise,
        o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited())
      )
        return !0;
      if (!Z())
        return o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getIsVoipInited();
      var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
      if (e == null) return !1;
      (H++,
        o("WAWebCoreActionsODS").logCallVoipInitRetryAttempt(),
        (A = e),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: retrying init after transient failure attempt=",
              " max=",
              "",
            ])),
          H,
          _e(),
        ));
      var t = j,
        n = await We();
      if (
        t !== j ||
        o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()
      ) {
        var r;
        return (
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: skip retry, a newer init started in idle wait",
              ])),
          ),
          await ((r = re) == null ? void 0 : r.promise),
          o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()
        );
      }
      var a = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
      if (a == null || !e.equals(a))
        return (
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: skip retry, identity changed in idle wait",
              ])),
          ),
          o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()
        );
      await oe(e, !0, n);
      var i = o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.getIsVoipInited();
      return (
        i
          ? o("WAWebCoreActionsODS").logCallVoipInitRetrySuccess()
          : (o("WAWebCoreActionsODS").logCallVoipInitRetryFailure(),
            Z() || o("WAWebCoreActionsODS").logCallVoipInitRetryExhausted()),
        i
      );
    }
    var re = null;
    async function oe(e, t, n) {
      if (
        (t === void 0 && (t = !1),
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
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
          (await re.promise,
          o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited() ||
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getDidVoipInitError())
        ) {
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: init already done, ignoring duplicate call",
              ])),
          );
          return;
        }
        re = new (o("WAResolvable").Resolvable)();
        var a = O,
          i = Ie(a, t);
        (!t &&
          a != null &&
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WAWebCoreActionsODS").logCallVoipBootInitFired(a.reason);
            },
          ),
          o("WAWebVoipQplHelpers").startVoipInitQpl(Se()),
          i || o("WAWebVoipInitOutcomeLog").logVoipInitAttemptOnce(Re(a)),
          ge(t, n),
          he(),
          Ce(t));
        try {
          var l, s, u;
          if (
            (o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.markVoipInitAttemptStarted(
              F === "prewarm" &&
                (!t ||
                  o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.getVoipWebStackCreatedAtMs() != null),
            ),
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.markVoipInitTrigger(Re(a)),
            o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling())
          ) {
            (o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
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
          var c = await o("WAWebVoipStackInterface").getVoipStackInterface();
          if ((c == null ? void 0 : c.type) === "windows") {
            var d = null;
            try {
              d = await o("WAPromiseTimeout").promiseTimeout(
                o("WAWebCountryCodeUtils").getMyCallingCode(),
                N,
              );
            } catch (e) {
              o("WALogger")
                .WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: getMyCallingCode failed or timed out, using fallback: ",
                      "",
                    ])),
                  String(e),
                )
                .sendLogs("voip-get-self-country-code-failed");
            }
            try {
              await c.setSelfCountryCode(d != null ? d : "");
            } catch (e) {
              o("WALogger")
                .WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: setSelfCountryCode failed, continuing init: ",
                      "",
                    ])),
                  String(e),
                )
                .sendLogs("voip-set-self-country-code-failed");
            }
          }
          var C = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
            b = C != null && !C.isLid() ? C : null,
            v = b != null ? o("WAWebWidFactory").asUserWidOrThrow(b) : null,
            S =
              c == null
                ? void 0
                : c.voipInit(
                    (l = b == null ? void 0 : b.toString({ legacy: !0 })) !=
                      null
                      ? l
                      : "",
                    (s = v == null ? void 0 : v.toString({ legacy: !0 })) !=
                      null
                      ? s
                      : "",
                    e.toString({ legacy: !0 }),
                  );
          if (
            (await Promise.all([
              S,
              c == null
                ? void 0
                : c.setHideMyIp(
                    (u = o("WAWebUserPrefsGeneral").getUserPrivacySettings()
                      .disallowAllP2p) != null
                      ? u
                      : !1,
                  ),
            ]),
            (c == null ? void 0 : c.type) === "web")
          )
            var R = new (o("WAWebCallWamEvent").CallWamEvent)(),
              L = new (o("WAWebJoinableCallWamEvent").JoinableCallWamEvent)();
          try {
            o("WAWebVoipNetworkMedium").startNetworkMediumMonitoring();
          } catch (e) {
            o("WALogger").WARN(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: network medium monitoring failed to start: ",
                  "",
                ])),
              e,
            );
          }
          if (
            ((c == null ? void 0 : c.type) === "web" &&
              o("WAWebVoipCrashRecovery").initCrashRecovery(),
            (c == null ? void 0 : c.type) === "windows")
          ) {
            var E;
            $ == null ||
              (E = $(r("WAWebWindowsHybridBridgeInitiator").WAWebVoipInit)) ==
                null ||
              (E = E.voip) == null ||
              E.setHandlers(c.callbacks);
          }
          (Te(i),
            o("WAWebVoipInitOutcomeLog").logVoipInitReadyOnce(Le(a)),
            fe(),
            De(i),
            o("WAWebVoipQplHelpers").endVoipInitQplSuccess({
              bool: { download_only: !1 },
            }));
        } catch (e) {
          o("WAWebVoipQplHelpers").endVoipInitQplFail("init_error", ue(e));
          var k = e instanceof Error ? e.message : String(e),
            I =
              r("WAWebEnvironment").isWindows &&
              k.includes(
                "Attempted to create Web stack in Windows environment",
              );
          if (I) {
            (o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: init skipped on Windows Hybrid due to mis-resolve",
                ])),
            ),
              (U = !1),
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.triggerVoipInitFailure());
            return;
          }
          xe(t, i);
          var T = ae(e);
          (pe(e, T, t), Me(e, i));
          var D =
            (T && ie()) ||
            o(
              "WAWebVoipPthreadGlueFailureTracker",
            ).hasTerminalPthreadGlueFailure();
          ((U = !D),
            D &&
              o("WAWebBackendApi").frontendFireAndForget(
                "markVoipWasmArtifactUnavailable",
              ),
            $e(i, T),
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getDidVoipInitError() &&
              !Z() &&
              o("WAWebVoipInitOutcomeLog").logVoipInitDeadOnce(e),
            we());
        } finally {
          var x;
          (o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.markVoipInitAttemptEnded(),
            (x = re) == null || x.resolve(),
            (re = null));
        }
      }
    }
    function ae(e) {
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
    function ie() {
      try {
        return r("justknobx")._("5809");
      } catch (e) {
        return !0;
      }
    }
    function le(e) {
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
    function se(e) {
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
    function ue(e) {
      var t = e instanceof Error ? e.name + ": " + e.message : String(e);
      return {
        int: {
          failure_fingerprint_code: de(se(t)),
          failure_phase_code: ce(le(t)),
        },
      };
    }
    function ce(e) {
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
    function de(e) {
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
    function me() {
      var e;
      return (e = o(
        "WAWebVoipWasmArtifactRegistry",
      ).getSelectedVoipWasmUri()) != null
        ? e
        : "unknown";
    }
    function pe(e, t, n) {
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
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "voip: init failure artifacts phase=",
              " fingerprint=",
              " expectedWasmUri=",
              "",
            ])),
          le(r),
          se(r),
          me(),
        ));
    }
    function _e() {
      if (G == null)
        try {
          G = Math.max(0, r("justknobx")._("4786"));
        } catch (e) {
          (o("WALogger").WARN(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "voip: init retry count JK unavailable, using fallback=",
                ": ",
                "",
              ])),
            P,
            String(e),
          ),
            (G = P));
        }
      return G;
    }
    function fe() {
      (j++,
        (U = !1),
        (H = 0),
        (G = null),
        (z = null),
        (X = 0),
        (O = null),
        (B = null),
        (W = null),
        (q = null));
    }
    function ge(e, t) {
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
          o("WAWebVoipQplHelpers").voipInitQplAnnotateTrigger(ye(e)),
          t != null &&
            o("WAWebVoipQplHelpers").voipInitQplAnnotateRetryIdleWait(t));
      } catch (e) {
        o("WALogger")
          .WARN(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "voip: init start annotation failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
    }
    function he() {
      try {
        o("WAWebVoipLastCallLogging").logVoipLastCallAtInit(
          o("WAWebVoipLastCallStore").getBootLastCall(),
        );
      } catch (e) {
        o("WALogger")
          .WARN(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "voip: last call logging failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
    }
    function ye(e) {
      var t;
      return (t = e ? null : q) != null
        ? t
        : o("WAWebPageVisibilityRecency").snapshotPageVisibility();
    }
    function Ce(e) {
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          !e &&
            o("WAWebVoipBootInitDecision").getVoipBootInitDecision() ===
              "deferred" &&
            o("WAWebCoreActionsODS").logCallVoipInitDeferredStart(be());
        },
      );
    }
    function be() {
      return F === "call"
        ? "call"
        : F === "incoming"
          ? ve(B)
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
    function ve(e) {
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
    function Se() {
      var e = { trigger_code: Ee(F) };
      (V != null && (e.artifact_recovery_attempt = V),
        W != null && (e.intent_backend_load_ms = W));
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
    function Re(e) {
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
    function Le(e) {
      return e != null ? "deferred" : F === "prewarm" ? "eager" : "intent";
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
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
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
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
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
          E ||
            (E = babelHelpers.taggedTemplateLiteralLoose([
              "voip: init failed: ",
              "",
            ])),
          e,
        ),
        r = t ? n.tags("non-sad") : n;
      r.sendLogs("voip: init-failed");
    }
    function we() {
      K ||
        ((K = !0),
        (Q = document.hidden),
        document.addEventListener("visibilitychange", function () {
          var e = Q && !document.hidden;
          ((Q = document.hidden),
            e &&
              Ae().catch(function (e) {
                o("WALogger")
                  .ERROR(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: visibility init check failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("voip-visibility-init-failed");
              }));
        }));
    }
    async function Ae() {
      if (Y != null) return await Y;
      var e = Fe();
      Y = e;
      try {
        return await e;
      } finally {
        Y === e && (Y = null);
      }
    }
    async function Fe() {
      if (
        !document.hidden &&
        (re && (await re.promise),
        !(
          document.hidden ||
          o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()
        ) &&
          o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getDidVoipInitError())
      ) {
        if (!Oe()) {
          o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetrySuppressed();
          return;
        }
        if (!Z()) {
          o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetrySuppressed();
          return;
        }
        var e = z != null;
        if (e) {
          (o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetrySuppressed(),
            await ee());
          return;
        }
        (Be(),
          o("WALogger").LOG(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "voip: retrying init after tab became visible",
              ])),
          ),
          o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetryAttempt());
        var t = await ee();
        t && o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetrySuccess();
      }
    }
    function Oe() {
      return X === 0 || Date.now() - X >= M;
    }
    function Be() {
      X = Date.now();
    }
    async function We() {
      var e = document.hidden;
      e && o("WAWebCoreActionsODS").logCallVoipInitRetryIdleWaitStartedHidden();
      var t = self.performance.now();
      await o("WAWebVoipBackgroundWarmConditions").waitForIdleCallback(qe(e));
      var n = {
        endedHidden: document.hidden,
        startedHidden: e,
        waitMs: Math.round(self.performance.now() - t),
      };
      return (Ve(n), n);
    }
    function qe(e) {
      return e && Ue()
        ? o("WAWebVoipHiddenPrewarmIdleWork").HIDDEN_TAB_IDLE_FALLBACK_MS
        : null;
    }
    function Ue() {
      try {
        return o(
          "WAWebVoipBootInitDecision",
        ).isDeferredVoipBootHiddenPrewarmEnabled();
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: hidden prewarm gate failed",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          !1
        );
      }
    }
    function Ve(e) {
      var t = e.endedHidden,
        n = e.startedHidden,
        r = e.waitMs;
      (o("WALogger").LOG(
        D ||
          (D = babelHelpers.taggedTemplateLiteralLoose([
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
      (l.initWAWebVoip = J),
      (l.canRetryWAWebVoipInitAfterFailure = Z),
      (l.retryWAWebVoipInitAfterFailure = ee),
      (l.restartVoipInitAfterArtifactRecovery = te));
  },
  98,
);
