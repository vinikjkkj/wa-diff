__d(
  "WAWebVoipInit",
  [
    "Promise",
    "WALogger",
    "WAResolvable",
    "WAWebCallWamEvent",
    "WAWebCoreActionsODS",
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
      b = (e = n("cr:17219")) != null ? e : {},
      v = b.getWindowsBridge,
      S = 1,
      R = 60 * 1e3,
      L,
      E = !1,
      k = 0,
      I = null,
      T = null,
      D = !1,
      x = !1,
      $ = 0,
      P = null;
    function N() {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (e == null) {
            (o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: init skipped, selfLid not available yet",
                ])),
            ),
              (E = !0),
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.triggerVoipInitFailure());
            return;
          }
          e.equals(L) ? W && (yield W.promise) : ((L = e), H(), yield q(e));
        })),
        M.apply(this, arguments)
      );
    }
    function w() {
      return (
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getDidVoipInitError() &&
        E &&
        k < V()
      );
    }
    function A() {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (T != null) return yield T;
          var e = O();
          T = e;
          try {
            return yield e;
          } finally {
            T === e && (T = null);
          }
        })),
        F.apply(this, arguments)
      );
    }
    function O() {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            W &&
            (yield W.promise,
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited())
          )
            return !0;
          if (!w())
            return o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited();
          var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (e == null) return !1;
          (k++,
            o("WAWebCoreActionsODS").logCallVoipInitRetryAttempt(),
            (L = e),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: retrying init after transient failure attempt=",
                  " max=",
                  "",
                ])),
              k,
              V(),
            ),
            yield J());
          var t = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (t == null || !e.equals(t))
            return (
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: skip retry, identity changed in idle wait",
                  ])),
              ),
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getIsVoipInited()
            );
          yield q(e, !0);
          var n = o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited();
          return (
            n
              ? o("WAWebCoreActionsODS").logCallVoipInitRetrySuccess()
              : (o("WAWebCoreActionsODS").logCallVoipInitRetryFailure(),
                w() ||
                  o("WAWebCoreActionsODS").logCallVoipInitRetryExhausted()),
            n
          );
        })),
        B.apply(this, arguments)
      );
    }
    var W = null;
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            (t === void 0 && (t = !1),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
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
              W &&
              (yield W.promise,
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getIsVoipInited() ||
                o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.getDidVoipInitError())
            ) {
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: init already done, ignoring duplicate call",
                  ])),
              );
              return;
            }
            ((W = new (o("WAResolvable").Resolvable)()),
              o("WAWebVoipQplHelpers").startVoipInitQpl());
            try {
              var r, a, i;
              if (
                o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling()
              ) {
                (o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: init skipped due to unsupported browser",
                    ])),
                ),
                  o("WAWebCoreActionsODS").logCallVoipInitSkipUnsupported(),
                  (E = !1),
                  o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.triggerVoipInitFailure());
                return;
              }
              (G(),
                o(
                  "WAWebVoipBrowserAudioStatus",
                ).preDetectBrowserAudioCapabilities());
              var l = yield o(
                  "WAWebVoipStackInterface",
                ).getVoipStackInterface(),
                s = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
                u = s != null && !s.isLid() ? s : null,
                c = u != null ? o("WAWebWidFactory").asUserWidOrThrow(u) : null,
                d =
                  l == null
                    ? void 0
                    : l.voipInit(
                        (r = u == null ? void 0 : u.toString({ legacy: !0 })) !=
                          null
                          ? r
                          : "",
                        (a = c == null ? void 0 : c.toString({ legacy: !0 })) !=
                          null
                          ? a
                          : "",
                        e.toString({ legacy: !0 }),
                      );
              if (
                (yield (C || (C = n("Promise"))).all([
                  d,
                  l == null
                    ? void 0
                    : l.setHideMyIp(
                        (i = o("WAWebUserPrefsGeneral").getUserPrivacySettings()
                          .disallowAllP2p) != null
                          ? i
                          : !1,
                      ),
                ]),
                (l == null ? void 0 : l.type) === "web")
              )
                var m = new (o("WAWebCallWamEvent").CallWamEvent)(),
                  y = new (o(
                    "WAWebJoinableCallWamEvent",
                  ).JoinableCallWamEvent)();
              try {
                o("WAWebVoipNetworkMedium").startNetworkMediumMonitoring();
              } catch (e) {
                o("WALogger").WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: network medium monitoring failed to start: ",
                      "",
                    ])),
                  e,
                );
              }
              if (
                ((l == null ? void 0 : l.type) === "web" &&
                  o("WAWebVoipCrashRecovery").initCrashRecovery(),
                (l == null ? void 0 : l.type) === "windows")
              ) {
                var b;
                v == null ||
                  (b = v()) == null ||
                  (b = b.voip) == null ||
                  b.setHandlers(l.callbacks);
              }
              (o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.triggerVoipInitSuccess(),
                H(),
                o("WAWebCoreActionsODS").logCallVoipInitSuccess(),
                o("WAWebVoipQplHelpers").endVoipInitQplSuccess({
                  bool: { download_only: !1 },
                }));
            } catch (e) {
              (o("WAWebVoipQplHelpers").endVoipInitQplFail("init_error"),
                t || o("WAWebCoreActionsODS").logCallVoipInitError(),
                o("WALogger")
                  .ERROR(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: init failed: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("voip: init-failed"),
                (E = !0),
                o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.triggerVoipInitFailure(),
                G());
            } finally {
              var S;
              ((S = W) == null || S.resolve(), (W = null));
            }
          }
        })),
        U.apply(this, arguments)
      );
    }
    function V() {
      if (I == null)
        try {
          I = Math.max(0, r("justknobx")._("4786"));
        } catch (e) {
          (o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: init retry count JK unavailable, using fallback=",
                ": ",
                "",
              ])),
            S,
            String(e),
          ),
            (I = S));
        }
      return I;
    }
    function H() {
      ((E = !1), (k = 0), (I = null), (T = null), ($ = 0));
    }
    function G() {
      D ||
        ((D = !0),
        (x = document.hidden),
        document.addEventListener("visibilitychange", function () {
          var e = x && !document.hidden;
          ((x = document.hidden),
            e &&
              z().catch(function (e) {
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: visibility init check failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("voip-visibility-init-failed");
              }));
        }));
    }
    function z() {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (P != null) return yield P;
          var e = K();
          P = e;
          try {
            return yield e;
          } finally {
            P === e && (P = null);
          }
        })),
        j.apply(this, arguments)
      );
    }
    function K() {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !document.hidden &&
            (W && (yield W.promise),
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
            if (!X()) {
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed();
              return;
            }
            if (!w()) {
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed();
              return;
            }
            var e = T != null;
            if (e) {
              (o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitVisibilityRetrySuppressed(),
                yield A());
              return;
            }
            (Y(),
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: retrying init after tab became visible",
                  ])),
              ),
              o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetryAttempt());
            var t = yield A();
            t &&
              o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetrySuccess();
          }
        })),
        Q.apply(this, arguments)
      );
    }
    function X() {
      return $ === 0 || Date.now() - $ >= R;
    }
    function Y() {
      $ = Date.now();
    }
    function J() {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield new (C || (C = n("Promise")))(function (e) {
            o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
              return e();
            });
          });
        })),
        Z.apply(this, arguments)
      );
    }
    ((l.VoipInitEventEmitter = o(
      "WAWebVoipInitEventEmitter",
    ).VoipInitEventEmitter),
      (l.initWAWebVoip = N),
      (l.canRetryWAWebVoipInitAfterFailure = w),
      (l.retryWAWebVoipInitAfterFailure = A));
  },
  98,
);
