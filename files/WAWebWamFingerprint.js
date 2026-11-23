__d(
  "WAWebWamFingerprint",
  [
    "WAWebBrowserFeatures",
    "WAWebDeviceFeatures",
    "WAWebExternalInjectedSources",
    "WAWebFPUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      return babelHelpers.extends(
        {
          webdriver: self.navigator.webdriver,
          browserEngine: o("WAWebFPUtils").DETECTED_BROWSER_ENGINE,
        },
        await r("WAWebBrowserFeatures")(),
        r("WAWebExternalInjectedSources")(),
        o("WAWebDeviceFeatures").getDeviceFeatures(),
      );
    }
    l.default = e;
  },
  98,
);
