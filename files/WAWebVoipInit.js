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
      A = !1,
      F = 0,
      O = null,
      B = null,
      W = !1,
      q = !1,
      U = 0,
      V = null;
    function H(e, t, n) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          e === void 0 && (e = "prewarm");
          var r = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (r == null) {
            (o("WALogger").WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: init skipped, selfLid not available yet",
                ])),
            ),
              (A = !0),
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.triggerVoipInitFailure());
            return;
          }
          if (!r.equals(P))
            ((P = r), (N = e), ce(), (M = t), (w = n), yield J(r));
          else {
            if (t != null) {
              var a = N === "prewarm" ? "prewarm_owned" : "intent_owned";
              o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  o("WAWebCoreActionsODS").logCallVoipBootInitFired(a);
                },
              );
            }
            Y && (yield Y.promise);
          }
        })),
        G.apply(this, arguments)
      );
    }
    function z() {
      return (
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getDidVoipInitError() &&
        A &&
        F < ue()
      );
    }
    function j() {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (B != null) return yield B;
          var e = Q();
          B = e;
          try {
            return yield e;
          } finally {
            B === e && (B = null);
          }
        })),
        K.apply(this, arguments)
      );
    }
    function Q() {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            Y &&
            (yield Y.promise,
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited())
          )
            return !0;
          if (!z())
            return o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited();
          var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (e == null) return !1;
          (F++,
            o("WAWebCoreActionsODS").logCallVoipInitRetryAttempt(),
            (P = e),
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: retrying init after transient failure attempt=",
                  " max=",
                  "",
                ])),
              F,
              ue(),
            ));
          var t = yield Le(),
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
          yield J(e, !0, t);
          var r = o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited();
          return (
            r
              ? o("WAWebCoreActionsODS").logCallVoipInitRetrySuccess()
              : (o("WAWebCoreActionsODS").logCallVoipInitRetryFailure(),
                z() ||
                  o("WAWebCoreActionsODS").logCallVoipInitRetryExhausted()),
            r
          );
        })),
        X.apply(this, arguments)
      );
    }
    var Y = null;
    function J(e, t, n) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
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
              Y &&
              (yield Y.promise,
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
            Y = new (o("WAResolvable").Resolvable)();
            var i = M;
            (!t &&
              i != null &&
              o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  o("WAWebCoreActionsODS").logCallVoipBootInitFired(i.reason);
                },
              ),
              o("WAWebVoipQplHelpers").startVoipInitQpl(fe()),
              de(t, a),
              me(t));
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
                  (A = !1),
                  o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.triggerVoipInitFailure());
                return;
              }
              (he(),
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
                _ = p != null ? o("WAWebWidFactory").asUserWidOrThrow(p) : null,
                f =
                  c == null
                    ? void 0
                    : c.voipInit(
                        (l = p == null ? void 0 : p.toString({ legacy: !0 })) !=
                          null
                          ? l
                          : "",
                        (s = _ == null ? void 0 : _.toString({ legacy: !0 })) !=
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
                        (u = o("WAWebUserPrefsGeneral").getUserPrivacySettings()
                          .disallowAllP2p) != null
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
                ce(),
                o("WAWebCoreActionsODS").logCallVoipInitSuccess(),
                o("WAWebVoipQplHelpers").endVoipInitQplSuccess({
                  bool: { download_only: !1 },
                }));
            } catch (e) {
              o("WAWebVoipQplHelpers").endVoipInitQplFail("init_error", oe(e));
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
                  (A = !1),
                  o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.triggerVoipInitFailure());
                return;
              }
              t || o("WAWebCoreActionsODS").logCallVoipInitError();
              var P = ee(e);
              (se(e, P, t),
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
                (P && te()) ||
                o(
                  "WAWebVoipPthreadGlueFailureTracker",
                ).hasTerminalPthreadGlueFailure();
              ((A = !w),
                w &&
                  o("WAWebBackendApi").frontendFireAndForget(
                    "markVoipWasmArtifactUnavailable",
                  ),
                o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.triggerVoipInitFailure(
                  P ? "wasm_contract_mismatch" : null,
                ),
                he());
            } finally {
              var F;
              (o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.markVoipInitAttemptEnded(),
                (F = Y) == null || F.resolve(),
                (Y = null));
            }
          }
        })),
        Z.apply(this, arguments)
      );
    }
    function ee(e) {
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
    function te() {
      try {
        return r("justknobx")._("5809");
      } catch (e) {
        return !0;
      }
    }
    function ne(e) {
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
    function re(e) {
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
    function oe(e) {
      var t = e instanceof Error ? e.name + ": " + e.message : String(e);
      return {
        int: {
          failure_fingerprint_code: ie(re(t)),
          failure_phase_code: ae(ne(t)),
        },
      };
    }
    function ae(e) {
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
    function ie(e) {
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
    function le() {
      var e;
      return (e = o(
        "WAWebVoipWasmArtifactRegistry",
      ).getSelectedVoipWasmUri()) != null
        ? e
        : "unknown";
    }
    function se(e, t, n) {
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
          ne(r),
          re(r),
          le(),
        ));
    }
    function ue() {
      if (O == null)
        try {
          O = Math.max(0, r("justknobx")._("4786"));
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
            (O = T));
        }
      return O;
    }
    function ce() {
      ((A = !1),
        (F = 0),
        (O = null),
        (B = null),
        (U = 0),
        (M = null),
        (w = null));
    }
    function de(e, t) {
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
    function me(e) {
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          !e &&
            o("WAWebVoipBootInitDecision").getVoipBootInitDecision() ===
              "deferred" &&
            o("WAWebCoreActionsODS").logCallVoipInitDeferredStart(pe());
        },
      );
    }
    function pe() {
      return N === "call"
        ? "call"
        : N === "incoming"
          ? _e(w)
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
    function _e(e) {
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
    function fe() {
      var e = { trigger_code: ge(N) },
        t = { trigger_source: N },
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
    function ge(e) {
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
    function he() {
      W ||
        ((W = !0),
        (q = document.hidden),
        document.addEventListener("visibilitychange", function () {
          var e = q && !document.hidden;
          ((q = document.hidden),
            e &&
              ye().catch(function (e) {
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
    function ye() {
      return Ce.apply(this, arguments);
    }
    function Ce() {
      return (
        (Ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (V != null) return yield V;
          var e = be();
          V = e;
          try {
            return yield e;
          } finally {
            V === e && (V = null);
          }
        })),
        Ce.apply(this, arguments)
      );
    }
    function be() {
      return ve.apply(this, arguments);
    }
    function ve() {
      return (
        (ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !document.hidden &&
            (Y && (yield Y.promise),
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
            if (!Se()) {
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed();
              return;
            }
            if (!z()) {
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed();
              return;
            }
            var e = B != null;
            if (e) {
              (o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed(),
                yield j());
              return;
            }
            (Re(),
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: retrying init after tab became visible",
                  ])),
              ),
              o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetryAttempt());
            var t = yield j();
            t &&
              o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetrySuccess();
          }
        })),
        ve.apply(this, arguments)
      );
    }
    function Se() {
      return U === 0 || Date.now() - U >= x;
    }
    function Re() {
      U = Date.now();
    }
    function Le() {
      return Ee.apply(this, arguments);
    }
    function Ee() {
      return (
        (Ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
          return (ke(r), r);
        })),
        Ee.apply(this, arguments)
      );
    }
    function ke(e) {
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
      (l.initWAWebVoip = H),
      (l.canRetryWAWebVoipInitAfterFailure = z),
      (l.retryWAWebVoipInitAfterFailure = j));
  },
  98,
);
