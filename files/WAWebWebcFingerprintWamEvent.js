__d(
  "WAWebWebcFingerprintWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumBrowserEngineName",
    "WAWebWamEnumPlatformName",
    "WAWebWamEnumWebcWindowNavigatorWebdriverType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebcFingerprint: [
            1704,
            {
              audioFingerprint: [50, e.TYPES.STRING],
              automationSignals: [51, e.TYPES.STRING],
              batteryLevel: [49, e.TYPES.INTEGER],
              browserEngine: [
                26,
                o("WAWebWamEnumBrowserEngineName").BROWSER_ENGINE_NAME,
              ],
              chromeStructure: [52, e.TYPES.STRING],
              connectionRtt: [37, e.TYPES.INTEGER],
              cpuMake: [38, e.TYPES.STRING],
              deviceMemory: [39, e.TYPES.STRING],
              extentionIds: [27, e.TYPES.STRING],
              externalSources: [36, e.TYPES.STRING],
              gpuMake: [40, e.TYPES.STRING],
              hasChrome: [28, e.TYPES.BOOLEAN],
              hasTaskbar: [29, e.TYPES.BOOLEAN],
              hasWebShare: [30, e.TYPES.BOOLEAN],
              historyLength: [41, e.TYPES.INTEGER],
              mimeTypeCount: [31, e.TYPES.INTEGER],
              notificationPermission: [32, e.TYPES.BOOLEAN],
              pdfViewerEnabled: [33, e.TYPES.BOOLEAN],
              peripherals: [42, e.TYPES.STRING],
              permissionsConsistency: [53, e.TYPES.STRING],
              platformEstimate: [
                34,
                o("WAWebWamEnumPlatformName").PLATFORM_NAME,
              ],
              pluginCount: [35, e.TYPES.INTEGER],
              screenResolution: [43, e.TYPES.STRING],
              sessionStorageLength: [44, e.TYPES.INTEGER],
              timezone: [45, e.TYPES.STRING],
              touchPresence: [46, e.TYPES.BOOLEAN],
              viewportSize: [47, e.TYPES.STRING],
              waUlCookie: [48, e.TYPES.STRING],
              webcCanvasFingerprint: [25, e.TYPES.STRING],
              webcWebglFingerprint: [24, e.TYPES.STRING],
              webcWebglRenderer: [23, e.TYPES.STRING],
              webcWebglVendor: [22, e.TYPES.STRING],
              webcWindowNavigatorWebdriver: [
                21,
                o("WAWebWamEnumWebcWindowNavigatorWebdriverType")
                  .WEBC_WINDOW_NAVIGATOR_WEBDRIVER_TYPE,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WebcFingerprint: [] },
      );
    l.WebcFingerprintWamEvent = s;
  },
  98,
);
