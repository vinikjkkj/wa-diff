__d(
  "WAWebLaunchSocket",
  [
    "Promise",
    "WAComms",
    "WALogger",
    "WAWebABPropsUpdateFromStorage",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBackendEventBusWorkerCompatible",
    "WAWebBackendWorkerClient",
    "WAWebBlocklistMigration",
    "WAWebBridgeInitialization",
    "WAWebBrokerGlobalAppState",
    "WAWebBuildConstants",
    "WAWebCoreActionsODS",
    "WAWebCryptoEncKeyHelper",
    "WAWebCurrentUser",
    "WAWebDbRolloutUtil",
    "WAWebEnvironment",
    "WAWebEventSamplingCache",
    "WAWebFtsClient",
    "WAWebHistorySyncProgress",
    "WAWebInitFromStorage",
    "WAWebInvocationInterface",
    "WAWebLaunchSocketUtils",
    "WAWebModelStorage",
    "WAWebPageLoadLogging",
    "WAWebPushNotificationsOfflineBbApi",
    "WAWebRegistration",
    "WAWebSchemaVersions",
    "WAWebSignalStorage",
    "WAWebSocketModel",
    "WAWebStartBackend",
    "WAWebStatusStorage",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsIsLoggedIn",
    "WAWebUserPrefsMultiDevice",
    "WAWebWaitForInitialChatsSynced",
    "WAWebWamEnumWebcScenarioType",
    "WAWebWamMemoryStat",
    "WAWebWamOfflineResumeReporter",
    "WAWebWorkerStorage",
    "asyncToGeneratorRuntime",
    "err",
    "gkx",
    "requireDeferred",
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
      f = r("requireDeferred")("WAWebSetFrontendHandlerApi").__setRef(
        "WAWebLaunchSocket",
      ),
      g = r("requireDeferred")("WAWebSetWorkerSafeHandlerApi").__setRef(
        "WAWebLaunchSocket",
      );
    o("WAWebBackendEventBus").BackendEventBus.onReconnectSocket(function () {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "reconnect_socket triggered, resetting socket loop",
          ])),
      ),
        o("WAComms").closeSocketAndResume());
    });
    function h(e) {
      (o("WAWebBackendEventBusWorkerCompatible").setBackendEventBus(
        o("WAWebBackendEventBus").BackendEventBus,
      ),
        o("WAWebHistorySyncProgress").initHistorySyncProgressListeners(),
        o("WAWebBackendEventBus").BackendEventBus.onRefreshQR(
          o("WAWebLaunchSocketUtils").refreshQR,
        ),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[socket] start launchSocket flow with mutexComplete promise ",
              "",
            ])),
          e == null ? "NULL" : "not null",
        ),
        r("gkx")("26258") ||
          (e != null
            ? o("WALogger")
                .LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[socket] entered eager launchSocket flow",
                    ])),
                )
                .sendLogs("intern-launchSocket-eager", { sampling: 0 })
            : o("WALogger")
                .LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[socket] entered legacy launchSocket flow",
                    ])),
                )
                .sendLogs("intern-launchSocket-legacy", { sampling: 0 })),
        o("WAWebPageLoadLogging").startPageLoadQplMeasure("launchSocket"));
      var t = o("WAWebBridgeInitialization").makeBridge();
      return (
        o("WAWebBackendApi").setApi(t),
        f.load().then(function (e) {
          var n = e.setFrontendHandlers;
          return n(t);
        }),
        g.load().then(function (e) {
          var n = e.setWorkerSafeHandlers;
          return n(t);
        }),
        o("WAWebFtsClient").ftsClient.initialize(),
        o("WAWebStartBackend").setupStartBackendListeners(),
        o("WAWebDbRolloutUtil")
          .loadSchemaVersions()
          .then(function () {
            return y();
          })
          .then(function () {
            return o("WAWebCryptoEncKeyHelper").initEncSalt();
          })
          .then(function () {
            return o("WAWebCryptoEncKeyHelper").initEncSaltForInvoker();
          })
          .then(function () {
            return o("WAWebSignalStorage").initialize();
          })
          .then(function () {
            return (_ || (_ = n("Promise"))).all([
              o("WAWebModelStorage").initialize(),
              e,
            ]);
          })
          .then(function () {
            return o("WAWebStatusStorage").initialize();
          })
          .then(function () {
            return (_ || (_ = n("Promise"))).all([
              o("WAWebUserPrefsGeneral").getLogoutReason(),
              o("WAWebWorkerStorage").initialize(),
              o("WAWebUserPrefsGeneral").setAppVersionBase(
                o("WAWebBuildConstants").VERSION_BASE,
              ),
            ]);
          })
          .catch(function (e) {
            o(
              "WAWebBackendEventBus",
            ).BackendEventBus.triggerStorageInitializationError(e);
          })
          .then(function (e) {
            var t = e == null ? void 0 : e[0];
            if (
              (t &&
                (o("WAWebCoreActionsODS").logPageLoadErrorForcedLogout(),
                r("WAWebEnvironment").isWindows &&
                o("WAWebCurrentUser").isEmployee()
                  ? o(
                      "WAWebBackendEventBus",
                    ).BackendEventBus.triggerUnexpectedLogoutModal(t.reason)
                  : o("WAWebSocketModel").Socket.logout(t.reason)),
              r("WAWebBrokerGlobalAppState").isLogoutInProgress)
            )
              throw r("err")("aborting launchSocket due to logout");
            return o("WAWebUserPrefsMultiDevice").isRegistered()
              ? (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[socket] launchSocket for login",
                    ])),
                ),
                o("WAWebUserPrefsIsLoggedIn").setIsConnectedAsRegistered(!0),
                o(
                  "WAWebBackendEventBus",
                ).BackendEventBus.triggerInitialLoadReady(),
                o("WAWebWamMemoryStat").setCurrentMemoryScenario(
                  o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE
                    .OFFLINE_RESUME,
                ),
                o("WAWebModelStorage")
                  .initialize()
                  .catch(function (e) {
                    return o(
                      "WAWebBackendEventBus",
                    ).BackendEventBus.triggerStorageInitializationError(e);
                  })
                  .then(function () {
                    return (_ || (_ = n("Promise"))).all([
                      o(
                        "WAWebABPropsUpdateFromStorage",
                      ).updateABPropsFromStorage(),
                      o(
                        "WAWebEventSamplingCache",
                      ).updateEventSamplingFromStorage(),
                    ]);
                  })
                  .then(function () {
                    (o(
                      "WAWebBackendEventBus",
                    ).BackendEventBus.triggerAbPropsLoaded(),
                      o("WAWebInitFromStorage").restoreImportantMetaData());
                  })
                  .then(
                    n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                      var e = function () {
                          return (
                            o("WAWebPageLoadLogging").startPageLoadQplMeasure(
                              "lidCacheWarmup",
                            ),
                            o("WAWebApiContact")
                              .warmUpAllLidPnMappings()
                              .then(function (e) {
                                return o(
                                  "WAWebPageLoadLogging",
                                ).endPageLoadQplMeasure("lidCacheWarmup");
                              })
                          );
                        },
                        t = o("WAWebBlocklistMigration").applyBlocklistV2Rules()
                          ? (_ || (_ = n("Promise"))).resolve()
                          : o("WAWebBackendApi").frontendSendAndReceive(
                              "restoreBlocklist",
                            );
                      yield (_ || (_ = n("Promise"))).all([
                        o("WAWebBackendApi").frontendSendAndReceive(
                          "restoreOptOutList",
                          {},
                        ),
                        e(),
                        t,
                      ]);
                    }),
                  )
                  .then(function () {
                    (o("WAWebPushNotificationsOfflineBbApi").setStartCommsT(),
                      o("WAWebPageLoadLogging").endPageLoadQplMeasure(
                        "launchSocket",
                      ),
                      o("WAWebStartBackend").startBackend());
                  }))
              : (o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[socket] launchSocket for registration",
                    ])),
                ),
                o("WAWebWamMemoryStat").setCurrentMemoryScenario(
                  o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE
                    .INITIAL_PAIRING,
                ),
                o(
                  "WAWebWamOfflineResumeReporter",
                ).OfflineResumeReporter.setIsInitialSync(),
                o(
                  "WAWebWaitForInitialChatsSynced",
                ).initWaitForInitialChatsSynced(),
                (_ || (_ = n("Promise")))
                  .all([
                    o("WAWebRegistration").refreshNoiseCredentials(),
                    o("WAWebRegistration").refreshSignalCredentials(),
                  ])
                  .then(function () {
                    (o("WAWebPageLoadLogging").endPageLoadQplMeasure(
                      "launchSocket",
                    ),
                      o(
                        "WAWebLaunchSocketUtils",
                      ).startCommsAndHandleRequests());
                  }));
          })
      );
    }
    function y() {
      o("WALogger").LOG(
        p ||
          (p = babelHelpers.taggedTemplateLiteralLoose([
            "[storage] send schema versions to fts worker",
          ])),
      );
      var e = o("WAWebSchemaVersions").getSchemaVersions();
      (o("WAWebInvocationInterface").get().setSchemaVersions(e),
        o("WAWebBackendWorkerClient")
          .getBackendWorkerBridge()
          .then(function (t) {
            return t.fireAndForget("database", "initDb", { versionsToSet: e });
          }));
    }
    l.launchSocket = h;
  },
  98,
);
