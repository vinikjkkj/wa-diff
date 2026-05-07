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
    "asyncToGeneratorRuntime",
    "cr:17219",
    "justknobx",
    "nullthrows",
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
      h = (e = n("cr:17219")) != null ? e : {},
      y = h.getWindowsBridge,
      C = 1,
      b,
      v,
      S = !1,
      R = 0,
      L = null,
      E = null;
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
            t = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
          e && (!e.equals(b) || !t.equals(v))
            ? ((b = e), (v = t), F(), yield M(e, t))
            : N && (yield N.promise);
        })),
        I.apply(this, arguments)
      );
    }
    function T() {
      return (
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getDidVoipInitError() &&
        S &&
        R < A()
      );
    }
    function D() {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (E != null) return yield E;
          var e = $();
          E = e;
          try {
            return yield e;
          } finally {
            E === e && (E = null);
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $() {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            N &&
            (yield N.promise,
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited())
          )
            return !0;
          if (!T())
            return o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited();
          var e = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
            t = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
          if (e == null) return !1;
          if (
            (R++,
            o("WAWebCoreActionsODS").logCallVoipInitRetryAttempt(),
            (b = e),
            (v = t),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: retrying init after transient failure attempt=",
                  " max=",
                  "",
                ])),
              R,
              A(),
            ),
            yield B(),
            !O(e, t))
          )
            return (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: skip retry, identity changed in idle wait",
                  ])),
              ),
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getIsVoipInited()
            );
          yield M(e, t, !0);
          var n = o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited();
          return (
            n
              ? o("WAWebCoreActionsODS").logCallVoipInitRetrySuccess()
              : (o("WAWebCoreActionsODS").logCallVoipInitRetryFailure(),
                T() ||
                  o("WAWebCoreActionsODS").logCallVoipInitRetryExhausted()),
            n
          );
        })),
        P.apply(this, arguments)
      );
    }
    var N = null;
    function M(e, t, n) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          if (
            (a === void 0 && (a = !1),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: init after me_ready",
                ])),
            ),
            !(
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getDidVoipInitError() && !a
            ))
          ) {
            if (
              N &&
              (yield N.promise,
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getIsVoipInited() ||
                o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.getDidVoipInitError())
            ) {
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: init already done, ignoring duplicate call",
                  ])),
              );
              return;
            }
            ((N = new (o("WAResolvable").Resolvable)()),
              o("WAWebVoipQplHelpers").startVoipInitQpl());
            try {
              var i;
              if (
                o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling()
              ) {
                (o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: init skipped due to unsupported browser",
                    ])),
                ),
                  o("WAWebCoreActionsODS").logCallVoipInitSkipUnsupported(),
                  (S = !1),
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
              ).getVoipStackInterface();
              if (
                (yield (g || (g = n("Promise"))).all([
                  l == null
                    ? void 0
                    : l.voipInit(
                        e.toString({ legacy: !0 }),
                        t.toString({ legacy: !0 }),
                        r("nullthrows")(
                          o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(),
                          "empty self lid during VoipInit",
                        ).toString({ legacy: !0 }),
                      ),
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
                var s = new (o("WAWebCallWamEvent").CallWamEvent)(),
                  u = new (o(
                    "WAWebJoinableCallWamEvent",
                  ).JoinableCallWamEvent)();
              try {
                o("WAWebVoipNetworkMedium").startNetworkMediumMonitoring();
              } catch (e) {
                o("WALogger").WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
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
                var c;
                y == null ||
                  (c = y()) == null ||
                  (c = c.voip) == null ||
                  c.setHandlers(l.callbacks);
              }
              (o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.triggerVoipInitSuccess(),
                F(),
                o("WAWebCoreActionsODS").logCallVoipInitSuccess(),
                o("WAWebVoipQplHelpers").endVoipInitQplSuccess({
                  bool: { download_only: !1 },
                }));
            } catch (e) {
              (o("WAWebVoipQplHelpers").endVoipInitQplFail("init_error"),
                a || o("WAWebCoreActionsODS").logCallVoipInitError(),
                o("WALogger")
                  .ERROR(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: init failed: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("voip: init-failed"),
                (S = !0),
                o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.triggerVoipInitFailure());
            } finally {
              var h;
              ((h = N) == null || h.resolve(), (N = null));
            }
          }
        })),
        w.apply(this, arguments)
      );
    }
    function A() {
      if (L == null)
        try {
          L = Math.max(0, r("justknobx")._("4786"));
        } catch (e) {
          (o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: init retry count JK unavailable, using fallback=",
                  ": ",
                  "",
                ])),
              C,
              String(e),
            )
            .sendLogs("voip-init-retry-count-jk-missing"),
            (L = C));
        }
      return L;
    }
    function F() {
      ((S = !1), (R = 0), (L = null), (E = null));
    }
    function O(e, t) {
      var n = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
      if (n == null) return !1;
      var r = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
      return e.equals(b) && t.equals(v) && e.equals(n) && t.equals(r);
    }
    function B() {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield new (g || (g = n("Promise")))(function (e) {
            o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
              return e();
            });
          });
        })),
        W.apply(this, arguments)
      );
    }
    ((l.VoipInitEventEmitter = o(
      "WAWebVoipInitEventEmitter",
    ).VoipInitEventEmitter),
      (l.initWAWebVoip = k),
      (l.canRetryWAWebVoipInitAfterFailure = T),
      (l.retryWAWebVoipInitAfterFailure = D));
  },
  98,
);
