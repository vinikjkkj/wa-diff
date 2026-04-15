__d(
  "WAWebWamFingerprint",
  [
    "WAExternalInjectedSources",
    "WAFPUtils",
    "WAWebBrowserFeatures",
    "WAWebDeviceFeatures",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return babelHelpers.extends(
            {
              webdriver: self.navigator.webdriver,
              browserEngine: o("WAFPUtils").DETECTED_BROWSER_ENGINE,
            },
            yield r("WAWebBrowserFeatures")(),
            r("WAExternalInjectedSources")(),
            r("WAWebDeviceFeatures")(),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.default = e;
  },
  98,
);
