__d(
  "WAWebInitializeWorkerBackend",
  [
    "WAComms",
    "WAGetUrlSpoofChecksWasm",
    "WAGzip",
    "WALogger",
    "WAOpenChatSocket",
    "WAPromiseTimeout",
    "WAWebABPropsCache",
    "WAWebABPropsUpdateFromStorage",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBackendEventBusWorkerCompatible",
    "WAWebBridgeInitialization",
    "WAWebClientPayloadLoginShared",
    "WAWebCrashlog",
    "WAWebEventSamplingCache",
    "WAWebGetMessageCache",
    "WAWebGlobalsInitialize",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebHistorySyncProgress",
    "WAWebIdentityChangeApi",
    "WAWebIdentityChangeApiWorkerCompatible",
    "WAWebInitChatThreadLogging",
    "WAWebInitWaitForEvents",
    "WAWebInitializeCryptoLibrary",
    "WAWebKyberPreKeyStore",
    "WAWebLogoutReasonConstants",
    "WAWebMessageInsertDebugPlaceholder",
    "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
    "WAWebMessageProcessorCache",
    "WAWebMmSignalSharingExpirationWindowWorker",
    "WAWebMobilePlatforms",
    "WAWebOfflineHandler",
    "WAWebOfflineResumeMsgProcessReporter",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebRegisterPassiveTasksForConnect",
    "WAWebRegisterPassiveTasksForConnectWorkerCompatible",
    "WAWebSignalProtocolStore",
    "WAWebSocketLogoutJob",
    "WAWebStartPersistedJobs",
    "WAWebSuspiciousLinkMetrics",
    "WAWebSyncdOrphanWorkerCompatible",
    "WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible",
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumOfflineProcessInterruptReasons",
    "WAWebWamLoginMetricUtils",
    "WAWebWamWorkerOfflineProcessReporter",
    "WAWebWorkerChatSocketPlatformDetails",
    "WAWebWorkerHandleStanza",
    "WAWebWorkerHeadlessApi",
    "WAWebWorkerResumeManager",
    "getErrorSafe",
    "justknobx",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = r("requireDeferred")("WAWebHandleSingleMsg").__setRef(
        "WAWebInitializeWorkerBackend",
      ),
      _ = 300 * 1e3,
      f = 1e3,
      g = {
        registerPassiveTasksForConnect: function () {
          return Promise.resolve();
        },
        shouldConnectAsPassiveMode: function () {
          return Promise.resolve(!1);
        },
      };
    function h(e) {
      return Promise.resolve(o("WAGzip").inflate(e));
    }
    function y(t) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose(["comms change: ", ""])),
        t,
      ),
        t === "connected" &&
          (o("WAComms").startHandlingRequests(),
          o(
            "WAWebWamWorkerOfflineProcessReporter",
          ).WorkerOfflineResumeReporter.logSocketConnect(),
          o(
            "WAWebClientPayloadLoginShared",
          ).incrementSuccessfulLoginCounter()));
    }
    function C(e) {
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "comms optimistic change: ",
            "",
          ])),
        e,
      );
    }
    async function b(e) {
      var t = e === void 0 ? {} : e,
        n = t.onBackendOwned,
        a = t.passiveMode,
        i = a === void 0 ? !1 : a,
        l = t.signal;
      r("justknobx")._("7345") &&
        o("WAGetUrlSpoofChecksWasm")
          .preloadSuspiciousHostChecks()
          .catch(function (e) {
            (o("WAWebSuspiciousLinkMetrics").recordSuspiciousLinkMetric(
              "init-exception",
            ),
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Host-check initialization failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("suspicious-host-checks-init-failed"));
          });
      var s = new (o(
        "WAWebWorkerResumeManager",
      ).OfflineWorkerResumeStageManager)();
      o("WAWebWorkerResumeManager").setActiveOfflineWorkerResumeManager(s);
      var d = !1;
      try {
        if (
          (n == null || n(s),
          o("WAWebRegisterPassiveTasksForConnectWorkerCompatible").setInstance(
            i
              ? o("WAWebRegisterPassiveTasksForConnect")
                  .registerPassiveTasksForConnectMainThread
              : g,
          ),
          (d = await S(s, l)),
          !d)
        )
          return;
        await v(s);
      } catch (e) {
        var m = s.interruptCompletion(r("getErrorSafe")(e));
        throw (
          m &&
            o(
              "WAWebWamWorkerOfflineProcessReporter",
            ).WorkerOfflineResumeReporter.logProcessInterrupted(
              o("WAWebWamEnumOfflineProcessInterruptReasons")
                .OFFLINE_PROCESS_INTERRUPT_REASONS.BACKEND_ERROR,
            ),
          e
        );
      } finally {
        (await o("WAPromiseTimeout")
          .promiseTimeout(
            o("WAWebSuspiciousLinkMetrics").flushSuspiciousLinkMetrics(),
            f,
            "Host-check metrics flush timed out",
          )
          .catch(function (e) {
            o("WALogger")
              .WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Host-check metrics flush unavailable",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }),
          o("WAWebWorkerResumeManager").clearActiveOfflineWorkerResumeManager(
            s,
          ),
          o("WAWebRegisterPassiveTasksForConnectWorkerCompatible").setInstance(
            g,
          ),
          o("WAComms").isCommsInitialized() && o("WAComms").stopComms());
      }
    }
    async function v(e) {
      await o("WAPromiseTimeout").promiseTimeout(
        e.waitForCompletion(),
        _,
        "Offline resume completion timed out",
      );
    }
    async function S(e, t) {
      (o(
        "WAWebMmSignalSharingExpirationWindowWorker",
      ).resetMmSignalSharingExpirationWindowWorker(),
        o(
          "WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible",
        ).setInstance(
          o("WAWebMmSignalSharingExpirationWindowWorker")
            .updateMmSignalSharingExpirationWindowWorker,
        ),
        o("WAWebBackendEventBusWorkerCompatible").setBackendEventBus(
          o("WAWebBackendEventBus").BackendEventBus,
        ),
        o("WAWebHistorySyncProgress").initHistorySyncProgressListeners(),
        o("WAWebCrashlog").registerCrashlogUploadIsUserInExternalBetaFunction(
          o("WAWebUserPrefsGeneral").getWhatsAppWebExternalBetaJoinedIdb,
        ),
        await o("WAWebGlobalsInitialize").initializeGlobals(),
        o("WAWebABPropsCache").initializeABPropsCache(),
        o("WAWebEventSamplingCache").initializeEventSamplingCache(),
        o("WAWebInitWaitForEvents").initOfflineResumeWaitForEvents(),
        await Promise.all([
          o("WAWebABPropsUpdateFromStorage").updateABPropsFromStorage(),
          o("WAWebApiContact").warmUpAllLidPnMappings(),
        ]),
        o("WAWebInitializeCryptoLibrary").initializeCryptoLibrary(
          o("WAWebKyberPreKeyStore").loadKyberKeysForDigest,
        ),
        await o("WAWebEventSamplingCache").updateEventSamplingFromStorage(),
        await o("WAWebSignalProtocolStore").enableMemSignalStore(),
        await o("WAWebInitChatThreadLogging").initChatThreadLogging());
      var n = o("WAWebBridgeInitialization").makeBridge();
      (o("WAWebBackendApi").setApi(n),
        o("WAWebWorkerHeadlessApi").attachHeadlessHandlers(n));
      var a = await o("WAWebUserPrefsGeneral").getLastMobilePlatform();
      if (a == null)
        return (
          o("WALogger").ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[worker] platform not found in UserPrefs.",
              ])),
          ),
          e.completeWithoutOfflineResume(),
          await o("WAWebSocketLogoutJob").socketLogout(
            o("WAWebLogoutReasonConstants").LogoutReason.UnknownCompanion,
          ),
          !1
        );
      (o("WAWebCrashlog").registerCrashlogUploadInformationalLoggingFunction(
        function () {
          return { platform: a };
        },
      ),
        o("WAWebMobilePlatforms").setMobilePlatform(a),
        await o("WAWebStartPersistedJobs").startPersistedJobs(),
        o("WAWebMessageInsertDebugPlaceholderWorkerCompatible").setInstance(
          o("WAWebMessageInsertDebugPlaceholder").maybeInsertDebugPlaceholder,
        ),
        o("WAWebOfflineHandler").OfflineMessageHandler.initState({
          getBlockingStageManager: function () {
            return e;
          },
        }));
      var i = await o(
          "WAWebWorkerChatSocketPlatformDetails",
        ).getChatSocketPlatformDetails(),
        l = {
          healthCheckInterval: 20,
          deadSocketTime: 2e4,
          maxSocketLoopWaitTime: 6e4,
          openChatSocket: function (t) {
            return o("WAOpenChatSocket").openChatSocket(i, t);
          },
          shouldCloseStaleSocket: !0,
          shouldBlockReceivingUntilSuccess: !0,
          handlers: {
            onConnectionChange: y,
            onOptimisticConnectionChange: C,
            onDisconnect: function (t) {
              return o(
                "WAWebBackendEventBus",
              ).BackendEventBus.triggerSocketStreamDisconnected(t);
            },
          },
          maxRetries: Number.MAX_SAFE_INTEGER,
        };
      o("WAWebGetMessageCache").setMessageCache(
        o("WAWebMessageProcessorCache").messageProcessorCache,
      );
      var s = await p.load(),
        u = s.handleSingleMsgImpl;
      return (
        o("WAWebHandleSingleMsgWorkerCompatible").setInstance(u),
        o("WAWebSyncdOrphanWorkerCompatible").setInstance(function () {
          return Promise.resolve();
        }),
        o("WAWebIdentityChangeApiWorkerCompatible").setInstance({
          handleNewIdentity: o("WAWebIdentityChangeApi").handleNewIdentityImpl,
          clearDeviceRecordForIdentityChange: o("WAWebIdentityChangeApi")
            .clearDeviceRecordForIdentityChangeImpl,
        }),
        o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").setInstance(
          o("WAWebOfflineResumeMsgProcessReporter").msgProcessReporter,
        ),
        (t == null ? void 0 : t.aborted) === !0
          ? !1
          : o("WAWebMessageProcessorCache").messageProcessorCache.isFailClosed()
            ? (o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[worker] skip comms start: the message cache failed closed",
                  ])),
              ),
              !1)
            : (o("WAWebWamLoginMetricUtils").markLoginStartT(),
              o("WAComms").startComms(r("WAWebWorkerHandleStanza"), l, h),
              !0)
      );
    }
    l.startBackendWorker = b;
  },
  98,
);
