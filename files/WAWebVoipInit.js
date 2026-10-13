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
      k = (e = n("cr:17219")) != null ? e : {},
      I = k.getWindowsBridge,
      T = 1,
      D = 5e3,
      x = 60 * 1e3,
      $ = 5e3,
      P,
      N = "prewarm",
      M = null,
      w = null,
      A = null,
      F = !1,
      O = 0,
      B = null,
      W = null,
      q = !1,
      U = !1,
      V = 0,
      H = null;
    function G(e, t, n, r) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            e === void 0 && (e = "prewarm");
            var a = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
            if (a == null) {
              (o("WALogger").WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: init skipped, selfLid not available yet",
                  ])),
              ),
                (F = !0),
                o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.triggerVoipInitFailure());
              return;
            }
            if (!a.equals(P))
              ((P = a), (N = e), de(), (M = t), (w = n), (A = r), yield Z(a));
            else {
              if (t != null) {
                var i = N === "prewarm" ? "prewarm_owned" : "intent_owned";
                o(
                  "WAWebVoipDeferredBootLogging",
                ).safelyLogVoipDeferredBootEvent(function () {
                  o("WAWebCoreActionsODS").logCallVoipBootInitFired(i);
                });
              }
              J && (yield J.promise);
            }
          },
        )),
        z.apply(this, arguments)
      );
    }
    function j() {
      return (
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getDidVoipInitError() &&
        F &&
        O < ce()
      );
    }
    function K() {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (W != null) return yield W;
          var e = X();
          W = e;
          try {
            return yield e;
          } finally {
            W === e && (W = null);
          }
        })),
        Q.apply(this, arguments)
      );
    }
    function X() {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            J &&
            (yield J.promise,
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited())
          )
            return !0;
          if (!j())
            return o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited();
          var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (e == null) return !1;
          (O++,
            o("WAWebCoreActionsODS").logCallVoipInitRetryAttempt(),
            (P = e),
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: retrying init after transient failure attempt=",
                  " max=",
                  "",
                ])),
              O,
              ce(),
            ));
          var t = yield Ee(),
            n = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (n == null || !e.equals(n))
            return (
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: skip retry, identity changed in idle wait",
                  ])),
              ),
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getIsVoipInited()
            );
          yield Z(e, !0, t);
          var r = o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited();
          return (
            r
              ? o("WAWebCoreActionsODS").logCallVoipInitRetrySuccess()
              : (o("WAWebCoreActionsODS").logCallVoipInitRetryFailure(),
                j() ||
                  o("WAWebCoreActionsODS").logCallVoipInitRetryExhausted()),
            r
          );
        })),
        Y.apply(this, arguments)
      );
    }
    var J = null;
    function Z(e, t, n) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a) {
            if (
              (t === void 0 && (t = !1),
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
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
                J &&
                (yield J.promise,
                o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.getIsVoipInited() ||
                  o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.getDidVoipInitError())
              ) {
                o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: init already done, ignoring duplicate call",
                    ])),
                );
                return;
              }
              J = new (o("WAResolvable").Resolvable)();
              var i = M;
              (!t &&
                i != null &&
                o(
                  "WAWebVoipDeferredBootLogging",
                ).safelyLogVoipDeferredBootEvent(function () {
                  o("WAWebCoreActionsODS").logCallVoipBootInitFired(i.reason);
                }),
                o("WAWebVoipQplHelpers").startVoipInitQpl(ge()),
                me(t, a),
                pe(t));
              try {
                var l, s, u;
                if (
                  (o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.markVoipInitAttemptStarted(
                    N === "prewarm" &&
                      (!t ||
                        o(
                          "WAWebVoipInitEventEmitter",
                        ).VoipInitEventEmitter.getVoipWebStackCreatedAtMs() !=
                          null),
                  ),
                  o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling())
                ) {
                  (o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: init skipped due to unsupported browser",
                      ])),
                  ),
                    o("WAWebCoreActionsODS").logCallVoipInitSkipUnsupported(),
                    o("WAWebVoipQplHelpers").endVoipInitQplFail(
                      "unsupported_browser",
                    ),
                    (F = !1),
                    o(
                      "WAWebVoipInitEventEmitter",
                    ).VoipInitEventEmitter.triggerVoipInitFailure());
                  return;
                }
                (ye(),
                  o(
                    "WAWebVoipBrowserAudioStatus",
                  ).preDetectBrowserAudioCapabilities());
                var c = yield o(
                  "WAWebVoipStackInterface",
                ).getVoipStackInterface();
                if ((c == null ? void 0 : c.type) === "windows") {
                  var d = null;
                  try {
                    d = yield o("WAPromiseTimeout").promiseTimeout(
                      o("WAWebCountryCodeUtils").getMyCallingCode(),
                      D,
                    );
                  } catch (e) {
                    o("WALogger")
                      .WARN(
                        C ||
                          (C = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: getMyCallingCode failed or timed out, using fallback: ",
                            "",
                          ])),
                        String(e),
                      )
                      .sendLogs("voip-get-self-country-code-failed");
                  }
                  try {
                    yield c.setSelfCountryCode(d != null ? d : "");
                  } catch (e) {
                    o("WALogger")
                      .WARN(
                        b ||
                          (b = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: setSelfCountryCode failed, continuing init: ",
                            "",
                          ])),
                        String(e),
                      )
                      .sendLogs("voip-set-self-country-code-failed");
                  }
                }
                var m = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
                  p = m != null && !m.isLid() ? m : null,
                  _ =
                    p != null ? o("WAWebWidFactory").asUserWidOrThrow(p) : null,
                  f =
                    c == null
                      ? void 0
                      : c.voipInit(
                          (l =
                            p == null ? void 0 : p.toString({ legacy: !0 })) !=
                            null
                            ? l
                            : "",
                          (s =
                            _ == null ? void 0 : _.toString({ legacy: !0 })) !=
                            null
                            ? s
                            : "",
                          e.toString({ legacy: !0 }),
                        );
                if (
                  (yield (E || (E = n("Promise"))).all([
                    f,
                    c == null
                      ? void 0
                      : c.setHideMyIp(
                          (u = o(
                            "WAWebUserPrefsGeneral",
                          ).getUserPrivacySettings().disallowAllP2p) != null
                            ? u
                            : !1,
                        ),
                  ]),
                  (c == null ? void 0 : c.type) === "web")
                )
                  var L = new (o("WAWebCallWamEvent").CallWamEvent)(),
                    k = new (o(
                      "WAWebJoinableCallWamEvent",
                    ).JoinableCallWamEvent)();
                try {
                  o("WAWebVoipNetworkMedium").startNetworkMediumMonitoring();
                } catch (e) {
                  o("WALogger").WARN(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
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
                  var T;
                  I == null ||
                    (T = I(
                      r("WAWebWindowsHybridBridgeInitiator").WAWebVoipInit,
                    )) == null ||
                    (T = T.voip) == null ||
                    T.setHandlers(c.callbacks);
                }
                (o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.triggerVoipInitSuccess(),
                  de(),
                  o("WAWebCoreActionsODS").logCallVoipInitSuccess(),
                  o("WAWebVoipQplHelpers").endVoipInitQplSuccess({
                    bool: { download_only: !1 },
                  }));
              } catch (e) {
                o("WAWebVoipQplHelpers").endVoipInitQplFail(
                  "init_error",
                  ae(e),
                );
                var x = e instanceof Error ? e.message : String(e),
                  $ =
                    r("WAWebEnvironment").isWindows &&
                    x.includes(
                      "Attempted to create Web stack in Windows environment",
                    );
                if ($) {
                  (o("WALogger").LOG(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: init skipped on Windows Hybrid due to mis-resolve",
                      ])),
                  ),
                    (F = !1),
                    o(
                      "WAWebVoipInitEventEmitter",
                    ).VoipInitEventEmitter.triggerVoipInitFailure());
                  return;
                }
                t || o("WAWebCoreActionsODS").logCallVoipInitError();
                var P = te(e);
                (ue(e, P, t),
                  o("WALogger")
                    .ERROR(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: init failed: ",
                          "",
                        ])),
                      e,
                    )
                    .sendLogs("voip: init-failed"));
                var w =
                  (P && ne()) ||
                  o(
                    "WAWebVoipPthreadGlueFailureTracker",
                  ).hasTerminalPthreadGlueFailure();
                ((F = !w),
                  w &&
                    o("WAWebBackendApi").frontendFireAndForget(
                      "markVoipWasmArtifactUnavailable",
                    ),
                  o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.triggerVoipInitFailure(
                    P ? "wasm_contract_mismatch" : null,
                  ),
                  ye());
              } finally {
                var A;
                (o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.markVoipInitAttemptEnded(),
                  (A = J) == null || A.resolve(),
                  (J = null));
              }
            }
          },
        )),
        ee.apply(this, arguments)
      );
    }
    function te(e) {
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
    function ne() {
      try {
        return r("justknobx")._("5809");
      } catch (e) {
        return !0;
      }
    }
    function re(e) {
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
    function oe(e) {
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
    function ae(e) {
      var t = e instanceof Error ? e.name + ": " + e.message : String(e);
      return {
        int: {
          failure_fingerprint_code: le(oe(t)),
          failure_phase_code: ie(re(t)),
        },
      };
    }
    function ie(e) {
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
    function le(e) {
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
    function se() {
      var e;
      return (e = o(
        "WAWebVoipWasmArtifactRegistry",
      ).getSelectedVoipWasmUri()) != null
        ? e
        : "unknown";
    }
    function ue(e, t, n) {
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
          re(r),
          oe(r),
          se(),
        ));
    }
    function ce() {
      if (B == null)
        try {
          B = Math.max(0, r("justknobx")._("4786"));
        } catch (e) {
          (o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: init retry count JK unavailable, using fallback=",
                ": ",
                "",
              ])),
            T,
            String(e),
          ),
            (B = T));
        }
      return B;
    }
    function de() {
      ((F = !1),
        (O = 0),
        (B = null),
        (W = null),
        (V = 0),
        (M = null),
        (w = null),
        (A = null));
    }
    function me(e, t) {
      try {
        (o("WAWebVoipQplHelpers").voipInitQplAnnotateStart({
          bootDecision: o(
            "WAWebVoipBootInitDecision",
          ).getVoipBootInitDecision(),
          isRetry: e,
        }),
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
    function pe(e) {
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          !e &&
            o("WAWebVoipBootInitDecision").getVoipBootInitDecision() ===
              "deferred" &&
            o("WAWebCoreActionsODS").logCallVoipInitDeferredStart(_e());
        },
      );
    }
    function _e() {
      return N === "call"
        ? "call"
        : N === "incoming"
          ? fe(w)
          : N === "prewarm"
            ? M == null
              ? "prewarm_unscheduled"
              : "prewarm_scheduled"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    N,
                );
              })();
    }
    function fe(e) {
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
    function ge() {
      var e = { trigger_code: he(N) };
      A != null && (e.intent_backend_load_ms = A);
      var t = { trigger_source: N },
        n = M;
      n != null &&
        ((t.boot_defer_reason = n.reason),
        n.waitMs != null && (e.boot_defer_wait_ms = n.waitMs));
      var r = w;
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
    function he(e) {
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
    function ye() {
      q ||
        ((q = !0),
        (U = document.hidden),
        document.addEventListener("visibilitychange", function () {
          var e = U && !document.hidden;
          ((U = document.hidden),
            e &&
              Ce().catch(function (e) {
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
    function Ce() {
      return be.apply(this, arguments);
    }
    function be() {
      return (
        (be = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (H != null) return yield H;
          var e = ve();
          H = e;
          try {
            return yield e;
          } finally {
            H === e && (H = null);
          }
        })),
        be.apply(this, arguments)
      );
    }
    function ve() {
      return Se.apply(this, arguments);
    }
    function Se() {
      return (
        (Se = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !document.hidden &&
            (J && (yield J.promise),
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
            if (!Re()) {
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed();
              return;
            }
            if (!j()) {
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed();
              return;
            }
            var e = W != null;
            if (e) {
              (o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed(),
                yield K());
              return;
            }
            (Le(),
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: retrying init after tab became visible",
                  ])),
              ),
              o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetryAttempt());
            var t = yield K();
            t &&
              o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetrySuccess();
          }
        })),
        Se.apply(this, arguments)
      );
    }
    function Re() {
      return V === 0 || Date.now() - V >= x;
    }
    function Le() {
      V = Date.now();
    }
    function Ee() {
      return ke.apply(this, arguments);
    }
    function ke() {
      return (
        (ke = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = document.hidden;
          e &&
            o(
              "WAWebCoreActionsODS",
            ).logCallVoipInitRetryIdleWaitStartedHidden();
          var t = self.performance.now();
          yield new (E || (E = n("Promise")))(function (e) {
            o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
              return e();
            });
          });
          var r = {
            endedHidden: document.hidden,
            startedHidden: e,
            waitMs: Math.round(self.performance.now() - t),
          };
          return (Ie(r), r);
        })),
        ke.apply(this, arguments)
      );
    }
    function Ie(e) {
      var t = e.endedHidden,
        n = e.startedHidden,
        r = e.waitMs;
      (o("WALogger").LOG(
        m ||
          (m = babelHelpers.taggedTemplateLiteralLoose([
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
          r >= $ &&
            o("WAWebCoreActionsODS").logCallVoipInitRetryIdleWaitHiddenLong()));
    }
    ((l.VoipInitEventEmitter = o(
      "WAWebVoipInitEventEmitter",
    ).VoipInitEventEmitter),
      (l.initWAWebVoip = G),
      (l.canRetryWAWebVoipInitAfterFailure = j),
      (l.retryWAWebVoipInitAfterFailure = K));
  },
  98,
);
