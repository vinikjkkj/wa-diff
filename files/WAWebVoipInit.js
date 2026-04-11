__d(
  "WAWebVoipInit",
  [
    "Promise",
    "WALogger",
    "WAResolvable",
    "WAWebCallWamEvent",
    "WAWebCoreActionsODS",
    "WAWebJoinableCallWamEvent",
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
      _ = (e = n("cr:17219")) != null ? e : {},
      f = _.getWindowsBridge,
      g,
      h;
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
            t = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
          e && (!e.equals(g) || !t.equals(h))
            ? ((g = e), (h = t), yield v(e, t))
            : b && (yield b.promise);
        })),
        C.apply(this, arguments)
      );
    }
    var b = null;
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: init after me_ready",
                ])),
            ),
            !o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getDidVoipInitError())
          ) {
            if (
              b &&
              (yield b.promise,
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getIsVoipInited() ||
                o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.getDidVoipInitError())
            ) {
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: init already done, ignoring duplicate call",
                  ])),
              );
              return;
            }
            ((b = new (o("WAResolvable").Resolvable)()),
              o("WAWebVoipQplHelpers").startVoipInitQpl());
            try {
              var a;
              if (
                o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling()
              ) {
                (o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: init skipped due to unsupported browser",
                    ])),
                ),
                  o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.triggerVoipInitFailure());
                return;
              }
              o(
                "WAWebVoipBrowserAudioStatus",
              ).preDetectBrowserAudioCapabilities();
              var i = yield o(
                "WAWebVoipStackInterface",
              ).getVoipStackInterface();
              if (
                (yield (p || (p = n("Promise"))).all([
                  i == null
                    ? void 0
                    : i.voipInit(
                        e.toString({ legacy: !0 }),
                        t.toString({ legacy: !0 }),
                        r("nullthrows")(
                          o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(),
                          "empty self lid during VoipInit",
                        ).toString({ legacy: !0 }),
                      ),
                  i == null
                    ? void 0
                    : i.setHideMyIp(
                        (a = o("WAWebUserPrefsGeneral").getUserPrivacySettings()
                          .disallowAllP2p) != null
                          ? a
                          : !1,
                      ),
                ]),
                (i == null ? void 0 : i.type) === "web")
              )
                var l = new (o("WAWebCallWamEvent").CallWamEvent)(),
                  _ = new (o(
                    "WAWebJoinableCallWamEvent",
                  ).JoinableCallWamEvent)();
              try {
                o("WAWebVoipNetworkMedium").startNetworkMediumMonitoring();
              } catch (e) {
                o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: network medium monitoring failed to start: ",
                      "",
                    ])),
                  e,
                );
              }
              if (
                ((i == null ? void 0 : i.type) === "web" &&
                  o("WAWebVoipCrashRecovery").initCrashRecovery(),
                (i == null ? void 0 : i.type) === "windows")
              ) {
                var g;
                f == null ||
                  (g = f()) == null ||
                  (g = g.voip) == null ||
                  g.setHandlers(i.callbacks);
              }
              (o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.triggerVoipInitSuccess(),
                o("WAWebCoreActionsODS").logCallVoipInitSuccess(),
                o("WAWebVoipQplHelpers").endVoipInitQplSuccess({
                  bool: { download_only: !1 },
                }));
            } catch (e) {
              (o("WAWebVoipQplHelpers").endVoipInitQplFail("init_error"),
                o("WAWebCoreActionsODS").logCallVoipInitError(),
                o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: init failed: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("voip: init-failed"),
                o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.triggerVoipInitFailure());
            } finally {
              var h;
              ((h = b) == null || h.resolve(), (b = null));
            }
          }
        })),
        S.apply(this, arguments)
      );
    }
    ((l.VoipInitEventEmitter = o(
      "WAWebVoipInitEventEmitter",
    ).VoipInitEventEmitter),
      (l.initWAWebVoip = y));
  },
  98,
);
