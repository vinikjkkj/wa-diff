__d(
  "WAWebCompanionRegUtils",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAShiftTimer",
    "WATimeUtils",
    "WAWebAdvSignatureApi",
    "WAWebAppTracker",
    "WAWebBackendEventBus",
    "WAWebClearCredentials",
    "WAWebCoreActionsODS",
    "WAWebLabyrinthLogout",
    "WAWebLogoutReasonConstants",
    "WAWebMdSessionIdCache",
    "WAWebModelStorage",
    "WAWebODS",
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
      p,
      _,
      f,
      g = !1,
      h = !1,
      y = 1e3,
      C = 6e4 * 3;
    async function b() {
      o("WALogger")
        .LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync][initial bootstrap] timeout fired",
            ])),
        )
        .tags("history-sync");
      try {
        var t = o("WAWebUserPrefsHistorySync").getHistorySyncStatus();
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[history-sync] historySyncStatus before logout: ",
              "",
            ])),
          JSON.stringify(t),
        ),
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "logout due to initial history sync timeout",
                ])),
            )
            .tags("bootstrap", "history-sync", "logout")
            .sendLogs("companion-reg-history-sync-timeout-logout", {
              sampling: 0.1,
            }),
          await o("WAPromiseDelays").delayMs(5e3));
      } catch (e) {}
      (o("WAWebCoreActionsODS").isPageLoadComplete() ||
        (o("WAWebCoreActionsODS").logPageLoadError(),
        r("WAWebODS").incr("web.page_load.error.history_sync_incomplete")),
        o("WAWebAppTracker").AppTracker.stop(
          o("WAWebAppTracker").AppTrackerType.CriticalSync,
        ),
        o("WAWebCoreActionsODS").logSessionForcedLogout(),
        o("WAWebSocketLogoutJob").socketLogout(
          o("WAWebLogoutReasonConstants").LogoutReason.HistorySyncTimeout,
        ));
    }
    function v() {
      ((g = !1),
        (h = !1),
        o("WAWebLabyrinthLogout").stopLabyrinthCompanionOnboardingIfEnabled());
    }
    async function S() {
      g ||
        h ||
        (await o("WAWebWamDeviceLinkReporter").setDeviceLinkPairStage(
          o("WAWebWamEnumMdLinkDeviceCompanionStage")
            .MD_LINK_DEVICE_COMPANION_STAGE.FIRST_CONNECT,
        ),
        (g = !0),
        await o("WAWebAdvSignatureApi").clearADVSecretKey(),
        await o("WAWebUserPrefsGeneral").resetLoginCounter(),
        o("WAWebUserPrefsIsLoggedIn").setIsConnectedAsRegistered());
    }
    async function R(e) {
      if (!(g || h)) {
        ((h = !0),
          o("WAWebLabyrinthLogout").stopLabyrinthCompanionOnboardingIfEnabled(),
          o("WAWebMdSessionIdCache").clearMdSessionId(),
          await o("WAWebAdvSignatureApi").clearADVSecretKey());
        var t = await r("WAWebClearCredentials")(),
          n = t || (await L());
        o("WAWebReloadAfterLogout").reloadAfterLogout(n, e);
      }
    }
    async function L() {
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
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[storage] destroyPreLoginStorage failed",
                    ])),
                )
                .catching(e)
            : o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[storage] destroyPreLoginStorage failed",
                  ])),
              ),
          !0
        );
      }
      return !1;
    }
    function E() {
      new (o("WAShiftTimer").ShiftTimer)(function () {
        R();
      }).onOrAfter(y);
    }
    var k;
    function I() {
      k == null &&
        ((k = self.setTimeout(b, C)),
        o("WALogger")
          .LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync][initial bootstrap] timeout armed for ",
                "ms",
              ])),
            C,
          )
          .tags("history-sync"),
        o("WAWebBackendEventBus").BackendEventBus.onInitialChatHistorySynced(
          function () {
            (self.clearTimeout(k),
              o("WALogger")
                .LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][initial bootstrap] timeout cleared",
                    ])),
                )
                .tags("history-sync"));
          },
        ));
    }
    function T() {
      var e = o("WATimeUtils").unixTimeMs();
      (o("WALogger").LOG(
        _ ||
          (_ = babelHelpers.taggedTemplateLiteralLoose([
            "[history sync][reg] begin device pairing latency measurement",
          ])),
      ),
        o("WAWebBackendEventBus").BackendEventBus.onCriticalSyncDone(
          function () {
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][reg] main screen unblocked in ",
                  "ms",
                ])),
              o("WATimeUtils").unixTimeMs() - e,
            );
          },
        ));
    }
    ((l.resetCompanionReg = v),
      (l.startLogin = S),
      (l.startLogout = R),
      (l.logoutAfterValidationFail = E),
      (l.startInitialHistorySyncTimeout = I),
      (l.initDevicePairingLatencyMeasurement = T));
  },
  98,
);
