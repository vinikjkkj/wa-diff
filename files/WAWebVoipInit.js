__d(
  "WAWebVoipInit",
  [
    "Promise",
    "WALogger",
    "WAPromiseTimeout",
    "WAResolvable",
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
    "WAWebVoipGatingUtils",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipNetworkMedium",
    "WAWebVoipQplHelpers",
    "WAWebVoipStackInterface",
    "WAWebVoipWasmArtifactRegistry",
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
      $ = !1,
      P = 0,
      N = null,
      M = null,
      w = !1,
      A = !1,
      F = 0,
      O = null;
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e === void 0 && (e = "prewarm");
          var t = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (t == null) {
            (o("WALogger").WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: init skipped, selfLid not available yet",
                ])),
            ),
              ($ = !0),
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.triggerVoipInitFailure());
            return;
          }
          t.equals(D)
            ? z && (yield z.promise)
            : ((D = t), (x = e), te(), yield j(t));
        })),
        W.apply(this, arguments)
      );
    }
    function q() {
      return (
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getDidVoipInitError() &&
        $ &&
        P < ee()
      );
    }
    function U() {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (M != null) return yield M;
          var e = H();
          M = e;
          try {
            return yield e;
          } finally {
            M === e && (M = null);
          }
        })),
        V.apply(this, arguments)
      );
    }
    function H() {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            z &&
            (yield z.promise,
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited())
          )
            return !0;
          if (!q())
            return o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited();
          var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (e == null) return !1;
          (P++,
            o("WAWebCoreActionsODS").logCallVoipInitRetryAttempt(),
            (D = e),
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: retrying init after transient failure attempt=",
                  " max=",
                  "",
                ])),
              P,
              ee(),
            ),
            yield ue());
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
          yield j(e, !0);
          var n = o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited();
          return (
            n
              ? o("WAWebCoreActionsODS").logCallVoipInitRetrySuccess()
              : (o("WAWebCoreActionsODS").logCallVoipInitRetryFailure(),
                q() ||
                  o("WAWebCoreActionsODS").logCallVoipInitRetryExhausted()),
            n
          );
        })),
        G.apply(this, arguments)
      );
    }
    var z = null;
    function j(e, t) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
              z &&
              (yield z.promise,
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
            ((z = new (o("WAResolvable").Resolvable)()),
              o("WAWebVoipQplHelpers").startVoipInitQpl({
                string: { trigger_source: x },
              }));
            try {
              var a, i, l;
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
                  ($ = !1),
                  o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.triggerVoipInitFailure());
                return;
              }
              (ne(),
                o(
                  "WAWebVoipBrowserAudioStatus",
                ).preDetectBrowserAudioCapabilities());
              var s = yield o(
                "WAWebVoipStackInterface",
              ).getVoipStackInterface();
              if ((s == null ? void 0 : s.type) === "windows") {
                var u = null;
                try {
                  u = yield o("WAPromiseTimeout").promiseTimeout(
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
                  yield s.setSelfCountryCode(u != null ? u : "");
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
              var c = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
                d = c != null && !c.isLid() ? c : null,
                m = d != null ? o("WAWebWidFactory").asUserWidOrThrow(d) : null,
                p =
                  s == null
                    ? void 0
                    : s.voipInit(
                        (a = d == null ? void 0 : d.toString({ legacy: !0 })) !=
                          null
                          ? a
                          : "",
                        (i = m == null ? void 0 : m.toString({ legacy: !0 })) !=
                          null
                          ? i
                          : "",
                        e.toString({ legacy: !0 }),
                      );
              if (
                (yield (R || (R = n("Promise"))).all([
                  p,
                  s == null
                    ? void 0
                    : s.setHideMyIp(
                        (l = o("WAWebUserPrefsGeneral").getUserPrivacySettings()
                          .disallowAllP2p) != null
                          ? l
                          : !1,
                      ),
                ]),
                (s == null ? void 0 : s.type) === "web")
              )
                var S = new (o("WAWebCallWamEvent").CallWamEvent)(),
                  L = new (o(
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
                ((s == null ? void 0 : s.type) === "web" &&
                  o("WAWebVoipCrashRecovery").initCrashRecovery(),
                (s == null ? void 0 : s.type) === "windows")
              ) {
                var k;
                E == null ||
                  (k = E(
                    r("WAWebWindowsHybridBridgeInitiator").WAWebVoipInit,
                  )) == null ||
                  (k = k.voip) == null ||
                  k.setHandlers(s.callbacks);
              }
              (o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.triggerVoipInitSuccess(),
                te(),
                o("WAWebCoreActionsODS").logCallVoipInitSuccess(),
                o("WAWebVoipQplHelpers").endVoipInitQplSuccess({
                  bool: { download_only: !1 },
                }));
            } catch (e) {
              o("WAWebVoipQplHelpers").endVoipInitQplFail("init_error");
              var T = e instanceof Error ? e.message : String(e),
                D =
                  r("WAWebEnvironment").isWindows &&
                  T.includes(
                    "Attempted to create Web stack in Windows environment",
                  );
              if (D) {
                (o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: init skipped on Windows Hybrid due to mis-resolve",
                    ])),
                ),
                  ($ = !1),
                  o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.triggerVoipInitFailure());
                return;
              }
              t || o("WAWebCoreActionsODS").logCallVoipInitError();
              var P = Q(e);
              (Z(e, P, t),
                o("WALogger")
                  .ERROR(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: init failed: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("voip: init-failed"),
                ($ = !0),
                o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.triggerVoipInitFailure(
                  P ? "wasm_contract_mismatch" : null,
                ),
                ne());
            } finally {
              var N;
              ((N = z) == null || N.resolve(), (z = null));
            }
          }
        })),
        K.apply(this, arguments)
      );
    }
    function Q(e) {
      var t = e instanceof Error ? e.name + ": " + e.message : String(e),
        n =
          t.includes("LinkError") &&
          t.includes("function import requires a callable");
      return n || t.includes("No EM_ASM constant found");
    }
    function X(e) {
      return e.includes("stack interface load timed out")
        ? "stack_interface_load"
        : e.includes("timeout waiting for RPC ready")
          ? "worker_rpc_ready"
          : e.includes("No EM_ASM constant found")
            ? "wasm_runtime"
            : e.includes("LinkError") || e.includes("WebAssembly")
              ? "wasm_instantiate"
              : "init";
    }
    function Y(e) {
      return e.includes("__cxa_current_primary_exception")
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
    function J() {
      var e;
      return (e = o(
        "WAWebVoipWasmArtifactRegistry",
      ).getSelectedVoipWasmUri()) != null
        ? e
        : "unknown";
    }
    function Z(e, t, n) {
      t && !n && o("WAWebCoreActionsODS").logCallVoipInitWasmContractMismatch();
      var r = e instanceof Error ? e.name + ": " + e.message : String(e);
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "voip: init failure artifacts phase=",
            " fingerprint=",
            " expectedWasmUri=",
            "",
          ])),
        X(r),
        Y(r),
        J(),
      );
    }
    function ee() {
      if (N == null)
        try {
          N = Math.max(0, r("justknobx")._("4786"));
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
            (N = k));
        }
      return N;
    }
    function te() {
      (($ = !1), (P = 0), (N = null), (M = null), (F = 0));
    }
    function ne() {
      w ||
        ((w = !0),
        (A = document.hidden),
        document.addEventListener("visibilitychange", function () {
          var e = A && !document.hidden;
          ((A = document.hidden),
            e &&
              re().catch(function (e) {
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
    function re() {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (O != null) return yield O;
          var e = ae();
          O = e;
          try {
            return yield e;
          } finally {
            O === e && (O = null);
          }
        })),
        oe.apply(this, arguments)
      );
    }
    function ae() {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !document.hidden &&
            (z && (yield z.promise),
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
            if (!le()) {
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed();
              return;
            }
            if (!q()) {
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed();
              return;
            }
            var e = M != null;
            if (e) {
              (o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed(),
                yield U());
              return;
            }
            (se(),
              o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: retrying init after tab became visible",
                  ])),
              ),
              o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetryAttempt());
            var t = yield U();
            t &&
              o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetrySuccess();
          }
        })),
        ie.apply(this, arguments)
      );
    }
    function le() {
      return F === 0 || Date.now() - F >= T;
    }
    function se() {
      F = Date.now();
    }
    function ue() {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield new (R || (R = n("Promise")))(function (e) {
            o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
              return e();
            });
          });
        })),
        ce.apply(this, arguments)
      );
    }
    ((l.VoipInitEventEmitter = o(
      "WAWebVoipInitEventEmitter",
    ).VoipInitEventEmitter),
      (l.initWAWebVoip = B),
      (l.canRetryWAWebVoipInitAfterFailure = q),
      (l.retryWAWebVoipInitAfterFailure = U));
  },
  98,
);
