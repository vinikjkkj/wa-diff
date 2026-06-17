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
      C = (e = n("cr:17219")) != null ? e : {},
      b = C.getWindowsBridge,
      v = 1,
      S,
      R = !1,
      L = 0,
      E = null,
      k = null,
      I = null;
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (e == null) {
            (o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: init skipped, selfLid not available yet",
                ])),
            ),
              (R = !0),
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.triggerVoipInitFailure());
            return;
          }
          e.equals(S) ? w && (yield w.promise) : ((S = e), B(), yield A(e));
        })),
        D.apply(this, arguments)
      );
    }
    function x() {
      return (
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getDidVoipInitError() &&
        R &&
        L < O()
      );
    }
    function $() {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (k != null) return yield k;
          var e = N();
          k = e;
          try {
            return yield e;
          } finally {
            k === e && (k = null);
          }
        })),
        P.apply(this, arguments)
      );
    }
    function N() {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            w &&
            (yield w.promise,
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited())
          )
            return !0;
          if (!x())
            return o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited();
          var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (e == null) return !1;
          (L++,
            o("WAWebCoreActionsODS").logCallVoipInitRetryAttempt(),
            (S = e),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: retrying init after transient failure attempt=",
                  " max=",
                  "",
                ])),
              L,
              O(),
            ),
            yield U());
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
          yield A(e, !0);
          var n = o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited();
          return (
            n
              ? o("WAWebCoreActionsODS").logCallVoipInitRetrySuccess()
              : (o("WAWebCoreActionsODS").logCallVoipInitRetryFailure(),
                x() ||
                  o("WAWebCoreActionsODS").logCallVoipInitRetryExhausted()),
            n
          );
        })),
        M.apply(this, arguments)
      );
    }
    var w = null;
    function A(e, t) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
              w &&
              (yield w.promise,
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
            ((w = new (o("WAResolvable").Resolvable)()),
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
                  (R = !1),
                  o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.triggerVoipInitFailure());
                return;
              }
              o(
                "WAWebVoipBrowserAudioStatus",
              ).preDetectBrowserAudioCapabilities();
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
                (yield (y || (y = n("Promise"))).all([
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
                  C = new (o(
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
                var v;
                b == null ||
                  (v = b()) == null ||
                  (v = v.voip) == null ||
                  v.setHandlers(l.callbacks);
              }
              (o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.triggerVoipInitSuccess(),
                B(),
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
                (R = !0),
                o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.triggerVoipInitFailure(),
                q());
            } finally {
              var S;
              ((S = w) == null || S.resolve(), (w = null));
            }
          }
        })),
        F.apply(this, arguments)
      );
    }
    function O() {
      if (E == null)
        try {
          E = Math.max(0, r("justknobx")._("4786"));
        } catch (e) {
          (o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: init retry count JK unavailable, using fallback=",
                ": ",
                "",
              ])),
            v,
            String(e),
          ),
            (E = v));
        }
      return E;
    }
    function B() {
      ((R = !1), (L = 0), (E = null), (k = null), W());
    }
    function W() {
      I != null &&
        (document.removeEventListener("visibilitychange", I), (I = null));
    }
    function q() {
      if (!(I != null || !document.hidden || !x())) {
        var e = function () {
          document.hidden ||
            (W(),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: retrying init after tab became visible",
                ])),
            ),
            $());
        };
        ((I = e), document.addEventListener("visibilitychange", e));
      }
    }
    function U() {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield new (y || (y = n("Promise")))(function (e) {
            o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
              return e();
            });
          });
        })),
        V.apply(this, arguments)
      );
    }
    ((l.VoipInitEventEmitter = o(
      "WAWebVoipInitEventEmitter",
    ).VoipInitEventEmitter),
      (l.initWAWebVoip = T),
      (l.canRetryWAWebVoipInitAfterFailure = x),
      (l.retryWAWebVoipInitAfterFailure = $));
  },
  98,
);
