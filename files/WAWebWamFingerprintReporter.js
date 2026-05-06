__d(
  "WAWebWamFingerprintReporter",
  [
    "WAWebWamEnumWebcWindowNavigatorWebdriverType",
    "WAWebWamFingerprint",
    "WAWebWebcFingerprintWamEvent",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e === !0
        ? o("WAWebWamEnumWebcWindowNavigatorWebdriverType")
            .WEBC_WINDOW_NAVIGATOR_WEBDRIVER_TYPE.TRUE
        : e === !1
          ? o("WAWebWamEnumWebcWindowNavigatorWebdriverType")
              .WEBC_WINDOW_NAVIGATOR_WEBDRIVER_TYPE.FALSE
          : o("WAWebWamEnumWebcWindowNavigatorWebdriverType")
              .WEBC_WINDOW_NAVIGATOR_WEBDRIVER_TYPE.UNDEFINED;
    }
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield r("WAWebWamFingerprint")(),
            n = {
              webcWindowNavigatorWebdriver: e(t.webdriver),
              browserEngine: t.browserEngine,
              hasChrome: t.hasChrome,
              hasTaskbar: t.hasTaskbar,
              hasWebShare: t.hasWebShare,
              mimeTypeCount: t.mimeTypeCount,
              notificationPermission: t.hasNotificationPermission,
              pdfViewerEnabled: t.isPDFViewerEnabled,
              pluginCount: t.pluginCount,
              platformEstimate: t.platformEstimate,
              extentionIds: t.extensionIds,
              externalSources: t.externalSources,
              historyLength: t.historyLength,
              viewportSize: t.viewPortSize,
              cpuMake: t.cpuPlatform,
              deviceMemory: t.deviceMemory,
              screenResolution: t.screenResolution,
              connectionRtt: t.connectionRoundTripTime,
              touchPresence: t.touchPresence,
              sessionStorageLength: t.sessionStorageLength,
              webcCanvasFingerprint: t.canvasFingerprint,
              gpuMake: t.gpuMake,
              timezone: t.timezone,
              webcWebglFingerprint: t.webglFingerprint,
              automationSignals: t.automationSignals,
              chromeStructure: t.chromeStructure,
              foreignDbList: t.foreignDbList,
            },
            a = new (o("WAWebWebcFingerprintWamEvent").WebcFingerprintWamEvent)(
              n,
            );
          a.commit();
        })),
        u.apply(this, arguments)
      );
    }
    l.logFingerprintToWam = s;
  },
  98,
);
