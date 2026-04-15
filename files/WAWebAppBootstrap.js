__d(
  "WAWebAppBootstrap",
  [
    "WACryptoLibraryConfig",
    "WAJids",
    "WALogger",
    "WAWap",
    "WAWeb-modernizr",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebAppSwInitializer",
    "WAWebBrokerBackendInterface",
    "WAWebBuildConstants",
    "WAWebCacheStoreGatingUtil",
    "WAWebClientFeatureFlags",
    "WAWebConfigureWindowEvents",
    "WAWebDebugSetup",
    "WAWebDesktopUpsellUtils",
    "WAWebEmojiKeywordToUnicode",
    "WAWebEnvironment",
    "WAWebEventSamplingCache",
    "WAWebFrontendL10nHelpers",
    "WAWebGlobals",
    "WAWebHandlePreviousLogout",
    "WAWebInfraErrorLogger",
    "WAWebInvocationInterface",
    "WAWebKeyboardShortcuts",
    "WAWebLodashMemoizeCache",
    "WAWebLogger",
    "WAWebLoggerOnError",
    "WAWebMetricsAttributionObservers",
    "WAWebPageLoadLoggingImpl",
    "WAWebRunInTransaction",
    "WAWebSafari14Fix",
    "WAWebStorageErrorHandlingUtils",
    "WAWebSyncdUploadFatalErrorMetric",
    "WAWebTransitions",
    "WAWebUA",
    "WAWebUim",
    "WAWebUserPrefsMeUser",
    "WAWebWam",
    "WAWebWamPageLoadReporter",
    "WAWebWamWorkerSpecificEvents",
    "WAWebWidToJid",
    "WDSTooltipShortcutResolver",
    "asyncToGeneratorRuntime",
    "cr:13019",
    "cr:17219",
    "cr:2015",
    "cr:34988",
    "cr:5203",
    "cr:6448",
    "getErrorSafe",
    "gkx",
    "initWAWebPlatformWebPage",
    "nullthrows",
    "velocity-animate",
    "velocity-animate-ui",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = (e = n("cr:13019")) != null ? e : {},
      m = d.reportPotentialWebDataLoss,
      p = null;
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (p != null || (p = g()), p);
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e, t, a, i;
          (n("cr:6448") == null || n("cr:6448").incr("web.app.bootstrap"),
            n("cr:5203") == null || n("cr:5203")(),
            o("WAWebLodashMemoizeCache").setupLodashMemoizeCache(),
            o("WAWebLogger").initializeWAWebLogger(),
            o("WDSTooltipShortcutResolver").registerWDSTooltipShortcutResolver(
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
            yield o("WAWebHandlePreviousLogout").handlePreviousLogoutFailures(),
            o("WAWebPageLoadLoggingImpl").setPageLoadLoggingImpl(),
            o("WAWebABPropsCache").initializeABPropsCache(),
            o("WAWebClientFeatureFlags").overwriteDebugFeatures());
          var l = (e = n("cr:17219")) == null ? void 0 : e.getWindowsBridge(),
            d = (t = n("cr:34988")) != null ? t : {},
            p = d.initializeWindowsSettingChangeHandlers;
          (p == null || p(),
            l == null || (a = l.abProps) == null || a.initialize(),
            o("WAWebEventSamplingCache").initializeEventSamplingCache(),
            o("WAWebWam").initWamRuntime(),
            l == null || (i = l.wam) == null || i.initialize(),
            o(
              "WAWebMetricsAttributionObservers",
            ).initializeMetricsAttributionObservers(),
            n("WAWebWamWorkerSpecificEvents"),
            o("WAWebWamPageLoadReporter").exeTimer.start(),
            o("WAWebUA").UA.isSafari &&
              o("WAWebUA").UA.browserVersion.startsWith("13.") &&
              (r("nullthrows")(document.body).className +=
                " text-rendering-bug-fix"),
            n("WAWeb-modernizr"),
            (window.Velocity = n("velocity-animate")),
            n("velocity-animate-ui"),
            n("WAWebTransitions").registerEffects(),
            o("WAWebInvocationInterface").set(r("WAWebBrokerBackendInterface")),
            o("WAWebDebugSetup").setupDebugGlobal(),
            o("WAWebConfigureWindowEvents").configureWindowEvents(),
            yield o("WAWebSafari14Fix").loadUserIdbForBrokenSafariVersion());
          try {
            o("WAWebEmojiKeywordToUnicode").updateEmojiTrie();
          } catch (e) {
            var _ = r("getErrorSafe")(e);
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
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
            r("gkx")("26258") || o("WAWap").enableXMLFormat(),
            o(
              "WAWebDesktopUpsellUtils",
            ).isWebUserOnSupportedWindowsOSForUWPAsync());
          var f = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
            g = o("WAWebWidToJid").widToMyJids(f);
          (o("WAWebGlobals").setGlobals({
            jidUtils: o("WAJids").createJidUtils({ platform: "whatsapp" }),
            myJids: g,
            runInTransaction: o("WAWebRunInTransaction").runInTransaction,
            newClockSkewCalculation: function () {
              return !1;
            },
          }),
            o("WACryptoLibraryConfig").setCryptoLibraryConfig({
              signalFutureMessagesMax: o("WAWebABProps").getABPropConfigValue(
                "web_signal_future_messages_max",
              ),
              S508658AutoAcknowledgeStaleSessions: !0,
              baseKeyCanonicalCheck: !0,
            }),
            o("WAWebCacheStoreGatingUtil").initStorageOptimizationFlags(),
            o("WAWebAppSwInitializer").initializeSw({
              swScriptPath: "/sw.js",
              swScope: "/",
            }),
            o("WAWebStorageErrorHandlingUtils").persistAppReloadMarker(),
            r("WAWebEnvironment").isWindows && f == null && (m == null || m()),
            o("WAWebUim").setupUimListeners(),
            n("cr:2015") == null || n("cr:2015").init(),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[app] bootstrap done",
                ])),
            ),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[app] version: ",
                  "",
                ])),
              o("WAWebBuildConstants").VERSION_STR,
            ));
        })),
        h.apply(this, arguments)
      );
    }
    l.bootstrapApp = _;
  },
  98,
);
