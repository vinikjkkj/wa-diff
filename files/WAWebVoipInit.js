__d(
  "WAWebVoipInit",
  [
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
      H = !1,
      G = null,
      z = 0,
      j = null,
      K = null,
      Q = 0,
      X = !1,
      Y = !1,
      J = 0,
      Z = null;
    async function ee(e, t, n, r, a) {
      e === void 0 && (e = "prewarm");
      var i = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
      if (i == null) {
        (o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
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
          Ce(),
          (B = t),
          (W = n),
          (q = r),
          (U = a),
          await se(i));
      else {
        if (t != null) {
          var l = O === "prewarm" ? "prewarm_owned" : "intent_owned";
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WAWebCoreActionsODS").logCallVoipBootInitFired(l);
            },
          );
        }
        le && (await le.promise, Fe(e) && (await ee(e, t, n, r, a)));
      }
    }
    function te() {
      return (
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getDidVoipInitError() &&
        V &&
        z < ye()
      );
    }
    async function ne() {
      if (K != null) return await K;
      var e = ie();
      K = e;
      try {
        return await e;
      } finally {
        K === e && (K = null);
      }
    }
    async function re(e) {
      return o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.getIsVoipInited()
        ? !0
        : (Ke(),
          o(
            "WAWebVoipWasmArtifactRecoveryEvents",
          ).emitVoipWasmArtifactRecovered(),
          await ae({ artifact_recovery_attempt: e }));
    }
    async function oe(e, t) {
      return o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.getIsVoipInited()
        ? !0
        : await ae({ init_recovery_attempt: e }, t);
    }
    async function ae(e, t) {
      if (
        (t === void 0 && (t = o("WAWebBoolFunc").returnTrue),
        le != null &&
          (await le.promise,
          o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited()))
      )
        return !0;
      if (!t()) return !1;
      ((F = null),
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.markVoipInitUntried(),
        (G = e));
      try {
        await ee(O);
      } finally {
        G = null;
      }
      return o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.getIsVoipInited();
    }
    async function ie() {
      if (
        le &&
        (await le.promise,
        o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited())
      )
        return !0;
      if (!te())
        return o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getIsVoipInited();
      var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
      if (e == null) return !1;
      (z++,
        r("WAWebODS").incr("web.call.voip_init.retry_attempt"),
        (F = e),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: retrying init after transient failure attempt=",
              " max=",
              "",
            ])),
          z,
          ye(),
        ));
      var t = Q,
        n = await Ge();
      if (
        t !== Q ||
        o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()
      ) {
        var a;
        return (
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: skip retry, a newer init started in idle wait",
              ])),
          ),
          await ((a = le) == null ? void 0 : a.promise),
          o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()
        );
      }
      var i = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
      if (i == null || !e.equals(i))
        return (
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: skip retry, identity changed in idle wait",
              ])),
          ),
          o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()
        );
      await se(e, !0, n);
      var l = o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.getIsVoipInited();
      return (
        l
          ? o("WAWebCoreActionsODS").logCallVoipInitRetrySuccess()
          : (r("WAWebODS").incr("web.call.voip_init.retry_failure"),
            te() || r("WAWebODS").incr("web.call.voip_init.retry_exhausted")),
        l
      );
    }
    var le = null;
    async function se(e, t, n) {
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
          le &&
          (await le.promise,
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
        le = new (o("WAResolvable").Resolvable)();
        var a = B,
          i = $e(a, t);
        (!t &&
          a != null &&
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WAWebCoreActionsODS").logCallVoipBootInitFired(a.reason);
            },
          ),
          o("WAWebVoipQplHelpers").startVoipInitQpl(ke()),
          i || o("WAWebVoipInitOutcomeLog").logVoipInitAttemptOnce(Ie(a)),
          be(t, n),
          ve(),
          Re(t));
        try {
          var l, s, u;
          if (
            (o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.markVoipInitAttemptStarted(
              O === "prewarm" &&
                (!t ||
                  o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.getVoipWebStackCreatedAtMs() != null),
            ),
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.markVoipInitTrigger(Ie(a)),
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
              (V = !1),
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.triggerVoipInitFailure());
            return;
          }
          (We(),
            o(
              "WAWebVoipBrowserAudioStatus",
            ).preDetectBrowserAudioCapabilities(),
            je());
          var c = await o("WAWebVoipStackInterface").getVoipStackInterface();
          if ((c == null ? void 0 : c.type) === "windows") {
            var d = null;
            try {
              d = await o("WAPromiseTimeout").promiseTimeout(
                o("WAWebCountryCodeUtils").getMyCallingCode(),
                M,
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
            P == null ||
              (E = P(r("WAWebWindowsHybridBridgeInitiator").WAWebVoipInit)) ==
                null ||
              (E = E.voip) == null ||
              E.setHandlers(c.callbacks);
          }
          (Pe(i),
            o("WAWebVoipInitOutcomeLog").logVoipInitReadyOnce(Te(a)),
            Ce(),
            Ne(i),
            o("WAWebVoipQplHelpers").endVoipInitQplSuccess({
              bool: { download_only: !1 },
            }));
        } catch (e) {
          o("WAWebVoipQplHelpers").endVoipInitQplFail("init_error", pe(e));
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
              (V = !1),
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.triggerVoipInitFailure());
            return;
          }
          ((H = !0), Me(t, i));
          var T = ue(e);
          (he(e, T, t), Be(e, i));
          var D =
            (T && ce()) ||
            o(
              "WAWebVoipPthreadGlueFailureTracker",
            ).hasTerminalPthreadGlueFailure();
          ((V = !D),
            D &&
              o("WAWebBackendApi").frontendFireAndForget(
                "markVoipWasmArtifactUnavailable",
              ),
            we(i, T),
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getDidVoipInitError() &&
              !te() &&
              o("WAWebVoipInitOutcomeLog").logVoipInitDeadOnce(e),
            Ae(e),
            We());
        } finally {
          var x;
          (o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.markVoipInitAttemptEnded(),
            (x = le) == null || x.resolve(),
            (le = null));
        }
      }
    }
    function ue(e) {
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
    function ce() {
      try {
        return r("justknobx")._("5809");
      } catch (e) {
        return !0;
      }
    }
    function de(e) {
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
    function me(e) {
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
    function pe(e) {
      var t = e instanceof Error ? e.name + ": " + e.message : String(e);
      return {
        int: {
          failure_fingerprint_code: fe(me(t)),
          failure_phase_code: _e(de(t)),
        },
      };
    }
    function _e(e) {
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
    function fe(e) {
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
    function ge() {
      var e;
      return (e = o(
        "WAWebVoipWasmArtifactRegistry",
      ).getSelectedVoipWasmUri()) != null
        ? e
        : "unknown";
    }
    function he(e, t, n) {
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
          de(r),
          me(r),
          ge(),
        ));
    }
    function ye() {
      if (j == null)
        try {
          j = Math.max(0, r("justknobx")._("4786"));
        } catch (e) {
          (o("WALogger").WARN(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "voip: init retry count JK unavailable, using fallback=",
                ": ",
                "",
              ])),
            N,
            String(e),
          ),
            (j = N));
        }
      return j;
    }
    function Ce() {
      (Q++,
        (V = !1),
        (z = 0),
        (j = null),
        (K = null),
        (J = 0),
        (B = null),
        (W = null),
        (q = null),
        (U = null));
    }
    function be(e, t) {
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
          o("WAWebVoipQplHelpers").voipInitQplAnnotateTrigger(Se(e)),
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
    function ve() {
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
    function Se(e) {
      var t;
      return (t = e ? null : U) != null
        ? t
        : o("WAWebPageVisibilityRecency").snapshotPageVisibility();
    }
    function Re(e) {
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          !e &&
            o("WAWebVoipBootInitDecision").getVoipBootInitDecision() ===
              "deferred" &&
            o("WAWebCoreActionsODS").logCallVoipInitDeferredStart(Le());
        },
      );
    }
    function Le() {
      return O === "call"
        ? "call"
        : O === "incoming"
          ? Ee(W)
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
    function Ee(e) {
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
    function ke() {
      var e = babelHelpers.extends({}, G, { trigger_code: De(O) });
      q != null && (e.intent_backend_load_ms = q);
      var t = { trigger_source: O },
        n = B;
      n != null &&
        ((t.boot_defer_reason = n.reason),
        (e.boot_defer_reason_code = xe(n.reason)),
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
    function Ie(e) {
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
    function Te(e) {
      return e != null ? "deferred" : O === "prewarm" ? "eager" : "intent";
    }
    function De(e) {
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
    function xe(e) {
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
    function $e(e, t) {
      return !t && (e == null ? void 0 : e.reason) === "hidden_prewarm";
    }
    function Pe(e) {
      (e &&
        o("WAWebVoipHiddenPrewarmIdleWork").watchTabFromHiddenPrewarmSuccess(),
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.triggerVoipInitSuccess(e));
    }
    function Ne(e) {
      (o("WAWebCoreActionsODS").logCallVoipInitSuccess(), e && Oe("success"));
    }
    function Me(e, t) {
      t ? Oe("failure") : e || o("WAWebCoreActionsODS").logCallVoipInitError();
    }
    function we(e, t) {
      if (e && V) {
        ((F = null),
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
    function Ae(e) {
      o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.getDidVoipInitError() &&
        (V && o("WAWebVoipInitFailureRecovery").isRecoverableVoipInitFailure(e)
          ? o("WAWebVoipInitFailureRecovery").armVoipInitFailureRecovery(oe)
          : o("WAWebVoipInitFailureRecovery").stopVoipInitFailureRecovery());
    }
    function Fe(e) {
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
    function Oe(e) {
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
    function Be(e, t) {
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
    function We() {
      X ||
        ((X = !0),
        (Y = document.hidden),
        document.addEventListener("visibilitychange", function () {
          var e = Y && !document.hidden;
          ((Y = document.hidden),
            e &&
              qe().catch(function (e) {
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
    async function qe() {
      if (Z != null) return await Z;
      var e = Ue();
      Z = e;
      try {
        return await e;
      } finally {
        Z === e && (Z = null);
      }
    }
    async function Ue() {
      if (
        !document.hidden &&
        (le && (await le.promise),
        !(
          document.hidden ||
          o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()
        ) &&
          o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getDidVoipInitError())
      ) {
        if (!Ve()) {
          o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetrySuppressed();
          return;
        }
        if (!te()) {
          o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetrySuppressed();
          return;
        }
        var e = K != null;
        if (e) {
          (o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetrySuppressed(),
            await ne());
          return;
        }
        (He(),
          o("WALogger").LOG(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "voip: retrying init after tab became visible",
              ])),
          ),
          r("WAWebODS").incr("web.call.voip_init.visibility_retry_attempt"));
        var t = await ne();
        t && r("WAWebODS").incr("web.call.voip_init.visibility_retry_success");
      }
    }
    function Ve() {
      return J === 0 || Date.now() - J >= w;
    }
    function He() {
      J = Date.now();
    }
    async function Ge() {
      var e = document.hidden;
      e &&
        r("WAWebODS").incr("web.call.voip_init.retry_idle_wait.started_hidden");
      var t = self.performance.now();
      await o("WAWebVoipBackgroundWarmConditions").waitForIdleCallback(ze(e));
      var n = {
        endedHidden: document.hidden,
        startedHidden: e,
        waitMs: Math.round(self.performance.now() - t),
      };
      return (Ye(n), n);
    }
    function ze(e) {
      return e && Xe()
        ? o("WAWebVoipHiddenPrewarmIdleWork").HIDDEN_TAB_IDLE_FALLBACK_MS
        : null;
    }
    function je() {
      H && Qe() && Ke();
    }
    function Ke() {
      ((H = !1),
        o("WAWebVoipWasmArtifactRecoveryEvents").requestVoipWasmReload());
    }
    function Qe() {
      try {
        return o("WAWebVoipInitReliabilityGates").isVoipInitWasmEnvFixEnabled();
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: WASM reload gate failed",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          !1
        );
      }
    }
    function Xe() {
      try {
        return o(
          "WAWebVoipBootInitDecision",
        ).isDeferredVoipBootHiddenPrewarmEnabled();
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: hidden prewarm gate failed",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          !1
        );
      }
    }
    function Ye(e) {
      var t = e.endedHidden,
        n = e.startedHidden,
        a = e.waitMs;
      (o("WALogger").LOG(
        x ||
          (x = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.initWAWebVoip = ee),
      (l.canRetryWAWebVoipInitAfterFailure = te),
      (l.retryWAWebVoipInitAfterFailure = ne),
      (l.restartVoipInitAfterArtifactRecovery = re));
  },
  98,
);
