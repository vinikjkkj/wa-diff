__d(
  "WAWebCompanionRegUtils",
  [
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WAShiftTimer",
    "WATimeUtils",
    "WAWebAdvSignatureApi",
    "WAWebAppTracker",
    "WAWebBackendEventBus",
    "WAWebClearCredentials",
    "WAWebCoreActionsODS",
    "WAWebLogoutReasonConstants",
    "WAWebMdSessionIdCache",
    "WAWebModelStorage",
    "WAWebQplStorage",
    "WAWebReloadAfterLogout",
    "WAWebSocketLogoutJob",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsIsLoggedIn",
    "WAWebWamDeviceLinkReporter",
    "WAWebWamEnumMdLinkDeviceCompanionStage",
    "WAWebWorkerStorage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
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
      h = !1,
      y = !1,
      C = 1e3,
      b = 6e4 * 3;
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger")
            .LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][initial bootstrap] timeout fired",
                ])),
            )
            .tags("history-sync");
          try {
            var e = o("WAWebUserPrefsHistorySync").getHistorySyncStatus();
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[history-sync] historySyncStatus before logout: ",
                  "",
                ])),
              JSON.stringify(e),
            ),
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "logout due to initial history sync timeout",
                    ])),
                )
                .tags("bootstrap", "history-sync", "logout")
                .sendLogs("companion-reg-history-sync-timeout-logout", {
                  sampling: 0.1,
                }),
              yield o("WAPromiseDelays").delayMs(5e3));
          } catch (e) {}
          (o("WAWebCoreActionsODS").isPageLoadComplete() ||
            o("WAWebCoreActionsODS").logPageLoadErrorHistorySyncIncomplete(),
            o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.CriticalSync,
            ),
            o("WAWebCoreActionsODS").logSessionForcedLogout(),
            o("WAWebSocketLogoutJob").socketLogout(
              o("WAWebLogoutReasonConstants").LogoutReason.HistorySyncTimeout,
            ));
        })),
        S.apply(this, arguments)
      );
    }
    function R() {
      ((h = !1), (y = !1));
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          h ||
            y ||
            (yield o("WAWebWamDeviceLinkReporter").setDeviceLinkPairStage(
              o("WAWebWamEnumMdLinkDeviceCompanionStage")
                .MD_LINK_DEVICE_COMPANION_STAGE.FIRST_CONNECT,
            ),
            (h = !0),
            yield o("WAWebAdvSignatureApi").clearADVSecretKey(),
            yield o("WAWebUserPrefsGeneral").resetLoginCounter(),
            o("WAWebUserPrefsIsLoggedIn").setIsConnectedAsRegistered());
        })),
        E.apply(this, arguments)
      );
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!(h || y)) {
            ((y = !0),
              o("WAWebMdSessionIdCache").clearMdSessionId(),
              yield o("WAWebAdvSignatureApi").clearADVSecretKey());
            var e = yield r("WAWebClearCredentials")(),
              t = e || (yield T());
            o("WAWebReloadAfterLogout").reloadAfterLogout(t);
          }
        })),
        I.apply(this, arguments)
      );
    }
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            yield (g || (g = n("Promise"))).all([
              o("WAWebModelStorage").destroy(),
              o("WAWebQplStorage").destroy(),
              o("WAWebWorkerStorage").destroy(),
            ]);
          } catch (e) {
            return (
              e instanceof Error
                ? o("WALogger")
                    .WARN(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "[storage] destroyPreLoginStorage failed",
                        ])),
                    )
                    .catching(e)
                : o("WALogger").WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[storage] destroyPreLoginStorage failed",
                      ])),
                  ),
              !0
            );
          }
          return !1;
        })),
        D.apply(this, arguments)
      );
    }
    function x() {
      new (o("WAShiftTimer").ShiftTimer)(function () {
        k();
      }).onOrAfter(C);
    }
    var $;
    function P() {
      $ == null &&
        (($ = self.setTimeout(v, b)),
        o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync][initial bootstrap] timeout armed for ",
                "ms",
              ])),
            b,
          )
          .tags("history-sync"),
        o("WAWebBackendEventBus").BackendEventBus.onInitialChatHistorySynced(
          function () {
            (self.clearTimeout($),
              o("WALogger")
                .LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][initial bootstrap] timeout cleared",
                    ])),
                )
                .tags("history-sync"));
          },
        ));
    }
    function N() {
      var e = o("WATimeUtils").unixTimeMs();
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[history sync][reg] begin device pairing latency measurement",
          ])),
      ),
        o("WAWebBackendEventBus").BackendEventBus.onCriticalSyncDone(
          function () {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][reg] main screen unblocked in ",
                  "ms",
                ])),
              o("WATimeUtils").unixTimeMs() - e,
            );
          },
        ));
    }
    ((l.resetCompanionReg = R),
      (l.startLogin = L),
      (l.startLogout = k),
      (l.logoutAfterValidationFail = x),
      (l.startInitialHistorySyncTimeout = P),
      (l.initDevicePairingLatencyMeasurement = N));
  },
  98,
);
