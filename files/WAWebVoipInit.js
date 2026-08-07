__d(
  "WAWebVoipInit",
  [
    "Promise",
    "WALogger",
    "WAResolvable",
    "WAWebCallWamEvent",
    "WAWebCoreActionsODS",
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
      S = (e = n("cr:17219")) != null ? e : {},
      R = S.getWindowsBridge,
      L = 1,
      E = 60 * 1e3,
      k,
      I = "prewarm",
      T = !1,
      D = 0,
      x = null,
      $ = null,
      P = !1,
      N = !1,
      M = 0,
      w = null;
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e === void 0 && (e = "prewarm");
          var t = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (t == null) {
            (o("WALogger").WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: init skipped, selfLid not available yet",
                ])),
            ),
              (T = !0),
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.triggerVoipInitFailure());
            return;
          }
          t.equals(k)
            ? V && (yield V.promise)
            : ((k = t), (I = e), J(), yield H(t));
        })),
        F.apply(this, arguments)
      );
    }
    function O() {
      return (
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getDidVoipInitError() &&
        T &&
        D < Y()
      );
    }
    function B() {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if ($ != null) return yield $;
          var e = q();
          $ = e;
          try {
            return yield e;
          } finally {
            $ === e && ($ = null);
          }
        })),
        W.apply(this, arguments)
      );
    }
    function q() {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            V &&
            (yield V.promise,
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited())
          )
            return !0;
          if (!O())
            return o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited();
          var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (e == null) return !1;
          (D++,
            o("WAWebCoreActionsODS").logCallVoipInitRetryAttempt(),
            (k = e),
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: retrying init after transient failure attempt=",
                  " max=",
                  "",
                ])),
              D,
              Y(),
            ),
            yield ie());
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
          yield H(e, !0);
          var n = o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited();
          return (
            n
              ? o("WAWebCoreActionsODS").logCallVoipInitRetrySuccess()
              : (o("WAWebCoreActionsODS").logCallVoipInitRetryFailure(),
                O() ||
                  o("WAWebCoreActionsODS").logCallVoipInitRetryExhausted()),
            n
          );
        })),
        U.apply(this, arguments)
      );
    }
    var V = null;
    function H(e, t) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
              V &&
              (yield V.promise,
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
            ((V = new (o("WAResolvable").Resolvable)()),
              o("WAWebVoipQplHelpers").startVoipInitQpl({
                string: { trigger_source: I },
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
                  (T = !1),
                  o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.triggerVoipInitFailure());
                return;
              }
              (Z(),
                o(
                  "WAWebVoipBrowserAudioStatus",
                ).preDetectBrowserAudioCapabilities());
              var s = yield o(
                  "WAWebVoipStackInterface",
                ).getVoipStackInterface(),
                u = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
                c = u != null && !u.isLid() ? u : null,
                d = c != null ? o("WAWebWidFactory").asUserWidOrThrow(c) : null,
                m =
                  s == null
                    ? void 0
                    : s.voipInit(
                        (a = c == null ? void 0 : c.toString({ legacy: !0 })) !=
                          null
                          ? a
                          : "",
                        (i = d == null ? void 0 : d.toString({ legacy: !0 })) !=
                          null
                          ? i
                          : "",
                        e.toString({ legacy: !0 }),
                      );
              if (
                (yield (v || (v = n("Promise"))).all([
                  m,
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
                var p = new (o("WAWebCallWamEvent").CallWamEvent)(),
                  b = new (o(
                    "WAWebJoinableCallWamEvent",
                  ).JoinableCallWamEvent)();
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
                ((s == null ? void 0 : s.type) === "web" &&
                  o("WAWebVoipCrashRecovery").initCrashRecovery(),
                (s == null ? void 0 : s.type) === "windows")
              ) {
                var S;
                R == null ||
                  (S = R()) == null ||
                  (S = S.voip) == null ||
                  S.setHandlers(s.callbacks);
              }
              (o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.triggerVoipInitSuccess(),
                J(),
                o("WAWebCoreActionsODS").logCallVoipInitSuccess(),
                o("WAWebVoipQplHelpers").endVoipInitQplSuccess({
                  bool: { download_only: !1 },
                }));
            } catch (e) {
              o("WAWebVoipQplHelpers").endVoipInitQplFail("init_error");
              var L = e instanceof Error ? e.message : String(e),
                E =
                  r("WAWebEnvironment").isWindows &&
                  L.includes(
                    "Attempted to create Web stack in Windows environment",
                  );
              if (E) {
                (o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: init skipped on Windows Hybrid due to mis-resolve",
                    ])),
                ),
                  (T = !1),
                  o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.triggerVoipInitFailure());
                return;
              }
              t || o("WAWebCoreActionsODS").logCallVoipInitError();
              var k = z(e);
              (X(e, k, t),
                o("WALogger")
                  .ERROR(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: init failed: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("voip: init-failed"),
                (T = !0),
                o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.triggerVoipInitFailure(
                  k ? "wasm_contract_mismatch" : null,
                ),
                Z());
            } finally {
              var D;
              ((D = V) == null || D.resolve(), (V = null));
            }
          }
        })),
        G.apply(this, arguments)
      );
    }
    function z(e) {
      var t = e instanceof Error ? e.name + ": " + e.message : String(e),
        n =
          t.includes("LinkError") &&
          t.includes("function import requires a callable");
      return n || t.includes("No EM_ASM constant found");
    }
    function j(e) {
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
    function K(e) {
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
    function Q() {
      var e;
      return (e = o(
        "WAWebVoipWasmArtifactRegistry",
      ).getSelectedVoipWasmUri()) != null
        ? e
        : "unknown";
    }
    function X(e, t, n) {
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
        j(r),
        K(r),
        Q(),
      );
    }
    function Y() {
      if (x == null)
        try {
          x = Math.max(0, r("justknobx")._("4786"));
        } catch (e) {
          (o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: init retry count JK unavailable, using fallback=",
                ": ",
                "",
              ])),
            L,
            String(e),
          ),
            (x = L));
        }
      return x;
    }
    function J() {
      ((T = !1), (D = 0), (x = null), ($ = null), (M = 0));
    }
    function Z() {
      P ||
        ((P = !0),
        (N = document.hidden),
        document.addEventListener("visibilitychange", function () {
          var e = N && !document.hidden;
          ((N = document.hidden),
            e &&
              ee().catch(function (e) {
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
    function ee() {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (w != null) return yield w;
          var e = ne();
          w = e;
          try {
            return yield e;
          } finally {
            w === e && (w = null);
          }
        })),
        te.apply(this, arguments)
      );
    }
    function ne() {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !document.hidden &&
            (V && (yield V.promise),
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
            if (!oe()) {
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed();
              return;
            }
            if (!O()) {
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed();
              return;
            }
            var e = $ != null;
            if (e) {
              (o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed(),
                yield B());
              return;
            }
            (ae(),
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: retrying init after tab became visible",
                  ])),
              ),
              o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetryAttempt());
            var t = yield B();
            t &&
              o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetrySuccess();
          }
        })),
        re.apply(this, arguments)
      );
    }
    function oe() {
      return M === 0 || Date.now() - M >= E;
    }
    function ae() {
      M = Date.now();
    }
    function ie() {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield new (v || (v = n("Promise")))(function (e) {
            o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
              return e();
            });
          });
        })),
        le.apply(this, arguments)
      );
    }
    ((l.VoipInitEventEmitter = o(
      "WAWebVoipInitEventEmitter",
    ).VoipInitEventEmitter),
      (l.initWAWebVoip = A),
      (l.canRetryWAWebVoipInitAfterFailure = O),
      (l.retryWAWebVoipInitAfterFailure = B));
  },
  98,
);
