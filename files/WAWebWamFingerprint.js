__d(
  "WAWebWamFingerprint",
  [
    "WAExternalInjectedSources",
    "WAFPUtils",
    "WAWebBrowserFeatures",
    "WAWebDeviceFeatures",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      return babelHelpers.extends(
        {
          webdriver: self.navigator.webdriver,
          browserEngine: o("WAFPUtils").DETECTED_BROWSER_ENGINE,
        },
        await r("WAWebBrowserFeatures")(),
        r("WAExternalInjectedSources")(),
        r("WAWebDeviceFeatures")(),
      );
    }
    l.default = e;
  },
  98,
);
