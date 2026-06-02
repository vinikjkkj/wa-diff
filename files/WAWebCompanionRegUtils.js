__d(
  "WAWebCompanionRegUtils",
  [
    "WAAsyncSleep",
    "WALogger",
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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = !1,
      _ = !1,
      f = 1e3,
      g = 6e4 * 3;
    async function h() {
      try {
        var t = o("WAWebUserPrefsHistorySync").getHistorySyncStatus();
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[history-sync] historySyncStatus before logout: ",
              "",
            ])),
          JSON.stringify(t),
        ),
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "logout due to initial history sync timeout",
                ])),
            )
            .tags("bootstrap", "history-sync", "logout")
            .sendLogs("companion-reg-history-sync-timeout-logout", {
              sampling: 0.1,
            }),
          await o("WAAsyncSleep").asyncSleep(5e3));
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
    }
    function y() {
      ((p = !1), (_ = !1));
    }
    async function C() {
      p ||
        _ ||
        (await o("WAWebWamDeviceLinkReporter").setDeviceLinkPairStage(
          o("WAWebWamEnumMdLinkDeviceCompanionStage")
            .MD_LINK_DEVICE_COMPANION_STAGE.FIRST_CONNECT,
        ),
        (p = !0),
        await o("WAWebAdvSignatureApi").clearADVSecretKey(),
        await o("WAWebUserPrefsGeneral").resetLoginCounter(),
        o("WAWebUserPrefsIsLoggedIn").setIsConnectedAsRegistered(!0));
    }
    async function b() {
      if (!(p || _)) {
        ((_ = !0),
          o("WAWebMdSessionIdCache").clearMdSessionId(),
          await o("WAWebAdvSignatureApi").clearADVSecretKey());
        var e = await r("WAWebClearCredentials")(),
          t = e || (await v());
        r("WAWebReloadAfterLogout")(t);
      }
    }
    async function v() {
      try {
        await Promise.all([
          o("WAWebModelStorage").destroy(),
          o("WAWebQplStorage").destroy(),
          o("WAWebWorkerStorage").destroy(),
        ]);
      } catch (e) {
        return (
          e instanceof Error
            ? o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[storage] destroyPreLoginStorage failed",
                    ])),
                )
                .catching(e)
            : o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[storage] destroyPreLoginStorage failed",
                  ])),
              ),
          !0
        );
      }
      return !1;
    }
    function S() {
      new (o("WAShiftTimer").ShiftTimer)(function () {
        b();
      }).onOrAfter(f);
    }
    var R;
    function L() {
      R == null &&
        ((R = self.setTimeout(h, g)),
        o("WAWebBackendEventBus").BackendEventBus.onInitialChatHistorySynced(
          function () {
            self.clearTimeout(R);
          },
        ));
    }
    function E() {
      var e = o("WATimeUtils").unixTimeMs();
      (o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "[history sync][reg] begin device pairing latency measurement",
          ])),
      ),
        o("WAWebBackendEventBus").BackendEventBus.onCriticalSyncDone(
          function () {
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][reg] main screen unblocked in ",
                  "ms",
                ])),
              o("WATimeUtils").unixTimeMs() - e,
            );
          },
        ));
    }
    ((l.resetCompanionReg = y),
      (l.startLogin = C),
      (l.startLogout = b),
      (l.logoutAfterValidationFail = S),
      (l.startInitialHistorySyncTimeout = L),
      (l.initDevicePairingLatencyMeasurement = E));
  },
  98,
);
