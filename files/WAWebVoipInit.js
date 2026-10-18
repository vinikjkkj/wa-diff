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
      D = (e = n("cr:17219")) != null ? e : {},
      x = D.getWindowsBridge,
      $ = 1,
      P = 5e3,
      N = 60 * 1e3,
      M = 5e3,
      w,
      A = "prewarm",
      F = null,
      O = null,
      B = null,
      W = null,
      q = !1,
      U = 0,
      V = null,
      H = null,
      G = !1,
      z = !1,
      j = 0,
      K = null;
    function Q(e, t, n, r, o) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            e === void 0 && (e = "prewarm");
            var i = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
            if (i == null) {
              (o("WALogger").WARN(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: init skipped, selfLid not available yet",
                  ])),
              ),
                (q = !0),
                o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.triggerVoipInitFailure());
              return;
            }
            if (!i.equals(w))
              ((w = i),
                (A = e),
                fe(),
                (F = t),
                (O = n),
                (B = r),
                (W = a),
                yield re(i));
            else {
              if (t != null) {
                var l = A === "prewarm" ? "prewarm_owned" : "intent_owned";
                o(
                  "WAWebVoipDeferredBootLogging",
                ).safelyLogVoipDeferredBootEvent(function () {
                  o("WAWebCoreActionsODS").logCallVoipBootInitFired(l);
                });
              }
              ne && (yield ne.promise, xe(e) && (yield Q(e, t, n, r, a)));
            }
          },
        )),
        X.apply(this, arguments)
      );
    }
    function Y() {
      return (
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getDidVoipInitError() &&
        q &&
        U < _e()
      );
    }
    function J() {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (H != null) return yield H;
          var e = ee();
          H = e;
          try {
            return yield e;
          } finally {
            H === e && (H = null);
          }
        })),
        Z.apply(this, arguments)
      );
    }
    function ee() {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            ne &&
            (yield ne.promise,
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited())
          )
            return !0;
          if (!Y())
            return o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited();
          var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (e == null) return !1;
          (U++,
            o("WAWebCoreActionsODS").logCallVoipInitRetryAttempt(),
            (w = e),
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: retrying init after transient failure attempt=",
                  " max=",
                  "",
                ])),
              U,
              _e(),
            ));
          var t = yield We(),
            n = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (n == null || !e.equals(n))
            return (
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: skip retry, identity changed in idle wait",
                  ])),
              ),
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getIsVoipInited()
            );
          yield re(e, !0, t);
          var r = o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited();
          return (
            r
              ? o("WAWebCoreActionsODS").logCallVoipInitRetrySuccess()
              : (o("WAWebCoreActionsODS").logCallVoipInitRetryFailure(),
                Y() ||
                  o("WAWebCoreActionsODS").logCallVoipInitRetryExhausted()),
            r
          );
        })),
        te.apply(this, arguments)
      );
    }
    var ne = null;
    function re(e, t, n) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a) {
            if (
              (t === void 0 && (t = !1),
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
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
                ne &&
                (yield ne.promise,
                o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.getIsVoipInited() ||
                  o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.getDidVoipInitError())
              ) {
                o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: init already done, ignoring duplicate call",
                    ])),
                );
                return;
              }
              ne = new (o("WAResolvable").Resolvable)();
              var i = F,
                l = Ee(i, t);
              (!t &&
                i != null &&
                o(
                  "WAWebVoipDeferredBootLogging",
                ).safelyLogVoipDeferredBootEvent(function () {
                  o("WAWebCoreActionsODS").logCallVoipBootInitFired(i.reason);
                }),
                o("WAWebVoipQplHelpers").startVoipInitQpl(ve()),
                ge(t, a),
                ye(t));
              try {
                var s, u, c;
                if (
                  (o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.markVoipInitAttemptStarted(
                    A === "prewarm" &&
                      (!t ||
                        o(
                          "WAWebVoipInitEventEmitter",
                        ).VoipInitEventEmitter.getVoipWebStackCreatedAtMs() !=
                          null),
                  ),
                  o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.markVoipInitTrigger(Se(i)),
                  o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling())
                ) {
                  (o("WALogger").LOG(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: init skipped due to unsupported browser",
                      ])),
                  ),
                    o("WAWebCoreActionsODS").logCallVoipInitSkipUnsupported(),
                    o("WAWebVoipQplHelpers").endVoipInitQplFail(
                      "unsupported_browser",
                    ),
                    (q = !1),
                    o(
                      "WAWebVoipInitEventEmitter",
                    ).VoipInitEventEmitter.triggerVoipInitFailure());
                  return;
                }
                (Ne(),
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
                      P,
                    );
                  } catch (e) {
                    o("WALogger")
                      .WARN(
                        R ||
                          (R = babelHelpers.taggedTemplateLiteralLoose([
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
                        L ||
                          (L = babelHelpers.taggedTemplateLiteralLoose([
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
                  (yield (T || (T = n("Promise"))).all([
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
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
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
                  x == null ||
                    (C = x(
                      r("WAWebWindowsHybridBridgeInitiator").WAWebVoipInit,
                    )) == null ||
                    (C = C.voip) == null ||
                    C.setHandlers(d.callbacks);
                }
                (ke(l),
                  fe(),
                  Ie(l),
                  o("WAWebVoipQplHelpers").endVoipInitQplSuccess({
                    bool: { download_only: !1 },
                  }));
              } catch (e) {
                o("WAWebVoipQplHelpers").endVoipInitQplFail(
                  "init_error",
                  ue(e),
                );
                var I = e instanceof Error ? e.message : String(e),
                  D =
                    r("WAWebEnvironment").isWindows &&
                    I.includes(
                      "Attempted to create Web stack in Windows environment",
                    );
                if (D) {
                  (o("WALogger").LOG(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: init skipped on Windows Hybrid due to mis-resolve",
                      ])),
                  ),
                    (q = !1),
                    o(
                      "WAWebVoipInitEventEmitter",
                    ).VoipInitEventEmitter.triggerVoipInitFailure());
                  return;
                }
                Te(t, l);
                var $ = ae(e);
                (pe(e, $, t), Pe(e, l));
                var N =
                  ($ && ie()) ||
                  o(
                    "WAWebVoipPthreadGlueFailureTracker",
                  ).hasTerminalPthreadGlueFailure();
                ((q = !N),
                  N &&
                    o("WAWebBackendApi").frontendFireAndForget(
                      "markVoipWasmArtifactUnavailable",
                    ),
                  De(l, $),
                  Ne());
              } finally {
                var M;
                (o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.markVoipInitAttemptEnded(),
                  (M = ne) == null || M.resolve(),
                  (ne = null));
              }
            }
          },
        )),
        oe.apply(this, arguments)
      );
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
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
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
      if (V == null)
        try {
          V = Math.max(0, r("justknobx")._("4786"));
        } catch (e) {
          (o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: init retry count JK unavailable, using fallback=",
                ": ",
                "",
              ])),
            $,
            String(e),
          ),
            (V = $));
        }
      return V;
    }
    function fe() {
      ((q = !1),
        (U = 0),
        (V = null),
        (H = null),
        (j = 0),
        (F = null),
        (O = null),
        (B = null),
        (W = null));
    }
    function ge(e, t) {
      try {
        (o("WAWebVoipQplHelpers").voipInitQplAnnotateStart({
          bootDecision: o(
            "WAWebVoipBootInitDecision",
          ).getVoipBootInitDecision(),
          isRetry: e,
        }),
          o("WAWebVoipQplHelpers").voipInitQplAnnotateTrigger(he(e)),
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
    function he(e) {
      var t;
      return (t = e ? null : W) != null
        ? t
        : o("WAWebPageVisibilityRecency").snapshotPageVisibility();
    }
    function ye(e) {
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          !e &&
            o("WAWebVoipBootInitDecision").getVoipBootInitDecision() ===
              "deferred" &&
            o("WAWebCoreActionsODS").logCallVoipInitDeferredStart(Ce());
        },
      );
    }
    function Ce() {
      return A === "call"
        ? "call"
        : A === "incoming"
          ? be(O)
          : A === "prewarm"
            ? F == null
              ? "prewarm_unscheduled"
              : "prewarm_scheduled"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    A,
                );
              })();
    }
    function be(e) {
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
    function ve() {
      var e = { trigger_code: Re(A) };
      B != null && (e.intent_backend_load_ms = B);
      var t = { trigger_source: A },
        n = F;
      n != null &&
        ((t.boot_defer_reason = n.reason),
        (e.boot_defer_reason_code = Le(n.reason)),
        n.waitMs != null && (e.boot_defer_wait_ms = n.waitMs));
      var r = O;
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
    function Se(e) {
      var t;
      return A === "prewarm"
        ? (t = e == null ? void 0 : e.reason) != null
          ? t
          : "boot"
        : A === "call"
          ? "call"
          : A === "incoming"
            ? "incoming"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    A,
                );
              })();
    }
    function Re(e) {
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
    function Le(e) {
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
    function Ee(e, t) {
      return !t && (e == null ? void 0 : e.reason) === "hidden_prewarm";
    }
    function ke(e) {
      (e &&
        o("WAWebVoipHiddenPrewarmIdleWork").watchTabFromHiddenPrewarmSuccess(),
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.triggerVoipInitSuccess(e));
    }
    function Ie(e) {
      (o("WAWebCoreActionsODS").logCallVoipInitSuccess(), e && $e("success"));
    }
    function Te(e, t) {
      t ? $e("failure") : e || o("WAWebCoreActionsODS").logCallVoipInitError();
    }
    function De(e, t) {
      if (e && q) {
        ((w = null),
          o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.markVoipInitUntried(),
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
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
    function xe(e) {
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
    function $e(e) {
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
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
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
    function Pe(e, t) {
      var n = o("WALogger").ERROR(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "voip: init failed: ",
              "",
            ])),
          e,
        ),
        r = t ? n.tags("non-sad") : n;
      r.sendLogs("voip: init-failed");
    }
    function Ne() {
      G ||
        ((G = !0),
        (z = document.hidden),
        document.addEventListener("visibilitychange", function () {
          var e = z && !document.hidden;
          ((z = document.hidden),
            e &&
              Me().catch(function (e) {
                o("WALogger")
                  .ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: visibility init check failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("voip-visibility-init-failed");
              }));
        }));
    }
    function Me() {
      return we.apply(this, arguments);
    }
    function we() {
      return (
        (we = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (K != null) return yield K;
          var e = Ae();
          K = e;
          try {
            return yield e;
          } finally {
            K === e && (K = null);
          }
        })),
        we.apply(this, arguments)
      );
    }
    function Ae() {
      return Fe.apply(this, arguments);
    }
    function Fe() {
      return (
        (Fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !document.hidden &&
            (ne && (yield ne.promise),
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
            if (!Oe()) {
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed();
              return;
            }
            if (!Y()) {
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed();
              return;
            }
            var e = H != null;
            if (e) {
              (o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed(),
                yield J());
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
            var t = yield J();
            t &&
              o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetrySuccess();
          }
        })),
        Fe.apply(this, arguments)
      );
    }
    function Oe() {
      return j === 0 || Date.now() - j >= N;
    }
    function Be() {
      j = Date.now();
    }
    function We() {
      return qe.apply(this, arguments);
    }
    function qe() {
      return (
        (qe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = document.hidden;
          e &&
            o(
              "WAWebCoreActionsODS",
            ).logCallVoipInitRetryIdleWaitStartedHidden();
          var t = self.performance.now();
          yield o("WAWebVoipBackgroundWarmConditions").waitForIdleCallback(
            Ue(e),
          );
          var n = {
            endedHidden: document.hidden,
            startedHidden: e,
            waitMs: Math.round(self.performance.now() - t),
          };
          return (He(n), n);
        })),
        qe.apply(this, arguments)
      );
    }
    function Ue(e) {
      return e && Ve()
        ? o("WAWebVoipHiddenPrewarmIdleWork").HIDDEN_TAB_IDLE_FALLBACK_MS
        : null;
    }
    function Ve() {
      try {
        return o(
          "WAWebVoipBootInitDecision",
        ).isDeferredVoipBootHiddenPrewarmEnabled();
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: hidden prewarm gate failed",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          !1
        );
      }
    }
    function He(e) {
      var t = e.endedHidden,
        n = e.startedHidden,
        r = e.waitMs;
      (o("WALogger").LOG(
        g ||
          (g = babelHelpers.taggedTemplateLiteralLoose([
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
          r >= M &&
            o("WAWebCoreActionsODS").logCallVoipInitRetryIdleWaitHiddenLong()));
    }
    ((l.VoipInitEventEmitter = o(
      "WAWebVoipInitEventEmitter",
    ).VoipInitEventEmitter),
      (l.initWAWebVoip = Q),
      (l.canRetryWAWebVoipInitAfterFailure = Y),
      (l.retryWAWebVoipInitAfterFailure = J));
  },
  98,
);
