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
      g = (e = n("cr:17219")) != null ? e : {},
      h = g.getWindowsBridge,
      y,
      C,
      b = !1,
      v = 0,
      S = null,
      R = null;
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
            t = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
          e && (!e.equals(y) || !t.equals(C))
            ? ((y = e), (C = t), w(), yield P(e, t))
            : $ && (yield $.promise);
        })),
        E.apply(this, arguments)
      );
    }
    function k() {
      return (
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getDidVoipInitError() &&
        b &&
        v < M()
      );
    }
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (R != null) return yield R;
          var e = D();
          R = e;
          try {
            return yield e;
          } finally {
            R === e && (R = null);
          }
        })),
        T.apply(this, arguments)
      );
    }
    function D() {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            $ &&
            (yield $.promise,
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited())
          )
            return !0;
          if (!k())
            return o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited();
          var e = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
            t = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
          if (e == null) return !1;
          if (
            (v++,
            o("WAWebCoreActionsODS").logCallVoipInitRetryAttempt(),
            (y = e),
            (C = t),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: retrying init after transient failure attempt=",
                  " max=",
                  "",
                ])),
              v,
              M(),
            ),
            yield F(),
            !A(e, t))
          )
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: skip retry, identity changed in idle wait",
                  ])),
              ),
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getIsVoipInited()
            );
          yield P(e, t, !0);
          var n = o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited();
          return (
            n
              ? o("WAWebCoreActionsODS").logCallVoipInitRetrySuccess()
              : (o("WAWebCoreActionsODS").logCallVoipInitRetryFailure(),
                k() ||
                  o("WAWebCoreActionsODS").logCallVoipInitRetryExhausted()),
            n
          );
        })),
        x.apply(this, arguments)
      );
    }
    var $ = null;
    function P(e, t, n) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          if (
            (a === void 0 && (a = !1),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
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
              $ &&
              (yield $.promise,
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getIsVoipInited() ||
                o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.getDidVoipInitError())
            ) {
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: init already done, ignoring duplicate call",
                  ])),
              );
              return;
            }
            (($ = new (o("WAResolvable").Resolvable)()),
              o("WAWebVoipQplHelpers").startVoipInitQpl());
            try {
              var i;
              if (
                o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling()
              ) {
                (o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: init skipped due to unsupported browser",
                    ])),
                ),
                  o("WAWebCoreActionsODS").logCallVoipInitSkipUnsupported(),
                  (b = !1),
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
                (yield (f || (f = n("Promise"))).all([
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
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
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
                var g;
                h == null ||
                  (g = h()) == null ||
                  (g = g.voip) == null ||
                  g.setHandlers(l.callbacks);
              }
              (o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.triggerVoipInitSuccess(),
                w(),
                o("WAWebCoreActionsODS").logCallVoipInitSuccess(),
                o("WAWebVoipQplHelpers").endVoipInitQplSuccess({
                  bool: { download_only: !1 },
                }));
            } catch (e) {
              (o("WAWebVoipQplHelpers").endVoipInitQplFail("init_error"),
                a || o("WAWebCoreActionsODS").logCallVoipInitError(),
                o("WALogger")
                  .ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: init failed: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("voip: init-failed"),
                (b = !0),
                o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.triggerVoipInitFailure());
            } finally {
              var y;
              ((y = $) == null || y.resolve(), ($ = null));
            }
          }
        })),
        N.apply(this, arguments)
      );
    }
    function M() {
      return (S == null && (S = Math.max(0, r("justknobx")._("4786"))), S);
    }
    function w() {
      ((b = !1), (v = 0), (S = null), (R = null));
    }
    function A(e, t) {
      var n = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
      if (n == null) return !1;
      var r = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
      return e.equals(y) && t.equals(C) && e.equals(n) && t.equals(r);
    }
    function F() {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield new (f || (f = n("Promise")))(function (e) {
            o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
              return e();
            });
          });
        })),
        O.apply(this, arguments)
      );
    }
    ((l.VoipInitEventEmitter = o(
      "WAWebVoipInitEventEmitter",
    ).VoipInitEventEmitter),
      (l.initWAWebVoip = L),
      (l.canRetryWAWebVoipInitAfterFailure = k),
      (l.retryWAWebVoipInitAfterFailure = I));
  },
  98,
);
