__d(
  "WAWebUserPrefsMultiDeviceMainThread",
  ["WAWebUserPrefsMultiDevice", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = {
      getNoiseInfo: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebUserPrefsMultiDevice").getNoiseInfo();
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      getNoiseInfoIv: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebUserPrefsMultiDevice").getNoiseInfoIv();
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      setNoiseInfo: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebUserPrefsMultiDevice").setNoiseInfo(e);
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      setNoiseInfoIv: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebUserPrefsMultiDevice").setNoiseInfoIv(e);
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
    };
    l.userPrefsMultiDeviceMainThread = e;
  },
  98,
);
