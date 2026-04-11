__d(
  "WAWebCompanionRegUtils",
  [
    "Promise",
    "WAAsyncSleep",
    "WALogger",
    "WAShiftTimer",
    "WATimeUtils",
    "WAWebAdvSignatureApi",
    "WAWebAppTracker",
    "WAWebBackendEventBus",
    "WAWebCanonicalTokenExchange",
    "WAWebClearCredentials",
    "WAWebCoreActionsODS",
    "WAWebLogoutReasonConstants",
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
      _ = !1,
      f = !1,
      g = 1e3,
      h = 6e4 * 3;
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = o("WAWebUserPrefsHistorySync").getHistorySyncStatus();
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[history-sync] historySyncStatus before logout: ",
                  "",
                ])),
              JSON.stringify(e),
            ),
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "logout due to initial history sync timeout",
                    ])),
                )
                .tags("bootstrap", "history-sync", "logout")
                .sendLogs("companion-reg-history-sync-timeout-logout", {
                  sampling: 0.1,
                }),
              yield o("WAAsyncSleep").asyncSleep(5e3));
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
        C.apply(this, arguments)
      );
    }
    function b() {
      ((_ = !1), (f = !1));
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (_ || f) return !1;
          (yield o("WAWebWamDeviceLinkReporter").setDeviceLinkPairStage(
            o("WAWebWamEnumMdLinkDeviceCompanionStage")
              .MD_LINK_DEVICE_COMPANION_STAGE.FIRST_CONNECT,
          ),
            (_ = !0),
            yield o("WAWebAdvSignatureApi").clearADVSecretKey(),
            yield o("WAWebUserPrefsGeneral").resetLoginCounter(),
            o("WAWebUserPrefsIsLoggedIn").setIsConnectedAsRegistered(!0));
          var e = o(
            "WAWebCanonicalTokenExchange",
          ).maybeReloadAfterRegistration();
          return e;
        })),
        S.apply(this, arguments)
      );
    }
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!(_ || f)) {
            ((f = !0), yield o("WAWebAdvSignatureApi").clearADVSecretKey());
            var e = yield r("WAWebClearCredentials")(),
              t = e || (yield E());
            r("WAWebReloadAfterLogout")(t);
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            yield (p || (p = n("Promise"))).all([
              o("WAWebModelStorage").destroy(),
              o("WAWebQplStorage").destroy(),
              o("WAWebWorkerStorage").destroy(),
            ]);
          } catch (e) {
            return (
              e instanceof Error
                ? o("WALogger")
                    .WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[storage] destroyPreLoginStorage failed",
                        ])),
                    )
                    .catching(e)
                : o("WALogger").WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[storage] destroyPreLoginStorage failed",
                      ])),
                  ),
              !0
            );
          }
          return !1;
        })),
        k.apply(this, arguments)
      );
    }
    function I() {
      new (o("WAShiftTimer").ShiftTimer)(function () {
        R();
      }).onOrAfter(g);
    }
    var T;
    function D() {
      T == null &&
        ((T = self.setTimeout(y, h)),
        o("WAWebBackendEventBus").BackendEventBus.onInitialChatHistorySynced(
          function () {
            self.clearTimeout(T);
          },
        ));
    }
    function x() {
      var t = o("WATimeUtils").unixTimeMs();
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[history sync][reg] begin device pairing latency measurement",
          ])),
      ),
        o("WAWebBackendEventBus").BackendEventBus.onCriticalSyncDone(
          function () {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][reg] main screen unblocked in ",
                  "ms",
                ])),
              o("WATimeUtils").unixTimeMs() - t,
            );
          },
        ));
    }
    ((l.resetCompanionReg = b),
      (l.startLogin = v),
      (l.startLogout = R),
      (l.logoutAfterValidationFail = I),
      (l.startInitialHistorySyncTimeout = D),
      (l.initDevicePairingLatencyMeasurement = x));
  },
  98,
);
