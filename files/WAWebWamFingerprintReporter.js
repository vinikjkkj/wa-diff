__d(
  "WAWebWamFingerprintReporter",
  [
    "WAWebWamEnumWebcWindowNavigatorWebdriverType",
    "WAWebWamFingerprint",
    "WAWebWebcFingerprintWamEvent",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("WAWebWamFingerprint")(),
            t = {
              webcWindowNavigatorWebdriver:
                e.webdriver === !0
                  ? o("WAWebWamEnumWebcWindowNavigatorWebdriverType")
                      .WEBC_WINDOW_NAVIGATOR_WEBDRIVER_TYPE.TRUE
                  : e.webdriver === !1
                    ? o("WAWebWamEnumWebcWindowNavigatorWebdriverType")
                        .WEBC_WINDOW_NAVIGATOR_WEBDRIVER_TYPE.FALSE
                    : o("WAWebWamEnumWebcWindowNavigatorWebdriverType")
                        .WEBC_WINDOW_NAVIGATOR_WEBDRIVER_TYPE.UNDEFINED,
              browserEngine: e.browserEngine,
              hasChrome: e.hasChrome,
              hasTaskbar: e.hasTaskbar,
              hasWebShare: e.hasWebShare,
              mimeTypeCount: e.mimeTypeCount,
              notificationPermission: e.hasNotificationPermission,
              pdfViewerEnabled: e.isPDFViewerEnabled,
              pluginCount: e.pluginCount,
              platformEstimate: e.platformEstimate,
              extentionIds: e.extensionIds,
              externalSources: e.externalSources,
              historyLength: e.historyLength,
              viewportSize: e.viewPortSize,
              cpuMake: e.cpuPlatform,
              deviceMemory: e.deviceMemory,
              screenResolution: e.screenResolution,
              connectionRtt: e.connectionRoundTripTime,
              touchPresence: e.touchPresence,
              sessionStorageLength: e.sessionStorageLength,
              webcCanvasFingerprint: e.canvasFingerprint,
              gpuMake: e.gpuMake,
              timezone: e.timezone,
              webcWebglFingerprint: e.webglFingerprint,
              automationSignals: e.automationSignals,
              chromeStructure: e.chromeStructure,
            },
            n = new (o("WAWebWebcFingerprintWamEvent").WebcFingerprintWamEvent)(
              t,
            );
          n.commit();
        })),
        s.apply(this, arguments)
      );
    }
    l.logFingerprintToWam = e;
  },
  98,
);
