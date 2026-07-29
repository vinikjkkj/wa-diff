__d(
  "WAWebUserPrefsScreenLockMainThread",
  ["WAWebUserPrefsScreenLock", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = {
      getScreenLockEnabled: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebUserPrefsScreenLock").getScreenLockEnabled();
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      getScreenLockIterations: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebUserPrefsScreenLock").getScreenLockIterations();
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      getScreenLockIvString: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebUserPrefsScreenLock").getScreenLockIvString();
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      getScreenLockSalt: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebUserPrefsScreenLock").getScreenLockSalt();
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      setScreenLockIterations: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebUserPrefsScreenLock").setScreenLockIterations(e);
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      setScreenLockIvString: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebUserPrefsScreenLock").setScreenLockIvString(e);
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      setScreenLockSalt: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebUserPrefsScreenLock").setScreenLockSalt(e);
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
    };
    l.userPrefsScreenLockMainThread = e;
  },
  98,
);
