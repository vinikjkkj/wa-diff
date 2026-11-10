__d(
  "WAWebAppBootstrap",
  [
    "WAGetUrlSpoofChecksWasm",
    "WAJids",
    "WALogger",
    "WAWap",
    "WAWebABPropsCache",
    "WAWebAppSwInitializer",
    "WAWebBackendWorkerInitState",
    "WAWebBrLastUsedPaymentMethodCache",
    "WAWebBrokerBackendInterface",
    "WAWebBuildConstants",
    "WAWebCacheStoreGatingUtil",
    "WAWebClientFeatureFlags",
    "WAWebConfigureWindowEvents",
    "WAWebCrashAnnotations",
    "WAWebDebugSetup",
    "WAWebDeleteGuestSessionOnWebLoad",
    "WAWebDesktopUpsellUtils",
    "WAWebEmojiKeywordToUnicode",
    "WAWebEnvironment",
    "WAWebEventSamplingCache",
    "WAWebFrontendL10nHelpers",
    "WAWebGlobals",
    "WAWebHandlePreviousLogout",
    "WAWebImagineActionMediaInputLogging",
    "WAWebInfraErrorLogger",
    "WAWebInvocationInterface",
    "WAWebKeyboardShortcuts",
    "WAWebLoggerOnError",
    "WAWebLoginBounceGuard",
    "WAWebLoomStuckTraceEviction",
    "WAWebMainThreadLogger",
    "WAWebMetricsAttributionObservers",
    "WAWebODS",
    "WAWebPageLoadLoggingImpl",
    "WAWebPrefetchHatchDetailsOnLogin",
    "WAWebRunInTransaction",
    "WAWebStorageErrorHandlingUtils",
    "WAWebSuspiciousLinkCacheRefresh",
    "WAWebSuspiciousLinkMetrics",
    "WAWebSuspiciousLinkWam",
    "WAWebSyncdUploadFatalErrorMetric",
    "WAWebTransitions",
    "WAWebUim",
    "WAWebUserPrefsBase",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMeUser",
    "WAWebVCCssBgScanChildrenFirst",
    "WAWebWam",
    "WAWebWamPageLoadReporter",
    "WAWebWamWorkerSpecificEvents",
    "WAWebWidToJid",
    "WAWebWindowsHybridBridgeInitiator",
    "WDSShortcutResolver",
    "asyncToGeneratorRuntime",
    "cr:13019",
    "cr:17219",
    "cr:17677",
    "cr:34988",
    "cr:5203",
    "getErrorSafe",
    "gkx",
    "initWAWebPlatformWebPage",
    "justknobx",
    "velocity-animate",
    "velocity-animate-ui",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = (e = n("cr:13019")) != null ? e : {},
      p = m.reportPotentialWebDataLoss,
      _ = null;
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            _ != null ||
              (o("WAWebMainThreadLogger").initializeWAWebMainThreadLogger(),
              o("WAWebSuspiciousLinkMetrics").configureSuspiciousLinkMetrics(
                "main",
                o("WAWebSuspiciousLinkWam").commitSuspiciousLinkMetric,
              ),
              r("justknobx")._("7345") &&
                (o(
                  "WAWebSuspiciousLinkCacheRefresh",
                ).initSuspiciousLinkCacheRefresh(),
                o("WAGetUrlSpoofChecksWasm")
                  .preloadSuspiciousHostChecks()
                  .then(
                    o("WAWebBackendWorkerInitState")
                      .recordInitSuspiciousHostChecksModule,
                  )
                  .catch(function (e) {
                    (o("WAWebSuspiciousLinkMetrics").recordSuspiciousLinkMetric(
                      "init-exception",
                    ),
                      o("WALogger")
                        .ERROR(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "Host-check initialization failed",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs("suspicious-host-checks-init-failed"));
                  })),
              (_ = h())),
            _
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e, t, a, i;
          (r("WAWebODS").incr("web.app.bootstrap"),
            n("cr:5203") == null || n("cr:5203")(),
            o("WDSShortcutResolver").registerWDSShortcutResolver(
              o("WAWebKeyboardShortcuts").getWDSShortcuts,
            ),
            o("WAWebInfraErrorLogger").addListenerToErrorPubSub(),
            (window.onerror = o("WAWebLoggerOnError").onErrorHandler),
            (window.onunhandledrejection =
              o("WAWebLoggerOnError").onUnhandledPromiseRejection),
            r("initWAWebPlatformWebPage")(),
            o(
              "WAWebSyncdUploadFatalErrorMetric",
            ).initialiseFatalErrorMetricUploading(),
            o("WAWebCrashAnnotations").annotateCrashWithRecentLoads(),
            o("WAWebCrashAnnotations").annotateCrashWithPlatform(),
            yield o(
              "WAWebDeleteGuestSessionOnWebLoad",
            ).maybeDeleteGuestSessionOnWebLoad(),
            yield o("WAWebHandlePreviousLogout").handlePreviousLogoutFailures(),
            o("WAWebLoginBounceGuard").resetLoginBounceCount(),
            o("WAWebPageLoadLoggingImpl").setPageLoadLoggingImpl(),
            o("WAWebABPropsCache").initializeABPropsCache(),
            o("WAWebClientFeatureFlags").overwriteDebugFeatures());
          var l =
              (e = n("cr:17219")) == null
                ? void 0
                : e.getWindowsBridge(
                    r("WAWebWindowsHybridBridgeInitiator").WAWebAppBootstrap,
                  ),
            s = (t = n("cr:34988")) != null ? t : {},
            m = s.initializeWindowsSettingChangeHandlers;
          (m == null || m(),
            r("WAWebEnvironment").isWindows &&
              o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
                o("WAWebUserPrefsKeys").UserPrefs
                  .WindowsIsAdaptiveLayoutEnabled,
                !0,
              ),
            l == null || (a = l.abProps) == null || a.initialize(),
            o("WAWebEventSamplingCache").initializeEventSamplingCache(),
            o("WAWebWam").initWamRuntime(),
            l == null || (i = l.wam) == null || i.initialize(),
            o(
              "WAWebMetricsAttributionObservers",
            ).initializeMetricsAttributionObservers(),
            o("WAWebLoomStuckTraceEviction").initWebLoomStuckTraceEviction(),
            o("WAWebVCCssBgScanChildrenFirst").initVCCssBgScanChildrenFirst(),
            n("WAWebWamWorkerSpecificEvents"),
            o("WAWebWamPageLoadReporter").exeTimer.start(),
            (window.Velocity = n("velocity-animate")),
            n("velocity-animate-ui"),
            n("WAWebTransitions").registerEffects(),
            o("WAWebInvocationInterface").set(r("WAWebBrokerBackendInterface")),
            o("WAWebDebugSetup").setupDebugGlobal(),
            o("WAWebConfigureWindowEvents").configureWindowEvents());
          try {
            o("WAWebEmojiKeywordToUnicode").updateEmojiTrie();
          } catch (e) {
            var _ = r("getErrorSafe")(e);
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[emoji-trie] EmojiKeywordToUnicode setup failed: ",
                    ", stack: ",
                    "",
                  ])),
                e,
                _.stack,
              )
              .sendLogs(
                "[emoji-trie] EmojiKeywordToUnicode setup failed: " + _.message,
              );
          }
          (o("WAWebFrontendL10nHelpers").extendWAWebLocalePrefCookieTtl(),
            o(
              "WAWebFrontendL10nHelpers",
            ).mungeWAWebLocaleOverrideFromUrlIfNecessary(),
            o("WAWebWamPageLoadReporter").exeTimer.end(),
            r("gkx")("16539") && o("WAWap").enableXMLFormat(),
            o(
              "WAWebDesktopUpsellUtils",
            ).isWebUserOnSupportedWindowsOSForUWPAsync());
          var f = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
            g = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1),
            h = o("WAWebWidToJid").widToMyJids(f);
          (o("WAWebGlobals").setGlobals({
            jidUtils: o("WAJids").createJidUtils({ platform: "whatsapp" }),
            myJids: h,
            lidDeviceJid: g == null ? void 0 : g.toString(),
            runInTransaction: o("WAWebRunInTransaction").runInTransaction,
          }),
            (h != null || g != null) &&
              o("WAWebBackendWorkerInitState").resolveJidsReady(),
            o("WAWebCacheStoreGatingUtil").initStorageOptimizationFlags(),
            o("WAWebAppSwInitializer").initializeSw({
              swScriptPath: "/sw.js",
              swScope: "/",
            }),
            o("WAWebStorageErrorHandlingUtils").persistAppReloadMarker(),
            r("WAWebEnvironment").isWindows &&
              !o("WAWebUserPrefsMeUser").hasLoggedIn() &&
              (p == null || p()),
            o("WAWebUim").setupUimListeners(),
            o(
              "WAWebPrefetchHatchDetailsOnLogin",
            ).initHatchDetailsPrefetchOnLogin(),
            o(
              "WAWebBrLastUsedPaymentMethodCache",
            ).initLastUsedBrPaymentMethodCacheLifecycle(),
            o(
              "WAWebImagineActionMediaInputLogging",
            ).initImagineActionMediaInputLogging(),
            n("cr:17677") == null || n("cr:17677").init(),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[app] bootstrap done",
                ])),
            ),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[app] version: ",
                  "",
                ])),
              o("WAWebBuildConstants").VERSION_STR,
            ));
        })),
        y.apply(this, arguments)
      );
    }
    l.bootstrapApp = f;
  },
  98,
);
